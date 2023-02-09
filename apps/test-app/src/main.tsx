import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Workspace } from '@equinor/workspace-fusion';

const client = new QueryClient();

const getResponseAsync = async () =>
	new Promise<Response>((res, rej) =>
		setTimeout(
			() =>
				res({
					status: 200,
					json: async () => getItems('contextId'),
				} as Response),
			2000
		)
	);

const getItems = (contextId: string) => [
	{ age: 2, id: '123', contextId },
	{ age: Math.floor(Math.random() * 192), id: Math.floor(Math.random() * 192).toString(), contextId },
	{ age: Math.floor(Math.random() * 192), id: Math.floor(Math.random() * 192).toString(), contextId },
	{ age: Math.floor(Math.random() * 192), id: Math.floor(Math.random() * 192).toString(), contextId },
	{ age: Math.floor(Math.random() * 192), id: Math.floor(Math.random() * 192).toString(), contextId },
	{ age: Math.floor(Math.random() * 192), id: Math.floor(Math.random() * 192).toString(), contextId },
	{ age: Math.floor(Math.random() * 192), id: Math.floor(Math.random() * 192).toString(), contextId },
];

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={client}>
			<div style={{ height: '100vh' }}>
				<Workspace
					dataOptions={{ getResponseAsync }}
					workspaceOptions={{ appKey: 'test', getIdentifier: () => '' }}
					gridOptions={{ columnDefinitions: [{ field: 'id' }] }}
					filterOptions={{ filterGroups: [{ name: 'S', valueFormatter: (s) => s.id }] }}
				/>
			</div>
		</QueryClientProvider>
	</React.StrictMode>
);
