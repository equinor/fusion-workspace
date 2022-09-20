import { CustomItemView } from '@equinor/garden';
import { memo, useMemo, useRef, useState } from 'react';

import { PopoverContent } from './Popover/PopoverContent';
import { PopoverWrapper } from './Popover/PopoverWrapper';
import { FlagIcon } from './Popover/FlagIcon';
import {
	Root,
	HandoverItemWrapper,
	WarningIconWrapper,
	Sizes,
	ItemText,
	StatusCircles,
} from './handoverGardenItem.styles';
import {
	createProgressGradient,
	getDotsColor,
	getStatus,
	getTextColor,
	HandoverStatus,
	itemSize,
	Status,
} from '../../utils';
import { Handover } from '../types';
import React from 'react';

function HandoverGardenItem({
	data,
	controller,
	onClick,
	columnExpanded,
	depth,
	width: itemWidth = 300,
	isSelected,
	rowStart,
	columnStart,
	parentRef,
}: CustomItemView<Handover>): JSX.Element {
	const [hoverTimeout, setHoverTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
	const { customState } = controller;
	const size = itemSize(data.volume, (customState?.['maxVolume'] as number) || 0);

	const status = getStatus(data);
	const backgroundColor = useMemo(() => createProgressGradient(data, status), [data, status]);
	const textColor = getTextColor(status);

	const mcPackageColor = getDotsColor(data.mcStatus as HandoverStatus);
	const commStatusColor = getDotsColor(data.commpkgStatus as HandoverStatus);

	const showWarningIcon = data.mcStatus === 'OS' && status === 'RFCC Accepted';

	const anchorRef = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const width = useMemo(() => (depth ? 100 - depth * 3 : 100), [depth]);
	const maxWidth = useMemo(() => itemWidth * 0.98, [itemWidth]);

	const options: ItemOptions = {
		size,
		status,
		barColor: backgroundColor,
		textColor,
		mcPackageColor,
		commStatusColor,
		showWarningIcon,
	};
	return (
		<>
			<Root>
				<HandoverItemWrapper
					ref={anchorRef}
					onMouseEnter={() => {
						hoverTimeout && !isOpen && clearTimeout(hoverTimeout);
						setHoverTimeout(setTimeout(() => setIsOpen(true), 700));
					}}
					onMouseLeave={() => {
						hoverTimeout && clearTimeout(hoverTimeout);
						setIsOpen(false);
					}}
					backgroundColor={backgroundColor}
					textColor={textColor}
					onClick={onClick}
					style={{ width: `${columnExpanded ? 100 : width}%`, maxWidth }}
					isSelected={isSelected}
				>
					{showWarningIcon && (
						<WarningIconWrapper>
							<WarningIcon />
						</WarningIconWrapper>
					)}
					<Sizes size={size} color={textColor} />
					{data.hasUnsignedActions && <FlagIcon color={textColor} />}
					<ItemText>{controller.nodeLabelCallback(data, controller)}</ItemText>
					<StatusCircles mcColor={mcPackageColor} commColor={commStatusColor} />
				</HandoverItemWrapper>

				{columnExpanded && data.description}
			</Root>

			{isOpen && (
				<PopoverWrapper
					isOpen={isOpen}
					rowStart={rowStart}
					columnStart={columnStart}
					width={itemWidth}
					parentRef={parentRef}
					popoverTitle={`Comm.pkg ${data.commpkgNo}`}
				>
					<PopoverContent data={data} itemOptions={options} />
				</PopoverWrapper>
			)}
		</>
	);
}

export default memo(HandoverGardenItem);

type ItemSize = 'small' | 'medium' | 'large';
export type ItemOptions = {
	size: ItemSize;
	status: Status;
	barColor: string;
	textColor: string;
	mcPackageColor: string;
	commStatusColor: string;
	showWarningIcon: boolean;
};

export const WarningIcon = () => {
	return (
		<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g filter="url(#filter0_dd_214_26166)">
				<circle cx="11" cy="9" r="6.5" fill="#EB0000" stroke="white" />
				<rect x="10" y="5" width="2" height="5" fill="white" />
				<rect x="10" y="11" width="2" height="2" fill="white" />
			</g>
			<defs>
				<filter
					id="filter0_dd_214_26166"
					x="0"
					y="0"
					width="22"
					height="23"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="3" />
					<feGaussianBlur stdDeviation="2" />
					<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_214_26166" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="2" />
					<feGaussianBlur stdDeviation="2" />
					<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" />
					<feBlend mode="normal" in2="effect1_dropShadow_214_26166" result="effect2_dropShadow_214_26166" />
					<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_214_26166" result="shape" />
				</filter>
			</defs>
		</svg>
	);
};
