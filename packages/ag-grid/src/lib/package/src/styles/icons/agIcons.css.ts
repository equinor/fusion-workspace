import {
	aggregation,
	arrows,
	asc,
	cancel,
	chart,
	checkboxCheckedSvg,
	checkboxIndeterminate,
	checkboxUnchecked,
	colorPicker,
	columns,
	contracted,
	copy,
	cross,
	csv,
	desc,
	excel,
	expanded,
	eye,
	eyeSlash,
	filter,
	first,
	grip,
	group,
	last,
	left,
	linked,
	loading,
	maximize,
	menu,
	minimize,
	next,
	none,
	notAllowed,
	paste,
	pin,
	pivot,
	previous,
	right,
	save,
	smallDown,
	smallLeft,
	smallRight,
	smallUp,
	tick,
	treeClosed,
	treeIndeterminate,
	treeOpen,
	unlinked,
} from '../../icons';

function parseIcon(value: string) {
	return `data:image/svg+xml,${encodeURIComponent(value)}`;
}

function injectIcon(value: string) {
	return `background: transparent
  url(${parseIcon(value)})
    center/contain no-repeat;
  color: transparent;
  height: 20px;
  width: 20px;`;
}

export const agIcons = `.ag-theme-material .ag-icon-aggregation {
    ${injectIcon(aggregation)}
  }
  .ag-theme-material .ag-icon-arrows {
    ${injectIcon(arrows)}
  }
  .ag-theme-material .ag-icon-asc {
    ${injectIcon(asc)}
  }
  .ag-theme-material .ag-icon-cancel {
    ${injectIcon(cancel)}
  }
  .ag-theme-material .ag-icon-chart {
    ${injectIcon(chart)}
  }
  .ag-theme-material .ag-icon-color-picker {
    ${injectIcon(colorPicker)}
  }
  .ag-theme-material .ag-icon-columns {
    ${injectIcon(columns)}
  }
  .ag-theme-material .ag-icon-contracted {
    ${injectIcon(contracted)}
  }
  .ag-theme-material .ag-icon-copy {
    ${injectIcon(copy)}
  }
  .ag-theme-material .ag-icon-cross {
    ${injectIcon(cross)}
  }
  .ag-theme-material .ag-icon-csv {
    ${injectIcon(csv)}
  }
  .ag-theme-material .ag-icon-desc {
    ${injectIcon(desc)}
  }
  .ag-theme-material .ag-icon-excel {
    ${injectIcon(excel)}
  }
  .ag-theme-material .ag-icon-expanded {
    ${injectIcon(expanded)}
  }
  .ag-theme-material .ag-icon-eye-slash {
    ${injectIcon(eyeSlash)}
  }
  .ag-theme-material .ag-icon-eye {
    ${injectIcon(eye)}
  }
  .ag-theme-material .ag-icon-filter {
    ${injectIcon(filter)}
  }
  .ag-theme-material .ag-icon-first {
    ${injectIcon(first)}
  }
  .ag-theme-material .ag-icon-grip {
    ${injectIcon(grip)}
  }
  .ag-theme-material .ag-icon-group {
    ${injectIcon(group)}
  }
  .ag-theme-material .ag-icon-last {
    ${injectIcon(last)}
  }
  .ag-theme-material .ag-icon-left {
    ${injectIcon(left)}
  }
  .ag-theme-material .ag-icon-linked {
    ${injectIcon(linked)}
  }
  .ag-theme-material .ag-icon-loading {
    ${injectIcon(loading)}
  }
  .ag-theme-material .ag-icon-maximize {
    ${injectIcon(maximize)}
  }
  .ag-theme-material .ag-icon-menu {
   ${injectIcon(menu)}
  }
  .ag-theme-material .ag-icon-minimize {
    ${injectIcon(minimize)}
  }
  .ag-theme-material .ag-icon-next {
    ${injectIcon(next)}
  }
  .ag-theme-material .ag-icon-none {
    ${injectIcon(none)}
  }
  .ag-theme-material .ag-icon-not-allowed {
    ${injectIcon(notAllowed)}
  }
  .ag-theme-material .ag-icon-paste {
    ${injectIcon(paste)}
  }
  .ag-theme-material .ag-icon-pin {
    ${injectIcon(pin)}
  }
  .ag-theme-material .ag-icon-pivot {
    ${injectIcon(pivot)}
  }
  .ag-theme-material .ag-icon-previous {
    ${injectIcon(previous)}
  }
  .ag-theme-material .ag-icon-right {
    ${injectIcon(right)}
  }
  .ag-theme-material .ag-icon-save {
    ${injectIcon(save)}
  }
  .ag-theme-material .ag-icon-small-down {
    ${injectIcon(smallDown)}
  }
  .ag-theme-material .ag-icon-small-left {
    ${injectIcon(smallLeft)}
  }
  .ag-theme-material .ag-icon-small-right {
    ${injectIcon(smallRight)}
  }
  .ag-theme-material .ag-icon-small-up {
    ${injectIcon(smallUp)}
  }
  .ag-theme-material .ag-icon-tick {
    ${injectIcon(tick)}
  }
  .ag-theme-material .ag-icon-tree-closed {
    ${injectIcon(treeClosed)}
  }
  .ag-theme-material .ag-icon-tree-indeterminate {
    ${injectIcon(treeIndeterminate)}
  }
  .ag-theme-material .ag-icon-tree-open {
    ${injectIcon(treeOpen)}
  }
  .ag-theme-material .ag-icon-unlinked {
    ${injectIcon(unlinked)}
  }
  .ag-theme-material .ag-icon-row-drag::before {
    content: "\f116";
  }
  .ag-theme-material .ag-left-arrow::before {
    ${injectIcon(left)}
  }
  .ag-theme-material .ag-right-arrow::before {
    ${injectIcon(right)}
  }
  .ag-theme-material .ag-checkbox-input-wrapper.ag-checked {
    background: transparent url(data:image/svg+xml,${encodeURIComponent(checkboxCheckedSvg)}) center/contain no-repeat;
    color: transparent;
  }
  .ag-theme-material .ag-checkbox-input-wrapper.ag-indeterminate {
    background: transparent url(data:image/svg+xml,${encodeURIComponent(
		checkboxIndeterminate
	)}) center/contain no-repeat;
    color: transparent;
  }
  .ag-theme-material .ag-checkbox-input-wrapper  {
    background: transparent url(data:image/svg+xml,${encodeURIComponent(checkboxUnchecked)}) center/contain no-repeat;
    color: transparent;
  }
  `;
