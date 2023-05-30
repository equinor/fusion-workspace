import { VirtualItem } from 'react-virtual';
import { StyledPackageRoot } from '../GardenItemContainer/gardenItemContainer.styles';
import { SkeletonPackage } from '../gardenSkeleton/GardenSkeleton';

type LoadingPackageSkeletonProps = {
  virtualRow: VirtualItem;
  virtualColumn: VirtualItem;
  rowHeight: number;
  itemWidth: number;
};
export const LoadingPackageSkeleton = ({
  itemWidth,
  rowHeight,
  virtualColumn,
  virtualRow,
}: LoadingPackageSkeletonProps) => (
  <StyledPackageRoot
    key={virtualRow.key}
    style={{
      translate: `${virtualColumn.start}px ${virtualRow.start}px`,
      width: `${virtualColumn.size}px`,
      height: `${virtualRow.size}px`,
    }}
  >
    <SkeletonPackage height={rowHeight - 5} width={(itemWidth ?? 50) - 5} />
  </StyledPackageRoot>
);
