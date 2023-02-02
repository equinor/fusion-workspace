import { info_circle } from '@equinor/eds-icons';
import { tokens } from '@equinor/eds-tokens';
import { CircularProgress, Popover, Icon } from '@equinor/eds-core-react';
import { ReactNode, useState, useRef, Suspense } from 'react';
import { createPortal } from 'react-dom';
import { ErrorBoundary } from 'react-error-boundary';
Icon.add({ info_circle });

type MetaPopupProps = {
	children: ReactNode;
	anchor: HTMLElement;
};
export const MetaPopup = ({ children, anchor }: MetaPopupProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const pRef = useRef<HTMLDivElement | null>(null);

	return (
		<>
			<div ref={pRef}>
				<Icon
					color={tokens.colors.text.static_icons__tertiary.hex}
					onClick={() => setIsOpen((s) => !s)}
					name={info_circle.name}
				/>
			</div>
			{isOpen &&
				createPortal(
					<Popover placement="bottom" anchorEl={pRef.current} open={isOpen}>
						{/* TODO: Parse error */}
						<ErrorBoundary FallbackComponent={() => <div>Failed to load report info</div>}>
							<Suspense fallback={<Loading />}>{children}</Suspense>
						</ErrorBoundary>
					</Popover>,
					anchor
				)}
		</>
	);
};

const Loading = () => (
	<div style={{ height: '400px', width: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
		<CircularProgress />
	</div>
);
