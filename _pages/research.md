---
layout: page
permalink: /research/
title: research
description: From Risk to Reliable Grid Decisions
nav: true
nav_order: 4
---

<style>
  /* Main page title: Research */
  .post-header .post-title {
    font-size: 2.15rem !important;
    font-weight: 700 !important;
    letter-spacing: -0.02em;
  }

  /* Research introduction heading */
  .research-intro-heading {
    font-size: 1.5rem !important;
    font-weight: 600 !important;
    line-height: 1.35;
    margin-top: 1.75rem;
    margin-bottom: 0.9rem;
  }
</style>

The electric grid faces growing exposure to high-consequence disruptions while becoming increasingly complex to operate and plan. Despite richer observations of weather, outages, and system conditions, a fundamental challenge remains: **how can we translate uncertain and incomplete information into reliable engineering decisions?**

At SCALE Lab, we advance the analytical and computational foundations for addressing this challenge. Our research integrates network physics, empirical evidence of infrastructure vulnerability, and scalable optimization to understand how uncertain conditions affect grid performance and which operational and planning interventions offer measurable benefits.
<div style="overflow: hidden; margin: 0.5rem 0;">
  <img
    src="{{ '/assets/img/research-framework.png' | relative_url }}"
    alt="SCALE Lab research framework connecting data, models, and decisions."
    style="display: block; width: 100%; height: auto; margin-top: -7%; margin-bottom: -7%;"
  >
</div>
Our research spans three interconnected directions:

1. **Physics-Consistent Optimization**  
   Developing accurate and scalable computational methods for network-constrained grid operations and coordination.

2. **Learning Infrastructure Vulnerability**  
   Using observed weather and outage data to characterize hazard-dependent infrastructure risks and their uncertainty.

3. **Risk-Informed Grid Decisions**  
   Translating infrastructure vulnerability and network consequences into effective operational strategies and planning investments.

---
### 1. Physics-Consistent Optimization as a Foundation for Grid Decisions

Reliable grid decisions require optimization methods that respect network physics while remaining computationally tractable at scale. Our research has advanced **three-phase unbalanced optimal power flow (D-OPF)**, network-level approximations and relaxations, and distributed optimization methods for coordinating distributed energy resources and flexible demand.

Our contributions span three connected areas:

<div class="row text-center my-4">

  <div class="col-md-4 mb-3">
    <div class="border rounded p-3 h-100">
      <h5 class="font-weight-bold">Physical Fidelity</h5>
      <p class="mb-0">
        Three-phase unbalanced OPF, network-level formulations,
        and feasibility-aware approximations.
      </p>
    </div>
  </div>

  <div class="col-md-4 mb-3">
    <div class="border rounded p-3 h-100">
      <h5 class="font-weight-bold">Scalable Coordination</h5>
      <p class="mb-0">
        Distributed optimization using reduced network equivalents,
        evaluated on IEEE 123-bus and 8,500-node feeders.
      </p>
    </div>
  </div>

  <div class="col-md-4 mb-3">
    <div class="border rounded p-3 h-100">
      <h5 class="font-weight-bold">Open-Source Tools</h5>
      <p class="mb-0">
        DistOPF: a computational platform for distribution OPF
        formulation, benchmarking, and validation.
      </p>
    </div>
  </div>

</div>

Our work has established computational methods for solving network-constrained optimization problems with improved physical fidelity and scalability. In particular, our distributed optimization methods leverage reduced network equivalents to coordinate resources across large distribution networks. These advances have been demonstrated on benchmark systems containing thousands of nodes and extended to unbalanced multi-phase networks.

