import { tokens } from "@equinor/eds-tokens";
import { Resizable } from "re-resizable";
import styled from "styled-components";
import { WorkspaceViewController } from "../../classes";
import { useIsSidesheetOpen } from "../../hooks/useIsSidesheetOpen";
import { useSidesheetWidth } from "../../hooks/useSidesheetWidth";

interface ResizableSidesheetProps<TabNames extends string, TError>{
    controller: WorkspaceViewController<TabNames, TError>
}
export function ResizableSidesheet<TabNames extends string, TError>({controller}: ResizableSidesheetProps<TabNames, TError>): JSX.Element | null{
    const isOpen = useIsSidesheetOpen(controller);
    const width = useSidesheetWidth(controller);

    const Component = controller.sidesheet.Component;
    if(!isOpen || !Component){
        return null;
    }
    const {minWidth, setWidth} = controller.sidesheet;

    return (
        <StyledResizable  
        size={{ width: width, height: '100%' }}
        maxWidth={'100vw'}
        onResizeStop={(ev, direction, ref, d) => {
            if (width + d.width < minWidth) {
                    setWidth(minWidth);
                } else {
                    setWidth(width + d.width);
                }
                }}>
            <Component />
        </StyledResizable>
    )
}


const StyledResizable = styled(Resizable)`
    border-left: 2px solid ${tokens.colors.ui.background__medium.hex};

`
