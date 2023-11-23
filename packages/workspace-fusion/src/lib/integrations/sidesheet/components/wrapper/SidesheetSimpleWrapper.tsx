import { ErrorBoundary } from 'react-error-boundary';
import { CreateSidesheetProps, DetailsSidesheetProps } from '../../types';
import { useWorkspace } from '../../../../hooks';
import { Suspense } from 'react';
import { CircularProgress } from '@equinor/eds-core-react';
import { SidesheetWrapper } from '../../../../../sidesheet/SidesheetWrapper';
import styled from 'styled-components';

type SidesheetSimpleWrapperProps<TData extends Record<PropertyKey, unknown>> = {
  DetailsSidesheet: (props: DetailsSidesheetProps<TData>) => JSX.Element;
  CreateSidesheet?: (props: CreateSidesheetProps<TData>) => JSX.Element;
};

export const SidesheetSimpleWrapper = <TData extends Record<PropertyKey, unknown>>({
  DetailsSidesheet,
  CreateSidesheet,
}: SidesheetSimpleWrapperProps<TData>) => {
  const { selection, clearSelection, isCreateSidesheetOpen, closeCreateSidesheet } = useWorkspace();

  return (
    <ErrorBoundary
      FallbackComponent={UnhandledSidesheetException}
      onError={() => console.error('An error occurred in the sidesheet')}
    >
      <Suspense fallback={<SidesheetFallback />}>
        {selection ? (
          <SidesheetWrapper>
            <DetailsSidesheet id={selection.id} item={selection?.item as TData | undefined} close={clearSelection} />
          </SidesheetWrapper>
        ) : isCreateSidesheetOpen ? (
          <>
            {CreateSidesheet && (
              <SidesheetWrapper>
                <CreateSidesheet close={closeCreateSidesheet} />
              </SidesheetWrapper>
            )}
          </>
        ) : (
          <></>
        )}
      </Suspense>
    </ErrorBoundary>
  );
};

const SidesheetFallback = () => (
  <StyledSidesheetFallback>
    <CircularProgress size={48} />
  </StyledSidesheetFallback>
);

const StyledSidesheetFallback = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const UnhandledSidesheetException = () => {
  return <div>An unhandled exception was caught in the sidesheet</div>;
};
