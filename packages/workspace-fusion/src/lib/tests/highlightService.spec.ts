import { GardenController } from '@equinor/garden';
import { WorkspaceReactMediator } from '@equinor/workspace-react';
import { GridController } from '@workspace/grid';
import { ObjectType } from '@workspace/workspace-core';
import { WorkspaceOnClick } from '../types';
import { configureGardenHighlightSelection } from '../utils/addGarden';
import { configureHighlightSelection as configureGridHighlight } from '../utils/addGrid';

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
			objectIdentifier: 'id',
			clickEvents: {},
		});
		configureGardenHighlightSelection(controller, mediator);

		expect(controller.highlightedNode.value).toBeNull();
		mediator.highlightedItem.setValue(HIGHLIGHTEDMOCKID);
		expect(controller.highlightedNode.value).toStrictEqual(HIGHLIGHTEDMOCKID);
	});

	it('Setting highlighted on the mediator should also set it on the grid', () => {
		const mediator = new WorkspaceReactMediator<
			MockData,
			WorkspaceOnClick<MockData>,
			ObjectType<unknown>,
			ObjectType<unknown>
		>();

		const gridController = new GridController<MockData>('id');

		configureGridHighlight(gridController, mediator);
		expect(gridController.highlightedItem.value).toBeNull();
		mediator.highlightedItem.setValue(HIGHLIGHTEDMOCKID);
		expect(gridController.highlightedItem.value).toStrictEqual(HIGHLIGHTEDMOCKID);
	});
});
