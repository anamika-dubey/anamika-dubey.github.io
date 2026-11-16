---
layout: pages
permalink: /research/
title: research
description: Physics-grounded modeling, optimization, and learning for reliable power grid decisions
nav: true
nav_order: 4
---

## From Risk to Reliable Decisions: Physics-Grounded Modeling, Optimization, and Learning

The electric power grid faces two converging challenges: increasing exposure to high-consequence disruptions and growing complexity in planning and operational decision-making. Despite increasingly rich observations of weather, outages, and system conditions, translating this information into effective engineering decisions remains a fundamental challenge. Addressing this gap requires understanding how uncertain disruptions affect network performance and how alternative planning and operational interventions can mitigate their consequences.

At SCALE Lab, our research advances the analytical and computational foundations for reliable and resilient power grid operations and planning. We develop scalable optimization methods for network-constrained decision-making, probabilistic models to characterize infrastructure vulnerability and risk, and risk-informed frameworks for evaluating operational strategies and infrastructure investments.

**Our overarching research objective is to connect uncertain system conditions and observed disruptions to physically feasible, computationally tractable, and quantifiable engineering decisions.**

Our research program is organized around three interconnected directions.

### 1. Physics-Consistent Optimization as a Foundation for Grid Decisions

We develop optimization methods that faithfully represent the physical constraints of electric networks while remaining computationally tractable. Our work includes three-phase unbalanced optimal power flow, scalable network approximations and decompositions, and distributed coordination of flexible grid resources. These methods provide a foundation for grid operations and planning as distributed energy resources, variable generation, storage, and flexible demand become increasingly important.

### 2. Learning Infrastructure Vulnerability from Observed Disruptions

We develop probabilistic approaches to characterize infrastructure vulnerability using observed weather, outage, and operating data. By combining Bayesian inference, multivariate hazard modeling, and network analysis, we investigate which infrastructure components are vulnerable, under what conditions, and how their failures affect electricity service. This research connects empirical evidence of disruptions to physically meaningful estimates of grid risk.

### 3. From Infrastructure Vulnerability to Risk-Informed Grid Decisions

We investigate how uncertainty and infrastructure failures should inform grid planning and operational decisions. Our frameworks combine hazard-dependent vulnerability, network constraints, and feasible system responses to evaluate resilience investments and restoration strategies. We also develop scalable stochastic optimization methods that make these decisions tractable for larger networks and numerous operating scenarios.

---

## Research Direction 1: Physics-Consistent Optimization and Grid Coordination

### Research Overview

A central challenge in electric power distribution systems is developing computationally tractable optimization methods that accurately represent nonlinear, unbalanced, three-phase network physics. Simplified models can improve computational efficiency but may compromise the accuracy of operational constraints and the decisions derived from them.

Our research has advanced network-level optimal power flow (OPF) methods that exploit the structure of distribution networks through approximation, relaxation, and decomposition. These contributions address the tradeoffs among modeling fidelity, computational scalability, and decentralized decision-making.

Building on these computational foundations, we have developed algorithms for coordinating distributed generation, renewable energy resources, smart inverters, energy storage, electric vehicles, and flexible demand. Our work includes centralized and distributed optimization architectures, network-constrained demand-side coordination, and learning-based approaches to distribution-system operations.

An important aspect of this research is understanding how optimization algorithms perform under realistic operating conditions. We have studied the robustness of distributed OPF under communication delays and other communication non-idealities. This work received the **2025 IEEE Industry Applications Society Ralph Lee Department Prize Paper Award**.

We have also extended distributed optimization methods to service restoration and networked microgrid coordination. Our research on layered restoration architectures demonstrated how distributed energy resources and networked microgrids can be coordinated to restore critical loads following disruptions, including proof-of-concept implementation in the GridAPPS-D environment.

To support reproducible research and broader adoption of these methods, we co-developed **DistOPF**, an open-source computational platform for developing, validating, and benchmarking distribution optimal power flow algorithms.

Together, these contributions establish computational foundations for coordinating flexible grid resources during both normal and disrupted operating conditions.

### Selected Research Projects

**Ongoing and Recent**

- **Accelerating Electromagnetic Transient Analysis through Physics-Informed Scalable AI Models for Rapid Load Growth**  
  U.S. Department of Energy Genesis Program, through PNNL. WSU PI. September 2026–April 2027.

- **Adaptive, Human-Centric Demand-Side Flexibility Coordination at Scale in Electric Power Networks**  
  National Science Foundation, Cyber-Physical Systems Program. Lead PI. September 2022–August 2026. *Completed.*  
  [NSF Project](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2208783)

**Completed**

- **GridAPPS-D: Layered Architecture for Distributed Applications**  
  U.S. Department of Energy, through PNNL. WSU PI. March 2021–August 2023.

- **CITADELS**  
  U.S. Department of Energy, through PNNL. WSU PI. January 2020–July 2023.

- **Robust Distributed Control for Power Sharing in Islanded Industrial Microgrids**  
  Schweitzer Engineering Laboratories. Lead PI. May 2019–December 2022.

- **Bilateral Contract Design and Retail Market Development for Flexible Electric Power Systems with Residential Demand-Side Participation**  
  Alfred P. Sloan Foundation. Lead PI. January 2019–August 2022.

