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
  setUncheckedValues: (values: FilterValueType[]) => void;
  isFetching: boolean;
  isMonospace: boolean;
  isOpen: boolean;
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
  isFetching,
  setUncheckedValues,
  isMonospace,
  isOpen,
}: FilterGroupPopoverMenuProps): JSX.Element => {
  const [searchText, setSearchText] = useState<string>('');

  const handleInput = (e) => setSearchText(e.target.value.toString().toLowerCase());

  const getValuesMatchingSearchText = () =>
    values.filter((s) => !searchText || s.value?.toString().toLowerCase().includes(searchText));

  /**
   * Sets the filter state to the values matching search and closes popover
   */
  const setFilterStateFromSearch = () => {
    const valuesMatchingSearch = values.filter((s) => !getValuesMatchingSearchText().includes(s));
    setUncheckedValues(valuesMatchingSearch);
    setSearchText('');
    closePopover();
  };
  const searchClassName = 'eds-search';
  return (
    <Menu
      id="menu-complex"
      aria-labelledby="anchor-complex"
      open={isOpen}
      anchorEl={anchorEl}
      onClose={closePopover}
      placement={'bottom-end'}
    >
      <StyledMenuWrapper>
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

        <StyledList>
          {getValuesMatchingSearchText()
            //TODO: move to backend
            .filter((s) => s.count > 0)
            .map((value) => (
              <FilterItemCheckbox
                isFetching={isFetching}
                key={value.value}
                ValueRender={() => CustomRender(value)}
                filterValue={value}
                handleFilterItemClick={() => handleFilterItemClick(value)}
                handleFilterItemLabelClick={() => {
                  if (values.length === 1) {
                    return;
                  }
                  handleFilterItemLabelClick(value);
                }}
                isChecked={isChecked(value)}
                count={value.count}
                isMonospace={isMonospace}
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
