import React from 'react';
import { Mermaid } from '../ReactMermaid3';

export function Dig(props: { chart: string }) {
	return <Mermaid chart={props.chart} />;
}

export default Dig;
