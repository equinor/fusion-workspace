import { StarProgress } from '@equinor/eds-core-react';
import createApp, { AppConfigurator } from '@equinor/fusion-framework-react-app';
import { useFramework } from '@equinor/fusion-framework-react/hooks';

import { Suspense } from 'react';
import styled from 'styled-components';
import { HandoverApp } from './HandoverApp';

const Wrapper = styled.div`
	display: flex;
	flex-wrap: nowrap;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const configCallback: AppConfigurator = async (appModuleConfig, frameworkApi) => {
	await frameworkApi.modules.serviceDiscovery.configureClient(appModuleConfig, 'portal');
};

export const configurator = createApp(HandoverApp, configCallback, []);

export const FusionApp = () => {
	const framework = useFramework();
	const Component = configurator(framework, { name: 'Handover' });
	return (
		<Suspense
			fallback={
				<Wrapper>
					<StarProgress />
					<h1>Loading app</h1>
				</Wrapper>
			}
		>
			<Component />
		</Suspense>
	);
};
