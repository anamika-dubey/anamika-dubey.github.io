---
layout: page
permalink: /publications/
title: publications
description: Research publications by Dr. Anamika Dubey and collaborators
nav: true
nav_order: 3
---
<!-- _pages/publications.md -->
See [Anamika Dubey's Google Scholar profile](https://scholar.google.com/citations?user=y-3RPK0AAAAJ&hl=en) for citation information.

{% include publication_filters.html %}

<p id="publication-empty" class="publication-empty" hidden>No publications match your search and member selections. Try a shorter search or clear the filters.</p>

<div class="publications" id="publication-list">

{% bibliography -f {{ site.scholar.bibliography }} %}

</div>

<script src="{{ '/assets/js/publication-search.js' | relative_url }}" defer></script>
