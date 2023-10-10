import { Button, Icon } from '@equinor/eds-core-react';
import { arrow_back_ios, arrow_forward_ios } from '@equinor/eds-icons';
import { FilterState, useFilterContext } from '@equinor/workspace-filter';
import { Garden } from '@equinor/workspace-garden';
import { useEffect, useRef, useState } from 'react';
import { BehaviorSubject } from 'rxjs';
import styled from 'styled-components';
import { useWorkspace } from '../../../../lib/hooks';
import { GardenConfig } from '../../../../lib/integrations/garden';
import { GetIdentifier } from '../../../../lib/types/configuration';
import { GroupingSelector } from '../GroupingSelector';
Icon.add({ arrow_back_ios, arrow_forward_ios });

type GardenWrapperProps<TData extends Record<PropertyKey, unknown>, TFilter = undefined> = {
  config: GardenConfig<any, TFilter>;
  getIdentifier: GetIdentifier<TData>;
};

export const GardenWrapper = <TData extends Record<PropertyKey, unknown>, TFilter = undefined>({
  config,
  getIdentifier,
}: GardenWrapperProps<TData, TFilter>) => {
  const { filterState } = useFilterContext();
  const { selectItem } = useWorkspace();

  const [groupingKeys, setGroupingKeys] = useState<string[]>(config.initialGrouping);
  const [toggle, setToggle] = useState(false);

  const [timeInterval, updateTimeInterval] = useState<string | null>(config.initialTimeInterval ?? null);
  const onChangetimeInterval = (timeInterval: string | null) => {
    updateTimeInterval(timeInterval);
  };
  const [dateVariant, updateDateVariant] = useState<string | null>(config.initialDateVariant ?? null);
  const onChangeDateVariant = (dateVariant: string | null) => {
    updateDateVariant(dateVariant);
  };

  const groupingKeys$ = useRef(new BehaviorSubject({ groupingKeys, timeInterval, dateVariant }));

  useEffect(() => {
    groupingKeys$.current.next({ groupingKeys, timeInterval, dateVariant });
  }, [groupingKeys, timeInterval, dateVariant]);

  const { selection } = useWorkspace();

  return (
    <div id="workspace_garden_wrapper" style={{ display: 'flex', height: '100%', width: '100%' }}>
      <Garden<TData, TFilter>
        dataSource={{ ...config }}
        context={filterState as TFilter}
        customViews={config.customViews}
        visuals={config.visuals}
        selected={selection?.id}
        getIdentifier={getIdentifier}
        groupingKeys={groupingKeys}
        timeInterval={timeInterval}
        dateVariant={dateVariant}
        getDisplayName={config.getDisplayName}
        clickEvents={{
          onClickItem: (i) => {
            selectItem(i);
          },
        }}
      />
      <StyledAnimatedDiv expanded={toggle}>
        {toggle ? (
          <>
            <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
              <Button variant="ghost_icon" onClick={() => setToggle((state) => !state)}>
                <Icon data={arrow_forward_ios}></Icon>
              </Button>
              <p style={{ marginRight: '8px', fontSize: '16px', fontWeight: '500' }}>View Settings</p>
            </div>
            <GroupingSelector
              groupingKeys={groupingKeys}
              setGroupingKeys={setGroupingKeys}
              timeInterval={timeInterval}
              onChangeTimeInterval={onChangetimeInterval}
              dateVariant={dateVariant}
              onChangeDateVarient={onChangeDateVariant}
              context={filterState}
              dataSource={config as GardenConfig<any, FilterState>}
            />
          </>
        ) : (
          <>
            <Button variant="ghost_icon" onClick={() => setToggle((state) => !state)}>
              <Icon data={arrow_back_ios}></Icon>
            </Button>
            <VerticalText>View Settings</VerticalText>
          </>
        )}
      </StyledAnimatedDiv>
    </div>
  );
};

type StyledAnimatedDivProps = {
  expanded: boolean;
};

const StyledAnimatedDiv = styled.div<StyledAnimatedDivProps>`
  width: ${(props) => (props.expanded ? '300px' : '45px')};
  box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.1);
  margin-left: 10px;
  padding: 10px;
  transition: width 0.1s ease;
  overflow: hidden;
`;
const VerticalText = styled.div`
  transform: rotate(90deg);
  white-space: nowrap;
  display: flex;
  align-items: center;
  margin-top: 3rem;
  justify-content: center;
  font-size: 16px;
`;
