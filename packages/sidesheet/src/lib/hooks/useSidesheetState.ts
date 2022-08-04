import { useEffect, useState } from "react";
import { SidesheetController } from "../classes";

export function useSidesheetState<TItem>({onSidesheetStateChanged, isSidesheetOpen}: SidesheetController<TItem>){
    const [isOpen, setIsOpen] = useState<boolean>(isSidesheetOpen());


    useEffect(() =>{
        const { unSubscribe } = onSidesheetStateChanged(() => {
            setIsOpen(isSidesheetOpen())
        })
        return unSubscribe;
    },[isSidesheetOpen, onSidesheetStateChanged])


    return isOpen;
}