import { BaseEvent } from '@equinor/workspace-core';
import { FusionMediator, WorkspaceSidesheets } from '../../../../types';
import { useState, useEffect, useCallback } from 'react';
import { createSidesheetEventKey, detailSidesheetEventKey, SidesheetSimple } from '../../sidesheet';
import styled from 'styled-components';

type SidesheetSimpleWrapperProps<
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
> = {
	mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>;
	config: SidesheetSimple<TData>;
};

type OpenSidesheet<TData extends Record<PropertyKey, unknown>> = {
	id: number;
	close: () => void;
	sidesheet: WorkspaceSidesheets<TData>;
};

export const SidesheetSimpleWrapper = <
	TData extends Record<PropertyKey, unknown>,
	TContext extends Record<PropertyKey, unknown> = never,
	TCustomSidesheetEvents extends BaseEvent = never
>({
	config,
	mediator,
}: SidesheetSimpleWrapperProps<TData, TContext, TCustomSidesheetEvents>) => {
	const [openSidesheets, setOpenSidesheets] = useState<OpenSidesheet<TData>[]>([]);
	const [activeSidesheet, setActiveSidesheet] = useState<number | undefined>(undefined);

	const handleSetter = useCallback(
		(ev: WorkspaceSidesheets<TData>) => {
			const id = Math.random() * 165;
			const close = () => {
				if (id === activeSidesheet) {
					setActiveSidesheet(openSidesheets[0]?.id);
				}
				setOpenSidesheets((s) => s.filter((s) => s.id !== id));
			};
			setOpenSidesheets((s) => [...s, { close, id, sidesheet: ev }]);
			setActiveSidesheet(id);
		},
		[openSidesheets, activeSidesheet]
	);

	useEffect(() => {
		const sub = mediator.sidesheetService.subscribeAll((ev) => {
			if (([detailSidesheetEventKey, createSidesheetEventKey] as string[]).includes(ev.type)) {
				handleSetter(ev as WorkspaceSidesheets<any>);
			} else {
				warnRenderUndefined(ev.type);
			}
		});
		return () => sub();
	}, [handleSetter]);

	if (!openSidesheets) return null;
	const GetCurrentSidesheet = () => {
		const ev = openSidesheets.find((s) => s.id === activeSidesheet);
		if (!ev) return null;
		const { sidesheet, close, id } = ev;
		switch (sidesheet.type) {
			case 'create_sidesheet': {
				if (!config.CreateSidesheet || sidesheet.type !== 'create_sidesheet') return null;
				return <config.CreateSidesheet controller={{ close }} />;
			}

			case 'details_sidesheet': {
				if (!config.DetailsSidesheet || sidesheet.type !== 'details_sidesheet') return null;

				return (
					<config.DetailsSidesheet
						controller={{ close }}
						item={sidesheet.props.item}
						id={sidesheet.props.id}
					/>
				);
			}
		}
	};
	return (
		<SidesheetRoot id="sidesheet-root">
			<SidesheetTabs id="sidesheet-tabs">
				{openSidesheets.map((s) => (
					<div>
						<Button isActive={activeSidesheet === s.id} key={s.id} onClick={() => setActiveSidesheet(s.id)}>
							{s.sidesheet.type === 'details_sidesheet' ? s.sidesheet.props.id : s.sidesheet.type}
						</Button>
						<Button isActive={false} onClick={() => s.close()}>
							X
						</Button>
					</div>
				))}
			</SidesheetTabs>
			<div id="sidesheet-content">
				<GetCurrentSidesheet />
			</div>
		</SidesheetRoot>
	);
};

const Button = styled.button<{ isActive: boolean }>`
	background: none;
	color: ${({ isActive }) => (isActive ? 'green' : 'none')};
	cursor: pointer;
`;

const SidesheetTabs = styled.div`
	display: flex;
	gap: 0.2em;
	height: 50px;
	overflow-x: auto;
`;

const SidesheetRoot = styled.div`
	display: flex;
	flex-direction: column;
	border: 2px solid red;
	width: 500px;
	overflow: hidden;
	height: 100%;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

const key: WorkspaceSidesheets<any>['type'] = 'details_sidesheet';

const isSelectionEvent = <T extends WorkspaceSidesheets<any>>(obj: WorkspaceSidesheets<any> | unknown): obj is T =>
	typeof obj === 'object' && obj?.['type'] === key;

const warnRenderUndefined = (name: string) =>
	console.warn(`Tried to render sidesheet of type: ${name} but no component was provided.`);
