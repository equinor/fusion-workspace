import { Checkbox } from '@equinor/eds-core-react';
import { memo, useMemo } from 'react';
import { ActiveFilter, PowerBiFilterItem, PowerBiFilter } from '../../types';
import { IS_BLANK } from '../../utils/constants';
import { StyledCheckboxItem } from './filterItem.styles';

type ItemProps = {
  activeFilters: ActiveFilter[];
  filter: PowerBiFilterItem;
  group: PowerBiFilter;
  handleOnChange: (group: PowerBiFilter, filter: PowerBiFilterItem, singleClick?: boolean) => Promise<void>;
  virtualItemStart: number;
  virtualItemSize: number;
};

const convertNullToBlank = (activeFilters: ActiveFilter[]) =>
  activeFilters.map((activeFilter) => (activeFilter === null ? IS_BLANK : activeFilter));

const FilterItem = ({ activeFilters, filter, group, handleOnChange, virtualItemSize, virtualItemStart }: ItemProps) => {
  const isActive = useMemo(() => {
    return convertNullToBlank(activeFilters).includes(filter?.value ?? '(Blank)') ? true : false;
  }, [activeFilters, filter.value]);
  return (
    <StyledCheckboxItem
      title={filter?.value ?? ''}
      style={{
        transform: `translateY(${virtualItemStart}px)`,
        height: `${virtualItemSize}px`,
      }}
    >
      <Checkbox
        onChange={async () => {
          await handleOnChange(group, filter);
        }}
        checked={isActive}
      />
      <label
        onClick={async () => {
          await handleOnChange(group, filter, true);
        }}
      >
        {filter.value}
      </label>
    </StyledCheckboxItem>
  );
};
export const Item = memo(FilterItem);
