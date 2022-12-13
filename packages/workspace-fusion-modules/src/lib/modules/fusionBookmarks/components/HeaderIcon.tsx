import { Icon } from '@equinor/eds-core-react';
import { bookmarks } from '@equinor/eds-icons';
import { tokens } from '@equinor/eds-tokens';

Icon.add({ bookmarks });

export const HeaderIcon = () => {
	return (
		<div
			style={{
				height: '48px',
				width: '48px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				cursor: 'pointer',
			}}
		>
			<Icon name="bookmarks" color={tokens.colors.interactive.primary__resting.hex} />
		</div>
	);
};
