import { useEffect, useState } from "react";
import { GridController } from "../classes";

export function useRowData<TData>(controller: GridController<TData>){
    const [rowData, setRowData] = useState(controller.rowData);

    useEffect(() => {
        const {unsubscribe: unSubscribe} = controller.onRowDataChanged(setRowData);
        return unSubscribe
    },[controller])

    return rowData;

}