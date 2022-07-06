import styled from 'styled-components';

import { Route, Routes, Link } from 'react-router-dom';
import { Garden, GardenController } from '@workspace/garden';
import { tokens } from '@equinor/eds-tokens';
import { useRef } from 'react';
import { Button } from '@equinor/eds-core-react';
import { TestWorkspaceApp } from './TestWorkspaceApp';
import { DefaultInterface, mockData } from './makeMockData';

const StyledApp = styled.div`
    background-color: ${tokens.colors.ui.background__default.hex};
    height: 100%;
    width: 100%;
`;

const StyledNavbar = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1.5em;
    background-color: ${tokens.colors.ui.background__medium.hex};
    padding: 0px 20px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${tokens.colors.text.static_icons__default.hex};
    font-size: 22px;
`;

function Navbar() {
    return (
        <StyledNavbar>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/garden">Garden</StyledLink>
            <StyledLink to="/table">Table</StyledLink>
            <StyledLink to="/workspace">Workspace</StyledLink>
            <StyledLink to="/TestNewWorkspace">Test new app</StyledLink>
        </StyledNavbar>
    );
}

export function App() {
    const api = useRef<GardenController<DefaultInterface>>(
        new GardenController(
            {
                data: mockData(),
                initialGrouping: { horizontalGroupingAccessor: 'title', verticalGroupingKeys: [] },
                nodeLabelCallback: (s) => s.sequenceNumber.toString(),
                objectIdentifier: 'id',
            },
            { name: 'abc' }
        )
    );

    return (
        <StyledApp>
            <Navbar />
            <Button onClick={() => api.current.setVerticalGroupingKeys(['1', '2', '3'])}>
                Set keys
            </Button>
            <Button onClick={() => api.current.setHorizontalGroupingAccessor('state')}>
                Change garden key
            </Button>
            <Button onClick={() => api.current.setVerticalGroupingKeys([])}>Clear keys</Button>
            <Button onClick={() => console.log(api.current)}>Log api</Button>
            <Button onClick={() => api.current.groupData()}>Group data based on keys</Button>
            <Routes>
                <Route path="/" element={<div></div>} />
                <Route
                    path="/garden"
                    element={
                        <div>
                            <Garden controller={api.current} />
                        </div>
                    }
                />

                <Route
                    path="/workspace"
                    element={
                        <div>
                            <TestElement api={api.current} />
                        </div>
                    }
                />
                <Route path="/TestNewWorkspace" element={<TestWorkspaceApp />} />
            </Routes>
            {/* END: routes */}
        </StyledApp>
    );
}

export default App;

interface TestElementProps<T> {
    api: GardenController<T>;
}
const TestElement = <T,>({ api }: TestElementProps<T>) => {
    return (
        <div style={{ height: '100vh', width: '100%', border: '1px solid red' }}>
            <Garden controller={api as any} />
        </div>
    );
};
