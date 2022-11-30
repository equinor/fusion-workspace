import { Filter } from '@equinor/workspace-filter';
import { ReactNode } from 'react';
import { ActionBar } from './ActionBar';

type TabNavigationProps = {
	children?: ReactNode;
};

export function WorkspaceHeader(props: TabNavigationProps) {
	return (
		<div>
			<ActionBar children={props.children} />
			<Filter />
		</div>
	);
}
