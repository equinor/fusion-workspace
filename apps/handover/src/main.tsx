import { StarProgress } from '@equinor/eds-core-react';
import Framework from '@equinor/fusion-framework-react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import { FusionApp } from './lib';
import configure from './lib/components/FusionFramework';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<Framework configure={configure} fallback={<StarProgress />}>
			<FusionApp />
		</Framework>
	</React.StrictMode>
);
