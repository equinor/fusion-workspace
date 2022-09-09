import { Menu } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import { useRef, useState } from 'react';
import { ClickableIcon } from './ClickableIcon';

interface MenuItem {
	title: string;
	onCLick: () => void;
}
interface SearchPickerDropdownProps {
	menuItems: MenuItem[];
}

export function SearchPickerDropdown({ menuItems }: SearchPickerDropdownProps): JSX.Element {
	const ref = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div ref={ref}>
				<ClickableIcon
					name="chevron_down"
					onClick={() => setIsOpen(true)}
					color={tokens.colors.interactive.primary__resting.hex}
				/>
			</div>
			{isOpen && (
				<Menu
					id="menu-complex"
					aria-labelledby="anchor-complex"
					open={true}
					anchorEl={ref.current}
					onClose={() => setIsOpen(false)}
					placement={'bottom-end'}
					title="Search for.."
				>
					{menuItems.map((s) => (
						<Menu.Item key={s.title} onClick={s.onCLick}>
							{s.title}
						</Menu.Item>
					))}
				</Menu>
			)}
		</>
	);
}
