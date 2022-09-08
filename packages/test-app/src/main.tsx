import createApp from '@equinor/fusion-framework-react-app';
import { useFramework } from '@equinor/fusion-framework-react-app/framework';
import { Fragment, StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Framework } from './app/FusionFramework';
import styled from 'styled-components';
import { StarProgress } from '@equinor/eds-core-react';
import { FusionApp } from './app/FusionApp';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const Wrapper = styled.div`
	display: flex;
	flex-wrap: nowrap;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

root.render(
	<StrictMode>
		<Suspense
			fallback={
				<Wrapper>
					<StarProgress />
					<h1>Loading framework</h1>
				</Wrapper>
			}
		>
			<Framework>
				<FusionApp />
			</Framework>
		</Suspense>
	</StrictMode>
);
