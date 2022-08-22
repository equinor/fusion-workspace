import { WorkspaceController } from '../../classes';
import { useIsSidesheetOpen } from '../../hooks/useIsSidesheetOpen';
import { useSidesheetWidth } from '../../hooks/useSidesheetWidth';
import { StyledResizable } from './resizableSidesheet.styles';

interface ResizableSidesheetProps<TabNames extends string, TData, TOnClick, TContext, TError> {
	controller: WorkspaceController<TabNames, TData, TOnClick, TContext, TError>;
}
export function ResizableSidesheet<TabNames extends string, TData, TOnClick, TContext, TError>({
	controller,
}: ResizableSidesheetProps<TabNames, TData, TOnClick, TContext, TError>): JSX.Element | null {
	const isOpen = useIsSidesheetOpen(controller);
	const width = useSidesheetWidth(controller);

	const Component = controller.sidesheet.Component;
	if (!isOpen || !Component) {
		return null;
	}
	const {
		width: { setValue: setWidth },
	} = controller.sidesheet;

	const minWidth = controller.sidesheet.minWidth.value ?? 0;

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
