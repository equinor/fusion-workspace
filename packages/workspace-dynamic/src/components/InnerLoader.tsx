import type * as WorkspaceConfig from '@equinor/workspace-fusion';
import { useQuery } from '@tanstack/react-query';
import { useRef, useEffect } from 'react';

export function InnerLoader<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown>,
	// TCustomSidesheetEvents extends BaseEvent = never,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
>(
	props: WorkspaceConfig.WorkspaceProps<TData, TContext, never, TExtendedFields, TCustomGroupByKeys> & {
		loadPath: string;
	}
) {
	const { data: bundle } = useQuery(
		['workspace', props.loadPath],
		async () => {
			const bundle = await import(props.loadPath /* @vite-ignore */);
			return { default: bundle.dynamic };
		},
		{
			staleTime: 0,
			cacheTime: 0,
			refetchOnWindowFocus: false,
			suspense: true,
			useErrorBoundary: true,
		}
	);

	const pRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!bundle) return;
		const { teardown, render } = bundle.default(pRef.current!, props);
		return () => {
			teardown;
		};
	}, [bundle]);

	return <div id={`Workspace entry`} style={{ height: '100%' }} ref={pRef} />;
}
