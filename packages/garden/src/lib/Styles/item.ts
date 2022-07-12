import { tokens } from '@equinor/eds-tokens';

import styled from 'styled-components';

export const Item = styled.div`
    padding: 0.5rem 1rem;
    margin: 0;
    margin-bottom: 4px;
    display: flex;
    border: 1px solid ${tokens.colors.text.static_icons__tertiary.rgba};
    border-radius: 5px;
    color: ${tokens.colors.text.static_icons__default.rgba};
    min-width: 200px;
    cursor: pointer;
    background-color: white;

    :hover {
        opacity: 0.5;
    }
`;
