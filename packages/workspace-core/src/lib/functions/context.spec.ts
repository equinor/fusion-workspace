import { createWorkspaceController } from '../controllers';
import { WorkspaceControllerInternal } from '../types';
import { setContext } from './context';

interface MocContext {
    name: string;
    lastName: string;
    age: number;
}

const mocContext: MocContext = {
    name: 'Tom',
    lastName: 'Jones',
    age: 82,
};
const workspaceController = createWorkspaceController() as WorkspaceControllerInternal<
    any,
    any,
    any,
    any,
    MocContext
>;

describe('context', () => {
    it('should be undefined', () => {
        expect(workspaceController.context).toBe(undefined);
    });
    it('should handle undefined context in context setter. ', () => {
        setContext<any, any, any, any, MocContext>(workspaceController, (c) => ({ ...c }));
        expect(JSON.stringify(workspaceController.context)).toBe(JSON.stringify({}));
    });
    it('should set mocContext to workspaceController context', () => {
        setContext<any, any, any, any, MocContext>(workspaceController, () => mocContext);
        expect(workspaceController.context).toBe(mocContext);
    });
    it('should update mocContext with name Ron', () => {
        setContext<any, any, any, any, MocContext>(workspaceController, (c) => ({
            ...c,
            name: 'Ron',
        }));

        expect(JSON.stringify(workspaceController.context)).toBe(
            JSON.stringify({ ...mocContext, name: 'Ron' })
        );
        expect(workspaceController.context?.name).toBe('Ron');
        expect(workspaceController.context?.lastName).toBe('Jones');
    });
});
