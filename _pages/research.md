---
layout: page
permalink: /research/
title: Research
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


Resilience studies often begin with prescribed component-failure probabilities or selected contingency scenarios. However, these assumptions do not always adequately represent how actual environmental hazards affect infrastructure or how vulnerability varies across geographic regions and network components. Our research addresses this limitation by developing methods to **infer hazard-conditioned infrastructure vulnerability from observed disruptions**, quantify uncertainty in these estimates, and connect the results to power-system analyses. We develop probabilistic approaches to characterize infrastructure vulnerability using observed weather, outage, and operating data. By combining Bayesian inference, multivariate hazard modeling, and network analysis, we investigate which infrastructure components are vulnerable, under what conditions, and how their failures affect electricity service. This research connects empirical evidence of disruptions to physically meaningful estimates of grid risk.

To support reproducible research, our group has contributed to the **Weather-Outage Resilience Dataset (WORD)**, which facilitates systematic analysis of weather and electricity outage records.

**Ongoing**

- **Wildfire-Resilient Power Grid Infrastructure Planning: Socio-Technical Innovations for Energy and Health Equity**  
  National Science Foundation, RAISE Program. Co-PI. February 2025–January 2030.

- **Strengthening Energy Infrastructure Resilience and Equity During Extreme Cold Weather Events**  
  National Science Foundation, Strengthening American Infrastructure Program. WSU PI. September 2023–August 2027.  
  [NSF Project](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2324544)

**Completed**

- **Data-Driven Resilience Modeling, Prediction, and Enhancement**  
  Power Systems Engineering Research Center (PSERC). WSU PI. July 2024–July 2026.

---

### 3. From Infrastructure Vulnerability to Risk-Informed Grid Decisions

Understanding which infrastructure components are vulnerable is an essential first step in resilience planning. The more consequential question is how their failures affect network performance and which planning or operational interventions can reduce those consequences. We investigate how uncertainty and infrastructure failures should inform grid planning and operational decisions. Our frameworks combine hazard-dependent vulnerability, network constraints, and feasible system responses to evaluate resilience investments and restoration strategies. We also develop scalable stochastic optimization methods that make these decisions tractable for larger networks and numerous operating scenarios.

**Scalable Stochastic Optimization**

A major barrier to risk-informed planning is the computational burden of representing many uncertain operating scenarios. Network-constrained optimization across numerous scenarios can produce extremely large mathematical programs, limiting their usefulness for practical planning studies.
To address this challenge, our group developed **SPAR-OPF**, a scalable stochastic optimization framework that replaces explicit scenario enumeration with compact separable approximations of expected operating costs. The approach uses sampled OPF solutions and their sensitivities to construct approximations and statistical bounds for evaluating solution quality. These advances expand the range of uncertain operating conditions and infrastructure planning alternatives that can be evaluated computationally.

**Extending Grid Decisions to Regional Networks**

Our research is expanding from distribution feeders to regional power systems, where generation availability, transmission constraints, environmental hazards, large electricity loads, and decisions by multiple operators interact. My group has developed a Pacific Northwest planning-scale transmission research testbed, with approximately 3,823 buses and 5,100 transmission lines, with 8,760 hourly operating states across Washington, Oregon, Idaho, and part of Montana. Initial research examines how localized disruptions, including wildfires, can produce consequences across geographically distant parts of the network. We are also investigating how network constraints, resource flexibility, and infrastructure upgrades affect the ability of regional power systems to accommodate growing electricity demand. This regional testbed supports the next stage of our research: connecting environmental and infrastructure evidence to network-level planning and operational decisions at larger scales.

**Ongoing**

- **Spokane Connected Communities Project**  
  U.S. Department of Energy, through Avista Utilities. WSU PI. March 2023–December 2026.

**Completed**

- **Enabling Operational Resilience in Decentralized Electric Power Distribution Systems**  
  National Science Foundation CAREER Award. Lead PI. February 2020–January 2026.  
  [NSF Project](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1944142)

- **AGGREGATE: Data-Driven Models for Outage Management and Resilience**  
  U.S. Department of Energy. Co-PI. October 2017–June 2021.

**Prior Project**

- **Resilient Communities via Risk-Driven Infrastructure Planning and Automated Restoration (Recuperat)**  
  U.S. Department of Energy, Solar Energy Technologies Office. Lead PI. Initiated August 2023; *project cancelled in November 2025*.  
  [Program Background](https://www.energy.gov/eere/solar/renewables-advancing-community-energy-resilience-racer-funding-program)

---

## Looking Ahead

Our long-term research vision is to establish an open computational laboratory for power-grid research that connects academic advances with utility practice through rigorous and reproducible evaluation.

Three questions motivate this next phase: How can credible network behavior be reconstructed when system data are incomplete? How can environmental, infrastructure, and operational models be coupled without prohibitive computational cost? And under what conditions can findings from one power system reliably inform decisions in another?

By combining physics-grounded modeling, uncertainty quantification, scalable optimization, and regional grid testbeds, we aim to develop the evidence needed to determine **which grid innovations work, why they work, and where their benefits can be expected to persist**.

For research publications, see our [Publications]({{ '/publications/' | relative_url }}) page. For the complete funding record and additional professional information, see Professor Dubey's [CV]({{ '/cv/' | relative_url }}).
