import { PageNavigation, PowerBiController } from '@equinor/workspace-powerbi';
import { StyledActionBar } from '../../../../lib/components/Header/actionBar.styles';
import { TabNavigation } from '../../../../lib/integrations/common/components/TabNavigation';
import { FusionPowerBiFilter } from '../FusionPowerBIFilter';

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
