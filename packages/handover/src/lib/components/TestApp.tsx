import React from 'react';
import { Grid, GridController } from '@equinor/workspace-ag-grid';

export function TestApp() {
	return <Grid controller={new GridController({} as any)} />;
}
