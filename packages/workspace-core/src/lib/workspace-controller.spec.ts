import { Controller } from './types';
import { createWorkspaceController } from './workspace-controller';
// const mocFunction = jest.fn();

interface IMockController {
    id: string;
    getData: () => IMockData[];
}

interface IMockControllers {
    mockController?: IMockController;
}

interface IMockData {
    id: number;
    title: string;
}

export interface IMockOnClick<T> {
    type: 'grid';
    item: T;
    controller: IMockController;
}

interface IMockError {
    message: string;
}

interface IMockContext {
    id: string;
    title: string;
}

const mockController: IMockController = {
    id: 'mockController',
    getData: () => [
        {
            id: 1,
            title: 'data1',
        },
        {
            id: 2,
            title: 'data2',
        },
        {
            id: 3,
            title: 'data3',
        },
    ],
};

const controller: Controller<IMockController, any> = {
    name: 'mockController',
    controller: mockController,
    config: (mockController, ws) => {
        ws.onClick(() => {
            ws.setOriginalData(mockController.getData());
            ws.setFilteredData(mockController.getData());
        });
    },
};

const workspaceController = createWorkspaceController<
    IMockData,
    IMockControllers,
    IMockOnClick<IMockData>,
    IMockError,
    IMockContext
>();

workspaceController.addController(controller);

describe('workspaceController', () => {
    it('should have set mocData to originalData', () => {
        workspaceController.notifyOnClick();
        workspaceController.onOriginalDataChanged((data) => {
            expect(workspaceController.originalData).toEqual(
                workspaceController.controllers.mockController?.getData()
            );
            expect(data).toEqual(workspaceController.controllers.mockController?.getData());
        });

        expect(workspaceController.filteredData).toEqual(
            workspaceController.controllers.mockController?.getData()
        );
    });
    it('should not allow two controller with the same name / id', () => {
        const setup = () => {
            workspaceController.addController(controller);
        };
        expect(setup).toThrow(Error);
        expect(setup).toThrow('Controller already exist!');
    });
});
