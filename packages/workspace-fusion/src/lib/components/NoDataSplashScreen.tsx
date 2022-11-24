import { ReactNode } from 'react';
import { FusionMediator } from '../types';
import { sync_off } from '@equinor/eds-icons';
import { Icon } from '@equinor/eds-core-react';
import styled from 'styled-components';
import { tokens } from '@equinor/eds-tokens';
Icon.add({ sync_off });

type NoDataSplashScreenProps<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
> = {
	mediator: FusionMediator<TData, TContext>;
	children: ReactNode;
};
export function NoDataSplashScreen<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
>({ children, mediator }: NoDataSplashScreenProps<TData, TContext>) {
	if (mediator.dataService.data?.length === 0) {
		return <NoData />;
	}

	return <>{children}</>;
}

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 1em;
	color: ${tokens.colors.ui.background__medium};
	font-size: 28px;
`;

const NoData = () => {
	return (
		<Wrapper>
			<div style={{ height: '80px', width: '80px' }}>
				<Icon name="sync_off" color={tokens.colors.text.static_icons__secondary.hex} height={80} width={80} />
			</div>
			<div style={{ color: tokens.colors.text.static_icons__secondary.hex }}>
				Unfortunately, we could not find any data for this component
			</div>
		</Wrapper>
	);
};
