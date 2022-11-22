/* eslint-disable */
export const agGridStyles = {
	'@global': {
		'ag-grid, ag-grid-angular, ag-grid-ng2, ag-grid-polymer, ag-grid-aurelia': {
			display: 'block',
		},
		'.ag-hidden': {
			display: 'none !important',
		},
		'.ag-invisible': {
			visibility: 'hidden !important',
		},
		'.ag-no-transition': {
			transition: 'none !important',
		},
		'.ag-drag-handle': {
			cursor: 'grab',
		},
		'.ag-column-drop-wrapper': {
			display: 'flex',
		},
		'.ag-column-drop-horizontal-half-width': {
			display: 'inline-block',
			width: '50% !important',
		},
		'.ag-unselectable': {
			mozUserSelect: 'none',
			webkitUserSelect: 'none',
			userSelect: 'none',
		},
		'.ag-selectable': {
			mozUserSelect: 'text',
			webkitUserSelect: 'text',
			userSelect: 'text',
		},
		'.ag-tab': {
			position: 'relative',
		},
		'.ag-tab-guard': {
			position: 'absolute',
			width: '0',
			height: '0',
			display: 'block',
		},
		'.ag-select-agg-func-popup': {
			position: 'absolute',
		},
		'.ag-input-wrapper, .ag-picker-field-wrapper': {
			display: 'flex',
			flex: '1 1 auto',
			alignItems: 'center',
			lineHeight: 'normal',
			position: 'relative',
		},
		'.ag-shake-left-to-right': {
			animationDirection: 'alternate',
			animationDuration: '0.2s',
			animationIterationCount: 'infinite',
			animationName: 'ag-shake-left-to-right',
		},
		'@keyframes ag-shake-left-to-right': {
			from: {
				paddingLeft: '6px',
				paddingRight: '2px',
			},
			to: {
				paddingLeft: '2px',
				paddingRight: '6px',
			},
		},
		'.ag-root-wrapper': {
			cursor: 'default',
			position: 'relative',
			display: 'flex',
			flexDirection: 'column',
			overflow: 'hidden',
		},
		'.ag-root-wrapper.ag-layout-normal': {
			height: '100%',
		},
		'.ag-watermark': {
			position: 'absolute',
			bottom: '20px',
			right: '25px',
			opacity: '0.5',
			transition: 'opacity 1s ease-out 3s',
		},
		'.ag-watermark::before': {
			content: '',
			backgroundImage:
				'url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDIzNSA0MCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7Ij4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuNjM1NzIzLDAsMCwwLjYzNTcyMywtNDkyLjkyMSwtMzIzLjYwOCkiPgogICAgICAgIDxwYXRoIGQ9Ik0xMDk5LjQsNTQ5LjRMMTA5OS40LDUzNi45TDEwNzguMSw1MzYuOUwxMDY1LjYsNTQ5LjRMMTA5OS40LDU0OS40WiIgc3R5bGU9ImZpbGw6cmdiKDI0LDI5LDMxKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgICAgICA8cGF0aCBkPSJNMTEyMy40LDUxOC40TDEwOTYuNyw1MTguNEwxMDg0LjEsNTMwLjlMMTEyMy40LDUzMC45TDExMjMuNCw1MTguNFoiIHN0eWxlPSJmaWxsOnJnYigyNCwyOSwzMSk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICAgICAgPHBhdGggZD0iTTEwNTMuMiw1NjEuOUwxMDU5LjYsNTU1LjVMMTA4MS4yLDU1NS41TDEwODEuMiw1NjhMMTA1My4yLDU2OEwxMDUzLjIsNTYxLjlaIiBzdHlsZT0iZmlsbDpyZ2IoMjQsMjksMzEpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMDU3LjksNTQzLjNMMTA3MS43LDU0My4zTDEwODQuMyw1MzAuOEwxMDU3LjksNTMwLjhMMTA1Ny45LDU0My4zWiIgc3R5bGU9ImZpbGw6cmdiKDI0LDI5LDMxKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgICAgICA8cGF0aCBkPSJNMTA0Mi44LDU2MS45TDEwNTMuMiw1NjEuOUwxMDY1LjYsNTQ5LjRMMTA0Mi44LDU0OS40TDEwNDIuOCw1NjEuOVoiIHN0eWxlPSJmaWxsOnJnYigyNCwyOSwzMSk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICAgICAgPHBhdGggZD0iTTEwOTYuNyw1MTguNEwxMDkwLjMsNTI0LjhMMTA0OS41LDUyNC44TDEwNDkuNSw1MTIuM0wxMDk2LjcsNTEyLjNMMTA5Ni43LDUxOC40WiIgc3R5bGU9ImZpbGw6cmdiKDI0LDI5LDMxKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgICAgICA8cGF0aCBkPSJNODI4LjYsNTU5LjdMODA5LDU1OS43TDgwNS42LDU2OC4xTDc5Nyw1NjguMUw4MTUuMSw1MjUuN0w4MjIuNiw1MjUuN0w4NDAuNyw1NjguMUw4MzIsNTY4LjFMODI4LjYsNTU5LjdaTTgyNS45LDU1M0w4MTguOCw1MzUuN0w4MTEuNyw1NTNMODI1LjksNTUzWiIgc3R5bGU9ImZpbGw6cmdiKDI0LDI5LDMxKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgICAgICA8cGF0aCBkPSJNOTYwLjEsNTQxLjNDOTYyLjYsNTM3LjYgOTY4LjksNTM3LjIgOTcxLjUsNTM3LjJMOTcxLjUsNTQ0LjRDOTY4LjMsNTQ0LjQgOTY1LjEsNTQ0LjUgOTYzLjIsNTQ1LjlDOTYxLjMsNTQ3LjMgOTYwLjMsNTQ5LjIgOTYwLjMsNTUxLjVMOTYwLjMsNTY4LjFMOTUyLjUsNTY4LjFMOTUyLjUsNTM3LjJMOTYwLDUzNy4yTDk2MC4xLDU0MS4zWiIgc3R5bGU9ImZpbGw6cmdiKDI0LDI5LDMxKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgICAgICA8cmVjdCB4PSI5NzUuOCIgeT0iNTM3LjIiIHdpZHRoPSI3LjgiIGhlaWdodD0iMzAuOSIgc3R5bGU9ImZpbGw6cmdiKDI0LDI5LDMxKTsiLz4KICAgICAgICA8cmVjdCB4PSI5NzUuOCIgeT0iNTIzLjQiIHdpZHRoPSI3LjgiIGhlaWdodD0iOS4yIiBzdHlsZT0iZmlsbDpyZ2IoMjQsMjksMzEpOyIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMDIyLjMsNTIzLjRMMTAyMi4zLDU2OC4xTDEwMTQuOCw1NjguMUwxMDE0LjYsNTYzLjRDMTAxMy41LDU2NSAxMDEyLjEsNTY2LjMgMTAxMC40LDU2Ny4zQzEwMDguNyw1NjguMiAxMDA2LjYsNTY4LjcgMTAwNC4yLDU2OC43QzEwMDIuMSw1NjguNyAxMDAwLjEsNTY4LjMgOTk4LjQsNTY3LjZDOTk2LjYsNTY2LjggOTk1LDU2NS44IDk5My43LDU2NC40Qzk5Mi40LDU2MyA5OTEuMyw1NjEuMyA5OTAuNiw1NTkuNEM5ODkuOCw1NTcuNSA5ODkuNSw1NTUuMyA5ODkuNSw1NTIuOUM5ODkuNSw1NTAuNSA5ODkuOSw1NDguMyA5OTAuNiw1NDYuM0M5OTEuNCw1NDQuMyA5OTIuNCw1NDIuNiA5OTMuNyw1NDEuMkM5OTUsNTM5LjggOTk2LjYsNTM4LjcgOTk4LjQsNTM3LjlDMTAwMC4yLDUzNy4xIDEwMDIuMSw1MzYuNyAxMDA0LjIsNTM2LjdDMTAwNi42LDUzNi43IDEwMDguNiw1MzcuMSAxMDEwLjMsNTM4QzEwMTIsNTM4LjkgMTAxMy40LDU0MC4xIDEwMTQuNSw1NDEuOEwxMDE0LjUsNTIzLjVMMTAyMi4zLDUyMy41TDEwMjIuMyw1MjMuNFpNMTAwNS45LDU2MkMxMDA4LjUsNTYyIDEwMTAuNSw1NjEuMSAxMDEyLjEsNTU5LjRDMTAxMy43LDU1Ny43IDEwMTQuNSw1NTUuNCAxMDE0LjUsNTUyLjZDMTAxNC41LDU0OS44IDEwMTMuNyw1NDcuNiAxMDEyLjEsNTQ1LjhDMTAxMC41LDU0NC4xIDEwMDguNSw1NDMuMiAxMDA1LjksNTQzLjJDMTAwMy40LDU0My4yIDEwMDEuMyw1NDQuMSA5OTkuOCw1NDUuOEM5OTguMiw1NDcuNSA5OTcuNCw1NDkuOCA5OTcuNCw1NTIuNkM5OTcuNCw1NTUuNCA5OTguMiw1NTcuNiA5OTkuOCw1NTkuM0MxMDAxLjQsNTYxLjEgMTAwMy40LDU2MiAxMDA1LjksNTYyIiBzdHlsZT0iZmlsbDpyZ2IoMjQsMjksMzEpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgICAgIDxwYXRoIGQ9Ik04ODUuOCw1NDQuMkw4NjYuNSw1NDQuMkw4NjYuNSw1NTAuOUw4NzcuNSw1NTAuOUM4NzcuMiw1NTQuMyA4NzUuOSw1NTYuOSA4NzMuNyw1NTlDODcxLjUsNTYxIDg2OC43LDU2MiA4NjUuMSw1NjJDODYzLjEsNTYyIDg2MS4yLDU2MS42IDg1OS42LDU2MC45Qzg1Ny45LDU2MC4yIDg1Ni41LDU1OS4yIDg1NS4zLDU1Ny44Qzg1NC4xLDU1Ni41IDg1My4yLDU1NC45IDg1Mi41LDU1M0M4NTEuOCw1NTEuMSA4NTEuNSw1NDkuMSA4NTEuNSw1NDYuOEM4NTEuNSw1NDQuNSA4NTEuOCw1NDIuNSA4NTIuNSw1NDAuNkM4NTMuMSw1MzguNyA4NTQuMSw1MzcuMiA4NTUuMyw1MzUuOEM4NTYuNSw1MzQuNSA4NTcuOSw1MzMuNSA4NTkuNiw1MzIuN0M4NjEuMyw1MzIgODYzLjEsNTMxLjYgODY1LjIsNTMxLjZDODY5LjQsNTMxLjYgODcyLjYsNTMyLjYgODc0LjgsNTM0LjZMODgwLDUyOS40Qzg3Ni4xLDUyNi40IDg3MS4xLDUyNC44IDg2NS4yLDUyNC44Qzg2MS45LDUyNC44IDg1OC45LDUyNS4zIDg1Ni4yLDUyNi40Qzg1My41LDUyNy41IDg1MS4yLDUyOC45IDg0OS4zLDUzMC44Qzg0Ny40LDUzMi43IDg0NS45LDUzNSA4NDQuOSw1MzcuN0M4NDMuOSw1NDAuNCA4NDMuNCw1NDMuNCA4NDMuNCw1NDYuNkM4NDMuNCw1NDkuOCA4NDMuOSw1NTIuOCA4NDUsNTU1LjVDODQ2LjEsNTU4LjIgODQ3LjUsNTYwLjUgODQ5LjQsNTYyLjRDODUxLjMsNTY0LjMgODUzLjYsNTY1LjggODU2LjMsNTY2LjhDODU5LDU2Ny45IDg2Miw1NjguNCA4NjUuMiw1NjguNEM4NjguNCw1NjguNCA4NzEuMyw1NjcuOSA4NzMuOSw1NjYuOEM4NzYuNSw1NjUuNyA4NzguNyw1NjQuMyA4ODAuNSw1NjIuNEM4ODIuMyw1NjAuNSA4ODMuNyw1NTguMiA4ODQuNyw1NTUuNUM4ODUuNyw1NTIuOCA4ODYuMiw1NDkuOCA4ODYuMiw1NDYuNkw4ODYuMiw1NDUuM0M4ODUuOSw1NDUuMSA4ODUuOCw1NDQuNiA4ODUuOCw1NDQuMiIgc3R5bGU9ImZpbGw6cmdiKDI0LDI5LDMxKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgICAgICA8cGF0aCBkPSJNOTQ2LjgsNTQ0LjJMOTI3LjUsNTQ0LjJMOTI3LjUsNTUwLjlMOTM4LjUsNTUwLjlDOTM4LjIsNTU0LjMgOTM2LjksNTU2LjkgOTM0LjcsNTU5QzkzMi41LDU2MSA5MjkuNyw1NjIgOTI2LjEsNTYyQzkyNC4xLDU2MiA5MjIuMiw1NjEuNiA5MjAuNiw1NjAuOUM5MTguOSw1NjAuMiA5MTcuNSw1NTkuMiA5MTYuMyw1NTcuOEM5MTUuMSw1NTYuNSA5MTQuMiw1NTQuOSA5MTMuNSw1NTNDOTEyLjgsNTUxLjEgOTEyLjUsNTQ5LjEgOTEyLjUsNTQ2LjhDOTEyLjUsNTQ0LjUgOTEyLjgsNTQyLjUgOTEzLjUsNTQwLjZDOTE0LjEsNTM4LjcgOTE1LjEsNTM3LjIgOTE2LjMsNTM1LjhDOTE3LjUsNTM0LjUgOTE4LjksNTMzLjUgOTIwLjYsNTMyLjdDOTIyLjMsNTMyIDkyNC4xLDUzMS42IDkyNi4yLDUzMS42QzkzMC40LDUzMS42IDkzMy42LDUzMi42IDkzNS44LDUzNC42TDk0MSw1MjkuNEM5MzcuMSw1MjYuNCA5MzIuMSw1MjQuOCA5MjYuMiw1MjQuOEM5MjIuOSw1MjQuOCA5MTkuOSw1MjUuMyA5MTcuMiw1MjYuNEM5MTQuNSw1MjcuNSA5MTIuMiw1MjguOSA5MTAuMyw1MzAuOEM5MDguNCw1MzIuNyA5MDYuOSw1MzUgOTA1LjksNTM3LjdDOTA0LjksNTQwLjQgOTA0LjQsNTQzLjQgOTA0LjQsNTQ2LjZDOTA0LjQsNTQ5LjggOTA0LjksNTUyLjggOTA2LDU1NS41QzkwNy4xLDU1OC4yIDkwOC41LDU2MC41IDkxMC40LDU2Mi40QzkxMi4zLDU2NC4zIDkxNC42LDU2NS44IDkxNy4zLDU2Ni44QzkyMCw1NjcuOSA5MjMsNTY4LjQgOTI2LjIsNTY4LjRDOTI5LjQsNTY4LjQgOTMyLjMsNTY3LjkgOTM0LjksNTY2LjhDOTM3LjUsNTY1LjcgOTM5LjcsNTY0LjMgOTQxLjUsNTYyLjRDOTQzLjMsNTYwLjUgOTQ0LjcsNTU4LjIgOTQ1LjcsNTU1LjVDOTQ2LjcsNTUyLjggOTQ3LjIsNTQ5LjggOTQ3LjIsNTQ2LjZMOTQ3LjIsNTQ1LjNDOTQ2LjksNTQ1LjEgOTQ2LjgsNTQ0LjYgOTQ2LjgsNTQ0LjIiIHN0eWxlPSJmaWxsOnJnYigyNCwyOSwzMSk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=)',
			backgroundRepeat: 'no-repeat',
			backgroundSize: '170px 40px',
			display: 'block',
			height: '40px',
			width: '170px',
			opacity: '0.5',
		},
		'.ag-watermark-text': {
			opacity: '0.5',
			fontWeight: 'bold',
			fontFamily: 'Impact, sans-serif',
			fontSize: '19px',
			paddingLeft: '0.7rem',
		},
		'.ag-root-wrapper-body': {
			display: 'flex',
			flexDirection: 'row',
		},
		'.ag-root-wrapper-body.ag-layout-normal': {
			flex: '1 1 auto',
			height: '0',
			minHeight: '0',
		},
		'.ag-root': {
			position: 'relative',
			display: 'flex',
			flexDirection: 'column',
		},
		'.ag-root.ag-layout-normal, .ag-root.ag-layout-auto-height': {
			overflow: 'hidden',
			flex: '1 1 auto',
			width: '0',
		},
		'.ag-root.ag-layout-normal': {
			height: '100%',
		},
		'.ag-header-viewport, .ag-floating-top-viewport, .ag-body-viewport, .ag-center-cols-viewport, .ag-floating-bottom-viewport, .ag-body-horizontal-scroll-viewport, .ag-virtual-list-viewport, .ag-sticky-top-viewport':
			{
				position: 'relative',
				height: '100%',
				minWidth: '0px',
				overflow: 'hidden',
				flex: '1 1 auto',
			},
		'.ag-body-viewport': {
			display: 'flex',
		},
		'.ag-body-viewport.ag-layout-normal': {
			overflowY: 'auto',
			webkitOverflowScrolling: 'touch',
		},
		'.ag-center-cols-viewport': {
			width: '100%',
			overflowX: 'auto',
		},
		'.ag-body-horizontal-scroll-viewport': {
			overflowX: 'scroll',
		},
		'.ag-virtual-list-viewport': {
			overflow: 'auto',
			width: '100%',
		},
		'.ag-header-container, .ag-floating-top-container, .ag-body-container, .ag-pinned-right-cols-container, .ag-center-cols-container, .ag-pinned-left-cols-container, .ag-floating-bottom-container, .ag-body-horizontal-scroll-container, .ag-full-width-container, .ag-floating-bottom-full-width-container, .ag-virtual-list-container, .ag-sticky-top-container':
			{
				position: 'relative',
			},
		'.ag-header-container, .ag-floating-top-container, .ag-floating-bottom-container, .ag-sticky-top-container': {
			height: '100%',
			whiteSpace: 'nowrap',
		},
		'.ag-center-cols-container': {
			display: 'block',
		},
		'.ag-pinned-right-cols-container': {
			display: 'block',
		},
		'.ag-body-horizontal-scroll-container': {
			height: '100%',
		},
		'.ag-full-width-container, .ag-floating-top-full-width-container, .ag-floating-bottom-full-width-container, .ag-sticky-top-full-width-container':
			{
				position: 'absolute',
				top: '0px',
				left: '0px',
				pointerEvents: 'none',
			},
		'.ag-full-width-container': {
			width: '100%',
		},
		'.ag-floating-bottom-full-width-container, .ag-floating-top-full-width-container': {
			display: 'inline-block',
			overflow: 'hidden',
			height: '100%',
			width: '100%',
		},
		'.ag-virtual-list-container': {
			overflow: 'hidden',
		},
		'.ag-center-cols-clipper': {
			flex: '1 1 auto',
			minWidth: '0',
			overflow: 'hidden',
			minHeight: '100%',
			transform: 'translate3d(0, 0, 0)',
		},
		'.ag-body-horizontal-scroll': {
			minHeight: '0',
			minWidth: '0',
			width: '100%',
			display: 'flex',
			position: 'relative',
		},
		'.ag-body-horizontal-scroll.ag-scrollbar-invisible': {
			position: 'absolute',
			bottom: '0',
			left: '0',
			right: '0',
		},
		'.ag-body-horizontal-scroll.ag-scrollbar-invisible.ag-apple-scrollbar': {
			display: 'none',
		},
		'.ag-body-horizontal-scroll.ag-scrollbar-invisible.ag-apple-scrollbar.ag-scrollbar-scrolling, .ag-body-horizontal-scroll.ag-scrollbar-invisible.ag-apple-scrollbar.ag-scrollbar-active':
			{
				display: 'inherit',
			},
		'.ag-force-vertical-scroll': {
			overflowY: 'scroll !important',
		},
		'.ag-horizontal-left-spacer, .ag-horizontal-right-spacer': {
			height: '100%',
			minWidth: '0',
			overflowX: 'scroll',
		},
		'.ag-horizontal-left-spacer.ag-scroller-corner, .ag-horizontal-right-spacer.ag-scroller-corner': {
			overflowX: 'hidden',
		},
		'.ag-header, .ag-pinned-left-header, .ag-pinned-right-header': {
			display: 'inline-block',
			overflow: 'hidden',
			position: 'relative',
		},
		'.ag-header-cell-sortable': {
			cursor: 'pointer',
		},
		'.ag-header': {
			display: 'flex',
			width: '100%',
			whiteSpace: 'nowrap',
		},
		'.ag-pinned-left-header': {
			height: '100%',
		},
		'.ag-pinned-right-header': {
			height: '100%',
		},
		'.ag-header-row': {
			position: 'absolute',
			overflow: 'hidden',
		},
		'.ag-header-cell': {
			display: 'inline-flex',
			alignItems: 'center',
			position: 'absolute',
			height: '100%',
			overflow: 'hidden',
		},
		'.ag-header-cell.ag-header-active .ag-header-cell-menu-button': {
			opacity: '1',
		},
		'.ag-header-cell-menu-button:not(.ag-header-menu-always-show)': {
			transition: 'opacity 0.2s',
			opacity: '0',
		},
		'.ag-header-group-cell-label, .ag-header-cell-label': {
			display: 'flex',
			flex: '1 1 auto',
			overflow: 'hidden',
			alignItems: 'center',
			textOverflow: 'ellipsis',
			alignSelf: 'stretch',
		},
		'.ag-header-cell-text': {
			overflow: 'hidden',
			textOverflow: 'ellipsis',
		},
		'.ag-header-cell:not(.ag-header-cell-auto-height) .ag-header-cell-comp-wrapper': {
			height: '100%',
			display: 'flex',
			alignItems: 'center',
		},
		'.ag-header-cell-comp-wrapper': {
			width: '100%',
			overflow: 'hidden',
		},
		'.ag-header-cell-wrap-text .ag-header-cell-comp-wrapper': {
			whiteSpace: 'normal',
		},
		'.ag-right-aligned-header .ag-header-cell-label': {
			flexDirection: 'row-reverse',
		},
		'.ag-header-group-text': {
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
		},
		'.ag-header-cell-resize': {
			position: 'absolute',
			zIndex: '2',
			height: '100%',
			width: '8px',
			top: '0',
			cursor: 'ew-resize',
		},
		'.ag-ltr .ag-header-cell-resize': {
			right: '-4px',
		},
		'.ag-rtl .ag-header-cell-resize': {
			left: '-4px',
		},
		'.ag-pinned-left-header .ag-header-cell-resize': {
			right: '-4px',
		},
		'.ag-pinned-right-header .ag-header-cell-resize': {
			left: '-4px',
		},
		'.ag-header-select-all': {
			display: 'flex',
		},
		'.ag-column-moving .ag-cell': {
			transition: 'left 0.2s',
		},
		'.ag-column-moving .ag-header-cell': {
			transition: 'left 0.2s',
		},
		'.ag-column-moving .ag-header-group-cell': {
			transition: 'left 0.2s, width 0.2s',
		},
		'.ag-column-panel': {
			display: 'flex',
			flexDirection: 'column',
			overflow: 'hidden',
			flex: '1 1 auto',
		},
		'.ag-column-select': {
			position: 'relative',
			display: 'flex',
			flexDirection: 'column',
			overflow: 'hidden',
			flex: '3 1 0px',
		},
		'.ag-column-select-header': {
			position: 'relative',
			display: 'flex',
			flex: 'none',
		},
		'.ag-column-select-header-icon': {
			position: 'relative',
		},
		'.ag-column-select-header-filter-wrapper': {
			flex: '1 1 auto',
		},
		'.ag-column-select-header-filter': {
			width: '100%',
		},
		'.ag-column-select-list': {
			flex: '1 1 0px',
			overflow: 'hidden',
		},
		'.ag-column-drop': {
			position: 'relative',
			display: 'inline-flex',
			alignItems: 'center',
			overflow: 'auto',
			width: '100%',
		},
		'.ag-column-drop-list': {
			display: 'flex',
			alignItems: 'center',
		},
		'.ag-column-drop-cell': {
			position: 'relative',
			display: 'flex',
			alignItems: 'center',
		},
		'.ag-column-drop-cell-text': {
			overflow: 'hidden',
			flex: '1 1 auto',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
		},
		'.ag-column-drop-vertical': {
			display: 'flex',
			flexDirection: 'column',
			overflow: 'hidden',
			alignItems: 'stretch',
			flex: '1 1 0px',
		},
		'.ag-column-drop-vertical-title-bar': {
			display: 'flex',
			alignItems: 'center',
			flex: 'none',
		},
		'.ag-column-drop-vertical-list': {
			position: 'relative',
			alignItems: 'stretch',
			flexGrow: '1',
			flexDirection: 'column',
			overflowX: 'auto',
		},
		'.ag-column-drop-vertical-list > *': {
			flex: 'none',
		},
		'.ag-column-drop-empty .ag-column-drop-vertical-list': {
			overflow: 'hidden',
		},
		'.ag-column-drop-vertical-empty-message': {
			display: 'block',
		},
		'.ag-column-drop.ag-column-drop-horizontal': {
			whiteSpace: 'nowrap',
			overflow: 'hidden',
		},
		'.ag-column-drop-cell-button': {
			cursor: 'pointer',
		},
		'.ag-filter-toolpanel': {
			flex: '1 1 0px',
			minWidth: '0',
		},
		'.ag-filter-toolpanel-header': {
			position: 'relative',
		},
		'.ag-filter-toolpanel-header, .ag-filter-toolpanel-search': {
			display: 'flex',
			alignItems: 'center',
		},
		'.ag-filter-toolpanel-header > *, .ag-filter-toolpanel-search > *': {
			display: 'flex',
			alignItems: 'center',
		},
		'.ag-filter-apply-panel': {
			display: 'flex',
			justifyContent: 'flex-end',
			overflow: 'hidden',
		},
		'.ag-row-animation .ag-row': {
			transition: 'transform 0.4s, top 0.4s, background-color 0.1s, opacity 0.2s',
		},
		'.ag-row-animation .ag-row.ag-after-created': {
			transition: 'transform 0.4s, top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s',
		},
		'.ag-row-no-animation .ag-row': {
			transition: 'background-color 0.1s',
		},
		'.ag-row': {
			whiteSpace: 'nowrap',
			width: '100%',
		},
		'.ag-row-loading': {
			display: 'flex',
			alignItems: 'center',
		},
		'.ag-row-position-absolute': {
			position: 'absolute',
		},
		'.ag-row-position-relative': {
			position: 'relative',
		},
		'.ag-full-width-row': {
			overflow: 'hidden',
			pointerEvents: 'all',
		},
		'.ag-row-inline-editing': {
			zIndex: '1',
		},
		'.ag-row-dragging': {
			zIndex: '2',
		},
		'.ag-stub-cell': {
			display: 'flex',
			alignItems: 'center',
		},
		'.ag-cell': {
			display: 'inline-block',
			position: 'absolute',
			whiteSpace: 'nowrap',
			height: '100%',
		},
		'.ag-cell-value': {
			flex: '1 1 auto',
		},
		'.ag-cell-value, .ag-group-value': {
			overflow: 'hidden',
			textOverflow: 'ellipsis',
		},
		'.ag-cell-wrap-text': {
			whiteSpace: 'normal',
			wordBreak: 'break-all',
		},
		'.ag-cell-wrapper': {
			display: 'flex',
			alignItems: 'center',
		},
		'.ag-cell-wrapper.ag-row-group': {
			alignItems: 'flex-start',
		},
		'.ag-sparkline-wrapper': {
			position: 'absolute',
			height: '100%',
			width: '100%',
			left: '0',
			top: '0',
		},
		'.ag-full-width-row .ag-cell-wrapper.ag-row-group': {
			height: '100%',
			alignItems: 'center',
		},
		'.ag-cell-inline-editing': {
			zIndex: '1',
		},
		'.ag-cell-inline-editing .ag-cell-wrapper, .ag-cell-inline-editing .ag-cell-edit-wrapper, .ag-cell-inline-editing .ag-cell-editor, .ag-cell-inline-editing .ag-cell-editor .ag-wrapper, .ag-cell-inline-editing .ag-cell-editor input':
			{
				height: '100%',
				width: '100%',
				lineHeight: 'normal',
			},
		'.ag-cell .ag-icon': {
			display: 'inline-block',
			verticalAlign: 'middle',
		},
		'.ag-set-filter-item': {
			display: 'flex',
			alignItems: 'center',
			height: '100%',
		},
		'.ag-set-filter-item-value': {
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
		},
		'.ag-set-filter-item-checkbox': {
			display: 'flex',
		},
		'.ag-filter-body-wrapper': {
			display: 'flex',
			flexDirection: 'column',
		},
		'.ag-filter-filter': {
			flex: '1 1 0px',
		},
		'.ag-filter-condition': {
			display: 'flex',
			justifyContent: 'center',
		},
		'.ag-floating-filter-body': {
			position: 'relative',
			display: 'flex',
			flex: '1 1 auto',
			height: '100%',
		},
		'.ag-floating-filter-full-body': {
			display: 'flex',
			flex: '1 1 auto',
			height: '100%',
			width: '100%',
			alignItems: 'center',
			overflow: 'hidden',
		},
		'.ag-floating-filter-full-body > div': {
			flex: '1 1 auto',
		},
		'.ag-floating-filter-input': {
			alignItems: 'center',
			display: 'flex',
			width: '100%',
		},
		'.ag-floating-filter-input > *': {
			flex: '1 1 auto',
		},
		'.ag-floating-filter-button': {
			display: 'flex',
			flex: 'none',
		},
		'.ag-dnd-ghost': {
			position: 'absolute',
			display: 'inline-flex',
			alignItems: 'center',
			cursor: 'move',
			whiteSpace: 'nowrap',
			zIndex: '9999',
		},
		'.ag-overlay': {
			height: '100%',
			left: '0',
			pointerEvents: 'none',
			position: 'absolute',
			top: '0',
			width: '100%',
		},
		'.ag-overlay-panel': {
			display: 'flex',
			height: '100%',
			width: '100%',
		},
		'.ag-overlay-wrapper': {
			display: 'flex',
			flex: 'none',
			width: '100%',
			height: '100%',
			alignItems: 'center',
			justifyContent: 'center',
			textAlign: 'center',
		},
		'.ag-overlay-loading-wrapper': {
			pointerEvents: 'all',
		},
		'.ag-popup-child': {
			zIndex: '5',
			top: '0',
		},
		'.ag-popup-editor': {
			position: 'absolute',
			webkitUserSelect: 'none',
			mozUserSelect: 'none',
			userSelect: 'none',
			zIndex: '1',
		},
		'.ag-large-text-input': {
			display: 'block',
		},
		'.ag-virtual-list-item': {
			position: 'absolute',
			width: '100%',
		},
		'.ag-floating-top': {
			overflow: 'hidden',
			whiteSpace: 'nowrap',
			width: '100%',
			position: 'relative',
			display: 'flex',
		},
		'.ag-pinned-left-floating-top': {
			display: 'inline-block',
			overflow: 'hidden',
			position: 'relative',
			minWidth: '0px',
		},
		'.ag-pinned-right-floating-top': {
			display: 'inline-block',
			overflow: 'hidden',
			position: 'relative',
			minWidth: '0px',
		},
		'.ag-floating-bottom': {
			overflow: 'hidden',
			whiteSpace: 'nowrap',
			width: '100%',
			position: 'relative',
			display: 'flex',
		},
		'.ag-pinned-left-floating-bottom': {
			display: 'inline-block',
			overflow: 'hidden',
			position: 'relative',
			minWidth: '0px',
		},
		'.ag-pinned-right-floating-bottom': {
			display: 'inline-block',
			overflow: 'hidden',
			position: 'relative',
			minWidth: '0px',
		},
		'.ag-sticky-top': {
			position: 'absolute',
			display: 'flex',
			width: '100%',
		},
		'.ag-pinned-left-sticky-top, .ag-pinned-right-sticky-top': {
			position: 'relative',
			height: '100%',
			overflow: 'hidden',
		},
		'.ag-sticky-top-full-width-container': {
			overflow: 'hidden',
			width: '100%',
			height: '100%',
		},
		'.ag-dialog, .ag-panel': {
			display: 'flex',
			flexDirection: 'column',
			position: 'relative',
			overflow: 'hidden',
		},
		'.ag-panel-title-bar': {
			display: 'flex',
			flex: 'none',
			alignItems: 'center',
			cursor: 'default',
		},
		'.ag-panel-title-bar-title': {
			flex: '1 1 auto',
		},
		'.ag-panel-title-bar-buttons': {
			display: 'flex',
		},
		'.ag-panel-title-bar-button': {
			cursor: 'pointer',
		},
		'.ag-panel-content-wrapper': {
			display: 'flex',
			flex: '1 1 auto',
			position: 'relative',
			overflow: 'hidden',
		},
		'.ag-dialog': {
			position: 'absolute',
		},
		'.ag-resizer': {
			position: 'absolute',
			pointerEvents: 'none',
			webkitUserSelect: 'none',
			mozUserSelect: 'none',
			userSelect: 'none',
			zIndex: '1',
		},
		'.ag-resizer.ag-resizer-topLeft': {
			top: '0',
			left: '0',
			height: '5px',
			width: '5px',
			cursor: 'nwse-resize',
		},
		'.ag-resizer.ag-resizer-top': {
			top: '0',
			left: '5px',
			right: '5px',
			height: '5px',
			cursor: 'ns-resize',
		},
		'.ag-resizer.ag-resizer-topRight': {
			top: '0',
			right: '0',
			height: '5px',
			width: '5px',
			cursor: 'nesw-resize',
		},
		'.ag-resizer.ag-resizer-right': {
			top: '5px',
			right: '0',
			bottom: '5px',
			width: '5px',
			cursor: 'ew-resize',
		},
		'.ag-resizer.ag-resizer-bottomRight': {
			bottom: '0',
			right: '0',
			height: '5px',
			width: '5px',
			cursor: 'nwse-resize',
		},
		'.ag-resizer.ag-resizer-bottom': {
			bottom: '0',
			left: '5px',
			right: '5px',
			height: '5px',
			cursor: 'ns-resize',
		},
		'.ag-resizer.ag-resizer-bottomLeft': {
			bottom: '0',
			left: '0',
			height: '5px',
			width: '5px',
			cursor: 'nesw-resize',
		},
		'.ag-resizer.ag-resizer-left': {
			left: '0',
			top: '5px',
			bottom: '5px',
			width: '5px',
			cursor: 'ew-resize',
		},
		'.ag-tooltip': {
			position: 'absolute',
			pointerEvents: 'none',
			zIndex: '99999',
		},
		'.ag-tooltip-custom': {
			position: 'absolute',
			pointerEvents: 'none',
			zIndex: '99999',
		},
		'.ag-value-slide-out': {
			marginRight: '5px',
			opacity: '1',
			transition: 'opacity 3s, margin-right 3s',
			transitionTimingFunction: 'linear',
		},
		'.ag-value-slide-out-end': {
			marginRight: '10px',
			opacity: '0',
		},
		'.ag-opacity-zero': {
			opacity: '0 !important',
		},
		'.ag-menu': {
			maxHeight: '100%',
			overflowY: 'auto',
			position: 'absolute',
			webkitUserSelect: 'none',
			mozUserSelect: 'none',
			userSelect: 'none',
		},
		'.ag-menu-column-select-wrapper': {
			height: '265px',
			overflow: 'auto',
		},
		'.ag-menu-column-select-wrapper .ag-column-select': {
			height: '100%',
		},
		'.ag-menu-list': {
			display: 'table',
			width: '100%',
		},
		'.ag-menu-option, .ag-menu-separator': {
			display: 'table-row',
		},
		'.ag-menu-option-part, .ag-menu-separator-part': {
			display: 'table-cell',
			verticalAlign: 'middle',
		},
		'.ag-menu-option-text': {
			whiteSpace: 'nowrap',
		},
		'.ag-compact-menu-option': {
			width: '100%',
			display: 'flex',
			flexWrap: 'nowrap',
		},
		'.ag-compact-menu-option-text': {
			whiteSpace: 'nowrap',
			flex: '1 1 auto',
		},
		'.ag-rich-select': {
			cursor: 'default',
			outline: 'none',
		},
		'.ag-rich-select-value': {
			display: 'flex',
			alignItems: 'center',
		},
		'.ag-rich-select-value-icon': {
			flex: '1 1 auto',
			order: '1',
		},
		'.ag-ltr .ag-rich-select-value-icon': {
			textAlign: 'right',
		},
		'.ag-rtl .ag-rich-select-value-icon': {
			textAlign: 'left',
		},
		'.ag-rich-select-list': {
			position: 'relative',
		},
		'.ag-rich-select-virtual-list-item': {
			display: 'flex',
		},
		'.ag-rich-select-row': {
			display: 'flex',
			flex: '1 1 auto',
			alignItems: 'center',
			whiteSpace: 'nowrap',
		},
		'.ag-paging-panel': {
			alignItems: 'center',
			display: 'flex',
			justifyContent: 'flex-end',
		},
		'.ag-paging-page-summary-panel': {
			display: 'flex',
			alignItems: 'center',
		},
		'.ag-paging-button': {
			position: 'relative',
		},
		'.ag-disabled .ag-paging-page-summary-panel': {
			pointerEvents: 'none',
		},
		'.ag-tool-panel-wrapper': {
			display: 'flex',
			overflowY: 'auto',
			overflowX: 'hidden',
			cursor: 'default',
			webkitUserSelect: 'none',
			mozUserSelect: 'none',
			userSelect: 'none',
		},
		'.ag-column-select-column, .ag-column-select-column-group, .ag-select-agg-func-item': {
			position: 'relative',
			alignItems: 'center',
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'nowrap',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
			height: '100%',
		},
		'.ag-column-select-column > *, .ag-column-select-column-group > *, .ag-select-agg-func-item > *': {
			flex: 'none',
		},
		'.ag-column-select-checkbox': {
			display: 'flex',
		},
		'.ag-tool-panel-horizontal-resize': {
			cursor: 'ew-resize',
			height: '100%',
			position: 'absolute',
			top: '0',
			width: '5px',
			zIndex: '1',
		},
		'.ag-ltr .ag-side-bar-left .ag-tool-panel-horizontal-resize': {
			right: '-3px',
		},
		'.ag-rtl .ag-side-bar-left .ag-tool-panel-horizontal-resize': {
			left: '-3px',
		},
		'.ag-ltr .ag-side-bar-right .ag-tool-panel-horizontal-resize': {
			left: '-3px',
		},
		'.ag-rtl .ag-side-bar-right .ag-tool-panel-horizontal-resize': {
			right: '-3px',
		},
		'.ag-details-row': {
			width: '100%',
		},
		'.ag-details-row-fixed-height': {
			height: '100%',
		},
		'.ag-details-grid': {
			width: '100%',
		},
		'.ag-details-grid-fixed-height': {
			height: '100%',
		},
		'.ag-header-group-cell': {
			display: 'flex',
			alignItems: 'center',
			height: '100%',
			position: 'absolute',
		},
		'.ag-cell-label-container': {
			display: 'flex',
			justifyContent: 'space-between',
			flexDirection: 'row-reverse',
			alignItems: 'center',
			height: '100%',
			width: '100%',
			overflow: 'hidden',
			padding: '5px 0px',
		},
		'.ag-right-aligned-header .ag-cell-label-container': {
			flexDirection: 'row',
		},
		'.ag-side-bar': {
			display: 'flex',
			flexDirection: 'row-reverse',
		},
		'.ag-side-bar-left': {
			order: '-1',
			flexDirection: 'row',
		},
		'.ag-side-button-button': {
			position: 'relative',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			flexWrap: 'nowrap',
			whiteSpace: 'nowrap',
			outline: 'none',
			cursor: 'pointer',
		},
		'.ag-side-button-label': {
			writingMode: 'vertical-lr',
		},
		'.ag-status-bar': {
			display: 'flex',
			justifyContent: 'space-between',
			overflow: 'hidden',
		},
		'.ag-status-panel': {
			display: 'inline-flex',
		},
		'.ag-status-name-value': {
			whiteSpace: 'nowrap',
		},
		'.ag-status-bar-left': {
			display: 'inline-flex',
		},
		'.ag-status-bar-center': {
			display: 'inline-flex',
		},
		'.ag-status-bar-right': {
			display: 'inline-flex',
		},
		'.ag-icon': {
			display: 'block',
			speak: 'none',
		},
		'.ag-group': {
			position: 'relative',
			width: '100%',
		},
		'.ag-group-title-bar': {
			display: 'flex',
			alignItems: 'center',
		},
		'.ag-group-title': {
			display: 'block',
			flex: '1 1 auto',
			minWidth: '0',
			overflow: 'hidden',
			whiteSpace: 'nowrap',
			textOverflow: 'ellipsis',
		},
		'.ag-group-title-bar .ag-group-title': {
			cursor: 'default',
		},
		'.ag-group-toolbar': {
			display: 'flex',
			alignItems: 'center',
		},
		'.ag-group-container': {
			display: 'flex',
		},
		'.ag-disabled .ag-group-container': {
			pointerEvents: 'none',
		},
		'.ag-group-container-horizontal': {
			flexDirection: 'row',
			flexWrap: 'wrap',
		},
		'.ag-group-container-vertical': {
			flexDirection: 'column',
		},
		'.ag-column-group-icons': {
			display: 'block',
		},
		'.ag-column-group-icons > *': {
			cursor: 'pointer',
		},
		'.ag-group-item-alignment-stretch .ag-group-item': {
			alignItems: 'stretch',
		},
		'.ag-group-item-alignment-start .ag-group-item': {
			alignItems: 'flex-start',
		},
		'.ag-group-item-alignment-end .ag-group-item': {
			alignItems: 'flex-end',
		},
		'.ag-toggle-button-icon': {
			transition: 'right 0.3s',
			position: 'absolute',
			top: '-1px',
		},
		'.ag-input-field, .ag-select': {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
		},
		'.ag-input-field-input': {
			flex: '1 1 auto',
			width: '100%',
			minWidth: '0',
		},
		'.ag-floating-filter-input .ag-input-field-input[type=date]': {
			width: '1px',
		},
		'.ag-range-field': {
			display: 'flex',
			alignItems: 'center',
		},
		'.ag-angle-select': {
			display: 'flex',
			alignItems: 'center',
		},
		'.ag-angle-select-wrapper': {
			display: 'flex',
		},
		'.ag-angle-select-parent-circle': {
			display: 'block',
			position: 'relative',
		},
		'.ag-angle-select-child-circle': {
			position: 'absolute',
		},
		'.ag-slider-wrapper': {
			display: 'flex',
		},
		'.ag-slider-wrapper .ag-input-field': {
			flex: '1 1 auto',
		},
		'.ag-picker-field-display': {
			flex: '1 1 auto',
		},
		'.ag-picker-field': {
			display: 'flex',
			alignItems: 'center',
		},
		'.ag-picker-field-icon': {
			display: 'flex',
			border: '0',
			padding: '0',
			margin: '0',
			cursor: 'pointer',
		},
		'.ag-picker-field-wrapper': {
			overflow: 'hidden',
		},
		'.ag-label-align-right .ag-label': {
			order: '1',
		},
		'.ag-label-align-right > *': {
			flex: 'none',
		},
		'.ag-label-align-top': {
			flexDirection: 'column',
			alignItems: 'flex-start',
		},
		'.ag-label-align-top > *': {
			alignSelf: 'stretch',
		},
		'.ag-color-panel': {
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			textAlign: 'center',
		},
		'.ag-spectrum-color': {
			flex: '1 1 auto',
			position: 'relative',
			overflow: 'hidden',
			cursor: 'default',
		},
		'.ag-spectrum-fill': {
			position: 'absolute',
			top: '0',
			left: '0',
			right: '0',
			bottom: '0',
		},
		'.ag-spectrum-val': {
			cursor: 'pointer',
		},
		'.ag-spectrum-dragger': {
			position: 'absolute',
			pointerEvents: 'none',
			cursor: 'pointer',
		},
		'.ag-spectrum-hue': {
			cursor: 'default',
			background:
				'linear-gradient(to left, #ff0000 3%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)',
		},
		'.ag-spectrum-alpha': {
			cursor: 'default',
		},
		'.ag-spectrum-hue-background': {
			width: '100%',
			height: '100%',
		},
		'.ag-spectrum-alpha-background': {
			backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgb(0, 0, 0))',
			width: '100%',
			height: '100%',
		},
		'.ag-spectrum-tool': {
			cursor: 'pointer',
		},
		'.ag-spectrum-slider': {
			position: 'absolute',
			pointerEvents: 'none',
		},
		'.ag-recent-colors': {
			display: 'flex',
		},
		'.ag-recent-color': {
			cursor: 'pointer',
		},
		'.ag-ltr .ag-column-select-indent-1': {
			paddingLeft: '20px',
		},
		'.ag-rtl .ag-column-select-indent-1': {
			paddingRight: '20px',
		},
		'.ag-ltr .ag-row-group-indent-1': {
			paddingLeft: '20px',
		},
		'.ag-rtl .ag-row-group-indent-1': {
			paddingRight: '20px',
		},
		'.ag-ltr .ag-column-select-indent-2': {
			paddingLeft: '40px',
		},
		'.ag-rtl .ag-column-select-indent-2': {
			paddingRight: '40px',
		},
		'.ag-ltr .ag-row-group-indent-2': {
			paddingLeft: '40px',
		},
		'.ag-rtl .ag-row-group-indent-2': {
			paddingRight: '40px',
		},
		'.ag-ltr .ag-column-select-indent-3': {
			paddingLeft: '60px',
		},
		'.ag-rtl .ag-column-select-indent-3': {
			paddingRight: '60px',
		},
		'.ag-ltr .ag-row-group-indent-3': {
			paddingLeft: '60px',
		},
		'.ag-rtl .ag-row-group-indent-3': {
			paddingRight: '60px',
		},
		'.ag-ltr .ag-column-select-indent-4': {
			paddingLeft: '80px',
		},
		'.ag-rtl .ag-column-select-indent-4': {
			paddingRight: '80px',
		},
		'.ag-ltr .ag-row-group-indent-4': {
			paddingLeft: '80px',
		},
		'.ag-rtl .ag-row-group-indent-4': {
			paddingRight: '80px',
		},
		'.ag-ltr .ag-column-select-indent-5': {
			paddingLeft: '100px',
		},
		'.ag-rtl .ag-column-select-indent-5': {
			paddingRight: '100px',
		},
		'.ag-ltr .ag-row-group-indent-5': {
			paddingLeft: '100px',
		},
		'.ag-rtl .ag-row-group-indent-5': {
			paddingRight: '100px',
		},
		'.ag-ltr .ag-column-select-indent-6': {
			paddingLeft: '120px',
		},
		'.ag-rtl .ag-column-select-indent-6': {
			paddingRight: '120px',
		},
		'.ag-ltr .ag-row-group-indent-6': {
			paddingLeft: '120px',
		},
		'.ag-rtl .ag-row-group-indent-6': {
			paddingRight: '120px',
		},
		'.ag-ltr .ag-column-select-indent-7': {
			paddingLeft: '140px',
		},
		'.ag-rtl .ag-column-select-indent-7': {
			paddingRight: '140px',
		},
		'.ag-ltr .ag-row-group-indent-7': {
			paddingLeft: '140px',
		},
		'.ag-rtl .ag-row-group-indent-7': {
			paddingRight: '140px',
		},
		'.ag-ltr .ag-column-select-indent-8': {
			paddingLeft: '160px',
		},
		'.ag-rtl .ag-column-select-indent-8': {
			paddingRight: '160px',
		},
		'.ag-ltr .ag-row-group-indent-8': {
			paddingLeft: '160px',
		},
		'.ag-rtl .ag-row-group-indent-8': {
			paddingRight: '160px',
		},
		'.ag-ltr .ag-column-select-indent-9': {
			paddingLeft: '180px',
		},
		'.ag-rtl .ag-column-select-indent-9': {
			paddingRight: '180px',
		},
		'.ag-ltr .ag-row-group-indent-9': {
			paddingLeft: '180px',
		},
		'.ag-rtl .ag-row-group-indent-9': {
			paddingRight: '180px',
		},
		'.ag-ltr': {
			direction: 'ltr',
		},
		'.ag-ltr .ag-body, .ag-ltr .ag-floating-top, .ag-ltr .ag-floating-bottom, .ag-ltr .ag-header, .ag-ltr .ag-body-viewport, .ag-ltr .ag-body-horizontal-scroll':
			{
				flexDirection: 'row',
			},
		'.ag-rtl': {
			direction: 'rtl',
		},
		'.ag-rtl .ag-body, .ag-rtl .ag-floating-top, .ag-rtl .ag-floating-bottom, .ag-rtl .ag-header, .ag-rtl .ag-body-viewport, .ag-rtl .ag-body-horizontal-scroll':
			{
				flexDirection: 'row-reverse',
			},
		'.ag-rtl .ag-icon-contracted, .ag-rtl .ag-icon-expanded, .ag-rtl .ag-icon-tree-closed': {
			display: 'block',
			transform: 'rotate(180deg)',
		},
		'.ag-layout-print.ag-body-viewport': {
			flex: 'none',
		},
		'.ag-layout-print.ag-root-wrapper': {
			display: 'inline-flex',
		},
		'.ag-layout-print .ag-center-cols-clipper': {
			minWidth: '100%',
		},
		'.ag-layout-print .ag-body-horizontal-scroll': {
			display: 'none',
		},
		'.ag-layout-print.ag-force-vertical-scroll': {
			overflowY: 'visible !important',
		},
		'@media print': {
			'.ag-root-wrapper.ag-layout-print': {
				display: 'table',
			},
			'.ag-root-wrapper.ag-layout-print .ag-root-wrapper-body, .ag-root-wrapper.ag-layout-print .ag-root, .ag-root-wrapper.ag-layout-print .ag-body-viewport, .ag-root-wrapper.ag-layout-print .ag-center-cols-container, .ag-root-wrapper.ag-layout-print .ag-center-cols-viewport, .ag-root-wrapper.ag-layout-print .ag-center-cols-clipper, .ag-root-wrapper.ag-layout-print .ag-body-horizontal-scroll-viewport, .ag-root-wrapper.ag-layout-print .ag-virtual-list-viewport':
				{
					height: 'auto !important',
					overflow: 'hidden !important',
					display: 'block !important',
				},
			'.ag-root-wrapper.ag-layout-print .ag-row, .ag-root-wrapper.ag-layout-print .ag-cell': {
				mozColumnBreakInside: 'avoid',
				breakInside: 'avoid',
			},
		},
		'.ag-body .ag-body-viewport': {
			webkitOverflowScrolling: 'touch',
		},
		'.ag-chart': {
			position: 'relative',
			display: 'flex',
			overflow: 'hidden',
			width: '100%',
			height: '100%',
		},
		'.ag-chart-components-wrapper': {
			position: 'relative',
			display: 'flex',
			flex: '1 1 auto',
			overflow: 'hidden',
		},
		'.ag-chart-title-edit': {
			position: 'absolute',
			display: 'none',
			top: '0',
			left: '0',
			textAlign: 'center',
		},
		'.ag-chart-title-edit.currently-editing': {
			display: 'inline-block',
		},
		'.ag-chart-canvas-wrapper': {
			position: 'relative',
			flex: '1 1 auto',
			overflow: 'hidden',
		},
		'.ag-charts-canvas': {
			display: 'block',
		},
		'.ag-chart-menu': {
			position: 'absolute',
			top: '10px',
			width: '24px',
			overflow: 'hidden',
			display: 'flex',
			flexDirection: 'column',
		},
		'.ag-ltr .ag-chart-menu': {
			right: '20px',
		},
		'.ag-rtl .ag-chart-menu': {
			left: '20px',
		},
		'.ag-chart-docked-container': {
			position: 'relative',
			width: '0',
			minWidth: '0',
			transition: 'min-width 0.4s',
		},
		'.ag-chart-menu-hidden ~ .ag-chart-docked-container': {
			maxWidth: '0',
			overflow: 'hidden',
		},
		'.ag-chart-tabbed-menu': {
			width: '100%',
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			overflow: 'hidden',
		},
		'.ag-chart-tabbed-menu-header': {
			flex: 'none',
			webkitUserSelect: 'none',
			mozUserSelect: 'none',
			userSelect: 'none',
			cursor: 'default',
		},
		'.ag-chart-tabbed-menu-body': {
			display: 'flex',
			flex: '1 1 auto',
			alignItems: 'stretch',
			overflow: 'hidden',
		},
		'.ag-chart-tab': {
			width: '100%',
			overflow: 'hidden',
			overflowY: 'auto',
		},
		'.ag-chart-settings': {
			overflowX: 'hidden',
		},
		'.ag-chart-settings-wrapper': {
			position: 'relative',
			flexDirection: 'column',
			width: '100%',
			height: '100%',
			display: 'flex',
			overflow: 'hidden',
		},
		'.ag-chart-settings-nav-bar': {
			display: 'flex',
			alignItems: 'center',
			width: '100%',
			height: '30px',
			padding: '0 10px',
			webkitUserSelect: 'none',
			mozUserSelect: 'none',
			userSelect: 'none',
		},
		'.ag-chart-settings-card-selector': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-around',
			flex: '1 1 auto',
			height: '100%',
			padding: '0 10px',
		},
		'.ag-chart-settings-card-item': {
			cursor: 'pointer',
			width: '10px',
			height: '10px',
			backgroundColor: '#000',
			position: 'relative',
		},
		'.ag-chart-settings-card-item.ag-not-selected': {
			opacity: '0.2',
		},
		'.ag-chart-settings-card-item::before': {
			content: ' ',
			display: 'block',
			position: 'absolute',
			backgroundColor: 'transparent',
			left: '50%',
			top: '50%',
			marginLeft: '-10px',
			marginTop: '-10px',
			width: '20px',
			height: '20px',
		},
		'.ag-chart-settings-prev, .ag-chart-settings-next': {
			position: 'relative',
			flex: 'none',
		},
		'.ag-chart-settings-prev-button, .ag-chart-settings-next-button': {
			position: 'absolute',
			top: '0',
			left: '0',
			width: '100%',
			height: '100%',
			cursor: 'pointer',
			opacity: '0',
		},
		'.ag-chart-settings-mini-charts-container': {
			position: 'relative',
			flex: '1 1 auto',
			overflowX: 'hidden',
			overflowY: 'auto',
		},
		'.ag-chart-settings-mini-wrapper': {
			position: 'absolute',
			top: '0',
			left: '0',
			display: 'flex',
			flexDirection: 'column',
			width: '100%',
			minHeight: '100%',
			overflow: 'hidden',
		},
		'.ag-chart-settings-mini-wrapper.ag-animating': {
			transition: 'left 0.3s',
			transitionTimingFunction: 'ease-in-out',
		},
		'.ag-chart-mini-thumbnail': {
			cursor: 'pointer',
		},
		'.ag-chart-mini-thumbnail-canvas': {
			display: 'block',
		},
		'.ag-chart-data-wrapper, .ag-chart-format-wrapper': {
			display: 'flex',
			flexDirection: 'column',
			position: 'relative',
			webkitUserSelect: 'none',
			mozUserSelect: 'none',
			userSelect: 'none',
		},
		'.ag-chart-data-wrapper': {
			height: '100%',
			overflowY: 'auto',
		},
		'.ag-chart-data-section, .ag-chart-format-section': {
			display: 'flex',
			margin: '0',
		},
		'.ag-chart-empty-text': {
			display: 'flex',
			top: '0',
			width: '100%',
			height: '100%',
			alignItems: 'center',
			justifyContent: 'center',
		},
		'.ag-chart-menu-hidden:hover .ag-chart-menu': {
			display: 'block',
		},
		'.ag-chart-menu-close': {
			display: 'none',
		},
		'.ag-chart .ag-chart-tool-panel-button-enable .ag-chart-menu': {
			display: 'flex',
			flexDirection: 'row',
			overflow: 'auto',
			top: '5px',
			gap: '7px',
			width: 'auto',
		},
		'.ag-ltr .ag-chart .ag-chart-tool-panel-button-enable .ag-chart-menu': {
			right: '10px',
			justifyContent: 'right',
		},
		'.ag-rtl .ag-chart .ag-chart-tool-panel-button-enable .ag-chart-menu': {
			left: '10px',
			justifyContent: 'left',
		},
		'.ag-chart-tool-panel-button-enable .ag-chart-menu-close': {
			position: 'absolute',
			top: '45%',
			padding: '0',
			display: 'block',
			cursor: 'pointer',
			border: 'none',
		},
		'.ag-ltr .ag-chart-tool-panel-button-enable .ag-chart-menu-close': {
			right: '0px',
		},
		'.ag-rtl .ag-chart-tool-panel-button-enable .ag-chart-menu-close': {
			left: '0px',
		},
		'.ag-chart-tool-panel-button-enable .ag-chart-menu-close .ag-icon': {
			padding: '9px 0 9px 0',
		},
		'.ag-chart-tool-panel-button-enable .ag-icon-menu': {
			display: 'none',
		},
		'.ag-charts-font-size-color': {
			display: 'flex',
			alignSelf: 'stretch',
			justifyContent: 'space-between',
		},
		'.ag-charts-data-group-item': {
			position: 'relative',
		},
		'.ag-date-time-list-page-title-bar': {
			display: 'flex',
		},
		'.ag-date-time-list-page-column-labels-row, .ag-date-time-list-page-entries-row': {
			display: 'flex',
		},
		'.ag-date-time-list-page-column-label, .ag-date-time-list-page-entry': {
			flexBasis: '0',
			flexGrow: '1',
		},
		'.ag-date-time-list-page-entry': {
			cursor: 'pointer',
		},
		'.ag-theme-alpine': {
			webkitFontSmoothing: 'antialiased',
			color: 'var(--ag-foreground-color, #181d1f)',
			fallbacks: [
				{
					color: '#181d1f',
				},
			],
			fontFamily:
				'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif',
			fontSize: '13px',
			lineHeight: 'normal',
		},
		'@font-face': {
			fontFamily: 'agGridAlpine',
			src: 'url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABWoAAsAAAAAJ9AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAmYAAAR2ZcBn9U9TLzIAAANwAAAAQQAAAFZWUVMIY21hcAAAA7QAAAIcAAAFnIMq5ipnbHlmAAAF0AAAC80AABVszjC1ZWhlYWQAABGgAAAANAAAADZ2zsSBaGhlYQAAEdQAAAAeAAAAJAfSBDFobXR4AAAR9AAAABcAAAE0xzj/+2xvY2EAABIMAAAAdQAAAJwYJx3EbWF4cAAAEoQAAAAfAAAAIAFjAKpuYW1lAAASpAAAATUAAAJG5xgJvXBvc3QAABPcAAAByQAAAqgIzxhUeJx9lEtyElEUhv+mm0gCJilFjRhjovEVXzF2uhuaRx4QEDJwYFkOnMSyyrKKcsQ6XIAryNAVuAAHrsAFOHDo2PK7h0ZMBuEWze3z+M9//3Mu8iTNaVNN5doHhy81PzwafVRFgcYf5/9/7w0/vD9SYfKGL7DfgrygpHnd1GuN9M2b90beca7sV/xX/jv/s//F/yWfqFU9JrqobVakmGeoRFXVlCqnGWwR+7oaRPs8m2a9oKvKm6ernpaoGZHTM8QN9XVPi+B0DKetPaISlsNs8xyw7mvhjIgUlDy+be1gDVBkBU3qKmtWz2HZhkmL/Ab+i9Tcp3ZIVgdfB3Z5LE32LV2Ck8sITNWe3ugpfndSh1LNchK+kQ7sPbS3NTSZRDXBqVHLYW/BYGKvgReTsQl6lajdTNEN3SK7Bk4btJZl1y17jcgYbgl9CeycMVxLWmf/Qm/pRREW45y2aTpW4CHsp/aO4aV6dMLaAmtA7BM4TK2uPw+oFdKVGPQlfEN90rG+6rt+6Kd+64/O6TJ1YjvDHuj7Z2pTQMHT0V28zX9Wd9YZZuB01MmIWU5eM3UifL1MQ1etyMmcOgn7EGti8XPwdPFd2KT0I6BGaHVdp/OsHd4jos9n09lglUzpHlOwYBPct1moMKNbum6I4zlM0XoZRLcb86uYbg3wrlnfnLruhi3am7sLrt8VurPCb8gJq6bTId5VLA5parlhWSnsHcYz/Cmsp9Ucq2VYhbqLz81Y325Hl0rrnGfMJNYduxl9m6/bMKhmN7VMDx37VtaxKxYXWZbHP0GY3fDEtHMz3YGbm4/BX0ArchMAAHicY2BkmsY4gYGVgYGpimkPAwNDD4RmfMBgyMgEFGVgZWbACgLSXFMYDjDofjRifgHkRjG/BZnCwAiSAwDkfwr5AAAAeJy11AdSG0EQheFfgSxwIOecEWCCySCiEHAJnCkcKJw5h8/me/QJ8Bt1+wC4ylv1qXdGq92ZWr0GaoCczEkesvVkdEYmq9lMdT5HY3U+z2+NC9ST1XmRK264s6X7e80WueSaW8tUR3+PjK4u0McEzzU6YoUDdjlmjXNWKbHBPnucsMUmp7pmh3XKnLHNIRUu9Pu0irzWWEudntuglTTpjs208JgntNJGOx100kU3PfTqWf0MMMgQw4wwyhjjevokU0wzw6x2U2SeBRb1/TOWWNYia3nYcfTA69OxcrB7vHa+WtKO9062NrXZnfXy2fZh5eIfbvYfjkL6yP2K0Tnpjbq028uwIi/CgbwMu/IqHMvrsCZvQrrn27Aq70JJrsKGXId9eR/25EM4kY9hSz6FTbkJp3Ib0j/vc9iRL2FdvoayfAtn8j1sy49wKD9DRe6CXqBlXMqLZR2p5lzKl+VdypjVuJQ9q3WkWudItd6RaoMj1UaXMmlNjlQLLr1Ja3ak2uJI9ZFTdrCgFGFBecKeOiULa3XKGNbmlDas3Sl3WIdTArFOpyxiXU6pxLqd8on1OCUV63XKLNbnlF6s3ynH2IBTorFBp+xiQ04px4ad8o6NOCUfG3XqAdiYUzfAxp36Ajbh1CGwSadegU05dQ1s2ql/YDMu9UubdSknNufUXbCiU5/B5p06DrbgqutfdOpCWFA/wgLLfwB3H6YceJztWHtwVNUZv9852b179/2+WUI22b3ZXNjshib7uEkWdkMSSMAQcVwwQDFEikONtqK0KBAR/2hNHavjDPgH6Uw7bcPUmUZaph0VKk6VEkeldqTtDOof1dKSqmlxGLGBvfQ7Z3dDAqnaPzttsnvej+98z9+3Agj4R6ZoXLAIAoR8sugLpUKaGiJTunV6Gi7qd2F5kMZz09PZ7PQ0W264evnqZfoR/Ugw4C6H4BOqBMEjyqKqGTRWRrCgMmt6VFZ+8PTTsZdfJlksYk/rg/39/e18JMYHyGOzOv0b+vv1T2evR7LYpbSDdggS3iNrroRL1iQ43DaZP5/Rj+pH4WJmUjfA5ckMrNGPCoSvP0APCF6hFreHRaNo9Mp+2d+spbV0Uq1X6z2iioQidUgfXNwxOKC1tmoDg++VGwNtBw+2HTjAS3pgzhRvFF4tz2LJrivx0Y4tkfMy4VLUhE9hNfxyePj48DDsGh6mtsJpZOgufUQo0Xmenhc8QoBxP2wHn8sbhESoOQspV7IRJNBkkOmDVz4JJoL4oWZeF6b0v/VNwFgfPY/9OZNXPgF/3ykYu3nu+fL851MU9g2nP144Q2I3nlw4c+/sMyk/0xVyReY7F8+k5uvOLQ5+/fpzi7yjD9CvoD6ZhEpBkECUJaBaDRiZ6Hxef3M6xcRGPtAH2rbqBchOTJw6YrEEHP6mFU1+RwB+DT/I4IT+MiybmMjabMGq+kC4qSkciCwMsuMr+B1x1POifByCEAm5QgbFlfAorgy4FBeNF54gO/TVXFbHhqdJYlgfYZIqSqukh+QInmFAGgmqD+yCVv0UmgWN66f0iZJ9FN/zMD2BrwkI1ZzzRh9qbUjmDa8fGZVGPtUrHqSBHNGtSlMeLg7rKUYyvIalAnoKXqMvNoULz5PuW5uUwvNsjnQrTYVtpLtkE0/SJ5muSYDsEiVQUV3gImzo1MdgY6d+WB/rhI1YkPScLmzEJbjdKAhXr9Cv0Q8FJ2pItdAjPCx8D6lF81ANswilSgrlLBtlfwY8Ea+dKOHGilQySxLNQfB5jeF6tREU3IAq0JzWstDsl712HMHhVDLdHKQJJr9GUBtJMgu4i5Q2FffUgF8OEjTFtNaEm4Pg9TnATsKNsITidj+9R7zzXoPep2qaStKqtvKo3gEjBKjBeZboA5I76HXKXqfZYKsMeeQ6j9lmqjB5HfJCq1zrNxKT3fwzd9hf7bI5JbtJNDmsLr/F7fRWudw1fnely2S2iRUGR9BttBjcbovNbV7aECWUmCwmA0kR0eywGkmCgtltIn81ffMRA2lRr/yWEzPy5pXv0Ad+H5BchSf/aK0JekzuqtqIL5yq9y5U3ZLDbPN5k821Df7KSrPD7ggs9jssEbfFbgm4rLLb7jIZRU+oMeKx+Sp9TrPF4fbYJItERdEgeqq/e+y4ZDGaRZvZIJ2RHCbJLp12SGanW/i/7P6rZTcnnoEqou9R0Xrpch7QYA3+Y0CDy7phEsMbrCn5rznyXvW5stZYmEumE83+GsgRJjq/z+sAGUVkh3D9EhCZMtSnkp8toviGmyTR4HW4PM6l7Wa70WZyeHx9eatZcnvdFf23VUguHPks5k48OGS3WfxOT+XGjQ63weC0uqrvedDhc9slybhvt9FkdDnc/ytvnBNDIui4RRljzgS0IL46Di3QmpsdQx5DPFElNArLmJ5ocpoZbQ0+ChjYMipGtDJAm5VxIIgWreFYmNmtpsppZouinNYaSRgql8V61g+sH91ZTam3Kx6PaZuHbhvdubCiwtc3GO/yLhjc33PLqkw01bAqGjK11N26Kurt6asL3LH/cfIj3Lu4a89as0XbrDTG0glYsXutxbx0m1R9a/PyrVpdW020uyHVsKXFG+3J1/VkNuHgLPrtiMHiSD9CA0YLJzWSJaWXcE8BBpxEH4OT6FJIRff+OwJ49xP7BxcgZfrJhTtHf8ppr+aNhRXw7eiqaHTVOlZAQNu6HK8slufW7ulixJpL9SjS1BPlRQm7DCHvRcGGFIk+0aWmQgbZp6U0OjR9bJo8Wxh/O3eWTE2PHof+6Vzu7bPZ0be5yHhxiUyh3LjVaqooM2xHLr30UmZ6Wk/l85A6cSLDMbNVsBbxBq4v4w2GwaqEGkERVKFBWCIImpJKyLO+kc/pI/4+nssd42XhjX/XmR4u/uVKdbZUIzmmmfdfT5MAiPoj+PXgPSn8qvhlYyLWIazpENPRwml+FF5BntUnsAW/0CfIDn6vvjqHd+X0ESQhm83OwzMP6jomFsizC5xlsCufJ0c5y3TrXL9oYphJY3BGDdHlZT/IfCIJTrYxyN82WbaRA+QkZiABtBLBgxEqAymlqEe8hdYgI8aNKD4WuuzQANjgyqb8MLxUGRtr3dLSsqV1bExZGn4G+vSfwy7eBuXaJFxUMsrNLQP3DbTcjK1ofgyrlWxoy46BFs7Xq1fpJMfE1/E1hPiSJRoGlhUhHQaWXJX6DHuSBb29I5e0S6RBu6QhOHsdkoVeVm7GPvkAZ/TXe3shWY8t/GjLent7d2KNn0u/g2QZjz9Dn0EqXBzTJnyAionAEj2lCph76CP9QDp0/V1MQDbo6PfIOznY9S4fox595B0+NuNzruksyiA1819Ex+UvtKKsh7Pl+9+kbxbvn7l2hpDczKWoQ2VKGFHFa/9QpmTGN44XfSNzcTLANzK6noFWGse6DVpKOnWOOnnuyaKnjGmCyBI5cu7ChdjJkzFekiCvvsXLmbcVc8IQ05V5s0JIsiZGERkaAQOICgwksYXz5Yh6RzzWu2ZT6/YGPR6ugzXYgLfCdWxwvpRRH9i0pjcWrwvr8Ybt+od1YXirYXsrHyvTdzfmDD4hKNQjfQqDWKIyN2EINfsZ/EqmgfE3lErQynF7+9p227M8O+jBUn/BFQiEAwFIFZ7Lw/fzdCjS2BjBPGIbX3Io3FSpVOKn4CaHuFsoyXAv3YMa28Z9W7r4L2v1WIFoRC4jn0SjA/mtsqQMWV6PbAG2CkOQ7E/4sanCLU+h+zZI1W1LtK32tupaCPraV2wHINTri8sH/xyDcx7JanKOphc1u2CBSSZgIgdMCJ/sbucZeOgpyWJxWBdZJMtg47KgT39v4TrrNqMhkGr4kmzB7eQJp9Nj94/aKa3S/2L0qpVJ98GKChBN7jOCmb9jnI6j9dUKi4TlwkrhJiEvbBIGhTvxXUEiu6mdiBWRRqIST5ZodYaQy48BVEsbvDILSCmuSqLqQ/wgKjLv+DkzIl45kVKNYiKlRQEZkUAH7UsgDlYjRkX0JbR6dDHUtWhFFJCe6IpF+vv6+9d6UA27C6f+PqUkiVQwAUkqtfCCObYuH5OiKxftlGLr1sXM7XXNC4JQeBX27gEYziVvagHYnYNf7WbrkRet0X0nWrr30Z/Me341710pvGqUcPnUGy4nXgZ7wMEPl+5d1N1ApFge7wGEqP5ocGXLQy+uTu37ZzoykNu7N4yrKcDeYXjoBlvknpiMZ/RT0JrRyccZlu226cLs3wO8wuKyVTmZttQytjmZVdEwh2ms38xmSgb16M4dnV1dnTt2grPcevSezRtTmpbauPlsuUHPswn9H3MXX9k7ZxFvlGyI0WJFG08zanggKPp79T8grev+zs77H2VF1xejkkyV1mMx/YUJviEXEGUMtuy3j7m/aPHMYLKNZQbXsGEvHeJxlSMZ5v8A93JEUvSDhffJkcJadNRZmOQD+uEcmSqcLt9JySEmPY8E58ABDnIIY19fSe6HKGVzEimOUqpf0C/MnUPsivRgwOS75z+zuKA092Pq4b+bsN8qNLgLPu0snNT/1AFVrPUbqOkorYuTTvZCD77mOA82HbfP8ClOxouxgeVL5GMeEqCVjGOMYKo5y88PCW7BLySYH/XxVNdvFOUssExWQcNOMMzsmwUSkmlNxpUyfjQgrxQxgBZdlswhAFj85byp8NwjbT1lpNDRtL7mvoGew8lCN3mFYYLYCsuyqjuWtg60jOXh7v2VX21vLYKFptWG9fnbcSV54V8PFbSvAAAAeJxjYGRgYADiJZeya+P5bb4ycDO/AApEcT7e1wCj///+/5v5LfNboEoOBiYgyQAAoN8P3nicY2BkYGB+wcAAIv///v+b+S0DIwMq8AUAntwHCgAAeJxjYGBgYH4Bwv9/Q+ihjekBAG/aMMwAeJxjYAACKYYghiyGJQz7GN4xSjA6MZYwTmNcxXiH8R/THeZdzFdY3Fh2sJxh1WEtY53Cuob1G5semxtbHNsitgfsbOwK7G7sEewl7Ec4mDjSOHk4FTjTOA9w3uL8xcXBJcalwmXE5cYVwpXBtY10CAAggCv3AAAAeJxjYGRgYPBlmMfAwwACTEDMBYQMDP/BfAYAIOsCDgB4nHWRPU7DQBCFnxMniBghJCREx1Y0SM5PQZEuFHGfIgWdE68dR7bXWm8ipeMYnIBjUHIETsEheDFTREjZ1a6/+fbNNAZwgy94OC4PV+19XB1csPrjLulW2Cc/CPcQ4Em4T/8sPKB9EQ7YWXKC51/S3ONNuINrvAt36T+EffKncA93+Bbu0/8ID7D0fOEAj95rnEU2T2ZFnVd6obNdEdtTdcpLbZvcVGocjk51pCttY6cTtTqoZp9NnEtVak2p5qZyuiiMqq3Z6rULN87V0+EwFR+uTYkYGSJY5EgwQ4GaVEFjwZNhRxPz9VzqnF/yWDSsDGuFMUKMzqYjnqrtiOH4TdixwoF3gz17JrQOKeuUGcO/ojBvJx/TBbehqdu3Lc2aPsSm7aoxxZA7/ZcPmeKkXwK+aWkAAAB4nG2SB2/bMBSE/cWS7dhp46ZtuvceapvuvXeb/geGomUiEimQlO3k15e1gwAB+gASd4eHe8cHtpZai+q3/l+bLNEmIaVDlx7L9BmwwiEOs8qQI6xxlGMcZ50TnOQUpznDWc5xngtc5BKXucJVrnGdG9zkFre5w10y7nGfB2zwkEc85glPecZzXvCSV7zmDW95x3s+8JFPfOYLX/nGd37wk1/8ZpM/rYEoCqcKEbQ1HeGcnfq28LIjhZGqTOVYuDCUYyW3t+wsmwOVr+8L2uQqKFdpI4Ja25cbs9e5Im1pXVbrSFw3kqYyvi+tCU7IoPJE2nonlc5635Z+ksaTbSS58jJVsxigO7+zjZ6a1SLOypfVjsp8Kfy4HVFnpMs4Ph1p50NSOF2nhbNNncSGkJRqFDqlNjFHt7Qi16boVWKmK72rkkqZphdzL5hRs5AYa9TA2JCJsrRTlad1dFHtWpu01hMberVTE20bP3TRzGZbTQjWZHY0Wj0omNTpYhwSLyaq76tol+V2avbgv1iDBZy39RY4pg5xTWvBKXVwr8tzydbK9BqzeA+CAocioLEYpngkJWO22WIW/0ZORUPNDhNG7LZafwFegLa2AAAA) format(woff)',
			fontWeight: 'normal',
			fontStyle: 'normal',
		},
		'.ag-theme-alpine .ag-icon': {
			fontFamily: 'agGridAlpine',
			fontSize: '16px',
			lineHeight: '16px',
			fontStyle: 'normal',
			fontWeight: 'normal',
			fontVariant: 'normal',
			textTransform: 'none',
			webkitFontSmoothing: 'antialiased',
			mozOsxFontSmoothing: 'grayscale',
		},
		'.ag-theme-alpine .ag-icon-aggregation::before': {
			content: '\f101',
		},
		'.ag-theme-alpine .ag-icon-arrows::before': {
			content: '\f102',
		},
		'.ag-theme-alpine .ag-icon-asc::before': {
			content: '\f103',
		},
		'.ag-theme-alpine .ag-icon-cancel::before': {
			content: '\f104',
		},
		'.ag-theme-alpine .ag-icon-chart::before': {
			content: '\f105',
		},
		'.ag-theme-alpine .ag-icon-color-picker::before': {
			content: '\f109',
		},
		'.ag-theme-alpine .ag-icon-columns::before': {
			content: '\f10a',
		},
		'.ag-theme-alpine .ag-icon-contracted::before': {
			content: '\f10b',
		},
		'.ag-theme-alpine .ag-icon-copy::before': {
			content: '\f10c',
		},
		'.ag-theme-alpine .ag-icon-cross::before': {
			content: '\f10d',
		},
		'.ag-theme-alpine .ag-icon-csv::before': {
			content: '\f10e',
		},
		'.ag-theme-alpine .ag-icon-desc::before': {
			content: '\f10f',
		},
		'.ag-theme-alpine .ag-icon-excel::before': {
			content: '\f110',
		},
		'.ag-theme-alpine .ag-icon-expanded::before': {
			content: '\f111',
		},
		'.ag-theme-alpine .ag-icon-eye-slash::before': {
			content: '\f112',
		},
		'.ag-theme-alpine .ag-icon-eye::before': {
			content: '\f113',
		},
		'.ag-theme-alpine .ag-icon-filter::before': {
			content: '\f114',
		},
		'.ag-theme-alpine .ag-icon-first::before': {
			content: '\f115',
		},
		'.ag-theme-alpine .ag-icon-grip::before': {
			content: '\f116',
		},
		'.ag-theme-alpine .ag-icon-group::before': {
			content: '\f117',
		},
		'.ag-theme-alpine .ag-icon-last::before': {
			content: '\f118',
		},
		'.ag-theme-alpine .ag-icon-left::before': {
			content: '\f119',
		},
		'.ag-theme-alpine .ag-icon-linked::before': {
			content: '\f11a',
		},
		'.ag-theme-alpine .ag-icon-loading::before': {
			content: '\f11b',
		},
		'.ag-theme-alpine .ag-icon-maximize::before': {
			content: '\f11c',
		},
		'.ag-theme-alpine .ag-icon-menu::before': {
			content: '\f11d',
		},
		'.ag-theme-alpine .ag-icon-minimize::before': {
			content: '\f11e',
		},
		'.ag-theme-alpine .ag-icon-next::before': {
			content: '\f11f',
		},
		'.ag-theme-alpine .ag-icon-none::before': {
			content: '\f120',
		},
		'.ag-theme-alpine .ag-icon-not-allowed::before': {
			content: '\f121',
		},
		'.ag-theme-alpine .ag-icon-paste::before': {
			content: '\f122',
		},
		'.ag-theme-alpine .ag-icon-pin::before': {
			content: '\f123',
		},
		'.ag-theme-alpine .ag-icon-pivot::before': {
			content: '\f124',
		},
		'.ag-theme-alpine .ag-icon-previous::before': {
			content: '\f125',
		},
		'.ag-theme-alpine .ag-icon-right::before': {
			content: '\f128',
		},
		'.ag-theme-alpine .ag-icon-save::before': {
			content: '\f129',
		},
		'.ag-theme-alpine .ag-icon-small-down::before': {
			content: '\f12a',
		},
		'.ag-theme-alpine .ag-icon-small-left::before': {
			content: '\f12b',
		},
		'.ag-theme-alpine .ag-icon-small-right::before': {
			content: '\f12c',
		},
		'.ag-theme-alpine .ag-icon-small-up::before': {
			content: '\f12d',
		},
		'.ag-theme-alpine .ag-icon-tick::before': {
			content: '\f12e',
		},
		'.ag-theme-alpine .ag-icon-tree-closed::before': {
			content: '\f12f',
		},
		'.ag-theme-alpine .ag-icon-tree-indeterminate::before': {
			content: '\f130',
		},
		'.ag-theme-alpine .ag-icon-tree-open::before': {
			content: '\f131',
		},
		'.ag-theme-alpine .ag-icon-unlinked::before': {
			content: '\f132',
		},
		'.ag-theme-alpine .ag-icon-row-drag::before': {
			content: '\f116',
		},
		'.ag-theme-alpine .ag-left-arrow::before': {
			content: '\f119',
		},
		'.ag-theme-alpine .ag-right-arrow::before': {
			content: '\f128',
		},
		'.ag-theme-alpine .ag-root-wrapper, .ag-theme-alpine .ag-sticky-top': {
			backgroundColor: 'var(--ag-background-color, #fff)',
			fallbacks: [
				{
					backgroundColor: '#fff',
				},
			],
		},
		'.ag-theme-alpine [class^=ag-], .ag-theme-alpine [class^=ag-]:focus, .ag-theme-alpine [class^=ag-]:after, .ag-theme-alpine [class^=ag-]:before':
			{
				boxSizing: 'border-box',
				outline: 'none',
			},
		'.ag-theme-alpine [class^=ag-]::-ms-clear': {
			display: 'none',
		},
		'.ag-theme-alpine .ag-checkbox .ag-input-wrapper, .ag-theme-alpine .ag-radio-button .ag-input-wrapper': {
			overflow: 'visible',
		},
		'.ag-theme-alpine .ag-range-field .ag-input-wrapper': {
			height: '100%',
		},
		'.ag-theme-alpine .ag-toggle-button': {
			flex: 'none',
			width: 'unset',
			minWidth: 'unset',
		},
		'.ag-theme-alpine .ag-ltr .ag-label-align-right .ag-label': {
			marginLeft: '6px',
		},
		'.ag-theme-alpine .ag-rtl .ag-label-align-right .ag-label': {
			marginRight: '6px',
		},
		'.ag-theme-alpine input[class^=ag-]': {
			margin: '0',
			backgroundColor: 'var(--ag-background-color, #fff)',
			fallbacks: [
				{
					backgroundColor: '#fff',
				},
			],
		},
		'.ag-theme-alpine textarea[class^=ag-], .ag-theme-alpine select[class^=ag-]': {
			backgroundColor: 'var(--ag-background-color, #fff)',
			fallbacks: [
				{
					backgroundColor: '#fff',
				},
			],
		},
		'.ag-theme-alpine input[class^=ag-]:not([type]), .ag-theme-alpine input[class^=ag-][type=text], .ag-theme-alpine input[class^=ag-][type=number], .ag-theme-alpine input[class^=ag-][type=tel], .ag-theme-alpine input[class^=ag-][type=date], .ag-theme-alpine input[class^=ag-][type=datetime-local], .ag-theme-alpine textarea[class^=ag-]':
			{
				fontSize: 'inherit',
				lineHeight: 'inherit',
				color: 'inherit',
				borderWidth: '1px',
				borderStyle: 'solid',
				borderColor: 'var(--ag-input-border-color, var(--ag-border-color, #babfc7))',
				fallbacks: [
					{
						borderColor: '#babfc7',
					},
				],
			},
		'.ag-theme-alpine input[class^=ag-]:not([type]):disabled, .ag-theme-alpine input[class^=ag-][type=text]:disabled, .ag-theme-alpine input[class^=ag-][type=number]:disabled, .ag-theme-alpine input[class^=ag-][type=tel]:disabled, .ag-theme-alpine input[class^=ag-][type=date]:disabled, .ag-theme-alpine input[class^=ag-][type=datetime-local]:disabled, .ag-theme-alpine textarea[class^=ag-]:disabled':
			{
				color: 'var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5))',
				fallbacks: [
					{
						borderColor: 'rgba(186, 191, 199, 0.3)',
					},
					{
						backgroundColor: '#f1f2f4',
					},
					{
						color: 'rgba(24, 29, 31, 0.5)',
					},
				],
				backgroundColor: 'var(--ag-input-disabled-background-color, #f1f2f4)',
				borderColor: 'var(--ag-input-disabled-border-color, rgba(186, 191, 199, 0.3))',
			},
		'.ag-theme-alpine input[class^=ag-]:not([type]):focus, .ag-theme-alpine input[class^=ag-][type=text]:focus, .ag-theme-alpine input[class^=ag-][type=number]:focus, .ag-theme-alpine input[class^=ag-][type=tel]:focus, .ag-theme-alpine input[class^=ag-][type=date]:focus, .ag-theme-alpine input[class^=ag-][type=datetime-local]:focus, .ag-theme-alpine textarea[class^=ag-]:focus':
			{
				outline: 'none',
				boxShadow: '0 0 2px 0.1rem rgba(33, 150, 243, 0.4)',
				borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
				fallbacks: [
					{
						borderColor: 'rgba(33, 150, 243, 0.4)',
					},
				],
			},
		'.ag-theme-alpine input[class^=ag-]:not([type]):invalid, .ag-theme-alpine input[class^=ag-][type=text]:invalid, .ag-theme-alpine input[class^=ag-][type=number]:invalid, .ag-theme-alpine input[class^=ag-][type=tel]:invalid, .ag-theme-alpine input[class^=ag-][type=date]:invalid, .ag-theme-alpine input[class^=ag-][type=datetime-local]:invalid, .ag-theme-alpine textarea[class^=ag-]:invalid':
			{
				borderWidth: '2px',
				borderStyle: 'solid',
				borderColor: 'var(--ag-input-border-color-invalid, var(--ag-invalid-color, #e02525))',
				fallbacks: [
					{
						borderColor: '#e02525',
					},
				],
			},
		'.ag-theme-alpine input[class^=ag-][type=number]': {
			mozAppearance: 'textfield',
		},
		'.ag-theme-alpine input[class^=ag-][type=number]::-webkit-outer-spin-button, .ag-theme-alpine input[class^=ag-][type=number]::-webkit-inner-spin-button':
			{
				webkitAppearance: 'none',
				margin: '0',
			},
		'.ag-theme-alpine input[class^=ag-][type=range]': {
			padding: '0',
			webkitAppearance: 'none',
			width: '100%',
			height: '100%',
			background: 'none',
			overflow: 'visible',
		},
		'.ag-theme-alpine input[class^=ag-][type=button]:focus, .ag-theme-alpine button[class^=ag-]:focus': {
			boxShadow: '0 0 2px 0.1rem rgba(33, 150, 243, 0.4)',
		},
		'.ag-theme-alpine .ag-drag-handle': {
			color: 'var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))',
			fallbacks: [
				{
					color: '#181d1f',
				},
			],
		},
		'.ag-theme-alpine .ag-list-item, .ag-theme-alpine .ag-virtual-list-item': {
			height: '24px',
		},
		'.ag-theme-alpine .ag-keyboard-focus .ag-virtual-list-item:focus': {
			outline: 'none',
		},
		'.ag-theme-alpine .ag-keyboard-focus .ag-virtual-list-item:focus::after': {
			content: '',
			position: 'absolute',
			backgroundColor: 'transparent',
			pointerEvents: 'none',
			top: '4px',
			left: '4px',
			display: 'block',
			width: 'calc(100% - 8px)',
			height: 'calc(100% - 8px)',
			border: '1px solid',
			borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					borderColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine .ag-select-list': {
			backgroundColor: 'var(--ag-background-color, #fff)',
			fallbacks: [
				{
					backgroundColor: '#fff',
				},
			],
			overflowY: 'auto',
			overflowX: 'hidden',
		},
		'.ag-theme-alpine .ag-list-item': {
			display: 'flex',
			alignItems: 'center',
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
		},
		'.ag-theme-alpine .ag-list-item.ag-active-item': {
			backgroundColor: 'var(--ag-row-hover-color, rgba(33, 150, 243, 0.1))',
			fallbacks: [
				{
					backgroundColor: 'rgba(33, 150, 243, 0.1)',
				},
			],
		},
		'.ag-theme-alpine .ag-select-list-item': {
			paddingLeft: '4px',
			paddingRight: '4px',
			cursor: 'default',
			mozUserSelect: 'none',
			webkitUserSelect: 'none',
			userSelect: 'none',
		},
		'.ag-theme-alpine .ag-select-list-item span': {
			whiteSpace: 'nowrap',
			textOverflow: 'ellipsis',
			overflow: 'hidden',
		},
		'.ag-theme-alpine .ag-select .ag-picker-field-wrapper': {
			backgroundColor: 'var(--ag-background-color, #fff)',
			fallbacks: [
				{
					backgroundColor: '#fff',
				},
			],
			minHeight: '24px',
			cursor: 'default',
		},
		'.ag-theme-alpine .ag-select.ag-disabled .ag-picker-field-wrapper:focus': {
			boxShadow: 'none',
		},
		'.ag-theme-alpine .ag-select:not(.ag-cell-editor)': {
			height: '24px',
		},
		'.ag-theme-alpine .ag-select .ag-picker-field-display': {
			margin: '4px',
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
		},
		'.ag-theme-alpine .ag-select .ag-picker-field-icon': {
			display: 'flex',
			alignItems: 'center',
		},
		'.ag-theme-alpine .ag-select.ag-disabled': {
			opacity: '0.5',
		},
		'.ag-theme-alpine .ag-rich-select': {
			backgroundColor: 'var(--ag-control-panel-background-color, #f8f8f8)',
			fallbacks: [
				{
					backgroundColor: '#f8f8f8',
				},
			],
		},
		'.ag-theme-alpine .ag-rich-select-list': {
			width: '100%',
			minWidth: '200px',
			height: '273px',
		},
		'.ag-theme-alpine .ag-rich-select-value': {
			padding: '0 6px 0 18px',
			height: '42px',
			borderBottom: 'solid 1px',
			borderBottomColor: 'var(--ag-secondary-border-color, #dde2eb)',
			fallbacks: [
				{
					borderBottomColor: '#dde2eb',
				},
			],
		},
		'.ag-theme-alpine .ag-rich-select-virtual-list-item': {
			cursor: 'default',
			height: '24px',
		},
		'.ag-keyboard-focus .ag-theme-alpine .ag-rich-select-virtual-list-item:focus::after': {
			content: 'none',
		},
		'.ag-theme-alpine .ag-rich-select-virtual-list-item:hover': {
			backgroundColor: 'var(--ag-row-hover-color, rgba(33, 150, 243, 0.1))',
			fallbacks: [
				{
					backgroundColor: 'rgba(33, 150, 243, 0.1)',
				},
			],
		},
		'.ag-theme-alpine .ag-rich-select-row': {
			paddingLeft: '18px',
		},
		'.ag-theme-alpine .ag-rich-select-row-selected': {
			backgroundColor: 'var(--ag-selected-row-background-color, rgba(33, 150, 243, 0.3))',
			fallbacks: [
				{
					backgroundColor: 'rgba(33, 150, 243, 0.3)',
				},
			],
		},
		'.ag-theme-alpine .ag-row-drag, .ag-theme-alpine .ag-selection-checkbox, .ag-theme-alpine .ag-group-expanded, .ag-theme-alpine .ag-group-contracted':
			{
				color: 'var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))',
				fallbacks: [
					{
						color: '#181d1f',
					},
				],
			},
		'.ag-theme-alpine .ag-ltr .ag-row-drag, .ag-theme-alpine .ag-ltr .ag-selection-checkbox, .ag-theme-alpine .ag-ltr .ag-group-expanded, .ag-theme-alpine .ag-ltr .ag-group-contracted':
			{
				marginRight: '12px',
			},
		'.ag-theme-alpine .ag-rtl .ag-row-drag, .ag-theme-alpine .ag-rtl .ag-selection-checkbox, .ag-theme-alpine .ag-rtl .ag-group-expanded, .ag-theme-alpine .ag-rtl .ag-group-contracted':
			{
				marginLeft: '12px',
			},
		'.ag-theme-alpine .ag-cell-wrapper > *:not(.ag-cell-value):not(.ag-group-value)': {
			agInternalCalculatedLineHeight: 'var(--ag-line-height, 40px)',
			agInternalPaddedRowHeight: '40px',
			height: 'min(var(--ag-internal-calculated-line-height), var(--ag-internal-padded-row-height))',
			display: 'flex',
			alignItems: 'center',
			flex: 'none',
		},
		'.ag-theme-alpine .ag-group-expanded, .ag-theme-alpine .ag-group-contracted': {
			cursor: 'pointer',
		},
		'.ag-theme-alpine .ag-group-title-bar-icon': {
			cursor: 'pointer',
			flex: 'none',
			color: 'var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))',
			fallbacks: [
				{
					color: '#181d1f',
				},
			],
		},
		'.ag-theme-alpine .ag-ltr .ag-group-child-count': {
			marginLeft: '2px',
		},
		'.ag-theme-alpine .ag-rtl .ag-group-child-count': {
			marginRight: '2px',
		},
		'.ag-theme-alpine .ag-group-title-bar': {
			backgroundColor: 'var(--ag-subheader-background-color, #fff)',
			fallbacks: [
				{
					backgroundColor: '#fff',
				},
			],
			padding: '6px',
		},
		'.ag-theme-alpine .ag-group-toolbar': {
			padding: '6px',
		},
		'.ag-theme-alpine .ag-disabled-group-title-bar, .ag-theme-alpine .ag-disabled-group-container': {
			opacity: '0.5',
		},
		'.ag-theme-alpine .group-item': {
			margin: '3px 0',
		},
		'.ag-theme-alpine .ag-label': {
			whiteSpace: 'nowrap',
		},
		'.ag-theme-alpine .ag-ltr .ag-label': {
			marginRight: '6px',
		},
		'.ag-theme-alpine .ag-rtl .ag-label': {
			marginLeft: '6px',
		},
		'.ag-theme-alpine .ag-label-align-top .ag-label': {
			marginBottom: '3px',
		},
		'.ag-theme-alpine .ag-angle-select[disabled]': {
			color: 'var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5))',
			fallbacks: [
				{
					color: 'rgba(24, 29, 31, 0.5)',
				},
			],
			pointerEvents: 'none',
		},
		'.ag-theme-alpine .ag-angle-select[disabled] .ag-angle-select-field': {
			opacity: '0.4',
		},
		'.ag-theme-alpine .ag-ltr .ag-slider-field, .ag-theme-alpine .ag-ltr .ag-angle-select-field': {
			marginRight: '12px',
		},
		'.ag-theme-alpine .ag-rtl .ag-slider-field, .ag-theme-alpine .ag-rtl .ag-angle-select-field': {
			marginLeft: '12px',
		},
		'.ag-theme-alpine .ag-angle-select-parent-circle': {
			width: '24px',
			height: '24px',
			borderRadius: '12px',
			border: 'solid 1px',
			borderColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					backgroundColor: '#fff',
				},
				{
					borderColor: '#babfc7',
				},
			],
			backgroundColor: 'var(--ag-background-color, #fff)',
		},
		'.ag-theme-alpine .ag-angle-select-child-circle': {
			top: '4px',
			left: '12px',
			width: '6px',
			height: '6px',
			marginLeft: '-3px',
			marginTop: '-4px',
			borderRadius: '3px',
			backgroundColor: 'var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))',
			fallbacks: [
				{
					backgroundColor: '#181d1f',
				},
			],
		},
		'.ag-theme-alpine .ag-picker-field-wrapper': {
			border: '1px solid',
			borderColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderColor: '#babfc7',
				},
			],
			borderRadius: '5px',
		},
		'.ag-theme-alpine .ag-picker-field-wrapper:focus': {
			boxShadow: '0 0 2px 0.1rem rgba(33, 150, 243, 0.4)',
		},
		'.ag-theme-alpine .ag-picker-field-button': {
			backgroundColor: 'var(--ag-background-color, #fff)',
			fallbacks: [
				{
					color: '#181d1f',
				},
				{
					backgroundColor: '#fff',
				},
			],
			color: 'var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))',
		},
		'.ag-theme-alpine .ag-dialog.ag-color-dialog': {
			borderRadius: '5px',
		},
		'.ag-theme-alpine .ag-color-picker .ag-picker-field-display': {
			height: '16px',
		},
		'.ag-theme-alpine .ag-color-panel': {
			padding: '6px',
		},
		'.ag-theme-alpine .ag-spectrum-color': {
			backgroundColor: 'rgb(255, 0, 0)',
			borderRadius: '2px',
		},
		'.ag-theme-alpine .ag-spectrum-tools': {
			padding: '10px',
		},
		'.ag-theme-alpine .ag-spectrum-sat': {
			backgroundImage: 'linear-gradient(to right, white, rgba(204, 154, 129, 0))',
		},
		'.ag-theme-alpine .ag-spectrum-val': {
			backgroundImage: 'linear-gradient(to top, black, rgba(204, 154, 129, 0))',
		},
		'.ag-theme-alpine .ag-spectrum-dragger': {
			borderRadius: '12px',
			height: '12px',
			width: '12px',
			border: '1px solid white',
			background: 'black',
			boxShadow: '0 0 2px 0px rgba(0, 0, 0, 0.24)',
		},
		'.ag-theme-alpine .ag-spectrum-hue-background': {
			borderRadius: '2px',
		},
		'.ag-theme-alpine .ag-spectrum-alpha-background': {
			borderRadius: '2px',
		},
		'.ag-theme-alpine .ag-spectrum-tool': {
			marginBottom: '10px',
			height: '11px',
			borderRadius: '2px',
		},
		'.ag-theme-alpine .ag-spectrum-slider': {
			marginTop: '-12px',
			width: '13px',
			height: '13px',
			borderRadius: '13px',
			backgroundColor: 'rgb(248, 248, 248)',
			boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
		},
		'.ag-theme-alpine .ag-recent-color': {
			margin: '0 3px',
		},
		'.ag-theme-alpine .ag-recent-color:first-child': {
			marginLeft: '0',
		},
		'.ag-theme-alpine .ag-recent-color:last-child': {
			marginRight: '0',
		},
		'.ag-theme-alpine.ag-dnd-ghost': {
			border: 'solid 1px',
			borderColor: 'var(--ag-secondary-border-color, #dde2eb)',
			fallbacks: [
				{
					padding: '6px',
				},
				{
					color: '#181d1f',
				},
				{
					borderColor: '#dde2eb',
				},
				{
					borderColor: 'var(--ag-border-color, #babfc7)',
				},
				{
					border: 'solid 1px',
				},
				{
					background: '#fff',
				},
				{
					borderColor: '#babfc7',
				},
			],
			background: 'var(--ag-background-color, #fff)',
			borderRadius: '3px',
			boxShadow: '0 1px 4px 1px rgba(186, 191, 199, 0.4)',
			padding: '0 12px',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			color: 'var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))',
			height: '48px !important',
			lineHeight: '48px',
			margin: '0',
			transform: 'translateY(12px)',
		},
		'.ag-theme-alpine .ag-dnd-ghost-icon': {
			marginRight: '6px',
			color: 'var(--ag-foreground-color, #181d1f)',
			fallbacks: [
				{
					color: '#181d1f',
				},
			],
		},
		'.ag-theme-alpine .ag-popup-child:not(.ag-tooltip-custom)': {
			boxShadow: '0 1px 4px 1px rgba(186, 191, 199, 0.4)',
		},
		'.ag-dragging-range-handle .ag-theme-alpine .ag-dialog, .ag-dragging-fill-handle .ag-theme-alpine .ag-dialog': {
			opacity: '0.7',
			pointerEvents: 'none',
		},
		'.ag-theme-alpine .ag-dialog': {
			borderRadius: '3px',
			border: 'solid 1px',
			borderColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine .ag-panel': {
			backgroundColor: 'var(--ag-background-color, #fff)',
			fallbacks: [
				{
					backgroundColor: '#fff',
				},
			],
		},
		'.ag-theme-alpine .ag-panel-title-bar': {
			backgroundColor: 'var(--ag-header-background-color, #f8f8f8)',
			fallbacks: [
				{
					borderBottomColor: '#babfc7',
				},
				{
					color: '#181d1f',
				},
				{
					backgroundColor: '#f8f8f8',
				},
			],
			color: 'var(--ag-header-foreground-color, var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f)))',
			height: '48px',
			padding: '6px 18px',
			borderBottom: 'solid 1px',
			borderBottomColor: 'var(--ag-border-color, #babfc7)',
		},
		'.ag-theme-alpine .ag-ltr .ag-panel-title-bar-button': {
			marginLeft: '12px',
			fallbacks: [
				{
					marginLeft: '6px',
				},
			],
			marginRight: '6px',
		},
		'.ag-theme-alpine .ag-rtl .ag-panel-title-bar-button': {
			marginRight: '12px',
			fallbacks: [
				{
					marginRight: '6px',
				},
			],
			marginLeft: '6px',
		},
		'.ag-theme-alpine .ag-tooltip': {
			backgroundColor: 'var(--ag-header-background-color, #f8f8f8)',
			fallbacks: [
				{
					borderColor: '#babfc7',
				},
				{
					color: '#181d1f',
				},
				{
					backgroundColor: '#f8f8f8',
				},
			],
			color: 'var(--ag-foreground-color, #181d1f)',
			padding: '6px',
			border: 'solid 1px',
			borderColor: 'var(--ag-border-color, #babfc7)',
			borderRadius: '3px',
			transition: 'opacity 1s',
			whiteSpace: 'normal',
		},
		'.ag-theme-alpine .ag-tooltip.ag-tooltip-hiding': {
			opacity: '0',
		},
		'.ag-theme-alpine .ag-tooltip-custom': {
			transition: 'opacity 1s',
		},
		'.ag-theme-alpine .ag-tooltip-custom.ag-tooltip-hiding': {
			opacity: '0',
		},
		'.ag-theme-alpine .ag-ltr .ag-column-select-indent-1': {
			paddingLeft: '16px',
		},
		'.ag-theme-alpine .ag-rtl .ag-column-select-indent-1': {
			paddingRight: '16px',
		},
		'.ag-theme-alpine .ag-ltr .ag-column-select-indent-2': {
			paddingLeft: '32px',
		},
		'.ag-theme-alpine .ag-rtl .ag-column-select-indent-2': {
			paddingRight: '32px',
		},
		'.ag-theme-alpine .ag-ltr .ag-column-select-indent-3': {
			paddingLeft: '48px',
		},
		'.ag-theme-alpine .ag-rtl .ag-column-select-indent-3': {
			paddingRight: '48px',
		},
		'.ag-theme-alpine .ag-ltr .ag-column-select-indent-4': {
			paddingLeft: '64px',
		},
		'.ag-theme-alpine .ag-rtl .ag-column-select-indent-4': {
			paddingRight: '64px',
		},
		'.ag-theme-alpine .ag-ltr .ag-column-select-indent-5': {
			paddingLeft: '80px',
		},
		'.ag-theme-alpine .ag-rtl .ag-column-select-indent-5': {
			paddingRight: '80px',
		},
		'.ag-theme-alpine .ag-ltr .ag-column-select-indent-6': {
			paddingLeft: '96px',
		},
		'.ag-theme-alpine .ag-rtl .ag-column-select-indent-6': {
			paddingRight: '96px',
		},
		'.ag-theme-alpine .ag-ltr .ag-column-select-indent-7': {
			paddingLeft: '112px',
		},
		'.ag-theme-alpine .ag-rtl .ag-column-select-indent-7': {
			paddingRight: '112px',
		},
		'.ag-theme-alpine .ag-ltr .ag-column-select-indent-8': {
			paddingLeft: '128px',
		},
		'.ag-theme-alpine .ag-rtl .ag-column-select-indent-8': {
			paddingRight: '128px',
		},
		'.ag-theme-alpine .ag-ltr .ag-column-select-indent-9': {
			paddingLeft: '144px',
		},
		'.ag-theme-alpine .ag-rtl .ag-column-select-indent-9': {
			paddingRight: '144px',
		},
		'.ag-theme-alpine .ag-column-select-header-icon': {
			cursor: 'pointer',
		},
		'.ag-theme-alpine .ag-keyboard-focus .ag-column-select-header-icon:focus': {
			outline: 'none',
		},
		'.ag-theme-alpine .ag-keyboard-focus .ag-column-select-header-icon:focus::after': {
			content: '',
			position: 'absolute',
			backgroundColor: 'transparent',
			pointerEvents: 'none',
			top: '0px',
			left: '0px',
			display: 'block',
			width: 'calc(100% - 0px)',
			height: 'calc(100% - 0px)',
			border: '1px solid',
			borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					borderColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine .ag-ltr .ag-column-group-icons:not(:last-child), .ag-theme-alpine .ag-ltr .ag-column-select-header-icon:not(:last-child), .ag-theme-alpine .ag-ltr .ag-column-select-header-checkbox:not(:last-child), .ag-theme-alpine .ag-ltr .ag-column-select-header-filter-wrapper:not(:last-child), .ag-theme-alpine .ag-ltr .ag-column-select-checkbox:not(:last-child), .ag-theme-alpine .ag-ltr .ag-column-select-column-drag-handle:not(:last-child), .ag-theme-alpine .ag-ltr .ag-column-select-column-group-drag-handle:not(:last-child), .ag-theme-alpine .ag-ltr .ag-column-select-column-label:not(:last-child)':
			{
				marginRight: '12px',
			},
		'.ag-theme-alpine .ag-rtl .ag-column-group-icons:not(:last-child), .ag-theme-alpine .ag-rtl .ag-column-select-header-icon:not(:last-child), .ag-theme-alpine .ag-rtl .ag-column-select-header-checkbox:not(:last-child), .ag-theme-alpine .ag-rtl .ag-column-select-header-filter-wrapper:not(:last-child), .ag-theme-alpine .ag-rtl .ag-column-select-checkbox:not(:last-child), .ag-theme-alpine .ag-rtl .ag-column-select-column-drag-handle:not(:last-child), .ag-theme-alpine .ag-rtl .ag-column-select-column-group-drag-handle:not(:last-child), .ag-theme-alpine .ag-rtl .ag-column-select-column-label:not(:last-child)':
			{
				marginLeft: '12px',
			},
		'.ag-theme-alpine .ag-keyboard-focus .ag-column-select-virtual-list-item:focus': {
			outline: 'none',
		},
		'.ag-theme-alpine .ag-keyboard-focus .ag-column-select-virtual-list-item:focus::after': {
			content: '',
			position: 'absolute',
			backgroundColor: 'transparent',
			pointerEvents: 'none',
			top: '1px',
			left: '1px',
			display: 'block',
			width: 'calc(100% - 2px)',
			height: 'calc(100% - 2px)',
			border: '1px solid',
			borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					borderColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine .ag-column-select-column-group:not(:last-child), .ag-theme-alpine .ag-column-select-column:not(:last-child)':
			{
				marginBottom: '9px',
			},
		'.ag-theme-alpine .ag-column-select-column-readonly, .ag-theme-alpine .ag-column-select-column-group-readonly':
			{
				color: 'var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5))',
				fallbacks: [
					{
						color: 'rgba(24, 29, 31, 0.5)',
					},
				],
				pointerEvents: 'none',
			},
		'.ag-theme-alpine .ag-ltr .ag-column-select-add-group-indent': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-column-select-add-group-indent': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-column-select-virtual-list-viewport': {
			padding: '6px 0px',
		},
		'.ag-theme-alpine .ag-column-select-virtual-list-item': {
			padding: '0 12px',
		},
		'.ag-theme-alpine .ag-rtl': {
			textAlign: 'right',
		},
		'.ag-theme-alpine .ag-root-wrapper': {
			border: 'solid 1px',
			borderColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-1': {
			paddingLeft: '46px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-1': {
			paddingRight: '46px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-1': {
			paddingLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-1': {
			paddingRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-1 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-1 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-2': {
			paddingLeft: '74px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-2': {
			paddingRight: '74px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-2': {
			paddingLeft: '56px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-2': {
			paddingRight: '56px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-2 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-2 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-3': {
			paddingLeft: '102px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-3': {
			paddingRight: '102px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-3': {
			paddingLeft: '84px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-3': {
			paddingRight: '84px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-3 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-3 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-4': {
			paddingLeft: '130px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-4': {
			paddingRight: '130px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-4': {
			paddingLeft: '112px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-4': {
			paddingRight: '112px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-4 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-4 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-5': {
			paddingLeft: '158px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-5': {
			paddingRight: '158px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-5': {
			paddingLeft: '140px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-5': {
			paddingRight: '140px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-5 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-5 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-6': {
			paddingLeft: '186px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-6': {
			paddingRight: '186px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-6': {
			paddingLeft: '168px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-6': {
			paddingRight: '168px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-6 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-6 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-7': {
			paddingLeft: '214px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-7': {
			paddingRight: '214px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-7': {
			paddingLeft: '196px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-7': {
			paddingRight: '196px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-7 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-7 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-8': {
			paddingLeft: '242px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-8': {
			paddingRight: '242px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-8': {
			paddingLeft: '224px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-8': {
			paddingRight: '224px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-8 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-8 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-9': {
			paddingLeft: '270px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-9': {
			paddingRight: '270px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-9': {
			paddingLeft: '252px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-9': {
			paddingRight: '252px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-9 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-9 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-10': {
			paddingLeft: '298px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-10': {
			paddingRight: '298px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-10': {
			paddingLeft: '280px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-10': {
			paddingRight: '280px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-10 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-10 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-11': {
			paddingLeft: '326px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-11': {
			paddingRight: '326px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-11': {
			paddingLeft: '308px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-11': {
			paddingRight: '308px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-11 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-11 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-12': {
			paddingLeft: '354px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-12': {
			paddingRight: '354px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-12': {
			paddingLeft: '336px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-12': {
			paddingRight: '336px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-12 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-12 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-13': {
			paddingLeft: '382px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-13': {
			paddingRight: '382px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-13': {
			paddingLeft: '364px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-13': {
			paddingRight: '364px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-13 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-13 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-14': {
			paddingLeft: '410px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-14': {
			paddingRight: '410px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-14': {
			paddingLeft: '392px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-14': {
			paddingRight: '392px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-14 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-14 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-15': {
			paddingLeft: '438px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-15': {
			paddingRight: '438px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-15': {
			paddingLeft: '420px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-15': {
			paddingRight: '420px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-15 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-15 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-16': {
			paddingLeft: '466px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-16': {
			paddingRight: '466px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-16': {
			paddingLeft: '448px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-16': {
			paddingRight: '448px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-16 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-16 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-17': {
			paddingLeft: '494px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-17': {
			paddingRight: '494px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-17': {
			paddingLeft: '476px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-17': {
			paddingRight: '476px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-17 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-17 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-18': {
			paddingLeft: '522px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-18': {
			paddingRight: '522px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-18': {
			paddingLeft: '504px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-18': {
			paddingRight: '504px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-18 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-18 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-19': {
			paddingLeft: '550px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-19': {
			paddingRight: '550px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-19': {
			paddingLeft: '532px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-19': {
			paddingRight: '532px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-19 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-19 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-20': {
			paddingLeft: '578px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-20': {
			paddingRight: '578px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-20': {
			paddingLeft: '560px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-20': {
			paddingRight: '560px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-20 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-20 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-21': {
			paddingLeft: '606px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-21': {
			paddingRight: '606px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-21': {
			paddingLeft: '588px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-21': {
			paddingRight: '588px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-21 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-21 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-22': {
			paddingLeft: '634px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-22': {
			paddingRight: '634px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-22': {
			paddingLeft: '616px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-22': {
			paddingRight: '616px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-22 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-22 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-23': {
			paddingLeft: '662px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-23': {
			paddingRight: '662px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-23': {
			paddingLeft: '644px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-23': {
			paddingRight: '644px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-23 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-23 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-24': {
			paddingLeft: '690px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-24': {
			paddingRight: '690px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-24': {
			paddingLeft: '672px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-24': {
			paddingRight: '672px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-24 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-24 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-25': {
			paddingLeft: '718px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-25': {
			paddingRight: '718px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-25': {
			paddingLeft: '700px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-25': {
			paddingRight: '700px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-25 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-25 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-26': {
			paddingLeft: '746px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-26': {
			paddingRight: '746px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-26': {
			paddingLeft: '728px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-26': {
			paddingRight: '728px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-26 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-26 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-27': {
			paddingLeft: '774px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-27': {
			paddingRight: '774px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-27': {
			paddingLeft: '756px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-27': {
			paddingRight: '756px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-27 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-27 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-28': {
			paddingLeft: '802px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-28': {
			paddingRight: '802px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-28': {
			paddingLeft: '784px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-28': {
			paddingRight: '784px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-28 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-28 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-29': {
			paddingLeft: '830px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-29': {
			paddingRight: '830px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-29': {
			paddingLeft: '812px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-29': {
			paddingRight: '812px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-29 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-29 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-30': {
			paddingLeft: '858px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-30': {
			paddingRight: '858px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-30': {
			paddingLeft: '840px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-30': {
			paddingRight: '840px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-30 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-30 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-31': {
			paddingLeft: '886px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-31': {
			paddingRight: '886px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-31': {
			paddingLeft: '868px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-31': {
			paddingRight: '868px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-31 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-31 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-32': {
			paddingLeft: '914px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-32': {
			paddingRight: '914px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-32': {
			paddingLeft: '896px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-32': {
			paddingRight: '896px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-32 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-32 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-33': {
			paddingLeft: '942px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-33': {
			paddingRight: '942px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-33': {
			paddingLeft: '924px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-33': {
			paddingRight: '924px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-33 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-33 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-34': {
			paddingLeft: '970px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-34': {
			paddingRight: '970px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-34': {
			paddingLeft: '952px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-34': {
			paddingRight: '952px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-34 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-34 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-35': {
			paddingLeft: '998px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-35': {
			paddingRight: '998px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-35': {
			paddingLeft: '980px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-35': {
			paddingRight: '980px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-35 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-35 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-36': {
			paddingLeft: '1026px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-36': {
			paddingRight: '1026px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-36': {
			paddingLeft: '1008px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-36': {
			paddingRight: '1008px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-36 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-36 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-37': {
			paddingLeft: '1054px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-37': {
			paddingRight: '1054px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-37': {
			paddingLeft: '1036px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-37': {
			paddingRight: '1036px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-37 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-37 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-38': {
			paddingLeft: '1082px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-38': {
			paddingRight: '1082px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-38': {
			paddingLeft: '1064px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-38': {
			paddingRight: '1064px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-38 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-38 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-39': {
			paddingLeft: '1110px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-39': {
			paddingRight: '1110px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-39': {
			paddingLeft: '1092px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-39': {
			paddingRight: '1092px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-39 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-39 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-40': {
			paddingLeft: '1138px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-40': {
			paddingRight: '1138px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-40': {
			paddingLeft: '1120px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-40': {
			paddingRight: '1120px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-40 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-40 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-41': {
			paddingLeft: '1166px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-41': {
			paddingRight: '1166px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-41': {
			paddingLeft: '1148px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-41': {
			paddingRight: '1148px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-41 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-41 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-42': {
			paddingLeft: '1194px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-42': {
			paddingRight: '1194px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-42': {
			paddingLeft: '1176px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-42': {
			paddingRight: '1176px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-42 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-42 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-43': {
			paddingLeft: '1222px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-43': {
			paddingRight: '1222px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-43': {
			paddingLeft: '1204px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-43': {
			paddingRight: '1204px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-43 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-43 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-44': {
			paddingLeft: '1250px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-44': {
			paddingRight: '1250px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-44': {
			paddingLeft: '1232px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-44': {
			paddingRight: '1232px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-44 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-44 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-45': {
			paddingLeft: '1278px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-45': {
			paddingRight: '1278px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-45': {
			paddingLeft: '1260px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-45': {
			paddingRight: '1260px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-45 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-45 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-46': {
			paddingLeft: '1306px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-46': {
			paddingRight: '1306px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-46': {
			paddingLeft: '1288px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-46': {
			paddingRight: '1288px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-46 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-46 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-47': {
			paddingLeft: '1334px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-47': {
			paddingRight: '1334px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-47': {
			paddingLeft: '1316px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-47': {
			paddingRight: '1316px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-47 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-47 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-48': {
			paddingLeft: '1362px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-48': {
			paddingRight: '1362px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-48': {
			paddingLeft: '1344px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-48': {
			paddingRight: '1344px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-48 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-48 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-49': {
			paddingLeft: '1390px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-49': {
			paddingRight: '1390px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-49': {
			paddingLeft: '1372px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-49': {
			paddingRight: '1372px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-49 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-49 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-50': {
			paddingLeft: '1418px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-50': {
			paddingRight: '1418px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-50': {
			paddingLeft: '1400px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-50': {
			paddingRight: '1400px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-50 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-50 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-51': {
			paddingLeft: '1446px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-51': {
			paddingRight: '1446px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-51': {
			paddingLeft: '1428px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-51': {
			paddingRight: '1428px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-51 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-51 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-52': {
			paddingLeft: '1474px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-52': {
			paddingRight: '1474px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-52': {
			paddingLeft: '1456px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-52': {
			paddingRight: '1456px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-52 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-52 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-53': {
			paddingLeft: '1502px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-53': {
			paddingRight: '1502px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-53': {
			paddingLeft: '1484px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-53': {
			paddingRight: '1484px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-53 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-53 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-54': {
			paddingLeft: '1530px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-54': {
			paddingRight: '1530px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-54': {
			paddingLeft: '1512px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-54': {
			paddingRight: '1512px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-54 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-54 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-55': {
			paddingLeft: '1558px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-55': {
			paddingRight: '1558px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-55': {
			paddingLeft: '1540px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-55': {
			paddingRight: '1540px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-55 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-55 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-56': {
			paddingLeft: '1586px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-56': {
			paddingRight: '1586px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-56': {
			paddingLeft: '1568px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-56': {
			paddingRight: '1568px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-56 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-56 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-57': {
			paddingLeft: '1614px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-57': {
			paddingRight: '1614px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-57': {
			paddingLeft: '1596px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-57': {
			paddingRight: '1596px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-57 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-57 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-58': {
			paddingLeft: '1642px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-58': {
			paddingRight: '1642px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-58': {
			paddingLeft: '1624px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-58': {
			paddingRight: '1624px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-58 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-58 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-59': {
			paddingLeft: '1670px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-59': {
			paddingRight: '1670px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-59': {
			paddingLeft: '1652px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-59': {
			paddingRight: '1652px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-59 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-59 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-60': {
			paddingLeft: '1698px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-60': {
			paddingRight: '1698px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-60': {
			paddingLeft: '1680px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-60': {
			paddingRight: '1680px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-60 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-60 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-61': {
			paddingLeft: '1726px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-61': {
			paddingRight: '1726px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-61': {
			paddingLeft: '1708px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-61': {
			paddingRight: '1708px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-61 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-61 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-62': {
			paddingLeft: '1754px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-62': {
			paddingRight: '1754px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-62': {
			paddingLeft: '1736px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-62': {
			paddingRight: '1736px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-62 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-62 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-63': {
			paddingLeft: '1782px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-63': {
			paddingRight: '1782px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-63': {
			paddingLeft: '1764px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-63': {
			paddingRight: '1764px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-63 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-63 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-64': {
			paddingLeft: '1810px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-64': {
			paddingRight: '1810px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-64': {
			paddingLeft: '1792px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-64': {
			paddingRight: '1792px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-64 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-64 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-65': {
			paddingLeft: '1838px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-65': {
			paddingRight: '1838px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-65': {
			paddingLeft: '1820px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-65': {
			paddingRight: '1820px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-65 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-65 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-66': {
			paddingLeft: '1866px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-66': {
			paddingRight: '1866px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-66': {
			paddingLeft: '1848px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-66': {
			paddingRight: '1848px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-66 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-66 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-67': {
			paddingLeft: '1894px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-67': {
			paddingRight: '1894px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-67': {
			paddingLeft: '1876px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-67': {
			paddingRight: '1876px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-67 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-67 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-68': {
			paddingLeft: '1922px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-68': {
			paddingRight: '1922px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-68': {
			paddingLeft: '1904px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-68': {
			paddingRight: '1904px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-68 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-68 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-69': {
			paddingLeft: '1950px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-69': {
			paddingRight: '1950px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-69': {
			paddingLeft: '1932px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-69': {
			paddingRight: '1932px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-69 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-69 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-70': {
			paddingLeft: '1978px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-70': {
			paddingRight: '1978px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-70': {
			paddingLeft: '1960px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-70': {
			paddingRight: '1960px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-70 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-70 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-71': {
			paddingLeft: '2006px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-71': {
			paddingRight: '2006px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-71': {
			paddingLeft: '1988px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-71': {
			paddingRight: '1988px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-71 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-71 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-72': {
			paddingLeft: '2034px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-72': {
			paddingRight: '2034px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-72': {
			paddingLeft: '2016px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-72': {
			paddingRight: '2016px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-72 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-72 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-73': {
			paddingLeft: '2062px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-73': {
			paddingRight: '2062px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-73': {
			paddingLeft: '2044px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-73': {
			paddingRight: '2044px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-73 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-73 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-74': {
			paddingLeft: '2090px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-74': {
			paddingRight: '2090px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-74': {
			paddingLeft: '2072px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-74': {
			paddingRight: '2072px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-74 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-74 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-75': {
			paddingLeft: '2118px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-75': {
			paddingRight: '2118px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-75': {
			paddingLeft: '2100px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-75': {
			paddingRight: '2100px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-75 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-75 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-76': {
			paddingLeft: '2146px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-76': {
			paddingRight: '2146px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-76': {
			paddingLeft: '2128px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-76': {
			paddingRight: '2128px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-76 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-76 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-77': {
			paddingLeft: '2174px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-77': {
			paddingRight: '2174px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-77': {
			paddingLeft: '2156px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-77': {
			paddingRight: '2156px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-77 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-77 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-78': {
			paddingLeft: '2202px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-78': {
			paddingRight: '2202px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-78': {
			paddingLeft: '2184px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-78': {
			paddingRight: '2184px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-78 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-78 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-79': {
			paddingLeft: '2230px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-79': {
			paddingRight: '2230px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-79': {
			paddingLeft: '2212px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-79': {
			paddingRight: '2212px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-79 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-79 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-80': {
			paddingLeft: '2258px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-80': {
			paddingRight: '2258px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-80': {
			paddingLeft: '2240px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-80': {
			paddingRight: '2240px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-80 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-80 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-81': {
			paddingLeft: '2286px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-81': {
			paddingRight: '2286px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-81': {
			paddingLeft: '2268px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-81': {
			paddingRight: '2268px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-81 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-81 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-82': {
			paddingLeft: '2314px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-82': {
			paddingRight: '2314px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-82': {
			paddingLeft: '2296px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-82': {
			paddingRight: '2296px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-82 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-82 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-83': {
			paddingLeft: '2342px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-83': {
			paddingRight: '2342px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-83': {
			paddingLeft: '2324px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-83': {
			paddingRight: '2324px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-83 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-83 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-84': {
			paddingLeft: '2370px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-84': {
			paddingRight: '2370px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-84': {
			paddingLeft: '2352px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-84': {
			paddingRight: '2352px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-84 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-84 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-85': {
			paddingLeft: '2398px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-85': {
			paddingRight: '2398px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-85': {
			paddingLeft: '2380px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-85': {
			paddingRight: '2380px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-85 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-85 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-86': {
			paddingLeft: '2426px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-86': {
			paddingRight: '2426px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-86': {
			paddingLeft: '2408px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-86': {
			paddingRight: '2408px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-86 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-86 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-87': {
			paddingLeft: '2454px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-87': {
			paddingRight: '2454px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-87': {
			paddingLeft: '2436px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-87': {
			paddingRight: '2436px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-87 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-87 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-88': {
			paddingLeft: '2482px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-88': {
			paddingRight: '2482px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-88': {
			paddingLeft: '2464px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-88': {
			paddingRight: '2464px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-88 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-88 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-89': {
			paddingLeft: '2510px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-89': {
			paddingRight: '2510px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-89': {
			paddingLeft: '2492px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-89': {
			paddingRight: '2492px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-89 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-89 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-90': {
			paddingLeft: '2538px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-90': {
			paddingRight: '2538px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-90': {
			paddingLeft: '2520px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-90': {
			paddingRight: '2520px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-90 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-90 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-91': {
			paddingLeft: '2566px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-91': {
			paddingRight: '2566px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-91': {
			paddingLeft: '2548px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-91': {
			paddingRight: '2548px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-91 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-91 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-92': {
			paddingLeft: '2594px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-92': {
			paddingRight: '2594px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-92': {
			paddingLeft: '2576px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-92': {
			paddingRight: '2576px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-92 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-92 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-93': {
			paddingLeft: '2622px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-93': {
			paddingRight: '2622px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-93': {
			paddingLeft: '2604px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-93': {
			paddingRight: '2604px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-93 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-93 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-94': {
			paddingLeft: '2650px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-94': {
			paddingRight: '2650px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-94': {
			paddingLeft: '2632px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-94': {
			paddingRight: '2632px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-94 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-94 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-95': {
			paddingLeft: '2678px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-95': {
			paddingRight: '2678px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-95': {
			paddingLeft: '2660px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-95': {
			paddingRight: '2660px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-95 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-95 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-96': {
			paddingLeft: '2706px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-96': {
			paddingRight: '2706px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-96': {
			paddingLeft: '2688px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-96': {
			paddingRight: '2688px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-96 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-96 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-97': {
			paddingLeft: '2734px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-97': {
			paddingRight: '2734px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-97': {
			paddingLeft: '2716px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-97': {
			paddingRight: '2716px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-97 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-97 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-98': {
			paddingLeft: '2762px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-98': {
			paddingRight: '2762px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-98': {
			paddingLeft: '2744px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-98': {
			paddingRight: '2744px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-98 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-98 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-99': {
			paddingLeft: '2790px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-99': {
			paddingRight: '2790px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-indent-99': {
			paddingLeft: '2772px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-indent-99': {
			paddingRight: '2772px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-level-99 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-level-99 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-ltr .ag-row-group-leaf-indent': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine .ag-rtl .ag-row-group-leaf-indent': {
			marginRight: '28px',
		},
		'.ag-theme-alpine .ag-value-change-delta': {
			paddingRight: '2px',
		},
		'.ag-theme-alpine .ag-value-change-delta-up': {
			color: 'var(--ag-value-change-delta-up-color, #43a047)',
			fallbacks: [
				{
					color: '#43a047',
				},
			],
		},
		'.ag-theme-alpine .ag-value-change-delta-down': {
			color: 'var(--ag-value-change-delta-down-color, #e53935)',
			fallbacks: [
				{
					color: '#e53935',
				},
			],
		},
		'.ag-theme-alpine .ag-value-change-value': {
			backgroundColor: 'transparent',
			borderRadius: '1px',
			paddingLeft: '1px',
			paddingRight: '1px',
			transition: 'background-color 1s',
		},
		'.ag-theme-alpine .ag-value-change-value-highlight': {
			backgroundColor: 'var(--ag-value-change-value-highlight-background-color, rgba(22, 160, 133, 0.5))',
			fallbacks: [
				{
					backgroundColor: 'rgba(22, 160, 133, 0.5)',
				},
			],
			transition: 'background-color 0.1s',
		},
		'.ag-theme-alpine .ag-cell-data-changed': {
			backgroundColor:
				'var(--ag-value-change-value-highlight-background-color, rgba(22, 160, 133, 0.5)) !important',
			fallbacks: [
				{
					backgroundColor: 'rgba(22, 160, 133, 0.5) !important',
				},
			],
		},
		'.ag-theme-alpine .ag-cell-data-changed-animation': {
			backgroundColor: 'transparent',
		},
		'.ag-theme-alpine .ag-cell-highlight': {
			backgroundColor:
				'var(--ag-range-selection-highlight-color, var(--ag-range-selection-border-color, #2196f3)) !important',
			fallbacks: [
				{
					backgroundColor: '#2196f3 !important',
				},
			],
		},
		'.ag-theme-alpine .ag-row': {
			height: '42px',
			backgroundColor: 'var(--ag-background-color, #fff)',
			fallbacks: [
				{
					borderColor: '#dde2eb',
				},
				{
					color: '#181d1f',
				},
				{
					backgroundColor: '#fff',
				},
			],
			color: 'var(--ag-data-color, var(--ag-foreground-color, #181d1f))',
			borderWidth: '1px',
			borderColor: 'var(--ag-row-border-color, var(--ag-secondary-border-color, #dde2eb))',
			borderBottomStyle: 'solid',
			fontSize: '14px',
		},
		'.ag-theme-alpine .ag-row-highlight-above::after, .ag-theme-alpine .ag-row-highlight-below::after': {
			content: '',
			position: 'absolute',
			width: 'calc(100% - 1px)',
			height: '1px',
			backgroundColor: 'var(--ag-range-selection-border-color, #2196f3)',
			fallbacks: [
				{
					backgroundColor: '#2196f3',
				},
			],
			left: '1px',
		},
		'.ag-theme-alpine .ag-row-highlight-above::after': {
			top: '-1px',
		},
		'.ag-theme-alpine .ag-row-highlight-above.ag-row-first::after': {
			top: '0',
		},
		'.ag-theme-alpine .ag-row-highlight-below::after': {
			bottom: '0px',
		},
		'.ag-theme-alpine .ag-row-odd': {
			backgroundColor: 'var(--ag-odd-row-background-color, #fcfcfc)',
			fallbacks: [
				{
					backgroundColor: '#fcfcfc',
				},
			],
		},
		'.ag-theme-alpine .ag-body-horizontal-scroll:not(.ag-scrollbar-invisible) .ag-horizontal-left-spacer:not(.ag-scroller-corner)':
			{
				borderRight: 'solid 1px',
				borderRightColor: 'var(--ag-border-color, #babfc7)',
				fallbacks: [
					{
						borderRightColor: '#babfc7',
					},
				],
			},
		'.ag-theme-alpine .ag-body-horizontal-scroll:not(.ag-scrollbar-invisible) .ag-horizontal-right-spacer:not(.ag-scroller-corner)':
			{
				borderLeft: 'solid 1px',
				borderLeftColor: 'var(--ag-border-color, #babfc7)',
				fallbacks: [
					{
						borderLeftColor: '#babfc7',
					},
				],
			},
		'.ag-theme-alpine .ag-row-selected::before': {
			content: '',
			backgroundColor: 'var(--ag-selected-row-background-color, rgba(33, 150, 243, 0.3))',
			fallbacks: [
				{
					backgroundColor: 'rgba(33, 150, 243, 0.3)',
				},
			],
			display: 'block',
			position: 'absolute',
			top: '0',
			left: '0',
			right: '0',
			bottom: '0',
		},
		'.ag-theme-alpine .ag-row-hover:not(.ag-full-width-row)::before, .ag-theme-alpine .ag-row-hover.ag-full-width-row.ag-row-group::before':
			{
				content: '',
				backgroundColor: 'var(--ag-row-hover-color, rgba(33, 150, 243, 0.1))',
				fallbacks: [
					{
						backgroundColor: 'rgba(33, 150, 243, 0.1)',
					},
				],
				display: 'block',
				position: 'absolute',
				top: '0',
				left: '0',
				right: '0',
				bottom: '0',
				pointerEvents: 'none',
			},
		'.ag-theme-alpine .ag-row-hover.ag-row-selected::before': {
			backgroundColor: 'var(--ag-row-hover-color, rgba(33, 150, 243, 0.1))',
			fallbacks: [
				{
					backgroundColor: 'rgba(33, 150, 243, 0.1)',
				},
			],
			backgroundImage: 'linear-gradient(rgba(33, 150, 243, 0.3), rgba(33, 150, 243, 0.3))',
		},
		'.ag-theme-alpine .ag-row-hover.ag-full-width-row.ag-row-group > *': {
			position: 'relative',
		},
		'.ag-theme-alpine .ag-column-hover': {
			backgroundColor: 'var(--ag-column-hover-color, rgba(33, 150, 243, 0.1))',
			fallbacks: [
				{
					backgroundColor: 'rgba(33, 150, 243, 0.1)',
				},
			],
		},
		'.ag-theme-alpine .ag-ltr .ag-right-aligned-cell': {
			textAlign: 'right',
		},
		'.ag-theme-alpine .ag-rtl .ag-right-aligned-cell': {
			textAlign: 'left',
		},
		'.ag-theme-alpine .ag-ltr .ag-right-aligned-cell .ag-cell-value, .ag-theme-alpine .ag-ltr .ag-right-aligned-cell .ag-group-value':
			{
				marginLeft: 'auto',
			},
		'.ag-theme-alpine .ag-rtl .ag-right-aligned-cell .ag-cell-value, .ag-theme-alpine .ag-rtl .ag-right-aligned-cell .ag-group-value':
			{
				marginRight: 'auto',
			},
		'.ag-theme-alpine .ag-cell, .ag-theme-alpine .ag-full-width-row .ag-cell-wrapper.ag-row-group': {
			agInternalCalculatedLineHeight: 'var(--ag-line-height, 40px)',
			agInternalPaddedRowHeight: '40px',
			border: '1px solid transparent',
			lineHeight: 'min(var(--ag-internal-calculated-line-height), var(--ag-internal-padded-row-height))',
			paddingLeft: '17px',
			paddingRight: '17px',
			webkitFontSmoothing: 'subpixel-antialiased',
		},
		'.ag-theme-alpine .ag-row > .ag-cell-wrapper': {
			paddingLeft: '17px',
			paddingRight: '17px',
		},
		'.ag-theme-alpine .ag-row-dragging': {
			cursor: 'move',
			opacity: '0.5',
		},
		'.ag-theme-alpine .ag-cell-inline-editing': {
			border: 'solid 1px',
			borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4)) !important',
			fallbacks: [
				{
					borderColor: 'rgba(33, 150, 243, 0.4) !important',
				},
				{
					borderColor: 'var(--ag-border-color, #babfc7)',
				},
				{
					backgroundColor: '#f8f8f8',
				},
				{
					padding: '6px',
				},
				{
					background: '#fff',
				},
				{
					borderColor: '#babfc7',
				},
			],
			background: 'var(--ag-background-color, #fff)',
			borderRadius: '3px',
			boxShadow: '0 1px 4px 1px rgba(186, 191, 199, 0.4)',
			padding: '0',
			height: '42px',
			backgroundColor: 'var(--ag-control-panel-background-color, #f8f8f8)',
		},
		'.ag-theme-alpine .ag-popup-editor': {
			border: 'solid 1px',
			borderColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					padding: '6px',
				},
				{
					backgroundColor: '#f8f8f8',
				},
				{
					background: '#fff',
				},
				{
					borderColor: '#babfc7',
				},
			],
			background: 'var(--ag-background-color, #fff)',
			borderRadius: '3px',
			boxShadow: '0 1px 4px 1px rgba(186, 191, 199, 0.4)',
			padding: '0',
			backgroundColor: 'var(--ag-control-panel-background-color, #f8f8f8)',
		},
		'.ag-theme-alpine .ag-large-text-input': {
			height: 'auto',
			padding: '18px',
		},
		'.ag-theme-alpine .ag-details-row': {
			padding: '30px',
			backgroundColor: 'var(--ag-background-color, #fff)',
			fallbacks: [
				{
					backgroundColor: '#fff',
				},
			],
		},
		'.ag-theme-alpine .ag-layout-auto-height .ag-center-cols-clipper, .ag-theme-alpine .ag-layout-auto-height .ag-center-cols-container, .ag-theme-alpine .ag-layout-print .ag-center-cols-clipper, .ag-theme-alpine .ag-layout-print .ag-center-cols-container':
			{
				minHeight: '150px',
				fallbacks: [
					{
						minHeight: '50px',
					},
				],
			},
		'.ag-theme-alpine .ag-overlay-loading-wrapper': {
			backgroundColor: 'var(--ag-modal-overlay-background-color, rgba(255, 255, 255, 0.66))',
			fallbacks: [
				{
					backgroundColor: 'rgba(255, 255, 255, 0.66)',
				},
			],
		},
		'.ag-theme-alpine .ag-overlay-loading-center': {
			border: 'solid 1px',
			borderColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					background: '#fff',
				},
				{
					borderColor: '#babfc7',
				},
			],
			background: 'var(--ag-background-color, #fff)',
			borderRadius: '3px',
			boxShadow: '0 1px 4px 1px rgba(186, 191, 199, 0.4)',
			padding: '6px',
		},
		'.ag-theme-alpine .ag-overlay-no-rows-wrapper.ag-layout-auto-height': {
			paddingTop: '60px',
			fallbacks: [
				{
					paddingTop: '30px',
				},
			],
		},
		'.ag-theme-alpine .ag-loading': {
			display: 'flex',
			height: '100%',
			alignItems: 'center',
		},
		'.ag-theme-alpine .ag-ltr .ag-loading': {
			paddingLeft: '18px',
		},
		'.ag-theme-alpine .ag-rtl .ag-loading': {
			paddingRight: '18px',
		},
		'.ag-theme-alpine .ag-ltr .ag-loading-icon': {
			paddingRight: '12px',
		},
		'.ag-theme-alpine .ag-rtl .ag-loading-icon': {
			paddingLeft: '12px',
		},
		'.ag-theme-alpine .ag-icon-loading': {
			animationName: 'spin',
			animationDuration: '1000ms',
			animationIterationCount: 'infinite',
			animationTimingFunction: 'linear',
		},
		'@keyframes spin': {
			from: {
				transform: 'rotate(0deg)',
			},
			to: {
				transform: 'rotate(360deg)',
			},
		},
		'.ag-theme-alpine .ag-floating-top': {
			borderBottom: 'solid 1px',
			borderBottomColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderBottomColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine .ag-floating-bottom': {
			borderTop: 'solid 1px',
			borderTopColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderTopColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine .ag-ltr .ag-cell': {
			borderRight: 'solid transparent',
			borderRightWidth: '1px',
		},
		'.ag-theme-alpine .ag-rtl .ag-cell': {
			borderLeft: 'solid transparent',
			borderLeftWidth: '1px',
		},
		'.ag-theme-alpine .ag-cell.ag-cell-first-right-pinned:not(.ag-cell-range-left):not(.ag-cell-range-single-cell)':
			{
				borderLeft: 'solid 1px',
				borderLeftColor: 'var(--ag-border-color, #babfc7)',
				fallbacks: [
					{
						borderLeftColor: '#babfc7',
					},
				],
			},
		'.ag-theme-alpine .ag-cell.ag-cell-last-left-pinned:not(.ag-cell-range-right):not(.ag-cell-range-single-cell)':
			{
				borderRight: 'solid 1px',
				borderRightColor: 'var(--ag-border-color, #babfc7)',
				fallbacks: [
					{
						borderRightColor: '#babfc7',
					},
				],
			},
		'.ag-theme-alpine .ag-cell-range-selected:not(.ag-cell-focus), .ag-theme-alpine .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-single-cell:not(.ag-cell-inline-editing)':
			{
				backgroundColor: 'var(--ag-range-selection-background-color, rgba(33, 150, 243, 0.2))',
				fallbacks: [
					{
						backgroundColor: 'rgba(33, 150, 243, 0.2)',
					},
				],
			},
		'.ag-theme-alpine .ag-cell-range-selected:not(.ag-cell-focus).ag-cell-range-chart, .ag-theme-alpine .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-single-cell:not(.ag-cell-inline-editing).ag-cell-range-chart':
			{
				backgroundColor: 'var(--ag-range-selection-chart-background-color, rgba(0, 88, 255, 0.1)) !important',
				fallbacks: [
					{
						backgroundColor: 'rgba(0, 88, 255, 0.1) !important',
					},
				],
			},
		'.ag-theme-alpine .ag-cell-range-selected:not(.ag-cell-focus).ag-cell-range-chart.ag-cell-range-chart-category, .ag-theme-alpine .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-single-cell:not(.ag-cell-inline-editing).ag-cell-range-chart.ag-cell-range-chart-category':
			{
				backgroundColor:
					'var(--ag-range-selection-chart-category-background-color, rgba(0, 255, 132, 0.1)) !important',
				fallbacks: [
					{
						backgroundColor: 'rgba(0, 255, 132, 0.1) !important',
					},
				],
			},
		'.ag-theme-alpine .ag-cell-range-selected-1:not(.ag-cell-focus), .ag-theme-alpine .ag-root:not(.ag-context-menu-open) .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-selected-1:not(.ag-cell-inline-editing)':
			{
				backgroundColor:
					'var(--ag-range-selection-background-color-1, var(--ag-range-selection-background-color, rgba(33, 150, 243, 0.2)))',
				fallbacks: [
					{
						backgroundColor: 'rgba(33, 150, 243, 0.2)',
					},
				],
			},
		'.ag-theme-alpine .ag-cell-range-selected-2:not(.ag-cell-focus), .ag-theme-alpine .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-selected-2':
			{
				backgroundColor: 'var(--ag-range-selection-background-color-2, rgba(33, 150, 243, 0.36))',
				fallbacks: [
					{
						backgroundColor: 'rgba(33, 150, 243, 0.36)',
					},
				],
			},
		'.ag-theme-alpine .ag-cell-range-selected-3:not(.ag-cell-focus), .ag-theme-alpine .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-selected-3':
			{
				backgroundColor: 'var(--ag-range-selection-background-color-3, rgba(33, 150, 243, 0.488))',
				fallbacks: [
					{
						backgroundColor: 'rgba(33, 150, 243, 0.488)',
					},
				],
			},
		'.ag-theme-alpine .ag-cell-range-selected-4:not(.ag-cell-focus), .ag-theme-alpine .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-selected-4':
			{
				backgroundColor: 'var(--ag-range-selection-background-color-4, rgba(33, 150, 243, 0.5904))',
				fallbacks: [
					{
						backgroundColor: 'rgba(33, 150, 243, 0.5904)',
					},
				],
			},
		'.ag-theme-alpine .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-top': {
			borderTopColor: 'var(--ag-range-selection-border-color, #2196f3)',
			fallbacks: [
				{
					borderTopColor: '#2196f3',
				},
			],
		},
		'.ag-theme-alpine .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-right': {
			borderRightColor: 'var(--ag-range-selection-border-color, #2196f3)',
			fallbacks: [
				{
					borderRightColor: '#2196f3',
				},
			],
		},
		'.ag-theme-alpine .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-bottom': {
			borderBottomColor: 'var(--ag-range-selection-border-color, #2196f3)',
			fallbacks: [
				{
					borderBottomColor: '#2196f3',
				},
			],
		},
		'.ag-theme-alpine .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-left': {
			borderLeftColor: 'var(--ag-range-selection-border-color, #2196f3)',
			fallbacks: [
				{
					borderLeftColor: '#2196f3',
				},
			],
		},
		'.ag-theme-alpine .ag-ltr .ag-cell-focus:not(.ag-cell-range-selected):focus-within, .ag-theme-alpine .ag-ltr .ag-context-menu-open .ag-cell-focus:not(.ag-cell-range-selected), .ag-theme-alpine .ag-ltr .ag-full-width-row.ag-row-focus:focus .ag-cell-wrapper.ag-row-group, .ag-theme-alpine .ag-ltr .ag-cell-range-single-cell, .ag-theme-alpine .ag-ltr .ag-cell-range-single-cell.ag-cell-range-handle, .ag-theme-alpine .ag-rtl .ag-cell-focus:not(.ag-cell-range-selected):focus-within, .ag-theme-alpine .ag-rtl .ag-context-menu-open .ag-cell-focus:not(.ag-cell-range-selected), .ag-theme-alpine .ag-rtl .ag-full-width-row.ag-row-focus:focus .ag-cell-wrapper.ag-row-group, .ag-theme-alpine .ag-rtl .ag-cell-range-single-cell, .ag-theme-alpine .ag-rtl .ag-cell-range-single-cell.ag-cell-range-handle':
			{
				border: '1px solid',
				borderColor: 'var(--ag-range-selection-border-color, #2196f3)',
				fallbacks: [
					{
						borderColor: '#2196f3',
					},
				],
				outline: 'initial',
			},
		'.ag-theme-alpine .ag-cell.ag-selection-fill-top, .ag-theme-alpine .ag-cell.ag-selection-fill-top.ag-cell-range-selected':
			{
				borderTop: '1px dashed',
				borderTopColor: 'var(--ag-range-selection-border-color, #2196f3)',
				fallbacks: [
					{
						borderTopColor: '#2196f3',
					},
				],
			},
		'.ag-theme-alpine .ag-ltr .ag-cell.ag-selection-fill-right, .ag-theme-alpine .ag-ltr .ag-cell.ag-selection-fill-right.ag-cell-range-selected':
			{
				borderRight: '1px dashed !important',
				borderRightColor: 'var(--ag-range-selection-border-color, #2196f3) !important',
				fallbacks: [
					{
						borderRightColor: '#2196f3 !important',
					},
				],
			},
		'.ag-theme-alpine .ag-rtl .ag-cell.ag-selection-fill-right, .ag-theme-alpine .ag-rtl .ag-cell.ag-selection-fill-right.ag-cell-range-selected':
			{
				borderLeft: '1px dashed !important',
				borderLeftColor: 'var(--ag-range-selection-border-color, #2196f3) !important',
				fallbacks: [
					{
						borderLeftColor: '#2196f3 !important',
					},
				],
			},
		'.ag-theme-alpine .ag-cell.ag-selection-fill-bottom, .ag-theme-alpine .ag-cell.ag-selection-fill-bottom.ag-cell-range-selected':
			{
				borderBottom: '1px dashed',
				borderBottomColor: 'var(--ag-range-selection-border-color, #2196f3)',
				fallbacks: [
					{
						borderBottomColor: '#2196f3',
					},
				],
			},
		'.ag-theme-alpine .ag-ltr .ag-cell.ag-selection-fill-left, .ag-theme-alpine .ag-ltr .ag-cell.ag-selection-fill-left.ag-cell-range-selected':
			{
				borderLeft: '1px dashed !important',
				borderLeftColor: 'var(--ag-range-selection-border-color, #2196f3) !important',
				fallbacks: [
					{
						borderLeftColor: '#2196f3 !important',
					},
				],
			},
		'.ag-theme-alpine .ag-rtl .ag-cell.ag-selection-fill-left, .ag-theme-alpine .ag-rtl .ag-cell.ag-selection-fill-left.ag-cell-range-selected':
			{
				borderRight: '1px dashed !important',
				borderRightColor: 'var(--ag-range-selection-border-color, #2196f3) !important',
				fallbacks: [
					{
						borderRightColor: '#2196f3 !important',
					},
				],
			},
		'.ag-theme-alpine .ag-theme-alpine-fusion .ag-range-handle, .ag-theme-alpine-fusion .ag-theme-alpine .ag-range-handle, .ag-theme-alpine .ag-theme-alpine-fusion .ag-fill-handle, .ag-theme-alpine-fusion .ag-theme-alpine .ag-fill-handle, .ag-theme-alpine .ag-range-handle, .ag-theme-alpine .ag-fill-handle':
			{
				position: 'absolute',
				width: '6px',
				height: '6px',
				bottom: '-1px',
				backgroundColor: 'var(--ag-range-selection-border-color, #2196f3)',
				fallbacks: [
					{
						backgroundColor: '#2196f3',
					},
				],
			},
		'.ag-theme-alpine .ag-ltr .ag-theme-alpine-fusion .ag-range-handle, .ag-theme-alpine-fusion .ag-theme-alpine .ag-ltr .ag-range-handle, .ag-theme-alpine .ag-ltr .ag-theme-alpine-fusion .ag-fill-handle, .ag-theme-alpine-fusion .ag-theme-alpine .ag-ltr .ag-fill-handle, .ag-theme-alpine .ag-ltr .ag-range-handle, .ag-theme-alpine .ag-ltr .ag-fill-handle':
			{
				right: '-1px',
			},
		'.ag-theme-alpine .ag-rtl .ag-theme-alpine-fusion .ag-range-handle, .ag-theme-alpine-fusion .ag-theme-alpine .ag-rtl .ag-range-handle, .ag-theme-alpine .ag-rtl .ag-theme-alpine-fusion .ag-fill-handle, .ag-theme-alpine-fusion .ag-theme-alpine .ag-rtl .ag-fill-handle, .ag-theme-alpine .ag-rtl .ag-range-handle, .ag-theme-alpine .ag-rtl .ag-fill-handle':
			{
				left: '-1px',
			},
		'.ag-theme-alpine .ag-fill-handle': {
			cursor: 'cell',
		},
		'.ag-theme-alpine .ag-range-handle': {
			cursor: 'nwse-resize',
		},
		'.ag-theme-alpine .ag-menu': {
			border: 'solid 1px',
			borderColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					backgroundColor: '#f8f8f8',
				},
				{
					padding: '6px',
				},
				{
					background: '#fff',
				},
				{
					borderColor: '#babfc7',
				},
			],
			background: 'var(--ag-background-color, #fff)',
			borderRadius: '3px',
			boxShadow: '0 1px 4px 1px rgba(186, 191, 199, 0.4)',
			padding: '0',
			backgroundColor: 'var(--ag-control-panel-background-color, #f8f8f8)',
		},
		'.ag-theme-alpine .ag-menu-list': {
			cursor: 'default',
			padding: '6px 0',
		},
		'.ag-theme-alpine .ag-menu-separator': {
			height: '13px',
		},
		'.ag-theme-alpine .ag-menu-separator-part::after': {
			content: '',
			display: 'block',
			borderTop: 'solid 1px',
			borderTopColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderTopColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine .ag-menu-option-active, .ag-theme-alpine .ag-compact-menu-option-active': {
			backgroundColor: 'var(--ag-row-hover-color, rgba(33, 150, 243, 0.1))',
			fallbacks: [
				{
					backgroundColor: 'rgba(33, 150, 243, 0.1)',
				},
			],
		},
		'.ag-theme-alpine .ag-menu-option-part, .ag-theme-alpine .ag-compact-menu-option-part': {
			lineHeight: '16px',
			padding: '8px 0',
		},
		'.ag-theme-alpine .ag-menu-option-disabled, .ag-theme-alpine .ag-compact-menu-option-disabled': {
			opacity: '0.5',
		},
		'.ag-theme-alpine .ag-menu-option-icon, .ag-theme-alpine .ag-compact-menu-option-icon': {
			width: '16px',
		},
		'.ag-theme-alpine .ag-ltr .ag-menu-option-icon, .ag-theme-alpine .ag-ltr .ag-compact-menu-option-icon': {
			paddingLeft: '12px',
		},
		'.ag-theme-alpine .ag-rtl .ag-menu-option-icon, .ag-theme-alpine .ag-rtl .ag-compact-menu-option-icon': {
			paddingRight: '12px',
		},
		'.ag-theme-alpine .ag-menu-option-text, .ag-theme-alpine .ag-compact-menu-option-text': {
			paddingLeft: '12px',
			paddingRight: '12px',
		},
		'.ag-theme-alpine .ag-ltr .ag-menu-option-shortcut, .ag-theme-alpine .ag-ltr .ag-compact-menu-option-shortcut':
			{
				paddingRight: '6px',
			},
		'.ag-theme-alpine .ag-rtl .ag-menu-option-shortcut, .ag-theme-alpine .ag-rtl .ag-compact-menu-option-shortcut':
			{
				paddingLeft: '6px',
			},
		'.ag-theme-alpine .ag-menu-option-popup-pointer, .ag-theme-alpine .ag-compact-menu-option-popup-pointer': {
			paddingRight: '6px',
		},
		'.ag-theme-alpine .ag-tabs': {
			minWidth: '240px',
		},
		'.ag-theme-alpine .ag-tabs-header': {
			width: '100%',
			display: 'flex',
			borderBottom: 'solid 1px',
			borderBottomColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderBottomColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine .ag-tab': {
			borderBottom: '2px solid transparent',
			display: 'flex',
			flex: '1 1 auto',
			alignItems: 'center',
			justifyContent: 'center',
			cursor: 'pointer',
			fallbacks: [
				{
					transition: 'border-bottom 0.3s',
				},
				{
					flex: 'none',
				},
			],
			transition: 'color 0.4s',
			padding: '9px',
		},
		'.ag-theme-alpine .ag-keyboard-focus .ag-tab:focus': {
			outline: 'none',
		},
		'.ag-theme-alpine .ag-keyboard-focus .ag-tab:focus::after': {
			content: '',
			position: 'absolute',
			backgroundColor: 'transparent',
			pointerEvents: 'none',
			top: '4px',
			left: '4px',
			display: 'block',
			width: 'calc(100% - 8px)',
			height: 'calc(100% - 8px)',
			border: '1px solid',
			borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					borderColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine .ag-tab-selected': {
			borderBottomColor: 'var(--ag-selected-tab-underline-color, var(--ag-alpine-active-color, #2196f3))',
			fallbacks: [
				{
					color: '#2196f3',
				},
				{
					borderBottomColor: '#2196f3',
				},
			],
			color: 'var(--ag-alpine-active-color, #2196f3)',
		},
		'.ag-theme-alpine .ag-menu-header': {
			color: 'var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))',
			fallbacks: [
				{
					backgroundColor: '#f8f8f8',
				},
				{
					color: '#181d1f',
				},
			],
			backgroundColor: 'var(--ag-control-panel-background-color, #f8f8f8)',
			paddingTop: '1px',
		},
		'.ag-theme-alpine .ag-filter-separator': {
			borderTop: 'solid 1px',
			borderTopColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderTopColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine .ag-menu:not(.ag-tabs) .ag-filter-select': {
			minWidth: '155px',
		},
		'.ag-theme-alpine .ag-tabs .ag-filter-select': {
			minWidth: '214px',
		},
		'.ag-theme-alpine .ag-filter-select .ag-picker-field-wrapper': {
			width: '0',
		},
		'.ag-theme-alpine .ag-filter-condition-operator': {
			height: '17px',
		},
		'.ag-theme-alpine .ag-ltr .ag-filter-condition-operator-or': {
			marginLeft: '12px',
		},
		'.ag-theme-alpine .ag-rtl .ag-filter-condition-operator-or': {
			marginRight: '12px',
		},
		'.ag-theme-alpine .ag-set-filter-select-all': {
			paddingTop: '12px',
		},
		'.ag-theme-alpine .ag-set-filter-list, .ag-theme-alpine .ag-filter-no-matches': {
			height: '144px',
		},
		'.ag-theme-alpine .ag-set-filter-filter': {
			marginTop: '12px',
			marginLeft: '12px',
			marginRight: '12px',
		},
		'.ag-theme-alpine .ag-filter-to': {
			marginTop: '9px',
		},
		'.ag-theme-alpine .ag-mini-filter': {
			margin: '12px 12px',
		},
		'.ag-theme-alpine .ag-set-filter-item': {
			margin: '0px 12px',
		},
		'.ag-theme-alpine .ag-ltr .ag-set-filter-item-value': {
			marginLeft: '12px',
		},
		'.ag-theme-alpine .ag-rtl .ag-set-filter-item-value': {
			marginRight: '12px',
		},
		'.ag-theme-alpine .ag-filter-apply-panel': {
			padding: '12px 12px',
			borderTop: 'solid 1px',
			borderTopColor: 'var(--ag-secondary-border-color, #dde2eb)',
			fallbacks: [
				{
					borderTopColor: '#dde2eb',
				},
			],
		},
		'.ag-theme-alpine .ag-filter-apply-panel-button': {
			lineHeight: '1.5',
		},
		'.ag-theme-alpine .ag-ltr .ag-filter-apply-panel-button': {
			marginLeft: '12px',
		},
		'.ag-theme-alpine .ag-rtl .ag-filter-apply-panel-button': {
			marginRight: '12px',
		},
		'.ag-theme-alpine .ag-simple-filter-body-wrapper': {
			padding: '12px 12px',
			paddingBottom: '3px',
		},
		'.ag-theme-alpine .ag-simple-filter-body-wrapper > *': {
			marginBottom: '9px',
		},
		'.ag-theme-alpine .ag-filter-no-matches': {
			padding: '12px 12px',
		},
		'.ag-theme-alpine .ag-multi-filter-menu-item': {
			margin: '6px 0',
		},
		'.ag-theme-alpine .ag-multi-filter-group-title-bar': {
			padding: '12px 6px',
			backgroundColor: 'transparent',
		},
		'.ag-theme-alpine .ag-keyboard-focus .ag-multi-filter-group-title-bar:focus': {
			outline: 'none',
		},
		'.ag-theme-alpine .ag-keyboard-focus .ag-multi-filter-group-title-bar:focus::after': {
			content: '',
			position: 'absolute',
			backgroundColor: 'transparent',
			pointerEvents: 'none',
			top: '4px',
			left: '4px',
			display: 'block',
			width: 'calc(100% - 8px)',
			height: 'calc(100% - 8px)',
			border: '1px solid',
			borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					borderColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine .ag-side-bar': {
			position: 'relative',
		},
		'.ag-theme-alpine .ag-tool-panel-wrapper': {
			width: '250px',
			backgroundColor: 'var(--ag-control-panel-background-color, #f8f8f8)',
			fallbacks: [
				{
					backgroundColor: '#f8f8f8',
				},
			],
		},
		'.ag-theme-alpine .ag-side-buttons': {
			paddingTop: '24px',
			width: '30px',
			position: 'relative',
			color: 'var(--ag-foreground-color, #181d1f)',
			fallbacks: [
				{
					width: '20px',
				},
				{
					color: '#181d1f',
				},
			],
			overflow: 'hidden',
		},
		'.ag-theme-alpine button.ag-side-button-button': {
			color: 'inherit',
			fontFamily: 'inherit',
			fontSize: 'inherit',
			fontWeight: 'inherit',
			lineHeight: 'inherit',
			background: 'transparent',
			padding: '12px 0 12px 0',
			width: '100%',
			margin: '0',
			minHeight: '108px',
			backgroundPositionY: 'center',
			backgroundPositionX: 'center',
			backgroundRepeat: 'no-repeat',
			border: 'none',
		},
		'.ag-theme-alpine button.ag-side-button-button:focus': {
			boxShadow: 'none',
		},
		'.ag-theme-alpine .ag-keyboard-focus .ag-side-button-button:focus': {
			outline: 'none',
		},
		'.ag-theme-alpine .ag-keyboard-focus .ag-side-button-button:focus::after': {
			content: '',
			position: 'absolute',
			backgroundColor: 'transparent',
			pointerEvents: 'none',
			top: '4px',
			left: '4px',
			display: 'block',
			width: 'calc(100% - 8px)',
			height: 'calc(100% - 8px)',
			border: '1px solid',
			borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					borderColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine .ag-side-button-icon-wrapper': {
			marginBottom: '3px',
		},
		'.ag-theme-alpine .ag-ltr .ag-side-bar-left, .ag-theme-alpine .ag-rtl .ag-side-bar-right': {
			borderRight: 'solid 1px',
			borderRightColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderRightColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine .ag-ltr .ag-side-bar-left .ag-tool-panel-wrapper, .ag-theme-alpine .ag-rtl .ag-side-bar-right .ag-tool-panel-wrapper':
			{
				borderLeft: 'solid 1px',
				borderLeftColor: 'var(--ag-border-color, #babfc7)',
				fallbacks: [
					{
						borderLeftColor: '#babfc7',
					},
				],
			},
		'.ag-theme-alpine .ag-ltr .ag-side-bar-left .ag-side-button-button, .ag-theme-alpine .ag-rtl .ag-side-bar-right .ag-side-button-button':
			{
				borderRight: '2px solid transparent',
				transition: 'border-right 0.3s',
			},
		'.ag-theme-alpine .ag-ltr .ag-side-bar-left .ag-selected .ag-side-button-button, .ag-theme-alpine .ag-rtl .ag-side-bar-right .ag-selected .ag-side-button-button':
			{
				borderRightColor: 'var(--ag-selected-tab-underline-color, var(--ag-alpine-active-color, #2196f3))',
				fallbacks: [
					{
						borderRightColor: '#2196f3',
					},
				],
			},
		'.ag-theme-alpine .ag-rtl .ag-side-bar-left, .ag-theme-alpine .ag-ltr .ag-side-bar-right': {
			borderLeft: 'solid 1px',
			borderLeftColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderLeftColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine .ag-rtl .ag-side-bar-left .ag-tool-panel-wrapper, .ag-theme-alpine .ag-ltr .ag-side-bar-right .ag-tool-panel-wrapper':
			{
				borderRight: 'solid 1px',
				borderRightColor: 'var(--ag-border-color, #babfc7)',
				fallbacks: [
					{
						borderRightColor: '#babfc7',
					},
				],
			},
		'.ag-theme-alpine .ag-rtl .ag-side-bar-left .ag-side-button-button, .ag-theme-alpine .ag-ltr .ag-side-bar-right .ag-side-button-button':
			{
				borderLeft: '2px solid transparent',
				transition: 'border-left 0.3s',
			},
		'.ag-theme-alpine .ag-rtl .ag-side-bar-left .ag-selected .ag-side-button-button, .ag-theme-alpine .ag-ltr .ag-side-bar-right .ag-selected .ag-side-button-button':
			{
				borderLeftColor: 'var(--ag-selected-tab-underline-color, var(--ag-alpine-active-color, #2196f3))',
				fallbacks: [
					{
						borderLeftColor: '#2196f3',
					},
				],
			},
		'.ag-theme-alpine .ag-filter-toolpanel-header': {
			height: '36px',
		},
		'.ag-theme-alpine .ag-ltr .ag-filter-toolpanel-header, .ag-theme-alpine .ag-ltr .ag-filter-toolpanel-search': {
			paddingLeft: '6px',
		},
		'.ag-theme-alpine .ag-rtl .ag-filter-toolpanel-header, .ag-theme-alpine .ag-rtl .ag-filter-toolpanel-search': {
			paddingRight: '6px',
		},
		'.ag-theme-alpine .ag-keyboard-focus .ag-filter-toolpanel-header:focus': {
			outline: 'none',
		},
		'.ag-theme-alpine .ag-keyboard-focus .ag-filter-toolpanel-header:focus::after': {
			content: '',
			position: 'absolute',
			backgroundColor: 'transparent',
			pointerEvents: 'none',
			top: '4px',
			left: '4px',
			display: 'block',
			width: 'calc(100% - 8px)',
			height: 'calc(100% - 8px)',
			border: '1px solid',
			borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					borderColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine .ag-filter-toolpanel-group.ag-has-filter > .ag-group-title-bar .ag-group-title::after': {
			fontFamily: 'agGridAlpine',
			fontSize: '16px',
			lineHeight: '16px',
			fontStyle: 'normal',
			fontWeight: 'normal',
			fontVariant: 'normal',
			textTransform: 'none',
			webkitFontSmoothing: 'antialiased',
			mozOsxFontSmoothing: 'grayscale',
			content: '\f114',
			position: 'absolute',
		},
		'.ag-theme-alpine .ag-ltr .ag-filter-toolpanel-group.ag-has-filter > .ag-group-title-bar .ag-group-title::after':
			{
				paddingLeft: '6px',
			},
		'.ag-theme-alpine .ag-rtl .ag-filter-toolpanel-group.ag-has-filter > .ag-group-title-bar .ag-group-title::after':
			{
				paddingRight: '6px',
			},
		'.ag-theme-alpine .ag-filter-toolpanel-group-level-0-header': {
			height: '48px',
		},
		'.ag-theme-alpine .ag-filter-toolpanel-group-item': {
			marginTop: '3px',
			marginBottom: '3px',
		},
		'.ag-theme-alpine .ag-filter-toolpanel-search': {
			height: '48px',
		},
		'.ag-theme-alpine .ag-filter-toolpanel-search-input': {
			flexGrow: '1',
			height: '24px',
		},
		'.ag-theme-alpine .ag-ltr .ag-filter-toolpanel-search-input': {
			marginRight: '6px',
		},
		'.ag-theme-alpine .ag-rtl .ag-filter-toolpanel-search-input': {
			marginLeft: '6px',
		},
		'.ag-theme-alpine .ag-filter-toolpanel-group-level-0': {
			borderTop: 'solid 1px',
			borderTopColor: 'var(--ag-secondary-border-color, #dde2eb)',
			fallbacks: [
				{
					borderTopColor: '#dde2eb',
				},
			],
		},
		'.ag-theme-alpine .ag-ltr .ag-filter-toolpanel-expand, .ag-theme-alpine .ag-ltr .ag-filter-toolpanel-group-title-bar-icon':
			{
				marginRight: '6px',
			},
		'.ag-theme-alpine .ag-rtl .ag-filter-toolpanel-expand, .ag-theme-alpine .ag-rtl .ag-filter-toolpanel-group-title-bar-icon':
			{
				marginLeft: '6px',
			},
		'.ag-theme-alpine .ag-filter-toolpanel-group-level-1 .ag-filter-toolpanel-group-level-1-header.ag-filter-toolpanel-group-title-bar':
			{
				backgroundColor: 'transparent',
			},
		'.ag-theme-alpine .ag-ltr .ag-filter-toolpanel-group-level-1 .ag-filter-toolpanel-group-level-2-header': {
			paddingLeft: '22px',
		},
		'.ag-theme-alpine .ag-rtl .ag-filter-toolpanel-group-level-1 .ag-filter-toolpanel-group-level-2-header': {
			paddingRight: '22px',
		},
		'.ag-theme-alpine .ag-filter-toolpanel-group-level-2 .ag-filter-toolpanel-group-level-2-header.ag-filter-toolpanel-group-title-bar':
			{
				backgroundColor: 'transparent',
			},
		'.ag-theme-alpine .ag-ltr .ag-filter-toolpanel-group-level-2 .ag-filter-toolpanel-group-level-3-header': {
			paddingLeft: '38px',
		},
		'.ag-theme-alpine .ag-rtl .ag-filter-toolpanel-group-level-2 .ag-filter-toolpanel-group-level-3-header': {
			paddingRight: '38px',
		},
		'.ag-theme-alpine .ag-filter-toolpanel-group-level-3 .ag-filter-toolpanel-group-level-3-header.ag-filter-toolpanel-group-title-bar':
			{
				backgroundColor: 'transparent',
			},
		'.ag-theme-alpine .ag-ltr .ag-filter-toolpanel-group-level-3 .ag-filter-toolpanel-group-level-4-header': {
			paddingLeft: '54px',
		},
		'.ag-theme-alpine .ag-rtl .ag-filter-toolpanel-group-level-3 .ag-filter-toolpanel-group-level-4-header': {
			paddingRight: '54px',
		},
		'.ag-theme-alpine .ag-filter-toolpanel-group-level-4 .ag-filter-toolpanel-group-level-4-header.ag-filter-toolpanel-group-title-bar':
			{
				backgroundColor: 'transparent',
			},
		'.ag-theme-alpine .ag-ltr .ag-filter-toolpanel-group-level-4 .ag-filter-toolpanel-group-level-5-header': {
			paddingLeft: '70px',
		},
		'.ag-theme-alpine .ag-rtl .ag-filter-toolpanel-group-level-4 .ag-filter-toolpanel-group-level-5-header': {
			paddingRight: '70px',
		},
		'.ag-theme-alpine .ag-filter-toolpanel-group-level-5 .ag-filter-toolpanel-group-level-5-header.ag-filter-toolpanel-group-title-bar':
			{
				backgroundColor: 'transparent',
			},
		'.ag-theme-alpine .ag-ltr .ag-filter-toolpanel-group-level-5 .ag-filter-toolpanel-group-level-6-header': {
			paddingLeft: '86px',
		},
		'.ag-theme-alpine .ag-rtl .ag-filter-toolpanel-group-level-5 .ag-filter-toolpanel-group-level-6-header': {
			paddingRight: '86px',
		},
		'.ag-theme-alpine .ag-filter-toolpanel-group-level-6 .ag-filter-toolpanel-group-level-6-header.ag-filter-toolpanel-group-title-bar':
			{
				backgroundColor: 'transparent',
			},
		'.ag-theme-alpine .ag-ltr .ag-filter-toolpanel-group-level-6 .ag-filter-toolpanel-group-level-7-header': {
			paddingLeft: '102px',
		},
		'.ag-theme-alpine .ag-rtl .ag-filter-toolpanel-group-level-6 .ag-filter-toolpanel-group-level-7-header': {
			paddingRight: '102px',
		},
		'.ag-theme-alpine .ag-filter-toolpanel-group-level-7 .ag-filter-toolpanel-group-level-7-header.ag-filter-toolpanel-group-title-bar':
			{
				backgroundColor: 'transparent',
			},
		'.ag-theme-alpine .ag-ltr .ag-filter-toolpanel-group-level-7 .ag-filter-toolpanel-group-level-8-header': {
			paddingLeft: '118px',
		},
		'.ag-theme-alpine .ag-rtl .ag-filter-toolpanel-group-level-7 .ag-filter-toolpanel-group-level-8-header': {
			paddingRight: '118px',
		},
		'.ag-theme-alpine .ag-filter-toolpanel-group-level-8 .ag-filter-toolpanel-group-level-8-header.ag-filter-toolpanel-group-title-bar':
			{
				backgroundColor: 'transparent',
			},
		'.ag-theme-alpine .ag-ltr .ag-filter-toolpanel-group-level-8 .ag-filter-toolpanel-group-level-9-header': {
			paddingLeft: '134px',
		},
		'.ag-theme-alpine .ag-rtl .ag-filter-toolpanel-group-level-8 .ag-filter-toolpanel-group-level-9-header': {
			paddingRight: '134px',
		},
		'.ag-theme-alpine .ag-filter-toolpanel-group-level-9 .ag-filter-toolpanel-group-level-9-header.ag-filter-toolpanel-group-title-bar':
			{
				backgroundColor: 'transparent',
			},
		'.ag-theme-alpine .ag-ltr .ag-filter-toolpanel-group-level-9 .ag-filter-toolpanel-group-level-10-header': {
			paddingLeft: '150px',
		},
		'.ag-theme-alpine .ag-rtl .ag-filter-toolpanel-group-level-9 .ag-filter-toolpanel-group-level-10-header': {
			paddingRight: '150px',
		},
		'.ag-theme-alpine .ag-filter-toolpanel-group-level-10 .ag-filter-toolpanel-group-level-10-header.ag-filter-toolpanel-group-title-bar':
			{
				backgroundColor: 'transparent',
			},
		'.ag-theme-alpine .ag-ltr .ag-filter-toolpanel-group-level-10 .ag-filter-toolpanel-group-level-11-header': {
			paddingLeft: '166px',
		},
		'.ag-theme-alpine .ag-rtl .ag-filter-toolpanel-group-level-10 .ag-filter-toolpanel-group-level-11-header': {
			paddingRight: '166px',
		},
		'.ag-theme-alpine .ag-filter-toolpanel-instance-header.ag-filter-toolpanel-group-level-1-header': {
			paddingLeft: '6px',
		},
		'.ag-theme-alpine .ag-filter-toolpanel-instance-filter': {
			borderTop: 'solid 1px',
			borderTopColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderLeftColor: '#babfc7',
				},
				{
					backgroundColor: '#f8f8f8',
				},
				{
					borderBottomColor: '#babfc7',
				},
				{
					borderTopColor: '#babfc7',
				},
			],
			borderBottom: 'solid 1px',
			borderBottomColor: 'var(--ag-border-color, #babfc7)',
			marginTop: '6px',
			border: 'none',
			backgroundColor: 'var(--ag-control-panel-background-color, #f8f8f8)',
			borderLeft: 'dashed 1px',
			borderLeftColor: 'var(--ag-border-color, #babfc7)',
			marginLeft: '8px',
			paddingLeft: '8px',
			marginRight: '12px',
		},
		'.ag-theme-alpine .ag-ltr .ag-filter-toolpanel-instance-header-icon': {
			marginLeft: '6px',
		},
		'.ag-theme-alpine .ag-rtl .ag-filter-toolpanel-instance-header-icon': {
			marginRight: '6px',
		},
		'.ag-theme-alpine .ag-pivot-mode-panel': {
			minHeight: '48px',
			height: '48px',
			display: 'flex',
		},
		'.ag-theme-alpine .ag-pivot-mode-select': {
			display: 'flex',
			alignItems: 'center',
		},
		'.ag-theme-alpine .ag-ltr .ag-pivot-mode-select': {
			marginLeft: '12px',
		},
		'.ag-theme-alpine .ag-rtl .ag-pivot-mode-select': {
			marginRight: '12px',
		},
		'.ag-theme-alpine .ag-keyboard-focus .ag-column-select-header:focus': {
			outline: 'none',
		},
		'.ag-theme-alpine .ag-keyboard-focus .ag-column-select-header:focus::after': {
			content: '',
			position: 'absolute',
			backgroundColor: 'transparent',
			pointerEvents: 'none',
			top: '4px',
			left: '4px',
			display: 'block',
			width: 'calc(100% - 8px)',
			height: 'calc(100% - 8px)',
			border: '1px solid',
			borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					borderColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine .ag-column-select-header': {
			height: '48px',
			alignItems: 'center',
			padding: '0 12px',
			borderBottom: 'solid 1px',
			borderBottomColor: 'var(--ag-secondary-border-color, #dde2eb)',
			fallbacks: [
				{
					borderBottomColor: '#dde2eb',
				},
			],
		},
		'.ag-theme-alpine .ag-column-panel-column-select': {
			borderBottom: 'solid 1px',
			borderBottomColor: 'var(--ag-secondary-border-color, #dde2eb)',
			fallbacks: [
				{
					borderTopColor: '#dde2eb',
				},
				{
					borderBottomColor: '#dde2eb',
				},
			],
			borderTop: 'solid 1px',
			borderTopColor: 'var(--ag-secondary-border-color, #dde2eb)',
		},
		'.ag-theme-alpine .ag-column-group-icons, .ag-theme-alpine .ag-column-select-header-icon': {
			color: 'var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))',
			fallbacks: [
				{
					color: '#181d1f',
				},
			],
		},
		'.ag-theme-alpine .ag-column-select-list .ag-list-item-hovered::after': {
			content: '',
			position: 'absolute',
			left: '0',
			right: '0',
			height: '1px',
			backgroundColor: 'var(--ag-range-selection-border-color, #2196f3)',
			fallbacks: [
				{
					backgroundColor: '#2196f3',
				},
			],
		},
		'.ag-theme-alpine .ag-column-select-list .ag-item-highlight-top::after': {
			top: '0',
		},
		'.ag-theme-alpine .ag-column-select-list .ag-item-highlight-bottom::after': {
			bottom: '0',
		},
		'.ag-theme-alpine .ag-header': {
			backgroundColor: 'var(--ag-header-background-color, #f8f8f8)',
			fallbacks: [
				{
					borderBottomColor: '#babfc7',
				},
				{
					backgroundColor: '#f8f8f8',
				},
			],
			borderBottom: 'solid 1px',
			borderBottomColor: 'var(--ag-border-color, #babfc7)',
		},
		'.ag-theme-alpine .ag-header-row': {
			color: 'var(--ag-header-foreground-color, var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f)))',
			fallbacks: [
				{
					color: '#181d1f',
				},
			],
			height: '48px',
		},
		'.ag-theme-alpine .ag-pinned-right-header': {
			borderLeft: 'solid 1px',
			borderLeftColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderLeftColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine .ag-pinned-left-header': {
			borderRight: 'solid 1px',
			borderRightColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderRightColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine .ag-ltr .ag-header-cell:not(.ag-right-aligned-header) .ag-header-label-icon': {
			marginLeft: '6px',
		},
		'.ag-theme-alpine .ag-rtl .ag-header-cell:not(.ag-right-aligned-header) .ag-header-label-icon': {
			marginRight: '6px',
		},
		'.ag-theme-alpine .ag-ltr .ag-header-cell.ag-right-aligned-header .ag-header-label-icon': {
			marginRight: '6px',
		},
		'.ag-theme-alpine .ag-rtl .ag-header-cell.ag-right-aligned-header .ag-header-label-icon': {
			marginLeft: '6px',
		},
		'.ag-theme-alpine .ag-header-cell, .ag-theme-alpine .ag-header-group-cell': {
			paddingLeft: '18px',
			paddingRight: '18px',
		},
		'.ag-theme-alpine .ag-header-cell.ag-header-cell-moving, .ag-theme-alpine .ag-header-group-cell.ag-header-cell-moving':
			{
				backgroundColor: 'var(--ag-header-cell-moving-background-color, var(--ag-background-color, #fff))',
				fallbacks: [
					{
						backgroundColor: '#fff',
					},
				],
			},
		'.ag-theme-alpine .ag-keyboard-focus .ag-header-cell:focus': {
			outline: 'none',
		},
		'.ag-theme-alpine .ag-keyboard-focus .ag-header-cell:focus::after': {
			content: '',
			position: 'absolute',
			backgroundColor: 'transparent',
			pointerEvents: 'none',
			top: '4px',
			left: '4px',
			display: 'block',
			width: 'calc(100% - 8px)',
			height: 'calc(100% - 8px)',
			border: '1px solid',
			borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					borderColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine .ag-keyboard-focus .ag-header-group-cell:focus': {
			outline: 'none',
		},
		'.ag-theme-alpine .ag-keyboard-focus .ag-header-group-cell:focus::after': {
			content: '',
			position: 'absolute',
			backgroundColor: 'transparent',
			pointerEvents: 'none',
			top: '4px',
			left: '4px',
			display: 'block',
			width: 'calc(100% - 8px)',
			height: 'calc(100% - 8px)',
			border: '1px solid',
			borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					borderColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine .ag-header-icon': {
			color: 'var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))',
			fallbacks: [
				{
					color: '#181d1f',
				},
			],
		},
		'.ag-theme-alpine .ag-header-expand-icon': {
			cursor: 'pointer',
		},
		'.ag-theme-alpine .ag-ltr .ag-header-expand-icon': {
			paddingLeft: '4px',
		},
		'.ag-theme-alpine .ag-rtl .ag-header-expand-icon': {
			paddingRight: '4px',
		},
		'.ag-theme-alpine .ag-header-row:not(:first-child) .ag-header-cell, .ag-theme-alpine .ag-header-row:not(:first-child) .ag-header-group-cell.ag-header-group-cell-with-group':
			{
				borderTop: 'solid 1px',
				borderTopColor: 'var(--ag-border-color, #babfc7)',
				fallbacks: [
					{
						borderTopColor: '#babfc7',
					},
				],
			},
		'.ag-theme-alpine .ag-header-cell-resize': {
			display: 'flex',
			alignItems: 'center',
		},
		'.ag-theme-alpine .ag-header-cell-resize::after': {
			content: '',
			position: 'absolute',
			zIndex: '1',
			display: 'block',
			left: 'calc(50% - 1px)',
			width: '2px',
			height: '30%',
			top: 'calc(50% - 15%)',
			backgroundColor: 'var(--ag-header-column-resize-handle-color, rgba(186, 191, 199, 0.5))',
			fallbacks: [
				{
					backgroundColor: 'rgba(186, 191, 199, 0.5)',
				},
			],
		},
		'.ag-theme-alpine .ag-pinned-right-header .ag-header-cell-resize::after': {
			left: 'calc(50% - 2px)',
		},
		'.ag-theme-alpine .ag-ltr .ag-header-select-all': {
			marginRight: '18px',
		},
		'.ag-theme-alpine .ag-rtl .ag-header-select-all': {
			marginLeft: '18px',
		},
		'.ag-theme-alpine .ag-ltr .ag-floating-filter-button': {
			marginLeft: '18px',
		},
		'.ag-theme-alpine .ag-rtl .ag-floating-filter-button': {
			marginRight: '18px',
		},
		'.ag-theme-alpine .ag-floating-filter-button-button': {
			color: 'inherit',
			fontFamily: 'inherit',
			fontSize: 'inherit',
			fontWeight: 'inherit',
			lineHeight: 'inherit',
			webkitAppearance: 'none',
			mozAppearance: 'none',
			appearance: 'none',
			background: 'transparent',
			border: 'none',
			height: '16px',
			padding: '0',
			width: '16px',
		},
		'.ag-theme-alpine .ag-filter-loading': {
			backgroundColor: 'var(--ag-control-panel-background-color, #f8f8f8)',
			fallbacks: [
				{
					backgroundColor: '#f8f8f8',
				},
			],
			height: '100%',
			padding: '12px 12px',
			position: 'absolute',
			width: '100%',
			zIndex: '1',
		},
		'.ag-theme-alpine .ag-paging-panel': {
			borderTop: '1px solid',
			borderTopColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					color: '#181d1f',
				},
				{
					borderTopColor: '#babfc7',
				},
			],
			color: 'var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))',
			height: '48px',
		},
		'.ag-theme-alpine .ag-paging-panel > *': {
			margin: '0 18px',
		},
		'.ag-theme-alpine .ag-paging-button': {
			cursor: 'pointer',
		},
		'.ag-theme-alpine .ag-paging-button.ag-disabled': {
			cursor: 'default',
			color: 'var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5))',
			fallbacks: [
				{
					color: 'rgba(24, 29, 31, 0.5)',
				},
			],
		},
		'.ag-theme-alpine .ag-keyboard-focus .ag-paging-button:focus': {
			outline: 'none',
		},
		'.ag-theme-alpine .ag-keyboard-focus .ag-paging-button:focus::after': {
			content: '',
			position: 'absolute',
			backgroundColor: 'transparent',
			pointerEvents: 'none',
			top: '0px',
			left: '0px',
			display: 'block',
			width: 'calc(100% - 0px)',
			height: 'calc(100% - 0px)',
			border: '1px solid',
			borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					borderColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine .ag-paging-button, .ag-theme-alpine .ag-paging-description': {
			margin: '0 6px',
		},
		'.ag-theme-alpine .ag-status-bar': {
			borderTop: 'solid 1px',
			borderTopColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					color: 'rgba(24, 29, 31, 0.5)',
				},
				{
					borderTopColor: '#babfc7',
				},
			],
			color: 'var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5))',
			paddingRight: '24px',
			paddingLeft: '24px',
			lineHeight: '1.5',
			fontWeight: 'normal',
		},
		'.ag-theme-alpine .ag-status-name-value-value': {
			color: 'var(--ag-foreground-color, #181d1f)',
			fallbacks: [
				{
					color: '#181d1f',
				},
			],
			fontWeight: '700',
		},
		'.ag-theme-alpine .ag-status-bar-center': {
			textAlign: 'center',
		},
		'.ag-theme-alpine .ag-status-name-value': {
			marginLeft: '6px',
			marginRight: '6px',
			paddingTop: '12px',
			paddingBottom: '12px',
		},
		'.ag-theme-alpine .ag-column-drop-cell': {
			background: 'var(--ag-chip-background-color, rgba(24, 29, 31, 0.07))',
			fallbacks: [
				{
					background: 'rgba(24, 29, 31, 0.07)',
				},
			],
			borderRadius: '24px',
			height: '24px',
			padding: '0 3px',
			border: '1px solid transparent',
			cursor: 'pointer',
		},
		'.ag-theme-alpine .ag-keyboard-focus .ag-column-drop-cell:focus': {
			outline: 'none',
		},
		'.ag-theme-alpine .ag-keyboard-focus .ag-column-drop-cell:focus::after': {
			content: '',
			position: 'absolute',
			backgroundColor: 'transparent',
			pointerEvents: 'none',
			top: '2px',
			left: '2px',
			display: 'block',
			width: 'calc(100% - 4px)',
			height: 'calc(100% - 4px)',
			border: '1px solid',
			borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					borderColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine .ag-column-drop-cell-text': {
			margin: '0 6px',
		},
		'.ag-theme-alpine .ag-column-drop-cell-button': {
			minWidth: '24px',
			margin: '0 3px',
			color: 'var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))',
			fallbacks: [
				{
					color: '#181d1f',
				},
			],
			opacity: '0.5',
		},
		'.ag-theme-alpine .ag-column-drop-cell-drag-handle': {
			marginLeft: '12px',
		},
		'.ag-theme-alpine .ag-column-drop-cell-ghost': {
			opacity: '0.5',
		},
		'.ag-theme-alpine .ag-column-drop-horizontal': {
			backgroundColor: 'var(--ag-control-panel-background-color, #f8f8f8)',
			fallbacks: [
				{
					borderBottomColor: '#babfc7',
				},
				{
					color: '#181d1f',
				},
				{
					backgroundColor: '#f8f8f8',
				},
			],
			color: 'var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))',
			height: '42px',
			borderBottom: 'solid 1px',
			borderBottomColor: 'var(--ag-border-color, #babfc7)',
		},
		'.ag-theme-alpine .ag-ltr .ag-column-drop-horizontal': {
			paddingLeft: '18px',
		},
		'.ag-theme-alpine .ag-rtl .ag-column-drop-horizontal': {
			paddingRight: '18px',
		},
		'.ag-theme-alpine .ag-ltr .ag-column-drop-horizontal-half-width:not(:last-child)': {
			borderRight: 'solid 1px',
			borderRightColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderRightColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine .ag-rtl .ag-column-drop-horizontal-half-width:not(:last-child)': {
			borderLeft: 'solid 1px',
			borderLeftColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderLeftColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine .ag-column-drop-horizontal-cell-separator': {
			margin: '0 6px',
			color: 'var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))',
			fallbacks: [
				{
					color: '#181d1f',
				},
			],
		},
		'.ag-theme-alpine .ag-column-drop-horizontal-empty-message': {
			color: 'var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5))',
			fallbacks: [
				{
					color: 'rgba(24, 29, 31, 0.5)',
				},
			],
		},
		'.ag-theme-alpine .ag-ltr .ag-column-drop-horizontal-icon': {
			marginRight: '18px',
		},
		'.ag-theme-alpine .ag-rtl .ag-column-drop-horizontal-icon': {
			marginLeft: '18px',
		},
		'.ag-theme-alpine .ag-column-drop-vertical-list': {
			paddingBottom: '6px',
			paddingRight: '6px',
			paddingLeft: '6px',
		},
		'.ag-theme-alpine .ag-column-drop-vertical-cell': {
			marginTop: '6px',
		},
		'.ag-theme-alpine .ag-column-drop-vertical': {
			minHeight: '75px',
			borderBottom: 'solid 1px',
			borderBottomColor: 'var(--ag-secondary-border-color, #dde2eb)',
			fallbacks: [
				{
					minHeight: '50px',
				},
				{
					borderBottomColor: '#dde2eb',
				},
			],
		},
		'.ag-theme-alpine .ag-column-drop-vertical.ag-last-column-drop': {
			borderBottom: 'none',
		},
		'.ag-theme-alpine .ag-column-drop-vertical-icon': {
			marginLeft: '6px',
			marginRight: '6px',
		},
		'.ag-theme-alpine .ag-column-drop-vertical-empty-message': {
			position: 'absolute',
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
			overflow: 'hidden',
			color: 'var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5))',
			fallbacks: [
				{
					borderColor: '#babfc7',
				},
				{
					color: 'rgba(24, 29, 31, 0.5)',
				},
			],
			marginTop: '6px',
			display: 'flex',
			alignItems: 'center',
			border: 'dashed 1px',
			borderColor: 'var(--ag-border-color, #babfc7)',
			margin: '12px',
			padding: '12px',
		},
		'.ag-theme-alpine .ag-select-agg-func-popup': {
			border: 'solid 1px',
			borderColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					padding: '6px',
				},
				{
					background: '#fff',
				},
				{
					background: 'var(--ag-background-color, #fff)',
				},
				{
					background: '#fff',
				},
				{
					borderColor: '#babfc7',
				},
			],
			background: 'var(--ag-background-color, #fff)',
			borderRadius: '3px',
			boxShadow: '0 1px 4px 1px rgba(186, 191, 199, 0.4)',
			padding: '0',
			height: '105px',
		},
		'.ag-theme-alpine .ag-select-agg-func-virtual-list-item': {
			cursor: 'default',
			paddingLeft: '12px',
		},
		'.ag-theme-alpine .ag-select-agg-func-virtual-list-item:hover': {
			backgroundColor: 'var(--ag-selected-row-background-color, rgba(33, 150, 243, 0.3))',
			fallbacks: [
				{
					backgroundColor: 'rgba(33, 150, 243, 0.3)',
				},
			],
		},
		'.ag-theme-alpine .ag-keyboard-focus .ag-select-agg-func-virtual-list-item:focus': {
			outline: 'none',
		},
		'.ag-theme-alpine .ag-keyboard-focus .ag-select-agg-func-virtual-list-item:focus::after': {
			content: '',
			position: 'absolute',
			backgroundColor: 'transparent',
			pointerEvents: 'none',
			top: '1px',
			left: '1px',
			display: 'block',
			width: 'calc(100% - 2px)',
			height: 'calc(100% - 2px)',
			border: '1px solid',
			borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					borderColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine .ag-sort-indicator-container': {
			display: 'flex',
		},
		'.ag-theme-alpine .ag-ltr .ag-sort-indicator-icon': {
			paddingLeft: '6px',
		},
		'.ag-theme-alpine .ag-rtl .ag-sort-indicator-icon': {
			paddingRight: '6px',
		},
		'.ag-theme-alpine .ag-chart-menu': {
			borderRadius: '3px',
			background: 'var(--ag-background-color, #fff)',
			fallbacks: [
				{
					background: '#fff',
				},
			],
		},
		'.ag-theme-alpine .ag-chart-menu-icon': {
			opacity: '0.5',
			lineHeight: '24px',
			fontSize: '24px',
			width: '24px',
			height: '24px',
			margin: '2px 0',
			cursor: 'pointer',
			borderRadius: '3px',
			color: 'var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))',
			fallbacks: [
				{
					color: '#181d1f',
				},
			],
		},
		'.ag-theme-alpine .ag-chart-menu-icon:hover': {
			opacity: '1',
		},
		'.ag-theme-alpine .ag-chart-menu-close': {
			background: 'var(--ag-background-color, #fff)',
			fallbacks: [
				{
					background: '#fff',
				},
			],
		},
		'.ag-theme-alpine .ag-chart-menu-close .ag-icon': {
			background: 'none',
			border: '1px solid #dde2eb',
			borderRight: 'none',
		},
		'.ag-theme-alpine .ag-chart-menu-close .ag-icon:hover': {
			background: 'var(--ag-header-background-color, #f8f8f8)',
			fallbacks: [
				{
					background: '#f8f8f8',
				},
			],
		},
		'.ag-theme-alpine .ag-chart-mini-thumbnail': {
			border: '1px solid',
			borderColor: 'var(--ag-secondary-border-color, #dde2eb)',
			fallbacks: [
				{
					backgroundColor: '#fff',
				},
				{
					borderColor: '#dde2eb',
				},
			],
			borderRadius: '5px',
			margin: '5px',
			backgroundColor: 'var(--ag-background-color, #fff)',
		},
		'.ag-theme-alpine .ag-chart-mini-thumbnail:nth-last-child(3), .ag-theme-alpine .ag-chart-mini-thumbnail:nth-last-child(3) ~ .ag-chart-mini-thumbnail':
			{
				marginLeft: 'auto',
				marginRight: 'auto',
			},
		'.ag-theme-alpine .ag-ltr .ag-chart-mini-thumbnail:first-child': {
			marginLeft: '0',
		},
		'.ag-theme-alpine .ag-rtl .ag-chart-mini-thumbnail:first-child': {
			marginRight: '0',
		},
		'.ag-theme-alpine .ag-ltr .ag-chart-mini-thumbnail:last-child': {
			marginRight: '0',
		},
		'.ag-theme-alpine .ag-rtl .ag-chart-mini-thumbnail:last-child': {
			marginLeft: '0',
		},
		'.ag-theme-alpine .ag-chart-mini-thumbnail.ag-selected': {
			borderColor:
				'var(--ag-minichart-selected-chart-color, var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3)))',
			fallbacks: [
				{
					borderColor: '#2196f3',
				},
			],
		},
		'.ag-theme-alpine .ag-chart-settings-card-item': {
			background: 'var(--ag-foreground-color, #181d1f)',
			fallbacks: [
				{
					background: '#181d1f',
				},
			],
			width: '8px',
			height: '8px',
			borderRadius: '4px',
		},
		'.ag-theme-alpine .ag-chart-settings-card-item.ag-selected': {
			backgroundColor:
				'var(--ag-minichart-selected-page-color, var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3)))',
			fallbacks: [
				{
					backgroundColor: '#2196f3',
				},
			],
		},
		'.ag-theme-alpine .ag-chart-data-column-drag-handle': {
			marginLeft: '6px',
		},
		'.ag-theme-alpine .ag-charts-settings-group-title-bar, .ag-theme-alpine .ag-charts-data-group-title-bar, .ag-theme-alpine .ag-charts-format-top-level-group-title-bar':
			{
				borderTop: 'solid 1px',
				borderTopColor: 'var(--ag-secondary-border-color, #dde2eb)',
				fallbacks: [
					{
						borderTopColor: '#dde2eb',
					},
				],
				padding: '6px 12px',
				lineHeight: '20px',
			},
		'.ag-theme-alpine .ag-charts-settings-group-container': {
			padding: '6px',
		},
		'.ag-theme-alpine .ag-charts-data-group-container': {
			padding: '6px 12px',
		},
		'.ag-theme-alpine .ag-charts-data-group-container .ag-charts-data-group-item:not(.ag-charts-format-sub-level-group)':
			{
				height: '24px',
			},
		'.ag-theme-alpine .ag-charts-data-group-container .ag-list-item-hovered::after': {
			content: '',
			position: 'absolute',
			left: '0',
			right: '0',
			height: '1px',
			backgroundColor: 'var(--ag-range-selection-border-color, #2196f3)',
			fallbacks: [
				{
					backgroundColor: '#2196f3',
				},
			],
		},
		'.ag-theme-alpine .ag-charts-data-group-container .ag-item-highlight-top::after': {
			top: '0',
		},
		'.ag-theme-alpine .ag-charts-data-group-container .ag-item-highlight-bottom::after': {
			bottom: '0',
		},
		'.ag-theme-alpine .ag-charts-format-top-level-group-container': {
			marginLeft: '12px',
			padding: '6px',
		},
		'.ag-theme-alpine .ag-charts-format-top-level-group-item': {
			margin: '6px 0',
		},
		'.ag-theme-alpine .ag-charts-format-sub-level-group-container': {
			padding: '12px 12px',
			paddingBottom: '0',
			fallbacks: [
				{
					paddingBottom: '3px',
				},
			],
		},
		'.ag-theme-alpine .ag-charts-format-sub-level-group-container > *': {
			marginBottom: '9px',
		},
		'.ag-theme-alpine .ag-charts-group-container.ag-group-container-horizontal': {
			padding: '6px',
		},
		'.ag-theme-alpine .ag-chart-data-section, .ag-theme-alpine .ag-chart-format-section': {
			display: 'flex',
			margin: '0',
		},
		'.ag-theme-alpine .ag-chart-menu-panel': {
			backgroundColor: 'var(--ag-control-panel-background-color, #f8f8f8)',
			fallbacks: [
				{
					backgroundColor: '#f8f8f8',
				},
			],
		},
		'.ag-theme-alpine .ag-ltr .ag-chart-menu-panel': {
			borderLeft: 'solid 1px',
			borderLeftColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderLeftColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine .ag-rtl .ag-chart-menu-panel': {
			borderRight: 'solid 1px',
			borderRightColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderRightColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine .ag-date-time-list-page-title': {
			flexGrow: '1',
			textAlign: 'center',
		},
		'.ag-theme-alpine .ag-date-time-list-page-column-label': {
			textAlign: 'center',
		},
		'.ag-theme-alpine .ag-date-time-list-page-entry': {
			textAlign: 'center',
		},
		'.ag-theme-alpine .ag-checkbox-input-wrapper': {
			fontFamily: 'agGridAlpine',
			fontSize: '16px',
			lineHeight: '16px',
			fontStyle: 'normal',
			fontWeight: 'normal',
			fontVariant: 'normal',
			textTransform: 'none',
			webkitFontSmoothing: 'antialiased',
			mozOsxFontSmoothing: 'grayscale',
			width: '16px',
			height: '16px',
			backgroundColor: 'var(--ag-checkbox-background-color, var(--ag-background-color, #fff))',
			fallbacks: [
				{
					backgroundColor: '#fff',
				},
			],
			borderRadius: '3px',
			display: 'inline-block',
			verticalAlign: 'middle',
			flex: 'none',
		},
		'.ag-theme-alpine .ag-checkbox-input-wrapper input, .ag-theme-alpine .ag-checkbox-input-wrapper input': {
			webkitAppearance: 'none',
			opacity: '0',
			width: '100%',
			height: '100%',
		},
		'.ag-theme-alpine .ag-checkbox-input-wrapper:focus-within, .ag-theme-alpine .ag-checkbox-input-wrapper:active':
			{
				outline: 'none',
				boxShadow: '0 0 2px 0.1rem rgba(33, 150, 243, 0.4)',
			},
		'.ag-theme-alpine .ag-checkbox-input-wrapper.ag-disabled': {
			opacity: '0.5',
		},
		'.ag-theme-alpine .ag-checkbox-input-wrapper::after': {
			content: '\f108',
			color: 'var(--ag-checkbox-unchecked-color, #999)',
			fallbacks: [
				{
					color: '#999',
				},
			],
			position: 'absolute',
			top: '0',
			left: '0',
			pointerEvents: 'none',
		},
		'.ag-theme-alpine .ag-checkbox-input-wrapper.ag-checked::after': {
			content: '\f106',
			color: 'var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3))',
			fallbacks: [
				{
					color: '#2196f3',
				},
			],
			position: 'absolute',
			top: '0',
			left: '0',
			pointerEvents: 'none',
		},
		'.ag-theme-alpine .ag-checkbox-input-wrapper.ag-indeterminate::after': {
			content: '\f107',
			color: 'var(--ag-checkbox-indeterminate-color, var(--ag-checkbox-unchecked-color, #999))',
			fallbacks: [
				{
					color: '#999',
				},
			],
			position: 'absolute',
			top: '0',
			left: '0',
			pointerEvents: 'none',
		},
		'.ag-theme-alpine .ag-toggle-button-input-wrapper': {
			boxSizing: 'border-box',
			width: '28px',
			height: '18px',
			backgroundColor: 'var(--ag-toggle-button-off-background-color, var(--ag-checkbox-unchecked-color, #999))',
			fallbacks: [
				{
					borderColor: '#999',
				},
				{
					backgroundColor: '#999',
				},
			],
			borderRadius: '9px',
			position: 'relative',
			flex: 'none',
			border: '1px solid',
			borderColor: 'var(--ag-toggle-button-off-border-color, var(--ag-checkbox-unchecked-color, #999))',
		},
		'.ag-theme-alpine .ag-toggle-button-input-wrapper input': {
			opacity: '0',
			height: '100%',
			width: '100%',
		},
		'.ag-theme-alpine .ag-toggle-button-input-wrapper:focus-within': {
			outline: 'none',
			boxShadow: '0 0 2px 0.1rem rgba(33, 150, 243, 0.4)',
		},
		'.ag-theme-alpine .ag-toggle-button-input-wrapper.ag-disabled': {
			opacity: '0.5',
		},
		'.ag-theme-alpine .ag-toggle-button-input-wrapper.ag-checked': {
			backgroundColor:
				'var(--ag-toggle-button-on-background-color, var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3)))',
			fallbacks: [
				{
					borderColor: '#2196f3',
				},
				{
					backgroundColor: '#2196f3',
				},
			],
			borderColor:
				'var(--ag-toggle-button-on-border-color, var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3)))',
		},
		'.ag-theme-alpine .ag-toggle-button-input-wrapper::before': {
			content: ' ',
			position: 'absolute',
			top: '-1px',
			left: '-1px',
			display: 'block',
			boxSizing: 'border-box',
			height: '18px',
			width: '18px',
			backgroundColor: 'var(--ag-toggle-button-switch-background-color, var(--ag-background-color, #fff))',
			fallbacks: [
				{
					borderColor: '#999',
				},
				{
					backgroundColor: '#fff',
				},
			],
			borderRadius: '9px',
			transition: 'left 100ms',
			border: '1px solid',
			borderColor:
				'var(--ag-toggle-button-switch-border-color, var(--ag-toggle-button-off-border-color, var(--ag-checkbox-unchecked-color, #999)))',
		},
		'.ag-theme-alpine .ag-toggle-button-input-wrapper.ag-checked::before': {
			left: 'calc(100% - 18px )',
			borderColor:
				'var(--ag-toggle-button-on-border-color, var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3)))',
			fallbacks: [
				{
					borderColor: '#2196f3',
				},
			],
		},
		'.ag-theme-alpine .ag-radio-button-input-wrapper': {
			fontFamily: 'agGridAlpine',
			fontSize: '16px',
			lineHeight: '16px',
			fontStyle: 'normal',
			fontWeight: 'normal',
			fontVariant: 'normal',
			textTransform: 'none',
			webkitFontSmoothing: 'antialiased',
			mozOsxFontSmoothing: 'grayscale',
			width: '16px',
			height: '16px',
			backgroundColor: 'var(--ag-checkbox-background-color, var(--ag-background-color, #fff))',
			fallbacks: [
				{
					borderRadius: '3px',
				},
				{
					backgroundColor: '#fff',
				},
			],
			borderRadius: '16px',
			display: 'inline-block',
			verticalAlign: 'middle',
			flex: 'none',
		},
		'.ag-theme-alpine .ag-radio-button-input-wrapper input, .ag-theme-alpine .ag-radio-button-input-wrapper input':
			{
				webkitAppearance: 'none',
				opacity: '0',
				width: '100%',
				height: '100%',
			},
		'.ag-theme-alpine .ag-radio-button-input-wrapper:focus-within, .ag-theme-alpine .ag-radio-button-input-wrapper:active':
			{
				outline: 'none',
				boxShadow: '0 0 2px 0.1rem rgba(33, 150, 243, 0.4)',
			},
		'.ag-theme-alpine .ag-radio-button-input-wrapper.ag-disabled': {
			opacity: '0.5',
		},
		'.ag-theme-alpine .ag-radio-button-input-wrapper::after': {
			content: '\f126',
			color: 'var(--ag-checkbox-unchecked-color, #999)',
			fallbacks: [
				{
					color: '#999',
				},
			],
			position: 'absolute',
			top: '0',
			left: '0',
			pointerEvents: 'none',
		},
		'.ag-theme-alpine .ag-radio-button-input-wrapper.ag-checked::after': {
			content: '\f127',
			color: 'var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3))',
			fallbacks: [
				{
					color: '#2196f3',
				},
			],
			position: 'absolute',
			top: '0',
			left: '0',
			pointerEvents: 'none',
		},
		'.ag-theme-alpine input[class^=ag-][type=range]::-webkit-slider-runnable-track': {
			margin: '0',
			padding: '0',
			width: '100%',
			height: '3px',
			backgroundColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderRadius: '3px',
				},
				{
					backgroundColor: '#babfc7',
				},
			],
			borderRadius: '3px',
		},
		'.ag-theme-alpine input[class^=ag-][type=range]::-moz-range-track': {
			margin: '0',
			padding: '0',
			width: '100%',
			height: '3px',
			backgroundColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderRadius: '3px',
				},
				{
					backgroundColor: '#babfc7',
				},
			],
			borderRadius: '3px',
		},
		'.ag-theme-alpine input[class^=ag-][type=range]::-ms-track': {
			margin: '0',
			padding: '0',
			width: 'calc(100% - 2px)',
			height: '3px',
			backgroundColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					width: '100%',
				},
				{
					borderRadius: '3px',
				},
				{
					backgroundColor: '#babfc7',
				},
			],
			borderRadius: '3px',
			color: 'transparent',
		},
		'.ag-theme-alpine input[class^=ag-][type=range]::-webkit-slider-thumb': {
			margin: '0',
			padding: '0',
			webkitAppearance: 'none',
			width: '16px',
			height: '16px',
			backgroundColor: 'var(--ag-background-color, #fff)',
			fallbacks: [
				{
					borderColor: '#999',
				},
				{
					backgroundColor: '#fff',
				},
			],
			border: '1px solid',
			borderColor: 'var(--ag-checkbox-unchecked-color, #999)',
			borderRadius: '16px',
			transform: 'translateY(-6.5px)',
		},
		'.ag-theme-alpine input[class^=ag-][type=range]::-ms-thumb': {
			margin: '0',
			padding: '0',
			webkitAppearance: 'none',
			width: '16px',
			height: '16px',
			backgroundColor: 'var(--ag-background-color, #fff)',
			fallbacks: [
				{
					borderColor: '#999',
				},
				{
					backgroundColor: '#fff',
				},
			],
			border: '1px solid',
			borderColor: 'var(--ag-checkbox-unchecked-color, #999)',
			borderRadius: '16px',
		},
		'.ag-theme-alpine input[class^=ag-][type=range]::-moz-ag-range-thumb': {
			margin: '0',
			padding: '0',
			webkitAppearance: 'none',
			width: '16px',
			height: '16px',
			backgroundColor: 'var(--ag-background-color, #fff)',
			fallbacks: [
				{
					borderColor: '#999',
				},
				{
					backgroundColor: '#fff',
				},
			],
			border: '1px solid',
			borderColor: 'var(--ag-checkbox-unchecked-color, #999)',
			borderRadius: '16px',
		},
		'.ag-theme-alpine input[class^=ag-][type=range]:focus': {
			outline: 'none',
		},
		'.ag-theme-alpine input[class^=ag-][type=range]:focus::-webkit-slider-thumb': {
			boxShadow: '0 0 2px 0.1rem rgba(33, 150, 243, 0.4)',
			borderColor: 'var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3))',
			fallbacks: [
				{
					borderColor: '#2196f3',
				},
			],
		},
		'.ag-theme-alpine input[class^=ag-][type=range]:focus::-ms-thumb': {
			boxShadow: '0 0 2px 0.1rem rgba(33, 150, 243, 0.4)',
			borderColor: 'var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3))',
			fallbacks: [
				{
					borderColor: '#2196f3',
				},
			],
		},
		'.ag-theme-alpine input[class^=ag-][type=range]:focus::-moz-ag-range-thumb': {
			boxShadow: '0 0 2px 0.1rem rgba(33, 150, 243, 0.4)',
			borderColor: 'var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3))',
			fallbacks: [
				{
					borderColor: '#2196f3',
				},
			],
		},
		'.ag-theme-alpine input[class^=ag-][type=range]:active::-webkit-slider-runnable-track': {
			backgroundColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					backgroundColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine input[class^=ag-][type=range]:active::-moz-ag-range-track': {
			backgroundColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					backgroundColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine input[class^=ag-][type=range]:active::-ms-track': {
			backgroundColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					backgroundColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine input[class^=ag-][type=range]:disabled': {
			opacity: '0.5',
		},
		'.ag-theme-alpine .ag-filter-toolpanel-header, .ag-theme-alpine .ag-filter-toolpanel-search, .ag-theme-alpine .ag-status-bar, .ag-theme-alpine .ag-header-row, .ag-theme-alpine .ag-panel-title-bar-title, .ag-theme-alpine .ag-multi-filter-group-title-bar':
			{
				fontWeight: '700',
				color: 'var(--ag-header-foreground-color, var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f)))',
				fallbacks: [
					{
						color: '#181d1f',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-rtl .ag-pinned-left-header .ag-theme-alpine .ag-header-row::before, .ag-theme-alpine-fusion .ag-ltr .ag-pinned-right-header .ag-theme-alpine .ag-header-row::after, .ag-theme-alpine .ag-rtl .ag-pinned-left-header .ag-header-row::before, .ag-theme-alpine .ag-ltr .ag-pinned-right-header .ag-header-row::after':
			{
				content: '',
				position: 'absolute',
				height: 'calc(100% - 20px)',
				top: '10px',
				width: '1px',
				backgroundColor: 'var(--ag-border-color, #babfc7)',
				fallbacks: [
					{
						backgroundColor: '#babfc7',
					},
				],
			},
		'.ag-theme-alpine .ag-ltr .ag-pinned-right-header .ag-header-row::after': {
			right: '0',
		},
		'.ag-theme-alpine .ag-rtl .ag-pinned-left-header .ag-header-row::before': {
			left: '0',
		},
		'.ag-theme-alpine .ag-theme-alpine-fusion textarea[class^=ag-], .ag-theme-alpine-fusion .ag-theme-alpine textarea[class^=ag-], .ag-theme-alpine input[class^=ag-]:not([type]), .ag-theme-alpine input[class^=ag-][type=text], .ag-theme-alpine input[class^=ag-][type=number], .ag-theme-alpine input[class^=ag-][type=tel], .ag-theme-alpine input[class^=ag-][type=date], .ag-theme-alpine input[class^=ag-][type=datetime-local], .ag-theme-alpine textarea[class^=ag-]':
			{
				minHeight: '24px',
				borderRadius: '3px',
			},
		'.ag-theme-alpine .ag-ltr input[class^=ag-]:not([type]), .ag-theme-alpine .ag-ltr input[class^=ag-][type=text], .ag-theme-alpine .ag-ltr input[class^=ag-][type=number], .ag-theme-alpine .ag-ltr input[class^=ag-][type=tel], .ag-theme-alpine .ag-ltr input[class^=ag-][type=date], .ag-theme-alpine .ag-ltr input[class^=ag-][type=datetime-local], .ag-theme-alpine .ag-ltr textarea[class^=ag-]':
			{
				paddingLeft: '6px',
			},
		'.ag-theme-alpine .ag-rtl input[class^=ag-]:not([type]), .ag-theme-alpine .ag-rtl input[class^=ag-][type=text], .ag-theme-alpine .ag-rtl input[class^=ag-][type=number], .ag-theme-alpine .ag-rtl input[class^=ag-][type=tel], .ag-theme-alpine .ag-rtl input[class^=ag-][type=date], .ag-theme-alpine .ag-rtl input[class^=ag-][type=datetime-local], .ag-theme-alpine .ag-rtl textarea[class^=ag-]':
			{
				paddingRight: '6px',
			},
		'.ag-theme-alpine .ag-chart-settings-nav-bar': {
			borderTop: 'solid 1px',
			borderTopColor: 'var(--ag-secondary-border-color, #dde2eb)',
			fallbacks: [
				{
					borderTopColor: '#dde2eb',
				},
			],
		},
		'.ag-theme-alpine .ag-ltr .ag-group-title-bar-icon': {
			marginRight: '6px',
		},
		'.ag-theme-alpine .ag-rtl .ag-group-title-bar-icon': {
			marginLeft: '6px',
		},
		'.ag-theme-alpine .ag-charts-format-top-level-group-toolbar': {
			marginTop: '6px',
		},
		'.ag-theme-alpine .ag-ltr .ag-charts-format-top-level-group-toolbar': {
			paddingLeft: '20px',
		},
		'.ag-theme-alpine .ag-rtl .ag-charts-format-top-level-group-toolbar': {
			paddingRight: '20px',
		},
		'.ag-theme-alpine .ag-charts-format-sub-level-group': {
			borderLeft: 'dashed 1px',
			borderLeftColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderLeftColor: '#babfc7',
				},
			],
			paddingLeft: '6px',
			marginBottom: '12px',
		},
		'.ag-theme-alpine .ag-charts-format-sub-level-group-title-bar': {
			paddingTop: '0',
			paddingBottom: '0',
			background: 'none',
			fontWeight: '700',
		},
		'.ag-theme-alpine .ag-charts-format-sub-level-group-item:last-child': {
			marginBottom: '0',
		},
		'.ag-theme-alpine .ag-dnd-ghost': {
			fontSize: '12px',
			fontWeight: '700',
		},
		'.ag-theme-alpine .ag-standard-button': {
			mozAppearance: 'none',
			appearance: 'none',
			webkitAppearance: 'none',
			borderRadius: '3px',
			border: '1px solid',
			borderColor: 'var(--ag-alpine-active-color, #2196f3)',
			fallbacks: [
				{
					backgroundColor: '#fff',
				},
				{
					color: '#2196f3',
				},
				{
					borderColor: '#2196f3',
				},
			],
			color: 'var(--ag-alpine-active-color, #2196f3)',
			backgroundColor: 'var(--ag-background-color, #fff)',
			fontWeight: '600',
			padding: '6px 12px',
		},
		'.ag-theme-alpine .ag-standard-button:hover': {
			borderColor: 'var(--ag-alpine-active-color, #2196f3)',
			fallbacks: [
				{
					backgroundColor: 'rgba(33, 150, 243, 0.1)',
				},
				{
					borderColor: '#2196f3',
				},
			],
			backgroundColor: 'var(--ag-row-hover-color, rgba(33, 150, 243, 0.1))',
		},
		'.ag-theme-alpine .ag-standard-button:active': {
			borderColor: 'var(--ag-alpine-active-color, #2196f3)',
			fallbacks: [
				{
					color: '#fff',
				},
				{
					backgroundColor: '#2196f3',
				},
				{
					borderColor: '#2196f3',
				},
			],
			backgroundColor: 'var(--ag-alpine-active-color, #2196f3)',
			color: 'var(--ag-background-color, #fff)',
		},
		'.ag-theme-alpine .ag-standard-button:disabled': {
			color: 'var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5))',
			fallbacks: [
				{
					borderColor: 'rgba(186, 191, 199, 0.3)',
				},
				{
					backgroundColor: '#f1f2f4',
				},
				{
					color: 'rgba(24, 29, 31, 0.5)',
				},
			],
			backgroundColor: 'var(--ag-input-disabled-background-color, #f1f2f4)',
			borderColor: 'var(--ag-input-disabled-border-color, rgba(186, 191, 199, 0.3))',
		},
		'.ag-theme-alpine .ag-column-drop-vertical-title-bar': {
			padding: '12px',
			paddingBottom: '0px',
		},
		'.ag-theme-alpine .ag-column-drop-empty-message': {
			color: 'var(--ag-foreground-color, #181d1f)',
			fallbacks: [
				{
					color: '#181d1f',
				},
			],
			opacity: '0.75',
		},
		'.ag-theme-alpine .ag-paging-number, .ag-theme-alpine .ag-paging-row-summary-panel-number': {
			fontWeight: '700',
		},
		'.ag-theme-alpine .ag-column-drop-cell-button:hover': {
			opacity: '0.75',
		},
		'.ag-theme-alpine .ag-header-cell-menu-button:hover, .ag-theme-alpine .ag-side-button-button:hover, .ag-theme-alpine .ag-tab:hover, .ag-theme-alpine .ag-panel-title-bar-button:hover, .ag-theme-alpine .ag-header-expand-icon:hover, .ag-theme-alpine .ag-column-group-icons:hover, .ag-theme-alpine .ag-group-expanded .ag-icon:hover, .ag-theme-alpine .ag-group-contracted .ag-icon:hover, .ag-theme-alpine .ag-chart-settings-prev:hover, .ag-theme-alpine .ag-chart-settings-next:hover, .ag-theme-alpine .ag-group-title-bar-icon:hover, .ag-theme-alpine .ag-column-select-header-icon:hover, .ag-theme-alpine .ag-floating-filter-button-button:hover, .ag-theme-alpine .ag-filter-toolpanel-expand:hover, .ag-theme-alpine .ag-chart-menu-icon:hover':
			{
				color: 'var(--ag-alpine-active-color, #2196f3)',
				fallbacks: [
					{
						color: '#2196f3',
					},
				],
			},
		'.ag-theme-alpine .ag-chart-settings-card-item.ag-not-selected:hover': {
			opacity: '0.35',
		},
		'.ag-theme-alpine .ag-filter-toolpanel-group-container': {
			paddingLeft: '6px',
		},
		'.ag-theme-alpine .ag-set-filter-list': {
			paddingTop: '3px',
			paddingBottom: '3px',
		},
		'.ag-theme-alpine .ag-date-time-list-page-entry-is-current': {
			backgroundColor: 'var(--ag-alpine-active-color, #2196f3)',
			fallbacks: [
				{
					backgroundColor: '#2196f3',
				},
			],
		},
		'.ag-theme-alpine-fusion': {
			webkitFontSmoothing: 'antialiased',
			color: 'var(--ag-foreground-color, #181d1f)',
			fallbacks: [
				{
					color: '#181d1f',
				},
			],
			fontFamily:
				'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif',
			fontSize: '13px',
			lineHeight: 'normal',
		},
		'.ag-theme-alpine-fusion .ag-icon': {
			fontFamily: 'agGridAlpine',
			fontSize: '16px',
			lineHeight: '16px',
			fontStyle: 'normal',
			fontWeight: 'normal',
			fontVariant: 'normal',
			textTransform: 'none',
			webkitFontSmoothing: 'antialiased',
			mozOsxFontSmoothing: 'grayscale',
		},
		'.ag-theme-alpine-fusion .ag-icon-aggregation::before': {
			content: '\f101',
		},
		'.ag-theme-alpine-fusion .ag-icon-arrows::before': {
			content: '\f102',
		},
		'.ag-theme-alpine-fusion .ag-icon-asc::before': {
			content: '\f103',
		},
		'.ag-theme-alpine-fusion .ag-icon-cancel::before': {
			content: '\f104',
		},
		'.ag-theme-alpine-fusion .ag-icon-chart::before': {
			content: '\f105',
		},
		'.ag-theme-alpine-fusion .ag-icon-color-picker::before': {
			content: '\f109',
		},
		'.ag-theme-alpine-fusion .ag-icon-columns::before': {
			content: '\f10a',
		},
		'.ag-theme-alpine-fusion .ag-icon-contracted::before': {
			content: '\f10b',
		},
		'.ag-theme-alpine-fusion .ag-icon-copy::before': {
			content: '\f10c',
		},
		'.ag-theme-alpine-fusion .ag-icon-cross::before': {
			content: '\f10d',
		},
		'.ag-theme-alpine-fusion .ag-icon-csv::before': {
			content: '\f10e',
		},
		'.ag-theme-alpine-fusion .ag-icon-desc::before': {
			content: '\f10f',
		},
		'.ag-theme-alpine-fusion .ag-icon-excel::before': {
			content: '\f110',
		},
		'.ag-theme-alpine-fusion .ag-icon-expanded::before': {
			content: '\f111',
		},
		'.ag-theme-alpine-fusion .ag-icon-eye-slash::before': {
			content: '\f112',
		},
		'.ag-theme-alpine-fusion .ag-icon-eye::before': {
			content: '\f113',
		},
		'.ag-theme-alpine-fusion .ag-icon-filter::before': {
			content: '\f114',
		},
		'.ag-theme-alpine-fusion .ag-icon-first::before': {
			content: '\f115',
		},
		'.ag-theme-alpine-fusion .ag-icon-grip::before': {
			content: '\f116',
		},
		'.ag-theme-alpine-fusion .ag-icon-group::before': {
			content: '\f117',
		},
		'.ag-theme-alpine-fusion .ag-icon-last::before': {
			content: '\f118',
		},
		'.ag-theme-alpine-fusion .ag-icon-left::before': {
			content: '\f119',
		},
		'.ag-theme-alpine-fusion .ag-icon-linked::before': {
			content: '\f11a',
		},
		'.ag-theme-alpine-fusion .ag-icon-loading::before': {
			content: '\f11b',
		},
		'.ag-theme-alpine-fusion .ag-icon-maximize::before': {
			content: '\f11c',
		},
		'.ag-theme-alpine-fusion .ag-icon-menu::before': {
			content: '\f11d',
		},
		'.ag-theme-alpine-fusion .ag-icon-minimize::before': {
			content: '\f11e',
		},
		'.ag-theme-alpine-fusion .ag-icon-next::before': {
			content: '\f11f',
		},
		'.ag-theme-alpine-fusion .ag-icon-none::before': {
			content: '\f120',
		},
		'.ag-theme-alpine-fusion .ag-icon-not-allowed::before': {
			content: '\f121',
		},
		'.ag-theme-alpine-fusion .ag-icon-paste::before': {
			content: '\f122',
		},
		'.ag-theme-alpine-fusion .ag-icon-pin::before': {
			content: '\f123',
		},
		'.ag-theme-alpine-fusion .ag-icon-pivot::before': {
			content: '\f124',
		},
		'.ag-theme-alpine-fusion .ag-icon-previous::before': {
			content: '\f125',
		},
		'.ag-theme-alpine-fusion .ag-icon-right::before': {
			content: '\f128',
		},
		'.ag-theme-alpine-fusion .ag-icon-save::before': {
			content: '\f129',
		},
		'.ag-theme-alpine-fusion .ag-icon-small-down::before': {
			content: '\f12a',
		},
		'.ag-theme-alpine-fusion .ag-icon-small-left::before': {
			content: '\f12b',
		},
		'.ag-theme-alpine-fusion .ag-icon-small-right::before': {
			content: '\f12c',
		},
		'.ag-theme-alpine-fusion .ag-icon-small-up::before': {
			content: '\f12d',
		},
		'.ag-theme-alpine-fusion .ag-icon-tick::before': {
			content: '\f12e',
		},
		'.ag-theme-alpine-fusion .ag-icon-tree-closed::before': {
			content: '\f12f',
		},
		'.ag-theme-alpine-fusion .ag-icon-tree-indeterminate::before': {
			content: '\f130',
		},
		'.ag-theme-alpine-fusion .ag-icon-tree-open::before': {
			content: '\f131',
		},
		'.ag-theme-alpine-fusion .ag-icon-unlinked::before': {
			content: '\f132',
		},
		'.ag-theme-alpine-fusion .ag-icon-row-drag::before': {
			content: '\f116',
		},
		'.ag-theme-alpine-fusion .ag-left-arrow::before': {
			content: '\f119',
		},
		'.ag-theme-alpine-fusion .ag-right-arrow::before': {
			content: '\f128',
		},
		'.ag-theme-alpine-fusion .ag-root-wrapper, .ag-theme-alpine-fusion .ag-sticky-top': {
			backgroundColor: 'var(--ag-background-color, #fff)',
			fallbacks: [
				{
					backgroundColor: '#fff',
				},
			],
		},
		'.ag-theme-alpine-fusion [class^=ag-], .ag-theme-alpine-fusion [class^=ag-]:focus, .ag-theme-alpine-fusion [class^=ag-]:after, .ag-theme-alpine-fusion [class^=ag-]:before':
			{
				boxSizing: 'border-box',
				outline: 'none',
			},
		'.ag-theme-alpine-fusion [class^=ag-]::-ms-clear': {
			display: 'none',
		},
		'.ag-theme-alpine-fusion .ag-checkbox .ag-input-wrapper, .ag-theme-alpine-fusion .ag-radio-button .ag-input-wrapper':
			{
				overflow: 'visible',
			},
		'.ag-theme-alpine-fusion .ag-range-field .ag-input-wrapper': {
			height: '100%',
		},
		'.ag-theme-alpine-fusion .ag-toggle-button': {
			flex: 'none',
			width: 'unset',
			minWidth: 'unset',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-label-align-right .ag-label': {
			marginLeft: '6px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-label-align-right .ag-label': {
			marginRight: '6px',
		},
		'.ag-theme-alpine-fusion input[class^=ag-]': {
			margin: '0',
			backgroundColor: 'var(--ag-background-color, #fff)',
			fallbacks: [
				{
					backgroundColor: '#fff',
				},
			],
		},
		'.ag-theme-alpine-fusion textarea[class^=ag-], .ag-theme-alpine-fusion select[class^=ag-]': {
			backgroundColor: 'var(--ag-background-color, #fff)',
			fallbacks: [
				{
					backgroundColor: '#fff',
				},
			],
		},
		'.ag-theme-alpine-fusion input[class^=ag-]:not([type]), .ag-theme-alpine-fusion input[class^=ag-][type=text], .ag-theme-alpine-fusion input[class^=ag-][type=number], .ag-theme-alpine-fusion input[class^=ag-][type=tel], .ag-theme-alpine-fusion input[class^=ag-][type=date], .ag-theme-alpine-fusion input[class^=ag-][type=datetime-local], .ag-theme-alpine-fusion textarea[class^=ag-]':
			{
				fontSize: 'inherit',
				lineHeight: 'inherit',
				color: 'inherit',
				borderWidth: '1px',
				borderStyle: 'solid',
				borderColor: 'var(--ag-input-border-color, var(--ag-border-color, #babfc7))',
				fallbacks: [
					{
						borderColor: '#babfc7',
					},
				],
			},
		'.ag-theme-alpine-fusion input[class^=ag-]:not([type]):disabled, .ag-theme-alpine-fusion input[class^=ag-][type=text]:disabled, .ag-theme-alpine-fusion input[class^=ag-][type=number]:disabled, .ag-theme-alpine-fusion input[class^=ag-][type=tel]:disabled, .ag-theme-alpine-fusion input[class^=ag-][type=date]:disabled, .ag-theme-alpine-fusion input[class^=ag-][type=datetime-local]:disabled, .ag-theme-alpine-fusion textarea[class^=ag-]:disabled':
			{
				color: 'var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5))',
				fallbacks: [
					{
						borderColor: 'rgba(186, 191, 199, 0.3)',
					},
					{
						backgroundColor: '#f1f2f4',
					},
					{
						color: 'rgba(24, 29, 31, 0.5)',
					},
				],
				backgroundColor: 'var(--ag-input-disabled-background-color, #f1f2f4)',
				borderColor: 'var(--ag-input-disabled-border-color, rgba(186, 191, 199, 0.3))',
			},
		'.ag-theme-alpine-fusion input[class^=ag-]:not([type]):focus, .ag-theme-alpine-fusion input[class^=ag-][type=text]:focus, .ag-theme-alpine-fusion input[class^=ag-][type=number]:focus, .ag-theme-alpine-fusion input[class^=ag-][type=tel]:focus, .ag-theme-alpine-fusion input[class^=ag-][type=date]:focus, .ag-theme-alpine-fusion input[class^=ag-][type=datetime-local]:focus, .ag-theme-alpine-fusion textarea[class^=ag-]:focus':
			{
				outline: 'none',
				boxShadow: '0 0 2px 0.1rem rgba(33, 150, 243, 0.4)',
				borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
				fallbacks: [
					{
						borderColor: 'rgba(33, 150, 243, 0.4)',
					},
				],
			},
		'.ag-theme-alpine-fusion input[class^=ag-]:not([type]):invalid, .ag-theme-alpine-fusion input[class^=ag-][type=text]:invalid, .ag-theme-alpine-fusion input[class^=ag-][type=number]:invalid, .ag-theme-alpine-fusion input[class^=ag-][type=tel]:invalid, .ag-theme-alpine-fusion input[class^=ag-][type=date]:invalid, .ag-theme-alpine-fusion input[class^=ag-][type=datetime-local]:invalid, .ag-theme-alpine-fusion textarea[class^=ag-]:invalid':
			{
				borderWidth: '2px',
				borderStyle: 'solid',
				borderColor: 'var(--ag-input-border-color-invalid, var(--ag-invalid-color, #e02525))',
				fallbacks: [
					{
						borderColor: '#e02525',
					},
				],
			},
		'.ag-theme-alpine-fusion input[class^=ag-][type=number]': {
			mozAppearance: 'textfield',
		},
		'.ag-theme-alpine-fusion input[class^=ag-][type=number]::-webkit-outer-spin-button, .ag-theme-alpine-fusion input[class^=ag-][type=number]::-webkit-inner-spin-button':
			{
				webkitAppearance: 'none',
				margin: '0',
			},
		'.ag-theme-alpine-fusion input[class^=ag-][type=range]': {
			padding: '0',
			webkitAppearance: 'none',
			width: '100%',
			height: '100%',
			background: 'none',
			overflow: 'visible',
		},
		'.ag-theme-alpine-fusion input[class^=ag-][type=button]:focus, .ag-theme-alpine-fusion button[class^=ag-]:focus':
			{
				boxShadow: '0 0 2px 0.1rem rgba(33, 150, 243, 0.4)',
			},
		'.ag-theme-alpine-fusion .ag-drag-handle': {
			color: 'var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))',
			fallbacks: [
				{
					color: '#181d1f',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-list-item, .ag-theme-alpine-fusion .ag-virtual-list-item': {
			height: '24px',
		},
		'.ag-theme-alpine-fusion .ag-keyboard-focus .ag-virtual-list-item:focus': {
			outline: 'none',
		},
		'.ag-theme-alpine-fusion .ag-keyboard-focus .ag-virtual-list-item:focus::after': {
			content: '',
			position: 'absolute',
			backgroundColor: 'transparent',
			pointerEvents: 'none',
			top: '4px',
			left: '4px',
			display: 'block',
			width: 'calc(100% - 8px)',
			height: 'calc(100% - 8px)',
			border: '1px solid',
			borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					borderColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-select-list': {
			backgroundColor: 'var(--ag-background-color, #fff)',
			fallbacks: [
				{
					backgroundColor: '#fff',
				},
			],
			overflowY: 'auto',
			overflowX: 'hidden',
		},
		'.ag-theme-alpine-fusion .ag-list-item': {
			display: 'flex',
			alignItems: 'center',
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
		},
		'.ag-theme-alpine-fusion .ag-list-item.ag-active-item': {
			backgroundColor: 'var(--ag-row-hover-color, rgba(33, 150, 243, 0.1))',
			fallbacks: [
				{
					backgroundColor: 'rgba(33, 150, 243, 0.1)',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-select-list-item': {
			paddingLeft: '4px',
			paddingRight: '4px',
			cursor: 'default',
			mozUserSelect: 'none',
			webkitUserSelect: 'none',
			userSelect: 'none',
		},
		'.ag-theme-alpine-fusion .ag-select-list-item span': {
			whiteSpace: 'nowrap',
			textOverflow: 'ellipsis',
			overflow: 'hidden',
		},
		'.ag-theme-alpine-fusion .ag-select .ag-picker-field-wrapper': {
			backgroundColor: 'var(--ag-background-color, #fff)',
			fallbacks: [
				{
					backgroundColor: '#fff',
				},
			],
			minHeight: '24px',
			cursor: 'default',
		},
		'.ag-theme-alpine-fusion .ag-select.ag-disabled .ag-picker-field-wrapper:focus': {
			boxShadow: 'none',
		},
		'.ag-theme-alpine-fusion .ag-select:not(.ag-cell-editor)': {
			height: '24px',
		},
		'.ag-theme-alpine-fusion .ag-select .ag-picker-field-display': {
			margin: '4px',
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
		},
		'.ag-theme-alpine-fusion .ag-select .ag-picker-field-icon': {
			display: 'flex',
			alignItems: 'center',
		},
		'.ag-theme-alpine-fusion .ag-select.ag-disabled': {
			opacity: '0.5',
		},
		'.ag-theme-alpine-fusion .ag-rich-select': {
			backgroundColor: 'var(--ag-control-panel-background-color, #f8f8f8)',
			fallbacks: [
				{
					backgroundColor: '#f8f8f8',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-rich-select-list': {
			width: '100%',
			minWidth: '200px',
			height: '100%',
			fallbacks: [
				{
					height: '273px',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-rich-select-value': {
			padding: '0 6px 0 18px',
			height: '42px',
			borderBottom: 'solid 1px',
			borderBottomColor: 'var(--ag-secondary-border-color, #dde2eb)',
			fallbacks: [
				{
					borderBottomColor: '#dde2eb',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-rich-select-virtual-list-item': {
			cursor: 'default',
			height: '24px',
		},
		'.ag-keyboard-focus .ag-theme-alpine-fusion .ag-rich-select-virtual-list-item:focus::after': {
			content: 'none',
		},
		'.ag-theme-alpine-fusion .ag-rich-select-virtual-list-item:hover': {
			backgroundColor: 'var(--ag-row-hover-color, rgba(33, 150, 243, 0.1))',
			fallbacks: [
				{
					backgroundColor: 'rgba(33, 150, 243, 0.1)',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-rich-select-row': {
			paddingLeft: '18px',
		},
		'.ag-theme-alpine-fusion .ag-rich-select-row-selected': {
			backgroundColor: 'var(--ag-selected-row-background-color, #deedee)',
			fallbacks: [
				{
					backgroundColor: 'var(--ag-selected-row-background-color, rgba(33, 150, 243, 0.3))',
				},
				{
					backgroundColor: 'rgba(33, 150, 243, 0.3)',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-row-drag, .ag-theme-alpine-fusion .ag-selection-checkbox, .ag-theme-alpine-fusion .ag-group-expanded, .ag-theme-alpine-fusion .ag-group-contracted':
			{
				color: 'var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))',
				fallbacks: [
					{
						color: '#181d1f',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-drag, .ag-theme-alpine-fusion .ag-ltr .ag-selection-checkbox, .ag-theme-alpine-fusion .ag-ltr .ag-group-expanded, .ag-theme-alpine-fusion .ag-ltr .ag-group-contracted':
			{
				marginRight: '12px',
			},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-drag, .ag-theme-alpine-fusion .ag-rtl .ag-selection-checkbox, .ag-theme-alpine-fusion .ag-rtl .ag-group-expanded, .ag-theme-alpine-fusion .ag-rtl .ag-group-contracted':
			{
				marginLeft: '12px',
			},
		'.ag-theme-alpine-fusion .ag-cell-wrapper > *:not(.ag-cell-value):not(.ag-group-value)': {
			agInternalCalculatedLineHeight: 'var(--ag-line-height, 40px)',
			agInternalPaddedRowHeight: '40px',
			height: 'min(var(--ag-internal-calculated-line-height), var(--ag-internal-padded-row-height))',
			display: 'flex',
			alignItems: 'center',
			flex: 'none',
		},
		'.ag-theme-alpine-fusion .ag-group-expanded, .ag-theme-alpine-fusion .ag-group-contracted': {
			cursor: 'pointer',
		},
		'.ag-theme-alpine-fusion .ag-group-title-bar-icon': {
			cursor: 'pointer',
			flex: 'none',
			color: 'var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))',
			fallbacks: [
				{
					color: '#181d1f',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-group-child-count': {
			marginLeft: '2px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-group-child-count': {
			marginRight: '2px',
		},
		'.ag-theme-alpine-fusion .ag-group-title-bar': {
			backgroundColor: 'var(--ag-subheader-background-color, #fff)',
			fallbacks: [
				{
					backgroundColor: '#fff',
				},
			],
			padding: '6px',
		},
		'.ag-theme-alpine-fusion .ag-group-toolbar': {
			padding: '6px',
		},
		'.ag-theme-alpine-fusion .ag-disabled-group-title-bar, .ag-theme-alpine-fusion .ag-disabled-group-container': {
			opacity: '0.5',
		},
		'.ag-theme-alpine-fusion .group-item': {
			margin: '3px 0',
		},
		'.ag-theme-alpine-fusion .ag-label': {
			whiteSpace: 'nowrap',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-label': {
			marginRight: '6px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-label': {
			marginLeft: '6px',
		},
		'.ag-theme-alpine-fusion .ag-label-align-top .ag-label': {
			marginBottom: '3px',
		},
		'.ag-theme-alpine-fusion .ag-angle-select[disabled]': {
			color: 'var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5))',
			fallbacks: [
				{
					color: 'rgba(24, 29, 31, 0.5)',
				},
			],
			pointerEvents: 'none',
		},
		'.ag-theme-alpine-fusion .ag-angle-select[disabled] .ag-angle-select-field': {
			opacity: '0.4',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-slider-field, .ag-theme-alpine-fusion .ag-ltr .ag-angle-select-field': {
			marginRight: '12px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-slider-field, .ag-theme-alpine-fusion .ag-rtl .ag-angle-select-field': {
			marginLeft: '12px',
		},
		'.ag-theme-alpine-fusion .ag-angle-select-parent-circle': {
			width: '24px',
			height: '24px',
			borderRadius: '12px',
			border: 'solid 1px',
			borderColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					backgroundColor: '#fff',
				},
				{
					borderColor: '#babfc7',
				},
			],
			backgroundColor: 'var(--ag-background-color, #fff)',
		},
		'.ag-theme-alpine-fusion .ag-angle-select-child-circle': {
			top: '4px',
			left: '12px',
			width: '6px',
			height: '6px',
			marginLeft: '-3px',
			marginTop: '-4px',
			borderRadius: '3px',
			backgroundColor: 'var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))',
			fallbacks: [
				{
					backgroundColor: '#181d1f',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-picker-field-wrapper': {
			border: '1px solid',
			borderColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderColor: '#babfc7',
				},
			],
			borderRadius: '5px',
		},
		'.ag-theme-alpine-fusion .ag-picker-field-wrapper:focus': {
			boxShadow: '0 0 2px 0.1rem rgba(33, 150, 243, 0.4)',
		},
		'.ag-theme-alpine-fusion .ag-picker-field-button': {
			backgroundColor: 'var(--ag-background-color, #fff)',
			fallbacks: [
				{
					color: '#181d1f',
				},
				{
					backgroundColor: '#fff',
				},
			],
			color: 'var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))',
		},
		'.ag-theme-alpine-fusion .ag-dialog.ag-color-dialog': {
			borderRadius: '5px',
		},
		'.ag-theme-alpine-fusion .ag-color-picker .ag-picker-field-display': {
			height: '16px',
		},
		'.ag-theme-alpine-fusion .ag-color-panel': {
			padding: '6px',
		},
		'.ag-theme-alpine-fusion .ag-spectrum-color': {
			backgroundColor: 'rgb(255, 0, 0)',
			borderRadius: '2px',
		},
		'.ag-theme-alpine-fusion .ag-spectrum-tools': {
			padding: '10px',
		},
		'.ag-theme-alpine-fusion .ag-spectrum-sat': {
			backgroundImage: 'linear-gradient(to right, white, rgba(204, 154, 129, 0))',
		},
		'.ag-theme-alpine-fusion .ag-spectrum-val': {
			backgroundImage: 'linear-gradient(to top, black, rgba(204, 154, 129, 0))',
		},
		'.ag-theme-alpine-fusion .ag-spectrum-dragger': {
			borderRadius: '12px',
			height: '12px',
			width: '12px',
			border: '1px solid white',
			background: 'black',
			boxShadow: '0 0 2px 0px rgba(0, 0, 0, 0.24)',
		},
		'.ag-theme-alpine-fusion .ag-spectrum-hue-background': {
			borderRadius: '2px',
		},
		'.ag-theme-alpine-fusion .ag-spectrum-alpha-background': {
			borderRadius: '2px',
		},
		'.ag-theme-alpine-fusion .ag-spectrum-tool': {
			marginBottom: '10px',
			height: '11px',
			borderRadius: '2px',
		},
		'.ag-theme-alpine-fusion .ag-spectrum-slider': {
			marginTop: '-12px',
			width: '13px',
			height: '13px',
			borderRadius: '13px',
			backgroundColor: 'rgb(248, 248, 248)',
			boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
		},
		'.ag-theme-alpine-fusion .ag-recent-color': {
			margin: '0 3px',
		},
		'.ag-theme-alpine-fusion .ag-recent-color:first-child': {
			marginLeft: '0',
		},
		'.ag-theme-alpine-fusion .ag-recent-color:last-child': {
			marginRight: '0',
		},
		'.ag-theme-alpine-fusion.ag-dnd-ghost': {
			border: 'solid 1px',
			borderColor: 'var(--ag-secondary-border-color, #dde2eb)',
			fallbacks: [
				{
					padding: '6px',
				},
				{
					color: '#181d1f',
				},
				{
					borderColor: '#dde2eb',
				},
				{
					borderColor: 'var(--ag-border-color, #babfc7)',
				},
				{
					border: 'solid 1px',
				},
				{
					background: '#fff',
				},
				{
					borderColor: '#babfc7',
				},
			],
			background: 'var(--ag-background-color, #fff)',
			borderRadius: '3px',
			boxShadow: '0 1px 4px 1px rgba(186, 191, 199, 0.4)',
			padding: '0 12px',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			color: 'var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))',
			height: '48px !important',
			lineHeight: '48px',
			margin: '0',
			transform: 'translateY(12px)',
		},
		'.ag-theme-alpine-fusion .ag-dnd-ghost-icon': {
			marginRight: '6px',
			color: 'var(--ag-foreground-color, #181d1f)',
			fallbacks: [
				{
					color: '#181d1f',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-popup-child:not(.ag-tooltip-custom)': {
			boxShadow: '0 1px 4px 1px rgba(186, 191, 199, 0.4)',
		},
		'.ag-dragging-range-handle .ag-theme-alpine-fusion .ag-dialog, .ag-dragging-fill-handle .ag-theme-alpine-fusion .ag-dialog':
			{
				opacity: '0.7',
				pointerEvents: 'none',
			},
		'.ag-theme-alpine-fusion .ag-dialog': {
			borderRadius: '3px',
			border: 'solid 1px',
			borderColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-panel': {
			backgroundColor: 'var(--ag-background-color, #fff)',
			fallbacks: [
				{
					backgroundColor: '#fff',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-panel-title-bar': {
			backgroundColor: 'var(--ag-header-background-color, #f8f8f8)',
			fallbacks: [
				{
					borderBottomColor: '#babfc7',
				},
				{
					color: '#181d1f',
				},
				{
					backgroundColor: '#f8f8f8',
				},
			],
			color: 'var(--ag-header-foreground-color, var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f)))',
			height: '48px',
			padding: '6px 18px',
			borderBottom: 'solid 1px',
			borderBottomColor: 'var(--ag-border-color, #babfc7)',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-panel-title-bar-button': {
			marginLeft: '12px',
			fallbacks: [
				{
					marginLeft: '6px',
				},
			],
			marginRight: '6px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-panel-title-bar-button': {
			marginRight: '12px',
			fallbacks: [
				{
					marginRight: '6px',
				},
			],
			marginLeft: '6px',
		},
		'.ag-theme-alpine-fusion .ag-tooltip': {
			backgroundColor: 'var(--ag-header-background-color, #f8f8f8)',
			fallbacks: [
				{
					borderColor: '#babfc7',
				},
				{
					color: '#181d1f',
				},
				{
					backgroundColor: '#f8f8f8',
				},
			],
			color: 'var(--ag-foreground-color, #181d1f)',
			padding: '6px',
			border: 'solid 1px',
			borderColor: 'var(--ag-border-color, #babfc7)',
			borderRadius: '3px',
			transition: 'opacity 1s',
			whiteSpace: 'normal',
		},
		'.ag-theme-alpine-fusion .ag-tooltip.ag-tooltip-hiding': {
			opacity: '0',
		},
		'.ag-theme-alpine-fusion .ag-tooltip-custom': {
			transition: 'opacity 1s',
		},
		'.ag-theme-alpine-fusion .ag-tooltip-custom.ag-tooltip-hiding': {
			opacity: '0',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-column-select-indent-1': {
			paddingLeft: '16px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-column-select-indent-1': {
			paddingRight: '16px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-column-select-indent-2': {
			paddingLeft: '32px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-column-select-indent-2': {
			paddingRight: '32px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-column-select-indent-3': {
			paddingLeft: '48px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-column-select-indent-3': {
			paddingRight: '48px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-column-select-indent-4': {
			paddingLeft: '64px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-column-select-indent-4': {
			paddingRight: '64px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-column-select-indent-5': {
			paddingLeft: '80px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-column-select-indent-5': {
			paddingRight: '80px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-column-select-indent-6': {
			paddingLeft: '96px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-column-select-indent-6': {
			paddingRight: '96px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-column-select-indent-7': {
			paddingLeft: '112px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-column-select-indent-7': {
			paddingRight: '112px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-column-select-indent-8': {
			paddingLeft: '128px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-column-select-indent-8': {
			paddingRight: '128px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-column-select-indent-9': {
			paddingLeft: '144px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-column-select-indent-9': {
			paddingRight: '144px',
		},
		'.ag-theme-alpine-fusion .ag-column-select-header-icon': {
			cursor: 'pointer',
		},
		'.ag-theme-alpine-fusion .ag-keyboard-focus .ag-column-select-header-icon:focus': {
			outline: 'none',
		},
		'.ag-theme-alpine-fusion .ag-keyboard-focus .ag-column-select-header-icon:focus::after': {
			content: '',
			position: 'absolute',
			backgroundColor: 'transparent',
			pointerEvents: 'none',
			top: '0px',
			left: '0px',
			display: 'block',
			width: 'calc(100% - 0px)',
			height: 'calc(100% - 0px)',
			border: '1px solid',
			borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					borderColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-column-group-icons:not(:last-child), .ag-theme-alpine-fusion .ag-ltr .ag-column-select-header-icon:not(:last-child), .ag-theme-alpine-fusion .ag-ltr .ag-column-select-header-checkbox:not(:last-child), .ag-theme-alpine-fusion .ag-ltr .ag-column-select-header-filter-wrapper:not(:last-child), .ag-theme-alpine-fusion .ag-ltr .ag-column-select-checkbox:not(:last-child), .ag-theme-alpine-fusion .ag-ltr .ag-column-select-column-drag-handle:not(:last-child), .ag-theme-alpine-fusion .ag-ltr .ag-column-select-column-group-drag-handle:not(:last-child), .ag-theme-alpine-fusion .ag-ltr .ag-column-select-column-label:not(:last-child)':
			{
				marginRight: '12px',
			},
		'.ag-theme-alpine-fusion .ag-rtl .ag-column-group-icons:not(:last-child), .ag-theme-alpine-fusion .ag-rtl .ag-column-select-header-icon:not(:last-child), .ag-theme-alpine-fusion .ag-rtl .ag-column-select-header-checkbox:not(:last-child), .ag-theme-alpine-fusion .ag-rtl .ag-column-select-header-filter-wrapper:not(:last-child), .ag-theme-alpine-fusion .ag-rtl .ag-column-select-checkbox:not(:last-child), .ag-theme-alpine-fusion .ag-rtl .ag-column-select-column-drag-handle:not(:last-child), .ag-theme-alpine-fusion .ag-rtl .ag-column-select-column-group-drag-handle:not(:last-child), .ag-theme-alpine-fusion .ag-rtl .ag-column-select-column-label:not(:last-child)':
			{
				marginLeft: '12px',
			},
		'.ag-theme-alpine-fusion .ag-keyboard-focus .ag-column-select-virtual-list-item:focus': {
			outline: 'none',
		},
		'.ag-theme-alpine-fusion .ag-keyboard-focus .ag-column-select-virtual-list-item:focus::after': {
			content: '',
			position: 'absolute',
			backgroundColor: 'transparent',
			pointerEvents: 'none',
			top: '1px',
			left: '1px',
			display: 'block',
			width: 'calc(100% - 2px)',
			height: 'calc(100% - 2px)',
			border: '1px solid',
			borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					borderColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-column-select-column-group:not(:last-child), .ag-theme-alpine-fusion .ag-column-select-column:not(:last-child)':
			{
				marginBottom: '9px',
			},
		'.ag-theme-alpine-fusion .ag-column-select-column-readonly, .ag-theme-alpine-fusion .ag-column-select-column-group-readonly':
			{
				color: 'var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5))',
				fallbacks: [
					{
						color: 'rgba(24, 29, 31, 0.5)',
					},
				],
				pointerEvents: 'none',
			},
		'.ag-theme-alpine-fusion .ag-ltr .ag-column-select-add-group-indent': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-column-select-add-group-indent': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-column-select-virtual-list-viewport': {
			padding: '6px 0px',
		},
		'.ag-theme-alpine-fusion .ag-column-select-virtual-list-item': {
			padding: '0 12px',
		},
		'.ag-theme-alpine-fusion .ag-rtl': {
			textAlign: 'right',
		},
		'.ag-theme-alpine-fusion .ag-root-wrapper': {
			border: 'solid 1px',
			borderColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-1': {
			paddingLeft: '46px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-1': {
			paddingRight: '46px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-1': {
			paddingLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-1': {
			paddingRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-1 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-1 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-2': {
			paddingLeft: '74px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-2': {
			paddingRight: '74px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-2': {
			paddingLeft: '56px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-2': {
			paddingRight: '56px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-2 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-2 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-3': {
			paddingLeft: '102px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-3': {
			paddingRight: '102px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-3': {
			paddingLeft: '84px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-3': {
			paddingRight: '84px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-3 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-3 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-4': {
			paddingLeft: '130px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-4': {
			paddingRight: '130px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-4': {
			paddingLeft: '112px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-4': {
			paddingRight: '112px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-4 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-4 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-5': {
			paddingLeft: '158px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-5': {
			paddingRight: '158px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-5': {
			paddingLeft: '140px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-5': {
			paddingRight: '140px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-5 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-5 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-6': {
			paddingLeft: '186px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-6': {
			paddingRight: '186px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-6': {
			paddingLeft: '168px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-6': {
			paddingRight: '168px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-6 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-6 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-7': {
			paddingLeft: '214px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-7': {
			paddingRight: '214px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-7': {
			paddingLeft: '196px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-7': {
			paddingRight: '196px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-7 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-7 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-8': {
			paddingLeft: '242px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-8': {
			paddingRight: '242px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-8': {
			paddingLeft: '224px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-8': {
			paddingRight: '224px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-8 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-8 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-9': {
			paddingLeft: '270px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-9': {
			paddingRight: '270px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-9': {
			paddingLeft: '252px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-9': {
			paddingRight: '252px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-9 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-9 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-10': {
			paddingLeft: '298px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-10': {
			paddingRight: '298px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-10': {
			paddingLeft: '280px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-10': {
			paddingRight: '280px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-10 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-10 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-11': {
			paddingLeft: '326px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-11': {
			paddingRight: '326px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-11': {
			paddingLeft: '308px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-11': {
			paddingRight: '308px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-11 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-11 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-12': {
			paddingLeft: '354px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-12': {
			paddingRight: '354px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-12': {
			paddingLeft: '336px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-12': {
			paddingRight: '336px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-12 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-12 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-13': {
			paddingLeft: '382px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-13': {
			paddingRight: '382px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-13': {
			paddingLeft: '364px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-13': {
			paddingRight: '364px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-13 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-13 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-14': {
			paddingLeft: '410px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-14': {
			paddingRight: '410px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-14': {
			paddingLeft: '392px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-14': {
			paddingRight: '392px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-14 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-14 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-15': {
			paddingLeft: '438px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-15': {
			paddingRight: '438px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-15': {
			paddingLeft: '420px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-15': {
			paddingRight: '420px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-15 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-15 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-16': {
			paddingLeft: '466px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-16': {
			paddingRight: '466px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-16': {
			paddingLeft: '448px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-16': {
			paddingRight: '448px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-16 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-16 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-17': {
			paddingLeft: '494px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-17': {
			paddingRight: '494px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-17': {
			paddingLeft: '476px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-17': {
			paddingRight: '476px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-17 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-17 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-18': {
			paddingLeft: '522px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-18': {
			paddingRight: '522px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-18': {
			paddingLeft: '504px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-18': {
			paddingRight: '504px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-18 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-18 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-19': {
			paddingLeft: '550px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-19': {
			paddingRight: '550px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-19': {
			paddingLeft: '532px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-19': {
			paddingRight: '532px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-19 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-19 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-20': {
			paddingLeft: '578px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-20': {
			paddingRight: '578px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-20': {
			paddingLeft: '560px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-20': {
			paddingRight: '560px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-20 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-20 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-21': {
			paddingLeft: '606px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-21': {
			paddingRight: '606px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-21': {
			paddingLeft: '588px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-21': {
			paddingRight: '588px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-21 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-21 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-22': {
			paddingLeft: '634px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-22': {
			paddingRight: '634px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-22': {
			paddingLeft: '616px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-22': {
			paddingRight: '616px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-22 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-22 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-23': {
			paddingLeft: '662px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-23': {
			paddingRight: '662px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-23': {
			paddingLeft: '644px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-23': {
			paddingRight: '644px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-23 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-23 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-24': {
			paddingLeft: '690px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-24': {
			paddingRight: '690px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-24': {
			paddingLeft: '672px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-24': {
			paddingRight: '672px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-24 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-24 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-25': {
			paddingLeft: '718px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-25': {
			paddingRight: '718px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-25': {
			paddingLeft: '700px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-25': {
			paddingRight: '700px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-25 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-25 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-26': {
			paddingLeft: '746px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-26': {
			paddingRight: '746px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-26': {
			paddingLeft: '728px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-26': {
			paddingRight: '728px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-26 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-26 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-27': {
			paddingLeft: '774px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-27': {
			paddingRight: '774px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-27': {
			paddingLeft: '756px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-27': {
			paddingRight: '756px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-27 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-27 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-28': {
			paddingLeft: '802px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-28': {
			paddingRight: '802px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-28': {
			paddingLeft: '784px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-28': {
			paddingRight: '784px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-28 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-28 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-29': {
			paddingLeft: '830px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-29': {
			paddingRight: '830px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-29': {
			paddingLeft: '812px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-29': {
			paddingRight: '812px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-29 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-29 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-30': {
			paddingLeft: '858px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-30': {
			paddingRight: '858px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-30': {
			paddingLeft: '840px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-30': {
			paddingRight: '840px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-30 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-30 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-31': {
			paddingLeft: '886px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-31': {
			paddingRight: '886px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-31': {
			paddingLeft: '868px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-31': {
			paddingRight: '868px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-31 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-31 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-32': {
			paddingLeft: '914px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-32': {
			paddingRight: '914px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-32': {
			paddingLeft: '896px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-32': {
			paddingRight: '896px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-32 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-32 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-33': {
			paddingLeft: '942px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-33': {
			paddingRight: '942px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-33': {
			paddingLeft: '924px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-33': {
			paddingRight: '924px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-33 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-33 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-34': {
			paddingLeft: '970px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-34': {
			paddingRight: '970px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-34': {
			paddingLeft: '952px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-34': {
			paddingRight: '952px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-34 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-34 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-35': {
			paddingLeft: '998px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-35': {
			paddingRight: '998px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-35': {
			paddingLeft: '980px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-35': {
			paddingRight: '980px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-35 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-35 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-36': {
			paddingLeft: '1026px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-36': {
			paddingRight: '1026px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-36': {
			paddingLeft: '1008px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-36': {
			paddingRight: '1008px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-36 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-36 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-37': {
			paddingLeft: '1054px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-37': {
			paddingRight: '1054px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-37': {
			paddingLeft: '1036px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-37': {
			paddingRight: '1036px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-37 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-37 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-38': {
			paddingLeft: '1082px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-38': {
			paddingRight: '1082px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-38': {
			paddingLeft: '1064px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-38': {
			paddingRight: '1064px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-38 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-38 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-39': {
			paddingLeft: '1110px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-39': {
			paddingRight: '1110px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-39': {
			paddingLeft: '1092px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-39': {
			paddingRight: '1092px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-39 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-39 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-40': {
			paddingLeft: '1138px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-40': {
			paddingRight: '1138px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-40': {
			paddingLeft: '1120px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-40': {
			paddingRight: '1120px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-40 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-40 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-41': {
			paddingLeft: '1166px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-41': {
			paddingRight: '1166px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-41': {
			paddingLeft: '1148px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-41': {
			paddingRight: '1148px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-41 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-41 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-42': {
			paddingLeft: '1194px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-42': {
			paddingRight: '1194px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-42': {
			paddingLeft: '1176px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-42': {
			paddingRight: '1176px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-42 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-42 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-43': {
			paddingLeft: '1222px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-43': {
			paddingRight: '1222px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-43': {
			paddingLeft: '1204px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-43': {
			paddingRight: '1204px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-43 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-43 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-44': {
			paddingLeft: '1250px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-44': {
			paddingRight: '1250px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-44': {
			paddingLeft: '1232px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-44': {
			paddingRight: '1232px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-44 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-44 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-45': {
			paddingLeft: '1278px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-45': {
			paddingRight: '1278px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-45': {
			paddingLeft: '1260px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-45': {
			paddingRight: '1260px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-45 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-45 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-46': {
			paddingLeft: '1306px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-46': {
			paddingRight: '1306px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-46': {
			paddingLeft: '1288px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-46': {
			paddingRight: '1288px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-46 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-46 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-47': {
			paddingLeft: '1334px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-47': {
			paddingRight: '1334px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-47': {
			paddingLeft: '1316px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-47': {
			paddingRight: '1316px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-47 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-47 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-48': {
			paddingLeft: '1362px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-48': {
			paddingRight: '1362px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-48': {
			paddingLeft: '1344px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-48': {
			paddingRight: '1344px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-48 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-48 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-49': {
			paddingLeft: '1390px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-49': {
			paddingRight: '1390px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-49': {
			paddingLeft: '1372px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-49': {
			paddingRight: '1372px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-49 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-49 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-50': {
			paddingLeft: '1418px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-50': {
			paddingRight: '1418px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-50': {
			paddingLeft: '1400px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-50': {
			paddingRight: '1400px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-50 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-50 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-51': {
			paddingLeft: '1446px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-51': {
			paddingRight: '1446px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-51': {
			paddingLeft: '1428px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-51': {
			paddingRight: '1428px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-51 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-51 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-52': {
			paddingLeft: '1474px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-52': {
			paddingRight: '1474px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-52': {
			paddingLeft: '1456px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-52': {
			paddingRight: '1456px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-52 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-52 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-53': {
			paddingLeft: '1502px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-53': {
			paddingRight: '1502px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-53': {
			paddingLeft: '1484px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-53': {
			paddingRight: '1484px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-53 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-53 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-54': {
			paddingLeft: '1530px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-54': {
			paddingRight: '1530px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-54': {
			paddingLeft: '1512px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-54': {
			paddingRight: '1512px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-54 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-54 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-55': {
			paddingLeft: '1558px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-55': {
			paddingRight: '1558px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-55': {
			paddingLeft: '1540px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-55': {
			paddingRight: '1540px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-55 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-55 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-56': {
			paddingLeft: '1586px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-56': {
			paddingRight: '1586px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-56': {
			paddingLeft: '1568px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-56': {
			paddingRight: '1568px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-56 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-56 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-57': {
			paddingLeft: '1614px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-57': {
			paddingRight: '1614px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-57': {
			paddingLeft: '1596px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-57': {
			paddingRight: '1596px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-57 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-57 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-58': {
			paddingLeft: '1642px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-58': {
			paddingRight: '1642px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-58': {
			paddingLeft: '1624px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-58': {
			paddingRight: '1624px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-58 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-58 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-59': {
			paddingLeft: '1670px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-59': {
			paddingRight: '1670px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-59': {
			paddingLeft: '1652px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-59': {
			paddingRight: '1652px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-59 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-59 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-60': {
			paddingLeft: '1698px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-60': {
			paddingRight: '1698px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-60': {
			paddingLeft: '1680px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-60': {
			paddingRight: '1680px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-60 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-60 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-61': {
			paddingLeft: '1726px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-61': {
			paddingRight: '1726px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-61': {
			paddingLeft: '1708px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-61': {
			paddingRight: '1708px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-61 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-61 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-62': {
			paddingLeft: '1754px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-62': {
			paddingRight: '1754px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-62': {
			paddingLeft: '1736px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-62': {
			paddingRight: '1736px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-62 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-62 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-63': {
			paddingLeft: '1782px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-63': {
			paddingRight: '1782px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-63': {
			paddingLeft: '1764px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-63': {
			paddingRight: '1764px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-63 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-63 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-64': {
			paddingLeft: '1810px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-64': {
			paddingRight: '1810px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-64': {
			paddingLeft: '1792px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-64': {
			paddingRight: '1792px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-64 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-64 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-65': {
			paddingLeft: '1838px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-65': {
			paddingRight: '1838px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-65': {
			paddingLeft: '1820px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-65': {
			paddingRight: '1820px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-65 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-65 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-66': {
			paddingLeft: '1866px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-66': {
			paddingRight: '1866px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-66': {
			paddingLeft: '1848px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-66': {
			paddingRight: '1848px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-66 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-66 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-67': {
			paddingLeft: '1894px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-67': {
			paddingRight: '1894px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-67': {
			paddingLeft: '1876px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-67': {
			paddingRight: '1876px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-67 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-67 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-68': {
			paddingLeft: '1922px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-68': {
			paddingRight: '1922px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-68': {
			paddingLeft: '1904px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-68': {
			paddingRight: '1904px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-68 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-68 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-69': {
			paddingLeft: '1950px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-69': {
			paddingRight: '1950px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-69': {
			paddingLeft: '1932px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-69': {
			paddingRight: '1932px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-69 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-69 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-70': {
			paddingLeft: '1978px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-70': {
			paddingRight: '1978px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-70': {
			paddingLeft: '1960px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-70': {
			paddingRight: '1960px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-70 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-70 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-71': {
			paddingLeft: '2006px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-71': {
			paddingRight: '2006px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-71': {
			paddingLeft: '1988px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-71': {
			paddingRight: '1988px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-71 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-71 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-72': {
			paddingLeft: '2034px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-72': {
			paddingRight: '2034px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-72': {
			paddingLeft: '2016px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-72': {
			paddingRight: '2016px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-72 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-72 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-73': {
			paddingLeft: '2062px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-73': {
			paddingRight: '2062px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-73': {
			paddingLeft: '2044px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-73': {
			paddingRight: '2044px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-73 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-73 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-74': {
			paddingLeft: '2090px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-74': {
			paddingRight: '2090px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-74': {
			paddingLeft: '2072px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-74': {
			paddingRight: '2072px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-74 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-74 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-75': {
			paddingLeft: '2118px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-75': {
			paddingRight: '2118px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-75': {
			paddingLeft: '2100px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-75': {
			paddingRight: '2100px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-75 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-75 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-76': {
			paddingLeft: '2146px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-76': {
			paddingRight: '2146px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-76': {
			paddingLeft: '2128px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-76': {
			paddingRight: '2128px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-76 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-76 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-77': {
			paddingLeft: '2174px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-77': {
			paddingRight: '2174px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-77': {
			paddingLeft: '2156px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-77': {
			paddingRight: '2156px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-77 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-77 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-78': {
			paddingLeft: '2202px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-78': {
			paddingRight: '2202px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-78': {
			paddingLeft: '2184px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-78': {
			paddingRight: '2184px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-78 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-78 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-79': {
			paddingLeft: '2230px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-79': {
			paddingRight: '2230px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-79': {
			paddingLeft: '2212px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-79': {
			paddingRight: '2212px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-79 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-79 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-80': {
			paddingLeft: '2258px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-80': {
			paddingRight: '2258px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-80': {
			paddingLeft: '2240px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-80': {
			paddingRight: '2240px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-80 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-80 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-81': {
			paddingLeft: '2286px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-81': {
			paddingRight: '2286px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-81': {
			paddingLeft: '2268px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-81': {
			paddingRight: '2268px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-81 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-81 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-82': {
			paddingLeft: '2314px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-82': {
			paddingRight: '2314px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-82': {
			paddingLeft: '2296px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-82': {
			paddingRight: '2296px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-82 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-82 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-83': {
			paddingLeft: '2342px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-83': {
			paddingRight: '2342px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-83': {
			paddingLeft: '2324px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-83': {
			paddingRight: '2324px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-83 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-83 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-84': {
			paddingLeft: '2370px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-84': {
			paddingRight: '2370px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-84': {
			paddingLeft: '2352px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-84': {
			paddingRight: '2352px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-84 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-84 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-85': {
			paddingLeft: '2398px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-85': {
			paddingRight: '2398px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-85': {
			paddingLeft: '2380px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-85': {
			paddingRight: '2380px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-85 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-85 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-86': {
			paddingLeft: '2426px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-86': {
			paddingRight: '2426px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-86': {
			paddingLeft: '2408px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-86': {
			paddingRight: '2408px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-86 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-86 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-87': {
			paddingLeft: '2454px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-87': {
			paddingRight: '2454px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-87': {
			paddingLeft: '2436px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-87': {
			paddingRight: '2436px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-87 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-87 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-88': {
			paddingLeft: '2482px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-88': {
			paddingRight: '2482px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-88': {
			paddingLeft: '2464px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-88': {
			paddingRight: '2464px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-88 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-88 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-89': {
			paddingLeft: '2510px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-89': {
			paddingRight: '2510px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-89': {
			paddingLeft: '2492px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-89': {
			paddingRight: '2492px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-89 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-89 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-90': {
			paddingLeft: '2538px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-90': {
			paddingRight: '2538px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-90': {
			paddingLeft: '2520px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-90': {
			paddingRight: '2520px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-90 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-90 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-91': {
			paddingLeft: '2566px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-91': {
			paddingRight: '2566px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-91': {
			paddingLeft: '2548px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-91': {
			paddingRight: '2548px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-91 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-91 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-92': {
			paddingLeft: '2594px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-92': {
			paddingRight: '2594px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-92': {
			paddingLeft: '2576px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-92': {
			paddingRight: '2576px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-92 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-92 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-93': {
			paddingLeft: '2622px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-93': {
			paddingRight: '2622px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-93': {
			paddingLeft: '2604px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-93': {
			paddingRight: '2604px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-93 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-93 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-94': {
			paddingLeft: '2650px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-94': {
			paddingRight: '2650px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-94': {
			paddingLeft: '2632px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-94': {
			paddingRight: '2632px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-94 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-94 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-95': {
			paddingLeft: '2678px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-95': {
			paddingRight: '2678px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-95': {
			paddingLeft: '2660px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-95': {
			paddingRight: '2660px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-95 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-95 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-96': {
			paddingLeft: '2706px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-96': {
			paddingRight: '2706px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-96': {
			paddingLeft: '2688px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-96': {
			paddingRight: '2688px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-96 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-96 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-97': {
			paddingLeft: '2734px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-97': {
			paddingRight: '2734px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-97': {
			paddingLeft: '2716px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-97': {
			paddingRight: '2716px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-97 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-97 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-98': {
			paddingLeft: '2762px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-98': {
			paddingRight: '2762px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-98': {
			paddingLeft: '2744px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-98': {
			paddingRight: '2744px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-98 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-98 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-99': {
			paddingLeft: '2790px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-99': {
			paddingRight: '2790px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-indent-99': {
			paddingLeft: '2772px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-indent-99': {
			paddingRight: '2772px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-level-99 .ag-pivot-leaf-group': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-level-99 .ag-pivot-leaf-group': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-row-group-leaf-indent': {
			marginLeft: '28px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-row-group-leaf-indent': {
			marginRight: '28px',
		},
		'.ag-theme-alpine-fusion .ag-value-change-delta': {
			paddingRight: '2px',
		},
		'.ag-theme-alpine-fusion .ag-value-change-delta-up': {
			color: 'var(--ag-value-change-delta-up-color, #43a047)',
			fallbacks: [
				{
					color: '#43a047',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-value-change-delta-down': {
			color: 'var(--ag-value-change-delta-down-color, #e53935)',
			fallbacks: [
				{
					color: '#e53935',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-value-change-value': {
			backgroundColor: 'transparent',
			borderRadius: '1px',
			paddingLeft: '1px',
			paddingRight: '1px',
			transition: 'background-color 1s',
		},
		'.ag-theme-alpine-fusion .ag-value-change-value-highlight': {
			backgroundColor: 'var(--ag-value-change-value-highlight-background-color, rgba(22, 160, 133, 0.5))',
			fallbacks: [
				{
					backgroundColor: 'rgba(22, 160, 133, 0.5)',
				},
			],
			transition: 'background-color 0.1s',
		},
		'.ag-theme-alpine-fusion .ag-cell-data-changed': {
			backgroundColor:
				'var(--ag-value-change-value-highlight-background-color, rgba(22, 160, 133, 0.5)) !important',
			fallbacks: [
				{
					backgroundColor: 'rgba(22, 160, 133, 0.5) !important',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-cell-data-changed-animation': {
			backgroundColor: 'transparent',
		},
		'.ag-theme-alpine-fusion .ag-cell-highlight': {
			backgroundColor:
				'var(--ag-range-selection-highlight-color, var(--ag-range-selection-border-color, #2196f3)) !important',
			fallbacks: [
				{
					backgroundColor: '#2196f3 !important',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-row': {
			height: '42px',
			backgroundColor: 'var(--ag-background-color, #fff)',
			fallbacks: [
				{
					borderColor: '#dde2eb',
				},
				{
					color: '#181d1f',
				},
				{
					backgroundColor: '#fff',
				},
			],
			color: 'var(--ag-data-color, var(--ag-foreground-color, #181d1f))',
			borderWidth: '1px',
			borderColor: 'var(--ag-row-border-color, var(--ag-secondary-border-color, #dde2eb))',
			borderBottomStyle: 'solid',
			fontSize: '14px',
		},
		'.ag-theme-alpine-fusion .ag-row-highlight-above::after, .ag-theme-alpine-fusion .ag-row-highlight-below::after':
			{
				content: '',
				position: 'absolute',
				width: 'calc(100% - 1px)',
				height: '1px',
				backgroundColor: 'var(--ag-range-selection-border-color, #2196f3)',
				fallbacks: [
					{
						backgroundColor: '#2196f3',
					},
				],
				left: '1px',
			},
		'.ag-theme-alpine-fusion .ag-row-highlight-above::after': {
			top: '-1px',
		},
		'.ag-theme-alpine-fusion .ag-row-highlight-above.ag-row-first::after': {
			top: '0',
		},
		'.ag-theme-alpine-fusion .ag-row-highlight-below::after': {
			bottom: '0px',
		},
		'.ag-theme-alpine-fusion .ag-row-odd': {
			backgroundColor: 'var(--ag-odd-row-background-color, #fcfcfc)',
			fallbacks: [
				{
					backgroundColor: '#fcfcfc',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-body-horizontal-scroll:not(.ag-scrollbar-invisible) .ag-horizontal-left-spacer:not(.ag-scroller-corner)':
			{
				borderRight: 'solid 1px',
				borderRightColor: 'var(--ag-border-color, #babfc7)',
				fallbacks: [
					{
						borderRightColor: '#babfc7',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-body-horizontal-scroll:not(.ag-scrollbar-invisible) .ag-horizontal-right-spacer:not(.ag-scroller-corner)':
			{
				borderLeft: 'solid 1px',
				borderLeftColor: 'var(--ag-border-color, #babfc7)',
				fallbacks: [
					{
						borderLeftColor: '#babfc7',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-row-selected::before': {
			content: '',
			backgroundColor: 'var(--ag-selected-row-background-color, rgba(33, 150, 243, 0.3))',
			fallbacks: [
				{
					backgroundColor: 'rgba(33, 150, 243, 0.3)',
				},
			],
			display: 'block',
			position: 'absolute',
			top: '0',
			left: '0',
			right: '0',
			bottom: '0',
		},
		'.ag-theme-alpine-fusion .ag-row-hover:not(.ag-full-width-row)::before, .ag-theme-alpine-fusion .ag-row-hover.ag-full-width-row.ag-row-group::before':
			{
				content: '',
				backgroundColor: 'var(--ag-row-hover-color, rgba(33, 150, 243, 0.1))',
				fallbacks: [
					{
						backgroundColor: 'rgba(33, 150, 243, 0.1)',
					},
				],
				display: 'block',
				position: 'absolute',
				top: '0',
				left: '0',
				right: '0',
				bottom: '0',
				pointerEvents: 'none',
			},
		'.ag-theme-alpine-fusion .ag-row-hover.ag-row-selected::before': {
			backgroundColor: 'var(--ag-row-hover-color, rgba(33, 150, 243, 0.1))',
			fallbacks: [
				{
					backgroundColor: 'rgba(33, 150, 243, 0.1)',
				},
			],
			backgroundImage: 'linear-gradient(rgba(33, 150, 243, 0.3), rgba(33, 150, 243, 0.3))',
		},
		'.ag-theme-alpine-fusion .ag-row-hover.ag-full-width-row.ag-row-group > *': {
			position: 'relative',
		},
		'.ag-theme-alpine-fusion .ag-column-hover': {
			backgroundColor: 'var(--ag-column-hover-color, rgba(33, 150, 243, 0.1))',
			fallbacks: [
				{
					backgroundColor: 'rgba(33, 150, 243, 0.1)',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-right-aligned-cell': {
			textAlign: 'right',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-right-aligned-cell': {
			textAlign: 'left',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-right-aligned-cell .ag-cell-value, .ag-theme-alpine-fusion .ag-ltr .ag-right-aligned-cell .ag-group-value':
			{
				marginLeft: 'auto',
			},
		'.ag-theme-alpine-fusion .ag-rtl .ag-right-aligned-cell .ag-cell-value, .ag-theme-alpine-fusion .ag-rtl .ag-right-aligned-cell .ag-group-value':
			{
				marginRight: 'auto',
			},
		'.ag-theme-alpine-fusion .ag-cell, .ag-theme-alpine-fusion .ag-full-width-row .ag-cell-wrapper.ag-row-group': {
			agInternalCalculatedLineHeight: 'var(--ag-line-height, 40px)',
			agInternalPaddedRowHeight: '40px',
			border: '1px solid transparent',
			lineHeight: 'min(var(--ag-internal-calculated-line-height), var(--ag-internal-padded-row-height))',
			paddingLeft: '17px',
			paddingRight: '17px',
			webkitFontSmoothing: 'subpixel-antialiased',
		},
		'.ag-theme-alpine-fusion .ag-row > .ag-cell-wrapper': {
			paddingLeft: '17px',
			paddingRight: '17px',
		},
		'.ag-theme-alpine-fusion .ag-row-dragging': {
			cursor: 'move',
			opacity: '0.5',
		},
		'.ag-theme-alpine-fusion .ag-cell-inline-editing': {
			border: 'solid 1px',
			borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4)) !important',
			fallbacks: [
				{
					borderColor: 'rgba(33, 150, 243, 0.4) !important',
				},
				{
					borderColor: 'var(--ag-border-color, #babfc7)',
				},
				{
					backgroundColor: '#f8f8f8',
				},
				{
					padding: '6px',
				},
				{
					background: '#fff',
				},
				{
					borderColor: '#babfc7',
				},
			],
			background: 'var(--ag-background-color, #fff)',
			borderRadius: '3px',
			boxShadow: '0 1px 4px 1px rgba(186, 191, 199, 0.4)',
			padding: '0',
			height: '42px',
			backgroundColor: 'var(--ag-control-panel-background-color, #f8f8f8)',
		},
		'.ag-theme-alpine-fusion .ag-popup-editor': {
			border: 'solid 1px',
			borderColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					padding: '6px',
				},
				{
					backgroundColor: '#f8f8f8',
				},
				{
					background: '#fff',
				},
				{
					borderColor: '#babfc7',
				},
			],
			background: 'var(--ag-background-color, #fff)',
			borderRadius: '3px',
			boxShadow: '0 1px 4px 1px rgba(186, 191, 199, 0.4)',
			padding: '0',
			backgroundColor: 'var(--ag-control-panel-background-color, #f8f8f8)',
		},
		'.ag-theme-alpine-fusion .ag-large-text-input': {
			height: 'auto',
			padding: '18px',
		},
		'.ag-theme-alpine-fusion .ag-details-row': {
			padding: '30px',
			backgroundColor: 'var(--ag-background-color, #fff)',
			fallbacks: [
				{
					backgroundColor: '#fff',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-layout-auto-height .ag-center-cols-clipper, .ag-theme-alpine-fusion .ag-layout-auto-height .ag-center-cols-container, .ag-theme-alpine-fusion .ag-layout-print .ag-center-cols-clipper, .ag-theme-alpine-fusion .ag-layout-print .ag-center-cols-container':
			{
				minHeight: '150px',
				fallbacks: [
					{
						minHeight: '50px',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-overlay-loading-wrapper': {
			backgroundColor: 'var(--ag-modal-overlay-background-color, rgba(255, 255, 255, 0.66))',
			fallbacks: [
				{
					backgroundColor: 'rgba(255, 255, 255, 0.66)',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-overlay-loading-center': {
			border: 'solid 1px',
			borderColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					background: '#fff',
				},
				{
					borderColor: '#babfc7',
				},
			],
			background: 'var(--ag-background-color, #fff)',
			borderRadius: '3px',
			boxShadow: '0 1px 4px 1px rgba(186, 191, 199, 0.4)',
			padding: '6px',
		},
		'.ag-theme-alpine-fusion .ag-overlay-no-rows-wrapper.ag-layout-auto-height': {
			paddingTop: '60px',
			fallbacks: [
				{
					paddingTop: '30px',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-loading': {
			display: 'flex',
			height: '100%',
			alignItems: 'center',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-loading': {
			paddingLeft: '18px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-loading': {
			paddingRight: '18px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-loading-icon': {
			paddingRight: '12px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-loading-icon': {
			paddingLeft: '12px',
		},
		'.ag-theme-alpine-fusion .ag-icon-loading': {
			animationName: 'spin',
			animationDuration: '1000ms',
			animationIterationCount: 'infinite',
			animationTimingFunction: 'linear',
		},
		'.ag-theme-alpine-fusion .ag-floating-top': {
			borderBottom: 'solid 1px',
			borderBottomColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderBottomColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-floating-bottom': {
			borderTop: 'solid 1px',
			borderTopColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderTopColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-cell': {
			borderRight: 'solid transparent',
			borderRightWidth: '1px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-cell': {
			borderLeft: 'solid transparent',
			borderLeftWidth: '1px',
		},
		'.ag-theme-alpine-fusion .ag-cell.ag-cell-first-right-pinned:not(.ag-cell-range-left):not(.ag-cell-range-single-cell)':
			{
				borderLeft: 'solid 1px',
				borderLeftColor: 'var(--ag-border-color, #babfc7)',
				fallbacks: [
					{
						borderLeftColor: '#babfc7',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-cell.ag-cell-last-left-pinned:not(.ag-cell-range-right):not(.ag-cell-range-single-cell)':
			{
				borderRight: 'solid 1px',
				borderRightColor: 'var(--ag-border-color, #babfc7)',
				fallbacks: [
					{
						borderRightColor: '#babfc7',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-cell-range-selected:not(.ag-cell-focus), .ag-theme-alpine-fusion .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-single-cell:not(.ag-cell-inline-editing)':
			{
				backgroundColor: 'var(--ag-range-selection-background-color, rgba(33, 150, 243, 0.2))',
				fallbacks: [
					{
						backgroundColor: 'rgba(33, 150, 243, 0.2)',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-cell-range-selected:not(.ag-cell-focus).ag-cell-range-chart, .ag-theme-alpine-fusion .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-single-cell:not(.ag-cell-inline-editing).ag-cell-range-chart':
			{
				backgroundColor: 'var(--ag-range-selection-chart-background-color, rgba(0, 88, 255, 0.1)) !important',
				fallbacks: [
					{
						backgroundColor: 'rgba(0, 88, 255, 0.1) !important',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-cell-range-selected:not(.ag-cell-focus).ag-cell-range-chart.ag-cell-range-chart-category, .ag-theme-alpine-fusion .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-single-cell:not(.ag-cell-inline-editing).ag-cell-range-chart.ag-cell-range-chart-category':
			{
				backgroundColor:
					'var(--ag-range-selection-chart-category-background-color, rgba(0, 255, 132, 0.1)) !important',
				fallbacks: [
					{
						backgroundColor: 'rgba(0, 255, 132, 0.1) !important',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-cell-range-selected-1:not(.ag-cell-focus), .ag-theme-alpine-fusion .ag-root:not(.ag-context-menu-open) .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-selected-1:not(.ag-cell-inline-editing)':
			{
				backgroundColor:
					'var(--ag-range-selection-background-color-1, var(--ag-range-selection-background-color, rgba(33, 150, 243, 0.2)))',
				fallbacks: [
					{
						backgroundColor: 'rgba(33, 150, 243, 0.2)',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-cell-range-selected-2:not(.ag-cell-focus), .ag-theme-alpine-fusion .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-selected-2':
			{
				backgroundColor: 'var(--ag-range-selection-background-color-2, rgba(33, 150, 243, 0.36))',
				fallbacks: [
					{
						backgroundColor: 'rgba(33, 150, 243, 0.36)',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-cell-range-selected-3:not(.ag-cell-focus), .ag-theme-alpine-fusion .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-selected-3':
			{
				backgroundColor: 'var(--ag-range-selection-background-color-3, rgba(33, 150, 243, 0.488))',
				fallbacks: [
					{
						backgroundColor: 'rgba(33, 150, 243, 0.488)',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-cell-range-selected-4:not(.ag-cell-focus), .ag-theme-alpine-fusion .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-selected-4':
			{
				backgroundColor: 'var(--ag-range-selection-background-color-4, rgba(33, 150, 243, 0.5904))',
				fallbacks: [
					{
						backgroundColor: 'rgba(33, 150, 243, 0.5904)',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-top': {
			borderTopColor: 'var(--ag-range-selection-border-color, #2196f3)',
			fallbacks: [
				{
					borderTopColor: '#2196f3',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-right': {
			borderRightColor: 'var(--ag-range-selection-border-color, #2196f3)',
			fallbacks: [
				{
					borderRightColor: '#2196f3',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-bottom':
			{
				borderBottomColor: 'var(--ag-range-selection-border-color, #2196f3)',
				fallbacks: [
					{
						borderBottomColor: '#2196f3',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-left': {
			borderLeftColor: 'var(--ag-range-selection-border-color, #2196f3)',
			fallbacks: [
				{
					borderLeftColor: '#2196f3',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-cell-focus:not(.ag-cell-range-selected):focus-within, .ag-theme-alpine-fusion .ag-ltr .ag-context-menu-open .ag-cell-focus:not(.ag-cell-range-selected), .ag-theme-alpine-fusion .ag-ltr .ag-full-width-row.ag-row-focus:focus .ag-cell-wrapper.ag-row-group, .ag-theme-alpine-fusion .ag-ltr .ag-cell-range-single-cell, .ag-theme-alpine-fusion .ag-ltr .ag-cell-range-single-cell.ag-cell-range-handle, .ag-theme-alpine-fusion .ag-rtl .ag-cell-focus:not(.ag-cell-range-selected):focus-within, .ag-theme-alpine-fusion .ag-rtl .ag-context-menu-open .ag-cell-focus:not(.ag-cell-range-selected), .ag-theme-alpine-fusion .ag-rtl .ag-full-width-row.ag-row-focus:focus .ag-cell-wrapper.ag-row-group, .ag-theme-alpine-fusion .ag-rtl .ag-cell-range-single-cell, .ag-theme-alpine-fusion .ag-rtl .ag-cell-range-single-cell.ag-cell-range-handle':
			{
				border: '1px solid',
				borderColor: 'var(--ag-range-selection-border-color, #2196f3)',
				fallbacks: [
					{
						borderColor: '#2196f3',
					},
				],
				outline: 'initial',
			},
		'.ag-theme-alpine-fusion .ag-cell.ag-selection-fill-top, .ag-theme-alpine-fusion .ag-cell.ag-selection-fill-top.ag-cell-range-selected':
			{
				borderTop: '1px dashed',
				borderTopColor: 'var(--ag-range-selection-border-color, #2196f3)',
				fallbacks: [
					{
						borderTopColor: '#2196f3',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-ltr .ag-cell.ag-selection-fill-right, .ag-theme-alpine-fusion .ag-ltr .ag-cell.ag-selection-fill-right.ag-cell-range-selected':
			{
				borderRight: '1px dashed !important',
				borderRightColor: 'var(--ag-range-selection-border-color, #2196f3) !important',
				fallbacks: [
					{
						borderRightColor: '#2196f3 !important',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-rtl .ag-cell.ag-selection-fill-right, .ag-theme-alpine-fusion .ag-rtl .ag-cell.ag-selection-fill-right.ag-cell-range-selected':
			{
				borderLeft: '1px dashed !important',
				borderLeftColor: 'var(--ag-range-selection-border-color, #2196f3) !important',
				fallbacks: [
					{
						borderLeftColor: '#2196f3 !important',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-cell.ag-selection-fill-bottom, .ag-theme-alpine-fusion .ag-cell.ag-selection-fill-bottom.ag-cell-range-selected':
			{
				borderBottom: '1px dashed',
				borderBottomColor: 'var(--ag-range-selection-border-color, #2196f3)',
				fallbacks: [
					{
						borderBottomColor: '#2196f3',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-ltr .ag-cell.ag-selection-fill-left, .ag-theme-alpine-fusion .ag-ltr .ag-cell.ag-selection-fill-left.ag-cell-range-selected':
			{
				borderLeft: '1px dashed !important',
				borderLeftColor: 'var(--ag-range-selection-border-color, #2196f3) !important',
				fallbacks: [
					{
						borderLeftColor: '#2196f3 !important',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-rtl .ag-cell.ag-selection-fill-left, .ag-theme-alpine-fusion .ag-rtl .ag-cell.ag-selection-fill-left.ag-cell-range-selected':
			{
				borderRight: '1px dashed !important',
				borderRightColor: 'var(--ag-range-selection-border-color, #2196f3) !important',
				fallbacks: [
					{
						borderRightColor: '#2196f3 !important',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-range-handle, .ag-theme-alpine-fusion .ag-fill-handle, .ag-theme-alpine-fusion .ag-theme-alpine .ag-fill-handle, .ag-theme-alpine .ag-theme-alpine-fusion .ag-fill-handle, .ag-theme-alpine-fusion .ag-theme-alpine .ag-range-handle, .ag-theme-alpine .ag-theme-alpine-fusion .ag-range-handle':
			{
				position: 'absolute',
				width: '6px',
				height: '6px',
				bottom: '-1px',
				backgroundColor: 'var(--ag-range-selection-border-color, #2196f3)',
				fallbacks: [
					{
						backgroundColor: '#2196f3',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-ltr .ag-range-handle, .ag-theme-alpine-fusion .ag-ltr .ag-fill-handle, .ag-theme-alpine-fusion .ag-ltr .ag-theme-alpine .ag-fill-handle, .ag-theme-alpine .ag-theme-alpine-fusion .ag-ltr .ag-fill-handle, .ag-theme-alpine-fusion .ag-ltr .ag-theme-alpine .ag-range-handle, .ag-theme-alpine .ag-theme-alpine-fusion .ag-ltr .ag-range-handle':
			{
				right: '-1px',
			},
		'.ag-theme-alpine-fusion .ag-rtl .ag-range-handle, .ag-theme-alpine-fusion .ag-rtl .ag-fill-handle, .ag-theme-alpine-fusion .ag-rtl .ag-theme-alpine .ag-fill-handle, .ag-theme-alpine .ag-theme-alpine-fusion .ag-rtl .ag-fill-handle, .ag-theme-alpine-fusion .ag-rtl .ag-theme-alpine .ag-range-handle, .ag-theme-alpine .ag-theme-alpine-fusion .ag-rtl .ag-range-handle':
			{
				left: '-1px',
			},
		'.ag-theme-alpine-fusion .ag-fill-handle': {
			cursor: 'cell',
		},
		'.ag-theme-alpine-fusion .ag-range-handle': {
			cursor: 'nwse-resize',
		},
		'.ag-theme-alpine-fusion .ag-menu': {
			border: 'solid 1px',
			borderColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					backgroundColor: '#f8f8f8',
				},
				{
					padding: '6px',
				},
				{
					background: '#fff',
				},
				{
					borderColor: '#babfc7',
				},
			],
			background: 'var(--ag-background-color, #fff)',
			borderRadius: '3px',
			boxShadow: '0 1px 4px 1px rgba(186, 191, 199, 0.4)',
			padding: '0',
			backgroundColor: 'var(--ag-control-panel-background-color, #f8f8f8)',
		},
		'.ag-theme-alpine-fusion .ag-menu-list': {
			cursor: 'default',
			padding: '6px 0',
		},
		'.ag-theme-alpine-fusion .ag-menu-separator': {
			height: '13px',
		},
		'.ag-theme-alpine-fusion .ag-menu-separator-part::after': {
			content: '',
			display: 'block',
			borderTop: 'solid 1px',
			borderTopColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderTopColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-menu-option-active, .ag-theme-alpine-fusion .ag-compact-menu-option-active': {
			backgroundColor: 'var(--ag-row-hover-color, rgba(33, 150, 243, 0.1))',
			fallbacks: [
				{
					backgroundColor: 'rgba(33, 150, 243, 0.1)',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-menu-option-part, .ag-theme-alpine-fusion .ag-compact-menu-option-part': {
			lineHeight: '16px',
			padding: '8px 0',
		},
		'.ag-theme-alpine-fusion .ag-menu-option-disabled, .ag-theme-alpine-fusion .ag-compact-menu-option-disabled': {
			opacity: '0.5',
		},
		'.ag-theme-alpine-fusion .ag-menu-option-icon, .ag-theme-alpine-fusion .ag-compact-menu-option-icon': {
			width: '16px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-menu-option-icon, .ag-theme-alpine-fusion .ag-ltr .ag-compact-menu-option-icon':
			{
				paddingLeft: '12px',
			},
		'.ag-theme-alpine-fusion .ag-rtl .ag-menu-option-icon, .ag-theme-alpine-fusion .ag-rtl .ag-compact-menu-option-icon':
			{
				paddingRight: '12px',
			},
		'.ag-theme-alpine-fusion .ag-menu-option-text, .ag-theme-alpine-fusion .ag-compact-menu-option-text': {
			paddingLeft: '12px',
			paddingRight: '12px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-menu-option-shortcut, .ag-theme-alpine-fusion .ag-ltr .ag-compact-menu-option-shortcut':
			{
				paddingRight: '6px',
			},
		'.ag-theme-alpine-fusion .ag-rtl .ag-menu-option-shortcut, .ag-theme-alpine-fusion .ag-rtl .ag-compact-menu-option-shortcut':
			{
				paddingLeft: '6px',
			},
		'.ag-theme-alpine-fusion .ag-menu-option-popup-pointer, .ag-theme-alpine-fusion .ag-compact-menu-option-popup-pointer':
			{
				paddingRight: '6px',
			},
		'.ag-theme-alpine-fusion .ag-tabs': {
			minWidth: '240px',
		},
		'.ag-theme-alpine-fusion .ag-tabs-header': {
			width: '100%',
			display: 'flex',
			borderBottom: 'solid 1px',
			borderBottomColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderBottomColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-tab': {
			borderBottom: '2px solid transparent',
			display: 'flex',
			flex: '1 1 auto',
			alignItems: 'center',
			justifyContent: 'center',
			cursor: 'pointer',
			fallbacks: [
				{
					transition: 'border-bottom 0.3s',
				},
				{
					flex: 'none',
				},
			],
			transition: 'color 0.4s',
			padding: '9px',
		},
		'.ag-theme-alpine-fusion .ag-keyboard-focus .ag-tab:focus': {
			outline: 'none',
		},
		'.ag-theme-alpine-fusion .ag-keyboard-focus .ag-tab:focus::after': {
			content: '',
			position: 'absolute',
			backgroundColor: 'transparent',
			pointerEvents: 'none',
			top: '4px',
			left: '4px',
			display: 'block',
			width: 'calc(100% - 8px)',
			height: 'calc(100% - 8px)',
			border: '1px solid',
			borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					borderColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-tab-selected': {
			borderBottomColor: 'var(--ag-selected-tab-underline-color, var(--ag-alpine-active-color, #2196f3))',
			fallbacks: [
				{
					color: '#2196f3',
				},
				{
					borderBottomColor: '#2196f3',
				},
			],
			color: 'var(--ag-alpine-active-color, #2196f3)',
		},
		'.ag-theme-alpine-fusion .ag-menu-header': {
			color: 'var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))',
			fallbacks: [
				{
					backgroundColor: '#f8f8f8',
				},
				{
					color: '#181d1f',
				},
			],
			backgroundColor: 'var(--ag-control-panel-background-color, #f8f8f8)',
			paddingTop: '1px',
		},
		'.ag-theme-alpine-fusion .ag-filter-separator': {
			borderTop: 'solid 1px',
			borderTopColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderTopColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-menu:not(.ag-tabs) .ag-filter-select': {
			minWidth: '155px',
		},
		'.ag-theme-alpine-fusion .ag-tabs .ag-filter-select': {
			minWidth: '214px',
		},
		'.ag-theme-alpine-fusion .ag-filter-select .ag-picker-field-wrapper': {
			width: '0',
		},
		'.ag-theme-alpine-fusion .ag-filter-condition-operator': {
			height: '17px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-filter-condition-operator-or': {
			marginLeft: '12px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-filter-condition-operator-or': {
			marginRight: '12px',
		},
		'.ag-theme-alpine-fusion .ag-set-filter-select-all': {
			paddingTop: '12px',
		},
		'.ag-theme-alpine-fusion .ag-set-filter-list, .ag-theme-alpine-fusion .ag-filter-no-matches': {
			height: '144px',
		},
		'.ag-theme-alpine-fusion .ag-set-filter-filter': {
			marginTop: '12px',
			marginLeft: '12px',
			marginRight: '12px',
		},
		'.ag-theme-alpine-fusion .ag-filter-to': {
			marginTop: '9px',
		},
		'.ag-theme-alpine-fusion .ag-mini-filter': {
			margin: '12px 12px',
		},
		'.ag-theme-alpine-fusion .ag-set-filter-item': {
			margin: '0px 12px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-set-filter-item-value': {
			marginLeft: '12px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-set-filter-item-value': {
			marginRight: '12px',
		},
		'.ag-theme-alpine-fusion .ag-filter-apply-panel': {
			padding: '12px 12px',
			borderTop: 'solid 1px',
			borderTopColor: 'var(--ag-secondary-border-color, #dde2eb)',
			fallbacks: [
				{
					borderTopColor: '#dde2eb',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-filter-apply-panel-button': {
			lineHeight: '1.5',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-filter-apply-panel-button': {
			marginLeft: '12px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-filter-apply-panel-button': {
			marginRight: '12px',
		},
		'.ag-theme-alpine-fusion .ag-simple-filter-body-wrapper': {
			padding: '12px 12px',
			paddingBottom: '3px',
		},
		'.ag-theme-alpine-fusion .ag-simple-filter-body-wrapper > *': {
			marginBottom: '9px',
		},
		'.ag-theme-alpine-fusion .ag-filter-no-matches': {
			padding: '12px 12px',
		},
		'.ag-theme-alpine-fusion .ag-multi-filter-menu-item': {
			margin: '6px 0',
		},
		'.ag-theme-alpine-fusion .ag-multi-filter-group-title-bar': {
			padding: '12px 6px',
			backgroundColor: 'transparent',
		},
		'.ag-theme-alpine-fusion .ag-keyboard-focus .ag-multi-filter-group-title-bar:focus': {
			outline: 'none',
		},
		'.ag-theme-alpine-fusion .ag-keyboard-focus .ag-multi-filter-group-title-bar:focus::after': {
			content: '',
			position: 'absolute',
			backgroundColor: 'transparent',
			pointerEvents: 'none',
			top: '4px',
			left: '4px',
			display: 'block',
			width: 'calc(100% - 8px)',
			height: 'calc(100% - 8px)',
			border: '1px solid',
			borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					borderColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-side-bar': {
			position: 'relative',
		},
		'.ag-theme-alpine-fusion .ag-tool-panel-wrapper': {
			width: '250px',
			backgroundColor: 'var(--ag-control-panel-background-color, #f8f8f8)',
			fallbacks: [
				{
					backgroundColor: '#f8f8f8',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-side-buttons': {
			paddingTop: '24px',
			width: '30px',
			position: 'relative',
			color: 'var(--ag-foreground-color, #181d1f)',
			fallbacks: [
				{
					width: '20px',
				},
				{
					color: '#181d1f',
				},
			],
			overflow: 'hidden',
		},
		'.ag-theme-alpine-fusion button.ag-side-button-button': {
			color: 'inherit',
			fontFamily: 'inherit',
			fontSize: 'inherit',
			fontWeight: 'inherit',
			lineHeight: 'inherit',
			background: 'transparent',
			padding: '12px 0 12px 0',
			width: '100%',
			margin: '0',
			minHeight: '108px',
			backgroundPositionY: 'center',
			backgroundPositionX: 'center',
			backgroundRepeat: 'no-repeat',
			border: 'none',
		},
		'.ag-theme-alpine-fusion button.ag-side-button-button:focus': {
			boxShadow: 'none',
		},
		'.ag-theme-alpine-fusion .ag-keyboard-focus .ag-side-button-button:focus': {
			outline: 'none',
		},
		'.ag-theme-alpine-fusion .ag-keyboard-focus .ag-side-button-button:focus::after': {
			content: '',
			position: 'absolute',
			backgroundColor: 'transparent',
			pointerEvents: 'none',
			top: '4px',
			left: '4px',
			display: 'block',
			width: 'calc(100% - 8px)',
			height: 'calc(100% - 8px)',
			border: '1px solid',
			borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					borderColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-side-button-icon-wrapper': {
			marginBottom: '3px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-side-bar-left, .ag-theme-alpine-fusion .ag-rtl .ag-side-bar-right': {
			borderRight: 'solid 1px',
			borderRightColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderRightColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-side-bar-left .ag-tool-panel-wrapper, .ag-theme-alpine-fusion .ag-rtl .ag-side-bar-right .ag-tool-panel-wrapper':
			{
				borderLeft: 'solid 1px',
				borderLeftColor: 'var(--ag-border-color, #babfc7)',
				fallbacks: [
					{
						borderLeftColor: '#babfc7',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-ltr .ag-side-bar-left .ag-side-button-button, .ag-theme-alpine-fusion .ag-rtl .ag-side-bar-right .ag-side-button-button':
			{
				borderRight: '2px solid transparent',
				transition: 'border-right 0.3s',
			},
		'.ag-theme-alpine-fusion .ag-ltr .ag-side-bar-left .ag-selected .ag-side-button-button, .ag-theme-alpine-fusion .ag-rtl .ag-side-bar-right .ag-selected .ag-side-button-button':
			{
				borderRightColor: 'var(--ag-selected-tab-underline-color, var(--ag-alpine-active-color, #2196f3))',
				fallbacks: [
					{
						borderRightColor: '#2196f3',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-rtl .ag-side-bar-left, .ag-theme-alpine-fusion .ag-ltr .ag-side-bar-right': {
			borderLeft: 'solid 1px',
			borderLeftColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderLeftColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-side-bar-left .ag-tool-panel-wrapper, .ag-theme-alpine-fusion .ag-ltr .ag-side-bar-right .ag-tool-panel-wrapper':
			{
				borderRight: 'solid 1px',
				borderRightColor: 'var(--ag-border-color, #babfc7)',
				fallbacks: [
					{
						borderRightColor: '#babfc7',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-rtl .ag-side-bar-left .ag-side-button-button, .ag-theme-alpine-fusion .ag-ltr .ag-side-bar-right .ag-side-button-button':
			{
				borderLeft: '2px solid transparent',
				transition: 'border-left 0.3s',
			},
		'.ag-theme-alpine-fusion .ag-rtl .ag-side-bar-left .ag-selected .ag-side-button-button, .ag-theme-alpine-fusion .ag-ltr .ag-side-bar-right .ag-selected .ag-side-button-button':
			{
				borderLeftColor: 'var(--ag-selected-tab-underline-color, var(--ag-alpine-active-color, #2196f3))',
				fallbacks: [
					{
						borderLeftColor: '#2196f3',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-filter-toolpanel-header': {
			height: '36px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-filter-toolpanel-header, .ag-theme-alpine-fusion .ag-ltr .ag-filter-toolpanel-search':
			{
				paddingLeft: '6px',
			},
		'.ag-theme-alpine-fusion .ag-rtl .ag-filter-toolpanel-header, .ag-theme-alpine-fusion .ag-rtl .ag-filter-toolpanel-search':
			{
				paddingRight: '6px',
			},
		'.ag-theme-alpine-fusion .ag-keyboard-focus .ag-filter-toolpanel-header:focus': {
			outline: 'none',
		},
		'.ag-theme-alpine-fusion .ag-keyboard-focus .ag-filter-toolpanel-header:focus::after': {
			content: '',
			position: 'absolute',
			backgroundColor: 'transparent',
			pointerEvents: 'none',
			top: '4px',
			left: '4px',
			display: 'block',
			width: 'calc(100% - 8px)',
			height: 'calc(100% - 8px)',
			border: '1px solid',
			borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					borderColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-filter-toolpanel-group.ag-has-filter > .ag-group-title-bar .ag-group-title::after':
			{
				fontFamily: 'agGridAlpine',
				fontSize: '16px',
				lineHeight: '16px',
				fontStyle: 'normal',
				fontWeight: 'normal',
				fontVariant: 'normal',
				textTransform: 'none',
				webkitFontSmoothing: 'antialiased',
				mozOsxFontSmoothing: 'grayscale',
				content: '\f114',
				position: 'absolute',
			},
		'.ag-theme-alpine-fusion .ag-ltr .ag-filter-toolpanel-group.ag-has-filter > .ag-group-title-bar .ag-group-title::after':
			{
				paddingLeft: '6px',
			},
		'.ag-theme-alpine-fusion .ag-rtl .ag-filter-toolpanel-group.ag-has-filter > .ag-group-title-bar .ag-group-title::after':
			{
				paddingRight: '6px',
			},
		'.ag-theme-alpine-fusion .ag-filter-toolpanel-group-level-0-header': {
			height: '48px',
		},
		'.ag-theme-alpine-fusion .ag-filter-toolpanel-group-item': {
			marginTop: '3px',
			marginBottom: '3px',
		},
		'.ag-theme-alpine-fusion .ag-filter-toolpanel-search': {
			height: '48px',
		},
		'.ag-theme-alpine-fusion .ag-filter-toolpanel-search-input': {
			flexGrow: '1',
			height: '24px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-filter-toolpanel-search-input': {
			marginRight: '6px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-filter-toolpanel-search-input': {
			marginLeft: '6px',
		},
		'.ag-theme-alpine-fusion .ag-filter-toolpanel-group-level-0': {
			borderTop: 'solid 1px',
			borderTopColor: 'var(--ag-secondary-border-color, #dde2eb)',
			fallbacks: [
				{
					borderTopColor: '#dde2eb',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-filter-toolpanel-expand, .ag-theme-alpine-fusion .ag-ltr .ag-filter-toolpanel-group-title-bar-icon':
			{
				marginRight: '6px',
			},
		'.ag-theme-alpine-fusion .ag-rtl .ag-filter-toolpanel-expand, .ag-theme-alpine-fusion .ag-rtl .ag-filter-toolpanel-group-title-bar-icon':
			{
				marginLeft: '6px',
			},
		'.ag-theme-alpine-fusion .ag-filter-toolpanel-group-level-1 .ag-filter-toolpanel-group-level-1-header.ag-filter-toolpanel-group-title-bar':
			{
				backgroundColor: 'transparent',
			},
		'.ag-theme-alpine-fusion .ag-ltr .ag-filter-toolpanel-group-level-1 .ag-filter-toolpanel-group-level-2-header':
			{
				paddingLeft: '22px',
			},
		'.ag-theme-alpine-fusion .ag-rtl .ag-filter-toolpanel-group-level-1 .ag-filter-toolpanel-group-level-2-header':
			{
				paddingRight: '22px',
			},
		'.ag-theme-alpine-fusion .ag-filter-toolpanel-group-level-2 .ag-filter-toolpanel-group-level-2-header.ag-filter-toolpanel-group-title-bar':
			{
				backgroundColor: 'transparent',
			},
		'.ag-theme-alpine-fusion .ag-ltr .ag-filter-toolpanel-group-level-2 .ag-filter-toolpanel-group-level-3-header':
			{
				paddingLeft: '38px',
			},
		'.ag-theme-alpine-fusion .ag-rtl .ag-filter-toolpanel-group-level-2 .ag-filter-toolpanel-group-level-3-header':
			{
				paddingRight: '38px',
			},
		'.ag-theme-alpine-fusion .ag-filter-toolpanel-group-level-3 .ag-filter-toolpanel-group-level-3-header.ag-filter-toolpanel-group-title-bar':
			{
				backgroundColor: 'transparent',
			},
		'.ag-theme-alpine-fusion .ag-ltr .ag-filter-toolpanel-group-level-3 .ag-filter-toolpanel-group-level-4-header':
			{
				paddingLeft: '54px',
			},
		'.ag-theme-alpine-fusion .ag-rtl .ag-filter-toolpanel-group-level-3 .ag-filter-toolpanel-group-level-4-header':
			{
				paddingRight: '54px',
			},
		'.ag-theme-alpine-fusion .ag-filter-toolpanel-group-level-4 .ag-filter-toolpanel-group-level-4-header.ag-filter-toolpanel-group-title-bar':
			{
				backgroundColor: 'transparent',
			},
		'.ag-theme-alpine-fusion .ag-ltr .ag-filter-toolpanel-group-level-4 .ag-filter-toolpanel-group-level-5-header':
			{
				paddingLeft: '70px',
			},
		'.ag-theme-alpine-fusion .ag-rtl .ag-filter-toolpanel-group-level-4 .ag-filter-toolpanel-group-level-5-header':
			{
				paddingRight: '70px',
			},
		'.ag-theme-alpine-fusion .ag-filter-toolpanel-group-level-5 .ag-filter-toolpanel-group-level-5-header.ag-filter-toolpanel-group-title-bar':
			{
				backgroundColor: 'transparent',
			},
		'.ag-theme-alpine-fusion .ag-ltr .ag-filter-toolpanel-group-level-5 .ag-filter-toolpanel-group-level-6-header':
			{
				paddingLeft: '86px',
			},
		'.ag-theme-alpine-fusion .ag-rtl .ag-filter-toolpanel-group-level-5 .ag-filter-toolpanel-group-level-6-header':
			{
				paddingRight: '86px',
			},
		'.ag-theme-alpine-fusion .ag-filter-toolpanel-group-level-6 .ag-filter-toolpanel-group-level-6-header.ag-filter-toolpanel-group-title-bar':
			{
				backgroundColor: 'transparent',
			},
		'.ag-theme-alpine-fusion .ag-ltr .ag-filter-toolpanel-group-level-6 .ag-filter-toolpanel-group-level-7-header':
			{
				paddingLeft: '102px',
			},
		'.ag-theme-alpine-fusion .ag-rtl .ag-filter-toolpanel-group-level-6 .ag-filter-toolpanel-group-level-7-header':
			{
				paddingRight: '102px',
			},
		'.ag-theme-alpine-fusion .ag-filter-toolpanel-group-level-7 .ag-filter-toolpanel-group-level-7-header.ag-filter-toolpanel-group-title-bar':
			{
				backgroundColor: 'transparent',
			},
		'.ag-theme-alpine-fusion .ag-ltr .ag-filter-toolpanel-group-level-7 .ag-filter-toolpanel-group-level-8-header':
			{
				paddingLeft: '118px',
			},
		'.ag-theme-alpine-fusion .ag-rtl .ag-filter-toolpanel-group-level-7 .ag-filter-toolpanel-group-level-8-header':
			{
				paddingRight: '118px',
			},
		'.ag-theme-alpine-fusion .ag-filter-toolpanel-group-level-8 .ag-filter-toolpanel-group-level-8-header.ag-filter-toolpanel-group-title-bar':
			{
				backgroundColor: 'transparent',
			},
		'.ag-theme-alpine-fusion .ag-ltr .ag-filter-toolpanel-group-level-8 .ag-filter-toolpanel-group-level-9-header':
			{
				paddingLeft: '134px',
			},
		'.ag-theme-alpine-fusion .ag-rtl .ag-filter-toolpanel-group-level-8 .ag-filter-toolpanel-group-level-9-header':
			{
				paddingRight: '134px',
			},
		'.ag-theme-alpine-fusion .ag-filter-toolpanel-group-level-9 .ag-filter-toolpanel-group-level-9-header.ag-filter-toolpanel-group-title-bar':
			{
				backgroundColor: 'transparent',
			},
		'.ag-theme-alpine-fusion .ag-ltr .ag-filter-toolpanel-group-level-9 .ag-filter-toolpanel-group-level-10-header':
			{
				paddingLeft: '150px',
			},
		'.ag-theme-alpine-fusion .ag-rtl .ag-filter-toolpanel-group-level-9 .ag-filter-toolpanel-group-level-10-header':
			{
				paddingRight: '150px',
			},
		'.ag-theme-alpine-fusion .ag-filter-toolpanel-group-level-10 .ag-filter-toolpanel-group-level-10-header.ag-filter-toolpanel-group-title-bar':
			{
				backgroundColor: 'transparent',
			},
		'.ag-theme-alpine-fusion .ag-ltr .ag-filter-toolpanel-group-level-10 .ag-filter-toolpanel-group-level-11-header':
			{
				paddingLeft: '166px',
			},
		'.ag-theme-alpine-fusion .ag-rtl .ag-filter-toolpanel-group-level-10 .ag-filter-toolpanel-group-level-11-header':
			{
				paddingRight: '166px',
			},
		'.ag-theme-alpine-fusion .ag-filter-toolpanel-instance-header.ag-filter-toolpanel-group-level-1-header': {
			paddingLeft: '6px',
		},
		'.ag-theme-alpine-fusion .ag-filter-toolpanel-instance-filter': {
			borderTop: 'solid 1px',
			borderTopColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderLeftColor: '#babfc7',
				},
				{
					backgroundColor: '#f8f8f8',
				},
				{
					borderBottomColor: '#babfc7',
				},
				{
					borderTopColor: '#babfc7',
				},
			],
			borderBottom: 'solid 1px',
			borderBottomColor: 'var(--ag-border-color, #babfc7)',
			marginTop: '6px',
			border: 'none',
			backgroundColor: 'var(--ag-control-panel-background-color, #f8f8f8)',
			borderLeft: 'dashed 1px',
			borderLeftColor: 'var(--ag-border-color, #babfc7)',
			marginLeft: '8px',
			paddingLeft: '8px',
			marginRight: '12px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-filter-toolpanel-instance-header-icon': {
			marginLeft: '6px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-filter-toolpanel-instance-header-icon': {
			marginRight: '6px',
		},
		'.ag-theme-alpine-fusion .ag-pivot-mode-panel': {
			minHeight: '48px',
			height: '48px',
			display: 'flex',
		},
		'.ag-theme-alpine-fusion .ag-pivot-mode-select': {
			display: 'flex',
			alignItems: 'center',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-pivot-mode-select': {
			marginLeft: '12px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-pivot-mode-select': {
			marginRight: '12px',
		},
		'.ag-theme-alpine-fusion .ag-keyboard-focus .ag-column-select-header:focus': {
			outline: 'none',
		},
		'.ag-theme-alpine-fusion .ag-keyboard-focus .ag-column-select-header:focus::after': {
			content: '',
			position: 'absolute',
			backgroundColor: 'transparent',
			pointerEvents: 'none',
			top: '4px',
			left: '4px',
			display: 'block',
			width: 'calc(100% - 8px)',
			height: 'calc(100% - 8px)',
			border: '1px solid',
			borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					borderColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-column-select-header': {
			height: '48px',
			alignItems: 'center',
			padding: '0 12px',
			borderBottom: 'solid 1px',
			borderBottomColor: 'var(--ag-secondary-border-color, #dde2eb)',
			fallbacks: [
				{
					borderBottomColor: '#dde2eb',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-column-panel-column-select': {
			borderBottom: 'solid 1px',
			borderBottomColor: 'var(--ag-secondary-border-color, #dde2eb)',
			fallbacks: [
				{
					borderTopColor: '#dde2eb',
				},
				{
					borderBottomColor: '#dde2eb',
				},
			],
			borderTop: 'solid 1px',
			borderTopColor: 'var(--ag-secondary-border-color, #dde2eb)',
		},
		'.ag-theme-alpine-fusion .ag-column-group-icons, .ag-theme-alpine-fusion .ag-column-select-header-icon': {
			color: 'var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))',
			fallbacks: [
				{
					color: '#181d1f',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-column-select-list .ag-list-item-hovered::after': {
			content: '',
			position: 'absolute',
			left: '0',
			right: '0',
			height: '1px',
			backgroundColor: 'var(--ag-range-selection-border-color, #2196f3)',
			fallbacks: [
				{
					backgroundColor: '#2196f3',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-column-select-list .ag-item-highlight-top::after': {
			top: '0',
		},
		'.ag-theme-alpine-fusion .ag-column-select-list .ag-item-highlight-bottom::after': {
			bottom: '0',
		},
		'.ag-theme-alpine-fusion .ag-header': {
			backgroundColor: 'var(--ag-header-background-color, #f8f8f8)',
			fallbacks: [
				{
					borderBottomColor: '#babfc7',
				},
				{
					backgroundColor: '#f8f8f8',
				},
			],
			borderBottom: 'solid 1px',
			borderBottomColor: 'var(--ag-border-color, #babfc7)',
		},
		'.ag-theme-alpine-fusion .ag-header-row': {
			color: 'var(--ag-header-foreground-color, var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f)))',
			fallbacks: [
				{
					color: '#181d1f',
				},
			],
			height: '48px',
		},
		'.ag-theme-alpine-fusion .ag-pinned-right-header': {
			borderLeft: 'solid 1px',
			borderLeftColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderLeftColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-pinned-left-header': {
			borderRight: 'solid 1px',
			borderRightColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderRightColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-header-cell:not(.ag-right-aligned-header) .ag-header-label-icon': {
			marginLeft: '6px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-header-cell:not(.ag-right-aligned-header) .ag-header-label-icon': {
			marginRight: '6px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-header-cell.ag-right-aligned-header .ag-header-label-icon': {
			marginRight: '6px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-header-cell.ag-right-aligned-header .ag-header-label-icon': {
			marginLeft: '6px',
		},
		'.ag-theme-alpine-fusion .ag-header-cell, .ag-theme-alpine-fusion .ag-header-group-cell': {
			paddingLeft: '18px',
			paddingRight: '18px',
		},
		'.ag-theme-alpine-fusion .ag-header-cell.ag-header-cell-moving, .ag-theme-alpine-fusion .ag-header-group-cell.ag-header-cell-moving':
			{
				backgroundColor: 'var(--ag-header-cell-moving-background-color, var(--ag-background-color, #fff))',
				fallbacks: [
					{
						backgroundColor: '#fff',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-keyboard-focus .ag-header-cell:focus': {
			outline: 'none',
		},
		'.ag-theme-alpine-fusion .ag-keyboard-focus .ag-header-cell:focus::after': {
			content: '',
			position: 'absolute',
			backgroundColor: 'transparent',
			pointerEvents: 'none',
			top: '4px',
			left: '4px',
			display: 'block',
			width: 'calc(100% - 8px)',
			height: 'calc(100% - 8px)',
			border: '1px solid',
			borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					borderColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-keyboard-focus .ag-header-group-cell:focus': {
			outline: 'none',
		},
		'.ag-theme-alpine-fusion .ag-keyboard-focus .ag-header-group-cell:focus::after': {
			content: '',
			position: 'absolute',
			backgroundColor: 'transparent',
			pointerEvents: 'none',
			top: '4px',
			left: '4px',
			display: 'block',
			width: 'calc(100% - 8px)',
			height: 'calc(100% - 8px)',
			border: '1px solid',
			borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					borderColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-header-icon': {
			color: 'var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))',
			fallbacks: [
				{
					color: '#181d1f',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-header-expand-icon': {
			cursor: 'pointer',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-header-expand-icon': {
			paddingLeft: '4px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-header-expand-icon': {
			paddingRight: '4px',
		},
		'.ag-theme-alpine-fusion .ag-header-row:not(:first-child) .ag-header-cell, .ag-theme-alpine-fusion .ag-header-row:not(:first-child) .ag-header-group-cell.ag-header-group-cell-with-group':
			{
				borderTop: 'solid 1px',
				borderTopColor: 'var(--ag-border-color, #babfc7)',
				fallbacks: [
					{
						borderTopColor: '#babfc7',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-header-cell-resize': {
			display: 'flex',
			alignItems: 'center',
		},
		'.ag-theme-alpine-fusion .ag-header-cell-resize::after': {
			content: '',
			position: 'absolute',
			zIndex: '1',
			display: 'block',
			left: 'calc(50% - 1px)',
			width: '2px',
			height: '30%',
			top: 'calc(50% - 15%)',
			backgroundColor: 'var(--ag-header-column-resize-handle-color, rgba(186, 191, 199, 0.5))',
			fallbacks: [
				{
					backgroundColor: 'rgba(186, 191, 199, 0.5)',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-pinned-right-header .ag-header-cell-resize::after': {
			left: 'calc(50% - 2px)',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-header-select-all': {
			marginRight: '18px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-header-select-all': {
			marginLeft: '18px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-floating-filter-button': {
			marginLeft: '18px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-floating-filter-button': {
			marginRight: '18px',
		},
		'.ag-theme-alpine-fusion .ag-floating-filter-button-button': {
			color: 'inherit',
			fontFamily: 'inherit',
			fontSize: 'inherit',
			fontWeight: 'inherit',
			lineHeight: 'inherit',
			webkitAppearance: 'none',
			mozAppearance: 'none',
			appearance: 'none',
			background: 'transparent',
			border: 'none',
			height: '16px',
			padding: '0',
			width: '16px',
		},
		'.ag-theme-alpine-fusion .ag-filter-loading': {
			backgroundColor: 'var(--ag-control-panel-background-color, #f8f8f8)',
			fallbacks: [
				{
					backgroundColor: '#f8f8f8',
				},
			],
			height: '100%',
			padding: '12px 12px',
			position: 'absolute',
			width: '100%',
			zIndex: '1',
		},
		'.ag-theme-alpine-fusion .ag-paging-panel': {
			borderTop: '1px solid',
			borderTopColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					color: '#181d1f',
				},
				{
					borderTopColor: '#babfc7',
				},
			],
			color: 'var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))',
			height: '48px',
		},
		'.ag-theme-alpine-fusion .ag-paging-panel > *': {
			margin: '0 18px',
		},
		'.ag-theme-alpine-fusion .ag-paging-button': {
			cursor: 'pointer',
		},
		'.ag-theme-alpine-fusion .ag-paging-button.ag-disabled': {
			cursor: 'default',
			color: 'var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5))',
			fallbacks: [
				{
					color: 'rgba(24, 29, 31, 0.5)',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-keyboard-focus .ag-paging-button:focus': {
			outline: 'none',
		},
		'.ag-theme-alpine-fusion .ag-keyboard-focus .ag-paging-button:focus::after': {
			content: '',
			position: 'absolute',
			backgroundColor: 'transparent',
			pointerEvents: 'none',
			top: '0px',
			left: '0px',
			display: 'block',
			width: 'calc(100% - 0px)',
			height: 'calc(100% - 0px)',
			border: '1px solid',
			borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					borderColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-paging-button, .ag-theme-alpine-fusion .ag-paging-description': {
			margin: '0 6px',
		},
		'.ag-theme-alpine-fusion .ag-status-bar': {
			borderTop: 'solid 1px',
			borderTopColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					color: 'rgba(24, 29, 31, 0.5)',
				},
				{
					borderTopColor: '#babfc7',
				},
			],
			color: 'var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5))',
			paddingRight: '24px',
			paddingLeft: '24px',
			lineHeight: '1.5',
			fontWeight: 'normal',
		},
		'.ag-theme-alpine-fusion .ag-status-name-value-value': {
			color: 'var(--ag-foreground-color, #181d1f)',
			fallbacks: [
				{
					color: '#181d1f',
				},
			],
			fontWeight: '700',
		},
		'.ag-theme-alpine-fusion .ag-status-bar-center': {
			textAlign: 'center',
		},
		'.ag-theme-alpine-fusion .ag-status-name-value': {
			marginLeft: '6px',
			marginRight: '6px',
			paddingTop: '12px',
			paddingBottom: '12px',
		},
		'.ag-theme-alpine-fusion .ag-column-drop-cell': {
			background: 'var(--ag-chip-background-color, rgba(24, 29, 31, 0.07))',
			fallbacks: [
				{
					background: 'rgba(24, 29, 31, 0.07)',
				},
			],
			borderRadius: '24px',
			height: '24px',
			padding: '0 3px',
			border: '1px solid transparent',
			cursor: 'pointer',
		},
		'.ag-theme-alpine-fusion .ag-keyboard-focus .ag-column-drop-cell:focus': {
			outline: 'none',
		},
		'.ag-theme-alpine-fusion .ag-keyboard-focus .ag-column-drop-cell:focus::after': {
			content: '',
			position: 'absolute',
			backgroundColor: 'transparent',
			pointerEvents: 'none',
			top: '2px',
			left: '2px',
			display: 'block',
			width: 'calc(100% - 4px)',
			height: 'calc(100% - 4px)',
			border: '1px solid',
			borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					borderColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-column-drop-cell-text': {
			margin: '0 6px',
		},
		'.ag-theme-alpine-fusion .ag-column-drop-cell-button': {
			minWidth: '24px',
			margin: '0 3px',
			color: 'var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))',
			fallbacks: [
				{
					color: '#181d1f',
				},
			],
			opacity: '0.5',
		},
		'.ag-theme-alpine-fusion .ag-column-drop-cell-drag-handle': {
			marginLeft: '12px',
		},
		'.ag-theme-alpine-fusion .ag-column-drop-cell-ghost': {
			opacity: '0.5',
		},
		'.ag-theme-alpine-fusion .ag-column-drop-horizontal': {
			backgroundColor: 'var(--ag-control-panel-background-color, #f8f8f8)',
			fallbacks: [
				{
					borderBottomColor: '#babfc7',
				},
				{
					color: '#181d1f',
				},
				{
					backgroundColor: '#f8f8f8',
				},
			],
			color: 'var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))',
			height: '42px',
			borderBottom: 'solid 1px',
			borderBottomColor: 'var(--ag-border-color, #babfc7)',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-column-drop-horizontal': {
			paddingLeft: '18px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-column-drop-horizontal': {
			paddingRight: '18px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-column-drop-horizontal-half-width:not(:last-child)': {
			borderRight: 'solid 1px',
			borderRightColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderRightColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-column-drop-horizontal-half-width:not(:last-child)': {
			borderLeft: 'solid 1px',
			borderLeftColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderLeftColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-column-drop-horizontal-cell-separator': {
			margin: '0 6px',
			color: 'var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))',
			fallbacks: [
				{
					color: '#181d1f',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-column-drop-horizontal-empty-message': {
			color: 'var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5))',
			fallbacks: [
				{
					color: 'rgba(24, 29, 31, 0.5)',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-column-drop-horizontal-icon': {
			marginRight: '18px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-column-drop-horizontal-icon': {
			marginLeft: '18px',
		},
		'.ag-theme-alpine-fusion .ag-column-drop-vertical-list': {
			paddingBottom: '6px',
			paddingRight: '6px',
			paddingLeft: '6px',
		},
		'.ag-theme-alpine-fusion .ag-column-drop-vertical-cell': {
			marginTop: '6px',
		},
		'.ag-theme-alpine-fusion .ag-column-drop-vertical': {
			minHeight: '75px',
			borderBottom: 'solid 1px',
			borderBottomColor: 'var(--ag-secondary-border-color, #dde2eb)',
			fallbacks: [
				{
					minHeight: '50px',
				},
				{
					borderBottomColor: '#dde2eb',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-column-drop-vertical.ag-last-column-drop': {
			borderBottom: 'none',
		},
		'.ag-theme-alpine-fusion .ag-column-drop-vertical-icon': {
			marginLeft: '6px',
			marginRight: '6px',
		},
		'.ag-theme-alpine-fusion .ag-column-drop-vertical-empty-message': {
			position: 'absolute',
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
			overflow: 'hidden',
			color: 'var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5))',
			fallbacks: [
				{
					borderColor: '#babfc7',
				},
				{
					color: 'rgba(24, 29, 31, 0.5)',
				},
			],
			marginTop: '6px',
			display: 'flex',
			alignItems: 'center',
			border: 'dashed 1px',
			borderColor: 'var(--ag-border-color, #babfc7)',
			margin: '12px',
			padding: '12px',
		},
		'.ag-theme-alpine-fusion .ag-select-agg-func-popup': {
			border: 'solid 1px',
			borderColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					padding: '6px',
				},
				{
					background: '#fff',
				},
				{
					background: 'var(--ag-background-color, #fff)',
				},
				{
					background: '#fff',
				},
				{
					borderColor: '#babfc7',
				},
			],
			background: 'var(--ag-background-color, #fff)',
			borderRadius: '3px',
			boxShadow: '0 1px 4px 1px rgba(186, 191, 199, 0.4)',
			padding: '0',
			height: '105px',
		},
		'.ag-theme-alpine-fusion .ag-select-agg-func-virtual-list-item': {
			cursor: 'default',
			paddingLeft: '12px',
		},
		'.ag-theme-alpine-fusion .ag-select-agg-func-virtual-list-item:hover': {
			backgroundColor: 'var(--ag-selected-row-background-color, rgba(33, 150, 243, 0.3))',
			fallbacks: [
				{
					backgroundColor: 'rgba(33, 150, 243, 0.3)',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-keyboard-focus .ag-select-agg-func-virtual-list-item:focus': {
			outline: 'none',
		},
		'.ag-theme-alpine-fusion .ag-keyboard-focus .ag-select-agg-func-virtual-list-item:focus::after': {
			content: '',
			position: 'absolute',
			backgroundColor: 'transparent',
			pointerEvents: 'none',
			top: '1px',
			left: '1px',
			display: 'block',
			width: 'calc(100% - 2px)',
			height: 'calc(100% - 2px)',
			border: '1px solid',
			borderColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					borderColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-sort-indicator-container': {
			display: 'flex',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-sort-indicator-icon': {
			paddingLeft: '6px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-sort-indicator-icon': {
			paddingRight: '6px',
		},
		'.ag-theme-alpine-fusion .ag-chart-menu': {
			borderRadius: '3px',
			background: 'var(--ag-background-color, #fff)',
			fallbacks: [
				{
					background: '#fff',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-chart-menu-icon': {
			opacity: '0.5',
			lineHeight: '24px',
			fontSize: '24px',
			width: '24px',
			height: '24px',
			margin: '2px 0',
			cursor: 'pointer',
			borderRadius: '3px',
			color: 'var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))',
			fallbacks: [
				{
					color: '#181d1f',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-chart-menu-icon:hover': {
			opacity: '1',
		},
		'.ag-theme-alpine-fusion .ag-chart-menu-close': {
			background: 'var(--ag-background-color, #fff)',
			fallbacks: [
				{
					background: '#fff',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-chart-menu-close .ag-icon': {
			background: 'none',
			border: '1px solid #dde2eb',
			borderRight: 'none',
		},
		'.ag-theme-alpine-fusion .ag-chart-menu-close .ag-icon:hover': {
			background: 'var(--ag-header-background-color, #f8f8f8)',
			fallbacks: [
				{
					background: '#f8f8f8',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-chart-mini-thumbnail': {
			border: '1px solid',
			borderColor: 'var(--ag-secondary-border-color, #dde2eb)',
			fallbacks: [
				{
					backgroundColor: '#fff',
				},
				{
					borderColor: '#dde2eb',
				},
			],
			borderRadius: '5px',
			margin: '5px',
			backgroundColor: 'var(--ag-background-color, #fff)',
		},
		'.ag-theme-alpine-fusion .ag-chart-mini-thumbnail:nth-last-child(3), .ag-theme-alpine-fusion .ag-chart-mini-thumbnail:nth-last-child(3) ~ .ag-chart-mini-thumbnail':
			{
				marginLeft: 'auto',
				marginRight: 'auto',
			},
		'.ag-theme-alpine-fusion .ag-ltr .ag-chart-mini-thumbnail:first-child': {
			marginLeft: '0',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-chart-mini-thumbnail:first-child': {
			marginRight: '0',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-chart-mini-thumbnail:last-child': {
			marginRight: '0',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-chart-mini-thumbnail:last-child': {
			marginLeft: '0',
		},
		'.ag-theme-alpine-fusion .ag-chart-mini-thumbnail.ag-selected': {
			borderColor:
				'var(--ag-minichart-selected-chart-color, var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3)))',
			fallbacks: [
				{
					borderColor: '#2196f3',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-chart-settings-card-item': {
			background: 'var(--ag-foreground-color, #181d1f)',
			fallbacks: [
				{
					background: '#181d1f',
				},
			],
			width: '8px',
			height: '8px',
			borderRadius: '4px',
		},
		'.ag-theme-alpine-fusion .ag-chart-settings-card-item.ag-selected': {
			backgroundColor:
				'var(--ag-minichart-selected-page-color, var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3)))',
			fallbacks: [
				{
					backgroundColor: '#2196f3',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-chart-data-column-drag-handle': {
			marginLeft: '6px',
		},
		'.ag-theme-alpine-fusion .ag-charts-settings-group-title-bar, .ag-theme-alpine-fusion .ag-charts-data-group-title-bar, .ag-theme-alpine-fusion .ag-charts-format-top-level-group-title-bar':
			{
				borderTop: 'solid 1px',
				borderTopColor: 'var(--ag-secondary-border-color, #dde2eb)',
				fallbacks: [
					{
						borderTopColor: '#dde2eb',
					},
				],
				padding: '6px 12px',
				lineHeight: '20px',
			},
		'.ag-theme-alpine-fusion .ag-charts-settings-group-container': {
			padding: '6px',
		},
		'.ag-theme-alpine-fusion .ag-charts-data-group-container': {
			padding: '6px 12px',
		},
		'.ag-theme-alpine-fusion .ag-charts-data-group-container .ag-charts-data-group-item:not(.ag-charts-format-sub-level-group)':
			{
				height: '24px',
			},
		'.ag-theme-alpine-fusion .ag-charts-data-group-container .ag-list-item-hovered::after': {
			content: '',
			position: 'absolute',
			left: '0',
			right: '0',
			height: '1px',
			backgroundColor: 'var(--ag-range-selection-border-color, #2196f3)',
			fallbacks: [
				{
					backgroundColor: '#2196f3',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-charts-data-group-container .ag-item-highlight-top::after': {
			top: '0',
		},
		'.ag-theme-alpine-fusion .ag-charts-data-group-container .ag-item-highlight-bottom::after': {
			bottom: '0',
		},
		'.ag-theme-alpine-fusion .ag-charts-format-top-level-group-container': {
			marginLeft: '12px',
			padding: '6px',
		},
		'.ag-theme-alpine-fusion .ag-charts-format-top-level-group-item': {
			margin: '6px 0',
		},
		'.ag-theme-alpine-fusion .ag-charts-format-sub-level-group-container': {
			padding: '12px 12px',
			paddingBottom: '0',
			fallbacks: [
				{
					paddingBottom: '3px',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-charts-format-sub-level-group-container > *': {
			marginBottom: '9px',
		},
		'.ag-theme-alpine-fusion .ag-charts-group-container.ag-group-container-horizontal': {
			padding: '6px',
		},
		'.ag-theme-alpine-fusion .ag-chart-data-section, .ag-theme-alpine-fusion .ag-chart-format-section': {
			display: 'flex',
			margin: '0',
		},
		'.ag-theme-alpine-fusion .ag-chart-menu-panel': {
			backgroundColor: 'var(--ag-control-panel-background-color, #f8f8f8)',
			fallbacks: [
				{
					backgroundColor: '#f8f8f8',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-chart-menu-panel': {
			borderLeft: 'solid 1px',
			borderLeftColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderLeftColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-chart-menu-panel': {
			borderRight: 'solid 1px',
			borderRightColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderRightColor: '#babfc7',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-date-time-list-page-title': {
			flexGrow: '1',
			textAlign: 'center',
		},
		'.ag-theme-alpine-fusion .ag-date-time-list-page-column-label': {
			textAlign: 'center',
		},
		'.ag-theme-alpine-fusion .ag-date-time-list-page-entry': {
			textAlign: 'center',
		},
		'.ag-theme-alpine-fusion .ag-checkbox-input-wrapper': {
			fontFamily: 'agGridAlpine',
			fontSize: '16px',
			lineHeight: '16px',
			fontStyle: 'normal',
			fontWeight: 'normal',
			fontVariant: 'normal',
			textTransform: 'none',
			webkitFontSmoothing: 'antialiased',
			mozOsxFontSmoothing: 'grayscale',
			width: '16px',
			height: '16px',
			backgroundColor: 'var(--ag-checkbox-background-color, var(--ag-background-color, #fff))',
			fallbacks: [
				{
					backgroundColor: '#fff',
				},
			],
			borderRadius: '3px',
			display: 'inline-block',
			verticalAlign: 'middle',
			flex: 'none',
		},
		'.ag-theme-alpine-fusion .ag-checkbox-input-wrapper input, .ag-theme-alpine-fusion .ag-checkbox-input-wrapper input':
			{
				webkitAppearance: 'none',
				opacity: '0',
				width: '100%',
				height: '100%',
			},
		'.ag-theme-alpine-fusion .ag-checkbox-input-wrapper:focus-within, .ag-theme-alpine-fusion .ag-checkbox-input-wrapper:active':
			{
				outline: 'none',
				boxShadow: '0 0 2px 0.1rem rgba(33, 150, 243, 0.4)',
			},
		'.ag-theme-alpine-fusion .ag-checkbox-input-wrapper.ag-disabled': {
			opacity: '0.5',
		},
		'.ag-theme-alpine-fusion .ag-checkbox-input-wrapper::after': {
			content: '\f108',
			color: 'var(--ag-checkbox-unchecked-color, #999)',
			fallbacks: [
				{
					color: '#999',
				},
			],
			position: 'absolute',
			top: '0',
			left: '0',
			pointerEvents: 'none',
		},
		'.ag-theme-alpine-fusion .ag-checkbox-input-wrapper.ag-checked::after': {
			content: '\f106',
			color: 'var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3))',
			fallbacks: [
				{
					color: '#2196f3',
				},
			],
			position: 'absolute',
			top: '0',
			left: '0',
			pointerEvents: 'none',
		},
		'.ag-theme-alpine-fusion .ag-checkbox-input-wrapper.ag-indeterminate::after': {
			content: '\f107',
			color: 'var(--ag-checkbox-indeterminate-color, var(--ag-checkbox-unchecked-color, #999))',
			fallbacks: [
				{
					color: '#999',
				},
			],
			position: 'absolute',
			top: '0',
			left: '0',
			pointerEvents: 'none',
		},
		'.ag-theme-alpine-fusion .ag-toggle-button-input-wrapper': {
			boxSizing: 'border-box',
			width: '28px',
			height: '18px',
			backgroundColor: 'var(--ag-toggle-button-off-background-color, var(--ag-checkbox-unchecked-color, #999))',
			fallbacks: [
				{
					borderColor: '#999',
				},
				{
					backgroundColor: '#999',
				},
			],
			borderRadius: '9px',
			position: 'relative',
			flex: 'none',
			border: '1px solid',
			borderColor: 'var(--ag-toggle-button-off-border-color, var(--ag-checkbox-unchecked-color, #999))',
		},
		'.ag-theme-alpine-fusion .ag-toggle-button-input-wrapper input': {
			opacity: '0',
			height: '100%',
			width: '100%',
		},
		'.ag-theme-alpine-fusion .ag-toggle-button-input-wrapper:focus-within': {
			outline: 'none',
			boxShadow: '0 0 2px 0.1rem rgba(33, 150, 243, 0.4)',
		},
		'.ag-theme-alpine-fusion .ag-toggle-button-input-wrapper.ag-disabled': {
			opacity: '0.5',
		},
		'.ag-theme-alpine-fusion .ag-toggle-button-input-wrapper.ag-checked': {
			backgroundColor:
				'var(--ag-toggle-button-on-background-color, var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3)))',
			fallbacks: [
				{
					borderColor: '#2196f3',
				},
				{
					backgroundColor: '#2196f3',
				},
			],
			borderColor:
				'var(--ag-toggle-button-on-border-color, var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3)))',
		},
		'.ag-theme-alpine-fusion .ag-toggle-button-input-wrapper::before': {
			content: ' ',
			position: 'absolute',
			top: '-1px',
			left: '-1px',
			display: 'block',
			boxSizing: 'border-box',
			height: '18px',
			width: '18px',
			backgroundColor: 'var(--ag-toggle-button-switch-background-color, var(--ag-background-color, #fff))',
			fallbacks: [
				{
					borderColor: '#999',
				},
				{
					backgroundColor: '#fff',
				},
			],
			borderRadius: '9px',
			transition: 'left 100ms',
			border: '1px solid',
			borderColor:
				'var(--ag-toggle-button-switch-border-color, var(--ag-toggle-button-off-border-color, var(--ag-checkbox-unchecked-color, #999)))',
		},
		'.ag-theme-alpine-fusion .ag-toggle-button-input-wrapper.ag-checked::before': {
			left: 'calc(100% - 18px )',
			borderColor:
				'var(--ag-toggle-button-on-border-color, var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3)))',
			fallbacks: [
				{
					borderColor: '#2196f3',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-radio-button-input-wrapper': {
			fontFamily: 'agGridAlpine',
			fontSize: '16px',
			lineHeight: '16px',
			fontStyle: 'normal',
			fontWeight: 'normal',
			fontVariant: 'normal',
			textTransform: 'none',
			webkitFontSmoothing: 'antialiased',
			mozOsxFontSmoothing: 'grayscale',
			width: '16px',
			height: '16px',
			backgroundColor: 'var(--ag-checkbox-background-color, var(--ag-background-color, #fff))',
			fallbacks: [
				{
					borderRadius: '3px',
				},
				{
					backgroundColor: '#fff',
				},
			],
			borderRadius: '16px',
			display: 'inline-block',
			verticalAlign: 'middle',
			flex: 'none',
		},
		'.ag-theme-alpine-fusion .ag-radio-button-input-wrapper input, .ag-theme-alpine-fusion .ag-radio-button-input-wrapper input':
			{
				webkitAppearance: 'none',
				opacity: '0',
				width: '100%',
				height: '100%',
			},
		'.ag-theme-alpine-fusion .ag-radio-button-input-wrapper:focus-within, .ag-theme-alpine-fusion .ag-radio-button-input-wrapper:active':
			{
				outline: 'none',
				boxShadow: '0 0 2px 0.1rem rgba(33, 150, 243, 0.4)',
			},
		'.ag-theme-alpine-fusion .ag-radio-button-input-wrapper.ag-disabled': {
			opacity: '0.5',
		},
		'.ag-theme-alpine-fusion .ag-radio-button-input-wrapper::after': {
			content: '\f126',
			color: 'var(--ag-checkbox-unchecked-color, #999)',
			fallbacks: [
				{
					color: '#999',
				},
			],
			position: 'absolute',
			top: '0',
			left: '0',
			pointerEvents: 'none',
		},
		'.ag-theme-alpine-fusion .ag-radio-button-input-wrapper.ag-checked::after': {
			content: '\f127',
			color: 'var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3))',
			fallbacks: [
				{
					color: '#2196f3',
				},
			],
			position: 'absolute',
			top: '0',
			left: '0',
			pointerEvents: 'none',
		},
		'.ag-theme-alpine-fusion input[class^=ag-][type=range]::-webkit-slider-runnable-track': {
			margin: '0',
			padding: '0',
			width: '100%',
			height: '3px',
			backgroundColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderRadius: '3px',
				},
				{
					backgroundColor: '#babfc7',
				},
			],
			borderRadius: '3px',
		},
		'.ag-theme-alpine-fusion input[class^=ag-][type=range]::-moz-range-track': {
			margin: '0',
			padding: '0',
			width: '100%',
			height: '3px',
			backgroundColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderRadius: '3px',
				},
				{
					backgroundColor: '#babfc7',
				},
			],
			borderRadius: '3px',
		},
		'.ag-theme-alpine-fusion input[class^=ag-][type=range]::-ms-track': {
			margin: '0',
			padding: '0',
			width: 'calc(100% - 2px)',
			height: '3px',
			backgroundColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					width: '100%',
				},
				{
					borderRadius: '3px',
				},
				{
					backgroundColor: '#babfc7',
				},
			],
			borderRadius: '3px',
			color: 'transparent',
		},
		'.ag-theme-alpine-fusion input[class^=ag-][type=range]::-webkit-slider-thumb': {
			margin: '0',
			padding: '0',
			webkitAppearance: 'none',
			width: '16px',
			height: '16px',
			backgroundColor: 'var(--ag-background-color, #fff)',
			fallbacks: [
				{
					borderColor: '#999',
				},
				{
					backgroundColor: '#fff',
				},
			],
			border: '1px solid',
			borderColor: 'var(--ag-checkbox-unchecked-color, #999)',
			borderRadius: '16px',
			transform: 'translateY(-6.5px)',
		},
		'.ag-theme-alpine-fusion input[class^=ag-][type=range]::-ms-thumb': {
			margin: '0',
			padding: '0',
			webkitAppearance: 'none',
			width: '16px',
			height: '16px',
			backgroundColor: 'var(--ag-background-color, #fff)',
			fallbacks: [
				{
					borderColor: '#999',
				},
				{
					backgroundColor: '#fff',
				},
			],
			border: '1px solid',
			borderColor: 'var(--ag-checkbox-unchecked-color, #999)',
			borderRadius: '16px',
		},
		'.ag-theme-alpine-fusion input[class^=ag-][type=range]::-moz-ag-range-thumb': {
			margin: '0',
			padding: '0',
			webkitAppearance: 'none',
			width: '16px',
			height: '16px',
			backgroundColor: 'var(--ag-background-color, #fff)',
			fallbacks: [
				{
					borderColor: '#999',
				},
				{
					backgroundColor: '#fff',
				},
			],
			border: '1px solid',
			borderColor: 'var(--ag-checkbox-unchecked-color, #999)',
			borderRadius: '16px',
		},
		'.ag-theme-alpine-fusion input[class^=ag-][type=range]:focus': {
			outline: 'none',
		},
		'.ag-theme-alpine-fusion input[class^=ag-][type=range]:focus::-webkit-slider-thumb': {
			boxShadow: '0 0 2px 0.1rem rgba(33, 150, 243, 0.4)',
			borderColor: 'var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3))',
			fallbacks: [
				{
					borderColor: '#2196f3',
				},
			],
		},
		'.ag-theme-alpine-fusion input[class^=ag-][type=range]:focus::-ms-thumb': {
			boxShadow: '0 0 2px 0.1rem rgba(33, 150, 243, 0.4)',
			borderColor: 'var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3))',
			fallbacks: [
				{
					borderColor: '#2196f3',
				},
			],
		},
		'.ag-theme-alpine-fusion input[class^=ag-][type=range]:focus::-moz-ag-range-thumb': {
			boxShadow: '0 0 2px 0.1rem rgba(33, 150, 243, 0.4)',
			borderColor: 'var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3))',
			fallbacks: [
				{
					borderColor: '#2196f3',
				},
			],
		},
		'.ag-theme-alpine-fusion input[class^=ag-][type=range]:active::-webkit-slider-runnable-track': {
			backgroundColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					backgroundColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine-fusion input[class^=ag-][type=range]:active::-moz-ag-range-track': {
			backgroundColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					backgroundColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine-fusion input[class^=ag-][type=range]:active::-ms-track': {
			backgroundColor: 'var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4))',
			fallbacks: [
				{
					backgroundColor: 'rgba(33, 150, 243, 0.4)',
				},
			],
		},
		'.ag-theme-alpine-fusion input[class^=ag-][type=range]:disabled': {
			opacity: '0.5',
		},
		'.ag-theme-alpine-fusion .ag-filter-toolpanel-header, .ag-theme-alpine-fusion .ag-filter-toolpanel-search, .ag-theme-alpine-fusion .ag-status-bar, .ag-theme-alpine-fusion .ag-header-row, .ag-theme-alpine-fusion .ag-panel-title-bar-title, .ag-theme-alpine-fusion .ag-multi-filter-group-title-bar':
			{
				fontWeight: '700',
				color: 'var(--ag-header-foreground-color, var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f)))',
				fallbacks: [
					{
						color: '#181d1f',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-rtl .ag-pinned-left-header .ag-header-row::before, .ag-theme-alpine-fusion .ag-ltr .ag-pinned-right-header .ag-header-row::after, .ag-theme-alpine .ag-ltr .ag-pinned-right-header .ag-theme-alpine-fusion .ag-header-row::after, .ag-theme-alpine .ag-rtl .ag-pinned-left-header .ag-theme-alpine-fusion .ag-header-row::before':
			{
				content: '',
				position: 'absolute',
				height: 'calc(100% - 20px)',
				top: '10px',
				width: '1px',
				backgroundColor: 'var(--ag-border-color, #babfc7)',
				fallbacks: [
					{
						backgroundColor: '#babfc7',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-ltr .ag-pinned-right-header .ag-header-row::after': {
			right: '0',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-pinned-left-header .ag-header-row::before': {
			left: '0',
		},
		'.ag-theme-alpine-fusion .ag-theme-alpine textarea[class^=ag-], .ag-theme-alpine .ag-theme-alpine-fusion textarea[class^=ag-], .ag-theme-alpine-fusion input[class^=ag-]:not([type]), .ag-theme-alpine-fusion input[class^=ag-][type=text], .ag-theme-alpine-fusion input[class^=ag-][type=number], .ag-theme-alpine-fusion input[class^=ag-][type=tel], .ag-theme-alpine-fusion input[class^=ag-][type=date], .ag-theme-alpine-fusion input[class^=ag-][type=datetime-local], .ag-theme-alpine-fusion textarea[class^=ag-]':
			{
				minHeight: '24px',
				borderRadius: '3px',
			},
		'.ag-theme-alpine-fusion .ag-ltr input[class^=ag-]:not([type]), .ag-theme-alpine-fusion .ag-ltr input[class^=ag-][type=text], .ag-theme-alpine-fusion .ag-ltr input[class^=ag-][type=number], .ag-theme-alpine-fusion .ag-ltr input[class^=ag-][type=tel], .ag-theme-alpine-fusion .ag-ltr input[class^=ag-][type=date], .ag-theme-alpine-fusion .ag-ltr input[class^=ag-][type=datetime-local], .ag-theme-alpine-fusion .ag-ltr textarea[class^=ag-]':
			{
				paddingLeft: '6px',
			},
		'.ag-theme-alpine-fusion .ag-rtl input[class^=ag-]:not([type]), .ag-theme-alpine-fusion .ag-rtl input[class^=ag-][type=text], .ag-theme-alpine-fusion .ag-rtl input[class^=ag-][type=number], .ag-theme-alpine-fusion .ag-rtl input[class^=ag-][type=tel], .ag-theme-alpine-fusion .ag-rtl input[class^=ag-][type=date], .ag-theme-alpine-fusion .ag-rtl input[class^=ag-][type=datetime-local], .ag-theme-alpine-fusion .ag-rtl textarea[class^=ag-]':
			{
				paddingRight: '6px',
			},
		'.ag-theme-alpine-fusion .ag-chart-settings-nav-bar': {
			borderTop: 'solid 1px',
			borderTopColor: 'var(--ag-secondary-border-color, #dde2eb)',
			fallbacks: [
				{
					borderTopColor: '#dde2eb',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-group-title-bar-icon': {
			marginRight: '6px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-group-title-bar-icon': {
			marginLeft: '6px',
		},
		'.ag-theme-alpine-fusion .ag-charts-format-top-level-group-toolbar': {
			marginTop: '6px',
		},
		'.ag-theme-alpine-fusion .ag-ltr .ag-charts-format-top-level-group-toolbar': {
			paddingLeft: '20px',
		},
		'.ag-theme-alpine-fusion .ag-rtl .ag-charts-format-top-level-group-toolbar': {
			paddingRight: '20px',
		},
		'.ag-theme-alpine-fusion .ag-charts-format-sub-level-group': {
			borderLeft: 'dashed 1px',
			borderLeftColor: 'var(--ag-border-color, #babfc7)',
			fallbacks: [
				{
					borderLeftColor: '#babfc7',
				},
			],
			paddingLeft: '6px',
			marginBottom: '12px',
		},
		'.ag-theme-alpine-fusion .ag-charts-format-sub-level-group-title-bar': {
			paddingTop: '0',
			paddingBottom: '0',
			background: 'none',
			fontWeight: '700',
		},
		'.ag-theme-alpine-fusion .ag-charts-format-sub-level-group-item:last-child': {
			marginBottom: '0',
		},
		'.ag-theme-alpine-fusion .ag-dnd-ghost': {
			fontSize: '12px',
			fontWeight: '700',
		},
		'.ag-theme-alpine-fusion .ag-standard-button': {
			mozAppearance: 'none',
			appearance: 'none',
			webkitAppearance: 'none',
			borderRadius: '3px',
			border: '1px solid',
			borderColor: 'var(--ag-alpine-active-color, #2196f3)',
			fallbacks: [
				{
					backgroundColor: '#fff',
				},
				{
					color: '#2196f3',
				},
				{
					borderColor: '#2196f3',
				},
			],
			color: 'var(--ag-alpine-active-color, #2196f3)',
			backgroundColor: 'var(--ag-background-color, #fff)',
			fontWeight: '600',
			padding: '6px 12px',
		},
		'.ag-theme-alpine-fusion .ag-standard-button:hover': {
			borderColor: 'var(--ag-alpine-active-color, #2196f3)',
			fallbacks: [
				{
					backgroundColor: 'rgba(33, 150, 243, 0.1)',
				},
				{
					borderColor: '#2196f3',
				},
			],
			backgroundColor: 'var(--ag-row-hover-color, rgba(33, 150, 243, 0.1))',
		},
		'.ag-theme-alpine-fusion .ag-standard-button:active': {
			borderColor: 'var(--ag-alpine-active-color, #2196f3)',
			fallbacks: [
				{
					color: '#fff',
				},
				{
					backgroundColor: '#2196f3',
				},
				{
					borderColor: '#2196f3',
				},
			],
			backgroundColor: 'var(--ag-alpine-active-color, #2196f3)',
			color: 'var(--ag-background-color, #fff)',
		},
		'.ag-theme-alpine-fusion .ag-standard-button:disabled': {
			color: 'var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5))',
			fallbacks: [
				{
					borderColor: 'rgba(186, 191, 199, 0.3)',
				},
				{
					backgroundColor: '#f1f2f4',
				},
				{
					color: 'rgba(24, 29, 31, 0.5)',
				},
			],
			backgroundColor: 'var(--ag-input-disabled-background-color, #f1f2f4)',
			borderColor: 'var(--ag-input-disabled-border-color, rgba(186, 191, 199, 0.3))',
		},
		'.ag-theme-alpine-fusion .ag-column-drop-vertical-title-bar': {
			padding: '12px',
			paddingBottom: '0px',
		},
		'.ag-theme-alpine-fusion .ag-column-drop-empty-message': {
			color: 'var(--ag-foreground-color, #181d1f)',
			fallbacks: [
				{
					color: '#181d1f',
				},
			],
			opacity: '0.75',
		},
		'.ag-theme-alpine-fusion .ag-paging-number, .ag-theme-alpine-fusion .ag-paging-row-summary-panel-number': {
			fontWeight: '700',
		},
		'.ag-theme-alpine-fusion .ag-column-drop-cell-button:hover': {
			opacity: '0.75',
		},
		'.ag-theme-alpine-fusion .ag-header-cell-menu-button:hover, .ag-theme-alpine-fusion .ag-side-button-button:hover, .ag-theme-alpine-fusion .ag-tab:hover, .ag-theme-alpine-fusion .ag-panel-title-bar-button:hover, .ag-theme-alpine-fusion .ag-header-expand-icon:hover, .ag-theme-alpine-fusion .ag-column-group-icons:hover, .ag-theme-alpine-fusion .ag-group-expanded .ag-icon:hover, .ag-theme-alpine-fusion .ag-group-contracted .ag-icon:hover, .ag-theme-alpine-fusion .ag-chart-settings-prev:hover, .ag-theme-alpine-fusion .ag-chart-settings-next:hover, .ag-theme-alpine-fusion .ag-group-title-bar-icon:hover, .ag-theme-alpine-fusion .ag-column-select-header-icon:hover, .ag-theme-alpine-fusion .ag-floating-filter-button-button:hover, .ag-theme-alpine-fusion .ag-filter-toolpanel-expand:hover, .ag-theme-alpine-fusion .ag-chart-menu-icon:hover':
			{
				color: 'var(--ag-alpine-active-color, #2196f3)',
				fallbacks: [
					{
						color: '#2196f3',
					},
				],
			},
		'.ag-theme-alpine-fusion .ag-chart-settings-card-item.ag-not-selected:hover': {
			opacity: '0.35',
		},
		'.ag-theme-alpine-fusion .ag-filter-toolpanel-group-container': {
			paddingLeft: '6px',
		},
		'.ag-theme-alpine-fusion .ag-set-filter-list': {
			paddingTop: '3px',
			paddingBottom: '3px',
		},
		'.ag-theme-alpine-fusion .ag-date-time-list-page-entry-is-current': {
			backgroundColor: 'var(--ag-alpine-active-color, #2196f3)',
			fallbacks: [
				{
					backgroundColor: '#2196f3',
				},
			],
		},
		'.ag-theme-alpine-fusion .ag-cell': {
			display: 'flex',
			alignItems: 'center',
			lineHeight: '1.2',
		},
		'.ag-theme-alpine-fusion .ag-cell-expandable': {
			display: 'flex',
			alignItems: 'center',
		},
	},
};
