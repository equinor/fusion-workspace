import React from 'react';
import { Mermaid } from 'react-mermaid3';

export function Dig(props: { chart: string }) {
  return <Mermaid chart={props.chart} />;
}

export default Dig;
