import { Garden, GardenController } from '@equinor/garden';
import styled from 'styled-components';

export const StyledGardenWrapper = styled.div`
	width: 100%;
`;
interface FusionGardenProps<TData, TCustomGroupByKeys, TCustomState, TContext> {
	controller: GardenController<TData, TCustomGroupByKeys, TCustomState, TContext>;
}
export const FusionGarden = <TData, TCustomGroupByKeys, TCustomState, TContext>({
	controller,
}: FusionGardenProps<TData, TCustomGroupByKeys, TCustomState, TContext>) => (
	<StyledGardenWrapper>
		<Garden controller={controller} />
	</StyledGardenWrapper>
);
