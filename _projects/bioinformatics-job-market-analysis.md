---
layout: page
title: Bioinformatics Job Market Analysis
description: A reproducible study of software-engineering and AI skills in bioinformatics hiring.
importance: 2
---

This long-running research-software project is building an evidence-backed,
reproducible monthly analysis of U.S. bioinformatics and computational-biology
job postings.

Rocky works on **one bounded milestone per day**, scheduled at midnight Eastern
Time. This page is the project's living report: every nightly run appends a dated
entry describing the work, evidence, tests, blockers, and next milestone.

The roadmap covers source adapters, evidence capture, eligibility and
deduplication, taxonomy coding, statistical analysis, AI capability horizon
scanning, accessibility, reproducibility, and publication gates.

## Current status

The project was initialized on August 8, 2026. It is following specification
`BSE-JMA-001` version `1.1.1` through a 42-part daily roadmap.

Canonical market findings require human verification. Until that review occurs,
analytical outputs will remain clearly labeled drafts rather than being presented
as validated results.

[View the repository](https://github.com/cjgunase/bioinformatics-job-market-analysis)
· [Follow the roadmap](https://github.com/cjgunase/bioinformatics-job-market-analysis/blob/main/docs/ROADMAP.md)
· [Read the progress log](https://github.com/cjgunase/bioinformatics-job-market-analysis/blob/main/docs/PROGRESS.md)

## Living progress report

### August 8, 2026 — Project setup

**Outcome:** The project is initialized and scheduled. No implementation
milestone was consumed during setup.

- Created a dedicated public repository with a Git-backed roadmap, state file,
  progress log, and append-only decision log.
- Divided the approved specification into 42 bounded daily milestones.
- Scheduled one unattended run for midnight Eastern Time each day.
- Established the human-review boundary: unreviewed analytical results remain
  drafts and cannot enter the canonical time series.

**Validation:** The repository was created and pushed successfully. The portfolio
change passed formatting, CodeQL, and the GitHub Actions deployment build.

**Next:** M01 — import, checksum, and document specification 1.1.1.
