# Fusion Workspace

<p style="text-align: left;"><img src="./documentation/src/.vuepress/public/fusion.png" width="350"></p>

> Fusion Workspace is a library built with a controller-based structure in mind. Core functionality tab navigation, data handling, and allowing you to register controllers that react around page change / config change and data changes.

This projects documentation and specification can be found here [Fusion-Workspace](https://equinor.github.io/fusion-workspace/).

## Getting started

After cloning this repo there is a few steps to make sure you're ready to run the test apps.

Go to the root folder and run the following commands:

-   pnpm install
-   pnpm build

## Running test apps

Test apps are run from the packages build folders. This ensures the experience is 1-1 as if you installed the package from npm. When making changes to the packages folder remember to build the packages so the changes are reflected in your test app.

## Packages cross imports

Allowed cross imports

`package => can import from`

-   ag-grid => [observable-proxy, workspace-core]
-   data-source => [observable-proxy, workspace-core]
-   filter => [observable-proxy, workspace-core]
-   garden => [observable-proxy, workspace-core]
-   observable-proxy => NONE
-   power-bi => [observable-proxy, workspace-core]
-   sidesheet => [observable-proxy, workspace-core]
-   workspace-core => [observable-proxy]
-   workspace-fusion => All, except fusion-modules
-   workspace-react => [observable-proxy, workspace-core]
