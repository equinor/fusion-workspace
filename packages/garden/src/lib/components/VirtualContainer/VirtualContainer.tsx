import { Icon } from '@equinor/eds-core-react';
import { info_circle } from '@equinor/eds-icons';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useItemWidths } from '../../hooks';
import { useGarden } from '../../hooks/useGarden';
import { useGardenConfig } from '../../hooks/useGardenConfig';
import { ExpandProvider } from '../ExpandProvider';
import { GardenDataSource } from '../Garden';
import { VirtualGarden } from '../VirtualGarden';
import { SplashScreen } from '../splashScreen/SplashScreen';
import { StyledVirtualContainer } from './virtualContainer.styles';
Icon.add({ info_circle });

type VirtualContainerProps<TContext = undefined> = {
  dataSource: GardenDataSource<TContext>;
  context: TContext;
  setIsLoading: (isLoading: boolean) => void;
};

export const VirtualContainer = <TContext,>({
  dataSource,
  context,
  setIsLoading,
}: VirtualContainerProps<TContext>): JSX.Element | null => {
  const { onClickItem } = useGardenConfig();
  const { gardenMetaQuery } = useGarden();

  if (gardenMetaQuery.isLoading) {
    return <SplashScreen />;
  }

  useEffect(() => {
    if (!gardenMetaQuery.isLoading) setIsLoading(false);
  }, [gardenMetaQuery.isLoading]);

  if (!gardenMetaQuery.data) {
    // Will never happen when suspense is true
    throw new Error();
  }
  const { data } = gardenMetaQuery;

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

  return (
    <>
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
