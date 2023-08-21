import { UseQueryResult } from '@tanstack/react-query';
import { MutableRefObject } from 'react';
import { StyledPackageRoot } from '../../GardenItemContainer/gardenItemContainer.styles';
import { ErrorPackage } from '../../virtualPackages/ErrorPackage';
import { LoadingPackageSkeleton } from '../../virtualPackages/LoadingPackage';
import { defaultItemColor } from '../../../utils';
import { VirtualItem } from 'react-virtual';
import { CustomItemView } from '../../../types';
import { useGarden } from '../../../hooks/useGarden';
import { useGardenConfig } from '../../../hooks/useGardenConfig';

type SubGroupItemProps = {
  query: UseQueryResult<any[]>;
  virtualRow: any;
  virtualColumn: VirtualItem;
  isExpanded: boolean;
  rowHeight: number;
  groupingKeys: string[];
  itemWidth: number;
  PackageChild: React.MemoExoticComponent<(args: CustomItemView<any>) => JSX.Element>;
  itemIndex: number;
  onClick: (i: any) => void;
  parentRef: MutableRefObject<HTMLDivElement | null>;
};

export const SubGroupItem = ({
  query,
  virtualColumn,
  virtualRow,
  itemWidth,
  rowHeight,
  groupingKeys,
  PackageChild,
  isExpanded,
  onClick,
  itemIndex,
  parentRef,
}: SubGroupItemProps) => {
  const { isLoading, error, data, refetch } = query;

  const {
    selectionService: { selection },
  } = useGarden();
  const {
    getIdentifier,
    visuals: { itemColor = defaultItemColor, getDescription = () => '' },
    getDisplayName,
  } = useGardenConfig();

  if (isLoading) {
    /** Skeleton loading state */
    return (
      <LoadingPackageSkeleton
        itemWidth={itemWidth ?? 50}
        rowHeight={rowHeight}
        virtualColumn={virtualColumn}
        virtualRow={virtualRow}
      />
    );
  }

  if (!data || error) {
    /** Error state */
    return (
      <ErrorPackage
        itemWidth={itemWidth}
        refetch={refetch}
        rowHeight={rowHeight}
        virtualColumn={virtualColumn}
        virtualRow={virtualRow}
      />
    );
  }

  const item = data[itemIndex];
  const color = itemColor;

  return (
    <StyledPackageRoot
      key={virtualRow.index}
      style={{
        translate: `${virtualColumn.start}px ${virtualRow.start}px`,
        width: `${virtualColumn.size}px`,
        height: `${virtualRow.size}px`,
        cursor: 'pointer',
      }}
    >
      <PackageChild
        groupingKeys={groupingKeys}
        colorAssistMode={false}
        columnExpanded={isExpanded}
        displayName={getDisplayName(item)}
        description={getDescription?.(item)}
        color={color}
        data={item}
        isSelected={selection === getIdentifier(item)}
        onClick={() => onClick(item)}
        width={itemWidth}
        depth={0}
        rowStart={virtualRow.start}
        columnStart={virtualColumn.start}
        parentRef={parentRef}
      />
    </StyledPackageRoot>
  );
};
