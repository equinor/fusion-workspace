import { Suspense } from 'react';
import type * as WorkspaceConfig from '@equinor/workspace-fusion';
import { ErrorBoundary } from 'react-error-boundary';
import { CircularProgress } from '@equinor/eds-core-react';
import { Center } from './components/Center';
import { useVersionOverride } from './hooks/useVersionOverride';
import { InnerLoader } from './components/InnerLoader';

export const Workspace = <
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>,
	// TCustomSidesheetEvents extends BaseEvent = never,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
>(
	props: WorkspaceConfig.WorkspaceProps<TData, TContext, never, TExtendedFields, TCustomGroupByKeys>
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
