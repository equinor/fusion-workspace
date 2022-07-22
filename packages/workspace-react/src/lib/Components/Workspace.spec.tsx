import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { createReactWorkspaceController } from '../Controller';

import { Workspace } from './Workspace';

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

describe('Workspace', () => {
    it('should render successfully with controller', () => {
        const controller = createReactWorkspaceController();
        act(() => {
            ReactDOM.createRoot(container).render(<Workspace controller={controller} />);
        });
        expect(container).toBeTruthy();
    });
});
