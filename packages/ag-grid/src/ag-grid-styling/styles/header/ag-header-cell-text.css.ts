import { tokens } from '@equinor/eds-tokens';
const textColor = tokens.colors.text.static_icons__default.hex;
export const agHeaderCellText = `.ag-header-cell-text {
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
    font-size: 14px;
    color: ${textColor};
   }`;
