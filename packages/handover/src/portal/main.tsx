import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PortalHeader } from './PortalHeader';

const root = ReactDOM.createRoot(document.getElementById('portal') as HTMLElement);
root.render(
	<div>
		<PortalHeader />
	</div>
);
