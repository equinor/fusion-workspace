import { StatusItem } from '../types/statusItem';
import { StatusBarItem } from './StatusBarItem';
import { StyledStatusBar } from './statusBar.styles';

interface StatusBarProps {
  items: StatusItem[];
}

export function StatusBar({ items }: StatusBarProps): JSX.Element | null {
  if (!items.length) return null;

  return (
    <StyledStatusBar id="status_bar_root">
      {items.map((item) => (
        <StatusBarItem key={item.title} item={item} />
      ))}
    </StyledStatusBar>
  );
}
