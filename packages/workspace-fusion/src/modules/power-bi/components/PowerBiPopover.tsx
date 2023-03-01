import { info_circle } from '@equinor/eds-icons';
import { tokens } from '@equinor/eds-tokens';
import { CircularProgress, Icon, Popover } from '@equinor/eds-core-react';
import { useState, useRef, Suspense, MutableRefObject } from 'react';
import { createPortal } from 'react-dom';
import { ErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';
import { ReportMetaDataProps } from '../../../lib/integrations/power-bi';

Icon.add({ info_circle });

type MetaPopupProps = {
	reportUri: string;
	ReportMetaData: (p: ReportMetaDataProps) => JSX.Element;
	anchor: HTMLElement;
};
export const PowerBiPopover = ({ ReportMetaData, anchor, reportUri }: MetaPopupProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const pRef = useRef<HTMLElement | null>(null);

	return (
		<>
			<div ref={pRef as unknown as MutableRefObject<HTMLDivElement>}>
				<Icon
					color={tokens.colors.text.static_icons__tertiary.hex}
					onClick={() => setIsOpen((s) => !s)}
					name={info_circle.name}
				/>
			</div>
			{isOpen &&
				pRef.current &&
				createPortal(
					<ErrorBoundary
						FallbackComponent={() => (pRef.current ? <FallbackComponent anchorEl={pRef.current} /> : null)}
					>
						<Suspense fallback={<LoadingWrapper anchorEl={pRef.current} />}>
							<ReportMetaData
								close={() => setIsOpen(false)}
								anchor={pRef.current}
								reportUri={reportUri}
							/>
						</Suspense>
					</ErrorBoundary>,
					anchor
				)}
		</>
	);
};

const Loading = () => (
	<StyledLoading>
		<CircularProgress />
	</StyledLoading>
);

const StyledLoading = styled.div`
	height: 400px;
	width: 300px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

type FallbackComponentProps = {
	anchorEl: HTMLElement;
};

const FallbackComponent = ({ anchorEl }: FallbackComponentProps) => (
	<Popover open anchorEl={anchorEl}>
		<Popover.Content>Failed to load report information</Popover.Content>
	</Popover>
);

const LoadingWrapper = ({ anchorEl }: FallbackComponentProps) => (
	<Popover open anchorEl={anchorEl}>
		<Popover.Content>
			<Loading />
		</Popover.Content>
	</Popover>
);
