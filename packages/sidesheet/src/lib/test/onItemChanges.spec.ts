import { SidesheetController } from '../classes';

const assertName = 'test';

const mockFunction = jest.fn();

describe('Item in sidesheet changes', () => {
    const controller = new SidesheetController();
    it('Should fire callback when item changes', () => {
        controller.onItemChanges((s) => {
            expect(assertName).toBe(assertName);
            mockFunction();
        });

        controller.setItem(assertName);
        expect(mockFunction).toBeCalled();
    });
});


describe("Remove item from sidesheet", () => {
    const controller = new SidesheetController();
    it("Should return undefined after removing item", () => {
        expect(controller.item).toBeUndefined();
        controller.setItem("name");
        expect(controller.item).toBeTruthy();
        controller.setItem(undefined);
        expect(controller.item).toBeUndefined();
    })
})

