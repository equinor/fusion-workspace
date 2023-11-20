import styled from 'styled-components';

export const Skeleton = styled.div<{ height: number; width: number }>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  cursor: progress;
  background: linear-gradient(0.25turn, transparent, #fff, transparent), linear-gradient(#eee, #eee);
  background-repeat: no-repeat;
  background-size:
    315px 250px,
    315px 180px,
    100px 100px,
    225px 30px;
  background-position:
    -315px 0,
    0 0,
    0px 190px,
    50px 195px;
  border-radius: 5px;
  animation: loading 1.5s infinite;
  @keyframes loading {
    to {
      background-position:
        315px 0,
        0 0,
        0 190px,
        50px 195px;
    }
  }
`;
