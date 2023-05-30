import { Popover } from '@equinor/eds-core-react';
import { MutableRefObject, PropsWithChildren, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const StyledPopover = styled(Popover)`
  padding: 1em;
  .arrow {
    display: none;
  }
`;

type PopoverWrapperProps = {
  isOpen: boolean;
  rowStart: number;
  columnStart: number;
  width: number;
  popoverTitle: string;
  parentRef: MutableRefObject<HTMLDivElement | null>;
};

/**
 * Standard popover component when hovering a Garden item.
 * This component wraps EDS' Popover component and adds extra checks for placements.
 */
export const PopoverWrapper = ({
  isOpen,
  rowStart,
  columnStart,
  width,
  parentRef,
  popoverTitle,
  children,
}: PropsWithChildren<PopoverWrapperProps>): JSX.Element | null => {
  const [placement, setPlacement] = useState<{ x: number; y: number }>({
    y: 30,
    x: -width / 2,
  });
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (ref && ref.current && isOpen) {
      const clientRect = ref.current.getBoundingClientRect();
      // If Popover is out of bounds right side
      if (clientRect.right > window.innerWidth) {
        setPlacement((s) => ({ x: -clientRect.width, y: s.y }));
      }

      // If popover is out of bounds left side
      if (clientRect.left < 0) {
        setPlacement((s) => ({ x: width, y: s.y }));
      }

      // If popover is out of bounds bottom
      if (clientRect.bottom > window.innerHeight) {
        setPlacement((s) => ({ x: s.x, y: -clientRect.height }));
      }
    }
  }, [isOpen, width]);

  if (!isOpen || !parentRef.current) return null;

  return createPortal(
    <div
      style={{
        position: 'absolute',
        top: `${rowStart + placement.y}px`,
        left: `${columnStart + placement.x}px`,
      }}
    >
      <StyledPopover open={isOpen} ref={ref}>
        <Popover.Title>{popoverTitle}</Popover.Title>
        <Popover.Content>{children}</Popover.Content>
      </StyledPopover>
    </div>,
    parentRef.current
  );
};
