import { Suspense } from 'react';
import type * as WorkspaceConfig from '@equinor/workspace-fusion';
import { ErrorBoundary } from 'react-error-boundary';
import { CircularProgress } from '@equinor/eds-core-react';
import { Center } from './components/Center';
import { useVersionOverride } from './hooks/useVersionOverride';
import { InnerLoader } from './components/InnerLoader';

//danger bundle
import type { WorkspaceVitePlugin } from '@equinor/workspace-fusion';
export { WorkspaceVitePlugin };

export const Workspace = <
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>,
	TCustomSidesheetEvents extends WorkspaceConfig.BaseEvent = never,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
>(
	props: WorkspaceConfig.WorkspaceProps<TData, TContext, TCustomSidesheetEvents, TExtendedFields, TCustomGroupByKeys>
) => {
	const loadPath = useVersionOverride();

	return (
		<ErrorBoundary resetKeys={[loadPath]} FallbackComponent={() => <Center>Failed to load workspace</Center>}>
			<Suspense
				fallback={
					<Center>
						<CircularProgress size={48} />
						<div>Loading workspace...</div>
					</Center>
				}
			>
				<InnerLoader loadPath={loadPath} {...props} />
			</Suspense>
		</ErrorBoundary>
	);
};

export type { WorkspaceConfig };
