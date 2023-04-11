import { Button, Icon, Search } from '@equinor/eds-core-react';
import { useMemo, useState } from 'react';
import { FilterClearIcon } from '../../icons';
import { FilterGroup } from '../../types';

import { Case, Switch } from '../../utils/Switch';
import { StyledSearchButton, StyledFilterHeaderGroup, StyledTitle, StyledWrapper } from './expandedFilterGroup.styles';
import { VirtualContainer } from '../virtualContainer/VirtualContainer';
import styled from 'styled-components';
import { tokens } from '@equinor/eds-tokens';
import { useFilterGroup } from '../../hooks/useFilterGroup';

interface FilterGroupeComponentProps {
  filterGroup: FilterGroup;
  hideTitle?: boolean;
}

export const ExpandedFilterGroup = ({ filterGroup }: FilterGroupeComponentProps) => {
  const { clearGroup, setGroupsUnchecked, inactiveGroupValues } = useFilterGroup(filterGroup);

  const [filterSearchValue, setFilterSearchValue] = useState('');
  const [searchActive, setSearchActive] = useState(false);

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setFilterSearchValue(value);
  }

  function handleSearchButtonClick() {
    setSearchActive((isActive) => !isActive);
  }

  const isSearchable = filterGroup.values.length > 10;
  const hasAnyActiveFilters = Boolean(inactiveGroupValues.length);

  const groupsMatchingSearch = useMemo(
    () => searchByValue(filterGroup.values, filterSearchValue),
    [filterGroup.values, filterSearchValue]
  );

  /** If user presses enter, the filter item matches the search will be applied and the popover closes */
  function handleOnKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      const newVals = filterGroup.values.filter((s) => !groupsMatchingSearch.includes(s));

      //TODO: verify
      setGroupsUnchecked(newVals);
      setFilterSearchValue('');
      setSearchActive(false);
    }
  }

  return (
    <StyledWrapper>
      <StyledFilterHeaderGroup isActive={hasAnyActiveFilters}>
        <Switch>
          <Case when={searchActive}>
            <Search
              autoFocus={searchActive}
              onBlur={() => {
                setSearchActive(false);
                setFilterSearchValue('');
              }}
              aria-label="in filter group"
              id="search-normal"
              placeholder="Search"
              onChange={handleOnChange}
              onKeyDown={handleOnKeyPress}
            />
          </Case>
          <Case when={true}>
            <StyledFilterGroupName>
              <StyledTitle onClick={() => isSearchable && handleSearchButtonClick()}>{filterGroup.name}</StyledTitle>
              <div style={{ display: 'flex' }}>
                {isSearchable && (
                  <StyledSearchButton variant="ghost_icon" onClick={handleSearchButtonClick}>
                    <Icon name={'search'} id={'search'} />
                  </StyledSearchButton>
                )}
                {hasAnyActiveFilters && (
                  <Button variant="ghost_icon" onClick={clearGroup}>
                    <FilterClearIcon />
                  </Button>
                )}
              </div>
            </StyledFilterGroupName>
          </Case>
        </Switch>
      </StyledFilterHeaderGroup>
      <VirtualContainer filterGroup={filterGroup} filterSearchValue={filterSearchValue} />
    </StyledWrapper>
  );
};

export function searchByValue(items: string[], value: string) {
  return items.filter((item) => item.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
}

const StyledFilterGroupName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  &:hover {
    background-color: ${tokens.colors.ui.background__medium.hex};
  }
`;