**Selected research contributions:** [Unbalanced three-phase OPF (IEEE TPWRS, 2021)](https://doi.org/10.1109/TPWRS.2021.3066146) · [Distributed optimization using network equivalents (IEEE TPWRS, 2021)](https://arxiv.org/abs/2012.02473) · [Scalable renewable energy coordination (IEEE TSTE, 2026)](https://doi.org/10.1109/TSTE.2024.3492976) · [DistOPF open-source software](https://github.com/GRIDAPPSD/distopf)

#### Research Leadership and Funded Programs

Our research is supported through federally funded, industry-sponsored, and national laboratory collaborations, connecting foundational optimization advances with practical grid applications.

- **NSF Cyber-Physical Systems — Lead PI (2022–2026):** Adaptive, human-centric demand-side flexibility coordination at scale. [NSF Award](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2208783)

- **U.S. DOE / PNNL — WSU PI (2016–2027):** Research spanning GridAPPS-D, CITADELS, open-source advanced distribution management systems, and physics-informed electromagnetic transient analysis for rapid load growth.

- **Industry and Foundation Research — Lead PI (2019–2022):** Robust distributed control of industrial microgrids (Schweitzer Engineering Laboratories) and market mechanisms for coordinating residential flexibility (Alfred P. Sloan Foundation).

---

## 2. Data-Driven Infrastructure Vulnerability and Risk Modeling

Resilience assessments often rely on assumed component-failure probabilities that do not adequately capture how infrastructure responds to actual environmental hazards. Our research addresses this limitation by **learning infrastructure vulnerability from observed disruptions**. We combine weather, outage, and operating data with statistical and Bayesian inference to estimate how failure likelihood, severity, and duration vary across hazards, geographic regions, and infrastructure characteristics.

Our research has advanced three complementary areas:

<div class="row text-center my-4">

  <div class="col-md-4 mb-3">
    <div class="border rounded p-3 h-100">
      <h5 class="font-weight-bold">Weather–Outage Modeling</h5>
      <p class="mb-0">
        Statistical and Bayesian models of weather-dependent outages,
        including compound effects of wind, temperature, and precipitation.
      </p>
    </div>
  </div>

  <div class="col-md-4 mb-3">
    <div class="border rounded p-3 h-100">
      <h5 class="font-weight-bold">Infrastructure Fragility</h5>
      <p class="mb-0">
        Hazard-conditioned fragility models that account for feeder topology,
        voltage class, geographic variation, and infrastructure characteristics.
      </p>
    </div>
  </div>

  <div class="col-md-4 mb-3">
    <div class="border rounded p-3 h-100">
      <h5 class="font-weight-bold">Extreme-Weather Performance</h5>
      <p class="mb-0">
        Probabilistic modeling of generator failures, capacity derating,
        and outage duration under extreme winter conditions.
      </p>
    </div>
  </div>

</div>

**Our results demonstrate why infrastructure vulnerability cannot be represented by a single failure probability.** Weather–outage studies across geographically distinct regions reveal the importance of compound weather conditions. More recent work develops topology- and voltage-aware fragility curves, distinguishing main feeders from laterals and identifying differences in vulnerability across voltage classes and geographic regions. We have also extended probabilistic vulnerability modeling to gas-fired generation, jointly estimating winter-weather-driven failure probability, available capacity, and event duration.

To make these analyses reproducible, our group contributed to the **Weather-Outage Resilience Dataset (WORD)**, an open data-processing framework that integrates weather and electricity outage records for systematic resilience research.

**Selected research contributions:** [Topology- and voltage-aware fragility (IEEE PES GM, 2026)](https://doi.org/10.1109/PESGM58988.2026.11693233) · [Statistical and Bayesian resilience modeling (2025 preprint)](https://arxiv.org/abs/2511.03043) · [Extreme-winter generator vulnerability (2026 preprint)](https://arxiv.org/abs/2610.04368) · [WORD data-processing repository](https://github.com/arslangit1/eagleiDataProcessor)

#### Research Leadership and Funded Programs

This research brings together power systems, climate and weather analysis, statistical learning, and infrastructure resilience through multi-institutional collaborations.

- **NSF RAISE — Co-PI (2025–2030):** Wildfire-resilient power infrastructure planning, integrating technical resilience with energy and health equity.

- **NSF Strengthening American Infrastructure — WSU PI (2023–2027):** Modeling extreme-cold impacts on energy infrastructure resilience and equity. [NSF Award](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2324544)

- **Power Systems Engineering Research Center (PSERC) — WSU PI (2024–2026):** Data-driven resilience modeling, prediction, and enhancement.

---

### 3. From Infrastructure Vulnerability to Risk-Informed Grid Decisions

Understanding infrastructure vulnerability is only the first step. The more consequential question is **how system operators and planners should respond to uncertain disruptions**. Our research develops risk-informed optimization frameworks that connect hazard-dependent vulnerability, network constraints, and feasible system responses to decisions about infrastructure investments, resource allocation, and restoration.

Our contributions span three interconnected areas:

<div class="row text-center my-4">

  <div class="col-md-4 mb-3">
    <div class="border rounded p-3 h-100">
      <h5 class="font-weight-bold">Risk-Informed Planning</h5>
      <p class="mb-0">
        Joint optimization of infrastructure hardening,
        distributed generation, switching, and restoration
        under uncertainty and tail-risk preferences.
      </p>
    </div>
  </div>

  <div class="col-md-4 mb-3">
    <div class="border rounded p-3 h-100">
      <h5 class="font-weight-bold">Scalable Stochastic Optimization</h5>
      <p class="mb-0">
        SPAR-OPF: scenario-efficient planning demonstrated
        on a 9,500-node distribution network
        with 1,200 uncertainty scenarios.
      </p>
    </div>
  </div>

  <div class="col-md-4 mb-3">
    <div class="border rounded p-3 h-100">
      <h5 class="font-weight-bold">Regional Grid Analytics</h5>
      <p class="mb-0">
        Pacific Northwest research testbed:
        approximately 3,823 buses, 5,100 transmission lines,
        and 8,760 hourly operating states.
      </p>
    </div>
  </div>

</div>

**Risk-informed resilience planning.** Our research demonstrates that the value of resilience investments depends on both the hazards being managed and the system's ability to respond after disruptions. By integrating risk measures such as Conditional Value-at-Risk (CVaR) with network-constrained operations, we evaluate trade-offs among infrastructure hardening, distributed generation, and operational flexibility. In a representative study, changing risk preferences under the same $1 million investment budget shifted the optimal portfolio from one to five distributed generators while reducing switching investments. These results demonstrate why resilience investments must be evaluated through their system-level consequences rather than component reliability alone.

**Scalable stochastic optimization.** To address the computational burden of scenario-based planning, our group developed **SPAR-OPF**, which replaces explicit scenario enumeration with compact, separable approximations of expected operating costs. The framework learns these approximations from sampled OPF solutions and their sensitivities and provides statistical bounds for assessing solution quality. On a 9,500-node distribution system with 1,200 scenarios, SPAR-OPF produced high-quality solutions in approximately five minutes, with reported statistical bound gaps below 3% in the larger-sample experiments, while conventional extensive formulations and progressive hedging could not solve the corresponding problem in the reported computational environment.

**Extending decisions to regional power systems.** We are expanding these methods from individual distribution feeders to regional transmission networks, where generation availability, transmission constraints, environmental hazards, and rapidly growing electricity demand interact. Our group has developed a planning-scale Pacific Northwest transmission research testbed spanning Washington, Oregon, Idaho, and part of Montana, with 8,760 hourly operating states. Current studies examine the network-wide consequences of localized disruptions, including wildfires, and evaluate how resource flexibility, transmission constraints, and infrastructure upgrades influence the region's ability to accommodate new electricity demand.

**Selected research contributions:** [Risk-Based Resilience Planning (IEEE TSTE, 2023)](https://doi.org/10.1109/TSTE.2022.3220561) · [SPAR-OPF: Scalable Stochastic Optimization (2025 preprint)](https://arxiv.org/abs/2504.13933) · [Stochastic DG Siting and Sizing (EPSR, 2026)](https://doi.org/10.1016/j.epsr.2026.113689)

#### Research Leadership and Funded Programs

This research program integrates foundational stochastic optimization, network-level resilience planning, and large-scale grid analytics through federally funded and utility-partnered projects.

- **NSF CAREER — Lead PI (2020–2026):** Enabling operational resilience in decentralized electric power distribution systems. [NSF Award](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1944142)

- **U.S. DOE / Avista Utilities — WSU PI (2023–2026):** Spokane Connected Communities, developing coordinated grid and community energy solutions.

- **U.S. DOE AGGREGATE — Co-PI (2017–2021):** Data-driven models for outage management and resilience.

---

## Looking Ahead

Our long-term research vision is to establish an open computational laboratory for power-grid research that connects academic advances with utility practice through rigorous and reproducible evaluation.

Three questions motivate this next phase: How can credible network behavior be reconstructed when system data are incomplete? How can environmental, infrastructure, and operational models be coupled without prohibitive computational cost? And under what conditions can findings from one power system reliably inform decisions in another?

By combining physics-grounded modeling, uncertainty quantification, scalable optimization, and regional grid testbeds, we aim to develop the evidence needed to determine **which grid innovations work, why they work, and where their benefits can be expected to persist**.

For research publications, see our [Publications]({{ '/publications/' | relative_url }}) page. For the complete funding record and additional professional information, see Professor Dubey's [CV]({{ '/cv/' | relative_url }}).
