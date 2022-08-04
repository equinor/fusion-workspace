import { useEffect, useState } from "react";
import { SidesheetController } from "../classes";

export function useSidesheetItem<TItem>({item, onItemChanges}: SidesheetController<TItem>){
    const [sidesheetItem, setItem] = useState<TItem | undefined>(item);


    useEffect(() =>{
        const { unSubscribe } = onItemChanges(setItem)
        return unSubscribe;
    },[onItemChanges])


    return sidesheetItem;
}