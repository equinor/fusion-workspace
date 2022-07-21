import { Controller } from '@equinor/workspace-core';
import { ReactWorkspaceController } from '../Types';
import { reactWorkspaceController } from './reactWorkspaceController';

interface IMockController {
    id: string;
    getData: () => IMockData[];
}

interface IMockControllers {
    mockController: IMockController;
}

interface IMockData {
    id: number;
    title: string;
}

export interface IMockOnClick<T> {
    type: 'IMockOnClick';
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
    config: (
        mockController,
        ws: ReactWorkspaceController<
            IMockData,
            IMockControllers,
            IMockOnClick<IMockData>,
            IMockError,
            IMockContext
        >
    ) => {
        ws.onClick(() => {
            ws.setData(mockController.getData());
            ws.setFilteredData(mockController.getData());
        });
    },
};

const workspaceController = reactWorkspaceController<
    IMockData,
    IMockControllers,
    IMockOnClick<IMockData>,
    IMockError,
    IMockContext
>();

describe('reactWorkspaceController integration', () => {
    it('workspace controller integration should work', () => {
        workspaceController.addController(controller);
        workspaceController.notifyOnClick();
        expect(workspaceController.data).toEqual(
            workspaceController.controllers.mockController.getData()
        );
    });
    it('workspace controller should not allow two controller with the same name / id', () => {
        const setup = () => {
            workspaceController.addController(controller);
        };
        expect(setup).toThrow(Error);
        expect(setup).toThrow('Controller already exist!');
    });
});
