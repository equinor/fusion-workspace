import { Button, Chip, Tooltip } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';

import { FilterClearIcon, FilterCollapseIcon, FilterExpandIcon } from '../../icons';

import { ActiveFilter, PowerBiFilterItem } from '../../types';
import { ExpandedFilter } from '../expandedFilter/ExpandedFilter';
import { FilterController } from '../Filter/Filter';
import { PowerBiFilterGroup } from '../quickFilterGroup/QuickFilterGroup';

import { StyledButtonContent, StyledCompactFilterWrapper } from './quickFilter.styles';

interface PowerBIQuickFilterProps {
  controller: FilterController;
}

const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2em;
  align-items: center;
  margin: 0 0 0 15px;
`;
const InfoChip = styled(Chip)`
  background-color: ${tokens.colors.ui.background__info.hex};
  color: ${tokens.colors.text.static_icons__default.hex};
  font-weight: 500;
  font-size: 12px;
  z-index: 1;
`;

const calculateHiddenFilters = (shownFilters: string[], activeFilters: Record<string, ActiveFilter[]>): number => {
  if (shownFilters.length < 0 || Object.keys(activeFilters).length < 0) {
    return 0;
  }
  const activeFilterKeys = Object.keys(activeFilters);
  const filterShownFilters = activeFilterKeys.filter((key) => !shownFilters.includes(key));
  const hiddenFilters = filterShownFilters.reduce(
    (acc, curr) => {
      acc[curr] = activeFilters[curr];
      return acc;
    },
    {} as Record<string, ActiveFilter[]>
  );

  return Object.values(hiddenFilters).filter((a) => a.length > 0).length;
};

export const PowerBIQuickFilter = ({ controller }: PowerBIQuickFilterProps): JSX.Element => {
  const {
    activeFilters,
    handleOnChange,
    isAnyFiltersActive,
    resetFilter,
    slicerFilters,
    isFilterExpanded,
    setIsFilterExpanded,
  } = controller;
  const shownFilters: string[] = [];

  return (
    <FilterWrapper>
      {!isFilterExpanded && (
        <StyledCompactFilterWrapper>
          <StyledQuickFilterWrapper>
            {slicerFilters.map((s, i) => {
              shownFilters.push(s.type);
              return (
                <PowerBiFilterGroup
                  activeFilters={activeFilters[s.type]}
                  controller={controller}
                  handleOnChange={(filter: PowerBiFilterItem, singleClick?: boolean) =>
                    handleOnChange(s, filter, singleClick)
                  }
                  group={s}
                  key={s.type + i}
                />
              );
            })}
          </StyledQuickFilterWrapper>
          <StyledFilterButtons>
            <OtherFiltersAppliedInfo activeFilters={calculateHiddenFilters(shownFilters, activeFilters)} />
            <FilterButtonContainer>
              <Button
                style={{ height: '40px' }}
                variant="ghost_icon"
                disabled={!isAnyFiltersActive()}
                onClick={async () => await resetFilter()}
              >
                <FilterClearIcon isDisabled={!isAnyFiltersActive()} />
              </Button>
              <Tooltip title={isFilterExpanded ? 'Hide all filter options' : 'Show all filter options'}>
                <Button
                  style={{ height: '40px' }}
                  variant="ghost"
                  onClick={() => setIsFilterExpanded(!isFilterExpanded)}
                >
                  {isFilterExpanded ? (
                    <StyledButtonContent>
                      <FilterCollapseIcon /> <div>Hide all</div>
                    </StyledButtonContent>
                  ) : (
                    <StyledButtonContent>
                      <FilterExpandIcon /> <div>Show all</div>
                    </StyledButtonContent>
                  )}
                </Button>
              </Tooltip>
            </FilterButtonContainer>
          </StyledFilterButtons>
        </StyledCompactFilterWrapper>
      )}
      {isFilterExpanded && <ExpandedFilter controller={controller} />}
    </FilterWrapper>
  );
};

const StyledFilterButtons = styled.div`
  background: ${tokens.colors.ui.background__light.hex};
`;

const StyledQuickFilterWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
  overflow: hidden;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
`;

const FilterButtonContainer = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  width: fit-content;
  gap: 10px;
  padding: 0 10px;
`;

const FilterWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: ${tokens.colors.ui.background__light.hex};
`;

interface OtherFiltersAppliedInfoProps {
  activeFilters: number;
}

export function OtherFiltersAppliedInfo({ activeFilters }: OtherFiltersAppliedInfoProps): JSX.Element | null {
  if (activeFilters <= 0) return null;

  return <InfoChip>+{activeFilters} other filters applied</InfoChip>;
}
