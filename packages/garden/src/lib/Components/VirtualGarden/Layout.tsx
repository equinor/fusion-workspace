import { PropsWithChildren } from 'react';
import { LayoutRoot, LayoutContainer } from './styles';

type LayoutProps = {
    columnTotalSize: number;
    rowTotalSize: number;
    parentRef: React.MutableRefObject<HTMLDivElement | null>;
    containerRef: React.MutableRefObject<HTMLDivElement | null>;
    isScrolling: boolean;
};
/**
 * Main container of the virtualized garden.
 * Sets the component to fit the whole screen and enables scrolling when overflowing.
 * The inner div will be positioned relative and have the widths and heights from
 * useVirtual hooks.
 * pointerEvents is just for optimization, turned off when user is scrolling.
 */
export const Layout = (props: PropsWithChildren<LayoutProps>): JSX.Element => {
    const { columnTotalSize, rowTotalSize, parentRef, containerRef, isScrolling, children } = props;

    return (
        <LayoutRoot ref={parentRef}>
            <LayoutContainer
                width={columnTotalSize}
                height={rowTotalSize}
                isScrolling={isScrolling}
                ref={containerRef}
            >
                {children}
            </LayoutContainer>
        </LayoutRoot>
    );
};
