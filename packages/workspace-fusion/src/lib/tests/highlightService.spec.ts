import { GardenController } from '@equinor/workspace-garden';
import { WorkspaceReactMediator } from '@equinor/workspace-react';
import { createGridController } from '@equinor/workspace-ag-grid';
import { FusionWorkspaceError, WorkspaceOnClick } from '../types';
import { configureGardenHighlightSelection } from '../utils/garden';
import { configureHighlightSelection as configureGridHighlight } from '../utils/grid';

const HIGHLIGHTEDMOCKID = '123';

type MockData = {
	id: string;
};

describe('Highlight service should highlight remove highlight in all its integrated components', () => {
	it('Setting highlighted on the mediator should also set it on the garden', () => {
		const mediator = new WorkspaceReactMediator<
			MockData,
			WorkspaceOnClick<MockData>,
			FusionWorkspaceError,
			Record<PropertyKey, unknown>
		>();

		const controller = new GardenController<MockData>({
			data: [],
			initialGrouping: { horizontalGroupingAccessor: '', verticalGroupingKeys: [] },
			getDisplayName: (s) => s.id,
			getIdentifier: (s) => s.id,
			clickEvents: {},
		});
		configureGardenHighlightSelection(controller, mediator);

		expect(controller.selectedNodes.value.length).toStrictEqual(0);
		mediator.selectionService.selectedNodes = [HIGHLIGHTEDMOCKID];
		expect(controller.selectedNodes.value[0]).toStrictEqual(HIGHLIGHTEDMOCKID);
	});

	it('Setting highlighted on the mediator should also set it on the grid', () => {
		const mediator = new WorkspaceReactMediator<
			MockData,
			WorkspaceOnClick<MockData>,
			FusionWorkspaceError,
			Record<PropertyKey, unknown>
		>();

		const gridController = createGridController<MockData>((s) => s.id);

		configureGridHighlight(gridController, mediator);
		expect(gridController.selectedNodes.length).toStrictEqual(0);
		mediator.selectionService.selectedNodes = [HIGHLIGHTEDMOCKID];
		expect(gridController.selectedNodes?.[0]).toStrictEqual(HIGHLIGHTEDMOCKID);
	});
});
