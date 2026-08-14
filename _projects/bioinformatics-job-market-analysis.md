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

### August 11, 2026 — M03 study configuration and run metadata

**Outcome:** M03 was completed without starting M04. The study now has
versioned, machine-readable defaults, exact non-taxonomy controlled values, and
an explicitly pre-collection run-metadata example.

- Preserved specification 1.1.1 scope, sampling, review, analysis, quality,
  horizon-scan, and publication defaults in study configuration 1.0.0.
- Documented controlled identifiers in codebook 1.0.0 while leaving the skill
  taxonomy version unset for M05.
- Added typed YAML and JSON loaders plus configuration-focused tests.
- Kept collection timestamps null, all funnel counts at zero, and the human
  reviewer absent so the example cannot imply collection or approval.

**Evidence:** [Project PR
#3](https://github.com/cjgunase/bioinformatics-job-market-analysis/pull/3)
passed its quality check and was merged to `main`. The reviewable artifacts are
the [study configuration](https://github.com/cjgunase/bioinformatics-job-market-analysis/blob/main/config/study.yaml),
[controlled-value codebook](https://github.com/cjgunase/bioinformatics-job-market-analysis/blob/main/schemas/codebook.yaml),
[run-metadata example](https://github.com/cjgunase/bioinformatics-job-market-analysis/blob/main/config/run_metadata.example.json),
and [dated progress record](https://github.com/cjgunase/bioinformatics-job-market-analysis/blob/main/docs/PROGRESS.md).

**Validation:** Locked dependency sync, Ruff lint and formatting, strict mypy,
pytest (4 tests passed), source and wheel builds, JSON parsing, YAML loading, and
Git whitespace checks passed locally. The PR quality job and the post-merge
[`main` CI run](https://github.com/cjgunase/bioinformatics-job-market-analysis/actions/runs/31457503174)
also passed. This portfolio entry passed Prettier and whitespace checks; the
site build and deployment are validated by the portfolio repository's GitHub
Actions because Docker and Ruby are unavailable on the automation host.

**Blockers or limitations:** None for M03. No job collection was performed;
candidate, included, reserve, evidence-validated, and human-reviewed counts are
zero. Taxonomy work remains reserved for M05, and no human approval, canonical
publication, or market finding is claimed. Local portfolio preview was limited
by the unavailable Docker/Ruby toolchain.

**Next:** M04 — implement JSON Schemas and schema-validation tests.

### August 12, 2026 — M04 JSON Schema contracts

**Outcome:** M04 was completed without starting M05. The project now has strict,
machine-readable contracts for run metadata, screened jobs, atomic requirements,
and verbatim evidence records.

- Added JSON Schema Draft 2020-12 contracts that require specification fields,
  reject undeclared properties, preserve explicit nulls, and enforce formats,
  hashes, identifier patterns, controlled values, and numeric ranges.
- Added a fail-closed, format-aware validation helper.
- Added schema self-validation, representative valid records, invalid-record
  rejection tests, and checks that schema enums cannot drift from codebook 1.0.0.
- Advanced the project state to M05 while leaving taxonomy identifiers unset and
  all collection and human-review counts at zero.

**Evidence:** [Project PR
#4](https://github.com/cjgunase/bioinformatics-job-market-analysis/pull/4)
passed its required quality check and was merged to `main`. The reviewable
artifacts include the [schema
contracts](https://github.com/cjgunase/bioinformatics-job-market-analysis/tree/main/schemas),
[validation
helper](https://github.com/cjgunase/bioinformatics-job-market-analysis/blob/main/src/market_analysis/schema.py),
[schema
tests](https://github.com/cjgunase/bioinformatics-job-market-analysis/blob/main/tests/test_schemas.py),
and [dated progress
record](https://github.com/cjgunase/bioinformatics-job-market-analysis/blob/main/docs/PROGRESS.md).

**Validation:** Locked dependency sync, Ruff lint and formatting, strict mypy,
pytest (32 tests passed), source and wheel builds, JSON parsing, and Git
whitespace checks passed locally. The project PR quality job and the post-merge
[`main` CI
run](https://github.com/cjgunase/bioinformatics-job-market-analysis/actions/runs/31562417549)
also passed.

**Blockers or limitations:** None for M04. Cross-record foreign-key checks and
ordered comparisons remain later pipeline work; taxonomy identifiers remain
nullable until M05 establishes taxonomy 1.0.0. No postings were collected, no
restricted source text or applicant data entered Git, and no human approval,
canonical publication, or market finding is claimed.

**Next:** M05 — establish taxonomy 1.0.0 and its governance changelog.

### August 14, 2026 — M05 taxonomy 1.0.0

**Outcome:** M05 was completed without starting M06. The project now has a
versioned, hierarchical taxonomy for coding explicit software-engineering,
bioinformatics-context, AI, and durable AI-era competencies.

- Added 187 skill nodes across 13 top-level categories from approved
  specification 1.1.1 sections 8.1–8.13.
- Added stable identifiers, definitions, inclusion and exclusion rules,
  aliases, within-category parent links, tool and AI-related flags, and
  lifecycle metadata.
- Added append-only governance covering semantic versioning, human review,
  deprecation, migration, backcasting, and time-series breaks.
- Required taxonomy 1.0.0 in study configuration, run metadata, and atomic
  requirement contracts.

**Evidence:** [Project PR
#5](https://github.com/cjgunase/bioinformatics-job-market-analysis/pull/5)
passed its required quality check and was merged to `main`. Reviewable artifacts
include [taxonomy
1.0.0](https://github.com/cjgunase/bioinformatics-job-market-analysis/blob/main/taxonomy/taxonomy.yaml),
the [taxonomy
changelog](https://github.com/cjgunase/bioinformatics-job-market-analysis/blob/main/taxonomy/CHANGELOG.md),
[taxonomy
tests](https://github.com/cjgunase/bioinformatics-job-market-analysis/blob/main/tests/test_taxonomy.py),
and the [dated progress
record](https://github.com/cjgunase/bioinformatics-job-market-analysis/blob/main/docs/PROGRESS.md).

**Validation:** Locked dependency sync, Ruff lint and formatting, strict mypy,
pytest (39 tests passed), source and wheel builds, JSON parsing, and Git
whitespace checks passed locally. The project PR quality job and the post-merge
[`main` CI
run](https://github.com/cjgunase/bioinformatics-job-market-analysis/actions/runs/31769161313)
also passed.

**Blockers or limitations:** None for M05. The taxonomy implementation baseline
is pending initial human review and remains ineligible for canonical market
findings. No postings were collected; candidate, included, reserve,
evidence-validated, and human-reviewed counts remain zero. No restricted job
text, applicant data, secrets, or human-approval claim entered Git.

**Next:** M06 — add the versioned discovery-query catalogue.
