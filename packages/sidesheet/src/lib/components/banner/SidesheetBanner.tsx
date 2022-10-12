import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';
import { useSidesheet } from '../../hooks';
import { useObservable } from '../../hooks/useObservable';

export function SidesheetBanner(): JSX.Element {
	const { subHeadings$ } = useSidesheet();

	const subHeadings = useObservable(subHeadings$);

	return (
		<Banner padding={'0em 1.7em'}>
			{subHeadings?.map((s) => (
				<BannerItem key={s.title} title={s.title} value={s.value} />
			))}
		</Banner>
	);
}

export const Banner = styled.div<{ padding?: string }>`
	height: 76px;
	width: 100%;
	background-color: ${tokens.colors.ui.background__light.hex};
	display: flex;
	flex-direction: row;
	gap: 5rem;
	padding: ${({ padding = 0 }) => `${padding}`};
	align-items: center;
`;

type BannerItemProps = {
	title: string | number;
	value: string | number | JSX.Element;
};

export function BannerItem({ title, value }: BannerItemProps): JSX.Element {
	return (
		<div>
			<BannerItemTitle>{title}</BannerItemTitle>
			<BannerItemValue>{value}</BannerItemValue>
		</div>
	);
}

const BannerItemTitle = styled.div`
	font-size: 12px;
	line-height: 16px;
	font-weight: 500;
	color: ${tokens.colors.text.static_icons__tertiary.hex};
`;

const BannerItemValue = styled.div`
	font-size: 16px;
	line-height: 24px;
	font-weight: 400;
	color: ${tokens.colors.text.static_icons__default.hex};
	min-height: 24px;
`;
