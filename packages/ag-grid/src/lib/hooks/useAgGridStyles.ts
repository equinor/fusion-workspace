import { makeStyles, createStyles } from '@mui/styles';
import { agGridStyles } from '../styles';

export const useAgGridStyles = makeStyles((theme) => createStyles(agGridStyles), {
	name: 'fusion-workspace-ag-grid-styles',
});
