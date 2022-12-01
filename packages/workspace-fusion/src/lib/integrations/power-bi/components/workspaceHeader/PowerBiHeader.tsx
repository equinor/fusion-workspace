import { PageNavigation, PowerBiController } from '@equinor/workspace-powerbi';
import { FusionPowerBiFilter } from '../FusionPowerBIFilter';
import { TabNavigation } from '../../../common/components/TabNavigation';
import { StyledActionBar } from '../../../../components/Header/actionBar.styles';

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
