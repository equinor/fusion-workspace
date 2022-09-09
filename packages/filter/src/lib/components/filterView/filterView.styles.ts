import { Button } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';

export const Wrapper = styled.section`
    display: flex;
    flex-direction: row;
    height: 200px;

    background-color: ${tokens.colors.ui.background__light.rgba};
    border-bottom: 1.5px solid ${tokens.colors.ui.background__medium.rgba};
    transition: height 0.35s ease;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    animation-duration: 0.5s;
    animation-name: fadeIn;
`;

export const FilterSelect = styled.div`
    display: flex;
    flex-direction: column;
    min-width: fit-content;
    margin: 0rem 0.5rem 0rem 0.5rem;
    padding-right: 0.5rem;
    overflow: hidden;
    border-right: 2px solid ${tokens.colors.ui.background__medium.rgba};

    label {
        padding: 0;
        span {
            font-size: 14px;
            padding: 0;
            :last-child {
                padding-right: 0.5rem;
            }
        }
        svg {
            height: 16px;
            width: 16px;
        }
    }
`;
export const FilterGroups = styled.div`
    display: flex;
    flex-direction: row;
    overflow-y: hidden;
    overflow-x: scroll;
    width: -webkit-fill-available;
    background-color: ${tokens.colors.ui.background__light.rgba};

    ::-webkit-scrollbar {
        height: 0.3rem;
    }
`;

export const FilterGroupWrapper = styled.div``;

export const SearchFilterWrapper = styled.div`
    overflow-x: scroll;
    height: -webkit-fill-available;

    ::-webkit-scrollbar {
        width: 0.3rem;
    }
`;

export const SelectBar = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${tokens.colors.ui.background__light.rgba};
    border-right: 2px solid ${tokens.colors.ui.background__medium.rgba};
`;

export const AddButton = styled(Button)`
    width: 36px;
    height: 36px;
`;
export const SearchButton = styled(Button)`
    width: 36px;
    height: 36px;
`;

export const FilterSelectHeaderGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
