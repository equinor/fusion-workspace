import { GridController } from '../classes';

const mocFunction = jest.fn();

const gridController = new GridController();

/**
 * Test to make sure the onGridOptionsChanged callbacks are called and passing the correct data
 */
describe('onGridOptionsChanged', () => {
    it('Should call the onGridOptionsChanged', () => {
      
        gridController.onGridOptionsChanged((s) => {
            mocFunction();
            expect(s.debug).toBe(true);
        });
        gridController.setGridOptions({debug: true});
        expect(mocFunction).toBeCalled();
        expect(mocFunction).toBeCalledTimes(1);
    });
});
