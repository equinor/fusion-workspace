import { Menu, Button, Search } from '@equinor/eds-core-react';
import { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { PowerBiFilterItem, ActiveFilter, PowerBiFilter } from '../../types';
import { FilterController } from '../Filter/Filter';
import { Case, Switch } from '../switch/Switch';
import { VirtualList } from '../virtualList/VirtualList';
import {
  StyledClearButtonWrapper,
  StyledFilterItemList,
  StyledSearchHolder,
  StyledVerticalLine,
} from './groupPopoverMenu.styles';

interface PowerBiGroupPopoverMenuProps {
  anchorEl: HTMLElement | undefined | null;
  values: PowerBiFilterItem[];
  onClickFilter: (filter: PowerBiFilterItem, singleClick?: boolean) => Promise<void>;
  onCloseMenu: () => void;
  checkedValues: ActiveFilter[];
  group: PowerBiFilter;
  controller: FilterController;
}

export const PowerBiGroupPopoverMenu = ({
  anchorEl,
  onClickFilter,
  controller,
  values,
  group,
  checkedValues,
  onCloseMenu,
}: PowerBiGroupPopoverMenuProps): JSX.Element => {
  const markAllValuesActive = (filter: PowerBiFilterItem) => controller.deselectAllValues(group, filter);

  const [searchText, setSearchText] = useState('');

  const handleInput = (e) => {
    const { value } = e.target;
    setSearchText(value.toString().toLowerCase());
  };

  const setFilterStateFromSearch = async () => {
    const searchResults = getValuesMatchingSearchText().map((s) => s.value);

    await controller.handleOnSelectAll(group, values[0], searchResults);
    setSearchText('');
    onCloseMenu();
  };

  const getValuesMatchingSearchText = useCallback(
    () => values.filter((s) => !searchText || s.value?.toString().toLowerCase().startsWith(searchText)),
    [searchText, values]
  );

  const rowLength = useMemo(() => getValuesMatchingSearchText().length, [getValuesMatchingSearchText]);

  return (
    <Menu
      id="menu-complex"
      aria-labelledby="anchor-complex"
      open={true}
      anchorEl={anchorEl}
      onClose={onCloseMenu}
      placement={'bottom-end'}
    >
      <MenuWrapper>
        <Switch>
          <Case when={values.length === 0}>
            <div style={{ paddingLeft: '10px' }}>No available selections</div>
          </Case>
          <Case when={true}>
            <>
              {values.length > 7 && (
                <>
                  <StyledSearchHolder>
                    <Search
                      value={searchText}
                      placeholder="Search"
                      onInput={handleInput}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          setFilterStateFromSearch();
                        }
                      }}
                    />
                  </StyledSearchHolder>
                  <StyledVerticalLine />
                </>
              )}

              <StyledFilterItemList items={getValuesMatchingSearchText().length}>
                <VirtualList
                  checkedValues={checkedValues}
                  items={getValuesMatchingSearchText()}
                  onClickFilter={onClickFilter}
                  rowLength={rowLength}
                />
              </StyledFilterItemList>
              <StyledVerticalLine />
              <StyledClearButtonWrapper>
                <Button onClick={() => markAllValuesActive(values[0])} variant="ghost">
                  Clear
                </Button>
              </StyledClearButtonWrapper>
            </>
          </Case>
        </Switch>
      </MenuWrapper>
    </Menu>
  );
};

const MenuWrapper = styled.div`
  width: 200px;
`;
