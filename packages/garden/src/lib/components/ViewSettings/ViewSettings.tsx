import { Button, Icon } from '@equinor/eds-core-react';
import { expand, collapse } from '@equinor/eds-icons';
import { useState } from 'react';
import { GroupingSelector } from '../GroupingSelector/GroupingSelector';
import { StyledViewSettings } from './viewSettings.styles';

const LOCAL_STORAGE_KEY = 'WorkspaceSidebarToggleState';

interface ViewSettingsProps<TData extends Record<PropertyKey, unknown>, TContext = undefined> {
  groupingKeys: string[];
  timeInterval: string | null;
  dateVariant: string | null;
  onChangeTimeInterval: (timeInterval: string | null) => void;
  onChangeDateVariant: (dateVariant: string | null) => void;
  setGroupingKeys: (keys: string[]) => void;
}

Icon.add({ expand, collapse });

export function ViewSettings<TData extends Record<PropertyKey, unknown>, TContext = undefined>({
  groupingKeys,
  timeInterval,
  dateVariant,
  onChangeTimeInterval,
  onChangeDateVariant,
  setGroupingKeys,
}: ViewSettingsProps<TData, TContext>): JSX.Element | null {
  const [toggle, setToggle] = useState<boolean>(() => {
    const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedState !== null ? !!JSON.parse(savedState) : true;
  });

  const onChangeToggle = (state: boolean) => {
    setToggle(state);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  };

  return (
    <StyledViewSettings expanded={toggle}>
      {toggle ? (
        <>
          <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
            <Button variant="ghost_icon" onClick={() => onChangeToggle(!toggle)}>
              <Icon data={expand}></Icon>
            </Button>
            <p style={{ marginRight: '10px', fontSize: '16px', fontWeight: '500' }}>View Settings</p>
          </div>
          <GroupingSelector
            groupingKeys={groupingKeys}
            setGroupingKeys={setGroupingKeys}
            timeInterval={timeInterval}
            onChangeTimeInterval={onChangeTimeInterval}
            dateVariant={dateVariant}
            onChangeDateVarient={onChangeDateVariant}
          />
        </>
      ) : (
        <>
          <Button variant="ghost_icon" onClick={() => onChangeToggle(!toggle)} style={{ paddingLeft: '0' }}>
            <Icon data={collapse}></Icon>
          </Button>
        </>
      )}
    </StyledViewSettings>
  );
}
