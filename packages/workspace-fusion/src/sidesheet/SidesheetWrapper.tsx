import { ReactNode } from 'react';
import { ResizeProvider } from './ResizeProvider';

type ResizeSidesheetProps = {
  children: ReactNode;
  minWidth?: number;
  defaultWidth?: number;
};

export function SidesheetWrapper({ children, minWidth = 20, defaultWidth = 700 }: ResizeSidesheetProps) {
  return (
    <ResizeProvider defaultWidth={defaultWidth} minWidth={minWidth}>
      {children}
    </ResizeProvider>
  );
}
