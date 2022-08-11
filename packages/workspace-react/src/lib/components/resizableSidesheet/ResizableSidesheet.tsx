import { WorkspaceViewController } from '../../classes';
import { useIsSidesheetOpen } from '../../hooks/useIsSidesheetOpen';
import { useSidesheetWidth } from '../../hooks/useSidesheetWidth';
import { StyledResizable } from './resizableSidesheet.styles';

interface ResizableSidesheetProps<TabNames extends string, TError> {
  controller: WorkspaceViewController<TabNames, TError>;
}
export function ResizableSidesheet<TabNames extends string, TError>({
  controller,
}: ResizableSidesheetProps<TabNames, TError>): JSX.Element | null {
  const isOpen = useIsSidesheetOpen(controller);
  const width = useSidesheetWidth(controller);

  const Component = controller.sidesheet.Component;
  if (!isOpen || !Component) {
    return null;
  }
  const { minWidth, setWidth } = controller.sidesheet;

  return (
    <StyledResizable
      size={{ width: width, height: '100%' }}
      maxWidth={'100vw'}
      onResizeStop={(_ev, _direction, _ref, d) => {
        if (width + d.width < minWidth) {
          setWidth(minWidth);
        } else {
          setWidth(width + d.width);
        }
      }}
    >
      <Component />
    </StyledResizable>
  );
}
