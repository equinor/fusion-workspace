import { Button, Icon, Search } from '@equinor/eds-core-react';
import { useState } from 'react';
import styled from 'styled-components';
import { useClickOutside } from 'workspace-core';
import { FilterClearIcon } from '../../icons';
import { FilterController } from '../Filter/Filter';
import { Case, Switch } from '../switch/Switch';
import { StyledContainer, StyledTitle } from './header.styles';

const StyledSearchButton = styled(Button)`
  width: 36px;
  height: 36px;
`;

type HeaderProps = {
  title: string;
  onSearch: (value: string | undefined) => void;
  searchEnabled: boolean;
  handleEnterPress: () => void;
  controller: FilterController;
  deselectAllValues: () => Promise<void>;
  hasActiveFilters: boolean;
  searchValue: string | undefined;
  container: React.RefObject<HTMLDivElement>;
};

export const Header = ({
  title,
  onSearch,
  searchEnabled,
  handleEnterPress,
  searchValue,
  hasActiveFilters,
  deselectAllValues,
  container,
}: HeaderProps): JSX.Element => {
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);

  useClickOutside(
    container,
    () => {
      setIsSearchActive(false);
      onSearch(undefined);
    },
    isSearchActive
  );

  return (
    <StyledContainer>
      <Switch>
        <Case when={isSearchActive}>
          <Search
            autoFocus={isSearchActive}
            id="search-normal"
            placeholder="Search"
            value={searchValue}
            aria-label="filter group"
            onKeyPress={(e) => e.key === 'Enter' && handleEnterPress()}
            onChange={(e) => onSearch(e.target.value)}
          />
        </Case>
        <Case when={true}>
          <StyledTitle onClick={() => searchEnabled && setIsSearchActive(true)} hasActiveFilters={hasActiveFilters}>
            {title}
          </StyledTitle>
          {searchEnabled && (
            <StyledSearchButton onClick={() => setIsSearchActive((s) => !s)} variant={'ghost_icon'}>
              <Icon id="search" name="search" />
            </StyledSearchButton>
          )}
          {hasActiveFilters && <FilterClearIcon isDisabled={!hasActiveFilters} onClick={deselectAllValues} />}
        </Case>
      </Switch>
    </StyledContainer>
  );
};
