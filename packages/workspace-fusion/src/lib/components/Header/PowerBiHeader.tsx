import { PageNavigation, PowerBiController } from '@equinor/workspace-powerbi';
import { FusionPowerBiFilter } from '../../utils/powerBI/FusionPowerBIFilter';
import { TabNavigation } from '../TabNavigation';
import { StyledActionBar } from './actionBar.styles';

type PowerBiHeaderProps = {
	controller: PowerBiController;
};

export function PowerBiHeader({ controller }: PowerBiHeaderProps) {
	return (
		<div>
			<StyledActionBar>
				<PageNavigation controller={controller} />
				<TabNavigation />
			</StyledActionBar>
			<FusionPowerBiFilter controller={controller} />
		</div>
	);
}
