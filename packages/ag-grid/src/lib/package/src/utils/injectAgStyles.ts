import { agStyles } from '../styles/gridStyles.css';

/**
 *  Function for injecting ag grid styles into document header
 * @returns cleanup function
 */
export function injectAgStyles(): VoidFunction {
	const style = document.createElement('style');
	style.textContent = agStyles;
	style.id = 'ag-theme-material';
	document.head.append(style);

	const style2 = document.createElement('style');
	style2.textContent = preStyles;
	style2.id = 'prestyle';
	document.head.append(style2);

	const style3 = document.createElement('style');
	style3.textContent = bootstrap;
	style3.id = 'bootstrap';
	document.head.append(style3);

	// const font2 = document.createElement('style');
	// font2.textContent = font;
	// font2.id = 'font';
	// document.head.append(font2);

	return () => {
		style.remove();
		style2.remove();
		style3.remove();
		// font2.remove();
	};
}

const preStyles = `/**
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
 position: relative;
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

.ag-header-cell-text {
 overflow: hidden;
 text-overflow: ellipsis;
}

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
.ag-cell {
 display: inline-block;
 position: absolute;
 white-space: nowrap;
 height: 100%;
}

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

const bootstrap = `.ag-theme-bootstrap {
    -webkit-font-smoothing: antialiased;
    color: #000;
    color: var(--ag-foreground-color, #000);
    font-family: "Helvetica Neue", sans-serif;
    font-size: 14px;
    line-height: normal;
  }
  @font-face {
    font-family: "agGridClassic";
    src: url("data:application/font-woff;charset=utf-8;base64,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") format("woff");
    font-weight: normal;
    font-style: normal;
  }
  .ag-theme-bootstrap .ag-icon {
    font-family: "agGridClassic";
    font-size: 12px;
    line-height: 12px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .ag-theme-bootstrap .ag-icon-aggregation::before {
    content: "\f101";
  }
  .ag-theme-bootstrap .ag-icon-arrows::before {
    content: "\f102";
  }
  .ag-theme-bootstrap .ag-icon-asc::before {
    content: "\f103";
  }
  .ag-theme-bootstrap .ag-icon-cancel::before {
    content: "\f104";
  }
  .ag-theme-bootstrap .ag-icon-chart::before {
    content: "\f105";
  }
  .ag-theme-bootstrap .ag-icon-color-picker::before {
    content: "\f109";
  }
  .ag-theme-bootstrap .ag-icon-columns::before {
    content: "\f10a";
  }
  .ag-theme-bootstrap .ag-icon-contracted::before {
    content: "\f10b";
  }
  .ag-theme-bootstrap .ag-icon-copy::before {
    content: "\f10c";
  }
  .ag-theme-bootstrap .ag-icon-cross::before {
    content: "\f10d";
  }
  .ag-theme-bootstrap .ag-icon-csv::before {
    content: "\f10e";
  }
  .ag-theme-bootstrap .ag-icon-desc::before {
    content: "\f10f";
  }
  .ag-theme-bootstrap .ag-icon-excel::before {
    content: "\f110";
  }
  .ag-theme-bootstrap .ag-icon-expanded::before {
    content: "\f111";
  }
  .ag-theme-bootstrap .ag-icon-eye-slash::before {
    content: "\f112";
  }
  .ag-theme-bootstrap .ag-icon-eye::before {
    content: "\f113";
  }
  .ag-theme-bootstrap .ag-icon-filter::before {
    content: "\f114";
  }
  .ag-theme-bootstrap .ag-icon-first::before {
    content: "\f115";
  }
  .ag-theme-bootstrap .ag-icon-grip::before {
    content: "\f116";
  }
  .ag-theme-bootstrap .ag-icon-group::before {
    content: "\f117";
  }
  .ag-theme-bootstrap .ag-icon-last::before {
    content: "\f118";
  }
  .ag-theme-bootstrap .ag-icon-left::before {
    content: "\f119";
  }
  .ag-theme-bootstrap .ag-icon-linked::before {
    content: "\f11a";
  }
  .ag-theme-bootstrap .ag-icon-loading::before {
    content: "\f11b";
  }
  .ag-theme-bootstrap .ag-icon-maximize::before {
    content: "\f11c";
  }
  .ag-theme-bootstrap .ag-icon-menu::before {
    content: "\f11d";
  }
  .ag-theme-bootstrap .ag-icon-minimize::before {
    content: "\f11e";
  }
  .ag-theme-bootstrap .ag-icon-next::before {
    content: "\f11f";
  }
  .ag-theme-bootstrap .ag-icon-none::before {
    content: "\f120";
  }
  .ag-theme-bootstrap .ag-icon-not-allowed::before {
    content: "\f121";
  }
  .ag-theme-bootstrap .ag-icon-paste::before {
    content: "\f122";
  }
  .ag-theme-bootstrap .ag-icon-pin::before {
    content: "\f123";
  }
  .ag-theme-bootstrap .ag-icon-pivot::before {
    content: "\f124";
  }
  .ag-theme-bootstrap .ag-icon-previous::before {
    content: "\f125";
  }
  .ag-theme-bootstrap .ag-icon-right::before {
    content: "\f128";
  }
  .ag-theme-bootstrap .ag-icon-save::before {
    content: "\f129";
  }
  .ag-theme-bootstrap .ag-icon-small-down::before {
    content: "\f12a";
  }
  .ag-theme-bootstrap .ag-icon-small-left::before {
    content: "\f12b";
  }
  .ag-theme-bootstrap .ag-icon-small-right::before {
    content: "\f12c";
  }
  .ag-theme-bootstrap .ag-icon-small-up::before {
    content: "\f12d";
  }
  .ag-theme-bootstrap .ag-icon-tick::before {
    content: "\f12e";
  }
  .ag-theme-bootstrap .ag-icon-tree-closed::before {
    content: "\f12f";
  }
  .ag-theme-bootstrap .ag-icon-tree-indeterminate::before {
    content: "\f130";
  }
  .ag-theme-bootstrap .ag-icon-tree-open::before {
    content: "\f131";
  }
  .ag-theme-bootstrap .ag-icon-unlinked::before {
    content: "\f132";
  }
  .ag-theme-bootstrap .ag-icon-row-drag::before {
    content: "\f116";
  }
  .ag-theme-bootstrap .ag-left-arrow::before {
    content: "\f119";
  }
  .ag-theme-bootstrap .ag-right-arrow::before {
    content: "\f128";
  }
  .ag-theme-bootstrap .ag-root-wrapper, .ag-theme-bootstrap .ag-sticky-top {
    background-color: #FFF;
    background-color: var(--ag-background-color, #FFF);
  }
  .ag-theme-bootstrap [class^=ag-], .ag-theme-bootstrap [class^=ag-]:focus, .ag-theme-bootstrap [class^=ag-]:after, .ag-theme-bootstrap [class^=ag-]:before {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    outline: none;
  }
  .ag-theme-bootstrap [class^=ag-]::-ms-clear {
    display: none;
  }
  .ag-theme-bootstrap .ag-checkbox .ag-input-wrapper,
  .ag-theme-bootstrap .ag-radio-button .ag-input-wrapper {
    overflow: visible;
  }
  .ag-theme-bootstrap .ag-range-field .ag-input-wrapper {
    height: 100%;
  }
  .ag-theme-bootstrap .ag-toggle-button {
    -webkit-box-flex: 0;
            flex: none;
    width: unset;
    min-width: unset;
  }
  .ag-theme-bootstrap .ag-ltr .ag-label-align-right .ag-label {
    margin-left: 4px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-label-align-right .ag-label {
    margin-right: 4px;
  }
  
  .ag-theme-bootstrap input[class^=ag-] {
    margin: 0;
    background-color: #FFF;
    background-color: var(--ag-background-color, #FFF);
  }
  .ag-theme-bootstrap textarea[class^=ag-],
  .ag-theme-bootstrap select[class^=ag-] {
    background-color: #FFF;
    background-color: var(--ag-background-color, #FFF);
  }
  .ag-theme-bootstrap input[class^=ag-]:not([type]),
  .ag-theme-bootstrap input[class^=ag-][type=text],
  .ag-theme-bootstrap input[class^=ag-][type=number],
  .ag-theme-bootstrap input[class^=ag-][type=tel],
  .ag-theme-bootstrap input[class^=ag-][type=date],
  .ag-theme-bootstrap input[class^=ag-][type=datetime-local],
  .ag-theme-bootstrap textarea[class^=ag-] {
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    border-width: 1px;
    border-style: solid;
    border-color: #000;
    border-color: var(--ag-input-border-color, #000);
  }
  .ag-theme-bootstrap input[class^=ag-]:not([type]):disabled,
  .ag-theme-bootstrap input[class^=ag-][type=text]:disabled,
  .ag-theme-bootstrap input[class^=ag-][type=number]:disabled,
  .ag-theme-bootstrap input[class^=ag-][type=tel]:disabled,
  .ag-theme-bootstrap input[class^=ag-][type=date]:disabled,
  .ag-theme-bootstrap input[class^=ag-][type=datetime-local]:disabled,
  .ag-theme-bootstrap textarea[class^=ag-]:disabled {
    color: rgba(0, 0, 0, 0.5);
    color: var(--ag-disabled-foreground-color, rgba(0, 0, 0, 0.5));
    background-color: #ebebeb;
    background-color: var(--ag-input-disabled-background-color, #ebebeb);
    border-color: rgba(0, 0, 0, 0.3);
    border-color: var(--ag-input-disabled-border-color, rgba(0, 0, 0, 0.3));
  }
  .ag-theme-bootstrap input[class^=ag-]:not([type]):focus,
  .ag-theme-bootstrap input[class^=ag-][type=text]:focus,
  .ag-theme-bootstrap input[class^=ag-][type=number]:focus,
  .ag-theme-bootstrap input[class^=ag-][type=tel]:focus,
  .ag-theme-bootstrap input[class^=ag-][type=date]:focus,
  .ag-theme-bootstrap input[class^=ag-][type=datetime-local]:focus,
  .ag-theme-bootstrap textarea[class^=ag-]:focus {
    outline: none;
    border-color: var(--ag-input-focus-border-color);
  }
  .ag-theme-bootstrap input[class^=ag-]:not([type]):invalid,
  .ag-theme-bootstrap input[class^=ag-][type=text]:invalid,
  .ag-theme-bootstrap input[class^=ag-][type=number]:invalid,
  .ag-theme-bootstrap input[class^=ag-][type=tel]:invalid,
  .ag-theme-bootstrap input[class^=ag-][type=date]:invalid,
  .ag-theme-bootstrap input[class^=ag-][type=datetime-local]:invalid,
  .ag-theme-bootstrap textarea[class^=ag-]:invalid {
    border-width: 2px;
    border-style: solid;
    border-color: var(--ag-input-border-color-invalid);
  }
  .ag-theme-bootstrap input[class^=ag-][type=number] {
    -moz-appearance: textfield;
  }
  .ag-theme-bootstrap input[class^=ag-][type=number]::-webkit-outer-spin-button, .ag-theme-bootstrap input[class^=ag-][type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .ag-theme-bootstrap input[class^=ag-][type=range] {
    padding: 0;
  }
  .ag-theme-bootstrap .ag-drag-handle {
    color: #000;
    color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #000));
  }
  .ag-theme-bootstrap .ag-list-item, .ag-theme-bootstrap .ag-virtual-list-item {
    height: 20px;
  }
  .ag-theme-bootstrap .ag-keyboard-focus .ag-virtual-list-item:focus {
    outline: none;
  }
  .ag-theme-bootstrap .ag-keyboard-focus .ag-virtual-list-item:focus::after {
    content: "";
    position: absolute;
    background-color: transparent;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    border: 1px solid;
    border-color: var(--ag-input-focus-border-color);
  }
  .ag-theme-bootstrap .ag-select-list {
    background-color: #FFF;
    background-color: var(--ag-background-color, #FFF);
    overflow-y: auto;
    overflow-x: hidden;
  }
  .ag-theme-bootstrap .ag-list-item {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
            align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ag-theme-bootstrap .ag-list-item.ag-active-item {
    background-color: var(--ag-row-hover-color);
  }
  .ag-theme-bootstrap .ag-select-list-item {
    padding-left: 4px;
    padding-right: 4px;
    cursor: default;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
  .ag-theme-bootstrap .ag-select-list-item span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .ag-theme-bootstrap .ag-select .ag-picker-field-wrapper {
    background-color: #FFF;
    background-color: var(--ag-background-color, #FFF);
    min-height: 20px;
    cursor: default;
  }
  .ag-theme-bootstrap .ag-select.ag-disabled .ag-picker-field-wrapper:focus {
    -webkit-box-shadow: none;
            box-shadow: none;
  }
  .ag-theme-bootstrap .ag-select:not(.ag-cell-editor) {
    height: 20px;
  }
  .ag-theme-bootstrap .ag-select .ag-picker-field-display {
    margin: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ag-theme-bootstrap .ag-select .ag-picker-field-icon {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
            align-items: center;
  }
  .ag-theme-bootstrap .ag-select.ag-disabled {
    opacity: 0.5;
  }
  .ag-theme-bootstrap .ag-rich-select {
    background-color: #f6f6f6;
    background-color: var(--ag-control-panel-background-color, #f6f6f6);
  }
  .ag-theme-bootstrap .ag-rich-select-list {
    width: 100%;
    min-width: 200px;
    height: 162.5px;
  }
  .ag-theme-bootstrap .ag-rich-select-value {
    padding: 0 4px 0 12px;
    height: 25px;
  }
  .ag-theme-bootstrap .ag-rich-select-virtual-list-item {
    cursor: default;
    height: 20px;
  }
  .ag-keyboard-focus .ag-theme-bootstrap .ag-rich-select-virtual-list-item:focus::after {
    content: none;
  }
  .ag-theme-bootstrap .ag-rich-select-virtual-list-item:hover {
    background-color: var(--ag-row-hover-color);
  }
  .ag-theme-bootstrap .ag-rich-select-row {
    padding-left: 12px;
  }
  .ag-theme-bootstrap .ag-rich-select-row-selected {
    background-color: #bde2e5;
    background-color: var(--ag-selected-row-background-color, #bde2e5);
  }
  .ag-theme-bootstrap .ag-row-drag,
  .ag-theme-bootstrap .ag-selection-checkbox,
  .ag-theme-bootstrap .ag-group-expanded,
  .ag-theme-bootstrap .ag-group-contracted {
    color: #000;
    color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #000));
  }
  .ag-theme-bootstrap .ag-ltr .ag-row-drag, .ag-theme-bootstrap .ag-ltr .ag-selection-checkbox, .ag-theme-bootstrap .ag-ltr .ag-group-expanded, .ag-theme-bootstrap .ag-ltr .ag-group-contracted {
    margin-right: 12px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-drag, .ag-theme-bootstrap .ag-rtl .ag-selection-checkbox, .ag-theme-bootstrap .ag-rtl .ag-group-expanded, .ag-theme-bootstrap .ag-rtl .ag-group-contracted {
    margin-left: 12px;
  }
  
  .ag-theme-bootstrap .ag-cell-wrapper > *:not(.ag-cell-value):not(.ag-group-value) {
    --ag-internal-calculated-line-height: var(--ag-line-height, 23px);
    --ag-internal-padded-row-height: 23px;
    height: min(var(--ag-internal-calculated-line-height), var(--ag-internal-padded-row-height));
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
            align-items: center;
    -webkit-box-flex: 0;
            flex: none;
  }
  .ag-theme-bootstrap .ag-group-expanded,
  .ag-theme-bootstrap .ag-group-contracted {
    cursor: pointer;
  }
  .ag-theme-bootstrap .ag-group-title-bar-icon {
    cursor: pointer;
    -webkit-box-flex: 0;
            flex: none;
    color: #000;
    color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #000));
  }
  .ag-theme-bootstrap .ag-ltr .ag-group-child-count {
    margin-left: 2px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-group-child-count {
    margin-right: 2px;
  }
  
  .ag-theme-bootstrap .ag-group-title-bar {
    background-color: #ececec;
    background-color: var(--ag-subheader-background-color, #ececec);
    padding: 4px;
  }
  .ag-theme-bootstrap .ag-group-toolbar {
    padding: 4px;
  }
  .ag-theme-bootstrap .ag-disabled-group-title-bar, .ag-theme-bootstrap .ag-disabled-group-container {
    opacity: 0.5;
  }
  .ag-theme-bootstrap .group-item {
    margin: 2px 0;
  }
  .ag-theme-bootstrap .ag-label {
    white-space: nowrap;
  }
  .ag-theme-bootstrap .ag-ltr .ag-label {
    margin-right: 4px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-label {
    margin-left: 4px;
  }
  
  .ag-theme-bootstrap .ag-label-align-top .ag-label {
    margin-bottom: 2px;
  }
  .ag-theme-bootstrap .ag-angle-select[disabled] {
    color: rgba(0, 0, 0, 0.5);
    color: var(--ag-disabled-foreground-color, rgba(0, 0, 0, 0.5));
    pointer-events: none;
  }
  .ag-theme-bootstrap .ag-angle-select[disabled] .ag-angle-select-field {
    opacity: 0.4;
  }
  .ag-theme-bootstrap .ag-ltr .ag-slider-field, .ag-theme-bootstrap .ag-ltr .ag-angle-select-field {
    margin-right: 8px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-slider-field, .ag-theme-bootstrap .ag-rtl .ag-angle-select-field {
    margin-left: 8px;
  }
  
  .ag-theme-bootstrap .ag-angle-select-parent-circle {
    width: 24px;
    height: 24px;
    border-radius: 12px;
    border: solid 1px;
    border-color: darkgrey;
    border-color: var(--ag-border-color, darkgrey);
    background-color: #FFF;
    background-color: var(--ag-background-color, #FFF);
  }
  .ag-theme-bootstrap .ag-angle-select-child-circle {
    top: 4px;
    left: 12px;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    margin-top: -4px;
    border-radius: 3px;
    background-color: #000;
    background-color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #000));
  }
  .ag-theme-bootstrap .ag-picker-field-wrapper {
    border: 1px solid;
    border-color: darkgrey;
    border-color: var(--ag-border-color, darkgrey);
    border-radius: 5px;
  }
  .ag-theme-bootstrap .ag-picker-field-button {
    background-color: #FFF;
    background-color: var(--ag-background-color, #FFF);
    color: #000;
    color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #000));
  }
  .ag-theme-bootstrap .ag-dialog.ag-color-dialog {
    border-radius: 5px;
  }
  .ag-theme-bootstrap .ag-color-picker .ag-picker-field-display {
    height: 12px;
  }
  .ag-theme-bootstrap .ag-color-panel {
    padding: 4px;
  }
  .ag-theme-bootstrap .ag-spectrum-color {
    background-color: rgb(255, 0, 0);
    border-radius: 2px;
  }
  .ag-theme-bootstrap .ag-spectrum-tools {
    padding: 10px;
  }
  .ag-theme-bootstrap .ag-spectrum-sat {
    background-image: -webkit-gradient(linear, left top, right top, from(white), to(rgba(204, 154, 129, 0)));
    background-image: linear-gradient(to right, white, rgba(204, 154, 129, 0));
  }
  .ag-theme-bootstrap .ag-spectrum-val {
    background-image: -webkit-gradient(linear, left bottom, left top, from(black), to(rgba(204, 154, 129, 0)));
    background-image: linear-gradient(to top, black, rgba(204, 154, 129, 0));
  }
  .ag-theme-bootstrap .ag-spectrum-dragger {
    border-radius: 12px;
    height: 12px;
    width: 12px;
    border: 1px solid white;
    background: black;
    -webkit-box-shadow: 0 0 2px 0px rgba(0, 0, 0, 0.24);
            box-shadow: 0 0 2px 0px rgba(0, 0, 0, 0.24);
  }
  .ag-theme-bootstrap .ag-spectrum-hue-background {
    border-radius: 2px;
  }
  .ag-theme-bootstrap .ag-spectrum-alpha-background {
    border-radius: 2px;
  }
  .ag-theme-bootstrap .ag-spectrum-tool {
    margin-bottom: 10px;
    height: 11px;
    border-radius: 2px;
  }
  .ag-theme-bootstrap .ag-spectrum-slider {
    margin-top: -12px;
    width: 13px;
    height: 13px;
    border-radius: 13px;
    background-color: rgb(248, 248, 248);
    -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
            box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  }
  .ag-theme-bootstrap .ag-recent-color {
    margin: 0 3px;
  }
  .ag-theme-bootstrap .ag-recent-color:first-child {
    margin-left: 0;
  }
  .ag-theme-bootstrap .ag-recent-color:last-child {
    margin-right: 0;
  }
  .ag-theme-bootstrap.ag-dnd-ghost {
    background: #FFF;
    background: var(--ag-background-color, #FFF);
    border-radius: 0px;
    -webkit-box-shadow: none;
            box-shadow: none;
    padding: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #000;
    color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #000));
    height: 25px !important;
    line-height: 25px;
    margin: 0;
    padding: 0 8px;
    -webkit-transform: translateY(8px);
            transform: translateY(8px);
  }
  .ag-theme-bootstrap .ag-dnd-ghost-icon {
    margin-right: 4px;
    color: #000;
    color: var(--ag-foreground-color, #000);
  }
  .ag-theme-bootstrap .ag-popup-child:not(.ag-tooltip-custom) {
    -webkit-box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  }
  .ag-dragging-range-handle .ag-theme-bootstrap .ag-dialog, .ag-dragging-fill-handle .ag-theme-bootstrap .ag-dialog {
    opacity: 0.7;
    pointer-events: none;
  }
  .ag-theme-bootstrap .ag-dialog {
    border-radius: 0px;
  }
  .ag-theme-bootstrap .ag-panel {
    background-color: #FFF;
    background-color: var(--ag-background-color, #FFF);
  }
  .ag-theme-bootstrap .ag-panel-title-bar {
    background-color: var(--ag-header-background-color);
    color: #000;
    color: var(--ag-header-foreground-color, var(--ag-secondary-foreground-color, var(--ag-foreground-color, #000)));
    height: 25px;
    padding: 4px 12px;
  }
  .ag-theme-bootstrap .ag-ltr .ag-panel-title-bar-button {
    margin-left: 4px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-panel-title-bar-button {
    margin-right: 4px;
  }
  
  .ag-theme-bootstrap .ag-tooltip {
    background-color: var(--ag-header-background-color);
    color: #000;
    color: var(--ag-foreground-color, #000);
    padding: 4px;
    border-radius: 0px;
    -webkit-transition: opacity 1s;
    transition: opacity 1s;
    white-space: normal;
  }
  .ag-theme-bootstrap .ag-tooltip.ag-tooltip-hiding {
    opacity: 0;
  }
  .ag-theme-bootstrap .ag-tooltip-custom {
    -webkit-transition: opacity 1s;
    transition: opacity 1s;
  }
  .ag-theme-bootstrap .ag-tooltip-custom.ag-tooltip-hiding {
    opacity: 0;
  }
  .ag-theme-bootstrap .ag-ltr .ag-column-select-indent-1 {
    padding-left: 16px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-column-select-indent-1 {
    padding-right: 16px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-column-select-indent-2 {
    padding-left: 32px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-column-select-indent-2 {
    padding-right: 32px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-column-select-indent-3 {
    padding-left: 48px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-column-select-indent-3 {
    padding-right: 48px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-column-select-indent-4 {
    padding-left: 64px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-column-select-indent-4 {
    padding-right: 64px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-column-select-indent-5 {
    padding-left: 80px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-column-select-indent-5 {
    padding-right: 80px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-column-select-indent-6 {
    padding-left: 96px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-column-select-indent-6 {
    padding-right: 96px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-column-select-indent-7 {
    padding-left: 112px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-column-select-indent-7 {
    padding-right: 112px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-column-select-indent-8 {
    padding-left: 128px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-column-select-indent-8 {
    padding-right: 128px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-column-select-indent-9 {
    padding-left: 144px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-column-select-indent-9 {
    padding-right: 144px;
  }
  
  .ag-theme-bootstrap .ag-column-select-header-icon {
    cursor: pointer;
  }
  .ag-theme-bootstrap .ag-keyboard-focus .ag-column-select-header-icon:focus {
    outline: none;
  }
  .ag-theme-bootstrap .ag-keyboard-focus .ag-column-select-header-icon:focus::after {
    content: "";
    position: absolute;
    background-color: transparent;
    pointer-events: none;
    top: 0px;
    left: 0px;
    display: block;
    width: calc(100% - 0px);
    height: calc(100% - 0px);
    border: 1px solid;
    border-color: var(--ag-input-focus-border-color);
  }
  .ag-theme-bootstrap .ag-ltr .ag-column-group-icons:not(:last-child), .ag-theme-bootstrap .ag-ltr .ag-column-select-header-icon:not(:last-child), .ag-theme-bootstrap .ag-ltr .ag-column-select-header-checkbox:not(:last-child), .ag-theme-bootstrap .ag-ltr .ag-column-select-header-filter-wrapper:not(:last-child), .ag-theme-bootstrap .ag-ltr .ag-column-select-checkbox:not(:last-child), .ag-theme-bootstrap .ag-ltr .ag-column-select-column-drag-handle:not(:last-child), .ag-theme-bootstrap .ag-ltr .ag-column-select-column-group-drag-handle:not(:last-child), .ag-theme-bootstrap .ag-ltr .ag-column-select-column-label:not(:last-child) {
    margin-right: 8px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-column-group-icons:not(:last-child), .ag-theme-bootstrap .ag-rtl .ag-column-select-header-icon:not(:last-child), .ag-theme-bootstrap .ag-rtl .ag-column-select-header-checkbox:not(:last-child), .ag-theme-bootstrap .ag-rtl .ag-column-select-header-filter-wrapper:not(:last-child), .ag-theme-bootstrap .ag-rtl .ag-column-select-checkbox:not(:last-child), .ag-theme-bootstrap .ag-rtl .ag-column-select-column-drag-handle:not(:last-child), .ag-theme-bootstrap .ag-rtl .ag-column-select-column-group-drag-handle:not(:last-child), .ag-theme-bootstrap .ag-rtl .ag-column-select-column-label:not(:last-child) {
    margin-left: 8px;
  }
  
  .ag-theme-bootstrap .ag-keyboard-focus .ag-column-select-virtual-list-item:focus {
    outline: none;
  }
  .ag-theme-bootstrap .ag-keyboard-focus .ag-column-select-virtual-list-item:focus::after {
    content: "";
    position: absolute;
    background-color: transparent;
    pointer-events: none;
    top: 1px;
    left: 1px;
    display: block;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border: 1px solid;
    border-color: var(--ag-input-focus-border-color);
  }
  .ag-theme-bootstrap .ag-column-select-column-group:not(:last-child),
  .ag-theme-bootstrap .ag-column-select-column:not(:last-child) {
    margin-bottom: 4px;
  }
  .ag-theme-bootstrap .ag-column-select-column-readonly,
  .ag-theme-bootstrap .ag-column-select-column-group-readonly {
    color: rgba(0, 0, 0, 0.5);
    color: var(--ag-disabled-foreground-color, rgba(0, 0, 0, 0.5));
    pointer-events: none;
  }
  .ag-theme-bootstrap .ag-ltr .ag-column-select-add-group-indent {
    margin-left: 20px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-column-select-add-group-indent {
    margin-right: 20px;
  }
  
  .ag-theme-bootstrap .ag-column-select-virtual-list-viewport {
    padding: 3px 0px;
  }
  .ag-theme-bootstrap .ag-column-select-virtual-list-item {
    padding: 0 6px;
  }
  .ag-theme-bootstrap .ag-rtl {
    text-align: right;
  }
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-1 {
    padding-left: 36px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-1 {
    padding-right: 36px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-1 {
    padding-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-1 {
    padding-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-1 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-1 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-2 {
    padding-left: 60px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-2 {
    padding-right: 60px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-2 {
    padding-left: 48px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-2 {
    padding-right: 48px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-2 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-2 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-3 {
    padding-left: 84px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-3 {
    padding-right: 84px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-3 {
    padding-left: 72px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-3 {
    padding-right: 72px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-3 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-3 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-4 {
    padding-left: 108px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-4 {
    padding-right: 108px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-4 {
    padding-left: 96px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-4 {
    padding-right: 96px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-4 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-4 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-5 {
    padding-left: 132px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-5 {
    padding-right: 132px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-5 {
    padding-left: 120px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-5 {
    padding-right: 120px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-5 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-5 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-6 {
    padding-left: 156px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-6 {
    padding-right: 156px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-6 {
    padding-left: 144px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-6 {
    padding-right: 144px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-6 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-6 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-7 {
    padding-left: 180px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-7 {
    padding-right: 180px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-7 {
    padding-left: 168px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-7 {
    padding-right: 168px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-7 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-7 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-8 {
    padding-left: 204px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-8 {
    padding-right: 204px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-8 {
    padding-left: 192px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-8 {
    padding-right: 192px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-8 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-8 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-9 {
    padding-left: 228px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-9 {
    padding-right: 228px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-9 {
    padding-left: 216px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-9 {
    padding-right: 216px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-9 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-9 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-10 {
    padding-left: 252px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-10 {
    padding-right: 252px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-10 {
    padding-left: 240px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-10 {
    padding-right: 240px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-10 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-10 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-11 {
    padding-left: 276px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-11 {
    padding-right: 276px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-11 {
    padding-left: 264px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-11 {
    padding-right: 264px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-11 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-11 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-12 {
    padding-left: 300px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-12 {
    padding-right: 300px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-12 {
    padding-left: 288px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-12 {
    padding-right: 288px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-12 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-12 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-13 {
    padding-left: 324px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-13 {
    padding-right: 324px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-13 {
    padding-left: 312px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-13 {
    padding-right: 312px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-13 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-13 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-14 {
    padding-left: 348px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-14 {
    padding-right: 348px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-14 {
    padding-left: 336px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-14 {
    padding-right: 336px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-14 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-14 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-15 {
    padding-left: 372px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-15 {
    padding-right: 372px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-15 {
    padding-left: 360px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-15 {
    padding-right: 360px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-15 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-15 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-16 {
    padding-left: 396px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-16 {
    padding-right: 396px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-16 {
    padding-left: 384px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-16 {
    padding-right: 384px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-16 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-16 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-17 {
    padding-left: 420px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-17 {
    padding-right: 420px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-17 {
    padding-left: 408px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-17 {
    padding-right: 408px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-17 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-17 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-18 {
    padding-left: 444px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-18 {
    padding-right: 444px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-18 {
    padding-left: 432px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-18 {
    padding-right: 432px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-18 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-18 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-19 {
    padding-left: 468px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-19 {
    padding-right: 468px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-19 {
    padding-left: 456px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-19 {
    padding-right: 456px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-19 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-19 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-20 {
    padding-left: 492px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-20 {
    padding-right: 492px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-20 {
    padding-left: 480px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-20 {
    padding-right: 480px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-20 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-20 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-21 {
    padding-left: 516px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-21 {
    padding-right: 516px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-21 {
    padding-left: 504px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-21 {
    padding-right: 504px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-21 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-21 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-22 {
    padding-left: 540px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-22 {
    padding-right: 540px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-22 {
    padding-left: 528px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-22 {
    padding-right: 528px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-22 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-22 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-23 {
    padding-left: 564px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-23 {
    padding-right: 564px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-23 {
    padding-left: 552px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-23 {
    padding-right: 552px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-23 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-23 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-24 {
    padding-left: 588px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-24 {
    padding-right: 588px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-24 {
    padding-left: 576px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-24 {
    padding-right: 576px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-24 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-24 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-25 {
    padding-left: 612px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-25 {
    padding-right: 612px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-25 {
    padding-left: 600px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-25 {
    padding-right: 600px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-25 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-25 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-26 {
    padding-left: 636px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-26 {
    padding-right: 636px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-26 {
    padding-left: 624px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-26 {
    padding-right: 624px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-26 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-26 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-27 {
    padding-left: 660px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-27 {
    padding-right: 660px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-27 {
    padding-left: 648px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-27 {
    padding-right: 648px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-27 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-27 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-28 {
    padding-left: 684px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-28 {
    padding-right: 684px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-28 {
    padding-left: 672px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-28 {
    padding-right: 672px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-28 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-28 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-29 {
    padding-left: 708px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-29 {
    padding-right: 708px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-29 {
    padding-left: 696px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-29 {
    padding-right: 696px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-29 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-29 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-30 {
    padding-left: 732px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-30 {
    padding-right: 732px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-30 {
    padding-left: 720px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-30 {
    padding-right: 720px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-30 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-30 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-31 {
    padding-left: 756px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-31 {
    padding-right: 756px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-31 {
    padding-left: 744px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-31 {
    padding-right: 744px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-31 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-31 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-32 {
    padding-left: 780px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-32 {
    padding-right: 780px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-32 {
    padding-left: 768px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-32 {
    padding-right: 768px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-32 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-32 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-33 {
    padding-left: 804px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-33 {
    padding-right: 804px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-33 {
    padding-left: 792px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-33 {
    padding-right: 792px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-33 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-33 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-34 {
    padding-left: 828px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-34 {
    padding-right: 828px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-34 {
    padding-left: 816px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-34 {
    padding-right: 816px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-34 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-34 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-35 {
    padding-left: 852px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-35 {
    padding-right: 852px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-35 {
    padding-left: 840px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-35 {
    padding-right: 840px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-35 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-35 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-36 {
    padding-left: 876px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-36 {
    padding-right: 876px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-36 {
    padding-left: 864px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-36 {
    padding-right: 864px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-36 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-36 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-37 {
    padding-left: 900px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-37 {
    padding-right: 900px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-37 {
    padding-left: 888px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-37 {
    padding-right: 888px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-37 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-37 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-38 {
    padding-left: 924px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-38 {
    padding-right: 924px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-38 {
    padding-left: 912px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-38 {
    padding-right: 912px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-38 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-38 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-39 {
    padding-left: 948px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-39 {
    padding-right: 948px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-39 {
    padding-left: 936px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-39 {
    padding-right: 936px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-39 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-39 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-40 {
    padding-left: 972px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-40 {
    padding-right: 972px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-40 {
    padding-left: 960px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-40 {
    padding-right: 960px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-40 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-40 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-41 {
    padding-left: 996px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-41 {
    padding-right: 996px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-41 {
    padding-left: 984px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-41 {
    padding-right: 984px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-41 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-41 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-42 {
    padding-left: 1020px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-42 {
    padding-right: 1020px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-42 {
    padding-left: 1008px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-42 {
    padding-right: 1008px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-42 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-42 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-43 {
    padding-left: 1044px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-43 {
    padding-right: 1044px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-43 {
    padding-left: 1032px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-43 {
    padding-right: 1032px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-43 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-43 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-44 {
    padding-left: 1068px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-44 {
    padding-right: 1068px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-44 {
    padding-left: 1056px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-44 {
    padding-right: 1056px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-44 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-44 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-45 {
    padding-left: 1092px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-45 {
    padding-right: 1092px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-45 {
    padding-left: 1080px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-45 {
    padding-right: 1080px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-45 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-45 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-46 {
    padding-left: 1116px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-46 {
    padding-right: 1116px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-46 {
    padding-left: 1104px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-46 {
    padding-right: 1104px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-46 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-46 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-47 {
    padding-left: 1140px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-47 {
    padding-right: 1140px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-47 {
    padding-left: 1128px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-47 {
    padding-right: 1128px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-47 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-47 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-48 {
    padding-left: 1164px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-48 {
    padding-right: 1164px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-48 {
    padding-left: 1152px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-48 {
    padding-right: 1152px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-48 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-48 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-49 {
    padding-left: 1188px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-49 {
    padding-right: 1188px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-49 {
    padding-left: 1176px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-49 {
    padding-right: 1176px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-49 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-49 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-50 {
    padding-left: 1212px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-50 {
    padding-right: 1212px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-50 {
    padding-left: 1200px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-50 {
    padding-right: 1200px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-50 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-50 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-51 {
    padding-left: 1236px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-51 {
    padding-right: 1236px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-51 {
    padding-left: 1224px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-51 {
    padding-right: 1224px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-51 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-51 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-52 {
    padding-left: 1260px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-52 {
    padding-right: 1260px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-52 {
    padding-left: 1248px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-52 {
    padding-right: 1248px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-52 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-52 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-53 {
    padding-left: 1284px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-53 {
    padding-right: 1284px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-53 {
    padding-left: 1272px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-53 {
    padding-right: 1272px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-53 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-53 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-54 {
    padding-left: 1308px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-54 {
    padding-right: 1308px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-54 {
    padding-left: 1296px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-54 {
    padding-right: 1296px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-54 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-54 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-55 {
    padding-left: 1332px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-55 {
    padding-right: 1332px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-55 {
    padding-left: 1320px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-55 {
    padding-right: 1320px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-55 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-55 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-56 {
    padding-left: 1356px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-56 {
    padding-right: 1356px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-56 {
    padding-left: 1344px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-56 {
    padding-right: 1344px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-56 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-56 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-57 {
    padding-left: 1380px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-57 {
    padding-right: 1380px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-57 {
    padding-left: 1368px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-57 {
    padding-right: 1368px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-57 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-57 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-58 {
    padding-left: 1404px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-58 {
    padding-right: 1404px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-58 {
    padding-left: 1392px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-58 {
    padding-right: 1392px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-58 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-58 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-59 {
    padding-left: 1428px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-59 {
    padding-right: 1428px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-59 {
    padding-left: 1416px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-59 {
    padding-right: 1416px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-59 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-59 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-60 {
    padding-left: 1452px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-60 {
    padding-right: 1452px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-60 {
    padding-left: 1440px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-60 {
    padding-right: 1440px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-60 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-60 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-61 {
    padding-left: 1476px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-61 {
    padding-right: 1476px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-61 {
    padding-left: 1464px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-61 {
    padding-right: 1464px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-61 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-61 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-62 {
    padding-left: 1500px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-62 {
    padding-right: 1500px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-62 {
    padding-left: 1488px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-62 {
    padding-right: 1488px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-62 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-62 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-63 {
    padding-left: 1524px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-63 {
    padding-right: 1524px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-63 {
    padding-left: 1512px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-63 {
    padding-right: 1512px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-63 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-63 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-64 {
    padding-left: 1548px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-64 {
    padding-right: 1548px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-64 {
    padding-left: 1536px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-64 {
    padding-right: 1536px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-64 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-64 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-65 {
    padding-left: 1572px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-65 {
    padding-right: 1572px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-65 {
    padding-left: 1560px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-65 {
    padding-right: 1560px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-65 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-65 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-66 {
    padding-left: 1596px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-66 {
    padding-right: 1596px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-66 {
    padding-left: 1584px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-66 {
    padding-right: 1584px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-66 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-66 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-67 {
    padding-left: 1620px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-67 {
    padding-right: 1620px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-67 {
    padding-left: 1608px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-67 {
    padding-right: 1608px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-67 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-67 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-68 {
    padding-left: 1644px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-68 {
    padding-right: 1644px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-68 {
    padding-left: 1632px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-68 {
    padding-right: 1632px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-68 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-68 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-69 {
    padding-left: 1668px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-69 {
    padding-right: 1668px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-69 {
    padding-left: 1656px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-69 {
    padding-right: 1656px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-69 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-69 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-70 {
    padding-left: 1692px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-70 {
    padding-right: 1692px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-70 {
    padding-left: 1680px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-70 {
    padding-right: 1680px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-70 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-70 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-71 {
    padding-left: 1716px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-71 {
    padding-right: 1716px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-71 {
    padding-left: 1704px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-71 {
    padding-right: 1704px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-71 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-71 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-72 {
    padding-left: 1740px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-72 {
    padding-right: 1740px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-72 {
    padding-left: 1728px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-72 {
    padding-right: 1728px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-72 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-72 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-73 {
    padding-left: 1764px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-73 {
    padding-right: 1764px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-73 {
    padding-left: 1752px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-73 {
    padding-right: 1752px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-73 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-73 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-74 {
    padding-left: 1788px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-74 {
    padding-right: 1788px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-74 {
    padding-left: 1776px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-74 {
    padding-right: 1776px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-74 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-74 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-75 {
    padding-left: 1812px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-75 {
    padding-right: 1812px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-75 {
    padding-left: 1800px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-75 {
    padding-right: 1800px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-75 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-75 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-76 {
    padding-left: 1836px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-76 {
    padding-right: 1836px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-76 {
    padding-left: 1824px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-76 {
    padding-right: 1824px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-76 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-76 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-77 {
    padding-left: 1860px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-77 {
    padding-right: 1860px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-77 {
    padding-left: 1848px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-77 {
    padding-right: 1848px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-77 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-77 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-78 {
    padding-left: 1884px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-78 {
    padding-right: 1884px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-78 {
    padding-left: 1872px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-78 {
    padding-right: 1872px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-78 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-78 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-79 {
    padding-left: 1908px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-79 {
    padding-right: 1908px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-79 {
    padding-left: 1896px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-79 {
    padding-right: 1896px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-79 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-79 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-80 {
    padding-left: 1932px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-80 {
    padding-right: 1932px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-80 {
    padding-left: 1920px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-80 {
    padding-right: 1920px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-80 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-80 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-81 {
    padding-left: 1956px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-81 {
    padding-right: 1956px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-81 {
    padding-left: 1944px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-81 {
    padding-right: 1944px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-81 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-81 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-82 {
    padding-left: 1980px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-82 {
    padding-right: 1980px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-82 {
    padding-left: 1968px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-82 {
    padding-right: 1968px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-82 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-82 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-83 {
    padding-left: 2004px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-83 {
    padding-right: 2004px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-83 {
    padding-left: 1992px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-83 {
    padding-right: 1992px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-83 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-83 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-84 {
    padding-left: 2028px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-84 {
    padding-right: 2028px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-84 {
    padding-left: 2016px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-84 {
    padding-right: 2016px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-84 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-84 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-85 {
    padding-left: 2052px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-85 {
    padding-right: 2052px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-85 {
    padding-left: 2040px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-85 {
    padding-right: 2040px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-85 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-85 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-86 {
    padding-left: 2076px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-86 {
    padding-right: 2076px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-86 {
    padding-left: 2064px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-86 {
    padding-right: 2064px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-86 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-86 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-87 {
    padding-left: 2100px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-87 {
    padding-right: 2100px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-87 {
    padding-left: 2088px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-87 {
    padding-right: 2088px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-87 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-87 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-88 {
    padding-left: 2124px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-88 {
    padding-right: 2124px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-88 {
    padding-left: 2112px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-88 {
    padding-right: 2112px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-88 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-88 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-89 {
    padding-left: 2148px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-89 {
    padding-right: 2148px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-89 {
    padding-left: 2136px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-89 {
    padding-right: 2136px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-89 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-89 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-90 {
    padding-left: 2172px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-90 {
    padding-right: 2172px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-90 {
    padding-left: 2160px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-90 {
    padding-right: 2160px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-90 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-90 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-91 {
    padding-left: 2196px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-91 {
    padding-right: 2196px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-91 {
    padding-left: 2184px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-91 {
    padding-right: 2184px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-91 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-91 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-92 {
    padding-left: 2220px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-92 {
    padding-right: 2220px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-92 {
    padding-left: 2208px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-92 {
    padding-right: 2208px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-92 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-92 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-93 {
    padding-left: 2244px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-93 {
    padding-right: 2244px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-93 {
    padding-left: 2232px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-93 {
    padding-right: 2232px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-93 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-93 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-94 {
    padding-left: 2268px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-94 {
    padding-right: 2268px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-94 {
    padding-left: 2256px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-94 {
    padding-right: 2256px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-94 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-94 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-95 {
    padding-left: 2292px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-95 {
    padding-right: 2292px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-95 {
    padding-left: 2280px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-95 {
    padding-right: 2280px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-95 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-95 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-96 {
    padding-left: 2316px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-96 {
    padding-right: 2316px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-96 {
    padding-left: 2304px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-96 {
    padding-right: 2304px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-96 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-96 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-97 {
    padding-left: 2340px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-97 {
    padding-right: 2340px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-97 {
    padding-left: 2328px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-97 {
    padding-right: 2328px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-97 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-97 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-98 {
    padding-left: 2364px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-98 {
    padding-right: 2364px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-98 {
    padding-left: 2352px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-98 {
    padding-right: 2352px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-98 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-98 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-99 {
    padding-left: 2388px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-99 {
    padding-right: 2388px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-indent-99 {
    padding-left: 2376px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-indent-99 {
    padding-right: 2376px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-level-99 .ag-pivot-leaf-group {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-level-99 .ag-pivot-leaf-group {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-row-group-leaf-indent {
    margin-left: 24px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-row-group-leaf-indent {
    margin-right: 24px;
  }
  
  .ag-theme-bootstrap .ag-value-change-delta {
    padding-right: 2px;
  }
  .ag-theme-bootstrap .ag-value-change-delta-up {
    color: darkgreen;
    color: var(--ag-value-change-delta-up-color, darkgreen);
  }
  .ag-theme-bootstrap .ag-value-change-delta-down {
    color: darkred;
    color: var(--ag-value-change-delta-down-color, darkred);
  }
  .ag-theme-bootstrap .ag-value-change-value {
    background-color: transparent;
    border-radius: 1px;
    padding-left: 1px;
    padding-right: 1px;
    -webkit-transition: background-color 1s;
    transition: background-color 1s;
  }
  .ag-theme-bootstrap .ag-value-change-value-highlight {
    background-color: #cec;
    background-color: var(--ag-value-change-value-highlight-background-color, #cec);
    -webkit-transition: background-color 0.1s;
    transition: background-color 0.1s;
  }
  .ag-theme-bootstrap .ag-cell-data-changed {
    background-color: #cec !important;
    background-color: var(--ag-value-change-value-highlight-background-color, #cec) !important;
  }
  .ag-theme-bootstrap .ag-cell-data-changed-animation {
    background-color: transparent;
  }
  .ag-theme-bootstrap .ag-cell-highlight {
    background-color: rgba(136, 255, 136, 0.4) !important;
    background-color: var(--ag-range-selection-highlight-color, rgba(136, 255, 136, 0.4)) !important;
  }
  .ag-theme-bootstrap .ag-row {
    height: 25px;
    background-color: #FFF;
    background-color: var(--ag-background-color, #FFF);
    color: #000;
    color: var(--ag-data-color, var(--ag-foreground-color, #000));
  }
  .ag-theme-bootstrap .ag-row-highlight-above::after, .ag-theme-bootstrap .ag-row-highlight-below::after {
    content: "";
    position: absolute;
    width: calc(100% - 1px);
    height: 1px;
    background-color: #000;
    background-color: var(--ag-range-selection-border-color, var(--ag-foreground-color, #000));
    left: 1px;
  }
  .ag-theme-bootstrap .ag-row-highlight-above::after {
    top: -1px;
  }
  .ag-theme-bootstrap .ag-row-highlight-above.ag-row-first::after {
    top: 0;
  }
  .ag-theme-bootstrap .ag-row-highlight-below::after {
    bottom: 0px;
  }
  .ag-theme-bootstrap .ag-row-odd {
    background-color: #f6f6f6;
    background-color: var(--ag-odd-row-background-color, #f6f6f6);
  }
  .ag-theme-bootstrap .ag-row-selected::before {
    content: "";
    background-color: #bde2e5;
    background-color: var(--ag-selected-row-background-color, #bde2e5);
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .ag-theme-bootstrap .ag-row-hover.ag-full-width-row.ag-row-group > * {
    position: relative;
  }
  .ag-theme-bootstrap .ag-ltr .ag-right-aligned-cell {
    text-align: right;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-right-aligned-cell {
    text-align: left;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-right-aligned-cell .ag-cell-value, .ag-theme-bootstrap .ag-ltr .ag-right-aligned-cell .ag-group-value {
    margin-left: auto;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-right-aligned-cell .ag-cell-value, .ag-theme-bootstrap .ag-rtl .ag-right-aligned-cell .ag-group-value {
    margin-right: auto;
  }
  
  .ag-theme-bootstrap .ag-cell, .ag-theme-bootstrap .ag-full-width-row .ag-cell-wrapper.ag-row-group {
    --ag-internal-calculated-line-height: var(--ag-line-height, 23px);
    --ag-internal-padded-row-height: 23px;
    border: 1px solid transparent;
    line-height: min(var(--ag-internal-calculated-line-height), var(--ag-internal-padded-row-height));
    padding-left: 11px;
    padding-right: 11px;
    -webkit-font-smoothing: subpixel-antialiased;
  }
  .ag-theme-bootstrap .ag-row > .ag-cell-wrapper {
    padding-left: 11px;
    padding-right: 11px;
  }
  .ag-theme-bootstrap .ag-row-dragging {
    cursor: move;
    opacity: 0.5;
  }
  .ag-theme-bootstrap .ag-cell-inline-editing {
    background: #FFF;
    background: var(--ag-background-color, #FFF);
    border-radius: 0px;
    -webkit-box-shadow: none;
            box-shadow: none;
    padding: 4px;
    padding: 0;
    height: 25px;
    background-color: #f6f6f6;
    background-color: var(--ag-control-panel-background-color, #f6f6f6);
  }
  .ag-theme-bootstrap .ag-popup-editor {
    background: #FFF;
    background: var(--ag-background-color, #FFF);
    border-radius: 0px;
    -webkit-box-shadow: none;
            box-shadow: none;
    padding: 4px;
    background-color: #f6f6f6;
    background-color: var(--ag-control-panel-background-color, #f6f6f6);
    padding: 0;
  }
  .ag-theme-bootstrap .ag-large-text-input {
    height: auto;
    padding: 12px;
  }
  .ag-theme-bootstrap .ag-details-row {
    padding: 20px;
    background-color: #FFF;
    background-color: var(--ag-background-color, #FFF);
  }
  .ag-theme-bootstrap .ag-layout-auto-height .ag-center-cols-clipper, .ag-theme-bootstrap .ag-layout-auto-height .ag-center-cols-container, .ag-theme-bootstrap .ag-layout-print .ag-center-cols-clipper, .ag-theme-bootstrap .ag-layout-print .ag-center-cols-container {
    min-height: 50px;
  }
  .ag-theme-bootstrap .ag-overlay-loading-wrapper {
    background-color: rgba(255, 255, 255, 0.66);
    background-color: var(--ag-modal-overlay-background-color, rgba(255, 255, 255, 0.66));
  }
  .ag-theme-bootstrap .ag-overlay-loading-center {
    background: #FFF;
    background: var(--ag-background-color, #FFF);
    border-radius: 0px;
    -webkit-box-shadow: none;
            box-shadow: none;
    padding: 4px;
  }
  .ag-theme-bootstrap .ag-overlay-no-rows-wrapper.ag-layout-auto-height {
    padding-top: 30px;
  }
  .ag-theme-bootstrap .ag-loading {
    display: -webkit-box;
    display: flex;
    height: 100%;
    -webkit-box-align: center;
            align-items: center;
  }
  .ag-theme-bootstrap .ag-ltr .ag-loading {
    padding-left: 12px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-loading {
    padding-right: 12px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-loading-icon {
    padding-right: 12px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-loading-icon {
    padding-left: 12px;
  }
  
  .ag-theme-bootstrap .ag-icon-loading {
    -webkit-animation-name: spin;
            animation-name: spin;
    -webkit-animation-duration: 1000ms;
            animation-duration: 1000ms;
    -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
            animation-timing-function: linear;
  }
  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
    }
  }
  @keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
    }
  }
  .ag-theme-bootstrap .ag-ltr .ag-cell {
    border-right: solid transparent;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-cell {
    border-left: solid transparent;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-cell {
    border-right-width: 1px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-cell {
    border-left-width: 1px;
  }
  
  .ag-theme-bootstrap .ag-cell-range-selected:not(.ag-cell-focus),
  .ag-theme-bootstrap .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-single-cell:not(.ag-cell-inline-editing) {
    background-color: rgba(0, 0, 0, 0.2);
    background-color: var(--ag-range-selection-background-color, rgba(0, 0, 0, 0.2));
  }
  .ag-theme-bootstrap .ag-cell-range-selected:not(.ag-cell-focus).ag-cell-range-chart,
  .ag-theme-bootstrap .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-single-cell:not(.ag-cell-inline-editing).ag-cell-range-chart {
    background-color: rgba(0, 88, 255, 0.1) !important;
    background-color: var(--ag-range-selection-chart-background-color, rgba(0, 88, 255, 0.1)) !important;
  }
  .ag-theme-bootstrap .ag-cell-range-selected:not(.ag-cell-focus).ag-cell-range-chart.ag-cell-range-chart-category,
  .ag-theme-bootstrap .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-single-cell:not(.ag-cell-inline-editing).ag-cell-range-chart.ag-cell-range-chart-category {
    background-color: rgba(0, 255, 132, 0.1) !important;
    background-color: var(--ag-range-selection-chart-category-background-color, rgba(0, 255, 132, 0.1)) !important;
  }
  .ag-theme-bootstrap .ag-cell-range-selected-1:not(.ag-cell-focus),
  .ag-theme-bootstrap .ag-root:not(.ag-context-menu-open) .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-selected-1:not(.ag-cell-inline-editing) {
    background-color: rgba(0, 0, 0, 0.2);
    background-color: var(--ag-range-selection-background-color-1, var(--ag-range-selection-background-color, rgba(0, 0, 0, 0.2)));
  }
  .ag-theme-bootstrap .ag-cell-range-selected-2:not(.ag-cell-focus),
  .ag-theme-bootstrap .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-selected-2 {
    background-color: rgba(0, 0, 0, 0.36);
    background-color: var(--ag-range-selection-background-color-2, rgba(0, 0, 0, 0.36));
  }
  .ag-theme-bootstrap .ag-cell-range-selected-3:not(.ag-cell-focus),
  .ag-theme-bootstrap .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-selected-3 {
    background-color: rgba(0, 0, 0, 0.488);
    background-color: var(--ag-range-selection-background-color-3, rgba(0, 0, 0, 0.488));
  }
  .ag-theme-bootstrap .ag-cell-range-selected-4:not(.ag-cell-focus),
  .ag-theme-bootstrap .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-selected-4 {
    background-color: rgba(0, 0, 0, 0.5904);
    background-color: var(--ag-range-selection-background-color-4, rgba(0, 0, 0, 0.5904));
  }
  .ag-theme-bootstrap .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-top {
    border-top-color: #000;
    border-top-color: var(--ag-range-selection-border-color, var(--ag-foreground-color, #000));
  }
  .ag-theme-bootstrap .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-right {
    border-right-color: #000;
    border-right-color: var(--ag-range-selection-border-color, var(--ag-foreground-color, #000));
  }
  .ag-theme-bootstrap .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-bottom {
    border-bottom-color: #000;
    border-bottom-color: var(--ag-range-selection-border-color, var(--ag-foreground-color, #000));
  }
  .ag-theme-bootstrap .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-left {
    border-left-color: #000;
    border-left-color: var(--ag-range-selection-border-color, var(--ag-foreground-color, #000));
  }
  .ag-theme-bootstrap .ag-ltr .ag-cell-focus:not(.ag-cell-range-selected):focus-within,
  .ag-theme-bootstrap .ag-ltr .ag-context-menu-open .ag-cell-focus:not(.ag-cell-range-selected),
  .ag-theme-bootstrap .ag-ltr .ag-full-width-row.ag-row-focus:focus .ag-cell-wrapper.ag-row-group,
  .ag-theme-bootstrap .ag-ltr .ag-cell-range-single-cell,
  .ag-theme-bootstrap .ag-ltr .ag-cell-range-single-cell.ag-cell-range-handle, .ag-theme-bootstrap .ag-rtl .ag-cell-focus:not(.ag-cell-range-selected):focus-within,
  .ag-theme-bootstrap .ag-rtl .ag-context-menu-open .ag-cell-focus:not(.ag-cell-range-selected),
  .ag-theme-bootstrap .ag-rtl .ag-full-width-row.ag-row-focus:focus .ag-cell-wrapper.ag-row-group,
  .ag-theme-bootstrap .ag-rtl .ag-cell-range-single-cell,
  .ag-theme-bootstrap .ag-rtl .ag-cell-range-single-cell.ag-cell-range-handle {
    border: 1px solid;
    border-color: #000;
    border-color: var(--ag-range-selection-border-color, var(--ag-foreground-color, #000));
    outline: initial;
  }
  .ag-theme-bootstrap .ag-cell.ag-selection-fill-top,
  .ag-theme-bootstrap .ag-cell.ag-selection-fill-top.ag-cell-range-selected {
    border-top: 1px dashed;
    border-top-color: #000;
    border-top-color: var(--ag-range-selection-border-color, var(--ag-foreground-color, #000));
  }
  .ag-theme-bootstrap .ag-ltr .ag-cell.ag-selection-fill-right, .ag-theme-bootstrap .ag-ltr .ag-cell.ag-selection-fill-right.ag-cell-range-selected {
    border-right: 1px dashed !important;
    border-right-color: #000 !important;
    border-right-color: var(--ag-range-selection-border-color, var(--ag-foreground-color, #000)) !important;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-cell.ag-selection-fill-right, .ag-theme-bootstrap .ag-rtl .ag-cell.ag-selection-fill-right.ag-cell-range-selected {
    border-left: 1px dashed !important;
    border-left-color: #000 !important;
    border-left-color: var(--ag-range-selection-border-color, var(--ag-foreground-color, #000)) !important;
  }
  
  .ag-theme-bootstrap .ag-cell.ag-selection-fill-bottom,
  .ag-theme-bootstrap .ag-cell.ag-selection-fill-bottom.ag-cell-range-selected {
    border-bottom: 1px dashed;
    border-bottom-color: #000;
    border-bottom-color: var(--ag-range-selection-border-color, var(--ag-foreground-color, #000));
  }
  .ag-theme-bootstrap .ag-ltr .ag-cell.ag-selection-fill-left, .ag-theme-bootstrap .ag-ltr .ag-cell.ag-selection-fill-left.ag-cell-range-selected {
    border-left: 1px dashed !important;
    border-left-color: #000 !important;
    border-left-color: var(--ag-range-selection-border-color, var(--ag-foreground-color, #000)) !important;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-cell.ag-selection-fill-left, .ag-theme-bootstrap .ag-rtl .ag-cell.ag-selection-fill-left.ag-cell-range-selected {
    border-right: 1px dashed !important;
    border-right-color: #000 !important;
    border-right-color: var(--ag-range-selection-border-color, var(--ag-foreground-color, #000)) !important;
  }
  
  .ag-theme-bootstrap .ag-range-handle, .ag-theme-bootstrap .ag-fill-handle {
    position: absolute;
    width: 6px;
    height: 6px;
    bottom: -1px;
    background-color: #000;
    background-color: var(--ag-range-selection-border-color, var(--ag-foreground-color, #000));
  }
  .ag-theme-bootstrap .ag-ltr .ag-range-handle, .ag-theme-bootstrap .ag-ltr .ag-fill-handle {
    right: -1px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-range-handle, .ag-theme-bootstrap .ag-rtl .ag-fill-handle {
    left: -1px;
  }
  
  .ag-theme-bootstrap .ag-fill-handle {
    cursor: cell;
  }
  .ag-theme-bootstrap .ag-range-handle {
    cursor: nwse-resize;
  }
  .ag-theme-bootstrap .ag-cell-inline-editing {
    border-color: var(--ag-input-focus-border-color) !important;
  }
  .ag-theme-bootstrap .ag-menu {
    background: #FFF;
    background: var(--ag-background-color, #FFF);
    border-radius: 0px;
    -webkit-box-shadow: none;
            box-shadow: none;
    padding: 4px;
    padding: 0;
  }
  .ag-theme-bootstrap .ag-menu-list {
    cursor: default;
    padding: 4px 0;
  }
  .ag-theme-bootstrap .ag-menu-separator {
    height: 9px;
  }
  .ag-theme-bootstrap .ag-menu-separator-part::after {
    content: "";
    display: block;
  }
  .ag-theme-bootstrap .ag-menu-option-active, .ag-theme-bootstrap .ag-compact-menu-option-active {
    background-color: var(--ag-row-hover-color);
  }
  .ag-theme-bootstrap .ag-menu-option-part, .ag-theme-bootstrap .ag-compact-menu-option-part {
    line-height: 12px;
    padding: 6px 0;
  }
  .ag-theme-bootstrap .ag-menu-option-disabled, .ag-theme-bootstrap .ag-compact-menu-option-disabled {
    opacity: 0.5;
  }
  .ag-theme-bootstrap .ag-menu-option-icon, .ag-theme-bootstrap .ag-compact-menu-option-icon {
    width: 12px;
  }
  .ag-theme-bootstrap .ag-ltr .ag-menu-option-icon, .ag-theme-bootstrap .ag-ltr .ag-compact-menu-option-icon {
    padding-left: 8px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-menu-option-icon, .ag-theme-bootstrap .ag-rtl .ag-compact-menu-option-icon {
    padding-right: 8px;
  }
  
  .ag-theme-bootstrap .ag-menu-option-text, .ag-theme-bootstrap .ag-compact-menu-option-text {
    padding-left: 8px;
    padding-right: 8px;
  }
  .ag-theme-bootstrap .ag-ltr .ag-menu-option-shortcut, .ag-theme-bootstrap .ag-ltr .ag-compact-menu-option-shortcut {
    padding-right: 4px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-menu-option-shortcut, .ag-theme-bootstrap .ag-rtl .ag-compact-menu-option-shortcut {
    padding-left: 4px;
  }
  
  .ag-theme-bootstrap .ag-menu-option-popup-pointer, .ag-theme-bootstrap .ag-compact-menu-option-popup-pointer {
    padding-right: 4px;
  }
  .ag-theme-bootstrap .ag-tabs {
    min-width: 220px;
  }
  .ag-theme-bootstrap .ag-tabs-header {
    width: 100%;
    display: -webkit-box;
    display: flex;
  }
  .ag-theme-bootstrap .ag-tab {
    border-bottom: 0 solid transparent;
    display: -webkit-box;
    display: flex;
    -webkit-box-flex: 0;
            flex: none;
    -webkit-box-align: center;
            align-items: center;
    -webkit-box-pack: center;
            justify-content: center;
    cursor: pointer;
  }
  .ag-theme-bootstrap .ag-keyboard-focus .ag-tab:focus {
    outline: none;
  }
  .ag-theme-bootstrap .ag-keyboard-focus .ag-tab:focus::after {
    content: "";
    position: absolute;
    background-color: transparent;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    border: 1px solid;
    border-color: var(--ag-input-focus-border-color);
  }
  .ag-theme-bootstrap .ag-tab-selected {
    border-bottom-color: #000;
    border-bottom-color: var(--ag-selected-tab-underline-color, var(--ag-range-selection-border-color, var(--ag-foreground-color, #000)));
  }
  .ag-theme-bootstrap .ag-menu-header {
    color: #000;
    color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #000));
  }
  .ag-theme-bootstrap .ag-menu:not(.ag-tabs) .ag-filter-select {
    min-width: 167px;
  }
  .ag-theme-bootstrap .ag-tabs .ag-filter-select {
    min-width: 206px;
  }
  .ag-theme-bootstrap .ag-filter-select .ag-picker-field-wrapper {
    width: 0;
  }
  .ag-theme-bootstrap .ag-filter-condition-operator {
    height: 17px;
  }
  .ag-theme-bootstrap .ag-ltr .ag-filter-condition-operator-or {
    margin-left: 8px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-filter-condition-operator-or {
    margin-right: 8px;
  }
  
  .ag-theme-bootstrap .ag-set-filter-select-all {
    padding-top: 6px;
  }
  .ag-theme-bootstrap .ag-set-filter-list, .ag-theme-bootstrap .ag-filter-no-matches {
    height: 120px;
  }
  .ag-theme-bootstrap .ag-set-filter-filter {
    margin-top: 6px;
    margin-left: 6px;
    margin-right: 6px;
  }
  .ag-theme-bootstrap .ag-filter-to {
    margin-top: 4px;
  }
  .ag-theme-bootstrap .ag-mini-filter {
    margin: 6px 6px;
  }
  .ag-theme-bootstrap .ag-set-filter-item {
    margin: 0px 6px;
  }
  .ag-theme-bootstrap .ag-ltr .ag-set-filter-item-value {
    margin-left: 6px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-set-filter-item-value {
    margin-right: 6px;
  }
  
  .ag-theme-bootstrap .ag-filter-apply-panel {
    padding: 6px 6px;
  }
  .ag-theme-bootstrap .ag-filter-apply-panel-button {
    line-height: 1.5;
  }
  .ag-theme-bootstrap .ag-ltr .ag-filter-apply-panel-button {
    margin-left: 8px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-filter-apply-panel-button {
    margin-right: 8px;
  }
  
  .ag-theme-bootstrap .ag-simple-filter-body-wrapper {
    padding: 6px 6px;
    padding-bottom: 2px;
  }
  .ag-theme-bootstrap .ag-simple-filter-body-wrapper > * {
    margin-bottom: 4px;
  }
  .ag-theme-bootstrap .ag-filter-no-matches {
    padding: 6px 6px;
  }
  .ag-theme-bootstrap .ag-multi-filter-menu-item {
    margin: 4px 0;
  }
  .ag-theme-bootstrap .ag-multi-filter-group-title-bar {
    padding: 8px 4px;
    background-color: transparent;
  }
  .ag-theme-bootstrap .ag-keyboard-focus .ag-multi-filter-group-title-bar:focus {
    outline: none;
  }
  .ag-theme-bootstrap .ag-keyboard-focus .ag-multi-filter-group-title-bar:focus::after {
    content: "";
    position: absolute;
    background-color: transparent;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    border: 1px solid;
    border-color: var(--ag-input-focus-border-color);
  }
  .ag-theme-bootstrap .ag-side-bar {
    position: relative;
  }
  .ag-theme-bootstrap .ag-tool-panel-wrapper {
    width: 200px;
    background-color: #f6f6f6;
    background-color: var(--ag-control-panel-background-color, #f6f6f6);
  }
  .ag-theme-bootstrap .ag-side-buttons {
    padding-top: 16px;
    width: 16px;
    position: relative;
    color: #000;
    color: var(--ag-foreground-color, #000);
    overflow: hidden;
  }
  .ag-theme-bootstrap button.ag-side-button-button {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    background: transparent;
    padding: 8px 0 8px 0;
    width: 100%;
    margin: 0;
    min-height: 72px;
    background-position-y: center;
    background-position-x: center;
    background-repeat: no-repeat;
    border: none;
  }
  .ag-theme-bootstrap button.ag-side-button-button:focus {
    -webkit-box-shadow: none;
            box-shadow: none;
  }
  .ag-theme-bootstrap .ag-keyboard-focus .ag-side-button-button:focus {
    outline: none;
  }
  .ag-theme-bootstrap .ag-keyboard-focus .ag-side-button-button:focus::after {
    content: "";
    position: absolute;
    background-color: transparent;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    border: 1px solid;
    border-color: var(--ag-input-focus-border-color);
  }
  .ag-theme-bootstrap .ag-side-button-icon-wrapper {
    margin-bottom: 3px;
  }
  .ag-theme-bootstrap .ag-ltr .ag-side-bar-left .ag-side-button-button,
  .ag-theme-bootstrap .ag-rtl .ag-side-bar-right .ag-side-button-button {
    border-right: 0 solid transparent;
  }
  .ag-theme-bootstrap .ag-ltr .ag-side-bar-left .ag-selected .ag-side-button-button,
  .ag-theme-bootstrap .ag-rtl .ag-side-bar-right .ag-selected .ag-side-button-button {
    border-right-color: #000;
    border-right-color: var(--ag-selected-tab-underline-color, var(--ag-range-selection-border-color, var(--ag-foreground-color, #000)));
  }
  .ag-theme-bootstrap .ag-rtl .ag-side-bar-left .ag-side-button-button,
  .ag-theme-bootstrap .ag-ltr .ag-side-bar-right .ag-side-button-button {
    border-left: 0 solid transparent;
  }
  .ag-theme-bootstrap .ag-rtl .ag-side-bar-left .ag-selected .ag-side-button-button,
  .ag-theme-bootstrap .ag-ltr .ag-side-bar-right .ag-selected .ag-side-button-button {
    border-left-color: #000;
    border-left-color: var(--ag-selected-tab-underline-color, var(--ag-range-selection-border-color, var(--ag-foreground-color, #000)));
  }
  .ag-theme-bootstrap .ag-filter-toolpanel-header {
    height: 24px;
  }
  .ag-theme-bootstrap .ag-ltr .ag-filter-toolpanel-header, .ag-theme-bootstrap .ag-ltr .ag-filter-toolpanel-search {
    padding-left: 4px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-filter-toolpanel-header, .ag-theme-bootstrap .ag-rtl .ag-filter-toolpanel-search {
    padding-right: 4px;
  }
  
  .ag-theme-bootstrap .ag-keyboard-focus .ag-filter-toolpanel-header:focus {
    outline: none;
  }
  .ag-theme-bootstrap .ag-keyboard-focus .ag-filter-toolpanel-header:focus::after {
    content: "";
    position: absolute;
    background-color: transparent;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    border: 1px solid;
    border-color: var(--ag-input-focus-border-color);
  }
  .ag-theme-bootstrap .ag-filter-toolpanel-group.ag-has-filter > .ag-group-title-bar .ag-group-title::after {
    font-family: "agGridClassic";
    font-size: 12px;
    line-height: 12px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    content: "\f114";
    position: absolute;
  }
  .ag-theme-bootstrap .ag-ltr .ag-filter-toolpanel-group.ag-has-filter > .ag-group-title-bar .ag-group-title::after {
    padding-left: 4px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-filter-toolpanel-group.ag-has-filter > .ag-group-title-bar .ag-group-title::after {
    padding-right: 4px;
  }
  
  .ag-theme-bootstrap .ag-filter-toolpanel-group-level-0-header {
    height: 32px;
  }
  .ag-theme-bootstrap .ag-filter-toolpanel-group-item {
    margin-top: 2px;
    margin-bottom: 2px;
  }
  .ag-theme-bootstrap .ag-filter-toolpanel-search {
    height: 25px;
  }
  .ag-theme-bootstrap .ag-filter-toolpanel-search-input {
    -webkit-box-flex: 1;
            flex-grow: 1;
    height: 16px;
  }
  .ag-theme-bootstrap .ag-ltr .ag-filter-toolpanel-search-input {
    margin-right: 4px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-filter-toolpanel-search-input {
    margin-left: 4px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-filter-toolpanel-expand, .ag-theme-bootstrap .ag-ltr .ag-filter-toolpanel-group-title-bar-icon {
    margin-right: 4px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-filter-toolpanel-expand, .ag-theme-bootstrap .ag-rtl .ag-filter-toolpanel-group-title-bar-icon {
    margin-left: 4px;
  }
  
  .ag-theme-bootstrap .ag-filter-toolpanel-group-level-1 .ag-filter-toolpanel-group-level-1-header.ag-filter-toolpanel-group-title-bar {
    background-color: transparent;
  }
  .ag-theme-bootstrap .ag-ltr .ag-filter-toolpanel-group-level-1 .ag-filter-toolpanel-group-level-2-header {
    padding-left: 20px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-filter-toolpanel-group-level-1 .ag-filter-toolpanel-group-level-2-header {
    padding-right: 20px;
  }
  
  .ag-theme-bootstrap .ag-filter-toolpanel-group-level-2 .ag-filter-toolpanel-group-level-2-header.ag-filter-toolpanel-group-title-bar {
    background-color: transparent;
  }
  .ag-theme-bootstrap .ag-ltr .ag-filter-toolpanel-group-level-2 .ag-filter-toolpanel-group-level-3-header {
    padding-left: 36px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-filter-toolpanel-group-level-2 .ag-filter-toolpanel-group-level-3-header {
    padding-right: 36px;
  }
  
  .ag-theme-bootstrap .ag-filter-toolpanel-group-level-3 .ag-filter-toolpanel-group-level-3-header.ag-filter-toolpanel-group-title-bar {
    background-color: transparent;
  }
  .ag-theme-bootstrap .ag-ltr .ag-filter-toolpanel-group-level-3 .ag-filter-toolpanel-group-level-4-header {
    padding-left: 52px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-filter-toolpanel-group-level-3 .ag-filter-toolpanel-group-level-4-header {
    padding-right: 52px;
  }
  
  .ag-theme-bootstrap .ag-filter-toolpanel-group-level-4 .ag-filter-toolpanel-group-level-4-header.ag-filter-toolpanel-group-title-bar {
    background-color: transparent;
  }
  .ag-theme-bootstrap .ag-ltr .ag-filter-toolpanel-group-level-4 .ag-filter-toolpanel-group-level-5-header {
    padding-left: 68px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-filter-toolpanel-group-level-4 .ag-filter-toolpanel-group-level-5-header {
    padding-right: 68px;
  }
  
  .ag-theme-bootstrap .ag-filter-toolpanel-group-level-5 .ag-filter-toolpanel-group-level-5-header.ag-filter-toolpanel-group-title-bar {
    background-color: transparent;
  }
  .ag-theme-bootstrap .ag-ltr .ag-filter-toolpanel-group-level-5 .ag-filter-toolpanel-group-level-6-header {
    padding-left: 84px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-filter-toolpanel-group-level-5 .ag-filter-toolpanel-group-level-6-header {
    padding-right: 84px;
  }
  
  .ag-theme-bootstrap .ag-filter-toolpanel-group-level-6 .ag-filter-toolpanel-group-level-6-header.ag-filter-toolpanel-group-title-bar {
    background-color: transparent;
  }
  .ag-theme-bootstrap .ag-ltr .ag-filter-toolpanel-group-level-6 .ag-filter-toolpanel-group-level-7-header {
    padding-left: 100px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-filter-toolpanel-group-level-6 .ag-filter-toolpanel-group-level-7-header {
    padding-right: 100px;
  }
  
  .ag-theme-bootstrap .ag-filter-toolpanel-group-level-7 .ag-filter-toolpanel-group-level-7-header.ag-filter-toolpanel-group-title-bar {
    background-color: transparent;
  }
  .ag-theme-bootstrap .ag-ltr .ag-filter-toolpanel-group-level-7 .ag-filter-toolpanel-group-level-8-header {
    padding-left: 116px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-filter-toolpanel-group-level-7 .ag-filter-toolpanel-group-level-8-header {
    padding-right: 116px;
  }
  
  .ag-theme-bootstrap .ag-filter-toolpanel-group-level-8 .ag-filter-toolpanel-group-level-8-header.ag-filter-toolpanel-group-title-bar {
    background-color: transparent;
  }
  .ag-theme-bootstrap .ag-ltr .ag-filter-toolpanel-group-level-8 .ag-filter-toolpanel-group-level-9-header {
    padding-left: 132px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-filter-toolpanel-group-level-8 .ag-filter-toolpanel-group-level-9-header {
    padding-right: 132px;
  }
  
  .ag-theme-bootstrap .ag-filter-toolpanel-group-level-9 .ag-filter-toolpanel-group-level-9-header.ag-filter-toolpanel-group-title-bar {
    background-color: transparent;
  }
  .ag-theme-bootstrap .ag-ltr .ag-filter-toolpanel-group-level-9 .ag-filter-toolpanel-group-level-10-header {
    padding-left: 148px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-filter-toolpanel-group-level-9 .ag-filter-toolpanel-group-level-10-header {
    padding-right: 148px;
  }
  
  .ag-theme-bootstrap .ag-filter-toolpanel-group-level-10 .ag-filter-toolpanel-group-level-10-header.ag-filter-toolpanel-group-title-bar {
    background-color: transparent;
  }
  .ag-theme-bootstrap .ag-ltr .ag-filter-toolpanel-group-level-10 .ag-filter-toolpanel-group-level-11-header {
    padding-left: 164px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-filter-toolpanel-group-level-10 .ag-filter-toolpanel-group-level-11-header {
    padding-right: 164px;
  }
  
  .ag-theme-bootstrap .ag-filter-toolpanel-instance-header.ag-filter-toolpanel-group-level-1-header {
    padding-left: 4px;
  }
  .ag-theme-bootstrap .ag-filter-toolpanel-instance-filter {
    margin-top: 4px;
  }
  .ag-theme-bootstrap .ag-ltr .ag-filter-toolpanel-instance-header-icon {
    margin-left: 4px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-filter-toolpanel-instance-header-icon {
    margin-right: 4px;
  }
  
  .ag-theme-bootstrap .ag-pivot-mode-panel {
    min-height: 25px;
    height: 25px;
    display: -webkit-box;
    display: flex;
  }
  .ag-theme-bootstrap .ag-pivot-mode-select {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
            align-items: center;
  }
  .ag-theme-bootstrap .ag-ltr .ag-pivot-mode-select {
    margin-left: 6px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-pivot-mode-select {
    margin-right: 6px;
  }
  
  .ag-theme-bootstrap .ag-keyboard-focus .ag-column-select-header:focus {
    outline: none;
  }
  .ag-theme-bootstrap .ag-keyboard-focus .ag-column-select-header:focus::after {
    content: "";
    position: absolute;
    background-color: transparent;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    border: 1px solid;
    border-color: var(--ag-input-focus-border-color);
  }
  .ag-theme-bootstrap .ag-column-select-header {
    height: 25px;
    -webkit-box-align: center;
            align-items: center;
    padding: 0 6px;
  }
  .ag-theme-bootstrap .ag-column-group-icons,
  .ag-theme-bootstrap .ag-column-select-header-icon {
    color: #000;
    color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #000));
  }
  .ag-theme-bootstrap .ag-column-select-list .ag-list-item-hovered::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #000;
    background-color: var(--ag-range-selection-border-color, var(--ag-foreground-color, #000));
  }
  .ag-theme-bootstrap .ag-column-select-list .ag-item-highlight-top::after {
    top: 0;
  }
  .ag-theme-bootstrap .ag-column-select-list .ag-item-highlight-bottom::after {
    bottom: 0;
  }
  .ag-theme-bootstrap .ag-header {
    background-color: var(--ag-header-background-color);
  }
  .ag-theme-bootstrap .ag-header-row {
    color: #000;
    color: var(--ag-header-foreground-color, var(--ag-secondary-foreground-color, var(--ag-foreground-color, #000)));
    height: 25px;
  }
  .ag-theme-bootstrap .ag-ltr .ag-header-cell:not(.ag-right-aligned-header) .ag-header-label-icon {
    margin-left: 4px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-header-cell:not(.ag-right-aligned-header) .ag-header-label-icon {
    margin-right: 4px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-header-cell.ag-right-aligned-header .ag-header-label-icon {
    margin-right: 4px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-header-cell.ag-right-aligned-header .ag-header-label-icon {
    margin-left: 4px;
  }
  
  .ag-theme-bootstrap .ag-header-cell,
  .ag-theme-bootstrap .ag-header-group-cell {
    padding-left: 12px;
    padding-right: 12px;
  }
  .ag-theme-bootstrap .ag-header-cell.ag-header-cell-moving,
  .ag-theme-bootstrap .ag-header-group-cell.ag-header-cell-moving {
    background-color: #bebebe;
    background-color: var(--ag-header-cell-moving-background-color, #bebebe);
  }
  .ag-theme-bootstrap .ag-keyboard-focus .ag-header-cell:focus {
    outline: none;
  }
  .ag-theme-bootstrap .ag-keyboard-focus .ag-header-cell:focus::after {
    content: "";
    position: absolute;
    background-color: transparent;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    border: 1px solid;
    border-color: var(--ag-input-focus-border-color);
  }
  .ag-theme-bootstrap .ag-keyboard-focus .ag-header-group-cell:focus {
    outline: none;
  }
  .ag-theme-bootstrap .ag-keyboard-focus .ag-header-group-cell:focus::after {
    content: "";
    position: absolute;
    background-color: transparent;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    border: 1px solid;
    border-color: var(--ag-input-focus-border-color);
  }
  .ag-theme-bootstrap .ag-header-icon {
    color: #000;
    color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #000));
  }
  .ag-theme-bootstrap .ag-header-expand-icon {
    cursor: pointer;
  }
  .ag-theme-bootstrap .ag-ltr .ag-header-expand-icon {
    padding-left: 4px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-header-expand-icon {
    padding-right: 4px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-header-select-all {
    margin-right: 12px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-header-select-all {
    margin-left: 12px;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-floating-filter-button {
    margin-left: 12px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-floating-filter-button {
    margin-right: 12px;
  }
  
  .ag-theme-bootstrap .ag-floating-filter-button-button {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    background: transparent;
    border: none;
    height: 12px;
    padding: 0;
    width: 12px;
  }
  .ag-theme-bootstrap .ag-filter-loading {
    background-color: #f6f6f6;
    background-color: var(--ag-control-panel-background-color, #f6f6f6);
    height: 100%;
    padding: 6px 6px;
    position: absolute;
    width: 100%;
    z-index: 1;
  }
  .ag-theme-bootstrap .ag-paging-panel {
    border-top: 1px solid;
    border-top-color: darkgrey;
    border-top-color: var(--ag-border-color, darkgrey);
    color: #000;
    color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #000));
    height: 25px;
  }
  .ag-theme-bootstrap .ag-paging-panel > * {
    margin: 0 12px;
  }
  .ag-theme-bootstrap .ag-paging-button {
    cursor: pointer;
  }
  .ag-theme-bootstrap .ag-paging-button.ag-disabled {
    cursor: default;
    color: rgba(0, 0, 0, 0.5);
    color: var(--ag-disabled-foreground-color, rgba(0, 0, 0, 0.5));
  }
  .ag-theme-bootstrap .ag-keyboard-focus .ag-paging-button:focus {
    outline: none;
  }
  .ag-theme-bootstrap .ag-keyboard-focus .ag-paging-button:focus::after {
    content: "";
    position: absolute;
    background-color: transparent;
    pointer-events: none;
    top: 0px;
    left: 0px;
    display: block;
    width: calc(100% - 0px);
    height: calc(100% - 0px);
    border: 1px solid;
    border-color: var(--ag-input-focus-border-color);
  }
  .ag-theme-bootstrap .ag-paging-button, .ag-theme-bootstrap .ag-paging-description {
    margin: 0 4px;
  }
  .ag-theme-bootstrap .ag-status-bar {
    color: rgba(0, 0, 0, 0.5);
    color: var(--ag-disabled-foreground-color, rgba(0, 0, 0, 0.5));
    padding-right: 16px;
    padding-left: 16px;
    line-height: 1.5;
  }
  .ag-theme-bootstrap .ag-status-name-value-value {
    color: #000;
    color: var(--ag-foreground-color, #000);
  }
  .ag-theme-bootstrap .ag-status-bar-center {
    text-align: center;
  }
  .ag-theme-bootstrap .ag-status-name-value {
    margin-left: 4px;
    margin-right: 4px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .ag-theme-bootstrap .ag-column-drop-cell {
    background: #ecf0f1;
    background: var(--ag-chip-background-color, #ecf0f1);
    border-radius: 16px;
    height: 16px;
    padding: 0 2px;
    border: 1px solid transparent;
    cursor: pointer;
  }
  .ag-theme-bootstrap .ag-keyboard-focus .ag-column-drop-cell:focus {
    outline: none;
  }
  .ag-theme-bootstrap .ag-keyboard-focus .ag-column-drop-cell:focus::after {
    content: "";
    position: absolute;
    background-color: transparent;
    pointer-events: none;
    top: 2px;
    left: 2px;
    display: block;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 1px solid;
    border-color: var(--ag-input-focus-border-color);
  }
  .ag-theme-bootstrap .ag-column-drop-cell-text {
    margin: 0 4px;
  }
  .ag-theme-bootstrap .ag-column-drop-cell-button {
    min-width: 16px;
    margin: 0 2px;
    color: #000;
    color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #000));
  }
  .ag-theme-bootstrap .ag-column-drop-cell-drag-handle {
    margin-left: 8px;
  }
  .ag-theme-bootstrap .ag-column-drop-cell-ghost {
    opacity: 0.5;
  }
  .ag-theme-bootstrap .ag-column-drop-horizontal {
    background-color: #f6f6f6;
    background-color: var(--ag-control-panel-background-color, #f6f6f6);
    color: #000;
    color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #000));
    height: 25px;
  }
  .ag-theme-bootstrap .ag-ltr .ag-column-drop-horizontal {
    padding-left: 12px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-column-drop-horizontal {
    padding-right: 12px;
  }
  
  .ag-theme-bootstrap .ag-column-drop-horizontal-cell-separator {
    margin: 0 4px;
    color: #000;
    color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #000));
  }
  .ag-theme-bootstrap .ag-column-drop-horizontal-empty-message {
    color: rgba(0, 0, 0, 0.5);
    color: var(--ag-disabled-foreground-color, rgba(0, 0, 0, 0.5));
  }
  .ag-theme-bootstrap .ag-ltr .ag-column-drop-horizontal-icon {
    margin-right: 12px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-column-drop-horizontal-icon {
    margin-left: 12px;
  }
  
  .ag-theme-bootstrap .ag-column-drop-vertical-list {
    padding-bottom: 4px;
    padding-right: 4px;
    padding-left: 4px;
  }
  .ag-theme-bootstrap .ag-column-drop-vertical-cell {
    margin-top: 4px;
  }
  .ag-theme-bootstrap .ag-column-drop-vertical {
    min-height: 50px;
  }
  .ag-theme-bootstrap .ag-column-drop-vertical-icon {
    margin-left: 4px;
    margin-right: 4px;
  }
  .ag-theme-bootstrap .ag-column-drop-vertical-empty-message {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.5);
    color: var(--ag-disabled-foreground-color, rgba(0, 0, 0, 0.5));
    margin-top: 4px;
  }
  .ag-theme-bootstrap .ag-select-agg-func-popup {
    background: #FFF;
    background: var(--ag-background-color, #FFF);
    border-radius: 0px;
    -webkit-box-shadow: none;
            box-shadow: none;
    padding: 4px;
    background: #FFF;
    background: var(--ag-background-color, #FFF);
    height: 70px;
    padding: 0;
  }
  .ag-theme-bootstrap .ag-select-agg-func-virtual-list-item {
    cursor: default;
    padding-left: 8px;
  }
  .ag-theme-bootstrap .ag-select-agg-func-virtual-list-item:hover {
    background-color: #bde2e5;
    background-color: var(--ag-selected-row-background-color, #bde2e5);
  }
  .ag-theme-bootstrap .ag-keyboard-focus .ag-select-agg-func-virtual-list-item:focus {
    outline: none;
  }
  .ag-theme-bootstrap .ag-keyboard-focus .ag-select-agg-func-virtual-list-item:focus::after {
    content: "";
    position: absolute;
    background-color: transparent;
    pointer-events: none;
    top: 1px;
    left: 1px;
    display: block;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border: 1px solid;
    border-color: var(--ag-input-focus-border-color);
  }
  .ag-theme-bootstrap .ag-sort-indicator-container {
    display: -webkit-box;
    display: flex;
  }
  .ag-theme-bootstrap .ag-ltr .ag-sort-indicator-icon {
    padding-left: 4px;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-sort-indicator-icon {
    padding-right: 4px;
  }
  
  .ag-theme-bootstrap .ag-chart-menu {
    border-radius: 0px;
    background: #FFF;
    background: var(--ag-background-color, #FFF);
  }
  .ag-theme-bootstrap .ag-chart-menu-icon {
    opacity: 0.5;
    line-height: 24px;
    font-size: 24px;
    width: 24px;
    height: 24px;
    margin: 2px 0;
    cursor: pointer;
    border-radius: 0px;
    color: #000;
    color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #000));
  }
  .ag-theme-bootstrap .ag-chart-menu-icon:hover {
    opacity: 1;
  }
  .ag-theme-bootstrap .ag-chart-menu-close {
    background: #FFF;
    background: var(--ag-background-color, #FFF);
  }
  .ag-theme-bootstrap .ag-chart-menu-close .ag-icon {
    background: none;
    border: 1px solid darkgrey;
    border-right: none;
  }
  .ag-theme-bootstrap .ag-chart-menu-close .ag-icon:hover {
    background: var(--ag-header-background-color);
  }
  .ag-theme-bootstrap .ag-chart-mini-thumbnail {
    border: 1px solid;
    border-color: darkgrey;
    border-color: var(--ag-secondary-border-color, var(--ag-border-color, darkgrey));
    border-radius: 5px;
    margin: 5px;
  }
  .ag-theme-bootstrap .ag-chart-mini-thumbnail:nth-last-child(3), .ag-theme-bootstrap .ag-chart-mini-thumbnail:nth-last-child(3) ~ .ag-chart-mini-thumbnail {
    margin-left: auto;
    margin-right: auto;
  }
  .ag-theme-bootstrap .ag-ltr .ag-chart-mini-thumbnail:first-child {
    margin-left: 0;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-chart-mini-thumbnail:first-child {
    margin-right: 0;
  }
  
  .ag-theme-bootstrap .ag-ltr .ag-chart-mini-thumbnail:last-child {
    margin-right: 0;
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-chart-mini-thumbnail:last-child {
    margin-left: 0;
  }
  
  .ag-theme-bootstrap .ag-chart-mini-thumbnail.ag-selected {
    border-color: #000;
    border-color: var(--ag-minichart-selected-chart-color, var(--ag-checkbox-checked-color, var(--ag-foreground-color, #000)));
  }
  .ag-theme-bootstrap .ag-chart-settings-card-item {
    background: #000;
    background: var(--ag-foreground-color, #000);
    width: 8px;
    height: 8px;
    border-radius: 4px;
  }
  .ag-theme-bootstrap .ag-chart-settings-card-item.ag-selected {
    background-color: #000;
    background-color: var(--ag-minichart-selected-page-color, var(--ag-checkbox-checked-color, var(--ag-foreground-color, #000)));
  }
  .ag-theme-bootstrap .ag-chart-data-column-drag-handle {
    margin-left: 4px;
  }
  .ag-theme-bootstrap .ag-charts-settings-group-container {
    padding: 4px;
  }
  .ag-theme-bootstrap .ag-charts-data-group-container {
    padding: 3px 6px;
  }
  .ag-theme-bootstrap .ag-charts-data-group-container .ag-charts-data-group-item:not(.ag-charts-format-sub-level-group) {
    height: 20px;
  }
  .ag-theme-bootstrap .ag-charts-data-group-container .ag-list-item-hovered::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #000;
    background-color: var(--ag-range-selection-border-color, var(--ag-foreground-color, #000));
  }
  .ag-theme-bootstrap .ag-charts-data-group-container .ag-item-highlight-top::after {
    top: 0;
  }
  .ag-theme-bootstrap .ag-charts-data-group-container .ag-item-highlight-bottom::after {
    bottom: 0;
  }
  .ag-theme-bootstrap .ag-charts-format-top-level-group-container {
    margin-left: 8px;
    padding: 4px;
  }
  .ag-theme-bootstrap .ag-charts-format-top-level-group-item {
    margin: 4px 0;
  }
  .ag-theme-bootstrap .ag-charts-format-sub-level-group-container {
    padding: 6px 6px;
    padding-bottom: 2px;
  }
  .ag-theme-bootstrap .ag-charts-format-sub-level-group-container > * {
    margin-bottom: 4px;
  }
  .ag-theme-bootstrap .ag-charts-group-container.ag-group-container-horizontal {
    padding: 4px;
  }
  .ag-theme-bootstrap .ag-chart-data-section,
  .ag-theme-bootstrap .ag-chart-format-section {
    display: -webkit-box;
    display: flex;
    margin: 0;
  }
  .ag-theme-bootstrap .ag-chart-menu-panel {
    background-color: #f6f6f6;
    background-color: var(--ag-control-panel-background-color, #f6f6f6);
  }
  .ag-theme-bootstrap .ag-ltr .ag-chart-menu-panel {
    border-left: solid 1px;
    border-left-color: darkgrey;
    border-left-color: var(--ag-border-color, darkgrey);
  }
  
  .ag-theme-bootstrap .ag-rtl .ag-chart-menu-panel {
    border-right: solid 1px;
    border-right-color: darkgrey;
    border-right-color: var(--ag-border-color, darkgrey);
  }
  
  .ag-theme-bootstrap .ag-date-time-list-page-title {
    -webkit-box-flex: 1;
            flex-grow: 1;
    text-align: center;
  }
  .ag-theme-bootstrap .ag-date-time-list-page-column-label {
    text-align: center;
  }
  .ag-theme-bootstrap .ag-date-time-list-page-entry {
    text-align: center;
  }
  .ag-theme-bootstrap .ag-checkbox-input-wrapper {
    font-family: "agGridClassic";
    font-size: 12px;
    line-height: 12px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 12px;
    height: 12px;
    background-color: var(--ag-checkbox-background-color);
    border-radius: 0px;
    display: inline-block;
    vertical-align: middle;
    -webkit-box-flex: 0;
            flex: none;
  }
  .ag-theme-bootstrap .ag-checkbox-input-wrapper input, .ag-theme-bootstrap .ag-checkbox-input-wrapper input {
    -webkit-appearance: none;
    opacity: 0;
    width: 100%;
    height: 100%;
  }
  .ag-theme-bootstrap .ag-checkbox-input-wrapper:focus-within, .ag-theme-bootstrap .ag-checkbox-input-wrapper:active {
    outline: none;
  }
  .ag-theme-bootstrap .ag-checkbox-input-wrapper.ag-disabled {
    opacity: 0.5;
  }
  .ag-theme-bootstrap .ag-checkbox-input-wrapper::after {
    content: "\f108";
    color: #000;
    color: var(--ag-checkbox-unchecked-color, var(--ag-foreground-color, #000));
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }
  .ag-theme-bootstrap .ag-checkbox-input-wrapper.ag-checked::after {
    content: "\f106";
    color: #000;
    color: var(--ag-checkbox-checked-color, var(--ag-foreground-color, #000));
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }
  .ag-theme-bootstrap .ag-checkbox-input-wrapper.ag-indeterminate::after {
    content: "\f107";
    color: #000;
    color: var(--ag-checkbox-indeterminate-color, var(--ag-checkbox-unchecked-color, var(--ag-foreground-color, #000)));
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }
  .ag-theme-bootstrap .ag-toggle-button-input-wrapper {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    width: 24px;
    height: 12px;
    background-color: #000;
    background-color: var(--ag-toggle-button-off-background-color, var(--ag-checkbox-unchecked-color, var(--ag-foreground-color, #000)));
    border-radius: 6px;
    position: relative;
    -webkit-box-flex: 0;
            flex: none;
    border: 1px solid;
    border-color: #000;
    border-color: var(--ag-toggle-button-off-border-color, var(--ag-checkbox-unchecked-color, var(--ag-foreground-color, #000)));
  }
  .ag-theme-bootstrap .ag-toggle-button-input-wrapper input {
    opacity: 0;
    height: 100%;
    width: 100%;
  }
  .ag-theme-bootstrap .ag-toggle-button-input-wrapper:focus-within {
    outline: none;
  }
  .ag-theme-bootstrap .ag-toggle-button-input-wrapper.ag-disabled {
    opacity: 0.5;
  }
  .ag-theme-bootstrap .ag-toggle-button-input-wrapper.ag-checked {
    background-color: #000;
    background-color: var(--ag-toggle-button-on-background-color, var(--ag-checkbox-checked-color, var(--ag-foreground-color, #000)));
    border-color: #000;
    border-color: var(--ag-toggle-button-on-border-color, var(--ag-checkbox-checked-color, var(--ag-foreground-color, #000)));
  }
  .ag-theme-bootstrap .ag-toggle-button-input-wrapper::before {
    content: " ";
    position: absolute;
    top: -1px;
    left: -1px;
    display: block;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    height: 12px;
    width: 12px;
    background-color: #FFF;
    background-color: var(--ag-toggle-button-switch-background-color, var(--ag-background-color, #FFF));
    border-radius: 6px;
    -webkit-transition: left 100ms;
    transition: left 100ms;
    border: 1px solid;
    border-color: #000;
    border-color: var(--ag-toggle-button-switch-border-color, var(--ag-toggle-button-off-border-color, var(--ag-checkbox-unchecked-color, var(--ag-foreground-color, #000))));
  }
  .ag-theme-bootstrap .ag-toggle-button-input-wrapper.ag-checked::before {
    left: calc(100% - 12px );
    border-color: #000;
    border-color: var(--ag-toggle-button-on-border-color, var(--ag-checkbox-checked-color, var(--ag-foreground-color, #000)));
  }
  .ag-theme-bootstrap .ag-radio-button-input-wrapper {
    font-family: "agGridClassic";
    font-size: 12px;
    line-height: 12px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 12px;
    height: 12px;
    background-color: var(--ag-checkbox-background-color);
    border-radius: 0px;
    display: inline-block;
    vertical-align: middle;
    -webkit-box-flex: 0;
            flex: none;
    border-radius: 12px;
  }
  .ag-theme-bootstrap .ag-radio-button-input-wrapper input, .ag-theme-bootstrap .ag-radio-button-input-wrapper input {
    -webkit-appearance: none;
    opacity: 0;
    width: 100%;
    height: 100%;
  }
  .ag-theme-bootstrap .ag-radio-button-input-wrapper:focus-within, .ag-theme-bootstrap .ag-radio-button-input-wrapper:active {
    outline: none;
  }
  .ag-theme-bootstrap .ag-radio-button-input-wrapper.ag-disabled {
    opacity: 0.5;
  }
  .ag-theme-bootstrap .ag-radio-button-input-wrapper::after {
    content: "\f126";
    color: #000;
    color: var(--ag-checkbox-unchecked-color, var(--ag-foreground-color, #000));
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }
  .ag-theme-bootstrap .ag-radio-button-input-wrapper.ag-checked::after {
    content: "\f127";
    color: #000;
    color: var(--ag-checkbox-checked-color, var(--ag-foreground-color, #000));
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }
  .ag-theme-bootstrap input[class^=ag-][type=range] {
    -webkit-appearance: none;
    width: 100%;
    height: 100%;
    background: none;
    overflow: visible;
  }
  .ag-theme-bootstrap input[class^=ag-][type=range]::-webkit-slider-runnable-track {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 3px;
    background-color: darkgrey;
    background-color: var(--ag-border-color, darkgrey);
    border-radius: 0px;
    border-radius: 0px;
  }
  .ag-theme-bootstrap input[class^=ag-][type=range]::-moz-range-track {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 3px;
    background-color: darkgrey;
    background-color: var(--ag-border-color, darkgrey);
    border-radius: 0px;
    border-radius: 0px;
  }
  .ag-theme-bootstrap input[class^=ag-][type=range]::-ms-track {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 3px;
    background-color: darkgrey;
    background-color: var(--ag-border-color, darkgrey);
    border-radius: 0px;
    border-radius: 0px;
    color: transparent;
    width: calc(100% - 2px);
  }
  .ag-theme-bootstrap input[class^=ag-][type=range]::-webkit-slider-thumb {
    margin: 0;
    padding: 0;
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    background-color: #FFF;
    background-color: var(--ag-background-color, #FFF);
    border: 1px solid;
    border-color: #000;
    border-color: var(--ag-checkbox-unchecked-color, var(--ag-foreground-color, #000));
    border-radius: 12px;
    -webkit-transform: translateY(-4.5px);
            transform: translateY(-4.5px);
  }
  .ag-theme-bootstrap input[class^=ag-][type=range]::-ms-thumb {
    margin: 0;
    padding: 0;
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    background-color: #FFF;
    background-color: var(--ag-background-color, #FFF);
    border: 1px solid;
    border-color: #000;
    border-color: var(--ag-checkbox-unchecked-color, var(--ag-foreground-color, #000));
    border-radius: 12px;
  }
  .ag-theme-bootstrap input[class^=ag-][type=range]::-moz-ag-range-thumb {
    margin: 0;
    padding: 0;
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    background-color: #FFF;
    background-color: var(--ag-background-color, #FFF);
    border: 1px solid;
    border-color: #000;
    border-color: var(--ag-checkbox-unchecked-color, var(--ag-foreground-color, #000));
    border-radius: 12px;
  }
  .ag-theme-bootstrap input[class^=ag-][type=range]:focus {
    outline: none;
  }
  .ag-theme-bootstrap input[class^=ag-][type=range]:focus::-webkit-slider-thumb {
    border-color: #000;
    border-color: var(--ag-checkbox-checked-color, var(--ag-foreground-color, #000));
  }
  .ag-theme-bootstrap input[class^=ag-][type=range]:focus::-ms-thumb {
    border-color: #000;
    border-color: var(--ag-checkbox-checked-color, var(--ag-foreground-color, #000));
  }
  .ag-theme-bootstrap input[class^=ag-][type=range]:focus::-moz-ag-range-thumb {
    border-color: #000;
    border-color: var(--ag-checkbox-checked-color, var(--ag-foreground-color, #000));
  }
  .ag-theme-bootstrap input[class^=ag-][type=range]:active::-webkit-slider-runnable-track {
    background-color: var(--ag-input-focus-border-color);
  }
  .ag-theme-bootstrap input[class^=ag-][type=range]:active::-moz-ag-range-track {
    background-color: var(--ag-input-focus-border-color);
  }
  .ag-theme-bootstrap input[class^=ag-][type=range]:active::-ms-track {
    background-color: var(--ag-input-focus-border-color);
  }
  .ag-theme-bootstrap input[class^=ag-][type=range]:disabled {
    opacity: 0.5;
  }
  .ag-theme-bootstrap .ag-icon {
    color: #333;
    margin: 1px 1px 2px 1px;
  }
  .ag-theme-bootstrap .ag-icon-tree-closed::before {
    content: "\f10b";
  }
  .ag-theme-bootstrap .ag-icon-tree-open::before {
    content: "\f111";
  }
  .ag-theme-bootstrap .ag-header, .ag-theme-bootstrap .ag-column-drop-cell {
    background-image: none;
  }
  .ag-theme-bootstrap .ag-tab {
    border: 1px solid transparent;
    padding: 4px 8px;
    margin: 4px;
    margin-bottom: -1px;
  }
  .ag-theme-bootstrap .ag-tabs-body {
    margin: 2px 0;
  }
  .ag-theme-bootstrap .ag-tab-selected {
    background-color: #FFF;
    background-color: var(--ag-background-color, #FFF);
    border-color: darkgrey;
    border-color: var(--ag-border-color, darkgrey);
    border-bottom-color: transparent;
  }
  .ag-theme-bootstrap .ag-tabs-header {
    background-color: var(--ag-header-background-color);
    border-bottom: 1px solid;
    border-bottom-color: darkgrey;
    border-bottom-color: var(--ag-border-color, darkgrey);
  }
  .ag-theme-bootstrap .ag-filter .ag-filter-apply-panel {
    -webkit-box-pack: start;
            justify-content: flex-start;
  }
  .ag-theme-bootstrap .ag-menu-option-active {
    background-color: #bde2e5;
    background-color: var(--ag-selected-row-background-color, #bde2e5);
  }
  .ag-theme-bootstrap .ag-column-drop-cell {
    border: 1px solid;
    border-color: darkgrey;
    border-color: var(--ag-border-color, darkgrey);
    border-radius: 0;
  }
  .ag-theme-bootstrap .ag-column-drop-cell-button .ag-icon {
    border: 1px solid transparent;
  }
  .ag-theme-bootstrap .ag-column-drop-cell-button:hover .ag-icon {
    border-color: darkgrey;
    border-color: var(--ag-border-color, darkgrey);
  }
  .ag-theme-bootstrap .ag-panel-title-bar-button-icon {
    font-size: 20px;
    line-height: 20px;
  }
  .ag-theme-bootstrap .ag-menu-option-part {
    padding-top: 4px;
    padding-bottom: 4px;
  }
  .ag-theme-bootstrap .ag-column-drop-vertical-title-bar {
    margin-top: 4px;
    margin-left: 4px;
  }
  .ag-theme-bootstrap .ag-column-drop-vertical-title {
    margin-left: 4px;
  }
  .ag-theme-bootstrap .ag-column-drop-vertical-empty-message {
    margin-left: 24px;
  }
  `;
const font = `@font-face {
    font-family: "agGridMaterial";
    src: url(data:font/woff2;charset=utf-8;base64,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);
    font-weight: normal;
    font-style: normal;
  }
  `;
