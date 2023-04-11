import { UseQueryResult } from '@tanstack/react-query';
import { MutableRefObject } from 'react';
import { useGardenContext } from '../../../hooks';
import { CustomItemView } from '../../../types';
import { StyledPackageRoot } from '../../GardenItemContainer/gardenItemContainer.styles';
import { ErrorPackage } from '../../virtualPackages/ErrorPackage';
import { LoadingPackageSkeleton } from '../../virtualPackages/LoadingPackage';

type SubGroupItemProps = {
  query: UseQueryResult<any[]>;
  virtualRow: any;
  virtualColumn: any;
  rowHeight: number;
  itemWidth: number;
  PackageChild: React.MemoExoticComponent<(args: CustomItemView<any, any>) => JSX.Element>;
  itemIndex: number;
  parentRef: MutableRefObject<HTMLDivElement | null>;
};

export const SubGroupItem = ({
  query,
  virtualColumn,
  virtualRow,
  itemWidth,
  rowHeight,
  PackageChild,
  itemIndex,
  parentRef,
}: SubGroupItemProps) => {
  const { isLoading, error, data, refetch } = query;
  const controller = useGardenContext<any, any>();
  const { colorAssistMode$, getIdentifier } = controller;

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
        colorAssistMode={false}
        //TODO: fix
        columnExpanded={false}
        // TODO: fix
        controller={controller}
        data={item}
        isSelected={false}
        // isSelected={selectedIds.includes(getIdentifier(item))}
        onClick={() => {
          controller.clickEvents.onClickItem && controller.clickEvents.onClickItem(item);
        }}
        width={itemWidth}
        depth={0}
        rowStart={virtualRow.start}
        columnStart={virtualColumn.start}
        parentRef={parentRef}
      />
    </StyledPackageRoot>
  );
};
