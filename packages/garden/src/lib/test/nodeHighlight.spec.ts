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
		expect(gc.highlightedNode.value).toBeNull();
		gc.setHighlightedNode((data) => data.find((node) => node.id === highlightId)?.id ?? null);
		expect(gc.highlightedNode.value).toStrictEqual(highlightId);
	});
});
