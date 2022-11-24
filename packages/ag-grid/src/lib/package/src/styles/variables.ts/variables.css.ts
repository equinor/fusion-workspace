import { tokens } from '@equinor/eds-tokens';
import { concat } from '../../utils/concat';

const unassigned = 'grey';

/**input */
const inputVariables = `
--ag-input-focus-border-color: ${unassigned};
--ag-input-border-color-invalid: ${unassigned};
--ag-input-focus-border-color: ${unassigned};
--ag-input-disabled-background-color: ${unassigned};
--ag-input-disabled-border-color: ${unassigned};
`;

//--ag-line-height: ${unassigned};
/**
--ag-secondary-foreground-color: ${unassigned};
--ag-data-color: ${unassigned};
--ag-background-color: ${unassigned};
--ag-disabled-foreground-color: ${unassigned};
 */
const general = `
--ag-border-color: ${tokens.colors.ui.background__medium.hex};
--ag-background-color: ${tokens.colors.ui.background__default.hex};
--ag-foreground-color: ${tokens.colors.text.static_icons__default.hex};
--ag-material-primary-color: ${tokens.colors.interactive.primary__resting.hex};
--ag-data-color: ${tokens.colors.text.static_icons__default.hex};

`;
/**
 --ag-row-hover-color: ${unassigned};
--ag-row-border-color: ${unassigned};
--ag-selected-row-background-color: ${unassigned};
--ag-odd-row-background-color: ${unassigned};
 */
/** General */
const row = `
--ag-row-hover-color: ${tokens.colors.ui.background__medium.hex};
--ag-row-border-color: ${tokens.colors.ui.background__medium.hex};
`;

/** Row */

/** Column */
const column = `
--ag-column-hover-color: ${unassigned};
`;

/** Header */
const header = `
--ag-subheader-background-color: ${tokens.colors.interactive.table__header__fill_resting.hex};
--ag-header-background-color: ${tokens.colors.interactive.table__header__fill_resting.hex};
`;

const controlPanel = `
--ag-control-panel-background-color: ${unassigned};
`;

/**
 --ag-range-selection-highlight-color: ${unassigned};
--ag-range-selection-border-color: ${unassigned};
--ag-range-selection-background-color-1: ${unassigned};
--ag-selected-tab-underline-color: ${unassigned};
 */

/** Selection */
const selection = `
--ag-selected-row-background-color: ${tokens.colors.interactive.table__cell__fill_activated.hex};
`;

/** Value change */
const valueChange = `
--ag-value-change-delta-up-color: ${unassigned};
--ag-value-change-delta-down-color: ${unassigned};
--ag-value-change-value-highlight-background-color: ${unassigned};
`;

const checkbox = `
--ag-checkbox-unchecked-color: red;
`;

export const agVariables = concat(general, header, row, selection, checkbox);
