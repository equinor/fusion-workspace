import styled from 'styled-components';

export const PopoverContainer = styled.div`
  white-space: nowrap;

  hr {
    border: 1px solid #dcdcdc;
  }

  h5 {
    margin-top: 0;
    margin-bottom: 0;
  }

  p {
    margin: 0;
    font-size: 12px;
  }
`;
export const ProjectTitle = styled.p`
  font-weight: bold;
`;
export const ProjectDescription = styled.p`
  word-break: break-word;
  white-space: break-spaces;
`;

export type CommStatusProps = {
  barColor: string;
  textColor: string;
};
export const CommStatus = styled.div<CommStatusProps>`
  display: flex;
  border-radius: 4px;
  font-size: 12px;
  height: 24px;
  padding: 4px 8px;
  margin-top: 16px;
  text-transform: capitalize;
  background: ${(p) => p.barColor};
  color: ${(p) => p.textColor};
  line-height: 24px;
  text-align: center;
  > strong:first-child {
    margin-right: 32px;
  }
  justify-content: space-between;
`;

export const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  padding-top: 10px;
`;

export const WarningContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row: 1;
  gap: 5px;
`;
export const WarningIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  > strong {
    font-size: 14px;
  }
`;
export const WarningText = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-self: flex-end;
  white-space: initial;

  > p {
    text-decoration: underline;
    font-size: 14px;
  }
`;
export const FlagUnsignedAction = styled.div`
  display: flex;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row: 1;
  justify-content: end;
  align-items: flex-start;
  gap: 5px;

  > p {
    text-decoration: underline;
    font-size: 14px;
  }
`;

export const Statuses = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8;

  > div {
    margin-right: 16px;

    &:last-child {
      margin: 0;
    }
  }
`;

type StatusProps = {
  color: string;
  width?: number;
  height?: number;
};
export const Status = styled.div<StatusProps>`
  width: ${(props) => (props?.width ? `${props.width}px` : '40px')};
  height: ${(props) => (props?.height ? `${props.height}px` : '24px')};
  display: flex;
  align-self: center;
  border: none;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  border-radius: 12px;
  background: ${(p) => p.color};
`;
