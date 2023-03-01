import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  min-height: 36px;
  #search {
    visibility: hidden;
  }
  &:hover #search {
    visibility: visible;
  }
`;

export const StyledTitle = styled.div<{ hasActiveFilters: boolean }>`
  font-weight: ${({ hasActiveFilters }) => (hasActiveFilters ? '700' : '400')};
  margin-right: 2rem;
`;
