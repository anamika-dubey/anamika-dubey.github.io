---
layout: page
permalink: /teaching/
title: teaching
description: Undergraduate and graduate courses in power systems, reliability, and computational engineering
nav: true
nav_order: 5
---

# Add the corresponding course-specific GitHub Pages URLs below.
# For example: https://YOUR-USERNAME.github.io/EE361/
# Keep a URL blank until the page exists; its link will be hidden.
courses:
  - code: "EE 361"
    title: "Electric Power Systems"
    description: "Fundamentals of electric power systems, including generators, transformers, electric machines, transmission lines, and power-system operation."
    syllabus_url: ""
    materials_url: ""

  - code: "EE 485"
    title: "Electric Power Distribution Systems"
    description: "Analysis, design, and operation of electric distribution networks, with practical modeling and computational tools for modern distribution systems."
    syllabus_url: ""
    materials_url: ""

  - code: "EE 529"
    title: "Power Quality Analysis"
    description: "Graduate-level analysis of power-quality phenomena, modeling techniques, and mitigation methods, supported by programming assignments and projects."
    note: "Previously offered as EE 582.01"
    syllabus_url: ""
    materials_url: ""

  - code: "EE 221"
    title: "Numerical Computing for Engineers"
    description: "Numerical methods for engineering problems, with an emphasis on mathematical foundations and practical implementation through programming."
    syllabus_url: ""
    materials_url: ""

  - code: "EE 582.02"
    title: "Reliability Assessment of Complex Systems"
    description: "Graduate-level methods for quantitative reliability analysis, including generation adequacy and composite power-system reliability assessment."
    syllabus_url: ""
    materials_url: ""

  - code: "EE 483.03"
    title: "Reliability Assessment of Complex Systems"
    description: "Undergraduate introduction to probabilistic reliability modeling and system-level reliability assessment, with applications to electric power distribution."
    syllabus_url: ""
    materials_url: ""
---

<style>
  .teaching-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
    gap: 1rem;
    margin: 1.5rem 0 2.5rem;
  }

  .teaching-card {
    border: 1px solid var(--global-divider-color, #dce0e5);
    background-color: var(--global-card-bg-color, var(--global-bg-color, #fff));
    border-radius: 6px;
    padding: 1.25rem 1.4rem;
    display: flex;
    flex-direction: column;
    min-height: 170px;
  }

  .teaching-card .course-code {
    color: var(--global-theme-color, #b509ac);
    font-size: 0.9rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
  }

  .teaching-card .course-title {
    font-size: 1.2rem !important;
    font-weight: 700 !important;
    line-height: 1.3;
    margin: 0 0 0.55rem !important;
  }

  .teaching-card .course-description {
    font-size: 0.96rem;
    line-height: 1.55;
    margin: 0;
  }

  .teaching-card .course-note {
    font-size: 0.82rem;
    opacity: 0.7;
    margin: 0.5rem 0 0;
  }

  .teaching-card .course-links {
    display: flex;
    gap: 1.2rem;
    flex-wrap: wrap;
    margin-top: auto;
    padding-top: 1rem;
    font-size: 0.91rem;
    font-weight: 600;
  }
</style>

I have developed and taught undergraduate and graduate courses in power systems, electric distribution networks, power quality, reliability, and numerical methods at Washington State University.

<div class="teaching-grid">
{% for course in page.courses %}
  <div class="teaching-card">
    <span class="course-code">{{ course.code }}</span>
    <h3 class="course-title">{{ course.title }}</h3>
    <p class="course-description">{{ course.description }}</p>
    {% if course.note %}<p class="course-note">{{ course.note }}</p>{% endif %}
    {% if course.syllabus_url != blank or course.materials_url != blank %}
    <div class="course-links">
      {% if course.syllabus_url != blank %}
        <a href="{{ course.syllabus_url }}" target="_blank" rel="noopener noreferrer">Syllabus ↗</a>
      {% endif %}
      {% if course.materials_url != blank %}
        <a href="{{ course.materials_url }}" target="_blank" rel="noopener noreferrer">Course materials ↗</a>
      {% endif %}
    </div>
    {% endif %}
  </div>
{% endfor %}
</div>

