import { GridController } from '../classes';

const mocFunction = jest.fn();

const gridController = new GridController();

/**
 * Test to make sure the onGridOptionsChanged callbacks are called and passing the correct data
 */
describe('Tests for validating that onGridOptionsChanged works', () => {
    it('Should call the onGridOptionsChanged', () => {
        gridController.onGridOptionsChanged((s) => {
            mocFunction();
            expect(s.debug).toBe(true);
        });
        gridController.setGridOptions({ debug: true });
        expect(mocFunction).toBeCalled();
        expect(mocFunction).toBeCalledTimes(1);
    });
});
