import { writeSync } from 'fs';
import { Controller } from '../types';
import { WorkspaceController } from './workspaceController';

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
    WorkspaceController<IMockData, IMockControllers, IMockOnClick<IMockData>, IMockError, IMockContext>
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
const workspaceController: MockWorkspaceController = new WorkspaceController();

workspaceController.addController(controller);

describe('workspaceController', () => {
    it('should have set mocData to originalData', () => {
        workspaceController.onDataChanged((data) => {
            expect(workspaceController.getData()).toEqual(workspaceController.controllers.mockController?.getData());
            expect(data).toEqual(workspaceController.controllers.mockController?.getData());
        });
        workspaceController.click({} as any);
        expect(workspaceController.getFilteredData()).toEqual(
            workspaceController.controllers.mockController?.getData()
        );
    });
    it('should not allow two controller with the same name / id', () => {
        const setup = () => {
            workspaceController.addController(controller);
        };
        expect(setup).toThrow(Error);
    });
    it('should set context', () => {
        expect(workspaceController.getContext()).toBe(undefined);
        workspaceController.setContext(() => ({
            id: 'mockId',
            title: 'mockTitle',
        }));
        expect(workspaceController.getContext()?.id).toBe('mockId');
        expect(workspaceController.getContext()?.title).toBe('mockTitle');
    });

    it('should add middleware', () => {
        const mockFunction = jest.fn();
        workspaceController.addMiddleware((ws) => {
            mockFunction(ws.getContext()?.id);
            ws.onClick(() => {
                mockFunction(ws.getContext()?.id);
            });
        });
        workspaceController.click({} as any);
        expect(mockFunction).toBeCalled();
        expect(mockFunction).toBeCalledTimes(2);
        expect(mockFunction).toBeCalledWith('mockId');
    });
});
