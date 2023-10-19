import { useQuery } from '@tanstack/react-query';
import { useItemWidths } from '../../hooks';
import { useGarden } from '../../hooks/useGarden';
import { useGardenConfig } from '../../hooks/useGardenConfig';
import { ExpandProvider } from '../ExpandProvider';
import { GardenDataSource } from '../Garden';
import { VirtualGarden } from '../VirtualGarden';
import { StyledVirtualContainer } from './virtualContainer.styles';
import { info_circle } from '@equinor/eds-icons';
import { Icon } from '@equinor/eds-core-react';
import styled from 'styled-components';
Icon.add({ info_circle });

type VirtualContainerProps<TContext = undefined> = {
  dataSource: GardenDataSource<TContext>;
  context: TContext;
};

export const VirtualContainer = <TContext,>({
  dataSource,
  context,
}: VirtualContainerProps<TContext>): JSX.Element | null => {
  const { onClickItem } = useGardenConfig();
  const {
    groupingService: { groupingKeys, timeInterval, dateVariant },
  } = useGarden();

  const { data, isFetching } = useQuery(['garden', ...groupingKeys, timeInterval, dateVariant, context], {
    refetchOnWindowFocus: false,
    suspense: true,
    useErrorBoundary: true,
    keepPreviousData: false,
    cacheTime: Infinity,
    staleTime: Infinity,
    queryFn: ({ signal }) =>
      dataSource.getGardenMeta(
        {
          timeInterval,
          dateVariant,
          groupingKeys,
        },
        context,
        signal ?? new AbortSignal()
      ),
  });

  if (!data) {
    // Will never happen when suspense is true
    throw new Error();
  }

  const amountOfColumns = data.columnCount;
  const columnWidth = data.columnWidth || 300;
  const widths = useItemWidths(data.columnCount, columnWidth);

  if (!amountOfColumns) {
    return (
      <InfoMessage>
        <Icon name="info_circle" size={32} />
        <p>
          Sorry, we couldn't find any results based on your search and filter criteria. Please try using different
          keywords or adjusting the filters
        </p>
      </InfoMessage>
    );
  }
  //TODO: Handle widths = 0 better
  if (widths.length === 0 || amountOfColumns !== widths.length) {
    return null;
  }

  if (widths.length !== amountOfColumns) {
    return null;
  }

  //TODO: temp fix, should show skeletons
  if (isFetching) {
    return null;
  }

  return (
    <>
      {/* <ReactQueryDevtools /> */}
      <StyledVirtualContainer id={'garden_root'}>
        <ExpandProvider initialWidths={widths} defaultColumnWidth={columnWidth}>
          <VirtualGarden
            context={context}
            getSubgroupItems={dataSource.getSubgroupItems}
            meta={data}
            getBlockAsync={dataSource.getBlockAsync}
            width={widths[0]}
            handleOnItemClick={(item) => onClickItem && onClickItem(item)}
            getHeader={dataSource.getHeader}
          />
        </ExpandProvider>
      </StyledVirtualContainer>
    </>
  );
};

const InfoMessage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 18;
`;
