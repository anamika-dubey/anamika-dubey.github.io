/* Compact, progressive enhancement for the complete lab news archive. */
(() => {
  "use strict";
  const controls = document.getElementById("news-filters");
  if (!controls) return;
  const normalize = value => value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  const parse = value => { try { return JSON.parse(value) || []; } catch (_) { return []; } };
  const rows = Array.from(document.querySelectorAll("[data-news-item]")).map(node => ({
    node, people: parse(node.dataset.newsPeople), types: parse(node.dataset.newsTypes), years: [node.dataset.newsYear],
    text: normalize(node.textContent + " " + node.dataset.newsPeople + " " + node.dataset.newsTypes)
  }));
  const search = document.getElementById("news-search");
  const reset = document.getElementById("news-reset");
  const chips = document.getElementById("news-active-filters");
  const facets = ["people", "types", "years"];
  const selected = Object.fromEntries(facets.map(key => [key, new Set()]));
  const options = {};
  const menus = Array.from(controls.querySelectorAll("details"));
  const words = () => normalize(search.value).split(" ").filter(Boolean);
  function matches(row, omit = null) {
    return words().every(word => row.text.includes(word)) && facets.every(key => {
      if (key === omit || !selected[key].size) return true;
      return key === "people" ? [...selected[key]].every(value => row[key].includes(value)) : [...selected[key]].some(value => row[key].includes(value));
    });
  }
  facets.forEach(key => {
    const values = [...new Set(rows.flatMap(row => row[key]))].sort((a,b) => key === "years" ? b.localeCompare(a) : a.localeCompare(b));
    const fieldset = controls.querySelector(`[data-news-facet="${key}"] fieldset`);
    options[key] = values.map(value => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "checkbox"; input.value = value;
      const text = document.createElement("span");
      label.append(input, text); fieldset.append(label);
      input.addEventListener("change", () => {
        if (input.checked) selected[key].add(value); else selected[key].delete(value);
        update();
      });
      return {value, label, input, text};
    });
  });
  const suggestions = document.getElementById("news-suggestions");
  [...new Set(rows.flatMap(row => [...row.people, ...row.types, ...row.years]))].forEach(value => {
    const option = document.createElement("option"); option.value = value; suggestions.append(option);
  });
  function update() {
    let count = 0;
    rows.forEach(row => { row.node.hidden = !matches(row); if (!row.node.hidden) count++; });
    const active = [...chips.children].filter(button => button.dataset.facet);
    const wanted = facets.flatMap(key => [...selected[key]].map(value => ({key,value})));
    active.forEach(button => {
      if (!selected[button.dataset.facet].has(button.dataset.value)) button.remove();
    });
    wanted.forEach(({key,value}) => {
      if ([...chips.children].some(button => button.dataset.facet === key && button.dataset.value === value)) return;
      const button = document.createElement("button"); button.type = "button";
      button.dataset.facet = key; button.dataset.value = value;
      button.textContent = value + " ×"; button.setAttribute("aria-label", "Remove " + value + " filter");
      button.addEventListener("click", () => {
        const next = button.nextElementSibling || button.previousElementSibling;
        selected[key].delete(value); update(); (next && next.isConnected ? next : search).focus();
      });
      chips.append(button);
    });
    facets.forEach(key => {
      options[key].forEach(option => {
        const total = rows.filter(row => (key === "people" ? matches(row) : matches(row,key)) && row[key].includes(option.value)).length;
        option.input.checked = selected[key].has(option.value);
        option.label.hidden = total === 0 && !option.input.checked;
        option.text.textContent = `${option.value} (${total})`;
      });
      controls.querySelector(`[data-news-facet="${key}"] summary span`).textContent = selected[key].size ? `${selected[key].size} selected` : "All";
    });
    document.getElementById("news-result-count").textContent = `${count} of ${rows.length} updates`;
    document.getElementById("news-empty").hidden = count !== 0;
    reset.disabled = !search.value && !wanted.length;
  }
  menus.forEach(menu => menu.addEventListener("toggle", () => {
    if (menu.open) menus.forEach(other => { if (other !== menu) other.open = false; });
  }));
  document.addEventListener("keydown", event => { if (event.key === "Escape") menus.forEach(menu => { if (menu.open) { menu.open = false; menu.querySelector("summary").focus(); } }); });
  document.addEventListener("click", event => { if (!controls.contains(event.target)) menus.forEach(menu => { menu.open = false; }); });
  search.addEventListener("input", update);
  search.addEventListener("change", update);
  reset.addEventListener("click", () => { search.value = ""; facets.forEach(key => selected[key].clear()); update(); search.focus(); });
  controls.hidden = false;
  update();
})();
