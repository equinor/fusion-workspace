import { InfoChip } from './filtersAppliedInfo.styles';

interface FiltersAppliedInfoProps {
	activeFilters: number;
}

export function FiltersAppliedInfo({ activeFilters }: FiltersAppliedInfoProps): JSX.Element | null {
	if (activeFilters <= 0) return null;

	return <InfoChip>+{activeFilters} other filters applied</InfoChip>;
}
