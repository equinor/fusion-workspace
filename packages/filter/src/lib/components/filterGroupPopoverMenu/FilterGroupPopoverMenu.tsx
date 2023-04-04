import { Menu, Button, Search } from '@equinor/eds-core-react';
import { useState } from 'react';

import { FilterValueType } from '../../types';
import { FilterItemCheckbox } from '../filterItem/FilterItemCheckbox';
import {
  StyledClearButtonWrapper,
  StyledMenuWrapper,
  StyledSearchHolder,
  StyledVerticalLine,
} from '../filterGroup/filterGroup.styles';
import { StyledList } from './filterGroupPopoverMenu.styles';

interface FilterGroupPopoverMenuProps {
  anchorEl: HTMLElement | null | undefined;
  closePopover: () => void;
  values: FilterValueType[];
  handleFilterItemClick: (item: FilterValueType) => void;
  isChecked: (filterValue: FilterValueType) => boolean;
  markAllValuesActive: () => void;
  CustomRender: (value: FilterValueType) => JSX.Element;
  handleFilterItemLabelClick: (val: FilterValueType) => void;
  groupName: string;
}
export const FilterGroupPopoverMenu = ({
  handleFilterItemClick,
  isChecked,
  handleFilterItemLabelClick,
  markAllValuesActive,
  closePopover,
  anchorEl,
  values,
  CustomRender,
  groupName,
}: FilterGroupPopoverMenuProps): JSX.Element => {
  const [searchText, setSearchText] = useState<string>('');

  // const { getCountForFilterValue } = useFilterContext();
  // const { setFilterState, filterState } = useFilterState();

  const handleInput = (e) => setSearchText(e.target.value.toString().toLowerCase());

  const getValuesMatchingSearchText = () =>
    values.filter((s) => !searchText || s?.toString().toLowerCase().startsWith(searchText));

  /**
   * Sets the filter state to the values matching search and closes popover
   */
  const setFilterStateFromSearch = () => {
    const valuesMatchingSearch = values.filter((s) => !getValuesMatchingSearchText().includes(s));

    // setFilterState([
    //   ...filterState.filter((s) => s.name !== groupName),
    //   {
    //     name: groupName,
    //     values: valuesMatchingSearch,
    //   },
    // ]);
    setSearchText('');
    closePopover();
  };
  const searchClassName = 'eds-search';
  return (
    <Menu
      id="menu-complex"
      aria-labelledby="anchor-complex"
      open={true}
      anchorEl={anchorEl}
      onClose={closePopover}
      placement={'bottom-end'}
    >
      <StyledMenuWrapper>
        {values.length > 7 && (
          <>
            <StyledSearchHolder className={searchClassName}>
              <Search
                className={searchClassName}
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

        <StyledList>
          {getValuesMatchingSearchText().map((value) => (
            <FilterItemCheckbox
              key={value}
              ValueRender={() => CustomRender(value)}
              filterValue={value}
              handleFilterItemClick={() => handleFilterItemClick(value)}
              handleFilterItemLabelClick={() => handleFilterItemLabelClick(value)}
              isChecked={isChecked(value)}
              count={0}
            />
          ))}
        </StyledList>
        <StyledVerticalLine />
        <StyledClearButtonWrapper>
          <Button onClick={markAllValuesActive} variant="ghost">
            Clear
          </Button>
        </StyledClearButtonWrapper>
      </StyledMenuWrapper>
    </Menu>
  );
};
