import { tokens } from '@equinor/eds-tokens';
import { VirtualItem } from 'react-virtual';
import { StyledPackageRoot } from '../GardenItemContainer/gardenItemContainer.styles';

type ErrorPackageProps = {
  virtualRow: VirtualItem;
  virtualColumn: VirtualItem;
  refetch: VoidFunction;
  rowHeight: number;
  itemWidth: number;
};
/**
 * The item to show when a garden package fails to load
 */
export const ErrorPackage = ({ itemWidth, refetch, rowHeight, virtualColumn, virtualRow }: ErrorPackageProps) => (
  <StyledPackageRoot
    title="Click to retry"
    key={virtualRow.key}
    style={{
      translate: `${virtualColumn.start}px ${virtualRow.start}px`,
      width: `${virtualColumn.size}px`,
      height: `${virtualRow.size}px`,
      cursor: 'pointer',
    }}
    onClick={() => refetch()}
  >
    <div
      style={{
        height: rowHeight - 5,
        width: (itemWidth ?? 50) - 5,
        background: tokens.colors.interactive.danger__resting.hex,
        borderRadius: '5px',
      }}
    />
  </StyledPackageRoot>
);
