import { GardenController } from '@equinor/garden';
import { WorkspaceReactMediator } from '@equinor/workspace-react';
import { GridController } from '@workspace/grid';
import { ObjectType } from '@workspace/workspace-core';
import { WorkspaceOnClick } from '../types';
import { configureGardenHighlightSelection } from '../utils/garden';
import { configureHighlightSelection as configureGridHighlight } from '../utils/grid';

const HIGHLIGHTEDMOCKID = '123';

interface MockData {
	id: string;
}

describe('Highlight service should highlight remove highlight in all its integrated components', () => {
	it('Setting highlighted on the mediator should also set it on the garden', () => {
		const mediator = new WorkspaceReactMediator<
			MockData,
			WorkspaceOnClick<MockData>,
			ObjectType<unknown>,
			ObjectType<unknown>
		>();

		const controller = new GardenController<MockData>({
			data: [],
			initialGrouping: { horizontalGroupingAccessor: '', verticalGroupingKeys: [] },
			nodeLabelCallback: (s) => s.id,
			getIdentifier: (s) => s.id,
			clickEvents: {},
		});
		configureGardenHighlightSelection(controller, mediator);

		expect(controller.selectedNodes.value.length).toStrictEqual(0);
		mediator.selectionService.setSelection([{ id: HIGHLIGHTEDMOCKID }]);
		expect(controller.selectedNodes.value[0]).toStrictEqual(HIGHLIGHTEDMOCKID);
	});

	it('Setting highlighted on the mediator should also set it on the grid', () => {
		const mediator = new WorkspaceReactMediator<
			MockData,
			WorkspaceOnClick<MockData>,
			ObjectType<unknown>,
			ObjectType<unknown>
		>();

		const gridController = new GridController<MockData>((s) => s.id);

		configureGridHighlight(gridController, mediator);
		expect(gridController.selectedNodes.value?.length).toStrictEqual(0);
		mediator.selectionService.setSelection([{ id: HIGHLIGHTEDMOCKID }]);
		expect(gridController.selectedNodes.value?.[0]).toStrictEqual(HIGHLIGHTEDMOCKID);
	});
});
