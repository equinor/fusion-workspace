import { Checkbox } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';

export const AllCheckbox = styled(Checkbox)`
    padding-left: 0.5rem !important;
`;

export const FilterItemName = styled.span`
    cursor: pointer;
    font-size: 13px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export const Count = styled.span`
    font-size: 10px;
    margin-left: 0.5em;
    margin-right: 0.5em;
`;

export const FilterItemWrap = styled.div`
    grid-template-columns: auto 1fr auto;
    display: grid;
    max-width: 500px;
    align-items: center;
    padding-top: 2px;
    padding-bottom: 2px;
    > span {
        padding: 0px;

        > svg {
            width: 18px;
            height: 18px;
        }

        :first-child {
            padding-right: 2px;
        }
    }
    :hover {
        background-color: ${tokens.colors.interactive.primary__selected_hover.rgba};
    }
`;
