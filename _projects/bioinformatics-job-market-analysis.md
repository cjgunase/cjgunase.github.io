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

### August 9, 2026 — M01 specification baseline

**Outcome:** M01 was completed without starting any later milestone. The
owner-approved `BSE-JMA-001` version `1.1.1` baseline is now preserved in the
project repository and pinned by SHA-256.

- Imported the complete 894-line specification byte-for-byte.
- Recorded checksum
  `7721e84c22c3ef07dbcb9a926bef6074f74847f9c257f184fe8f87cda78a9ed0`
  with provenance and change-governance notes.
- Advanced project state to M02 while preserving the human-only review and
  publication gates.

**Evidence:** [Project PR #1](https://github.com/cjgunase/bioinformatics-job-market-analysis/pull/1)
was merged to `main`. The repository now contains the
[approved baseline](https://github.com/cjgunase/bioinformatics-job-market-analysis/blob/main/docs/specification/BSE-JMA-001-v1.1.1.md),
[checksum](https://github.com/cjgunase/bioinformatics-job-market-analysis/blob/main/docs/specification/SHA256SUMS),
and [dated progress record](https://github.com/cjgunase/bioinformatics-job-market-analysis/blob/main/docs/PROGRESS.md).
This public entry is published through [portfolio PR
#4](https://github.com/cjgunase/cjgunase.github.io/pull/4).

**Validation:** The checksum passed `sha256sum --check`; byte comparison matched
the owner-approved source; the state JSON parsed; specification identity,
version, and line count assertions passed; and non-normative files passed Git
whitespace validation. The portfolio update was formatted locally and is
validated by the linked report PR's GitHub Actions checks. A local Docker preview
was unavailable because Docker is not installed on the automation host.

**Blockers or limitations:** None for M01. Baseline project CI does not exist yet;
creating it is intentionally reserved for M02. No market findings were produced
or presented as human-approved.

**Next:** M02 — scaffold the Python package, pinned tooling, and baseline CI.

### August 10, 2026 — M02 Python package and CI baseline

**Outcome:** M02 was completed without starting M03. The repository now has an
installable Python package, a fully locked development environment, and a
baseline continuous-integration gate.

- Added the `market_analysis` source package and an installation smoke test.
- Pinned Python 3.13.11, uv 0.9.27, direct development tools, transitive
  dependencies, and GitHub Actions revisions.
- Added CI checks for linting, formatting, strict type checking, unit tests, and
  source and wheel builds.
- Documented reproducible setup and safeguards for restricted job-source data.

**Evidence:** [Project PR
#2](https://github.com/cjgunase/bioinformatics-job-market-analysis/pull/2)
passed its required quality check and was merged to `main`. The resulting
[package configuration](https://github.com/cjgunase/bioinformatics-job-market-analysis/blob/main/pyproject.toml),
[CI workflow](https://github.com/cjgunase/bioinformatics-job-market-analysis/blob/main/.github/workflows/test.yml),
and [dated progress record](https://github.com/cjgunase/bioinformatics-job-market-analysis/blob/main/docs/PROGRESS.md)
are public and reviewable.

**Validation:** A locked environment sync passed along with Ruff lint and format
checks, strict mypy checking, pytest (1 test passed), source and wheel builds,
JSON parsing, the specification checksum and byte comparison, and Git whitespace
validation. The project PR's GitHub Actions quality job also passed.

**Blockers or limitations:** None for M02. This was infrastructure-only work:
no postings were collected, no applicant or restricted source data entered Git,
and no market findings or human approvals are claimed.

**Next:** M03 — define study configuration, controlled values, and run metadata.
