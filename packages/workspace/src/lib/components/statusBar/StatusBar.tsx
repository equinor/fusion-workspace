import { StatusItem } from "../../types";

interface StatusBarProps{
    items: StatusItem[];
}


/**
 * Status bar header component
 * @returns
 */
export function StatusBar({items}: StatusBarProps): JSX.Element | null {
    
   
    return (
        <div style={{display: "flex", gap: "2em"}}>
           {items?.map((s) => <div title={s.description} key={s.title}>
            <div>{s.title}</div>
            <div>{s.value}</div>
           </div>)}
        </div>
    );
}
