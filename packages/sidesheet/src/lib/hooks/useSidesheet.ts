import { SidesheetController } from "../classes"
import { useSidesheetItem } from "./useSidesheetItem"
import { useSidesheetState } from "./useSidesheetState"

interface Sidesheet<TItem>{
    isOpen: boolean;
    item: TItem | undefined
}

export const useSidesheet = <T>(controller: SidesheetController<T, unknown>): Sidesheet<T> => ({isOpen: useSidesheetState(controller), item: useSidesheetItem(controller)})