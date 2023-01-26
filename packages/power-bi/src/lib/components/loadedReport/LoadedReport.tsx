import { useResizeObserver } from '../../hooks/useResizeObserver';
import { IReportEmbedConfiguration, Report } from 'powerbi-client';
import { PowerBIEmbed } from 'powerbi-client-react';
import { useRef } from 'react';
import styled from 'styled-components';
import { StyledReportRoot, StyledReportContainer } from '../powerbi.styles';

interface LoadedReportProps {
	config: IReportEmbedConfiguration;
	onReportReady?: (rep: Report) => void;
}
export const LoadedReport = ({ config, onReportReady }: LoadedReportProps) => {
	const ref = useRef<HTMLDivElement | null>(null);
	const [width] = useResizeObserver(ref);

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
							embedConfig={config}
							getEmbeddedComponent={(embed) => {
								embed.on('loaded', () => {
									onReportReady && onReportReady(embed as Report);
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
	height: 100%;
	width: 100%;

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
