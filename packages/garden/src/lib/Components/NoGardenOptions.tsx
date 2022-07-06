import { Icon } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-top: 100px;
    height: '-webkit-fill-available';
    height: 50%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
`;
const Heading = styled.h1`
    color: ${tokens.colors.text.static_icons__tertiary.rgba};
    margin-bottom: 0;
`;

export const NoGardenOptions = (): JSX.Element => {
    return (
        <Wrapper>
            <Icon
                name={'warning_outlined'}
                color={tokens.colors.interactive.warning__resting.rgba}
                size={48}
            />
            <Heading>No garden options supplied!</Heading>
        </Wrapper>
    );
};
