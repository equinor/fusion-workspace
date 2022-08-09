import { WorkspaceViewController } from "../classes/workspaceViewController";
import { WorkspaceBody } from "./workspaceBody";
import { WorkspaceHeader } from "./workspaceHeader";



export interface WorkspaceProps<TTabName extends string, TError>{
  controller: WorkspaceViewController<TTabName, TError>

}


export function Workspace<TTabNames extends string, TError>({controller}: WorkspaceProps<TTabNames, TError>){
   

    return (
        <div>
            <WorkspaceHeader controller={controller} />
            <WorkspaceBody controller={controller} />
        </div>
    )
}