import { tokens } from '@equinor/eds-tokens';
import { Resizable } from 're-resizable';
import { ReactNode, useState, createContext } from 'react';

type ResizeSidesheetProps = {
  children: ReactNode;
  minWidth: number;
  defaultWidth?: number;
};

export function ResizeWrapper({ children, minWidth = 20, defaultWidth = 700 }: ResizeSidesheetProps) {
  const [width, setWidth] = useState<number>(defaultWidth);
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <ResizeContext.Provider value={{ isMinimized, setIsMinimized, setWidth, width }}>
      <Resizable
        size={{ width: width, height: '100%' }}
        style={{ border: `2px solid ${tokens.colors.ui.background__medium.hex}`, overflow: 'hidden' }}
        maxWidth={'100vw'}
        onResizeStop={(e, direction, ref, d) => {
          if (width + d.width < minWidth) {
            //setWidth(defaultWidth);
            setIsMinimized(true);
          } else {
            setWidth(width + d.width);
          }
        }}
      >
        {children}
      </Resizable>
    </ResizeContext.Provider>
  );
}

type ResizeContextType = {
  width: number;
  setWidth: (width: number) => void;
  isMinimized: boolean;
  setIsMinimized: (minimize: boolean) => void;
};

export const ResizeContext = createContext<ResizeContextType>({} as ResizeContextType);
