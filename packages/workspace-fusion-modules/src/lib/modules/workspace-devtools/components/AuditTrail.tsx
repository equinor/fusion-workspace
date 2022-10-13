import { Chip, Icon, Typography } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import { report_bug } from '@equinor/eds-icons';
import { useState, useMemo, useEffect } from 'react';
import { fromEvent, filter, map } from 'rxjs';
import styled from 'styled-components';
import { Log } from './Log';
import { DevtoolsBug } from './DevtoolsBug';
import { ChangeEvent } from '@equinor/workspace-core';

Icon.add({ report_bug });

const audit$ = fromEvent(window, 'message').pipe(
	filter((ev) => (ev as MessageEvent)?.data?.type === 'audit'),
	map<Event, ChangeEvent>((s) => (s as MessageEvent).data)
);

export function AuditTrail() {
	const [isOpen, setIsOpen] = useState(false);
	const [ev, setEv] = useState<ChangeEvent[]>([]);
	const [target, setTarget] = useState<string | null>(null);

	const events = useMemo(
		() =>
			target
				? ev.filter((v) => v.target === target)
				: ev.filter((v, i, a) => a.map((s) => s.target).indexOf(v.target) === i),
		[target, ev]
	);

	useEffect(() => {
		const sub = audit$.subscribe((ev) =>
			setEv((s) => [...s, ev].sort((a, b) => (a.timestamp.getTime() > b.timestamp.getTime() ? -1 : 1)))
		);
		return () => sub.unsubscribe();
	}, []);

	if (!isOpen) {
		return <DevtoolsBug onClick={() => setIsOpen(true)} />;
	}

	return (
		<Wrapper>
			<Header>
				<Typography>Workspace devtools</Typography>
				<Icon
					name="close"
					color={tokens.colors.interactive.primary__resting.hex}
					onClick={() => setIsOpen(false)}
				/>
			</Header>
			<div style={{ display: 'flex', margin: '10px' }}>
				<Chip onClick={() => setTarget(null)}>Latest</Chip>
				{ev
					.map((ev) => ev.target)
					.filter((value, index, array) => array.indexOf(value) === index)
					.map((target) => (
						<Chip onClick={() => setTarget(target)} key={target}>
							{target}
						</Chip>
					))}
			</div>

			<Log events={events} />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: absolute;
	z-index: 2;
	bottom: 0;
	overflow: scroll;
	left: 0;
	width: 100%;
	height: auto;
	max-height: 600px;
	min-height: 200px;
	background-color: ${tokens.colors.ui.background__default.hex};
	border-top: 2px solid ${tokens.colors.ui.background__medium.hex};
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 5px;
`;
