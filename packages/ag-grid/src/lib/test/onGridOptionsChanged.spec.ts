import { createGridController } from '../utils';

const mocFunction = jest.fn();

const gridController = createGridController(() => '123');

/**
 * Test to make sure the onGridOptionsChanged callbacks are called and passing the correct data
 */
describe('Tests for validating that onGridOptionsChanged works', () => {
  it('Should call the onGridOptionsChanged', () => {
    gridController.gridOptions$.subscribe((s) => {
      if (!s) {
        throw Error('Argument undefined');
      }
      mocFunction();
      expect(s.debug).toBe(true);
    });

    gridController.gridOptions = { debug: true };
    expect(mocFunction).toBeCalled();
    expect(mocFunction).toBeCalledTimes(1);
  });
});
