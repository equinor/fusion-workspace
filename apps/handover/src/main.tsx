import { StarProgress } from '@equinor/eds-core-react';
import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import { FusionApp } from './lib';
import { Framework } from './lib/components/FusionFramework';

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
	<React.StrictMode>
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
	</React.StrictMode>
);
