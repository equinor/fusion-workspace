import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PowerBiProps {}

const StyledPowerBi = styled.div`
    color: pink;
`;

export function PowerBi(props: PowerBiProps) {
    return (
        <StyledPowerBi>
            <h1>Welcome to PowerBi!</h1>
        </StyledPowerBi>
    );
}

export default PowerBi;
