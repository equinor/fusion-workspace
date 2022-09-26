import { Button, Icon, Checkbox, Popover } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import { useState, useRef } from 'react';
import { ReactSortable } from 'react-sortablejs';
import styled from 'styled-components';

interface ShowHideFilterButtonProps {
	allFilters: string[];
	visibleFilters: string[];
	setVisibleFilters: (val: string[]) => void;
}

interface SortObject<T> {
	id: string;
	item: T;
}
export const ToggleHideFilterPopover = ({
	setVisibleFilters,
	visibleFilters,
	allFilters,
}: ShowHideFilterButtonProps): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	const [list, setList] = useState<SortObject<string>[]>(allFilters.map((s) => ({ id: s, item: s })));

	const handleChange = (val: string) => {
		if (visibleFilters.includes(val)) {
			setVisibleFilters(visibleFilters.filter((s) => s !== val));
		} else {
			setVisibleFilters([...visibleFilters, val]);
		}
	};
	const DraggableHandleSelector = 'globalDraggableHandle';

	const updateList = () => setVisibleFilters(list.map((s) => s.item).filter((s) => visibleFilters.includes(s)));

	return (
		<>
			<div ref={ref}>
				<Button title="Add filters" variant="ghost_icon" onClick={() => setIsOpen(true)}>
					<Icon name="playlist_add" color={tokens.colors.interactive.primary__resting.hex} />
				</Button>
			</div>

			{isOpen && (
				<Popover open={isOpen} onClose={() => setIsOpen(false)} anchorEl={ref.current} placement="bottom-end">
					<Popover.Header>
						<Popover.Title>Filter types</Popover.Title>
					</Popover.Header>
					<Popover.Content style={{ maxHeight: '60vh', overflowY: 'scroll', overflowX: 'hidden' }}>
						<PopoverList>
							<ReactSortable
								animation={200}
								handle={`.${DraggableHandleSelector}`}
								list={list}
								setList={setList}
								onEnd={updateList}
							>
								{list.map(({ item }) => (
									<ItemWrapper className={DraggableHandleSelector} key={item}>
										<Checkbox
											size={2}
											checked={visibleFilters.includes(item)}
											onChange={() => {
												handleChange(item);
											}}
										/>
										<div>{item}</div>
										<Icon
											name="drag_handle"
											color={tokens.colors.interactive.primary__resting.hex}
										/>
									</ItemWrapper>
								))}
							</ReactSortable>
						</PopoverList>
					</Popover.Content>
				</Popover>
			)}
		</>
	);
};

const PopoverList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 20px;
`;

const ItemWrapper = styled.div`
	display: grid;
	grid-template-columns: auto 1fr auto;

	align-items: center;
	width: 100%;
	height: 32px;
`;
