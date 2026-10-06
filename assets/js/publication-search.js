(() => {
  "use strict";

  const controls = document.getElementById("publication-filters");
  const list = document.getElementById("publication-list");
  const memberData = document.getElementById("publication-members-data");
  if (!controls || !list || !memberData) return;

  const normalize = (value) => String(value).normalize("NFKD")
    .replace(/\p{M}/gu, "").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
  const nameKey = (value) => normalize(value).replace(/\s/g, "");
  const members = JSON.parse(memberData.textContent).flatMap((group) => group.members);
  const membersById = new Map(members.map((member) => [member.id, member]));
  const aliases = new Map();
  members.forEach((member) => {
    [member.name, ...member.aliases].forEach((name) => aliases.set(nameKey(name), member.id));
  });

  const records = Array.from(list.querySelectorAll("[data-publication-title]")).map((row) => {
    const authors = row.dataset.publicationAuthors.split("|").map((name) => name.trim()).filter(Boolean);
    const memberIds = new Set(authors.map((name) => aliases.get(nameKey(name))).filter(Boolean));
    const memberNames = Array.from(memberIds).flatMap((id) => {
      const member = membersById.get(id);
      return [member.name, ...member.aliases];
    });
    return {
      item: row.closest("li"), title: row.dataset.publicationTitle, authors, memberIds,
      search: normalize([row.dataset.publicationTitle, row.dataset.publicationVenue,
        row.dataset.publicationYear, ...authors, ...memberNames].join(" ")),
    };
  });
  if (!records.length) return;

  const input = document.getElementById("publication-search");
  const suggestions = document.getElementById("publication-suggestions");
  const reset = document.getElementById("publication-reset");
  const count = document.getElementById("publication-results-count");
  const empty = document.getElementById("publication-empty");
  const selection = document.getElementById("publication-member-selection");
  const checkboxes = Array.from(controls.querySelectorAll('input[type="checkbox"]'));
  const groups = Array.from(list.querySelectorAll("ol.bibliography"));
  const authorFilter = controls.querySelector(".publication-member-filter");
  let selected = new Set();
  let options = [];
  let activeOption = -1;

  members.forEach((member) => {
    const total = records.filter((record) => record.memberIds.has(member.id)).length;
    const label = controls.querySelector(`[data-count-for="${member.id}"]`);
    label.textContent = `(${total})`;
    label.title = `${total} publications in this bibliography`;
  });

  function matchesMembers(record) {
    return Array.from(selected).every((id) => record.memberIds.has(id));
  }

  function closeSuggestions() {
    suggestions.hidden = true;
    input.setAttribute("aria-expanded", "false");
    input.removeAttribute("aria-activedescendant");
    activeOption = -1;
  }

  function updateResults() {
    selected = new Set(checkboxes.filter((box) => box.checked).map((box) => box.value));
    const terms = normalize(input.value).split(/\s+/).filter(Boolean);
    let visible = 0;
    records.forEach((record) => {
      const match = matchesMembers(record) && terms.every((term) => record.search.includes(term));
      record.item.hidden = !match;
      if (match) visible += 1;
    });
    groups.forEach((group) => {
      group.hidden = !Array.from(group.children).some((item) => !item.hidden);
      const heading = group.previousElementSibling;
      if (heading && heading.matches("h2.bibliography")) heading.hidden = group.hidden;
    });
    count.textContent = visible === records.length
      ? `Showing all ${records.length} publications`
      : `Showing ${visible} of ${records.length} publications`;
    empty.hidden = visible !== 0;
    selection.textContent = selected.size ? `${selected.size} selected` : "All members";
    reset.disabled = !input.value && !selected.size;
  }

  function updateSuggestions() {
    const query = normalize(input.value);
    if (query.length < 2) {
      closeSuggestions();
      return;
    }
    const terms = query.split(/\s+/);
    const candidates = new Map();
    function add(label, kind) {
      const normalized = normalize(label);
      if (!terms.every((term) => normalized.includes(term))) return;
      const key = `${kind}:${normalized}`;
      if (!candidates.has(key)) candidates.set(key, {
        label, kind, score: normalized.startsWith(query) ? 0 : 1,
      });
    }
    records.filter(matchesMembers).forEach((record) => {
      add(record.title, "Paper");
      record.authors.forEach((author) => {
        const id = aliases.get(nameKey(author));
        if (id) {
          const member = membersById.get(id);
          // Offer the profile name even when the query uses a published name variant.
          if ([member.name, ...member.aliases].some((name) => terms.every((term) => normalize(name).includes(term)))) {
            candidates.set(`Author:${member.id}`, {label: member.name, kind: "Author", score: 0});
          }
        } else add(author, "Author");
      });
    });
    options = Array.from(candidates.values()).sort((a, b) =>
      a.score - b.score || (a.kind === b.kind ? a.label.localeCompare(b.label) : a.kind.localeCompare(b.kind))
    ).slice(0, 8);
    suggestions.replaceChildren();
    activeOption = -1;
    input.removeAttribute("aria-activedescendant");
    options.forEach((option, index) => {
      const item = document.createElement("li");
      item.id = `publication-suggestion-${index}`;
      item.dataset.index = index;
      item.setAttribute("role", "option");
      item.setAttribute("aria-selected", "false");
      const kind = document.createElement("span");
      kind.className = "publication-suggestion-kind";
      kind.textContent = option.kind;
      const label = document.createElement("span");
      label.textContent = option.label;
      item.append(kind, label);
      suggestions.append(item);
    });
    suggestions.hidden = options.length === 0;
    input.setAttribute("aria-expanded", String(options.length > 0));
  }

  function activate(index) {
    activeOption = (index + options.length) % options.length;
    Array.from(suggestions.children).forEach((item, itemIndex) => {
      item.setAttribute("aria-selected", String(itemIndex === activeOption));
    });
    const item = suggestions.children[activeOption];
    input.setAttribute("aria-activedescendant", item.id);
    item.scrollIntoView({block: "nearest"});
  }

  function choose(index) {
    input.value = options[index].label;
    updateResults();
    input.focus();
    closeSuggestions();
  }

  input.addEventListener("input", () => { updateResults(); updateSuggestions(); });
  input.addEventListener("focus", () => { authorFilter.open = false; updateSuggestions(); });
  input.addEventListener("blur", closeSuggestions);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Escape") { event.preventDefault(); closeSuggestions(); return; }
    if (event.key === "Tab") { closeSuggestions(); return; }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      if (suggestions.hidden) updateSuggestions();
      if (!options.length || suggestions.hidden) return;
      event.preventDefault();
      activate(activeOption === -1 ? (event.key === "ArrowDown" ? 0 : options.length - 1)
        : activeOption + (event.key === "ArrowDown" ? 1 : -1));
    } else if (event.key === "Enter" && !suggestions.hidden && activeOption >= 0) {
      event.preventDefault();
      choose(activeOption);
    }
  });
  suggestions.addEventListener("mousedown", (event) => event.preventDefault());
  suggestions.addEventListener("click", (event) => {
    const option = event.target.closest('[role="option"]');
    if (option) choose(Number(option.dataset.index));
  });
  checkboxes.forEach((box) => box.addEventListener("change", () => {
    updateResults();
    closeSuggestions();
  }));
  document.addEventListener("click", (event) => {
    if (!authorFilter.contains(event.target)) authorFilter.open = false;
  });
  authorFilter.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      authorFilter.open = false;
      authorFilter.querySelector("summary").focus();
    }
  });
  reset.addEventListener("click", () => {
    input.value = "";
    checkboxes.forEach((box) => { box.checked = false; });
    updateResults();
    closeSuggestions();
    input.focus();
  });
  updateResults();
  controls.hidden = false;
})();
