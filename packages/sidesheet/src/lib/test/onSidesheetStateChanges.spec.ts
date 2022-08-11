import { SidesheetController } from '../classes';

describe('Sidesheet state changes Closed/Open', () => {
    it('Should call the callback function with Open', () => {
        const mockFunction = jest.fn();

        const controller = new SidesheetController();
        expect(controller.isSidesheetOpen()).toBeFalsy();
        controller.onSidesheetStateChanged((s) => {
            expect(s === 'Open').toBeTruthy();
            mockFunction();
        });
        controller.setSidesheetState('Open');
        expect(mockFunction).toBeCalled();
    });
});
