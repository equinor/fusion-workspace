import { tokens } from '@equinor/eds-tokens';
import { ReactNode, createContext, useState } from 'react';
import { Resizable } from 're-resizable';

type ResizeContextType = {
  width: number;
  setWidth: (width: number) => void;
  isMinimized: boolean;
  setIsMinimized: (minimize: boolean) => void;
};

export const ResizeContext = createContext<ResizeContextType | null>(null);

type ResizeProviderProps = {
  children: ReactNode;
  minWidth: number;
  defaultWidth: number;
};
export const ResizeProvider = ({ children, defaultWidth, minWidth }: ResizeProviderProps) => {
  const [width, setWidth] = useState<number>(defaultWidth);
  const [isMinimized, setIsMinimized] = useState(false);
  return (
    <ResizeContext.Provider value={{ isMinimized, setIsMinimized, setWidth, width }}>
      <Resizable
        size={{ width: width, height: '100%' }}
        style={{ border: `2px solid ${tokens.colors.ui.background__medium.hex}`, overflow: 'hidden' }}
        maxWidth={'100vw'}
        boundsByDirection
        minHeight={'100%'}
        onResizeStop={(e, direction, ref, d) => {
          if (width + d.width < minWidth) {
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
};
