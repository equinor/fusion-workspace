import { tokens } from '@equinor/eds-tokens';

import styled from 'styled-components';

export const SubGroup = styled.div`
    width: calc(100% - 10px);
    margin-left: 10px;
    margin-bottom: 0px;
`;

export const Pack = styled.div`
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    margin: 0;
    align-items: center;
    margin-bottom: 4px;
    border: 1px solid ${tokens.colors.text.static_icons__tertiary.rgba};
    border-radius: 5px;
    color: ${tokens.colors.text.static_icons__default.rgba};
    min-width: 200px;
    cursor: pointer;

    :hover {
        opacity: 0.5;
    }
`;
