import { Frame } from '@equinor/workspace-sidesheet';
import { render as HandoverSidesheet, HandoverProps } from './HandoverSidesheet';
import { render as ScopeChangeSidesheet, ScopeChangeProps } from './ScopeChangeSidesheet';
import { render as WorkorderSidesheet, WorkOrderProps } from './WorkorderSidesheet';

export const sidesheets = {
	handover: (props: HandoverProps) => (el: HTMLDivElement, frame: Frame) => HandoverSidesheet({ el, props, frame }),
	workorder: (props: WorkOrderProps) => (el: HTMLDivElement, frame: Frame) =>
		WorkorderSidesheet({ el, props, frame }),
	scopechange: (props: ScopeChangeProps) => (el: HTMLDivElement, frame: Frame) =>
		ScopeChangeSidesheet({ el, props, frame }),
};
