---
title: Positioning decision and the career facts behind the site copy
date: 2026-09-30
kind: decision
---

Stated by Mathias in a Claude Code session on 2026-09-30 (evening), after private research into market rates and prices. The research itself, and every rate, price and salary discussed, is kept outside this repository.

## Decisions

- No "Principal" title on the site. The work is at that level, but he has worked in data since 2020, part-time as a student at first, and a title that the dates do not support would cost trust. He agreed ("That makes sense") and asked for the changes: "Sell me, but never lie."
- The site leads with scope and results instead of a seniority label: technical responsibility for the whole data platform at two companies.
- Not for the site: salary, offers of other roles, and money figures from client work until the client has agreed to publishing them.
- "AI coding is obviously thin since experience can, by definition, be limited by availability": the field is a few years old, so proof has to be recent concrete work, not years.

## Career facts he gave, which the site copy may use

- **Viteco**, from 2020, part-time while studying computer science: built automation software (Django and React) that extracted metadata from source systems and ran the ETL process, including master data setup. Bachelor's project written with Viteco on using machine learning to detect schemas and infer the fact and dimension structure.
- **Copyright Agent**, first as an employee, later also as a consultant:
  - designed and implemented the entire BigQuery data warehouse (medallion layers, optimisation, lead);
  - implemented the ETL pipelines for most relevant sources as Cloud Run services;
  - designed and built the entire reporting;
  - responsible for and optimised Cloud SQL;
  - contributed to analysis and implementation of detection methods;
  - implemented machine learning models that select what to process from a multi-terabyte data set, with the cost effect measured over time;
  - forecast revenue with a multi-model statistics and machine learning setup, with a major responsibility for budgeting from it at granular levels, top-down and bottom-up;
  - AI design and optimisation of reporting (as a consultant).
- **Ase**:
  - data platform architecture and full technical responsibility;
  - the migration plan from SQL Server to Microsoft Fabric;
  - migration from Fabric's built-in tooling to Python packages following best practices, designed for AI compatibility;
  - AI design and optimisation of reporting;
  - mentoring and change management in the Data & Analytics team, including personal sparring and technical prioritisation.

## Shipped the same evening (PR "Positioning: scope instead of a seniority title")

- Role line changed from "Freelance senior data engineer" to "Freelance data and AI engineer" on the home page, About page, meta descriptions and structured data. "Senior" stays where it describes the embedded-engineer offer.
- Home lead, the data platform lead and the "why me" block state the scope: technical responsibility for the whole data platform at two companies. "Why me" went from four to six points and now mentions AI coding.
- About page story rewritten as 2020 to today from the facts above, and it now says who was an employer and who is a client.
- Data platform page: machine learning in production and forecasting added to "What I do"; Microsoft Fabric, SQL Server, machine learning and forecasting added to the technology list.
- AI coding page note adds the restructuring of a production data platform for coding agents.
- Left out on purpose: all money figures, anything about salary or role offers, and any description of what the machine learning models select.
