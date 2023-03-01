import { GardenController } from '../classes';
import { defaultGardenConfig } from './mockGarden';

describe('Should notify listeners that data changed', () => {
  it('Should fire callback when data changes', () => {
    const gc = new GardenController(defaultGardenConfig);
    const mockFunction = jest.fn();
    gc.data.onChange(mockFunction);
    gc.data.setValue([{ name: 'test', id: '123' }]);
    expect(mockFunction).toBeCalledTimes(1);
  });
});
