import { GardenController } from '../classes';
import { defaultGardenConfig } from './mockGarden';

describe('Should ensure grouping keys are set correctly and listeners are notified of changes', () => {
  it('Should fire callback when key changes', () => {
    const gc = new GardenController(defaultGardenConfig);
    const mockFunction = jest.fn();
    gc.grouping.onChange(mockFunction);
    gc.grouping.setValue({ horizontalGroupingAccessor: 'key', verticalGroupingKeys: [] });
    expect(mockFunction).toBeCalledTimes(1);
  });
});
