import React from 'react';
import { getTextColor, Status } from '../../../utils';

const lines = [
	<rect key="1" x="3" y="12" width="2" height="8" rx="1" transform="rotate(-90 3 12)" />,
	<rect key="2" x="3" y="7" width="2" height="8" rx="1" transform="rotate(-90 3 7)" />,
	<rect key="3" x="3" y="2" width="2" height="8" rx="1" transform="rotate(-90 3 2)" />,
];

const lineCount = (size: string): number => (size === 'small' ? 1 : size === 'medium' ? 2 : 3);

type SizeIconsProps = {
	size: string;
	status: Status;
};

export const SizeIcons = ({ size, status }: SizeIconsProps): JSX.Element => (
	<svg width="14" height="12" viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg">
		<g fill={getTextColor(status)}>{lines.slice(0, lineCount(size)).map((line) => line)}</g>
	</svg>
);
