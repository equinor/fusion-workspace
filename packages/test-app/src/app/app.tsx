import { createFusionWorkspace } from '@equinor/workspace-fusion';
import { Handover } from './types';
import { customTab, dataSourceOptions, gridOptions, sidesheetOptions, statusBarConfig } from './workspaceConfig';

function Workspace() {
	const Component = createFusionWorkspace<Handover, unknown>((builder) =>
		builder
			.addConfig({ appColor: 'Purple', appKey: 'Handover', defaultTab: 'garden' })
			.addDataSource(dataSourceOptions)
			.addGrid(gridOptions)
			.addCustomTab(customTab)
			.addSidesheet(sidesheetOptions)
			.addMiddleware((mediator) => {
				mediator.onIsLoadingChange((isLoading) => {
					console.log(`isloading ${isLoading}`);
				});
				mediator.onMount(() => {
					console.log(`Component mounted`);
				});
				mediator.onUnMount(() => {
					console.log('Component is unmounting');
				});
				mediator.onClick((click) => {
					console.log('Clickevent happened', click);
				});
			})
			.addStatusBarItems(statusBarConfig)
	);

	return <Component />;
}

export function App() {
	return <Workspace />;
}

export default App;
