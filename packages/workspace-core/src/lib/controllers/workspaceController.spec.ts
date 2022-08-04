import { Controller, WorkspaceController } from '../types';
import { createWorkspaceController } from './workspaceController';

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

const controller: Controller<
    IMockController,
    WorkspaceController<
        IMockData,
        IMockControllers,
        IMockOnClick<IMockData>,
        IMockError,
        IMockContext
    >
> = {
    name: 'mockController',
    controller: mockController,
    config: (mockController, ws) => {
        ws.onClick(() => {
            ws.setData(mockController.getData());
            ws.setFilteredData(mockController.getData());
        });
    },
};

type MockWorkspaceController = WorkspaceController<
    IMockData,
    IMockControllers,
    IMockOnClick<IMockData>,
    IMockError,
    IMockContext
>;
const workspaceController: MockWorkspaceController = createWorkspaceController();

workspaceController.addController(controller);

describe('workspaceController', () => {
    it('should have set mocData to originalData', () => {
        workspaceController.click();
        workspaceController.onDataChanged((data) => {
            expect(workspaceController.data).toEqual(
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
    it('should set context', () => {
        expect(workspaceController.context).toBe(undefined);
        workspaceController.onClick(() => {
            workspaceController.context = { id: 'mockId', title: 'mockTitle' };
        });
        workspaceController.click();

        expect(workspaceController.context?.id).toBe('mockId');
        expect(workspaceController.context?.title).toBe('mockTitle');
        expect(workspaceController.context).not.toBe(undefined);
    });

    it('should add middleware', () => {
        const log = jest.fn();
        workspaceController.addMiddleware((ws) => {
            log(ws.context?.id);
            ws.onClick(() => {
                log(ws.context?.id);
            });
        });
        workspaceController.click();
        expect(log).toBeCalled();
        expect(log).toBeCalledTimes(2);
        expect(log).toBeCalledWith('mockId');
    });
});
