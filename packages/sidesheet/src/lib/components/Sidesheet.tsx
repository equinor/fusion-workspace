import { DefaultError, SidesheetController } from '..';
import { useObservable } from '../hooks/useObservable';
import { SidesheetBanner } from './banner/SidesheetBanner';
import { ErrorBanner } from './error/ErrorBanner';
import { SidesheetHeader } from './header/Header';
import { SidesheetControllerContextProvider } from './provider/sidesheetControllerProvider';
import { SidesheetTabs } from './tabs/SidesheetTabs';

type SidesheetProps<TItem extends Record<PropertyKey, unknown>, TError extends DefaultError> = {
	controller: SidesheetController<TItem, TError>;
	itemId: string;
};

export function Sidesheet<TItem extends Record<PropertyKey, unknown>, TError extends DefaultError>({
	controller,
	itemId,
}: SidesheetProps<TItem, TError>): JSX.Element | null {
	const isOpen = useObservable(controller.isOpen$, controller.isOpen$.value);

	const config = useObservable(controller.config$, controller.config$.value);

	if (!isOpen || !config) return null;

	return (
		<div>
			<SidesheetControllerContextProvider controller={controller as any}>
				<SidesheetHeader />
				<ErrorBanner />
				<SidesheetBanner />
				<SidesheetTabs />
			</SidesheetControllerContextProvider>
		</div>
	);
}
