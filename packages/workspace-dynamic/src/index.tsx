import type * as WorkspaceTypes from '@equinor/workspace-fusion';
import { WorkspaceProps } from '@equinor/workspace-fusion';
import React, { lazy, PropsWithChildren, Suspense } from 'react';
export { WorkspaceTypes };

import { ErrorBoundary } from 'react-error-boundary';

const LazyWorkspace = lazy<(props: WorkspaceProps<any, any, any, any, any>) => JSX.Element>(async () => {
	const url = new URL('/@equinor/workspace-fusion@0.16.6', 'https://unpkg.com');

	return await import(url.toString() /* @vite-ignore */);
});

export function Workspace<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>,
	//TODO: Fix
	TCustomSidesheetEvents extends unknown = never,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
>(props: WorkspaceTypes.WorkspaceProps<TData, TContext, never, TExtendedFields, TCustomGroupByKeys>) {
	return (
		<ErrorBoundary FallbackComponent={() => <LazyTransition>Failed to load workspace</LazyTransition>}>
			<Suspense fallback={<LazyTransition>Preparing workspace</LazyTransition>}>
				<LazyWorkspace {...(props as any)} />
			</Suspense>
		</ErrorBoundary>
	);
}

const LazyTransition = ({ children }: PropsWithChildren) => (
	<div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
		{children}
	</div>
);
