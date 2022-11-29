import { PowerBIEmbed } from 'powerbi-client-react';
import { PowerBiController } from '../classes';
import { useRef } from 'react';
import { Report } from 'powerbi-client';
import { Loading } from './loading';
import { useIsReady } from '../hooks';
import { useResizeObserver } from '../hooks/useResizeObserver';
import { StyledReportContainer, StyledReportRoot } from './powerbi.styles';
import styled from 'styled-components';
import { chevron_down, chevron_up } from '@equinor/eds-icons';
import { Icon } from '@equinor/eds-core-react';
Icon.add({ chevron_down, chevron_up });
interface PowerBiProps {
	controller: PowerBiController;
}
export function PowerBI({ controller }: PowerBiProps) {
	const isReady = useIsReady(controller);

	if (!isReady) return <Loading />;

	return <LoadedReport controller={controller} />;
}

interface LoadedReportProps {
	controller: PowerBiController;
}
export const LoadedReport = ({ controller }: LoadedReportProps) => {
	const ref = useRef<HTMLDivElement | null>(null);
	const [width] = useResizeObserver(ref);
	if (!controller.config) throw new Error('IsReady is true but embed config is undefined');
	/**
	 * TODO: Hooks for applying state while mounted
	 */

	return (
		<StyledReportRoot ref={ref}>
			<StyledReportContainer>
				<div style={{ height: `${0.41 * width}px` }}>
					<PowerBiWrapper>
						<PowerBIEmbed
							cssClassName="pbiEmbed"
							embedConfig={controller.config}
							getEmbeddedComponent={(embed) => {
								embed.on('loaded', () => {
									controller.reportReady(embed as Report);
								});
							}}
						/>
					</PowerBiWrapper>
				</div>
			</StyledReportContainer>
		</StyledReportRoot>
	);
};

const PowerBiWrapper = styled.div.attrs({
	className: 'pbiEmbed',
})`
	.pbiEmbed {
		height: 100%;
		width: 100%;
	}

	.pbiEmbed > iframe {
		border: 0;
		width: 100%;
		height: 100%;
	}
`;
