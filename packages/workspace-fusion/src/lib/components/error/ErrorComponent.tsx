import { Icon, Typography, Button } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import { error_outlined, file_description } from '@equinor/eds-icons';
import { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
Icon.add({ error_outlined, file_description });

const StylesWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	justify-content: center;
`;

const StylesContentWrapper = styled.div`
	padding-top: 1rem;
`;
type ErrorType = 'Error' | 'Info' | 'Warning' | 'NoContent';

interface PortalErrorPageProps {
	title: string;
	body?: React.FC | string;
	type?: ErrorType;
	icon?: string;
	color?: string;
	error: unknown;
}
const getPortalMessageType = (type?: ErrorType) => {
	switch (type) {
		case 'Error':
			return { color: tokens.colors.interactive.danger__resting.hex, icon: 'error_outlined' };
		case 'Info':
			return { color: tokens.colors.interactive.primary__resting.hex, icon: 'error_outlined' };
		case 'Warning':
			return { color: tokens.colors.interactive.warning__resting.hex, icon: 'error_outlined' };
		case 'NoContent':
			return { color: tokens.colors.text.static_icons__default.hex, icon: 'file_description' };
		default:
			return undefined;
	}
};
export function WorkspaceError({
	title,
	icon = 'error_outlined',
	error,
	type,
	color,
	children,
}: PropsWithChildren<PortalErrorPageProps>) {
	const currentType = getPortalMessageType(type);
	const [showStack, setShowStack] = useState(false);
	return (
		<StylesWrapper>
			<>
				<Icon
					size={48}
					color={currentType?.color || color || tokens.colors.text.static_icons__tertiary.hex}
					name={currentType?.icon || icon}
				/>
				<Typography
					color={currentType?.color || color || tokens.colors.text.static_icons__tertiary.hex}
					variant="h1"
				>
					{title}
				</Typography>
				<StylesContentWrapper> {children && children} </StylesContentWrapper>
				{error && (
					<>
						{showStack ? (
							<pre>{JSON.stringify(error, undefined, 4)}</pre>
						) : (
							<Button variant="outlined" onClick={() => setShowStack(true)}>
								Show stack
							</Button>
						)}
					</>
				)}
			</>
		</StylesWrapper>
	);
}