- **Development of an Open-Source Advanced Distribution Management System (ADMS)**  
  U.S. Department of Energy, through PNNL. WSU PI. August 2016–December 2020.

---

## Research Direction 2: Data-Driven Infrastructure Vulnerability and Risk Modeling

### Research Overview

Resilience studies often begin with prescribed component-failure probabilities or selected contingency scenarios. However, these assumptions do not always adequately represent how actual environmental hazards affect infrastructure or how vulnerability varies across geographic regions and network components.

Our research addresses this limitation by developing methods to **infer hazard-conditioned infrastructure vulnerability from observed disruptions**, quantify uncertainty in these estimates, and connect the results to power-system analyses.

A major focus is the integration of historical weather and outage observations to characterize how extreme events affect electricity service. Our ongoing national-scale research combines high-resolution EAGLE-I outage observations with meteorological data to quantify differences in outage frequency and severity across climate regions and urban–rural environments.

These analyses reveal substantial geographic heterogeneity in weather-dependent outage risks. They also illustrate why the frequency of disruptions and their consequences for affected communities must be examined separately.

We have developed probabilistic vulnerability models using Bayesian inference to characterize nonlinear relationships between environmental conditions and infrastructure failures. These methods account for uncertainty arising from limited observations of extreme events and investigate the effects of interacting hazards, including wind, temperature, and precipitation.

At the distribution-feeder level, we are developing **topology- and voltage-aware fragility models** to distinguish component vulnerability from network consequences. Our findings demonstrate that distribution laterals may experience higher failure rates while failures of main feeder components can produce more extensive service interruptions.

Our research also examines the vulnerability of generation resources during extreme weather. In particular, we have developed Bayesian models for gas-fired generator availability under extreme winter conditions, distinguishing complete generator outages from partial capacity derating. Explicitly representing these different failure mechanisms provides a more informative characterization of weather-dependent generation availability.

To support reproducible research, our group has contributed to the **Weather-Outage Resilience Dataset (WORD)**, which facilitates systematic analysis of weather and electricity outage records.

Collectively, these efforts provide an empirical and probabilistic foundation for estimating infrastructure risk and incorporating it into power-system operations and resilience planning.

### Selected Research Projects

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

## Research Direction 3: Risk-Informed Planning and Scalable Decision-Making Under Uncertainty

### Research Overview

Understanding which infrastructure components are vulnerable is an essential first step in resilience planning. The more consequential question is how their failures affect network performance and which planning or operational interventions can reduce those consequences.

Our research develops probabilistic, risk-averse planning frameworks that integrate component vulnerability, network constraints, and operational responses to evaluate infrastructure investments and restoration decisions.

Our early work established probabilistic measures of distribution-system operational resilience, which we subsequently extended to stochastic planning frameworks that account explicitly for severe disruption scenarios.

Using **conditional value-at-risk (CVaR)**, we have developed methods to evaluate resilience decisions beyond expected performance, incorporating the potentially disproportionate consequences of high-impact disruptions.

A key finding is that the value of resilience investments depends not only on the probability of component failures but also on the network's ability to respond after those failures.

For example, by jointly optimizing line hardening, automated switching, and distributed generation, our frameworks demonstrate how different risk preferences lead to different investment portfolios. These findings highlight the importance of evaluating infrastructure investments through their system-level operational consequences rather than component reliability alone.

### Scalable Stochastic Optimization

A major barrier to risk-informed planning is the computational burden of representing many uncertain operating scenarios. Network-constrained optimization across numerous scenarios can produce extremely large mathematical programs, limiting their usefulness for practical planning studies.

To address this challenge, our group developed **SPAR-OPF**, a scalable stochastic optimization framework that replaces explicit scenario enumeration with compact separable approximations of expected operating costs.

The approach uses sampled OPF solutions and their sensitivities to construct approximations and statistical bounds for evaluating solution quality.

For an IEEE 123-bus distribution system with 1,200 scenarios, SPAR-OPF reduced computation time from approximately 16.8 hours to 80 seconds. We further demonstrated scalability to a 9,500-node distribution network, with solution times of approximately five to six minutes for the studied problems.

These advances expand the range of uncertain operating conditions and infrastructure planning alternatives that can be evaluated computationally.

### Extending Grid Decisions to Regional Networks

Our research is expanding from distribution feeders to regional power systems, where generation availability, transmission constraints, environmental hazards, large electricity loads, and decisions by multiple operators interact.

Through the **WSU–PNNL Advanced Grid Institute (AGI)**, which Professor Dubey co-directs, our group has developed a Pacific Northwest planning-scale transmission research testbed.

The platform represents approximately 3,823 buses and 5,100 transmission lines, with 8,760 hourly operating states across Washington, Oregon, Idaho, and part of Montana.

Initial research examines how localized disruptions, including wildfires, can produce consequences across geographically distant parts of the network. We are also investigating how network constraints, resource flexibility, and infrastructure upgrades affect the ability of regional power systems to accommodate growing electricity demand.

This regional testbed supports the next stage of our research: connecting environmental and infrastructure evidence to network-level planning and operational decisions at larger scales.

### Selected Research Projects

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
