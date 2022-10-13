import { Icon } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import React from 'react';

type DevtoolsBugProps = {
	onClick: () => void;
};

export function DevtoolsBug({ onClick }: DevtoolsBugProps) {
	return (
		<div style={{ position: 'absolute', bottom: 0, left: 5 }}>
			<Icon
				color={tokens.colors.interactive.primary__resting.hex}
				name="report_bug"
				size={32}
				onClick={onClick}
			/>
		</div>
	);
}
