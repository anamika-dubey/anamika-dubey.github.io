---
layout: page
permalink: /publications/
title: publications
description: Research publications by Dr. Anamika Dubey and collaborators
reference_url: https://scholar.google.com/citations?user=y-3RPK0AAAAJ&hl=en
reference_label: Google Scholar
reference_title: Anamika Dubey's Google Scholar profile and citation information
nav: true
nav_order: 3
---
<!-- _pages/publications.md -->
{% include publication_filters.html %}

<p id="publication-empty" class="publication-empty" hidden>No publications match these filters. Try a shorter search, clear the filters, or uncheck “Lab-member publications only” to search the full bibliography.</p>

<div class="publications" id="publication-list">

{% bibliography -f {{ site.scholar.bibliography }} %}

</div>

<button id="publication-show-more" class="publication-show-more" type="button" hidden>Show more</button>

<script src="{{ '/assets/js/publication-search.js' | relative_url }}" defer></script>
