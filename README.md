# Fusion Workspace

![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/equinor/fusion-workspace/ci.yml)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/equinor/fusion-workspace/publish.yml?logo=npm&label=Deployment)
[![GitHub issues by-label](https://img.shields.io/github/issues/equinor/fusion-workspace/bug?label=%F0%9F%90%9B%20bug%20issues&color=red)](https://github.com/equinor/fusion-workspace/issues?q=is%3Aissue+is%3Aopen+label%3Abug)
[![GitHub issues](https://img.shields.io/github/issues/equinor/fusion-workspace)](https://github.com/equinor/fusion-workspace/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/equinor/fusion-workspace)](https://github.com/equinor/fusion-workspace/pulls)
![SCM Compliance](https://scm-compliance-api.radix.equinor.com/repos/equinor/fusion-workspace/badge)
![Known Vulnerabilities](https://snyk.io/test/github/equinor/fusion-workspace/badge.svg)

> Fusion Workspace is a library built with a controller-based structure in mind. Core functionality tab navigation, data handling, and allowing you to register controllers that react around page change / config change and data changes.

This projects documentation and specification can be found here [Fusion-Workspace](https://equinor.github.io/fusion-workspace/).

## Getting started

After cloning this repo there is a few steps to make sure you're ready to run the test apps.

Go to the root folder and run the following commands:

- `pnpm install`
- `pnpm build`

## Running test apps

Test apps are run using code from the packages build folders. This ensures the experience is 1-1 as if you installed the package from npm. When making changes to the packages folder remember to build the packages so the changes are reflected in your test app.

To run a test app go to apps/test-app and run `pnpm dev`. If you make changes to packages/ while the test app is running just run `pnpm build` in that folder while the test-app is running.

## Publishing packages

The repository is configured with CI/CD and automatic deployment, to trigger a release update the version in `package.json` of the package you want to release and merge into main.

## Updating package dependencies

To update all package dependencies, use the command `pnpm run bump-deps` to open the interactive pnpm package update prompt in the terminal.
