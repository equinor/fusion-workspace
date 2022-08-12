import { GardenController } from '..';
import { defaultGardenConfig, MockInterface } from './mockGarden';

describe('It should highlight the correct node', () => {
	it('Should highlight the correct node', () => {
		const highlightId = '123';
		const items: MockInterface[] = [
			{ id: highlightId, name: 'Test' },
			{ id: '12', name: 'Some other node' },
		];

		const gc = new GardenController(defaultGardenConfig);
		gc.data.setValue(items);
		expect(gc.highlightedNode.node.value).toBeNull();
		gc.highlightedNode.setHighlighted((data) => data.find((s) => s?.['id'] === highlightId)?.['id']);
		expect(gc.highlightedNode.node.value).toStrictEqual(highlightId);
	});
});
