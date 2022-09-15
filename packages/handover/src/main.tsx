import { StarProgress } from '@equinor/eds-core-react';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FusionApp } from './lib';
import { Framework } from './lib/components/FusionFramework';
import { HandoverApp } from './lib/components/HandoverApp';
import { TestApp } from './lib/components/TestApp';

const Wrapper = styled.div`
	display: flex;
	flex-wrap: nowrap;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

ReactDOM.render(
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
	</React.StrictMode>,
	document.getElementById('root')
);
