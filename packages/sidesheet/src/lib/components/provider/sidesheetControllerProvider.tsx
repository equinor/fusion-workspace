import { createContext, ReactNode, useContext } from 'react';
import { DefaultError, SidesheetController } from '../../types';
type SidesheetControllerContextProviderProps = {
	children: ReactNode;
	controller: SidesheetController<Record<PropertyKey, unknown>, DefaultError>;
};
export function SidesheetControllerContextProvider({ children, controller }: SidesheetControllerContextProviderProps) {
	return <SidesheetContext.Provider value={controller}>{children}</SidesheetContext.Provider>;
}

export const SidesheetContext = createContext({} as SidesheetController<Record<PropertyKey, unknown>, DefaultError>);

export const useSidesheet = () => useContext(SidesheetContext);
