import { CircularProgress } from '@equinor/eds-core-react';
import { StyledLoadingWrapper } from './loading.styles';

export function Loading() {
  return (
    <StyledLoadingWrapper>
      <CircularProgress size={48} />
    </StyledLoadingWrapper>
  );
}
