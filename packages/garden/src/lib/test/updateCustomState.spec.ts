import { GardenController } from '..';
import { defaultGardenConfig, MockInterface } from './mockGarden';

describe('Custom state should update whenever data changes', () => {
	it('Should update custom state', () => {
		interface CustomStateInterface {
			count: number;
		}

		interface CustomKeys {
			type: string;
		}

		function getCustomState(data: MockInterface[]): CustomStateInterface {
			return {
				count: data.length,
			};
		}
		const gc = new GardenController<MockInterface, CustomKeys, CustomStateInterface, unknown>({
			...defaultGardenConfig,
			getCustomState,
		});

		expect(gc.customState?.count).toStrictEqual(0);
		gc.data.setValue([
			{ id: '1', name: '1' },
			{ id: '2', name: '2' },
		]);
		expect(gc.customState?.count).toStrictEqual(2);
	});
});
