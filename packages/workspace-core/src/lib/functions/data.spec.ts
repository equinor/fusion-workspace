import { createWorkspaceController } from '../controllers';
import { WorkspaceControllerInternal } from '../types';
import { setFilteredData, setOriginalData } from './data';
const mocFunction = jest.fn();
const workspaceController = createWorkspaceController() as WorkspaceControllerInternal<
    any,
    any,
    any,
    any,
    any
>;
const mocData = [
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
];
describe('setFilteredData', () => {
    it('should have set mocData to filteredData', () => {
        workspaceController.onFilteredDataChange((data) => {
            expect(data).toEqual(mocData);
        });
        setFilteredData(workspaceController, mocData);
        expect(workspaceController.filteredData).toEqual(mocData);
    });
    it('should prevent onFilteredDataChanged callback', () => {
        workspaceController.onFilteredDataChange(() => {
            mocFunction();
        });
        setFilteredData(workspaceController, mocData, true);
        expect(mocFunction).toBeCalledTimes(0);
    });
    it('should have set mocData to originalData', () => {
        workspaceController.onDataChanged((data) => {
            expect(data).toEqual(mocData);
        });
        setOriginalData(workspaceController, mocData);
        expect(workspaceController.data).toEqual(mocData);
    });
    it('should prevent onOriginalDataChanged callback', () => {
        workspaceController.onDataChanged(() => {
            mocFunction();
        });
        setOriginalData(workspaceController, mocData, true);
        expect(mocFunction).toBeCalledTimes(0);
    });
});
