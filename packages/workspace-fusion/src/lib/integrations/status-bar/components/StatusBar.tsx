import { StatusItem } from '../types/statusItem';
import { StatusBarItem } from './StatusBarItem';
import { StyledStatusBar, StyledStatusBarDivider } from './statusBar.styles';

interface StatusBarProps {
  items: StatusItem[];
}

export function StatusBar({ items }: StatusBarProps): JSX.Element | null {
  if (!items.length) return null;

  // Check if all items are in the same group
  if (items.every((i) => i.group === items[0].group)) {
    return (
      <StyledStatusBar id="status_bar_root">
        {items.map((item) => (
          <StatusBarItem key={item.title} item={item} />
        ))}
      </StyledStatusBar>
    );
  }

  // Group items by their 'group' property
  const groupedItems = items.reduce(
    (groups, item) => {
      const group = groups[item.group ?? ''] || [];
      group.push(item);
      groups[item.group ?? ''] = group;
      return groups;
    },
    {} as Record<string, StatusBarProps['items']>
  );

  // Render each group with its items
  return (
    <StyledStatusBar id="status_bar_root">
      {Object.entries(groupedItems).map(([groupName, groupItems], i) => (
        <>
          {i !== 0 && (
            <>
              <StyledStatusBarDivider></StyledStatusBarDivider>
              {!groupName ? <></> : <div style={{ alignSelf: 'center' }}>{groupName}:</div>}
            </>
          )}
          {groupItems.map((item) => (
            <StatusBarItem key={item.title} item={item} />
          ))}
        </>
      ))}
    </StyledStatusBar>
  );
}
