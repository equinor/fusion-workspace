import { useContext } from 'react';
import { GardenController } from '../Classes';
import { GardenViewContext, GardenViewProviderProps } from './ParkViewContext';

export function ParkViewProvider<T>({
    children,
    controller,
}: GardenViewProviderProps<T>): JSX.Element {
    return (
        <GardenViewContext.Provider value={controller as any}>
            {children}
        </GardenViewContext.Provider>
    );
}

export function useParkViewContext<T>(): GardenController<T> {
    const parkViewContext = useContext(GardenViewContext);

    return parkViewContext as GardenController<T>;
}
