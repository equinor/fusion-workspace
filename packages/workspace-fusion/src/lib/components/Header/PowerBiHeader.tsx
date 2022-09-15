import { PageNavigation, PowerBiController } from '@equinor/powerbi';
import { FusionPowerBiFilter } from '../../utils/powerBI/FusionPowerBIFilter';
import { StyledActionBar } from './actionBar.styles';
import { TabNavigation } from './TabNavigation';

interface PowerBiHeaderProps {
	controller: PowerBiController;
}

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
