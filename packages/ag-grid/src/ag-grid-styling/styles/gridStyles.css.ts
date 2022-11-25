import { agHeaderCellFocus } from './header/ag-header-cell-focus.css';
import { agIcons } from './icons/agIcons.css';
import { agVariables } from './variables.ts/variables.css';

export const THEME_NAME = 'ag-theme-material';

export const agStyles = `
.ag-theme-material {
    ${agVariables}
    -webkit-font-smoothing: antialiased;
    color: rgba(0, 0, 0, 0.87);
    color: var(--ag-foreground-color, rgba(0, 0, 0, 0.87));
    font-family: Equinor, sans-serif;
    font-size: 14px;
    line-height: normal;
  }
  @font-face {
    font-family: "agGridMaterial";
    src: url("data:application/font-woff;charset=utf-8;base64,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") format("woff");
    font-weight: normal;
    font-style: normal;
  }
  .ag-theme-material .ag-icon {
    font-family: "agGridMaterial";
    font-size: 18px;
    line-height: 18px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ${agIcons}
  .ag-theme-material .ag-root-wrapper, .ag-theme-material .ag-sticky-top {
    background-color: #fff;
    background-color: var(--ag-background-color, #fff);
  }
  .ag-theme-material [class^=ag-], .ag-theme-material [class^=ag-]:focus, .ag-theme-material [class^=ag-]:after, .ag-theme-material [class^=ag-]:before {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    outline: none;
  }
  .ag-theme-material [class^=ag-]::-ms-clear {
    display: none;
  }
  .ag-theme-material .ag-checkbox .ag-input-wrapper,
  .ag-theme-material .ag-radio-button .ag-input-wrapper {
    overflow: visible;
  }
  .ag-theme-material .ag-range-field .ag-input-wrapper {
    height: 100%;
  }
  .ag-theme-material .ag-toggle-button {
    -webkit-box-flex: 0;
            flex: none;
    width: unset;
    min-width: unset;
  }
  .ag-theme-material .ag-ltr .ag-label-align-right .ag-label {
    margin-left: 8px;
  }
  
  .ag-theme-material .ag-rtl .ag-label-align-right .ag-label {
    margin-right: 8px;
  }
  
  .ag-theme-material input[class^=ag-] {
    margin: 0;
    background-color: #fff;
    background-color: var(--ag-background-color, #fff);
  }
  .ag-theme-material textarea[class^=ag-],
  .ag-theme-material select[class^=ag-] {
    background-color: #fff;
    background-color: var(--ag-background-color, #fff);
  }
  .ag-theme-material input[class^=ag-]:not([type]),
  .ag-theme-material input[class^=ag-][type=text],
  .ag-theme-material input[class^=ag-][type=number],
  .ag-theme-material input[class^=ag-][type=tel],
  .ag-theme-material input[class^=ag-][type=date],
  .ag-theme-material input[class^=ag-][type=datetime-local],
  .ag-theme-material textarea[class^=ag-] {
    font-size: inherit;
    line-height: inherit;
    color: inherit;
  }
  .ag-theme-material input[class^=ag-]:not([type]):disabled,
  .ag-theme-material input[class^=ag-][type=text]:disabled,
  .ag-theme-material input[class^=ag-][type=number]:disabled,
  .ag-theme-material input[class^=ag-][type=tel]:disabled,
  .ag-theme-material input[class^=ag-][type=date]:disabled,
  .ag-theme-material input[class^=ag-][type=datetime-local]:disabled,
  .ag-theme-material textarea[class^=ag-]:disabled {
    color: rgba(0, 0, 0, 0.38);
    color: var(--ag-disabled-foreground-color, rgba(0, 0, 0, 0.38));
    background-color: var(--ag-input-disabled-background-color);
    border-color: var(--ag-input-disabled-border-color);
  }
  .ag-theme-material input[class^=ag-]:not([type]):focus,
  .ag-theme-material input[class^=ag-][type=text]:focus,
  .ag-theme-material input[class^=ag-][type=number]:focus,
  .ag-theme-material input[class^=ag-][type=tel]:focus,
  .ag-theme-material input[class^=ag-][type=date]:focus,
  .ag-theme-material input[class^=ag-][type=datetime-local]:focus,
  .ag-theme-material textarea[class^=ag-]:focus {
    outline: none;
    -webkit-box-shadow: 0 0 0 5px rgba(32, 33, 36, 0.122);
            box-shadow: 0 0 0 5px rgba(32, 33, 36, 0.122);
    border-color: #3f51b5;
    border-color: var(--ag-input-focus-border-color, var(--ag-material-primary-color, #3f51b5));
  }
  .ag-theme-material input[class^=ag-]:not([type]):invalid,
  .ag-theme-material input[class^=ag-][type=text]:invalid,
  .ag-theme-material input[class^=ag-][type=number]:invalid,
  .ag-theme-material input[class^=ag-][type=tel]:invalid,
  .ag-theme-material input[class^=ag-][type=date]:invalid,
  .ag-theme-material input[class^=ag-][type=datetime-local]:invalid,
  .ag-theme-material textarea[class^=ag-]:invalid {
    border-width: 2px;
    border-style: solid;
    border-color: var(--ag-input-border-color-invalid);
  }
  .ag-theme-material input[class^=ag-][type=number] {
    -moz-appearance: textfield;
  }
  .ag-theme-material input[class^=ag-][type=number]::-webkit-outer-spin-button, .ag-theme-material input[class^=ag-][type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .ag-theme-material input[class^=ag-][type=range] {
    padding: 0;
  }
  .ag-theme-material input[class^=ag-][type=button]:focus, .ag-theme-material button[class^=ag-]:focus {
    -webkit-box-shadow: 0 0 0 5px rgba(32, 33, 36, 0.122);
            box-shadow: 0 0 0 5px rgba(32, 33, 36, 0.122);
  }
  .ag-theme-material .ag-drag-handle {
    color: rgba(0, 0, 0, 0.54);
    color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));
  }
  .ag-theme-material .ag-list-item, .ag-theme-material .ag-virtual-list-item {
    height: 32px;
  }
  .ag-theme-material .ag-keyboard-focus .ag-virtual-list-item:focus {
    outline: none;
  }
  .ag-theme-material .ag-keyboard-focus .ag-virtual-list-item:focus::after {
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
    border-color: #3f51b5;
    border-color: var(--ag-input-focus-border-color, var(--ag-material-primary-color, #3f51b5));
  }
  .ag-theme-material .ag-select-list {
    background-color: #fff;
    background-color: var(--ag-background-color, #fff);
    overflow-y: auto;
    overflow-x: hidden;
  }
  .ag-theme-material .ag-list-item {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
            align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ag-theme-material .ag-list-item.ag-active-item {
    background-color: #fafafa;
    background-color: var(--ag-row-hover-color, #fafafa);
  }
  .ag-theme-material .ag-select-list-item {
    padding-left: 4px;
    padding-right: 4px;
    cursor: default;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
  .ag-theme-material .ag-select-list-item span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .ag-theme-material .ag-select .ag-picker-field-wrapper {
    background-color: #fff;
    background-color: var(--ag-background-color, #fff);
    min-height: 32px;
    cursor: default;
  }
  .ag-theme-material .ag-select.ag-disabled .ag-picker-field-wrapper:focus {
    -webkit-box-shadow: none;
            box-shadow: none;
  }
  .ag-theme-material .ag-select:not(.ag-cell-editor) {
    height: 32px;
  }
  .ag-theme-material .ag-select .ag-picker-field-display {
    margin: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ag-theme-material .ag-select .ag-picker-field-icon {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
            align-items: center;
  }
  .ag-theme-material .ag-select.ag-disabled {
    opacity: 0.5;
  }
  .ag-theme-material .ag-rich-select {
    background-color: #fafafa;
    background-color: var(--ag-control-panel-background-color, #fafafa);
  }
  .ag-theme-material .ag-rich-select-list {
    width: 100%;
    min-width: 200px;
    height: 312px;
  }
  .ag-theme-material .ag-rich-select-value {
    padding: 0 8px 0 24px;
    height: 48px;
  }
  .ag-theme-material .ag-rich-select-virtual-list-item {
    cursor: default;
    height: 32px;
  }
  .ag-keyboard-focus .ag-theme-material .ag-rich-select-virtual-list-item:focus::after {
    content: none;
  }
  .ag-theme-material .ag-rich-select-virtual-list-item:hover {
    background-color: #fafafa;
    background-color: var(--ag-row-hover-color, #fafafa);
  }
  .ag-theme-material .ag-rich-select-row {
    padding-left: 24px;
  }
  .ag-theme-material .ag-rich-select-row-selected {
    background-color: #eee;
    background-color: var(--ag-selected-row-background-color, #eee);
  }
  .ag-theme-material .ag-row-drag,
  .ag-theme-material .ag-selection-checkbox,
  .ag-theme-material .ag-group-expanded,
  .ag-theme-material .ag-group-contracted {
    color: rgba(0, 0, 0, 0.54);
    color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));
  }
  .ag-theme-material .ag-ltr .ag-row-drag, .ag-theme-material .ag-ltr .ag-selection-checkbox, .ag-theme-material .ag-ltr .ag-group-expanded, .ag-theme-material .ag-ltr .ag-group-contracted {
    margin-right: 24px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-drag, .ag-theme-material .ag-rtl .ag-selection-checkbox, .ag-theme-material .ag-rtl .ag-group-expanded, .ag-theme-material .ag-rtl .ag-group-contracted {
    margin-left: 24px;
  }
  
  .ag-theme-material .ag-cell-wrapper > *:not(.ag-cell-value):not(.ag-group-value) {
    --ag-internal-calculated-line-height: var(--ag-line-height, 46px);
    --ag-internal-padded-row-height: 46px;
    height: min(var(--ag-internal-calculated-line-height), var(--ag-internal-padded-row-height));
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
            align-items: center;
    -webkit-box-flex: 0;
            flex: none;
  }
  .ag-theme-material .ag-group-expanded,
  .ag-theme-material .ag-group-contracted {
    cursor: pointer;
  }
  .ag-theme-material .ag-group-title-bar-icon {
    cursor: pointer;
    -webkit-box-flex: 0;
            flex: none;
    color: rgba(0, 0, 0, 0.54);
    color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));
  }
  .ag-theme-material .ag-ltr .ag-group-child-count {
    margin-left: 2px;
  }
  
  .ag-theme-material .ag-rtl .ag-group-child-count {
    margin-right: 2px;
  }
  
  .ag-theme-material .ag-group-title-bar {
    background-color: #eee;
    background-color: var(--ag-subheader-background-color, #eee);
    padding: 8px;
  }
  .ag-theme-material .ag-group-toolbar {
    padding: 8px;
  }
  .ag-theme-material .ag-disabled-group-title-bar, .ag-theme-material .ag-disabled-group-container {
    opacity: 0.5;
  }
  .ag-theme-material .group-item {
    margin: 4px 0;
  }
  .ag-theme-material .ag-label {
    white-space: nowrap;
  }
  .ag-theme-material .ag-ltr .ag-label {
    margin-right: 8px;
  }
  
  .ag-theme-material .ag-rtl .ag-label {
    margin-left: 8px;
  }
  
  .ag-theme-material .ag-label-align-top .ag-label {
    margin-bottom: 4px;
  }
  .ag-theme-material .ag-angle-select[disabled] {
    color: rgba(0, 0, 0, 0.38);
    color: var(--ag-disabled-foreground-color, rgba(0, 0, 0, 0.38));
    pointer-events: none;
  }
  .ag-theme-material .ag-angle-select[disabled] .ag-angle-select-field {
    opacity: 0.4;
  }
  .ag-theme-material .ag-ltr .ag-slider-field, .ag-theme-material .ag-ltr .ag-angle-select-field {
    margin-right: 16px;
  }
  
  .ag-theme-material .ag-rtl .ag-slider-field, .ag-theme-material .ag-rtl .ag-angle-select-field {
    margin-left: 16px;
  }
  
  .ag-theme-material .ag-angle-select-parent-circle {
    width: 24px;
    height: 24px;
    border-radius: 12px;
    border: solid 1px;
    border-color: #e2e2e2;
    border-color: var(--ag-border-color, #e2e2e2);
    background-color: #fff;
    background-color: var(--ag-background-color, #fff);
  }
  .ag-theme-material .ag-angle-select-child-circle {
    top: 4px;
    left: 12px;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    margin-top: -4px;
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.54);
    background-color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));
  }
  .ag-theme-material .ag-picker-field-wrapper {
    border: 1px solid;
    border-color: #e2e2e2;
    border-color: var(--ag-border-color, #e2e2e2);
    border-radius: 5px;
  }
  .ag-theme-material .ag-picker-field-wrapper:focus {
    -webkit-box-shadow: 0 0 0 5px rgba(32, 33, 36, 0.122);
            box-shadow: 0 0 0 5px rgba(32, 33, 36, 0.122);
  }
  .ag-theme-material .ag-picker-field-button {
    background-color: #fff;
    background-color: var(--ag-background-color, #fff);
    color: rgba(0, 0, 0, 0.54);
    color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));
  }
  .ag-theme-material .ag-dialog.ag-color-dialog {
    border-radius: 5px;
  }
  .ag-theme-material .ag-color-picker .ag-picker-field-display {
    height: 18px;
  }
  .ag-theme-material .ag-color-panel {
    padding: 8px;
  }
  .ag-theme-material .ag-spectrum-color {
    background-color: rgb(255, 0, 0);
    border-radius: 2px;
  }
  .ag-theme-material .ag-spectrum-tools {
    padding: 10px;
  }
  .ag-theme-material .ag-spectrum-sat {
    background-image: -webkit-gradient(linear, left top, right top, from(white), to(rgba(204, 154, 129, 0)));
    background-image: linear-gradient(to right, white, rgba(204, 154, 129, 0));
  }
  .ag-theme-material .ag-spectrum-val {
    background-image: -webkit-gradient(linear, left bottom, left top, from(black), to(rgba(204, 154, 129, 0)));
    background-image: linear-gradient(to top, black, rgba(204, 154, 129, 0));
  }
  .ag-theme-material .ag-spectrum-dragger {
    border-radius: 12px;
    height: 12px;
    width: 12px;
    border: 1px solid white;
    background: black;
    -webkit-box-shadow: 0 0 2px 0px rgba(0, 0, 0, 0.24);
            box-shadow: 0 0 2px 0px rgba(0, 0, 0, 0.24);
  }
  .ag-theme-material .ag-spectrum-hue-background {
    border-radius: 2px;
  }
  .ag-theme-material .ag-spectrum-alpha-background {
    border-radius: 2px;
  }
  .ag-theme-material .ag-spectrum-tool {
    margin-bottom: 10px;
    height: 11px;
    border-radius: 2px;
  }
  .ag-theme-material .ag-spectrum-slider {
    margin-top: -12px;
    width: 13px;
    height: 13px;
    border-radius: 13px;
    background-color: rgb(248, 248, 248);
    -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
            box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  }
  .ag-theme-material .ag-recent-color {
    margin: 0 3px;
  }
  .ag-theme-material .ag-recent-color:first-child {
    margin-left: 0;
  }
  .ag-theme-material .ag-recent-color:last-child {
    margin-right: 0;
  }
  .ag-theme-material.ag-dnd-ghost {
    background: #fff;
    background: var(--ag-background-color, #fff);
    border-radius: 2px;
    -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
            box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    padding: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgba(0, 0, 0, 0.54);
    color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));
    height: 56px !important;
    line-height: 56px;
    margin: 0;
    padding: 0 16px;
    -webkit-transform: translateY(16px);
            transform: translateY(16px);
  }
  .ag-theme-material .ag-dnd-ghost-icon {
    margin-right: 8px;
    color: rgba(0, 0, 0, 0.87);
    color: var(--ag-foreground-color, rgba(0, 0, 0, 0.87));
  }
  .ag-theme-material .ag-popup-child:not(.ag-tooltip-custom) {
    -webkit-box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  }
  .ag-dragging-range-handle .ag-theme-material .ag-dialog, .ag-dragging-fill-handle .ag-theme-material .ag-dialog {
    opacity: 0.7;
    pointer-events: none;
  }
  .ag-theme-material .ag-dialog {
    border-radius: 0px;
  }
  .ag-theme-material .ag-panel {
    background-color: #fff;
    background-color: var(--ag-background-color, #fff);
  }
  .ag-theme-material .ag-panel-title-bar {
    background-color: #fff;
    background-color: var(--ag-header-background-color, #fff);
    color: rgba(0, 0, 0, 0.54);
    color: var(--ag-header-foreground-color, var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54)));
    height: 56px;
    padding: 8px 24px;
  }
  .ag-theme-material .ag-ltr .ag-panel-title-bar-button {
    margin-left: 8px;
  }
  
  .ag-theme-material .ag-rtl .ag-panel-title-bar-button {
    margin-right: 8px;
  }
  
  .ag-theme-material .ag-tooltip {
    background-color: #fff;
    background-color: var(--ag-header-background-color, #fff);
    color: rgba(0, 0, 0, 0.87);
    color: var(--ag-foreground-color, rgba(0, 0, 0, 0.87));
    padding: 8px;
    border-radius: 2px;
    -webkit-transition: opacity 1s;
    transition: opacity 1s;
    white-space: normal;
  }
  .ag-theme-material .ag-tooltip.ag-tooltip-hiding {
    opacity: 0;
  }
  .ag-theme-material .ag-tooltip-custom {
    -webkit-transition: opacity 1s;
    transition: opacity 1s;
  }
  .ag-theme-material .ag-tooltip-custom.ag-tooltip-hiding {
    opacity: 0;
  }
  .ag-theme-material .ag-ltr .ag-column-select-indent-1 {
    padding-left: 26px;
  }
  
  .ag-theme-material .ag-rtl .ag-column-select-indent-1 {
    padding-right: 26px;
  }
  
  .ag-theme-material .ag-ltr .ag-column-select-indent-2 {
    padding-left: 52px;
  }
  
  .ag-theme-material .ag-rtl .ag-column-select-indent-2 {
    padding-right: 52px;
  }
  
  .ag-theme-material .ag-ltr .ag-column-select-indent-3 {
    padding-left: 78px;
  }
  
  .ag-theme-material .ag-rtl .ag-column-select-indent-3 {
    padding-right: 78px;
  }
  
  .ag-theme-material .ag-ltr .ag-column-select-indent-4 {
    padding-left: 104px;
  }
  
  .ag-theme-material .ag-rtl .ag-column-select-indent-4 {
    padding-right: 104px;
  }
  
  .ag-theme-material .ag-ltr .ag-column-select-indent-5 {
    padding-left: 130px;
  }
  
  .ag-theme-material .ag-rtl .ag-column-select-indent-5 {
    padding-right: 130px;
  }
  
  .ag-theme-material .ag-ltr .ag-column-select-indent-6 {
    padding-left: 156px;
  }
  
  .ag-theme-material .ag-rtl .ag-column-select-indent-6 {
    padding-right: 156px;
  }
  
  .ag-theme-material .ag-ltr .ag-column-select-indent-7 {
    padding-left: 182px;
  }
  
  .ag-theme-material .ag-rtl .ag-column-select-indent-7 {
    padding-right: 182px;
  }
  
  .ag-theme-material .ag-ltr .ag-column-select-indent-8 {
    padding-left: 208px;
  }
  
  .ag-theme-material .ag-rtl .ag-column-select-indent-8 {
    padding-right: 208px;
  }
  
  .ag-theme-material .ag-ltr .ag-column-select-indent-9 {
    padding-left: 234px;
  }
  
  .ag-theme-material .ag-rtl .ag-column-select-indent-9 {
    padding-right: 234px;
  }
  
  .ag-theme-material .ag-column-select-header-icon {
    cursor: pointer;
  }
  .ag-theme-material .ag-keyboard-focus .ag-column-select-header-icon:focus {
    outline: none;
  }
  .ag-theme-material .ag-keyboard-focus .ag-column-select-header-icon:focus::after {
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
    border-color: #3f51b5;
    border-color: var(--ag-input-focus-border-color, var(--ag-material-primary-color, #3f51b5));
  }
  .ag-theme-material .ag-ltr .ag-column-group-icons:not(:last-child), .ag-theme-material .ag-ltr .ag-column-select-header-icon:not(:last-child), .ag-theme-material .ag-ltr .ag-column-select-header-checkbox:not(:last-child), .ag-theme-material .ag-ltr .ag-column-select-header-filter-wrapper:not(:last-child), .ag-theme-material .ag-ltr .ag-column-select-checkbox:not(:last-child), .ag-theme-material .ag-ltr .ag-column-select-column-drag-handle:not(:last-child), .ag-theme-material .ag-ltr .ag-column-select-column-group-drag-handle:not(:last-child), .ag-theme-material .ag-ltr .ag-column-select-column-label:not(:last-child) {
    margin-right: 16px;
  }
  
  .ag-theme-material .ag-rtl .ag-column-group-icons:not(:last-child), .ag-theme-material .ag-rtl .ag-column-select-header-icon:not(:last-child), .ag-theme-material .ag-rtl .ag-column-select-header-checkbox:not(:last-child), .ag-theme-material .ag-rtl .ag-column-select-header-filter-wrapper:not(:last-child), .ag-theme-material .ag-rtl .ag-column-select-checkbox:not(:last-child), .ag-theme-material .ag-rtl .ag-column-select-column-drag-handle:not(:last-child), .ag-theme-material .ag-rtl .ag-column-select-column-group-drag-handle:not(:last-child), .ag-theme-material .ag-rtl .ag-column-select-column-label:not(:last-child) {
    margin-left: 16px;
  }
  
  .ag-theme-material .ag-keyboard-focus .ag-column-select-virtual-list-item:focus {
    outline: none;
  }
  .ag-theme-material .ag-keyboard-focus .ag-column-select-virtual-list-item:focus::after {
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
    border-color: #3f51b5;
    border-color: var(--ag-input-focus-border-color, var(--ag-material-primary-color, #3f51b5));
  }
  .ag-theme-material .ag-column-select-column-group:not(:last-child),
  .ag-theme-material .ag-column-select-column:not(:last-child) {
    margin-bottom: 14px;
  }
  .ag-theme-material .ag-column-select-column-readonly,
  .ag-theme-material .ag-column-select-column-group-readonly {
    color: rgba(0, 0, 0, 0.38);
    color: var(--ag-disabled-foreground-color, rgba(0, 0, 0, 0.38));
    pointer-events: none;
  }
  .ag-theme-material .ag-ltr .ag-column-select-add-group-indent {
    margin-left: 34px;
  }
  
  .ag-theme-material .ag-rtl .ag-column-select-add-group-indent {
    margin-right: 34px;
  }
  
  .ag-theme-material .ag-column-select-virtual-list-viewport {
    padding: 8px 0px;
  }
  .ag-theme-material .ag-column-select-virtual-list-item {
    padding: 0 12px;
  }
  .ag-theme-material .ag-rtl {
    text-align: right;
  }
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-1 {
    padding-left: 66px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-1 {
    padding-right: 66px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-1 {
    padding-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-1 {
    padding-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-1 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-1 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-2 {
    padding-left: 108px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-2 {
    padding-right: 108px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-2 {
    padding-left: 84px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-2 {
    padding-right: 84px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-2 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-2 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-3 {
    padding-left: 150px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-3 {
    padding-right: 150px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-3 {
    padding-left: 126px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-3 {
    padding-right: 126px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-3 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-3 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-4 {
    padding-left: 192px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-4 {
    padding-right: 192px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-4 {
    padding-left: 168px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-4 {
    padding-right: 168px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-4 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-4 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-5 {
    padding-left: 234px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-5 {
    padding-right: 234px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-5 {
    padding-left: 210px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-5 {
    padding-right: 210px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-5 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-5 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-6 {
    padding-left: 276px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-6 {
    padding-right: 276px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-6 {
    padding-left: 252px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-6 {
    padding-right: 252px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-6 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-6 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-7 {
    padding-left: 318px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-7 {
    padding-right: 318px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-7 {
    padding-left: 294px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-7 {
    padding-right: 294px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-7 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-7 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-8 {
    padding-left: 360px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-8 {
    padding-right: 360px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-8 {
    padding-left: 336px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-8 {
    padding-right: 336px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-8 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-8 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-9 {
    padding-left: 402px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-9 {
    padding-right: 402px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-9 {
    padding-left: 378px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-9 {
    padding-right: 378px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-9 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-9 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-10 {
    padding-left: 444px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-10 {
    padding-right: 444px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-10 {
    padding-left: 420px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-10 {
    padding-right: 420px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-10 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-10 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-11 {
    padding-left: 486px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-11 {
    padding-right: 486px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-11 {
    padding-left: 462px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-11 {
    padding-right: 462px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-11 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-11 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-12 {
    padding-left: 528px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-12 {
    padding-right: 528px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-12 {
    padding-left: 504px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-12 {
    padding-right: 504px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-12 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-12 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-13 {
    padding-left: 570px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-13 {
    padding-right: 570px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-13 {
    padding-left: 546px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-13 {
    padding-right: 546px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-13 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-13 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-14 {
    padding-left: 612px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-14 {
    padding-right: 612px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-14 {
    padding-left: 588px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-14 {
    padding-right: 588px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-14 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-14 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-15 {
    padding-left: 654px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-15 {
    padding-right: 654px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-15 {
    padding-left: 630px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-15 {
    padding-right: 630px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-15 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-15 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-16 {
    padding-left: 696px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-16 {
    padding-right: 696px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-16 {
    padding-left: 672px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-16 {
    padding-right: 672px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-16 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-16 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-17 {
    padding-left: 738px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-17 {
    padding-right: 738px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-17 {
    padding-left: 714px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-17 {
    padding-right: 714px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-17 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-17 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-18 {
    padding-left: 780px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-18 {
    padding-right: 780px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-18 {
    padding-left: 756px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-18 {
    padding-right: 756px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-18 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-18 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-19 {
    padding-left: 822px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-19 {
    padding-right: 822px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-19 {
    padding-left: 798px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-19 {
    padding-right: 798px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-19 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-19 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-20 {
    padding-left: 864px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-20 {
    padding-right: 864px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-20 {
    padding-left: 840px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-20 {
    padding-right: 840px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-20 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-20 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-21 {
    padding-left: 906px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-21 {
    padding-right: 906px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-21 {
    padding-left: 882px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-21 {
    padding-right: 882px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-21 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-21 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-22 {
    padding-left: 948px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-22 {
    padding-right: 948px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-22 {
    padding-left: 924px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-22 {
    padding-right: 924px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-22 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-22 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-23 {
    padding-left: 990px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-23 {
    padding-right: 990px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-23 {
    padding-left: 966px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-23 {
    padding-right: 966px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-23 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-23 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-24 {
    padding-left: 1032px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-24 {
    padding-right: 1032px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-24 {
    padding-left: 1008px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-24 {
    padding-right: 1008px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-24 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-24 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-25 {
    padding-left: 1074px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-25 {
    padding-right: 1074px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-25 {
    padding-left: 1050px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-25 {
    padding-right: 1050px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-25 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-25 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-26 {
    padding-left: 1116px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-26 {
    padding-right: 1116px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-26 {
    padding-left: 1092px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-26 {
    padding-right: 1092px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-26 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-26 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-27 {
    padding-left: 1158px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-27 {
    padding-right: 1158px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-27 {
    padding-left: 1134px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-27 {
    padding-right: 1134px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-27 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-27 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-28 {
    padding-left: 1200px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-28 {
    padding-right: 1200px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-28 {
    padding-left: 1176px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-28 {
    padding-right: 1176px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-28 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-28 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-29 {
    padding-left: 1242px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-29 {
    padding-right: 1242px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-29 {
    padding-left: 1218px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-29 {
    padding-right: 1218px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-29 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-29 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-30 {
    padding-left: 1284px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-30 {
    padding-right: 1284px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-30 {
    padding-left: 1260px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-30 {
    padding-right: 1260px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-30 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-30 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-31 {
    padding-left: 1326px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-31 {
    padding-right: 1326px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-31 {
    padding-left: 1302px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-31 {
    padding-right: 1302px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-31 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-31 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-32 {
    padding-left: 1368px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-32 {
    padding-right: 1368px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-32 {
    padding-left: 1344px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-32 {
    padding-right: 1344px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-32 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-32 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-33 {
    padding-left: 1410px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-33 {
    padding-right: 1410px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-33 {
    padding-left: 1386px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-33 {
    padding-right: 1386px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-33 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-33 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-34 {
    padding-left: 1452px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-34 {
    padding-right: 1452px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-34 {
    padding-left: 1428px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-34 {
    padding-right: 1428px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-34 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-34 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-35 {
    padding-left: 1494px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-35 {
    padding-right: 1494px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-35 {
    padding-left: 1470px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-35 {
    padding-right: 1470px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-35 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-35 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-36 {
    padding-left: 1536px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-36 {
    padding-right: 1536px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-36 {
    padding-left: 1512px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-36 {
    padding-right: 1512px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-36 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-36 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-37 {
    padding-left: 1578px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-37 {
    padding-right: 1578px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-37 {
    padding-left: 1554px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-37 {
    padding-right: 1554px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-37 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-37 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-38 {
    padding-left: 1620px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-38 {
    padding-right: 1620px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-38 {
    padding-left: 1596px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-38 {
    padding-right: 1596px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-38 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-38 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-39 {
    padding-left: 1662px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-39 {
    padding-right: 1662px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-39 {
    padding-left: 1638px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-39 {
    padding-right: 1638px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-39 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-39 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-40 {
    padding-left: 1704px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-40 {
    padding-right: 1704px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-40 {
    padding-left: 1680px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-40 {
    padding-right: 1680px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-40 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-40 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-41 {
    padding-left: 1746px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-41 {
    padding-right: 1746px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-41 {
    padding-left: 1722px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-41 {
    padding-right: 1722px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-41 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-41 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-42 {
    padding-left: 1788px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-42 {
    padding-right: 1788px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-42 {
    padding-left: 1764px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-42 {
    padding-right: 1764px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-42 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-42 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-43 {
    padding-left: 1830px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-43 {
    padding-right: 1830px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-43 {
    padding-left: 1806px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-43 {
    padding-right: 1806px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-43 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-43 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-44 {
    padding-left: 1872px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-44 {
    padding-right: 1872px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-44 {
    padding-left: 1848px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-44 {
    padding-right: 1848px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-44 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-44 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-45 {
    padding-left: 1914px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-45 {
    padding-right: 1914px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-45 {
    padding-left: 1890px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-45 {
    padding-right: 1890px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-45 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-45 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-46 {
    padding-left: 1956px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-46 {
    padding-right: 1956px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-46 {
    padding-left: 1932px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-46 {
    padding-right: 1932px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-46 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-46 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-47 {
    padding-left: 1998px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-47 {
    padding-right: 1998px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-47 {
    padding-left: 1974px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-47 {
    padding-right: 1974px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-47 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-47 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-48 {
    padding-left: 2040px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-48 {
    padding-right: 2040px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-48 {
    padding-left: 2016px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-48 {
    padding-right: 2016px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-48 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-48 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-49 {
    padding-left: 2082px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-49 {
    padding-right: 2082px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-49 {
    padding-left: 2058px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-49 {
    padding-right: 2058px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-49 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-49 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-50 {
    padding-left: 2124px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-50 {
    padding-right: 2124px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-50 {
    padding-left: 2100px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-50 {
    padding-right: 2100px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-50 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-50 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-51 {
    padding-left: 2166px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-51 {
    padding-right: 2166px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-51 {
    padding-left: 2142px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-51 {
    padding-right: 2142px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-51 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-51 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-52 {
    padding-left: 2208px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-52 {
    padding-right: 2208px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-52 {
    padding-left: 2184px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-52 {
    padding-right: 2184px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-52 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-52 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-53 {
    padding-left: 2250px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-53 {
    padding-right: 2250px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-53 {
    padding-left: 2226px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-53 {
    padding-right: 2226px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-53 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-53 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-54 {
    padding-left: 2292px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-54 {
    padding-right: 2292px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-54 {
    padding-left: 2268px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-54 {
    padding-right: 2268px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-54 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-54 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-55 {
    padding-left: 2334px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-55 {
    padding-right: 2334px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-55 {
    padding-left: 2310px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-55 {
    padding-right: 2310px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-55 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-55 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-56 {
    padding-left: 2376px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-56 {
    padding-right: 2376px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-56 {
    padding-left: 2352px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-56 {
    padding-right: 2352px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-56 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-56 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-57 {
    padding-left: 2418px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-57 {
    padding-right: 2418px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-57 {
    padding-left: 2394px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-57 {
    padding-right: 2394px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-57 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-57 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-58 {
    padding-left: 2460px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-58 {
    padding-right: 2460px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-58 {
    padding-left: 2436px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-58 {
    padding-right: 2436px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-58 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-58 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-59 {
    padding-left: 2502px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-59 {
    padding-right: 2502px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-59 {
    padding-left: 2478px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-59 {
    padding-right: 2478px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-59 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-59 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-60 {
    padding-left: 2544px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-60 {
    padding-right: 2544px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-60 {
    padding-left: 2520px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-60 {
    padding-right: 2520px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-60 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-60 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-61 {
    padding-left: 2586px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-61 {
    padding-right: 2586px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-61 {
    padding-left: 2562px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-61 {
    padding-right: 2562px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-61 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-61 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-62 {
    padding-left: 2628px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-62 {
    padding-right: 2628px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-62 {
    padding-left: 2604px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-62 {
    padding-right: 2604px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-62 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-62 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-63 {
    padding-left: 2670px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-63 {
    padding-right: 2670px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-63 {
    padding-left: 2646px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-63 {
    padding-right: 2646px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-63 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-63 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-64 {
    padding-left: 2712px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-64 {
    padding-right: 2712px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-64 {
    padding-left: 2688px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-64 {
    padding-right: 2688px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-64 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-64 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-65 {
    padding-left: 2754px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-65 {
    padding-right: 2754px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-65 {
    padding-left: 2730px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-65 {
    padding-right: 2730px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-65 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-65 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-66 {
    padding-left: 2796px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-66 {
    padding-right: 2796px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-66 {
    padding-left: 2772px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-66 {
    padding-right: 2772px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-66 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-66 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-67 {
    padding-left: 2838px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-67 {
    padding-right: 2838px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-67 {
    padding-left: 2814px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-67 {
    padding-right: 2814px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-67 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-67 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-68 {
    padding-left: 2880px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-68 {
    padding-right: 2880px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-68 {
    padding-left: 2856px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-68 {
    padding-right: 2856px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-68 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-68 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-69 {
    padding-left: 2922px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-69 {
    padding-right: 2922px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-69 {
    padding-left: 2898px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-69 {
    padding-right: 2898px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-69 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-69 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-70 {
    padding-left: 2964px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-70 {
    padding-right: 2964px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-70 {
    padding-left: 2940px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-70 {
    padding-right: 2940px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-70 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-70 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-71 {
    padding-left: 3006px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-71 {
    padding-right: 3006px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-71 {
    padding-left: 2982px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-71 {
    padding-right: 2982px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-71 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-71 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-72 {
    padding-left: 3048px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-72 {
    padding-right: 3048px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-72 {
    padding-left: 3024px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-72 {
    padding-right: 3024px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-72 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-72 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-73 {
    padding-left: 3090px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-73 {
    padding-right: 3090px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-73 {
    padding-left: 3066px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-73 {
    padding-right: 3066px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-73 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-73 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-74 {
    padding-left: 3132px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-74 {
    padding-right: 3132px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-74 {
    padding-left: 3108px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-74 {
    padding-right: 3108px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-74 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-74 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-75 {
    padding-left: 3174px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-75 {
    padding-right: 3174px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-75 {
    padding-left: 3150px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-75 {
    padding-right: 3150px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-75 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-75 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-76 {
    padding-left: 3216px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-76 {
    padding-right: 3216px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-76 {
    padding-left: 3192px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-76 {
    padding-right: 3192px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-76 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-76 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-77 {
    padding-left: 3258px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-77 {
    padding-right: 3258px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-77 {
    padding-left: 3234px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-77 {
    padding-right: 3234px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-77 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-77 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-78 {
    padding-left: 3300px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-78 {
    padding-right: 3300px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-78 {
    padding-left: 3276px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-78 {
    padding-right: 3276px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-78 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-78 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-79 {
    padding-left: 3342px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-79 {
    padding-right: 3342px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-79 {
    padding-left: 3318px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-79 {
    padding-right: 3318px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-79 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-79 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-80 {
    padding-left: 3384px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-80 {
    padding-right: 3384px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-80 {
    padding-left: 3360px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-80 {
    padding-right: 3360px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-80 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-80 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-81 {
    padding-left: 3426px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-81 {
    padding-right: 3426px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-81 {
    padding-left: 3402px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-81 {
    padding-right: 3402px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-81 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-81 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-82 {
    padding-left: 3468px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-82 {
    padding-right: 3468px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-82 {
    padding-left: 3444px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-82 {
    padding-right: 3444px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-82 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-82 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-83 {
    padding-left: 3510px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-83 {
    padding-right: 3510px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-83 {
    padding-left: 3486px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-83 {
    padding-right: 3486px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-83 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-83 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-84 {
    padding-left: 3552px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-84 {
    padding-right: 3552px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-84 {
    padding-left: 3528px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-84 {
    padding-right: 3528px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-84 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-84 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-85 {
    padding-left: 3594px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-85 {
    padding-right: 3594px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-85 {
    padding-left: 3570px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-85 {
    padding-right: 3570px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-85 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-85 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-86 {
    padding-left: 3636px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-86 {
    padding-right: 3636px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-86 {
    padding-left: 3612px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-86 {
    padding-right: 3612px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-86 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-86 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-87 {
    padding-left: 3678px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-87 {
    padding-right: 3678px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-87 {
    padding-left: 3654px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-87 {
    padding-right: 3654px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-87 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-87 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-88 {
    padding-left: 3720px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-88 {
    padding-right: 3720px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-88 {
    padding-left: 3696px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-88 {
    padding-right: 3696px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-88 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-88 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-89 {
    padding-left: 3762px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-89 {
    padding-right: 3762px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-89 {
    padding-left: 3738px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-89 {
    padding-right: 3738px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-89 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-89 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-90 {
    padding-left: 3804px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-90 {
    padding-right: 3804px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-90 {
    padding-left: 3780px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-90 {
    padding-right: 3780px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-90 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-90 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-91 {
    padding-left: 3846px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-91 {
    padding-right: 3846px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-91 {
    padding-left: 3822px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-91 {
    padding-right: 3822px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-91 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-91 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-92 {
    padding-left: 3888px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-92 {
    padding-right: 3888px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-92 {
    padding-left: 3864px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-92 {
    padding-right: 3864px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-92 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-92 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-93 {
    padding-left: 3930px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-93 {
    padding-right: 3930px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-93 {
    padding-left: 3906px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-93 {
    padding-right: 3906px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-93 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-93 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-94 {
    padding-left: 3972px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-94 {
    padding-right: 3972px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-94 {
    padding-left: 3948px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-94 {
    padding-right: 3948px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-94 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-94 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-95 {
    padding-left: 4014px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-95 {
    padding-right: 4014px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-95 {
    padding-left: 3990px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-95 {
    padding-right: 3990px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-95 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-95 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-96 {
    padding-left: 4056px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-96 {
    padding-right: 4056px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-96 {
    padding-left: 4032px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-96 {
    padding-right: 4032px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-96 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-96 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-97 {
    padding-left: 4098px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-97 {
    padding-right: 4098px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-97 {
    padding-left: 4074px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-97 {
    padding-right: 4074px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-97 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-97 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-98 {
    padding-left: 4140px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-98 {
    padding-right: 4140px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-98 {
    padding-left: 4116px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-98 {
    padding-right: 4116px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-98 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-98 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-99 {
    padding-left: 4182px;
  }
  
  .ag-theme-material .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-99 {
    padding-right: 4182px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-indent-99 {
    padding-left: 4158px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-indent-99 {
    padding-right: 4158px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-level-99 .ag-pivot-leaf-group {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-level-99 .ag-pivot-leaf-group {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-ltr .ag-row-group-leaf-indent {
    margin-left: 42px;
  }
  
  .ag-theme-material .ag-rtl .ag-row-group-leaf-indent {
    margin-right: 42px;
  }
  
  .ag-theme-material .ag-value-change-delta {
    padding-right: 2px;
  }
  .ag-theme-material .ag-value-change-delta-up {
    color: #43a047;
    color: var(--ag-value-change-delta-up-color, #43a047);
  }
  .ag-theme-material .ag-value-change-delta-down {
    color: #e53935;
    color: var(--ag-value-change-delta-down-color, #e53935);
  }
  .ag-theme-material .ag-value-change-value {
    background-color: transparent;
    border-radius: 1px;
    padding-left: 1px;
    padding-right: 1px;
    -webkit-transition: background-color 1s;
    transition: background-color 1s;
  }
  .ag-theme-material .ag-value-change-value-highlight {
    background-color: #00acc1;
    background-color: var(--ag-value-change-value-highlight-background-color, #00acc1);
    -webkit-transition: background-color 0.1s;
    transition: background-color 0.1s;
  }
  .ag-theme-material .ag-cell-data-changed {
    background-color: #00acc1 !important;
    background-color: var(--ag-value-change-value-highlight-background-color, #00acc1) !important;
  }
  .ag-theme-material .ag-cell-data-changed-animation {
    background-color: transparent;
  }
  .ag-theme-material .ag-cell-highlight {
    background-color: #fce4ec !important;
    background-color: var(--ag-range-selection-highlight-color, #fce4ec) !important;
  }
  .ag-theme-material .ag-row {
    height: 48px;
    background-color: #fff;
    background-color: var(--ag-background-color, #fff);
    color: rgba(0, 0, 0, 0.87);
    color: var(--ag-data-color, var(--ag-foreground-color, rgba(0, 0, 0, 0.87)));
    border-width: 1px;
    border-color: #e2e2e2;
    border-color: var(--ag-row-border-color, var(--ag-secondary-border-color, var(--ag-border-color, #e2e2e2)));
    border-bottom-style: solid;
  }
  .ag-theme-material .ag-row-highlight-above::after, .ag-theme-material .ag-row-highlight-below::after {
    content: "";
    position: absolute;
    width: calc(100% - 1px);
    height: 1px;
    background-color: #3f51b5;
    background-color: var(--ag-range-selection-border-color, var(--ag-material-primary-color, #3f51b5));
    left: 1px;
  }
  .ag-theme-material .ag-row-highlight-above::after {
    top: -1px;
  }
  .ag-theme-material .ag-row-highlight-above.ag-row-first::after {
    top: 0;
  }
  .ag-theme-material .ag-row-highlight-below::after {
    bottom: 0px;
  }
  .ag-theme-material .ag-row-odd {
    background-color: var(--ag-odd-row-background-color);
  }
  .ag-theme-material .ag-body-horizontal-scroll:not(.ag-scrollbar-invisible) .ag-horizontal-left-spacer:not(.ag-scroller-corner) {
    border-right: solid 1px;
    border-right-color: #e2e2e2;
    border-right-color: var(--ag-border-color, #e2e2e2);
  }
  .ag-theme-material .ag-body-horizontal-scroll:not(.ag-scrollbar-invisible) .ag-horizontal-right-spacer:not(.ag-scroller-corner) {
    border-left: solid 1px;
    border-left-color: #e2e2e2;
    border-left-color: var(--ag-border-color, #e2e2e2);
  }
  .ag-theme-material .ag-row-selected::before {
    content: "";
    background-color: #eee;
    background-color: var(--ag-selected-row-background-color, #eee);
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .ag-theme-material .ag-row-hover:not(.ag-full-width-row)::before,
  .ag-theme-material .ag-row-hover.ag-full-width-row.ag-row-group::before {
    content: "";
    background-color: #fafafa;
    background-color: var(--ag-row-hover-color, #fafafa);
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
  }
  .ag-theme-material .ag-row-hover.ag-row-selected::before {
    background-color: #fafafa;
    background-color: var(--ag-row-hover-color, #fafafa);
    background-image: -webkit-gradient(linear, left top, left bottom, from(#eee), to(#eee));
    background-image: linear-gradient(#eee, #eee);
  }
  .ag-theme-material .ag-row-hover.ag-full-width-row.ag-row-group > * {
    position: relative;
  }
  .ag-theme-material .ag-column-hover {
    background-color: #fafafa;
    background-color: var(--ag-column-hover-color, #fafafa);
  }
  .ag-theme-material .ag-ltr .ag-right-aligned-cell {
    text-align: right;
  }
  
  .ag-theme-material .ag-rtl .ag-right-aligned-cell {
    text-align: left;
  }
  
  .ag-theme-material .ag-ltr .ag-right-aligned-cell .ag-cell-value, .ag-theme-material .ag-ltr .ag-right-aligned-cell .ag-group-value {
    margin-left: auto;
  }
  
  .ag-theme-material .ag-rtl .ag-right-aligned-cell .ag-cell-value, .ag-theme-material .ag-rtl .ag-right-aligned-cell .ag-group-value {
    margin-right: auto;
  }
  
  .ag-theme-material .ag-cell, .ag-theme-material .ag-full-width-row .ag-cell-wrapper.ag-row-group {
    --ag-internal-calculated-line-height: var(--ag-line-height, 46px);
    --ag-internal-padded-row-height: 46px;
    border: 1px solid transparent;
    line-height: min(var(--ag-internal-calculated-line-height), var(--ag-internal-padded-row-height));
    padding-left: 23px;
    padding-right: 23px;
    -webkit-font-smoothing: subpixel-antialiased;
  }
  .ag-theme-material .ag-row > .ag-cell-wrapper {
    padding-left: 23px;
    padding-right: 23px;
  }
  .ag-theme-material .ag-row-dragging {
    cursor: move;
    opacity: 0.5;
  }
  .ag-theme-material .ag-cell-inline-editing {
    background: #fff;
    background: var(--ag-background-color, #fff);
    border-radius: 2px;
    -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
            box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    padding: 8px;
    padding: 0;
    height: 48px;
    background-color: #fafafa;
    background-color: var(--ag-control-panel-background-color, #fafafa);
  }
  .ag-theme-material .ag-popup-editor {
    background: #fff;
    background: var(--ag-background-color, #fff);
    border-radius: 2px;
    -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
            box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    padding: 8px;
    background-color: #fafafa;
    background-color: var(--ag-control-panel-background-color, #fafafa);
    padding: 0;
  }
  .ag-theme-material .ag-large-text-input {
    height: auto;
    padding: 24px;
  }
  .ag-theme-material .ag-details-row {
    padding: 40px;
    background-color: #fff;
    background-color: var(--ag-background-color, #fff);
  }
  .ag-theme-material .ag-layout-auto-height .ag-center-cols-clipper, .ag-theme-material .ag-layout-auto-height .ag-center-cols-container, .ag-theme-material .ag-layout-print .ag-center-cols-clipper, .ag-theme-material .ag-layout-print .ag-center-cols-container {
    min-height: 50px;
  }
  .ag-theme-material .ag-overlay-loading-wrapper {
    background-color: rgba(255, 255, 255, 0.66);
    background-color: var(--ag-modal-overlay-background-color, rgba(255, 255, 255, 0.66));
  }
  .ag-theme-material .ag-overlay-loading-center {
    background: #fff;
    background: var(--ag-background-color, #fff);
    border-radius: 2px;
    -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
            box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    padding: 8px;
  }
  .ag-theme-material .ag-overlay-no-rows-wrapper.ag-layout-auto-height {
    padding-top: 30px;
  }
  .ag-theme-material .ag-loading {
    display: -webkit-box;
    display: flex;
    height: 100%;
    -webkit-box-align: center;
            align-items: center;
  }
  .ag-theme-material .ag-ltr .ag-loading {
    padding-left: 24px;
  }
  
  .ag-theme-material .ag-rtl .ag-loading {
    padding-right: 24px;
  }
  
  .ag-theme-material .ag-ltr .ag-loading-icon {
    padding-right: 24px;
  }
  
  .ag-theme-material .ag-rtl .ag-loading-icon {
    padding-left: 24px;
  }
  
  .ag-theme-material .ag-icon-loading {
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
  .ag-theme-material .ag-floating-top {
    border-bottom: solid 1px;
    border-bottom-color: #e2e2e2;
    border-bottom-color: var(--ag-border-color, #e2e2e2);
  }
  .ag-theme-material .ag-floating-bottom {
    border-top: solid 1px;
    border-top-color: #e2e2e2;
    border-top-color: var(--ag-border-color, #e2e2e2);
  }
  .ag-theme-material .ag-ltr .ag-cell {
    border-right: solid transparent;
  }
  
  .ag-theme-material .ag-rtl .ag-cell {
    border-left: solid transparent;
  }
  
  .ag-theme-material .ag-ltr .ag-cell {
    border-right-width: 1px;
  }
  
  .ag-theme-material .ag-rtl .ag-cell {
    border-left-width: 1px;
  }
  
  .ag-theme-material .ag-cell.ag-cell-first-right-pinned:not(.ag-cell-range-left):not(.ag-cell-range-single-cell) {
    border-left: solid 1px;
    border-left-color: #e2e2e2;
    border-left-color: var(--ag-border-color, #e2e2e2);
  }
  .ag-theme-material .ag-cell.ag-cell-last-left-pinned:not(.ag-cell-range-right):not(.ag-cell-range-single-cell) {
    border-right: solid 1px;
    border-right-color: #e2e2e2;
    border-right-color: var(--ag-border-color, #e2e2e2);
  }
  .ag-theme-material .ag-cell-range-selected:not(.ag-cell-focus),
  .ag-theme-material .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-single-cell:not(.ag-cell-inline-editing) {
    background-color: rgba(122, 134, 203, 0.1);
    background-color: var(--ag-range-selection-background-color, rgba(122, 134, 203, 0.1));
  }
  .ag-theme-material .ag-cell-range-selected:not(.ag-cell-focus).ag-cell-range-chart,
  .ag-theme-material .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-single-cell:not(.ag-cell-inline-editing).ag-cell-range-chart {
    background-color: rgba(0, 88, 255, 0.1) !important;
    background-color: var(--ag-range-selection-chart-background-color, rgba(0, 88, 255, 0.1)) !important;
  }
  .ag-theme-material .ag-cell-range-selected:not(.ag-cell-focus).ag-cell-range-chart.ag-cell-range-chart-category,
  .ag-theme-material .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-single-cell:not(.ag-cell-inline-editing).ag-cell-range-chart.ag-cell-range-chart-category {
    background-color: rgba(0, 255, 132, 0.1) !important;
    background-color: var(--ag-range-selection-chart-category-background-color, rgba(0, 255, 132, 0.1)) !important;
  }
  .ag-theme-material .ag-cell-range-selected-1:not(.ag-cell-focus),
  .ag-theme-material .ag-root:not(.ag-context-menu-open) .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-selected-1:not(.ag-cell-inline-editing) {
    background-color: rgba(122, 134, 203, 0.1);
    background-color: var(--ag-range-selection-background-color-1, var(--ag-range-selection-background-color, rgba(122, 134, 203, 0.1)));
  }
  .ag-theme-material .ag-cell-range-selected-2:not(.ag-cell-focus),
  .ag-theme-material .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-selected-2 {
    background-color: rgba(122, 134, 203, 0.19);
    background-color: var(--ag-range-selection-background-color-2, rgba(122, 134, 203, 0.19));
  }
  .ag-theme-material .ag-cell-range-selected-3:not(.ag-cell-focus),
  .ag-theme-material .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-selected-3 {
    background-color: rgba(122, 134, 203, 0.271);
    background-color: var(--ag-range-selection-background-color-3, rgba(122, 134, 203, 0.271));
  }
  .ag-theme-material .ag-cell-range-selected-4:not(.ag-cell-focus),
  .ag-theme-material .ag-body-viewport:not(.ag-has-focus) .ag-cell-range-selected-4 {
    background-color: rgba(122, 134, 203, 0.3439);
    background-color: var(--ag-range-selection-background-color-4, rgba(122, 134, 203, 0.3439));
  }
  .ag-theme-material .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-top {
    border-top-color: #3f51b5;
    border-top-color: var(--ag-range-selection-border-color, var(--ag-material-primary-color, #3f51b5));
  }
  .ag-theme-material .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-right {
    border-right-color: #3f51b5;
    border-right-color: var(--ag-range-selection-border-color, var(--ag-material-primary-color, #3f51b5));
  }
  .ag-theme-material .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-bottom {
    border-bottom-color: #3f51b5;
    border-bottom-color: var(--ag-range-selection-border-color, var(--ag-material-primary-color, #3f51b5));
  }
  .ag-theme-material .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-left {
    border-left-color: #3f51b5;
    border-left-color: var(--ag-range-selection-border-color, var(--ag-material-primary-color, #3f51b5));
  }
  .ag-theme-material .ag-ltr .ag-cell-focus:not(.ag-cell-range-selected):focus-within,
  .ag-theme-material .ag-ltr .ag-context-menu-open .ag-cell-focus:not(.ag-cell-range-selected),
  .ag-theme-material .ag-ltr .ag-full-width-row.ag-row-focus:focus .ag-cell-wrapper.ag-row-group,
  .ag-theme-material .ag-ltr .ag-cell-range-single-cell,
  .ag-theme-material .ag-ltr .ag-cell-range-single-cell.ag-cell-range-handle, .ag-theme-material .ag-rtl .ag-cell-focus:not(.ag-cell-range-selected):focus-within,
  .ag-theme-material .ag-rtl .ag-context-menu-open .ag-cell-focus:not(.ag-cell-range-selected),
  .ag-theme-material .ag-rtl .ag-full-width-row.ag-row-focus:focus .ag-cell-wrapper.ag-row-group,
  .ag-theme-material .ag-rtl .ag-cell-range-single-cell,
  .ag-theme-material .ag-rtl .ag-cell-range-single-cell.ag-cell-range-handle {
    border: 1px solid;
    border-color: #3f51b5;
    border-color: var(--ag-range-selection-border-color, var(--ag-material-primary-color, #3f51b5));
    outline: initial;
  }
  .ag-theme-material .ag-cell.ag-selection-fill-top,
  .ag-theme-material .ag-cell.ag-selection-fill-top.ag-cell-range-selected {
    border-top: 1px dashed;
    border-top-color: #3f51b5;
    border-top-color: var(--ag-range-selection-border-color, var(--ag-material-primary-color, #3f51b5));
  }
  .ag-theme-material .ag-ltr .ag-cell.ag-selection-fill-right, .ag-theme-material .ag-ltr .ag-cell.ag-selection-fill-right.ag-cell-range-selected {
    border-right: 1px dashed !important;
    border-right-color: #3f51b5 !important;
    border-right-color: var(--ag-range-selection-border-color, var(--ag-material-primary-color, #3f51b5)) !important;
  }
  
  .ag-theme-material .ag-rtl .ag-cell.ag-selection-fill-right, .ag-theme-material .ag-rtl .ag-cell.ag-selection-fill-right.ag-cell-range-selected {
    border-left: 1px dashed !important;
    border-left-color: #3f51b5 !important;
    border-left-color: var(--ag-range-selection-border-color, var(--ag-material-primary-color, #3f51b5)) !important;
  }
  
  .ag-theme-material .ag-cell.ag-selection-fill-bottom,
  .ag-theme-material .ag-cell.ag-selection-fill-bottom.ag-cell-range-selected {
    border-bottom: 1px dashed;
    border-bottom-color: #3f51b5;
    border-bottom-color: var(--ag-range-selection-border-color, var(--ag-material-primary-color, #3f51b5));
  }
  .ag-theme-material .ag-ltr .ag-cell.ag-selection-fill-left, .ag-theme-material .ag-ltr .ag-cell.ag-selection-fill-left.ag-cell-range-selected {
    border-left: 1px dashed !important;
    border-left-color: #3f51b5 !important;
    border-left-color: var(--ag-range-selection-border-color, var(--ag-material-primary-color, #3f51b5)) !important;
  }
  
  .ag-theme-material .ag-rtl .ag-cell.ag-selection-fill-left, .ag-theme-material .ag-rtl .ag-cell.ag-selection-fill-left.ag-cell-range-selected {
    border-right: 1px dashed !important;
    border-right-color: #3f51b5 !important;
    border-right-color: var(--ag-range-selection-border-color, var(--ag-material-primary-color, #3f51b5)) !important;
  }
  
  .ag-theme-material .ag-range-handle, .ag-theme-material .ag-fill-handle {
    position: absolute;
    width: 6px;
    height: 6px;
    bottom: -1px;
    background-color: #3f51b5;
    background-color: var(--ag-range-selection-border-color, var(--ag-material-primary-color, #3f51b5));
  }
  .ag-theme-material .ag-ltr .ag-range-handle, .ag-theme-material .ag-ltr .ag-fill-handle {
    right: -1px;
  }
  
  .ag-theme-material .ag-rtl .ag-range-handle, .ag-theme-material .ag-rtl .ag-fill-handle {
    left: -1px;
  }
  
  .ag-theme-material .ag-fill-handle {
    cursor: cell;
  }
  .ag-theme-material .ag-range-handle {
    cursor: nwse-resize;
  }
  .ag-theme-material .ag-cell-inline-editing {
    border-color: #3f51b5 !important;
    border-color: var(--ag-input-focus-border-color, var(--ag-material-primary-color, #3f51b5)) !important;
  }
  .ag-theme-material .ag-menu {
    background: #fff;
    background: var(--ag-background-color, #fff);
    border-radius: 2px;
    -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
            box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    padding: 8px;
    padding: 0;
  }
  .ag-theme-material .ag-menu-list {
    cursor: default;
    padding: 8px 0;
  }
  .ag-theme-material .ag-menu-separator {
    height: 17px;
  }
  .ag-theme-material .ag-menu-separator-part::after {
    content: "";
    display: block;
    border-top: solid 1px;
    border-top-color: #e2e2e2;
    border-top-color: var(--ag-border-color, #e2e2e2);
  }
  .ag-theme-material .ag-menu-option-active, .ag-theme-material .ag-compact-menu-option-active {
    background-color: #fafafa;
    background-color: var(--ag-row-hover-color, #fafafa);
  }
  .ag-theme-material .ag-menu-option-part, .ag-theme-material .ag-compact-menu-option-part {
    line-height: 18px;
    padding: 10px 0;
  }
  .ag-theme-material .ag-menu-option-disabled, .ag-theme-material .ag-compact-menu-option-disabled {
    opacity: 0.5;
  }
  .ag-theme-material .ag-menu-option-icon, .ag-theme-material .ag-compact-menu-option-icon {
    width: 18px;
  }
  .ag-theme-material .ag-ltr .ag-menu-option-icon, .ag-theme-material .ag-ltr .ag-compact-menu-option-icon {
    padding-left: 16px;
  }
  
  .ag-theme-material .ag-rtl .ag-menu-option-icon, .ag-theme-material .ag-rtl .ag-compact-menu-option-icon {
    padding-right: 16px;
  }
  
  .ag-theme-material .ag-menu-option-text, .ag-theme-material .ag-compact-menu-option-text {
    padding-left: 16px;
    padding-right: 16px;
  }
  .ag-theme-material .ag-ltr .ag-menu-option-shortcut, .ag-theme-material .ag-ltr .ag-compact-menu-option-shortcut {
    padding-right: 8px;
  }
  
  .ag-theme-material .ag-rtl .ag-menu-option-shortcut, .ag-theme-material .ag-rtl .ag-compact-menu-option-shortcut {
    padding-left: 8px;
  }
  
  .ag-theme-material .ag-menu-option-popup-pointer, .ag-theme-material .ag-compact-menu-option-popup-pointer {
    padding-right: 8px;
  }
  .ag-theme-material .ag-tabs {
    min-width: 220px;
  }
  .ag-theme-material .ag-tabs-header {
    width: 100%;
    display: -webkit-box;
    display: flex;
  }
  .ag-theme-material .ag-tab {
    border-bottom: 2px solid transparent;
    display: -webkit-box;
    display: flex;
    -webkit-box-flex: 0;
            flex: none;
    -webkit-box-align: center;
            align-items: center;
    -webkit-box-pack: center;
            justify-content: center;
    cursor: pointer;
    -webkit-box-flex: 1;
            flex: 1 1 auto;
  }
  .ag-theme-material .ag-keyboard-focus .ag-tab:focus {
    outline: none;
  }
  .ag-theme-material .ag-keyboard-focus .ag-tab:focus::after {
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
    border-color: #3f51b5;
    border-color: var(--ag-input-focus-border-color, var(--ag-material-primary-color, #3f51b5));
  }
  .ag-theme-material .ag-tab-selected {
    border-bottom-color: #3f51b5;
    border-bottom-color: var(--ag-selected-tab-underline-color, var(--ag-material-primary-color, #3f51b5));
  }
  .ag-theme-material .ag-menu-header {
    color: rgba(0, 0, 0, 0.54);
    color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));
  }
  .ag-theme-material .ag-filter-separator {
    border-top: solid 1px;
    border-top-color: #e2e2e2;
    border-top-color: var(--ag-border-color, #e2e2e2);
  }
  .ag-theme-material .ag-menu:not(.ag-tabs) .ag-filter-select {
    min-width: 155px;
  }
  .ag-theme-material .ag-tabs .ag-filter-select {
    min-width: 194px;
  }
  .ag-theme-material .ag-filter-select .ag-picker-field-wrapper {
    width: 0;
  }
  .ag-theme-material .ag-filter-condition-operator {
    height: 17px;
  }
  .ag-theme-material .ag-ltr .ag-filter-condition-operator-or {
    margin-left: 16px;
  }
  
  .ag-theme-material .ag-rtl .ag-filter-condition-operator-or {
    margin-right: 16px;
  }
  
  .ag-theme-material .ag-set-filter-select-all {
    padding-top: 16px;
  }
  .ag-theme-material .ag-set-filter-list, .ag-theme-material .ag-filter-no-matches {
    height: 192px;
  }
  .ag-theme-material .ag-set-filter-filter {
    margin-top: 16px;
    margin-left: 12px;
    margin-right: 12px;
  }
  .ag-theme-material .ag-filter-to {
    margin-top: 14px;
  }
  .ag-theme-material .ag-mini-filter {
    margin: 16px 12px;
  }
  .ag-theme-material .ag-set-filter-item {
    margin: 0px 12px;
  }
  .ag-theme-material .ag-ltr .ag-set-filter-item-value {
    margin-left: 12px;
  }
  
  .ag-theme-material .ag-rtl .ag-set-filter-item-value {
    margin-right: 12px;
  }
  
  .ag-theme-material .ag-filter-apply-panel {
    padding: 16px 12px;
  }
  .ag-theme-material .ag-filter-apply-panel-button {
    line-height: 1.5;
  }
  .ag-theme-material .ag-ltr .ag-filter-apply-panel-button {
    margin-left: 16px;
  }
  
  .ag-theme-material .ag-rtl .ag-filter-apply-panel-button {
    margin-right: 16px;
  }
  
  .ag-theme-material .ag-simple-filter-body-wrapper {
    padding: 16px 12px;
    padding-bottom: 2px;
  }
  .ag-theme-material .ag-simple-filter-body-wrapper > * {
    margin-bottom: 14px;
  }
  .ag-theme-material .ag-filter-no-matches {
    padding: 16px 12px;
  }
  .ag-theme-material .ag-multi-filter-menu-item {
    margin: 8px 0;
  }
  .ag-theme-material .ag-multi-filter-group-title-bar {
    padding: 16px 8px;
    background-color: transparent;
  }
  .ag-theme-material .ag-keyboard-focus .ag-multi-filter-group-title-bar:focus {
    outline: none;
  }
  .ag-theme-material .ag-keyboard-focus .ag-multi-filter-group-title-bar:focus::after {
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
    border-color: #3f51b5;
    border-color: var(--ag-input-focus-border-color, var(--ag-material-primary-color, #3f51b5));
  }
  .ag-theme-material .ag-side-bar {
    position: relative;
  }
  .ag-theme-material .ag-tool-panel-wrapper {
    width: 200px;
    background-color: #fafafa;
    background-color: var(--ag-control-panel-background-color, #fafafa);
  }
  .ag-theme-material .ag-side-buttons {
    padding-top: 32px;
    width: 22px;
    position: relative;
    color: rgba(0, 0, 0, 0.87);
    color: var(--ag-foreground-color, rgba(0, 0, 0, 0.87));
    overflow: hidden;
  }
  .ag-theme-material button.ag-side-button-button {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    background: transparent;
    padding: 16px 0 16px 0;
    width: 100%;
    margin: 0;
    min-height: 144px;
    background-position-y: center;
    background-position-x: center;
    background-repeat: no-repeat;
    border: none;
  }
  .ag-theme-material button.ag-side-button-button:focus {
    -webkit-box-shadow: none;
            box-shadow: none;
  }
  .ag-theme-material .ag-keyboard-focus .ag-side-button-button:focus {
    outline: none;
  }
  .ag-theme-material .ag-keyboard-focus .ag-side-button-button:focus::after {
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
    border-color: #3f51b5;
    border-color: var(--ag-input-focus-border-color, var(--ag-material-primary-color, #3f51b5));
  }
  .ag-theme-material .ag-side-button-icon-wrapper {
    margin-bottom: 3px;
  }
  .ag-theme-material .ag-ltr .ag-side-bar-left .ag-side-button-button,
  .ag-theme-material .ag-rtl .ag-side-bar-right .ag-side-button-button {
    border-right: 2px solid transparent;
  }
  .ag-theme-material .ag-ltr .ag-side-bar-left .ag-selected .ag-side-button-button,
  .ag-theme-material .ag-rtl .ag-side-bar-right .ag-selected .ag-side-button-button {
    border-right-color: #3f51b5;
    border-right-color: var(--ag-selected-tab-underline-color, var(--ag-material-primary-color, #3f51b5));
  }
  .ag-theme-material .ag-rtl .ag-side-bar-left .ag-side-button-button,
  .ag-theme-material .ag-ltr .ag-side-bar-right .ag-side-button-button {
    border-left: 2px solid transparent;
  }
  .ag-theme-material .ag-rtl .ag-side-bar-left .ag-selected .ag-side-button-button,
  .ag-theme-material .ag-ltr .ag-side-bar-right .ag-selected .ag-side-button-button {
    border-left-color: #3f51b5;
    border-left-color: var(--ag-selected-tab-underline-color, var(--ag-material-primary-color, #3f51b5));
  }
  .ag-theme-material .ag-filter-toolpanel-header {
    height: 48px;
  }
  .ag-theme-material .ag-ltr .ag-filter-toolpanel-header, .ag-theme-material .ag-ltr .ag-filter-toolpanel-search {
    padding-left: 8px;
  }
  
  .ag-theme-material .ag-rtl .ag-filter-toolpanel-header, .ag-theme-material .ag-rtl .ag-filter-toolpanel-search {
    padding-right: 8px;
  }
  
  .ag-theme-material .ag-keyboard-focus .ag-filter-toolpanel-header:focus {
    outline: none;
  }
  .ag-theme-material .ag-keyboard-focus .ag-filter-toolpanel-header:focus::after {
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
    border-color: #3f51b5;
    border-color: var(--ag-input-focus-border-color, var(--ag-material-primary-color, #3f51b5));
  }
  .ag-theme-material .ag-filter-toolpanel-group.ag-has-filter > .ag-group-title-bar .ag-group-title::after {
    font-family: "agGridMaterial";
    font-size: 18px;
    line-height: 18px;
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
  .ag-theme-material .ag-ltr .ag-filter-toolpanel-group.ag-has-filter > .ag-group-title-bar .ag-group-title::after {
    padding-left: 8px;
  }
  
  .ag-theme-material .ag-rtl .ag-filter-toolpanel-group.ag-has-filter > .ag-group-title-bar .ag-group-title::after {
    padding-right: 8px;
  }
  
  .ag-theme-material .ag-filter-toolpanel-group-level-0-header {
    height: 64px;
  }
  .ag-theme-material .ag-filter-toolpanel-group-item {
    margin-top: 4px;
    margin-bottom: 4px;
  }
  .ag-theme-material .ag-filter-toolpanel-search {
    height: 56px;
  }
  .ag-theme-material .ag-filter-toolpanel-search-input {
    -webkit-box-flex: 1;
            flex-grow: 1;
    height: 32px;
  }
  .ag-theme-material .ag-ltr .ag-filter-toolpanel-search-input {
    margin-right: 8px;
  }
  
  .ag-theme-material .ag-rtl .ag-filter-toolpanel-search-input {
    margin-left: 8px;
  }
  
  .ag-theme-material .ag-ltr .ag-filter-toolpanel-expand, .ag-theme-material .ag-ltr .ag-filter-toolpanel-group-title-bar-icon {
    margin-right: 8px;
  }
  
  .ag-theme-material .ag-rtl .ag-filter-toolpanel-expand, .ag-theme-material .ag-rtl .ag-filter-toolpanel-group-title-bar-icon {
    margin-left: 8px;
  }
  
  .ag-theme-material .ag-filter-toolpanel-group-level-1 .ag-filter-toolpanel-group-level-1-header.ag-filter-toolpanel-group-title-bar {
    background-color: transparent;
  }
  .ag-theme-material .ag-ltr .ag-filter-toolpanel-group-level-1 .ag-filter-toolpanel-group-level-2-header {
    padding-left: 24px;
  }
  
  .ag-theme-material .ag-rtl .ag-filter-toolpanel-group-level-1 .ag-filter-toolpanel-group-level-2-header {
    padding-right: 24px;
  }
  
  .ag-theme-material .ag-filter-toolpanel-group-level-2 .ag-filter-toolpanel-group-level-2-header.ag-filter-toolpanel-group-title-bar {
    background-color: transparent;
  }
  .ag-theme-material .ag-ltr .ag-filter-toolpanel-group-level-2 .ag-filter-toolpanel-group-level-3-header {
    padding-left: 40px;
  }
  
  .ag-theme-material .ag-rtl .ag-filter-toolpanel-group-level-2 .ag-filter-toolpanel-group-level-3-header {
    padding-right: 40px;
  }
  
  .ag-theme-material .ag-filter-toolpanel-group-level-3 .ag-filter-toolpanel-group-level-3-header.ag-filter-toolpanel-group-title-bar {
    background-color: transparent;
  }
  .ag-theme-material .ag-ltr .ag-filter-toolpanel-group-level-3 .ag-filter-toolpanel-group-level-4-header {
    padding-left: 56px;
  }
  
  .ag-theme-material .ag-rtl .ag-filter-toolpanel-group-level-3 .ag-filter-toolpanel-group-level-4-header {
    padding-right: 56px;
  }
  
  .ag-theme-material .ag-filter-toolpanel-group-level-4 .ag-filter-toolpanel-group-level-4-header.ag-filter-toolpanel-group-title-bar {
    background-color: transparent;
  }
  .ag-theme-material .ag-ltr .ag-filter-toolpanel-group-level-4 .ag-filter-toolpanel-group-level-5-header {
    padding-left: 72px;
  }
  
  .ag-theme-material .ag-rtl .ag-filter-toolpanel-group-level-4 .ag-filter-toolpanel-group-level-5-header {
    padding-right: 72px;
  }
  
  .ag-theme-material .ag-filter-toolpanel-group-level-5 .ag-filter-toolpanel-group-level-5-header.ag-filter-toolpanel-group-title-bar {
    background-color: transparent;
  }
  .ag-theme-material .ag-ltr .ag-filter-toolpanel-group-level-5 .ag-filter-toolpanel-group-level-6-header {
    padding-left: 88px;
  }
  
  .ag-theme-material .ag-rtl .ag-filter-toolpanel-group-level-5 .ag-filter-toolpanel-group-level-6-header {
    padding-right: 88px;
  }
  
  .ag-theme-material .ag-filter-toolpanel-group-level-6 .ag-filter-toolpanel-group-level-6-header.ag-filter-toolpanel-group-title-bar {
    background-color: transparent;
  }
  .ag-theme-material .ag-ltr .ag-filter-toolpanel-group-level-6 .ag-filter-toolpanel-group-level-7-header {
    padding-left: 104px;
  }
  
  .ag-theme-material .ag-rtl .ag-filter-toolpanel-group-level-6 .ag-filter-toolpanel-group-level-7-header {
    padding-right: 104px;
  }
  
  .ag-theme-material .ag-filter-toolpanel-group-level-7 .ag-filter-toolpanel-group-level-7-header.ag-filter-toolpanel-group-title-bar {
    background-color: transparent;
  }
  .ag-theme-material .ag-ltr .ag-filter-toolpanel-group-level-7 .ag-filter-toolpanel-group-level-8-header {
    padding-left: 120px;
  }
  
  .ag-theme-material .ag-rtl .ag-filter-toolpanel-group-level-7 .ag-filter-toolpanel-group-level-8-header {
    padding-right: 120px;
  }
  
  .ag-theme-material .ag-filter-toolpanel-group-level-8 .ag-filter-toolpanel-group-level-8-header.ag-filter-toolpanel-group-title-bar {
    background-color: transparent;
  }
  .ag-theme-material .ag-ltr .ag-filter-toolpanel-group-level-8 .ag-filter-toolpanel-group-level-9-header {
    padding-left: 136px;
  }
  
  .ag-theme-material .ag-rtl .ag-filter-toolpanel-group-level-8 .ag-filter-toolpanel-group-level-9-header {
    padding-right: 136px;
  }
  
  .ag-theme-material .ag-filter-toolpanel-group-level-9 .ag-filter-toolpanel-group-level-9-header.ag-filter-toolpanel-group-title-bar {
    background-color: transparent;
  }
  .ag-theme-material .ag-ltr .ag-filter-toolpanel-group-level-9 .ag-filter-toolpanel-group-level-10-header {
    padding-left: 152px;
  }
  
  .ag-theme-material .ag-rtl .ag-filter-toolpanel-group-level-9 .ag-filter-toolpanel-group-level-10-header {
    padding-right: 152px;
  }
  
  .ag-theme-material .ag-filter-toolpanel-group-level-10 .ag-filter-toolpanel-group-level-10-header.ag-filter-toolpanel-group-title-bar {
    background-color: transparent;
  }
  .ag-theme-material .ag-ltr .ag-filter-toolpanel-group-level-10 .ag-filter-toolpanel-group-level-11-header {
    padding-left: 168px;
  }
  
  .ag-theme-material .ag-rtl .ag-filter-toolpanel-group-level-10 .ag-filter-toolpanel-group-level-11-header {
    padding-right: 168px;
  }
  
  .ag-theme-material .ag-filter-toolpanel-instance-header.ag-filter-toolpanel-group-level-1-header {
    padding-left: 8px;
  }
  .ag-theme-material .ag-filter-toolpanel-instance-filter {
    margin-top: 8px;
  }
  .ag-theme-material .ag-ltr .ag-filter-toolpanel-instance-header-icon {
    margin-left: 8px;
  }
  
  .ag-theme-material .ag-rtl .ag-filter-toolpanel-instance-header-icon {
    margin-right: 8px;
  }
  
  .ag-theme-material .ag-pivot-mode-panel {
    min-height: 56px;
    height: 56px;
    display: -webkit-box;
    display: flex;
  }
  .ag-theme-material .ag-pivot-mode-select {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
            align-items: center;
  }
  .ag-theme-material .ag-ltr .ag-pivot-mode-select {
    margin-left: 12px;
  }
  
  .ag-theme-material .ag-rtl .ag-pivot-mode-select {
    margin-right: 12px;
  }
  
  .ag-theme-material .ag-keyboard-focus .ag-column-select-header:focus {
    outline: none;
  }
  .ag-theme-material .ag-keyboard-focus .ag-column-select-header:focus::after {
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
    border-color: #3f51b5;
    border-color: var(--ag-input-focus-border-color, var(--ag-material-primary-color, #3f51b5));
  }
  .ag-theme-material .ag-column-select-header {
    height: 56px;
    -webkit-box-align: center;
            align-items: center;
    padding: 0 12px;
  }
  .ag-theme-material .ag-column-group-icons,
  .ag-theme-material .ag-column-select-header-icon {
    color: rgba(0, 0, 0, 0.54);
    color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));
  }
  .ag-theme-material .ag-column-select-list .ag-list-item-hovered::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #3f51b5;
    background-color: var(--ag-range-selection-border-color, var(--ag-material-primary-color, #3f51b5));
  }
  .ag-theme-material .ag-column-select-list .ag-item-highlight-top::after {
    top: 0;
  }
  .ag-theme-material .ag-column-select-list .ag-item-highlight-bottom::after {
    bottom: 0;
  }
  .ag-theme-material .ag-header {
    background-color: #fff;
    background-color: var(--ag-header-background-color, #fff);
    border-bottom: solid 2px;
    border-bottom-color: #e2e2e2;
    border-bottom-color: var(--ag-border-color, #e2e2e2);
  }
  .ag-theme-material .ag-header-row {
    color: rgba(0, 0, 0, 0.54);
    color: var(--ag-header-foreground-color, var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54)));
    height: 56px;
  }
  .ag-theme-material .ag-pinned-right-header {
    border-left: solid 1px;
    border-left-color: #e2e2e2;
    border-left-color: var(--ag-border-color, #e2e2e2);
  }
  .ag-theme-material .ag-pinned-left-header {
    border-right: solid 1px;
    border-right-color: #e2e2e2;
    border-right-color: var(--ag-border-color, #e2e2e2);
  }
  .ag-theme-material .ag-ltr .ag-header-cell:not(.ag-right-aligned-header) .ag-header-label-icon {
    margin-left: 8px;
  }
  
  .ag-theme-material .ag-rtl .ag-header-cell:not(.ag-right-aligned-header) .ag-header-label-icon {
    margin-right: 8px;
  }
  
  .ag-theme-material .ag-ltr .ag-header-cell.ag-right-aligned-header .ag-header-label-icon {
    margin-right: 8px;
  }
  
  .ag-theme-material .ag-rtl .ag-header-cell.ag-right-aligned-header .ag-header-label-icon {
    margin-left: 8px;
  }
  
  .ag-theme-material .ag-header-cell,
  .ag-theme-material .ag-header-group-cell {
    padding-left: 24px;
    padding-right: 24px;
  }
  .ag-theme-material .ag-header-cell.ag-header-cell-moving,
  .ag-theme-material .ag-header-group-cell.ag-header-cell-moving {
    background-color: #f2f2f2;
    background-color: var(--ag-header-cell-moving-background-color, var(--ag-header-cell-hover-background-color, #f2f2f2));
  }
  .ag-theme-material .ag-keyboard-focus .ag-header-cell:focus {
    outline: none;
  }
  ${agHeaderCellFocus}
  .ag-theme-material .ag-keyboard-focus .ag-header-cell:focus::after {
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
    border-color: #3f51b5;
    border-color: var(--ag-input-focus-border-color, var(--ag-material-primary-color, #3f51b5));
  }
  .ag-theme-material .ag-keyboard-focus .ag-header-group-cell:focus {
    outline: none;
  }
  .ag-theme-material .ag-keyboard-focus .ag-header-group-cell:focus::after {
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
    border-color: #3f51b5;
    border-color: var(--ag-input-focus-border-color, var(--ag-material-primary-color, #3f51b5));
  }
  .ag-theme-material .ag-header-icon {
    color: rgba(0, 0, 0, 0.54);
    color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));
  }
  .ag-theme-material .ag-header-expand-icon {
    cursor: pointer;
  }
  .ag-theme-material .ag-ltr .ag-header-expand-icon {
    padding-left: 4px;
  }
  
  .ag-theme-material .ag-rtl .ag-header-expand-icon {
    padding-right: 4px;
  }
  
  .ag-theme-material .ag-header-row:not(:first-child) .ag-header-cell,
  .ag-theme-material .ag-header-row:not(:first-child) .ag-header-group-cell.ag-header-group-cell-with-group {
    border-top: solid 1px;
    border-top-color: #e2e2e2;
    border-top-color: var(--ag-border-color, #e2e2e2);
  }
  .ag-theme-material .ag-header-group-cell:not(.ag-column-resizing) + .ag-header-group-cell:not(.ag-header-cell-moving):hover, .ag-theme-material .ag-header-group-cell:not(.ag-column-resizing) + .ag-header-group-cell.ag-column-resizing,
  .ag-theme-material .ag-header-cell:not(.ag-column-resizing) + .ag-header-cell:not(.ag-header-cell-moving):hover,
  .ag-theme-material .ag-header-cell:not(.ag-column-resizing) + .ag-header-cell.ag-column-resizing,
  .ag-theme-material .ag-header-group-cell:first-of-type:not(.ag-header-cell-moving):hover,
  .ag-theme-material .ag-header-group-cell:first-of-type.ag-column-resizing,
  .ag-theme-material .ag-header-cell:first-of-type:not(.ag-header-cell-moving):hover,
  .ag-theme-material .ag-header-cell:first-of-type.ag-column-resizing {
    background-color: #f2f2f2;
    background-color: var(--ag-header-cell-hover-background-color, #f2f2f2);
  }
  .ag-theme-material .ag-ltr .ag-header-select-all {
    margin-right: 24px;
  }
  
  .ag-theme-material .ag-rtl .ag-header-select-all {
    margin-left: 24px;
  }
  
  .ag-theme-material .ag-ltr .ag-floating-filter-button {
    margin-left: 24px;
  }
  
  .ag-theme-material .ag-rtl .ag-floating-filter-button {
    margin-right: 24px;
  }
  
  .ag-theme-material .ag-floating-filter-button-button {
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
    height: 18px;
    padding: 0;
    width: 18px;
  }
  .ag-theme-material .ag-filter-loading {
    background-color: #fafafa;
    background-color: var(--ag-control-panel-background-color, #fafafa);
    height: 100%;
    padding: 16px 12px;
    position: absolute;
    width: 100%;
    z-index: 1;
  }
  .ag-theme-material .ag-paging-panel {
    border-top: 1px solid;
    border-top-color: #e2e2e2;
    border-top-color: var(--ag-border-color, #e2e2e2);
    color: rgba(0, 0, 0, 0.54);
    color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));
    height: 56px;
  }
  .ag-theme-material .ag-paging-panel > * {
    margin: 0 24px;
  }
  .ag-theme-material .ag-paging-button {
    cursor: pointer;
  }
  .ag-theme-material .ag-paging-button.ag-disabled {
    cursor: default;
    color: rgba(0, 0, 0, 0.38);
    color: var(--ag-disabled-foreground-color, rgba(0, 0, 0, 0.38));
  }
  .ag-theme-material .ag-keyboard-focus .ag-paging-button:focus {
    outline: none;
  }
  .ag-theme-material .ag-keyboard-focus .ag-paging-button:focus::after {
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
    border-color: #3f51b5;
    border-color: var(--ag-input-focus-border-color, var(--ag-material-primary-color, #3f51b5));
  }
  .ag-theme-material .ag-paging-button, .ag-theme-material .ag-paging-description {
    margin: 0 8px;
  }
  .ag-theme-material .ag-status-bar {
    color: rgba(0, 0, 0, 0.38);
    color: var(--ag-disabled-foreground-color, rgba(0, 0, 0, 0.38));
    padding-right: 32px;
    padding-left: 32px;
    line-height: 1.5;
  }
  .ag-theme-material .ag-status-name-value-value {
    color: rgba(0, 0, 0, 0.87);
    color: var(--ag-foreground-color, rgba(0, 0, 0, 0.87));
  }
  .ag-theme-material .ag-status-bar-center {
    text-align: center;
  }
  .ag-theme-material .ag-status-name-value {
    margin-left: 8px;
    margin-right: 8px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
  .ag-theme-material .ag-column-drop-cell {
    background: #e2e2e2;
    background: var(--ag-chip-background-color, #e2e2e2);
    border-radius: 32px;
    height: 32px;
    padding: 0 4px;
    border: 1px solid transparent;
    cursor: pointer;
  }
  .ag-theme-material .ag-keyboard-focus .ag-column-drop-cell:focus {
    outline: none;
  }
  .ag-theme-material .ag-keyboard-focus .ag-column-drop-cell:focus::after {
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
    border-color: #3f51b5;
    border-color: var(--ag-input-focus-border-color, var(--ag-material-primary-color, #3f51b5));
  }
  .ag-theme-material .ag-column-drop-cell-text {
    margin: 0 8px;

  }
  .ag-theme-material .ag-column-drop-cell-button {
    min-width: 32px;
    margin: 0 4px;
    color: rgba(0, 0, 0, 0.54);
    color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));
  }
  .ag-theme-material .ag-column-drop-cell-drag-handle {
    margin-left: 16px;
  }
  .ag-theme-material .ag-column-drop-cell-ghost {
    opacity: 0.5;
  }
  .ag-theme-material .ag-column-drop-horizontal {
    background-color: #fafafa;
    background-color: var(--ag-control-panel-background-color, #fafafa);
    color: rgba(0, 0, 0, 0.54);
    color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));
    height: 48px;
  }
  .ag-theme-material .ag-ltr .ag-column-drop-horizontal {
    padding-left: 24px;
  }
  
  .ag-theme-material .ag-rtl .ag-column-drop-horizontal {
    padding-right: 24px;
  }
  
  .ag-theme-material .ag-column-drop-horizontal-cell-separator {
    margin: 0 8px;
    color: rgba(0, 0, 0, 0.54);
    color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));
  }
  .ag-theme-material .ag-column-drop-horizontal-empty-message {
    color: rgba(0, 0, 0, 0.38);
    color: var(--ag-disabled-foreground-color, rgba(0, 0, 0, 0.38));
  }
  .ag-theme-material .ag-ltr .ag-column-drop-horizontal-icon {
    margin-right: 24px;
  }
  
  .ag-theme-material .ag-rtl .ag-column-drop-horizontal-icon {
    margin-left: 24px;
  }
  
  .ag-theme-material .ag-column-drop-vertical-list {
    padding-bottom: 8px;
    padding-right: 8px;
    padding-left: 8px;
  }
  .ag-theme-material .ag-column-drop-vertical-cell {
    margin-top: 8px;
  }
  .ag-theme-material .ag-column-drop-vertical {
    min-height: 50px;
  }
  .ag-theme-material .ag-column-drop-vertical-icon {
    margin-left: 8px;
    margin-right: 8px;
  }
  .ag-theme-material .ag-column-drop-vertical-empty-message {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.38);
    color: var(--ag-disabled-foreground-color, rgba(0, 0, 0, 0.38));
    margin-top: 8px;
  }
  .ag-theme-material .ag-select-agg-func-popup {
    background: #fff;
    background: var(--ag-background-color, #fff);
    border-radius: 2px;
    -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
            box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    padding: 8px;
    background: #fff;
    background: var(--ag-background-color, #fff);
    height: 140px;
    padding: 0;
  }
  .ag-theme-material .ag-select-agg-func-virtual-list-item {
    cursor: default;
    padding-left: 16px;
  }
  .ag-theme-material .ag-select-agg-func-virtual-list-item:hover {
    background-color: #eee;
    background-color: var(--ag-selected-row-background-color, #eee);
  }
  .ag-theme-material .ag-keyboard-focus .ag-select-agg-func-virtual-list-item:focus {
    outline: none;
  }
  .ag-theme-material .ag-keyboard-focus .ag-select-agg-func-virtual-list-item:focus::after {
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
    border-color: #3f51b5;
    border-color: var(--ag-input-focus-border-color, var(--ag-material-primary-color, #3f51b5));
  }
  .ag-theme-material .ag-sort-indicator-container {
    display: -webkit-box;
    display: flex;
  }
  .ag-theme-material .ag-ltr .ag-sort-indicator-icon {
    padding-left: 8px;
  }
  
  .ag-theme-material .ag-rtl .ag-sort-indicator-icon {
    padding-right: 8px;
  }
  
  .ag-theme-material .ag-chart-menu {
    border-radius: 2px;
    background: #fff;
    background: var(--ag-background-color, #fff);
  }
  .ag-theme-material .ag-chart-menu-icon {
    opacity: 0.5;
    line-height: 24px;
    font-size: 24px;
    width: 24px;
    height: 24px;
    margin: 2px 0;
    cursor: pointer;
    border-radius: 2px;
    color: rgba(0, 0, 0, 0.54);
    color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));
  }
  .ag-theme-material .ag-chart-menu-icon:hover {
    opacity: 1;
  }
  .ag-theme-material .ag-chart-menu-close {
    background: #fff;
    background: var(--ag-background-color, #fff);
  }
  .ag-theme-material .ag-chart-menu-close .ag-icon {
    background: none;
    border: 1px solid #e2e2e2;
    border-right: none;
  }
  .ag-theme-material .ag-chart-menu-close .ag-icon:hover {
    background: #fff;
    background: var(--ag-header-background-color, #fff);
  }
  .ag-theme-material .ag-chart-mini-thumbnail {
    border: 1px solid;
    border-color: #e2e2e2;
    border-color: var(--ag-secondary-border-color, var(--ag-border-color, #e2e2e2));
    border-radius: 5px;
    margin: 5px;
  }
  .ag-theme-material .ag-chart-mini-thumbnail:nth-last-child(3), .ag-theme-material .ag-chart-mini-thumbnail:nth-last-child(3) ~ .ag-chart-mini-thumbnail {
    margin-left: auto;
    margin-right: auto;
  }
  .ag-theme-material .ag-ltr .ag-chart-mini-thumbnail:first-child {
    margin-left: 0;
  }
  
  .ag-theme-material .ag-rtl .ag-chart-mini-thumbnail:first-child {
    margin-right: 0;
  }
  
  .ag-theme-material .ag-ltr .ag-chart-mini-thumbnail:last-child {
    margin-right: 0;
  }
  
  .ag-theme-material .ag-rtl .ag-chart-mini-thumbnail:last-child {
    margin-left: 0;
  }
  
  .ag-theme-material .ag-chart-mini-thumbnail.ag-selected {
    border-color: #ff4081;
    border-color: var(--ag-minichart-selected-chart-color, var(--ag-checkbox-checked-color, var(--ag-material-accent-color, #ff4081)));
  }
  .ag-theme-material .ag-chart-settings-card-item {
    background: rgba(0, 0, 0, 0.87);
    background: var(--ag-foreground-color, rgba(0, 0, 0, 0.87));
    width: 8px;
    height: 8px;
    border-radius: 4px;
  }
  .ag-theme-material .ag-chart-settings-card-item.ag-selected {
    background-color: #ff4081;
    background-color: var(--ag-minichart-selected-page-color, var(--ag-checkbox-checked-color, var(--ag-material-accent-color, #ff4081)));
  }
  .ag-theme-material .ag-chart-data-column-drag-handle {
    margin-left: 8px;
  }
  .ag-theme-material .ag-charts-settings-group-container {
    padding: 8px;
  }
  .ag-theme-material .ag-charts-data-group-container {
    padding: 8px 12px;
  }
  .ag-theme-material .ag-charts-data-group-container .ag-charts-data-group-item:not(.ag-charts-format-sub-level-group) {
    height: 32px;
  }
  .ag-theme-material .ag-charts-data-group-container .ag-list-item-hovered::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #3f51b5;
    background-color: var(--ag-range-selection-border-color, var(--ag-material-primary-color, #3f51b5));
  }
  .ag-theme-material .ag-charts-data-group-container .ag-item-highlight-top::after {
    top: 0;
  }
  .ag-theme-material .ag-charts-data-group-container .ag-item-highlight-bottom::after {
    bottom: 0;
  }
  .ag-theme-material .ag-charts-format-top-level-group-container {
    margin-left: 16px;
    padding: 8px;
  }
  .ag-theme-material .ag-charts-format-top-level-group-item {
    margin: 8px 0;
  }
  .ag-theme-material .ag-charts-format-sub-level-group-container {
    padding: 16px 12px;
    padding-bottom: 2px;
  }
  .ag-theme-material .ag-charts-format-sub-level-group-container > * {
    margin-bottom: 14px;
  }
  .ag-theme-material .ag-charts-group-container.ag-group-container-horizontal {
    padding: 8px;
  }
  .ag-theme-material .ag-chart-data-section,
  .ag-theme-material .ag-chart-format-section {
    display: -webkit-box;
    display: flex;
    margin: 0;
  }
  .ag-theme-material .ag-chart-menu-panel {
    background-color: #fafafa;
    background-color: var(--ag-control-panel-background-color, #fafafa);
  }
  .ag-theme-material .ag-ltr .ag-chart-menu-panel {
    border-left: solid 1px;
    border-left-color: #e2e2e2;
    border-left-color: var(--ag-border-color, #e2e2e2);
  }
  
  .ag-theme-material .ag-rtl .ag-chart-menu-panel {
    border-right: solid 1px;
    border-right-color: #e2e2e2;
    border-right-color: var(--ag-border-color, #e2e2e2);
  }
  
  .ag-theme-material .ag-date-time-list-page-title {
    -webkit-box-flex: 1;
            flex-grow: 1;
    text-align: center;
  }
  .ag-theme-material .ag-date-time-list-page-column-label {
    text-align: center;
  }
  .ag-theme-material .ag-date-time-list-page-entry {
    text-align: center;
  }
  .ag-theme-material .ag-checkbox-input-wrapper {
    font-family: "agGridMaterial";
    font-size: 18px;
    line-height: 18px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 18px;
    height: 18px;
    background-color: var(--ag-checkbox-background-color);
    border-radius: 2px;
    display: inline-block;
    vertical-align: middle;
    -webkit-box-flex: 0;
            flex: none;
  }
  .ag-theme-material .ag-checkbox-input-wrapper input, .ag-theme-material .ag-checkbox-input-wrapper input {
    -webkit-appearance: none;
    opacity: 0;
    width: 100%;
    height: 100%;
  }
  .ag-theme-material .ag-checkbox-input-wrapper:focus-within, .ag-theme-material .ag-checkbox-input-wrapper:active {
    outline: none;
    -webkit-box-shadow: 0 0 0 5px rgba(32, 33, 36, 0.122);
            box-shadow: 0 0 0 5px rgba(32, 33, 36, 0.122);
  }
  .ag-theme-material .ag-checkbox-input-wrapper.ag-disabled {
    opacity: 0.5;
  }
  .ag-theme-material .ag-checkbox-input-wrapper::after {
    content: "\f108";
    color: #333;
    color: var(--ag-checkbox-unchecked-color, #333);
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }
  .ag-theme-material .ag-checkbox-input-wrapper.ag-checked::after {
    content: "\f106";
    color: #ff4081;
    color: var(--ag-checkbox-checked-color, var(--ag-material-accent-color, #ff4081));
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }
  .ag-theme-material .ag-checkbox-input-wrapper.ag-indeterminate::after {
    content: "\f107";
    color: #333;
    color: var(--ag-checkbox-indeterminate-color, var(--ag-checkbox-unchecked-color, #333));
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }
  .ag-theme-material .ag-toggle-button-input-wrapper {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    width: 36px;
    height: 18px;
    background-color: #333;
    background-color: var(--ag-toggle-button-off-background-color, var(--ag-checkbox-unchecked-color, #333));
    border-radius: 9px;
    position: relative;
    -webkit-box-flex: 0;
            flex: none;
    border: 1px solid;
    border-color: #333;
    border-color: var(--ag-toggle-button-off-border-color, var(--ag-checkbox-unchecked-color, #333));
  }
  .ag-theme-material .ag-toggle-button-input-wrapper input {
    opacity: 0;
    height: 100%;
    width: 100%;
  }
  .ag-theme-material .ag-toggle-button-input-wrapper:focus-within {
    outline: none;
    -webkit-box-shadow: 0 0 0 5px rgba(32, 33, 36, 0.122);
            box-shadow: 0 0 0 5px rgba(32, 33, 36, 0.122);
  }
  .ag-theme-material .ag-toggle-button-input-wrapper.ag-disabled {
    opacity: 0.5;
  }
  .ag-theme-material .ag-toggle-button-input-wrapper.ag-checked {
    background-color: #ff4081;
    background-color: var(--ag-toggle-button-on-background-color, var(--ag-checkbox-checked-color, var(--ag-material-accent-color, #ff4081)));
    border-color: #ff4081;
    border-color: var(--ag-toggle-button-on-border-color, var(--ag-checkbox-checked-color, var(--ag-material-accent-color, #ff4081)));
  }
  .ag-theme-material .ag-toggle-button-input-wrapper::before {
    content: " ";
    position: absolute;
    top: -1px;
    left: -1px;
    display: block;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    height: 18px;
    width: 18px;
    background-color: #fff;
    background-color: var(--ag-toggle-button-switch-background-color, var(--ag-background-color, #fff));
    border-radius: 9px;
    -webkit-transition: left 100ms;
    transition: left 100ms;
    border: 1px solid;
    border-color: #333;
    border-color: var(--ag-toggle-button-switch-border-color, var(--ag-toggle-button-off-border-color, var(--ag-checkbox-unchecked-color, #333)));
  }
  .ag-theme-material .ag-toggle-button-input-wrapper.ag-checked::before {
    left: calc(100% - 18px );
    border-color: #ff4081;
    border-color: var(--ag-toggle-button-on-border-color, var(--ag-checkbox-checked-color, var(--ag-material-accent-color, #ff4081)));
  }
  .ag-theme-material .ag-radio-button-input-wrapper {
    font-family: "agGridMaterial";
    font-size: 18px;
    line-height: 18px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 18px;
    height: 18px;
    background-color: var(--ag-checkbox-background-color);
    border-radius: 2px;
    display: inline-block;
    vertical-align: middle;
    -webkit-box-flex: 0;
            flex: none;
    border-radius: 18px;
  }
  .ag-theme-material .ag-radio-button-input-wrapper input, .ag-theme-material .ag-radio-button-input-wrapper input {
    -webkit-appearance: none;
    opacity: 0;
    width: 100%;
    height: 100%;
  }
  .ag-theme-material .ag-radio-button-input-wrapper:focus-within, .ag-theme-material .ag-radio-button-input-wrapper:active {
    outline: none;
    -webkit-box-shadow: 0 0 0 5px rgba(32, 33, 36, 0.122);
            box-shadow: 0 0 0 5px rgba(32, 33, 36, 0.122);
  }
  .ag-theme-material .ag-radio-button-input-wrapper.ag-disabled {
    opacity: 0.5;
  }
  .ag-theme-material .ag-radio-button-input-wrapper::after {
    content: "\f126";
    color: #333;
    color: var(--ag-checkbox-unchecked-color, #333);
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }
  .ag-theme-material .ag-radio-button-input-wrapper.ag-checked::after {
    content: "\f127";
    color: #ff4081;
    color: var(--ag-checkbox-checked-color, var(--ag-material-accent-color, #ff4081));
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }
  .ag-theme-material input[class^=ag-][type=range] {
    -webkit-appearance: none;
    width: 100%;
    height: 100%;
    background: none;
    overflow: visible;
  }
  .ag-theme-material input[class^=ag-][type=range]::-webkit-slider-runnable-track {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 3px;
    background-color: #e2e2e2;
    background-color: var(--ag-border-color, #e2e2e2);
    border-radius: 0px;
    border-radius: 2px;
  }
  .ag-theme-material input[class^=ag-][type=range]::-moz-range-track {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 3px;
    background-color: #e2e2e2;
    background-color: var(--ag-border-color, #e2e2e2);
    border-radius: 0px;
    border-radius: 2px;
  }
  .ag-theme-material input[class^=ag-][type=range]::-ms-track {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 3px;
    background-color: #e2e2e2;
    background-color: var(--ag-border-color, #e2e2e2);
    border-radius: 0px;
    border-radius: 2px;
    color: transparent;
    width: calc(100% - 2px);
  }
  .ag-theme-material input[class^=ag-][type=range]::-webkit-slider-thumb {
    margin: 0;
    padding: 0;
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    background-color: #fff;
    background-color: var(--ag-background-color, #fff);
    border: 1px solid;
    border-color: #333;
    border-color: var(--ag-checkbox-unchecked-color, #333);
    border-radius: 18px;
    -webkit-transform: translateY(-7.5px);
            transform: translateY(-7.5px);
  }
  .ag-theme-material input[class^=ag-][type=range]::-ms-thumb {
    margin: 0;
    padding: 0;
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    background-color: #fff;
    background-color: var(--ag-background-color, #fff);
    border: 1px solid;
    border-color: #333;
    border-color: var(--ag-checkbox-unchecked-color, #333);
    border-radius: 18px;
  }
  .ag-theme-material input[class^=ag-][type=range]::-moz-ag-range-thumb {
    margin: 0;
    padding: 0;
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    background-color: #fff;
    background-color: var(--ag-background-color, #fff);
    border: 1px solid;
    border-color: #333;
    border-color: var(--ag-checkbox-unchecked-color, #333);
    border-radius: 18px;
  }
  .ag-theme-material input[class^=ag-][type=range]:focus {
    outline: none;
  }
  .ag-theme-material input[class^=ag-][type=range]:focus::-webkit-slider-thumb {
    -webkit-box-shadow: 0 0 0 5px rgba(32, 33, 36, 0.122);
            box-shadow: 0 0 0 5px rgba(32, 33, 36, 0.122);
    border-color: #ff4081;
    border-color: var(--ag-checkbox-checked-color, var(--ag-material-accent-color, #ff4081));
  }
  .ag-theme-material input[class^=ag-][type=range]:focus::-ms-thumb {
    box-shadow: 0 0 0 5px rgba(32, 33, 36, 0.122);
    border-color: #ff4081;
    border-color: var(--ag-checkbox-checked-color, var(--ag-material-accent-color, #ff4081));
  }
  .ag-theme-material input[class^=ag-][type=range]:focus::-moz-ag-range-thumb {
    box-shadow: 0 0 0 5px rgba(32, 33, 36, 0.122);
    border-color: #ff4081;
    border-color: var(--ag-checkbox-checked-color, var(--ag-material-accent-color, #ff4081));
  }
  .ag-theme-material input[class^=ag-][type=range]:active::-webkit-slider-runnable-track {
    background-color: #3f51b5;
    background-color: var(--ag-input-focus-border-color, var(--ag-material-primary-color, #3f51b5));
  }
  .ag-theme-material input[class^=ag-][type=range]:active::-moz-ag-range-track {
    background-color: #3f51b5;
    background-color: var(--ag-input-focus-border-color, var(--ag-material-primary-color, #3f51b5));
  }
  .ag-theme-material input[class^=ag-][type=range]:active::-ms-track {
    background-color: #3f51b5;
    background-color: var(--ag-input-focus-border-color, var(--ag-material-primary-color, #3f51b5));
  }
  .ag-theme-material input[class^=ag-][type=range]:disabled {
    opacity: 0.5;
  }
  .ag-theme-material .ag-filter-toolpanel-header,
  .ag-theme-material .ag-filter-toolpanel-search,
  .ag-theme-material .ag-status-bar,
  .ag-theme-material .ag-header-row,
  .ag-theme-material .ag-panel-title-bar-title,
  .ag-theme-material .ag-side-button-button,
  .ag-theme-material .ag-multi-filter-group-title-bar {
    font-size: 12px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.54);
    color: var(--ag-header-foreground-color, var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54)));
  }
  .ag-theme-material .ag-tab {
    height: 36px;
  }
  .ag-theme-material .ag-tabs-header,
  .ag-theme-material .ag-column-drop-horizontal {
    background-color: #eee;
    background-color: var(--ag-subheader-background-color, #eee);
  }
  .ag-theme-material .ag-tabs-body {
    padding: 4px 0;
  }
  .ag-theme-material .ag-tabs-body .ag-menu-list {
    padding-top: 0;
    padding-bottom: 0;
  }
  .ag-theme-material .ag-header-cell, .ag-theme-material .ag-header-group-cell {
    -webkit-transition: background-color 0.5s;
    transition: background-color 0.5s;
  }
  .ag-theme-material .ag-row-last:not(.ag-row-first) .ag-cell-inline-editing {
    bottom: 0;
  }
  .ag-theme-material .ag-cell-inline-editing {
    padding: 8px;
    height: 72px;
    border-color: #e2e2e2 !important;
    border-color: var(--ag-border-color, #e2e2e2) !important;
  }
  .ag-theme-material .ag-has-focus .ag-cell-inline-editing {
    border-color: #3f51b5 !important;
    border-color: var(--ag-input-focus-border-color, var(--ag-material-primary-color, #3f51b5)) !important;
  }
  .ag-theme-material .ag-side-button-button {
    color: rgba(0, 0, 0, 0.54);
    color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));
  }
  .ag-theme-material .ag-column-drop-vertical {
    border-bottom: solid 1px;
    border-bottom-color: #e2e2e2;
    border-bottom-color: var(--ag-border-color, #e2e2e2);
    padding-top: 8px;
  }
  .ag-theme-material .ag-column-drop-vertical.ag-last-column-drop {
    border-bottom: none;
  }
  .ag-theme-material .ag-column-drop-vertical-cell {
    margin-left: 0;
  }
  .ag-theme-material .ag-column-drop-vertical-empty-message {
    font-size: 12px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.38);
    color: var(--ag-disabled-foreground-color, rgba(0, 0, 0, 0.38));
  }
  .ag-theme-material .ag-ltr .ag-column-drop-vertical-empty-message {
    padding-left: 34px;
    padding-right: 8px;
  }
  
  .ag-theme-material .ag-rtl .ag-column-drop-vertical-empty-message {
    padding-right: 34px;
    padding-left: 8px;
  }
  
  .ag-theme-material .ag-status-bar {
    border: solid 1px;
    border-color: #e2e2e2;
    border-color: var(--ag-border-color, #e2e2e2);
  }
  .ag-theme-material .ag-column-panel-column-select {
    border-top: solid 1px;
    border-top-color: #e2e2e2;
    border-top-color: var(--ag-border-color, #e2e2e2);
  }
  .ag-theme-material .ag-column-select, .ag-theme-material .ag-column-select-header {
    border-bottom: solid 1px;
    border-bottom-color: #e2e2e2;
    border-bottom-color: var(--ag-border-color, #e2e2e2);
  }
  .ag-theme-material .ag-column-select-header {
    height: 56px;
  }
  .ag-theme-material .ag-group-title-bar {
    padding: 6px 8px;
  }
  .ag-theme-material .ag-charts-format-sub-level-group-title-bar {
    padding: 4px 8px;
  }
  .ag-theme-material .ag-chart-data-section,
  .ag-theme-material .ag-chart-format-section {
    padding-bottom: 4px;
  }
  .ag-theme-material .ag-chart-menu-close .ag-icon {
    border: none;
  }
  .ag-theme-material .ag-group-toolbar {
    background-color: rgba(238, 238, 238, 0.5);
  }
  .ag-theme-material input[class^=ag-]:not([type]),
  .ag-theme-material input[class^=ag-][type=text],
  .ag-theme-material input[class^=ag-][type=number],
  .ag-theme-material input[class^=ag-][type=tel],
  .ag-theme-material input[class^=ag-][type=date],
  .ag-theme-material input[class^=ag-][type=datetime-local],
  .ag-theme-material textarea[class^=ag-] {
    background: transparent;
    color: rgba(0, 0, 0, 0.87);
    color: var(--ag-foreground-color, rgba(0, 0, 0, 0.87));
    font-family: inherit;
    font-size: inherit;
    height: 40px;
    padding-bottom: 8px;
    border-width: 0;
    border-bottom: 2px solid;
    border-bottom-color: #e2e2e2;
    border-bottom-color: var(--ag-border-color, #e2e2e2);
  }
  .ag-theme-material input[class^=ag-]:focus:not([type]),
  .ag-theme-material input[class^=ag-][type=text]:focus,
  .ag-theme-material input[class^=ag-][type=number]:focus,
  .ag-theme-material input[class^=ag-][type=tel]:focus,
  .ag-theme-material input[class^=ag-][type=date]:focus,
  .ag-theme-material input[class^=ag-][type=datetime-local]:focus,
  .ag-theme-material textarea[class^=ag-]:focus {
    border-bottom: 2px solid;
    border-bottom-color: #3f51b5;
    border-bottom-color: var(--ag-material-primary-color, #3f51b5);
    outline: none;
    -webkit-box-shadow: none;
            box-shadow: none;
  }
  .ag-theme-material input[class^=ag-]:not([type])::-webkit-input-placeholder, .ag-theme-material input[class^=ag-][type=text]::-webkit-input-placeholder, .ag-theme-material input[class^=ag-][type=number]::-webkit-input-placeholder, .ag-theme-material input[class^=ag-][type=tel]::-webkit-input-placeholder, .ag-theme-material input[class^=ag-][type=date]::-webkit-input-placeholder, .ag-theme-material input[class^=ag-][type=datetime-local]::-webkit-input-placeholder, .ag-theme-material textarea[class^=ag-]::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.38);
    color: var(--ag-disabled-foreground-color, rgba(0, 0, 0, 0.38));
  }
  .ag-theme-material input[class^=ag-]:not([type])::-moz-placeholder, .ag-theme-material input[class^=ag-][type=text]::-moz-placeholder, .ag-theme-material input[class^=ag-][type=number]::-moz-placeholder, .ag-theme-material input[class^=ag-][type=tel]::-moz-placeholder, .ag-theme-material input[class^=ag-][type=date]::-moz-placeholder, .ag-theme-material input[class^=ag-][type=datetime-local]::-moz-placeholder, .ag-theme-material textarea[class^=ag-]::-moz-placeholder {
    color: rgba(0, 0, 0, 0.38);
    color: var(--ag-disabled-foreground-color, rgba(0, 0, 0, 0.38));
  }
  .ag-theme-material input[class^=ag-]:not([type])::placeholder,
  .ag-theme-material input[class^=ag-][type=text]::placeholder,
  .ag-theme-material input[class^=ag-][type=number]::placeholder,
  .ag-theme-material input[class^=ag-][type=tel]::placeholder,
  .ag-theme-material input[class^=ag-][type=date]::placeholder,
  .ag-theme-material input[class^=ag-][type=datetime-local]::placeholder,
  .ag-theme-material textarea[class^=ag-]::placeholder {
    color: rgba(0, 0, 0, 0.38);
    color: var(--ag-disabled-foreground-color, rgba(0, 0, 0, 0.38));
  }
  .ag-theme-material input[class^=ag-]:disabled:not([type]),
  .ag-theme-material input[class^=ag-][type=text]:disabled,
  .ag-theme-material input[class^=ag-][type=number]:disabled,
  .ag-theme-material input[class^=ag-][type=tel]:disabled,
  .ag-theme-material input[class^=ag-][type=date]:disabled,
  .ag-theme-material input[class^=ag-][type=datetime-local]:disabled,
  .ag-theme-material textarea[class^=ag-]:disabled {
    border-bottom: 1px solid;
    border-bottom-color: #e2e2e2;
    border-bottom-color: var(--ag-border-color, #e2e2e2);
  }
  .ag-theme-material input[class^=ag-]:invalid:not([type]),
  .ag-theme-material input[class^=ag-][type=text]:invalid,
  .ag-theme-material input[class^=ag-][type=number]:invalid,
  .ag-theme-material input[class^=ag-][type=tel]:invalid,
  .ag-theme-material input[class^=ag-][type=date]:invalid,
  .ag-theme-material input[class^=ag-][type=datetime-local]:invalid,
  .ag-theme-material textarea[class^=ag-]:invalid {
    border-width: 0;
    border-bottom: 1px solid;
    border-bottom-color: #e02525;
    border-bottom-color: var(--ag-invalid-color, #e02525);
    color: #e02525;
    color: var(--ag-invalid-color, #e02525);
  }
  .ag-theme-material .ag-standard-button {
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    background-color: transparent;
    border: 0;
    color: #3f51b5;
    color: var(--ag-material-primary-color, #3f51b5);
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
  }
  .ag-theme-material .ag-standard-button:disabled {
    color: rgba(0, 0, 0, 0.38);
    color: var(--ag-disabled-foreground-color, rgba(0, 0, 0, 0.38));
    background-color: var(--ag-input-disabled-background-color);
    border-color: var(--ag-input-disabled-border-color);
  }
  .ag-theme-material .ag-dnd-ghost {
    font-size: 12px;
    font-weight: 600;
  }
  .ag-theme-material .ag-filter-toolpanel-header {
    height: 32px;
  }
  .ag-theme-material .ag-filter-toolpanel-group-level-0-header {
    height: 56px;
  }
  .ag-theme-material .ag-ltr .ag-filter-apply-panel-button {
    margin-left: var(--ag-grid-size);
  }
  
  .ag-theme-material .ag-rtl .ag-filter-apply-panel-button {
    margin-right: var(--ag-grid-size);
  }
  
  .ag-theme-material .ag-layout-auto-height .ag-center-cols-clipper, .ag-theme-material .ag-layout-auto-height .ag-center-cols-container, .ag-theme-material .ag-layout-print .ag-center-cols-clipper, .ag-theme-material .ag-layout-print .ag-center-cols-container {
    min-height: 150px;
  }
  .ag-theme-material .ag-overlay-no-rows-wrapper.ag-layout-auto-height {
    padding-top: 60px;
  }
  .ag-theme-material .ag-picker-field-wrapper:focus {
    -webkit-box-shadow: 0 0 0 1px #3f51b5;
            box-shadow: 0 0 0 1px #3f51b5;
  }
  `;