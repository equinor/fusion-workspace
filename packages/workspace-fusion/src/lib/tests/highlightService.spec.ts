import { GardenController } from '@equinor/garden';
import { WorkspaceReactMediator } from '@equinor/workspace-react';
import { ObjectType } from '@workspace/workspace-core';
import { WorkspaceOnClick } from '../types';
import { configureHighlightSelection } from '../utils/addGarden';

const HIGHLIGHTEDMOCKID = '123';

interface MockData {
	id: string;
}

describe('Highlight service should highlight remove highlight in all its integrated components', () => {
	it('Should higlight in garden', () => {
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
		configureHighlightSelection(controller, mediator);

		expect(controller.highlightedNode.value).toBeNull();
		mediator.highlightedItem.setValue(HIGHLIGHTEDMOCKID);
		expect(controller.highlightedNode.value).toStrictEqual(HIGHLIGHTEDMOCKID);
	});
});
