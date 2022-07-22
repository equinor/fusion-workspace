import styled from 'styled-components';

import { Route, Routes, Link } from 'react-router-dom';
import { tokens } from '@equinor/eds-tokens';
import { TestWorkspaceApp } from './TestWorkspaceApp';

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
            <StyledLink to="/">Workspace</StyledLink>
        </StyledNavbar>
    );
}

export function App() {
    return (
        <StyledApp>
            <Navbar />

            <Routes>
                <Route path="/" element={<TestWorkspaceApp />} />
            </Routes>
            {/* END: routes */}
        </StyledApp>
    );
}

export default App;
