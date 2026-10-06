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
  const venueDefinitions = JSON.parse(document.getElementById("publication-venues-data").textContent);
  const venues = new Map();
  function identifyVenue(raw) {
    const name = raw.replace(/\\&/g, "&").replace(/[{}]/g, "").trim() || "Other publications";
    const definition = venueDefinitions.find((venue) => venue.patterns.some((pattern) => normalize(name).includes(normalize(pattern))));
    const label = definition ? definition.label : name;
    const id = normalize(label);
    if (!venues.has(id)) venues.set(id, {id, label, group: definition ? definition.group : "Other venues"});
    return id;
  }

  const records = Array.from(list.querySelectorAll("[data-publication-title]")).map((row) => {
    const authors = row.dataset.publicationAuthors.split("|").map((name) => name.trim()).filter(Boolean);
    const memberIds = new Set(authors.map((name) => aliases.get(nameKey(name))).filter(Boolean));
    const memberNames = Array.from(memberIds).flatMap((id) => {
      const member = membersById.get(id);
      return [member.name, ...member.aliases];
    });
    return {
      item: row.closest("li"), title: row.dataset.publicationTitle, authors, memberIds,
      labMember: Array.from(memberIds).some((id) => id !== "anamika"),
      venueId: identifyVenue(row.dataset.publicationVenue),
      search: normalize([row.dataset.publicationTitle, row.dataset.publicationVenue,
        venues.get(identifyVenue(row.dataset.publicationVenue)).label,
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
  const checkboxes = Array.from(controls.querySelectorAll('.publication-member-filter input[type="checkbox"]'));
  const labOnly = document.getElementById("publication-lab-only");
  const more = document.getElementById("publication-show-more");
  const venueSelection = document.getElementById("publication-venue-selection");
  const venueFilter = controls.querySelector(".publication-venue-filter");
  const groups = Array.from(list.querySelectorAll("ol.bibliography"));
  const authorFilter = controls.querySelector(".publication-member-filter");
  let selected = new Set();
  let selectedVenues = new Set();
  let limit = 20;
  let options = [];
  let activeOption = -1;
  ["Major journals", "Major conferences", "Other venues"].forEach((groupName) => {
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = groupName;
    if (groupName === "Other venues") legend.className = "sr-only";
    const grid = document.createElement("div");
    grid.className = "publication-member-grid";
    Array.from(venues.values()).filter((venue) => venue.group === groupName)
      .sort((a, b) => a.label.localeCompare(b.label)).forEach((venue) => {
        const label = document.createElement("label");
        label.className = "publication-member-option";
        const box = document.createElement("input");
        box.type = "checkbox";
        box.value = venue.id;
        const text = document.createElement("span");
        const total = records.filter((record) => record.venueId === venue.id).length;
        text.textContent = `${venue.label} (${total})`;
        label.append(box, text);
        grid.append(label);
      });
    fieldset.append(legend, grid);
    document.getElementById(groupName === "Other venues" ? "publication-other-venue-list" : "publication-major-venues").append(fieldset);
  });
  const venueCheckboxes = Array.from(venueFilter.querySelectorAll('input[type="checkbox"]'));

  members.forEach((member) => {
    const total = records.filter((record) => record.memberIds.has(member.id)).length;
    const label = controls.querySelector(`[data-count-for="${member.id}"]`);
    label.textContent = `(${total})`;
    label.title = `${total} publications in this bibliography`;
  });

  function matchesMembers(record) {
    return Array.from(selected).every((id) => record.memberIds.has(id));
  }
  function matchesFilters(record) {
    return matchesMembers(record) && (!labOnly.checked || record.labMember)
      && (!selectedVenues.size || selectedVenues.has(record.venueId));
  }

  function closeSuggestions() {
    suggestions.hidden = true;
    input.setAttribute("aria-expanded", "false");
    input.removeAttribute("aria-activedescendant");
    activeOption = -1;
  }

  function updateResults(resetLimit = true) {
    if (resetLimit) limit = 20;
    selected = new Set(checkboxes.filter((box) => box.checked).map((box) => box.value));
    selectedVenues = new Set(venueCheckboxes.filter((box) => box.checked).map((box) => box.value));
    const terms = normalize(input.value).split(/\s+/).filter(Boolean);
    let visible = 0;
    records.forEach((record) => {
      const match = matchesFilters(record) && terms.every((term) => record.search.includes(term));
      record.item.hidden = !match || visible >= limit;
      if (match) visible += 1;
    });
    groups.forEach((group) => {
      group.hidden = !Array.from(group.children).some((item) => !item.hidden);
      const heading = group.previousElementSibling;
      if (heading && heading.matches("h2.bibliography")) heading.hidden = group.hidden;
    });
    count.textContent = `Showing ${Math.min(limit, visible)} of ${visible} ${labOnly.checked ? "lab-member " : ""}publications`;
    more.hidden = visible <= limit;
    more.textContent = `Show ${Math.min(20, Math.max(0, visible - limit))} more`;
    empty.hidden = visible !== 0;
    selection.textContent = selected.size ? `${selected.size} selected` : "All members";
    venueSelection.textContent = selectedVenues.size ? `${selectedVenues.size} selected` : "All venues";
    reset.disabled = !input.value && !selected.size && !selectedVenues.size;
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
    records.filter(matchesFilters).forEach((record) => {
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
  input.addEventListener("focus", () => { authorFilter.open = false; venueFilter.open = false; updateSuggestions(); });
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
  [...checkboxes, ...venueCheckboxes, labOnly].forEach((box) => box.addEventListener("change", () => {
    updateResults();
    closeSuggestions();
  }));
  document.addEventListener("click", (event) => {
    if (!authorFilter.contains(event.target)) authorFilter.open = false;
    if (!venueFilter.contains(event.target)) venueFilter.open = false;
  });
  [authorFilter, venueFilter].forEach((filter) => filter.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      filter.open = false;
      filter.querySelector("summary").focus();
    }
  }));
  authorFilter.addEventListener("toggle", () => { if (authorFilter.open) venueFilter.open = false; });
  venueFilter.addEventListener("toggle", () => { if (venueFilter.open) authorFilter.open = false; });
  more.addEventListener("click", () => {
    const firstNew = records.find((record) => record.item.hidden && matchesFilters(record)
      && normalize(input.value).split(/\s+/).filter(Boolean).every((term) => record.search.includes(term)));
    limit += 20;
    updateResults(false);
    if (firstNew) {
      firstNew.item.tabIndex = -1;
      firstNew.item.focus({preventScroll: true});
      firstNew.item.scrollIntoView({block: "start"});
    }
  });
  reset.addEventListener("click", () => {
    input.value = "";
    [...checkboxes, ...venueCheckboxes].forEach((box) => { box.checked = false; });
    venueFilter.querySelector(".publication-other-venues").open = false;
    [authorFilter, venueFilter].forEach((filter) => { filter.querySelector(".publication-member-list").scrollTop = 0; });
    updateResults();
    closeSuggestions();
    input.focus();
  });
  updateResults();
  controls.hidden = false;
})();
