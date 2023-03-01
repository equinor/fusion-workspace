import { Dialog, Typography } from '@equinor/eds-core-react';

interface DumpsterFireDialogProps {
  title?: string;
  text: string;
  buttons: React.ReactElement[];
}

export function DumpsterFireDialog({
  text,
  title = 'Ooops, this is embarassing..',
  buttons,
}: DumpsterFireDialogProps): JSX.Element {
  return (
    <Dialog style={{ width: '600px' }} open={true}>
      <Dialog.Header>
        <Dialog.Title>{title}</Dialog.Title>
      </Dialog.Header>
      <Dialog.CustomContent>
        <Typography variant="body_short">{text}</Typography>
      </Dialog.CustomContent>
      <Dialog.Actions>
        <>
          {buttons.map((comp, i) => {
            const Component = () => comp;
            return <Component key={i} />;
          })}
        </>
      </Dialog.Actions>
    </Dialog>
  );
}
