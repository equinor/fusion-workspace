import { useControllerContext, useSidesheetTitle } from '../../hooks';
import { useIsSidesheetOpen } from '../../hooks/useIsSidesheetOpen';
import { useSidesheetWidth } from '../../hooks/useSidesheetWidth';
import { StyledResizable } from './resizableSidesheet.styles';
import { SidesheetHeader } from './SidesheetHeader';

export function ResizableSidesheet(): JSX.Element | null {
	const controller = useControllerContext();
	const isOpen = useIsSidesheetOpen();
	const title = useSidesheetTitle();
	const width = useSidesheetWidth();

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
			<div>
				<SidesheetHeader
					color={controller.appColor ?? 'white'}
					title={title ?? ''}
					close={() => controller.sidesheet.setIsOpen(false)}
				/>
				<Component />
			</div>
		</StyledResizable>
	);
}
