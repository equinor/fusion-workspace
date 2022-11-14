import { Workspace } from '@equinor/workspace-react';
import { FusionWorkspaceBuilder } from '../classes';
import { FUSION_FILTER_PROVIDER_NAME } from './filter/addFilterContext';
import { sortFusionTabs } from './fusionTabOrder';

type UserConfig<TData extends Record<PropertyKey, unknown>, TContext extends Record<PropertyKey, unknown> = never> = (
	builder: FusionWorkspaceBuilder<TData, TContext>
) => FusionWorkspaceBuilder<TData, TContext>;

export function createFusionWorkspace<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never
>(config: AppConfig<TData>, builderFunc: UserConfig<TData, TContext>): () => JSX.Element {
	const builder = builderFunc(new FusionWorkspaceBuilder<TData, TContext>(config.getIdentifier, config.appKey));

	const { viewController } = builder;

	/** Check if filter provider is present, otherwise bypass data */
	if (!viewController.providers.find(({ name }) => name === FUSION_FILTER_PROVIDER_NAME)) {
		builder.addMiddleware(({ dataService }) => {
			dataService.data$.subscribe((val) => {
				if (!val) return;
				dataService.filteredData = val;
			});
		});
	}

	return () => <Workspace controller={sortFusionTabs(viewController)} />;
}

type AppConfig<TData> = {
	getIdentifier: GetIdentifier<TData>;
	appKey: string;
};

export type GetIdentifier<TData> = (item: TData) => string;
