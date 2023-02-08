import { agCell } from './cell/ag-cell';
import { agHeaderCellText } from './header/ag-header-cell-text.css';

export const genericStyles = `
/**
****************************
* Generic Styles
****************************
*/
ag-grid, ag-grid-angular, ag-grid-ng2, ag-grid-polymer, ag-grid-aurelia {
 display: block;
}

.ag-hidden {
 display: none !important;
}

.ag-invisible {
 visibility: hidden !important;
}

.ag-no-transition {
 -webkit-transition: none !important;
 transition: none !important;
}

.ag-drag-handle {
 cursor: -webkit-grab;
 cursor: grab;
}

.ag-column-drop-wrapper {
 display: -webkit-box;
 display: flex;
}

.ag-column-drop-horizontal-half-width {
 display: inline-block;
 width: 50% !important;
}

.ag-unselectable {
 -moz-user-select: none;
 -webkit-user-select: none;
 user-select: none;
}

.ag-selectable {
 -moz-user-select: text;
 -webkit-user-select: text;
 user-select: text;
}

.ag-tab {
 position: relative;
}

.ag-tab-guard {
 position: absolute;
 width: 0;
 height: 0;
 display: block;
}

.ag-select-agg-func-popup {
 position: absolute;
}

.ag-input-wrapper, .ag-picker-field-wrapper {
 display: -webkit-box;
 display: flex;
 -webkit-box-flex: 1;
         flex: 1 1 auto;
 -webkit-box-align: center;
         align-items: center;
 line-height: normal;
 position: relative;
}

.ag-shake-left-to-right {
 -webkit-animation-direction: alternate;
         animation-direction: alternate;
 -webkit-animation-duration: 0.2s;
         animation-duration: 0.2s;
 -webkit-animation-iteration-count: infinite;
         animation-iteration-count: infinite;
 -webkit-animation-name: ag-shake-left-to-right;
         animation-name: ag-shake-left-to-right;
}

@-webkit-keyframes ag-shake-left-to-right {
 from {
   padding-left: 6px;
   padding-right: 2px;
 }
 to {
   padding-left: 2px;
   padding-right: 6px;
 }
}

@keyframes ag-shake-left-to-right {
 from {
   padding-left: 6px;
   padding-right: 2px;
 }
 to {
   padding-left: 2px;
   padding-right: 6px;
 }
}
.ag-root-wrapper {
 cursor: default;
 position: relative;
 display: -webkit-box;
 display: flex;
 -webkit-box-orient: vertical;
 -webkit-box-direction: normal;
         flex-direction: column;
 overflow: hidden;
}
.ag-root-wrapper.ag-layout-normal {
 height: 100%;
}

.ag-watermark {
 position: absolute;
 bottom: 20px;
 right: 25px;
 opacity: 0.5;
 -webkit-transition: opacity 1s ease-out 3s;
 transition: opacity 1s ease-out 3s;
}
.ag-watermark::before {
 content: "";
 background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDIzNSA0MCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7Ij4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuNjM1NzIzLDAsMCwwLjYzNTcyMywtNDkyLjkyMSwtMzIzLjYwOCkiPgogICAgICAgIDxwYXRoIGQ9Ik0xMDk5LjQsNTQ5LjRMMTA5OS40LDUzNi45TDEwNzguMSw1MzYuOUwxMDY1LjYsNTQ5LjRMMTA5OS40LDU0OS40WiIgc3R5bGU9ImZpbGw6cmdiKDI0LDI5LDMxKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgICAgICA8cGF0aCBkPSJNMTEyMy40LDUxOC40TDEwOTYuNyw1MTguNEwxMDg0LjEsNTMwLjlMMTEyMy40LDUzMC45TDExMjMuNCw1MTguNFoiIHN0eWxlPSJmaWxsOnJnYigyNCwyOSwzMSk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICAgICAgPHBhdGggZD0iTTEwNTMuMiw1NjEuOUwxMDU5LjYsNTU1LjVMMTA4MS4yLDU1NS41TDEwODEuMiw1NjhMMTA1My4yLDU2OEwxMDUzLjIsNTYxLjlaIiBzdHlsZT0iZmlsbDpyZ2IoMjQsMjksMzEpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMDU3LjksNTQzLjNMMTA3MS43LDU0My4zTDEwODQuMyw1MzAuOEwxMDU3LjksNTMwLjhMMTA1Ny45LDU0My4zWiIgc3R5bGU9ImZpbGw6cmdiKDI0LDI5LDMxKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgICAgICA8cGF0aCBkPSJNMTA0Mi44LDU2MS45TDEwNTMuMiw1NjEuOUwxMDY1LjYsNTQ5LjRMMTA0Mi44LDU0OS40TDEwNDIuOCw1NjEuOVoiIHN0eWxlPSJmaWxsOnJnYigyNCwyOSwzMSk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICAgICAgPHBhdGggZD0iTTEwOTYuNyw1MTguNEwxMDkwLjMsNTI0LjhMMTA0OS41LDUyNC44TDEwNDkuNSw1MTIuM0wxMDk2LjcsNTEyLjNMMTA5Ni43LDUxOC40WiIgc3R5bGU9ImZpbGw6cmdiKDI0LDI5LDMxKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgICAgICA8cGF0aCBkPSJNODI4LjYsNTU5LjdMODA5LDU1OS43TDgwNS42LDU2OC4xTDc5Nyw1NjguMUw4MTUuMSw1MjUuN0w4MjIuNiw1MjUuN0w4NDAuNyw1NjguMUw4MzIsNTY4LjFMODI4LjYsNTU5LjdaTTgyNS45LDU1M0w4MTguOCw1MzUuN0w4MTEuNyw1NTNMODI1LjksNTUzWiIgc3R5bGU9ImZpbGw6cmdiKDI0LDI5LDMxKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgICAgICA8cGF0aCBkPSJNOTYwLjEsNTQxLjNDOTYyLjYsNTM3LjYgOTY4LjksNTM3LjIgOTcxLjUsNTM3LjJMOTcxLjUsNTQ0LjRDOTY4LjMsNTQ0LjQgOTY1LjEsNTQ0LjUgOTYzLjIsNTQ1LjlDOTYxLjMsNTQ3LjMgOTYwLjMsNTQ5LjIgOTYwLjMsNTUxLjVMOTYwLjMsNTY4LjFMOTUyLjUsNTY4LjFMOTUyLjUsNTM3LjJMOTYwLDUzNy4yTDk2MC4xLDU0MS4zWiIgc3R5bGU9ImZpbGw6cmdiKDI0LDI5LDMxKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgICAgICA8cmVjdCB4PSI5NzUuOCIgeT0iNTM3LjIiIHdpZHRoPSI3LjgiIGhlaWdodD0iMzAuOSIgc3R5bGU9ImZpbGw6cmdiKDI0LDI5LDMxKTsiLz4KICAgICAgICA8cmVjdCB4PSI5NzUuOCIgeT0iNTIzLjQiIHdpZHRoPSI3LjgiIGhlaWdodD0iOS4yIiBzdHlsZT0iZmlsbDpyZ2IoMjQsMjksMzEpOyIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMDIyLjMsNTIzLjRMMTAyMi4zLDU2OC4xTDEwMTQuOCw1NjguMUwxMDE0LjYsNTYzLjRDMTAxMy41LDU2NSAxMDEyLjEsNTY2LjMgMTAxMC40LDU2Ny4zQzEwMDguNyw1NjguMiAxMDA2LjYsNTY4LjcgMTAwNC4yLDU2OC43QzEwMDIuMSw1NjguNyAxMDAwLjEsNTY4LjMgOTk4LjQsNTY3LjZDOTk2LjYsNTY2LjggOTk1LDU2NS44IDk5My43LDU2NC40Qzk5Mi40LDU2MyA5OTEuMyw1NjEuMyA5OTAuNiw1NTkuNEM5ODkuOCw1NTcuNSA5ODkuNSw1NTUuMyA5ODkuNSw1NTIuOUM5ODkuNSw1NTAuNSA5ODkuOSw1NDguMyA5OTAuNiw1NDYuM0M5OTEuNCw1NDQuMyA5OTIuNCw1NDIuNiA5OTMuNyw1NDEuMkM5OTUsNTM5LjggOTk2LjYsNTM4LjcgOTk4LjQsNTM3LjlDMTAwMC4yLDUzNy4xIDEwMDIuMSw1MzYuNyAxMDA0LjIsNTM2LjdDMTAwNi42LDUzNi43IDEwMDguNiw1MzcuMSAxMDEwLjMsNTM4QzEwMTIsNTM4LjkgMTAxMy40LDU0MC4xIDEwMTQuNSw1NDEuOEwxMDE0LjUsNTIzLjVMMTAyMi4zLDUyMy41TDEwMjIuMyw1MjMuNFpNMTAwNS45LDU2MkMxMDA4LjUsNTYyIDEwMTAuNSw1NjEuMSAxMDEyLjEsNTU5LjRDMTAxMy43LDU1Ny43IDEwMTQuNSw1NTUuNCAxMDE0LjUsNTUyLjZDMTAxNC41LDU0OS44IDEwMTMuNyw1NDcuNiAxMDEyLjEsNTQ1LjhDMTAxMC41LDU0NC4xIDEwMDguNSw1NDMuMiAxMDA1LjksNTQzLjJDMTAwMy40LDU0My4yIDEwMDEuMyw1NDQuMSA5OTkuOCw1NDUuOEM5OTguMiw1NDcuNSA5OTcuNCw1NDkuOCA5OTcuNCw1NTIuNkM5OTcuNCw1NTUuNCA5OTguMiw1NTcuNiA5OTkuOCw1NTkuM0MxMDAxLjQsNTYxLjEgMTAwMy40LDU2MiAxMDA1LjksNTYyIiBzdHlsZT0iZmlsbDpyZ2IoMjQsMjksMzEpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgICAgIDxwYXRoIGQ9Ik04ODUuOCw1NDQuMkw4NjYuNSw1NDQuMkw4NjYuNSw1NTAuOUw4NzcuNSw1NTAuOUM4NzcuMiw1NTQuMyA4NzUuOSw1NTYuOSA4NzMuNyw1NTlDODcxLjUsNTYxIDg2OC43LDU2MiA4NjUuMSw1NjJDODYzLjEsNTYyIDg2MS4yLDU2MS42IDg1OS42LDU2MC45Qzg1Ny45LDU2MC4yIDg1Ni41LDU1OS4yIDg1NS4zLDU1Ny44Qzg1NC4xLDU1Ni41IDg1My4yLDU1NC45IDg1Mi41LDU1M0M4NTEuOCw1NTEuMSA4NTEuNSw1NDkuMSA4NTEuNSw1NDYuOEM4NTEuNSw1NDQuNSA4NTEuOCw1NDIuNSA4NTIuNSw1NDAuNkM4NTMuMSw1MzguNyA4NTQuMSw1MzcuMiA4NTUuMyw1MzUuOEM4NTYuNSw1MzQuNSA4NTcuOSw1MzMuNSA4NTkuNiw1MzIuN0M4NjEuMyw1MzIgODYzLjEsNTMxLjYgODY1LjIsNTMxLjZDODY5LjQsNTMxLjYgODcyLjYsNTMyLjYgODc0LjgsNTM0LjZMODgwLDUyOS40Qzg3Ni4xLDUyNi40IDg3MS4xLDUyNC44IDg2NS4yLDUyNC44Qzg2MS45LDUyNC44IDg1OC45LDUyNS4zIDg1Ni4yLDUyNi40Qzg1My41LDUyNy41IDg1MS4yLDUyOC45IDg0OS4zLDUzMC44Qzg0Ny40LDUzMi43IDg0NS45LDUzNSA4NDQuOSw1MzcuN0M4NDMuOSw1NDAuNCA4NDMuNCw1NDMuNCA4NDMuNCw1NDYuNkM4NDMuNCw1NDkuOCA4NDMuOSw1NTIuOCA4NDUsNTU1LjVDODQ2LjEsNTU4LjIgODQ3LjUsNTYwLjUgODQ5LjQsNTYyLjRDODUxLjMsNTY0LjMgODUzLjYsNTY1LjggODU2LjMsNTY2LjhDODU5LDU2Ny45IDg2Miw1NjguNCA4NjUuMiw1NjguNEM4NjguNCw1NjguNCA4NzEuMyw1NjcuOSA4NzMuOSw1NjYuOEM4NzYuNSw1NjUuNyA4NzguNyw1NjQuMyA4ODAuNSw1NjIuNEM4ODIuMyw1NjAuNSA4ODMuNyw1NTguMiA4ODQuNyw1NTUuNUM4ODUuNyw1NTIuOCA4ODYuMiw1NDkuOCA4ODYuMiw1NDYuNkw4ODYuMiw1NDUuM0M4ODUuOSw1NDUuMSA4ODUuOCw1NDQuNiA4ODUuOCw1NDQuMiIgc3R5bGU9ImZpbGw6cmdiKDI0LDI5LDMxKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgICAgICA8cGF0aCBkPSJNOTQ2LjgsNTQ0LjJMOTI3LjUsNTQ0LjJMOTI3LjUsNTUwLjlMOTM4LjUsNTUwLjlDOTM4LjIsNTU0LjMgOTM2LjksNTU2LjkgOTM0LjcsNTU5QzkzMi41LDU2MSA5MjkuNyw1NjIgOTI2LjEsNTYyQzkyNC4xLDU2MiA5MjIuMiw1NjEuNiA5MjAuNiw1NjAuOUM5MTguOSw1NjAuMiA5MTcuNSw1NTkuMiA5MTYuMyw1NTcuOEM5MTUuMSw1NTYuNSA5MTQuMiw1NTQuOSA5MTMuNSw1NTNDOTEyLjgsNTUxLjEgOTEyLjUsNTQ5LjEgOTEyLjUsNTQ2LjhDOTEyLjUsNTQ0LjUgOTEyLjgsNTQyLjUgOTEzLjUsNTQwLjZDOTE0LjEsNTM4LjcgOTE1LjEsNTM3LjIgOTE2LjMsNTM1LjhDOTE3LjUsNTM0LjUgOTE4LjksNTMzLjUgOTIwLjYsNTMyLjdDOTIyLjMsNTMyIDkyNC4xLDUzMS42IDkyNi4yLDUzMS42QzkzMC40LDUzMS42IDkzMy42LDUzMi42IDkzNS44LDUzNC42TDk0MSw1MjkuNEM5MzcuMSw1MjYuNCA5MzIuMSw1MjQuOCA5MjYuMiw1MjQuOEM5MjIuOSw1MjQuOCA5MTkuOSw1MjUuMyA5MTcuMiw1MjYuNEM5MTQuNSw1MjcuNSA5MTIuMiw1MjguOSA5MTAuMyw1MzAuOEM5MDguNCw1MzIuNyA5MDYuOSw1MzUgOTA1LjksNTM3LjdDOTA0LjksNTQwLjQgOTA0LjQsNTQzLjQgOTA0LjQsNTQ2LjZDOTA0LjQsNTQ5LjggOTA0LjksNTUyLjggOTA2LDU1NS41QzkwNy4xLDU1OC4yIDkwOC41LDU2MC41IDkxMC40LDU2Mi40QzkxMi4zLDU2NC4zIDkxNC42LDU2NS44IDkxNy4zLDU2Ni44QzkyMCw1NjcuOSA5MjMsNTY4LjQgOTI2LjIsNTY4LjRDOTI5LjQsNTY4LjQgOTMyLjMsNTY3LjkgOTM0LjksNTY2LjhDOTM3LjUsNTY1LjcgOTM5LjcsNTY0LjMgOTQxLjUsNTYyLjRDOTQzLjMsNTYwLjUgOTQ0LjcsNTU4LjIgOTQ1LjcsNTU1LjVDOTQ2LjcsNTUyLjggOTQ3LjIsNTQ5LjggOTQ3LjIsNTQ2LjZMOTQ3LjIsNTQ1LjNDOTQ2LjksNTQ1LjEgOTQ2LjgsNTQ0LjYgOTQ2LjgsNTQ0LjIiIHN0eWxlPSJmaWxsOnJnYigyNCwyOSwzMSk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=);
 background-repeat: no-repeat;
 background-size: 170px 40px;
 display: block;
 height: 40px;
 width: 170px;
 opacity: 0.5;
}

.ag-watermark-text {
 opacity: 0.5;
 font-weight: bold;
 font-family: Impact, sans-serif;
 font-size: 19px;
 padding-left: 0.7rem;
}

.ag-root-wrapper-body {
 display: -webkit-box;
 display: flex;
 -webkit-box-orient: horizontal;
 -webkit-box-direction: normal;
         flex-direction: row;
}
.ag-root-wrapper-body.ag-layout-normal {
 -webkit-box-flex: 1;
         flex: 1 1 auto;
 height: 0;
 min-height: 0;
}

.ag-root {
 position: relative;
 display: -webkit-box;
 display: flex;
 -webkit-box-orient: vertical;
 -webkit-box-direction: normal;
         flex-direction: column;
}
.ag-root.ag-layout-normal, .ag-root.ag-layout-auto-height {
 overflow: hidden;
 -webkit-box-flex: 1;
         flex: 1 1 auto;
 width: 0;
}
.ag-root.ag-layout-normal {
 height: 100%;
}

/**
****************************
* Viewports
****************************
*/
.ag-header-viewport,
.ag-floating-top-viewport,
.ag-body-viewport,
.ag-center-cols-viewport,
.ag-floating-bottom-viewport,
.ag-body-horizontal-scroll-viewport,
.ag-virtual-list-viewport,
.ag-sticky-top-viewport {
 position: relative;
 height: 100%;
 min-width: 0px;
 overflow: hidden;
 -webkit-box-flex: 1;
         flex: 1 1 auto;
}

.ag-body-viewport {
 display: -webkit-box;
 display: flex;
}
.ag-body-viewport.ag-layout-normal {
 overflow-y: auto;
 -webkit-overflow-scrolling: touch;
}

.ag-center-cols-viewport {
 width: 100%;
 overflow-x: auto;
}

.ag-body-horizontal-scroll-viewport {
 overflow-x: scroll;
}

.ag-virtual-list-viewport {
 overflow: auto;
 width: 100%;
}

/**
****************************
* Containers
****************************
*/
.ag-header-container,
.ag-floating-top-container,
.ag-body-container,
.ag-pinned-right-cols-container,
.ag-center-cols-container,
.ag-pinned-left-cols-container,
.ag-floating-bottom-container,
.ag-body-horizontal-scroll-container,
.ag-full-width-container,
.ag-floating-bottom-full-width-container,
.ag-virtual-list-container,
.ag-sticky-top-container {
 position: relative;
}

.ag-header-container,
.ag-floating-top-container,
.ag-floating-bottom-container,
.ag-sticky-top-container {
 height: 100%;
 white-space: nowrap;
}

.ag-center-cols-container {
 display: block;
}

.ag-pinned-right-cols-container {
 display: block;
}

.ag-body-horizontal-scroll-container {
 height: 100%;
}

.ag-full-width-container,
.ag-floating-top-full-width-container,
.ag-floating-bottom-full-width-container,
.ag-sticky-top-full-width-container {
 position: absolute;
 top: 0px;
 left: 0px;
 pointer-events: none;
}

.ag-full-width-container {
 width: 100%;
}

.ag-floating-bottom-full-width-container, .ag-floating-top-full-width-container {
 display: inline-block;
 overflow: hidden;
 height: 100%;
 width: 100%;
}

.ag-virtual-list-container {
 overflow: hidden;
}

/**
****************************
* Scrollers
****************************
*/
.ag-center-cols-clipper {
 -webkit-box-flex: 1;
         flex: 1 1 auto;
 min-width: 0;
 overflow: hidden;
 min-height: 100%;
 -webkit-transform: translate3d(0, 0, 0);
         transform: translate3d(0, 0, 0);
}

.ag-body-horizontal-scroll {
 min-height: 0;
 min-width: 0;
 width: 100%;
 display: -webkit-box;
 display: flex;
 position: absolute;
 bottom: 0;
}
.ag-body-horizontal-scroll.ag-scrollbar-invisible {
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
}
.ag-body-horizontal-scroll.ag-scrollbar-invisible.ag-apple-scrollbar {
 display: none;
}
.ag-body-horizontal-scroll.ag-scrollbar-invisible.ag-apple-scrollbar.ag-scrollbar-scrolling, .ag-body-horizontal-scroll.ag-scrollbar-invisible.ag-apple-scrollbar.ag-scrollbar-active {
 display: inherit;
}

.ag-force-vertical-scroll {
 overflow-y: scroll !important;
}

.ag-horizontal-left-spacer, .ag-horizontal-right-spacer {
 height: 100%;
 min-width: 0;
 overflow-x: scroll;
}
.ag-horizontal-left-spacer.ag-scroller-corner, .ag-horizontal-right-spacer.ag-scroller-corner {
 overflow-x: hidden;
}

/**
****************************
* Headers
****************************
*/
.ag-header, .ag-pinned-left-header, .ag-pinned-right-header {
 display: inline-block;
 overflow: hidden;
 position: relative;
}

.ag-header-cell-sortable {
 cursor: pointer;
}

.ag-header {
 display: -webkit-box;
 display: flex;
 width: 100%;
 white-space: nowrap;
}

.ag-pinned-left-header {
 height: 100%;
}

.ag-pinned-right-header {
 height: 100%;
}

.ag-header-row {
 position: absolute;
 overflow: hidden;
}

.ag-header-cell {
 display: -webkit-inline-box;
 display: inline-flex;
 -webkit-box-align: center;
         align-items: center;
 position: absolute;
 height: 100%;
 overflow: hidden;
}

.ag-header-cell.ag-header-active .ag-header-cell-menu-button {
 opacity: 1;
}

.ag-header-cell-menu-button:not(.ag-header-menu-always-show) {
 -webkit-transition: opacity 0.2s;
 transition: opacity 0.2s;
 opacity: 0;
}

.ag-header-group-cell-label, .ag-header-cell-label {
 display: -webkit-box;
 display: flex;
 -webkit-box-flex: 1;
         flex: 1 1 auto;
 overflow: hidden;
 -webkit-box-align: center;
         align-items: center;
 text-overflow: ellipsis;
 align-self: stretch;
}

${agHeaderCellText}

.ag-header-cell:not(.ag-header-cell-auto-height) .ag-header-cell-comp-wrapper {
 height: 100%;
 display: -webkit-box;
 display: flex;
 -webkit-box-align: center;
         align-items: center;
}

.ag-header-cell-comp-wrapper {
 width: 100%;
 overflow: hidden;
}

.ag-header-cell-wrap-text .ag-header-cell-comp-wrapper {
 white-space: normal;
}

.ag-right-aligned-header .ag-header-cell-label {
 -webkit-box-orient: horizontal;
 -webkit-box-direction: reverse;
         flex-direction: row-reverse;
}

.ag-header-group-text {
 overflow: hidden;
 text-overflow: ellipsis;
 white-space: nowrap;
}

.ag-header-cell-resize {
 position: absolute;
 z-index: 2;
 height: 100%;
 width: 8px;
 top: 0;
 cursor: ew-resize;
}
.ag-ltr .ag-header-cell-resize {
 right: -4px;
}
.ag-rtl .ag-header-cell-resize {
 left: -4px;
}

.ag-pinned-left-header .ag-header-cell-resize {
 right: -4px;
}

.ag-pinned-right-header .ag-header-cell-resize {
 left: -4px;
}

.ag-header-select-all {
 display: -webkit-box;
 display: flex;
}

/**
****************************
* Columns
****************************
*/
.ag-column-moving .ag-cell {
 -webkit-transition: left 0.2s;
 transition: left 0.2s;
}
.ag-column-moving .ag-header-cell {
 -webkit-transition: left 0.2s;
 transition: left 0.2s;
}
.ag-column-moving .ag-header-group-cell {
 -webkit-transition: left 0.2s, width 0.2s;
 transition: left 0.2s, width 0.2s;
}

/**
****************************
* Column Panel
****************************
*/
.ag-column-panel {
 display: -webkit-box;
 display: flex;
 -webkit-box-orient: vertical;
 -webkit-box-direction: normal;
         flex-direction: column;
 overflow: hidden;
 -webkit-box-flex: 1;
         flex: 1 1 auto;
}

.ag-column-select {
 position: relative;
 display: -webkit-box;
 display: flex;
 -webkit-box-orient: vertical;
 -webkit-box-direction: normal;
         flex-direction: column;
 overflow: hidden;
 -webkit-box-flex: 3;
         flex: 3 1 0px;
}

.ag-column-select-header {
 position: relative;
 display: -webkit-box;
 display: flex;
 -webkit-box-flex: 0;
         flex: none;
}

.ag-column-select-header-icon {
 position: relative;
}

.ag-column-select-header-filter-wrapper {
 -webkit-box-flex: 1;
         flex: 1 1 auto;
}

.ag-column-select-header-filter {
 width: 100%;
}

.ag-column-select-list {
 -webkit-box-flex: 1;
         flex: 1 1 0px;
 overflow: hidden;
}

.ag-column-drop {
 position: relative;
 display: -webkit-inline-box;
 display: inline-flex;
 -webkit-box-align: center;
         align-items: center;
 overflow: auto;
 width: 100%;
}

.ag-column-drop-list {
 display: -webkit-box;
 display: flex;
 -webkit-box-align: center;
         align-items: center;
}

.ag-column-drop-cell {
 position: relative;
 display: -webkit-box;
 display: flex;
 -webkit-box-align: center;
         align-items: center;
}

.ag-column-drop-cell-text {
 overflow: hidden;
 -webkit-box-flex: 1;
         flex: 1 1 auto;
 text-overflow: ellipsis;
 white-space: nowrap;
}

.ag-column-drop-vertical {
 display: -webkit-box;
 display: flex;
 -webkit-box-orient: vertical;
 -webkit-box-direction: normal;
         flex-direction: column;
 overflow: hidden;
 -webkit-box-align: stretch;
         align-items: stretch;
 -webkit-box-flex: 1;
         flex: 1 1 0px;
}

.ag-column-drop-vertical-title-bar {
 display: -webkit-box;
 display: flex;
 -webkit-box-align: center;
         align-items: center;
 -webkit-box-flex: 0;
         flex: none;
}

.ag-column-drop-vertical-list {
 position: relative;
 -webkit-box-align: stretch;
         align-items: stretch;
 -webkit-box-flex: 1;
         flex-grow: 1;
 -webkit-box-orient: vertical;
 -webkit-box-direction: normal;
         flex-direction: column;
 overflow-x: auto;
}
.ag-column-drop-vertical-list > * {
 -webkit-box-flex: 0;
         flex: none;
}

.ag-column-drop-empty .ag-column-drop-vertical-list {
 overflow: hidden;
}

.ag-column-drop-vertical-empty-message {
 display: block;
}

.ag-column-drop.ag-column-drop-horizontal {
 white-space: nowrap;
 overflow: hidden;
}

.ag-column-drop-cell-button {
 cursor: pointer;
}

.ag-filter-toolpanel {
 -webkit-box-flex: 1;
         flex: 1 1 0px;
 min-width: 0;
}

.ag-filter-toolpanel-header {
 position: relative;
}

.ag-filter-toolpanel-header, .ag-filter-toolpanel-search {
 display: -webkit-box;
 display: flex;
 -webkit-box-align: center;
         align-items: center;
}
.ag-filter-toolpanel-header > *, .ag-filter-toolpanel-search > * {
 display: -webkit-box;
 display: flex;
 -webkit-box-align: center;
         align-items: center;
}

.ag-filter-apply-panel {
 display: -webkit-box;
 display: flex;
 -webkit-box-pack: end;
         justify-content: flex-end;
 overflow: hidden;
}

/**
****************************
* Rows
****************************
*/
.ag-row-animation .ag-row {
 -webkit-transition: top 0.4s, background-color 0.1s, opacity 0.2s, -webkit-transform 0.4s;
 transition: top 0.4s, background-color 0.1s, opacity 0.2s, -webkit-transform 0.4s;
 transition: transform 0.4s, top 0.4s, background-color 0.1s, opacity 0.2s;
 transition: transform 0.4s, top 0.4s, background-color 0.1s, opacity 0.2s, -webkit-transform 0.4s;
}

.ag-row-animation .ag-row.ag-after-created {
 -webkit-transition: top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s, -webkit-transform 0.4s;
 transition: top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s, -webkit-transform 0.4s;
 transition: transform 0.4s, top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s;
 transition: transform 0.4s, top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s, -webkit-transform 0.4s;
}

.ag-row-no-animation .ag-row {
 -webkit-transition: background-color 0.1s;
 transition: background-color 0.1s;
}

.ag-row {
 white-space: nowrap;
 width: 100%;
}

.ag-row-loading {
 display: -webkit-box;
 display: flex;
 -webkit-box-align: center;
         align-items: center;
}

.ag-row-position-absolute {
 position: absolute;
}

.ag-row-position-relative {
 position: relative;
}

.ag-full-width-row {
 overflow: hidden;
 pointer-events: all;
}

.ag-row-inline-editing {
 z-index: 1;
}

.ag-row-dragging {
 z-index: 2;
}

.ag-stub-cell {
 display: -webkit-box;
 display: flex;
 -webkit-box-align: center;
         align-items: center;
}

/**
****************************
* Cells
****************************
*/
${agCell}

.ag-cell-value {
 -webkit-box-flex: 1;
         flex: 1 1 auto;
}

.ag-cell-value, .ag-group-value {
 overflow: hidden;
 text-overflow: ellipsis;
}

.ag-cell-wrap-text {
 white-space: normal;
 word-break: break-all;
}

.ag-cell-wrapper {
 display: -webkit-box;
 display: flex;
 -webkit-box-align: center;
         align-items: center;
}
.ag-cell-wrapper.ag-row-group {
 -webkit-box-align: start;
         align-items: flex-start;
}

.ag-sparkline-wrapper {
 position: absolute;
 height: 100%;
 width: 100%;
 left: 0;
 top: 0;
}

.ag-full-width-row .ag-cell-wrapper.ag-row-group {
 height: 100%;
 -webkit-box-align: center;
         align-items: center;
}

.ag-cell-inline-editing {
 z-index: 1;
}
.ag-cell-inline-editing .ag-cell-wrapper,
.ag-cell-inline-editing .ag-cell-edit-wrapper,
.ag-cell-inline-editing .ag-cell-editor,
.ag-cell-inline-editing .ag-cell-editor .ag-wrapper,
.ag-cell-inline-editing .ag-cell-editor input {
 height: 100%;
 width: 100%;
 line-height: normal;
}

.ag-cell .ag-icon {
 display: inline-block;
 vertical-align: middle;
}

/**
****************************
* Filters
****************************
*/
.ag-set-filter-item {
 display: -webkit-box;
 display: flex;
 -webkit-box-align: center;
         align-items: center;
 height: 100%;
}

.ag-set-filter-item-value {
 overflow: hidden;
 text-overflow: ellipsis;
 white-space: nowrap;
}

.ag-set-filter-item-checkbox {
 display: -webkit-box;
 display: flex;
}

.ag-filter-body-wrapper {
 display: -webkit-box;
 display: flex;
 -webkit-box-orient: vertical;
 -webkit-box-direction: normal;
         flex-direction: column;
}

.ag-filter-filter {
 -webkit-box-flex: 1;
         flex: 1 1 0px;
}

.ag-filter-condition {
 display: -webkit-box;
 display: flex;
 -webkit-box-pack: center;
         justify-content: center;
}

/**
****************************
* Floating Filter
****************************
*/
.ag-floating-filter-body {
 position: relative;
 display: -webkit-box;
 display: flex;
 -webkit-box-flex: 1;
         flex: 1 1 auto;
 height: 100%;
}

.ag-floating-filter-full-body {
 display: -webkit-box;
 display: flex;
 -webkit-box-flex: 1;
         flex: 1 1 auto;
 height: 100%;
 width: 100%;
 -webkit-box-align: center;
         align-items: center;
 overflow: hidden;
}

.ag-floating-filter-full-body > div {
 -webkit-box-flex: 1;
         flex: 1 1 auto;
}

.ag-floating-filter-input {
 -webkit-box-align: center;
         align-items: center;
 display: -webkit-box;
 display: flex;
 width: 100%;
}
.ag-floating-filter-input > * {
 -webkit-box-flex: 1;
         flex: 1 1 auto;
}

.ag-floating-filter-button {
 display: -webkit-box;
 display: flex;
 -webkit-box-flex: 0;
         flex: none;
}

/**
****************************
* Drag & Drop
****************************
*/
.ag-dnd-ghost {
 position: absolute;
 display: -webkit-inline-box;
 display: inline-flex;
 -webkit-box-align: center;
         align-items: center;
 cursor: move;
 white-space: nowrap;
 z-index: 9999;
}

/**
****************************
* Overlay
****************************
*/
.ag-overlay {
 height: 100%;
 left: 0;
 pointer-events: none;
 position: absolute;
 top: 0;
 width: 100%;
}

.ag-overlay-panel {
 display: -webkit-box;
 display: flex;
 height: 100%;
 width: 100%;
}

.ag-overlay-wrapper {
 display: -webkit-box;
 display: flex;
 -webkit-box-flex: 0;
         flex: none;
 width: 100%;
 height: 100%;
 -webkit-box-align: center;
         align-items: center;
 -webkit-box-pack: center;
         justify-content: center;
 text-align: center;
}

.ag-overlay-loading-wrapper {
 pointer-events: all;
}

/**
****************************
* Popup
****************************
*/
.ag-popup-child {
 z-index: 5;
 top: 0;
}

.ag-popup-editor {
 position: absolute;
 -webkit-user-select: none;
    -moz-user-select: none;
         user-select: none;
 z-index: 1;
}

.ag-large-text-input {
 display: block;
}

/**
****************************
* Virtual Lists
****************************
*/
.ag-virtual-list-item {
 position: absolute;
 width: 100%;
}

/**
****************************
* Floating Top and Bottom
****************************
*/
.ag-floating-top {
 overflow: hidden;
 white-space: nowrap;
 width: 100%;
 position: relative;
 display: -webkit-box;
 display: flex;
}

.ag-pinned-left-floating-top {
 display: inline-block;
 overflow: hidden;
 position: relative;
 min-width: 0px;
}

.ag-pinned-right-floating-top {
 display: inline-block;
 overflow: hidden;
 position: relative;
 min-width: 0px;
}

.ag-floating-bottom {
 overflow: hidden;
 white-space: nowrap;
 width: 100%;
 position: relative;
 display: -webkit-box;
 display: flex;
}

.ag-pinned-left-floating-bottom {
 display: inline-block;
 overflow: hidden;
 position: relative;
 min-width: 0px;
}

.ag-pinned-right-floating-bottom {
 display: inline-block;
 overflow: hidden;
 position: relative;
 min-width: 0px;
}

/**
****************************
* Sticky Top
****************************
*/
.ag-sticky-top {
 position: absolute;
 display: -webkit-box;
 display: flex;
 width: 100%;
}

.ag-pinned-left-sticky-top,
.ag-pinned-right-sticky-top {
 position: relative;
 height: 100%;
 overflow: hidden;
}

.ag-sticky-top-full-width-container {
 overflow: hidden;
 width: 100%;
 height: 100%;
}

/**
****************************
* Dialog
****************************
*/
.ag-dialog, .ag-panel {
 display: -webkit-box;
 display: flex;
 -webkit-box-orient: vertical;
 -webkit-box-direction: normal;
         flex-direction: column;
 position: relative;
 overflow: hidden;
}

.ag-panel-title-bar {
 display: -webkit-box;
 display: flex;
 -webkit-box-flex: 0;
         flex: none;
 -webkit-box-align: center;
         align-items: center;
 cursor: default;
}

.ag-panel-title-bar-title {
 -webkit-box-flex: 1;
         flex: 1 1 auto;
}

.ag-panel-title-bar-buttons {
 display: -webkit-box;
 display: flex;
}

.ag-panel-title-bar-button {
 cursor: pointer;
}

.ag-panel-content-wrapper {
 display: -webkit-box;
 display: flex;
 -webkit-box-flex: 1;
         flex: 1 1 auto;
 position: relative;
 overflow: hidden;
}

.ag-dialog {
 position: absolute;
}

.ag-resizer {
 position: absolute;
 pointer-events: none;
 -webkit-user-select: none;
    -moz-user-select: none;
         user-select: none;
 z-index: 1;
}
.ag-resizer.ag-resizer-topLeft {
 top: 0;
 left: 0;
 height: 5px;
 width: 5px;
 cursor: nwse-resize;
}
.ag-resizer.ag-resizer-top {
 top: 0;
 left: 5px;
 right: 5px;
 height: 5px;
 cursor: ns-resize;
}
.ag-resizer.ag-resizer-topRight {
 top: 0;
 right: 0;
 height: 5px;
 width: 5px;
 cursor: nesw-resize;
}
.ag-resizer.ag-resizer-right {
 top: 5px;
 right: 0;
 bottom: 5px;
 width: 5px;
 cursor: ew-resize;
}
.ag-resizer.ag-resizer-bottomRight {
 bottom: 0;
 right: 0;
 height: 5px;
 width: 5px;
 cursor: nwse-resize;
}
.ag-resizer.ag-resizer-bottom {
 bottom: 0;
 left: 5px;
 right: 5px;
 height: 5px;
 cursor: ns-resize;
}
.ag-resizer.ag-resizer-bottomLeft {
 bottom: 0;
 left: 0;
 height: 5px;
 width: 5px;
 cursor: nesw-resize;
}
.ag-resizer.ag-resizer-left {
 left: 0;
 top: 5px;
 bottom: 5px;
 width: 5px;
 cursor: ew-resize;
}

/**
****************************
* Tooltip
****************************
*/
.ag-tooltip {
 position: absolute;
 pointer-events: none;
 z-index: 99999;
}

.ag-tooltip-custom {
 position: absolute;
 pointer-events: none;
 z-index: 99999;
}

/**
****************************
* Animations
****************************
*/
.ag-value-slide-out {
 margin-right: 5px;
 opacity: 1;
 -webkit-transition: opacity 3s, margin-right 3s;
 transition: opacity 3s, margin-right 3s;
 -webkit-transition-timing-function: linear;
         transition-timing-function: linear;
}

.ag-value-slide-out-end {
 margin-right: 10px;
 opacity: 0;
}

.ag-opacity-zero {
 opacity: 0 !important;
}

/**
****************************
* Menu
****************************
*/
.ag-menu {
 max-height: 100%;
 overflow-y: auto;
 position: absolute;
 -webkit-user-select: none;
    -moz-user-select: none;
         user-select: none;
}

.ag-menu-column-select-wrapper {
 height: 265px;
 overflow: auto;
}
.ag-menu-column-select-wrapper .ag-column-select {
 height: 100%;
}

.ag-menu-list {
 display: table;
 width: 100%;
}

.ag-menu-option, .ag-menu-separator {
 display: table-row;
}

.ag-menu-option-part, .ag-menu-separator-part {
 display: table-cell;
 vertical-align: middle;
}

.ag-menu-option-text {
 white-space: nowrap;
}

.ag-compact-menu-option {
 width: 100%;
 display: -webkit-box;
 display: flex;
 flex-wrap: nowrap;
}

.ag-compact-menu-option-text {
 white-space: nowrap;
 -webkit-box-flex: 1;
         flex: 1 1 auto;
}

/**
****************************
* Rich Select
****************************
*/
.ag-rich-select {
 cursor: default;
 outline: none;
}

.ag-rich-select-value {
 display: -webkit-box;
 display: flex;
 -webkit-box-align: center;
         align-items: center;
}

.ag-rich-select-value-icon {
 -webkit-box-flex: 1;
         flex: 1 1 auto;
 -webkit-box-ordinal-group: 2;
         order: 1;
}
.ag-ltr .ag-rich-select-value-icon {
 text-align: right;
}
.ag-rtl .ag-rich-select-value-icon {
 text-align: left;
}

.ag-rich-select-list {
 position: relative;
}

.ag-rich-select-virtual-list-item {
 display: -webkit-box;
 display: flex;
}

.ag-rich-select-row {
 display: -webkit-box;
 display: flex;
 -webkit-box-flex: 1;
         flex: 1 1 auto;
 -webkit-box-align: center;
         align-items: center;
 white-space: nowrap;
}

/**
****************************
* Pagination
****************************
*/
.ag-paging-panel {
 -webkit-box-align: center;
         align-items: center;
 display: -webkit-box;
 display: flex;
 -webkit-box-pack: end;
         justify-content: flex-end;
}

.ag-paging-page-summary-panel {
 display: -webkit-box;
 display: flex;
 -webkit-box-align: center;
         align-items: center;
}

.ag-paging-button {
 position: relative;
}

.ag-disabled .ag-paging-page-summary-panel {
 pointer-events: none;
}

/**
****************************
* Tool Panel
****************************
*/
.ag-tool-panel-wrapper {
 display: -webkit-box;
 display: flex;
 overflow-y: auto;
 overflow-x: hidden;
 cursor: default;
 -webkit-user-select: none;
    -moz-user-select: none;
         user-select: none;
}

.ag-column-select-column,
.ag-column-select-column-group,
.ag-select-agg-func-item {
 position: relative;
 -webkit-box-align: center;
         align-items: center;
 display: -webkit-box;
 display: flex;
 -webkit-box-orient: horizontal;
 -webkit-box-direction: normal;
         flex-direction: row;
 flex-wrap: nowrap;
 text-overflow: ellipsis;
 white-space: nowrap;
 height: 100%;
}
.ag-column-select-column > *,
.ag-column-select-column-group > *,
.ag-select-agg-func-item > * {
 -webkit-box-flex: 0;
         flex: none;
}

.ag-column-select-checkbox {
 display: -webkit-box;
 display: flex;
}

.ag-tool-panel-horizontal-resize {
 cursor: ew-resize;
 height: 100%;
 position: absolute;
 top: 0;
 width: 5px;
 z-index: 1;
}

.ag-ltr .ag-side-bar-left .ag-tool-panel-horizontal-resize {
 right: -3px;
}
.ag-rtl .ag-side-bar-left .ag-tool-panel-horizontal-resize {
 left: -3px;
}

.ag-ltr .ag-side-bar-right .ag-tool-panel-horizontal-resize {
 left: -3px;
}
.ag-rtl .ag-side-bar-right .ag-tool-panel-horizontal-resize {
 right: -3px;
}

.ag-details-row {
 width: 100%;
}

.ag-details-row-fixed-height {
 height: 100%;
}

.ag-details-grid {
 width: 100%;
}

.ag-details-grid-fixed-height {
 height: 100%;
}

.ag-header-group-cell {
 display: -webkit-box;
 display: flex;
 -webkit-box-align: center;
         align-items: center;
 height: 100%;
 position: absolute;
}

.ag-cell-label-container {
 display: -webkit-box;
 display: flex;
 -webkit-box-pack: justify;
         justify-content: space-between;
 -webkit-box-orient: horizontal;
 -webkit-box-direction: reverse;
         flex-direction: row-reverse;
 -webkit-box-align: center;
         align-items: center;
 height: 100%;
 width: 100%;
 overflow: hidden;
 padding: 5px 0px;
}

.ag-right-aligned-header .ag-cell-label-container {
 -webkit-box-orient: horizontal;
 -webkit-box-direction: normal;
         flex-direction: row;
}

/**
****************************
* Side Bar
****************************
*/
.ag-side-bar {
 display: -webkit-box;
 display: flex;
 -webkit-box-orient: horizontal;
 -webkit-box-direction: reverse;
         flex-direction: row-reverse;
}

.ag-side-bar-left {
 -webkit-box-ordinal-group: 0;
         order: -1;
 -webkit-box-orient: horizontal;
 -webkit-box-direction: normal;
         flex-direction: row;
}

.ag-side-button-button {
 position: relative;
 display: -webkit-box;
 display: flex;
 -webkit-box-orient: vertical;
 -webkit-box-direction: normal;
         flex-direction: column;
 -webkit-box-align: center;
         align-items: center;
 -webkit-box-pack: center;
         justify-content: center;
 flex-wrap: nowrap;
 white-space: nowrap;
 outline: none;
 cursor: pointer;
}

.ag-side-button-label {
 -webkit-writing-mode: vertical-lr;
         writing-mode: vertical-lr;
}

/**
****************************
* Status Bar
****************************
*/
.ag-status-bar {
 display: -webkit-box;
 display: flex;
 -webkit-box-pack: justify;
         justify-content: space-between;
 overflow: hidden;
}

.ag-status-panel {
 display: -webkit-inline-box;
 display: inline-flex;
}

.ag-status-name-value {
 white-space: nowrap;
}

.ag-status-bar-left {
 display: -webkit-inline-box;
 display: inline-flex;
}

.ag-status-bar-center {
 display: -webkit-inline-box;
 display: inline-flex;
}

.ag-status-bar-right {
 display: -webkit-inline-box;
 display: inline-flex;
}

/**
****************************
* Widgets
****************************
*/
.ag-icon {
 display: block;
 speak: none;
}

.ag-group {
 position: relative;
 width: 100%;
}

.ag-group-title-bar {
 display: -webkit-box;
 display: flex;
 -webkit-box-align: center;
         align-items: center;
}

.ag-group-title {
 display: block;
 -webkit-box-flex: 1;
         flex: 1 1 auto;
 min-width: 0;
 overflow: hidden;
 white-space: nowrap;
 text-overflow: ellipsis;
}

.ag-group-title-bar .ag-group-title {
 cursor: default;
}

.ag-group-toolbar {
 display: -webkit-box;
 display: flex;
 -webkit-box-align: center;
         align-items: center;
}

.ag-group-container {
 display: -webkit-box;
 display: flex;
}

.ag-disabled .ag-group-container {
 pointer-events: none;
}

.ag-group-container-horizontal {
 -webkit-box-orient: horizontal;
 -webkit-box-direction: normal;
         flex-direction: row;
 flex-wrap: wrap;
}

.ag-group-container-vertical {
 -webkit-box-orient: vertical;
 -webkit-box-direction: normal;
         flex-direction: column;
}

.ag-column-group-icons {
 display: block;
}
.ag-column-group-icons > * {
 cursor: pointer;
}

.ag-group-item-alignment-stretch .ag-group-item {
 -webkit-box-align: stretch;
         align-items: stretch;
}

.ag-group-item-alignment-start .ag-group-item {
 -webkit-box-align: start;
         align-items: flex-start;
}

.ag-group-item-alignment-end .ag-group-item {
 -webkit-box-align: end;
         align-items: flex-end;
}

.ag-toggle-button-icon {
 -webkit-transition: right 0.3s;
 transition: right 0.3s;
 position: absolute;
 top: -1px;
}

.ag-input-field, .ag-select {
 display: -webkit-box;
 display: flex;
 -webkit-box-orient: horizontal;
 -webkit-box-direction: normal;
         flex-direction: row;
 -webkit-box-align: center;
         align-items: center;
}

.ag-input-field-input {
 -webkit-box-flex: 1;
         flex: 1 1 auto;
 width: 100%;
 min-width: 0;
}

.ag-floating-filter-input .ag-input-field-input[type=date] {
 width: 1px;
}

.ag-range-field {
 display: -webkit-box;
 display: flex;
 -webkit-box-align: center;
         align-items: center;
}

.ag-angle-select {
 display: -webkit-box;
 display: flex;
 -webkit-box-align: center;
         align-items: center;
}

.ag-angle-select-wrapper {
 display: -webkit-box;
 display: flex;
}

.ag-angle-select-parent-circle {
 display: block;
 position: relative;
}

.ag-angle-select-child-circle {
 position: absolute;
}

.ag-slider-wrapper {
 display: -webkit-box;
 display: flex;
}
.ag-slider-wrapper .ag-input-field {
 -webkit-box-flex: 1;
         flex: 1 1 auto;
}

.ag-picker-field-display {
 -webkit-box-flex: 1;
         flex: 1 1 auto;
}

.ag-picker-field {
 display: -webkit-box;
 display: flex;
 -webkit-box-align: center;
         align-items: center;
}

.ag-picker-field-icon {
 display: -webkit-box;
 display: flex;
 border: 0;
 padding: 0;
 margin: 0;
 cursor: pointer;
}

.ag-picker-field-wrapper {
 overflow: hidden;
}

.ag-label-align-right .ag-label {
 -webkit-box-ordinal-group: 2;
         order: 1;
}
.ag-label-align-right > * {
 -webkit-box-flex: 0;
         flex: none;
}

.ag-label-align-top {
 -webkit-box-orient: vertical;
 -webkit-box-direction: normal;
         flex-direction: column;
 -webkit-box-align: start;
         align-items: flex-start;
}
.ag-label-align-top > * {
 align-self: stretch;
}

.ag-color-panel {
 width: 100%;
 display: -webkit-box;
 display: flex;
 -webkit-box-orient: vertical;
 -webkit-box-direction: normal;
         flex-direction: column;
 text-align: center;
}

.ag-spectrum-color {
 -webkit-box-flex: 1;
         flex: 1 1 auto;
 position: relative;
 overflow: hidden;
 cursor: default;
}

.ag-spectrum-fill {
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
}

.ag-spectrum-val {
 cursor: pointer;
}

.ag-spectrum-dragger {
 position: absolute;
 pointer-events: none;
 cursor: pointer;
}

.ag-spectrum-hue {
 cursor: default;
 background: -webkit-gradient(linear, right top, left top, color-stop(3%, #ff0000), color-stop(17%, #ffff00), color-stop(33%, #00ff00), color-stop(50%, #00ffff), color-stop(67%, #0000ff), color-stop(83%, #ff00ff), to(#ff0000));
 background: linear-gradient(to left, #ff0000 3%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);
}

.ag-spectrum-alpha {
 cursor: default;
}

.ag-spectrum-hue-background {
 width: 100%;
 height: 100%;
}

.ag-spectrum-alpha-background {
 background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0)), to(rgb(0, 0, 0)));
 background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(0, 0, 0));
 width: 100%;
 height: 100%;
}

.ag-spectrum-tool {
 cursor: pointer;
}

.ag-spectrum-slider {
 position: absolute;
 pointer-events: none;
}

.ag-recent-colors {
 display: -webkit-box;
 display: flex;
}

.ag-recent-color {
 cursor: pointer;
}

.ag-ltr .ag-column-select-indent-1 {
 padding-left: 20px;
}
.ag-rtl .ag-column-select-indent-1 {
 padding-right: 20px;
}

.ag-ltr .ag-row-group-indent-1 {
 padding-left: 20px;
}
.ag-rtl .ag-row-group-indent-1 {
 padding-right: 20px;
}

.ag-ltr .ag-column-select-indent-2 {
 padding-left: 40px;
}
.ag-rtl .ag-column-select-indent-2 {
 padding-right: 40px;
}

.ag-ltr .ag-row-group-indent-2 {
 padding-left: 40px;
}
.ag-rtl .ag-row-group-indent-2 {
 padding-right: 40px;
}

.ag-ltr .ag-column-select-indent-3 {
 padding-left: 60px;
}
.ag-rtl .ag-column-select-indent-3 {
 padding-right: 60px;
}

.ag-ltr .ag-row-group-indent-3 {
 padding-left: 60px;
}
.ag-rtl .ag-row-group-indent-3 {
 padding-right: 60px;
}

.ag-ltr .ag-column-select-indent-4 {
 padding-left: 80px;
}
.ag-rtl .ag-column-select-indent-4 {
 padding-right: 80px;
}

.ag-ltr .ag-row-group-indent-4 {
 padding-left: 80px;
}
.ag-rtl .ag-row-group-indent-4 {
 padding-right: 80px;
}

.ag-ltr .ag-column-select-indent-5 {
 padding-left: 100px;
}
.ag-rtl .ag-column-select-indent-5 {
 padding-right: 100px;
}

.ag-ltr .ag-row-group-indent-5 {
 padding-left: 100px;
}
.ag-rtl .ag-row-group-indent-5 {
 padding-right: 100px;
}

.ag-ltr .ag-column-select-indent-6 {
 padding-left: 120px;
}
.ag-rtl .ag-column-select-indent-6 {
 padding-right: 120px;
}

.ag-ltr .ag-row-group-indent-6 {
 padding-left: 120px;
}
.ag-rtl .ag-row-group-indent-6 {
 padding-right: 120px;
}

.ag-ltr .ag-column-select-indent-7 {
 padding-left: 140px;
}
.ag-rtl .ag-column-select-indent-7 {
 padding-right: 140px;
}

.ag-ltr .ag-row-group-indent-7 {
 padding-left: 140px;
}
.ag-rtl .ag-row-group-indent-7 {
 padding-right: 140px;
}

.ag-ltr .ag-column-select-indent-8 {
 padding-left: 160px;
}
.ag-rtl .ag-column-select-indent-8 {
 padding-right: 160px;
}

.ag-ltr .ag-row-group-indent-8 {
 padding-left: 160px;
}
.ag-rtl .ag-row-group-indent-8 {
 padding-right: 160px;
}

.ag-ltr .ag-column-select-indent-9 {
 padding-left: 180px;
}
.ag-rtl .ag-column-select-indent-9 {
 padding-right: 180px;
}

.ag-ltr .ag-row-group-indent-9 {
 padding-left: 180px;
}
.ag-rtl .ag-row-group-indent-9 {
 padding-right: 180px;
}

.ag-ltr {
 direction: ltr;
}
.ag-ltr .ag-body, .ag-ltr .ag-floating-top, .ag-ltr .ag-floating-bottom, .ag-ltr .ag-header, .ag-ltr .ag-body-viewport, .ag-ltr .ag-body-horizontal-scroll {
 -webkit-box-orient: horizontal;
 -webkit-box-direction: normal;
         flex-direction: row;
}

.ag-rtl {
 direction: rtl;
}
.ag-rtl .ag-body, .ag-rtl .ag-floating-top, .ag-rtl .ag-floating-bottom, .ag-rtl .ag-header, .ag-rtl .ag-body-viewport, .ag-rtl .ag-body-horizontal-scroll {
 -webkit-box-orient: horizontal;
 -webkit-box-direction: reverse;
         flex-direction: row-reverse;
}
.ag-rtl .ag-icon-contracted,
.ag-rtl .ag-icon-expanded,
.ag-rtl .ag-icon-tree-closed {
 display: block;
 -webkit-transform: rotate(180deg);
         transform: rotate(180deg);
}

.ag-layout-print.ag-body-viewport {
 -webkit-box-flex: 0;
         flex: none;
}
.ag-layout-print.ag-root-wrapper {
 display: -webkit-inline-box;
 display: inline-flex;
}
.ag-layout-print .ag-center-cols-clipper {
 min-width: 100%;
}
.ag-layout-print .ag-body-horizontal-scroll {
 display: none;
}
.ag-layout-print.ag-force-vertical-scroll {
 overflow-y: visible !important;
}

@media print {
 .ag-root-wrapper.ag-layout-print {
   display: table;
 }
 .ag-root-wrapper.ag-layout-print .ag-root-wrapper-body,
.ag-root-wrapper.ag-layout-print .ag-root,
.ag-root-wrapper.ag-layout-print .ag-body-viewport,
.ag-root-wrapper.ag-layout-print .ag-center-cols-container,
.ag-root-wrapper.ag-layout-print .ag-center-cols-viewport,
.ag-root-wrapper.ag-layout-print .ag-center-cols-clipper,
.ag-root-wrapper.ag-layout-print .ag-body-horizontal-scroll-viewport,
.ag-root-wrapper.ag-layout-print .ag-virtual-list-viewport {
   height: auto !important;
   overflow: hidden !important;
   display: block !important;
 }
 .ag-root-wrapper.ag-layout-print .ag-row, .ag-root-wrapper.ag-layout-print .ag-cell {
   -webkit-column-break-inside: avoid;
      -moz-column-break-inside: avoid;
           break-inside: avoid;
 }
}
.ag-body .ag-body-viewport {
 -webkit-overflow-scrolling: touch;
}

.ag-chart {
 position: relative;
 display: -webkit-box;
 display: flex;
 overflow: hidden;
 width: 100%;
 height: 100%;
}

.ag-chart-components-wrapper {
 position: relative;
 display: -webkit-box;
 display: flex;
 -webkit-box-flex: 1;
         flex: 1 1 auto;
 overflow: hidden;
}

.ag-chart-title-edit {
 position: absolute;
 display: none;
 top: 0;
 left: 0;
 text-align: center;
}

.ag-chart-title-edit.currently-editing {
 display: inline-block;
}

.ag-chart-canvas-wrapper {
 position: relative;
 -webkit-box-flex: 1;
         flex: 1 1 auto;
 overflow: hidden;
}

.ag-charts-canvas {
 display: block;
}

.ag-chart-menu {
 position: absolute;
 top: 10px;
 width: 24px;
 overflow: hidden;
 display: -webkit-box;
 display: flex;
 -webkit-box-orient: vertical;
 -webkit-box-direction: normal;
         flex-direction: column;
}
.ag-ltr .ag-chart-menu {
 right: 20px;
}
.ag-rtl .ag-chart-menu {
 left: 20px;
}

.ag-chart-docked-container {
 position: relative;
 width: 0;
 min-width: 0;
 -webkit-transition: min-width 0.4s;
 transition: min-width 0.4s;
}

.ag-chart-menu-hidden ~ .ag-chart-docked-container {
 max-width: 0;
 overflow: hidden;
}

.ag-chart-tabbed-menu {
 width: 100%;
 height: 100%;
 display: -webkit-box;
 display: flex;
 -webkit-box-orient: vertical;
 -webkit-box-direction: normal;
         flex-direction: column;
 overflow: hidden;
}

.ag-chart-tabbed-menu-header {
 -webkit-box-flex: 0;
         flex: none;
 -webkit-user-select: none;
    -moz-user-select: none;
         user-select: none;
 cursor: default;
}

.ag-chart-tabbed-menu-body {
 display: -webkit-box;
 display: flex;
 -webkit-box-flex: 1;
         flex: 1 1 auto;
 -webkit-box-align: stretch;
         align-items: stretch;
 overflow: hidden;
}

.ag-chart-tab {
 width: 100%;
 overflow: hidden;
 overflow-y: auto;
}

.ag-chart-settings {
 overflow-x: hidden;
}

.ag-chart-settings-wrapper {
 position: relative;
 -webkit-box-orient: vertical;
 -webkit-box-direction: normal;
         flex-direction: column;
 width: 100%;
 height: 100%;
 display: -webkit-box;
 display: flex;
 overflow: hidden;
}

.ag-chart-settings-nav-bar {
 display: -webkit-box;
 display: flex;
 -webkit-box-align: center;
         align-items: center;
 width: 100%;
 height: 30px;
 padding: 0 10px;
 -webkit-user-select: none;
    -moz-user-select: none;
         user-select: none;
}

.ag-chart-settings-card-selector {
 display: -webkit-box;
 display: flex;
 -webkit-box-align: center;
         align-items: center;
 justify-content: space-around;
 -webkit-box-flex: 1;
         flex: 1 1 auto;
 height: 100%;
 padding: 0 10px;
}

.ag-chart-settings-card-item {
 cursor: pointer;
 width: 10px;
 height: 10px;
 background-color: #000;
 position: relative;
}
.ag-chart-settings-card-item.ag-not-selected {
 opacity: 0.2;
}
.ag-chart-settings-card-item::before {
 content: " ";
 display: block;
 position: absolute;
 background-color: transparent;
 left: 50%;
 top: 50%;
 margin-left: -10px;
 margin-top: -10px;
 width: 20px;
 height: 20px;
}

.ag-chart-settings-prev,
.ag-chart-settings-next {
 position: relative;
 -webkit-box-flex: 0;
         flex: none;
}

.ag-chart-settings-prev-button,
.ag-chart-settings-next-button {
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 cursor: pointer;
 opacity: 0;
}

.ag-chart-settings-mini-charts-container {
 position: relative;
 -webkit-box-flex: 1;
         flex: 1 1 auto;
 overflow-x: hidden;
 overflow-y: auto;
}

.ag-chart-settings-mini-wrapper {
 position: absolute;
 top: 0;
 left: 0;
 display: -webkit-box;
 display: flex;
 -webkit-box-orient: vertical;
 -webkit-box-direction: normal;
         flex-direction: column;
 width: 100%;
 min-height: 100%;
 overflow: hidden;
}
.ag-chart-settings-mini-wrapper.ag-animating {
 -webkit-transition: left 0.3s;
 transition: left 0.3s;
 -webkit-transition-timing-function: ease-in-out;
         transition-timing-function: ease-in-out;
}

.ag-chart-mini-thumbnail {
 cursor: pointer;
}

.ag-chart-mini-thumbnail-canvas {
 display: block;
}

.ag-chart-data-wrapper,
.ag-chart-format-wrapper {
 display: -webkit-box;
 display: flex;
 -webkit-box-orient: vertical;
 -webkit-box-direction: normal;
         flex-direction: column;
 position: relative;
 -webkit-user-select: none;
    -moz-user-select: none;
         user-select: none;
}

.ag-chart-data-wrapper {
 height: 100%;
 overflow-y: auto;
}

.ag-chart-data-section,
.ag-chart-format-section {
 display: -webkit-box;
 display: flex;
 margin: 0;
}

.ag-chart-empty-text {
 display: -webkit-box;
 display: flex;
 top: 0;
 width: 100%;
 height: 100%;
 -webkit-box-align: center;
         align-items: center;
 -webkit-box-pack: center;
         justify-content: center;
}

.ag-chart-menu-hidden:hover .ag-chart-menu {
 display: block;
}

.ag-chart-menu-close {
 display: none;
}

.ag-chart .ag-chart-tool-panel-button-enable .ag-chart-menu {
 display: -webkit-box;
 display: flex;
 -webkit-box-orient: horizontal;
 -webkit-box-direction: normal;
         flex-direction: row;
 overflow: auto;
 top: 5px;
 gap: 7px;
 width: auto;
}
.ag-ltr .ag-chart .ag-chart-tool-panel-button-enable .ag-chart-menu {
 right: 10px;
 -webkit-box-pack: right;
         justify-content: right;
}
.ag-rtl .ag-chart .ag-chart-tool-panel-button-enable .ag-chart-menu {
 left: 10px;
 -webkit-box-pack: left;
         justify-content: left;
}

.ag-chart-tool-panel-button-enable .ag-chart-menu-close {
 position: absolute;
 top: 45%;
 padding: 0;
 display: block;
 cursor: pointer;
 border: none;
}
.ag-ltr .ag-chart-tool-panel-button-enable .ag-chart-menu-close {
 right: 0px;
}
.ag-rtl .ag-chart-tool-panel-button-enable .ag-chart-menu-close {
 left: 0px;
}
.ag-chart-tool-panel-button-enable .ag-chart-menu-close .ag-icon {
 padding: 9px 0 9px 0;
}
.ag-chart-tool-panel-button-enable .ag-icon-menu {
 display: none;
}

.ag-charts-font-size-color {
 display: -webkit-box;
 display: flex;
 align-self: stretch;
 -webkit-box-pack: justify;
         justify-content: space-between;
}

.ag-charts-data-group-item {
 position: relative;
}

.ag-date-time-list-page-title-bar {
 display: -webkit-box;
 display: flex;
}

.ag-date-time-list-page-column-labels-row,
.ag-date-time-list-page-entries-row {
 display: -webkit-box;
 display: flex;
}

.ag-date-time-list-page-column-label,
.ag-date-time-list-page-entry {
 flex-basis: 0;
 -webkit-box-flex: 1;
         flex-grow: 1;
}

.ag-date-time-list-page-entry {
 cursor: pointer;
}
`;
