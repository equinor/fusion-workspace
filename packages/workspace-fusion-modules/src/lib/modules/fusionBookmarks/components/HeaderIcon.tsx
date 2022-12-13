import { Icon } from '@equinor/eds-core-react';
import { bookmarks } from '@equinor/eds-icons';
import { tokens } from '@equinor/eds-tokens';
import { TabButton } from '@equinor/workspace-fusion';

Icon.add({ bookmarks });

export const HeaderIcon = () => {
	return (
		<TabButton isActive={false}>
			<Icon name="bookmarks" color={tokens.colors.interactive.primary__resting.hex} />
		</TabButton>
	);
};
