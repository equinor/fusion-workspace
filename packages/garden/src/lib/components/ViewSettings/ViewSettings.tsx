import { Button, Icon } from '@equinor/eds-core-react';
import { useState, useEffect } from 'react';
import { arrow_back_ios, arrow_forward_ios, chevron_down, chevron_up } from '@equinor/eds-icons';
import { GardenDataSource } from '../Garden';
import { GroupingSelector } from '../GroupingSelector/GroupingSelector';
import { StyledViewSettings, VerticalText } from './viewSettings.styles';

const LOCAL_STORAGE_KEY = 'FusionWorkspaceViewSettingsToggled';

interface ViewSettingsProps<TData extends Record<PropertyKey, unknown>, TContext = undefined> {
  dataSource: GardenDataSource<TContext>;
  context?: TContext;
  groupingKeys: string[];
  timeInterval: string | null;
  dateVariant: string | null;
  onChangeTimeInterval: (timeInterval: string | null) => void;
  onChangeDateVariant: (dateVariant: string | null) => void;
  setGroupingKeys: (keys: string[]) => void;
}

Icon.add({ chevron_down, chevron_up });

export function ViewSettings<TData extends Record<PropertyKey, unknown>, TContext = undefined>({
  dataSource,
  context,
  groupingKeys,
  timeInterval,
  dateVariant,
  onChangeTimeInterval,
  onChangeDateVariant,
  setGroupingKeys,
}: ViewSettingsProps<TData, TContext>): JSX.Element | null {
  const [toggle, setToggle] = useState<boolean>(() => {
    const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedState !== null ? JSON.parse(savedState) : true;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toggle));
  }, [toggle]);

  return (
    <StyledViewSettings expanded={toggle}>
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
            onChangeTimeInterval={onChangeTimeInterval}
            dateVariant={dateVariant}
            onChangeDateVarient={onChangeDateVariant}
            context={context as any}
            dataSource={dataSource}
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
    </StyledViewSettings>
  );
}
