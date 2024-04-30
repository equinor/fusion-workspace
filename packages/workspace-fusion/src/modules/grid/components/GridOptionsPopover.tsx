import { Button, Icon, Popover, Progress } from '@equinor/eds-core-react';
import { close, more_vertical } from '@equinor/eds-icons';
import { tokens } from '@equinor/eds-tokens';
import { useMutation } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { DumpsterFireDialog } from '../../../lib/components/ErrorComponent';

Icon.add({ close, more_vertical });

type GridOptionsPopoverProps = {
  anchor: HTMLElement;
  filterState: any;
  excelExport?: (params: any) => Promise<void>;
};
export const GridOptionPopover = ({ anchor, excelExport, filterState }: GridOptionsPopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pRef = useRef(null);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  const { error, isPending, isError, mutateAsync } = useMutation({
    mutationKey: ['exportData'],
    mutationFn: async () => {
      if (!excelExport) {
        console.warn('No Excel export function found');
        return;
      }
      return await excelExport(filterState);
    },
  });

  const handleExportToExcel = () => {
    mutateAsync();
  };

  return (
    <>
      <Icon
        name="more_vertical"
        color={tokens.colors.interactive.primary__resting.hex}
        ref={pRef}
        onClick={() => setIsOpen((s) => !s)}
      />
      {createPortal(
        <Popover ref={popoverRef} open={isOpen} anchorEl={pRef.current}>
          <Popover.Header>
            <StyledPopoverHeaderLine>
              <Popover.Title>Grid Options</Popover.Title>
              <Icon
                name="close"
                color={tokens.colors.interactive.primary__resting.hex}
                onClick={() => setIsOpen(false)}
              />
            </StyledPopoverHeaderLine>
          </Popover.Header>
          <Popover.Content style={{ overflow: 'hidden' }}>
            <ButtonContainer>
              {isError && (
                <DumpsterFireDialog
                  text={
                    typeof error === 'string'
                      ? error
                      : 'We encountered an issue fetching the data. Please try again later.'
                  }
                />
              )}
              <ButtonButton
                disabled={excelExport == undefined}
                style={{ width: '130px', padding: '0px' }}
                onClick={!isPending ? handleExportToExcel : undefined}
              >
                {isPending ? <Progress.Dots color={'neutral'} /> : 'Export to Excel'}
              </ButtonButton>
            </ButtonContainer>
          </Popover.Content>
        </Popover>,
        anchor
      )}
    </>
  );
};

const StyledPopoverHeaderLine = styled.div`
  display: flex;
  width: 268px;
  justify-content: space-between;
  align-items: center;
`;

const ButtonButton = styled(Button)`
  & *:first-child {
    padding-top: 0px;
    padding-bottom: 0px;
  }
  padding: 0px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  width: 268px;
  justify-content: center;
`;
