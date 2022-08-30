import { MutableRefObject } from 'react';
import { GardenController } from '../../classes';
import { useGardenContext, useIsSelected } from '../../hooks';
import { CustomItemView } from '../../types';

interface CustomItemWrapperProps<T> {
	Component: React.MemoExoticComponent<(args: CustomItemView<T>) => JSX.Element>;
	depth: number;
	item: T;
	columnExpanded: boolean;
	rowStart: number;
	columnStart: number;
	parentRef: MutableRefObject<HTMLDivElement | null>;
	itemWidth: number | undefined;
}
export const CustomItemViewWrapper = <T,>({
	Component,
	depth,
	item,
	columnExpanded,
	columnStart,
	parentRef,
	rowStart,
	itemWidth,
}: CustomItemWrapperProps<T>) => {
	const controller = useGardenContext();
	const {
		clickEvents: { onClickItem },
		objectIdentifier,
	} = controller;

	const isSelected = useIsSelected(item[objectIdentifier] as unknown as string);

	const onClick = () => onClickItem && onClickItem(item, controller);
	return (
		<Component
			isSelected={isSelected}
			columnExpanded={columnExpanded}
			depth={depth}
			controller={controller as GardenController<T>}
			data={item}
			onClick={onClick}
			rowStart={rowStart}
			parentRef={parentRef}
			columnStart={columnStart}
			width={itemWidth}
		/>
	);
};
