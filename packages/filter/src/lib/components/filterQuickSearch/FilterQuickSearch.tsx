import { Search } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import { useState } from 'react';
import styled from 'styled-components';
import { getPlaceholderText } from '../../utils/getPlaceholderText';
import { useFilterContext } from '../../hooks';
import { SearchPickerDropdown } from '../SearchPickerDropdown';

export type SearchMode = 'id/desc' | 'all';

export const FilterQuickSearch = (): JSX.Element => {
	const [searchText, setSearchText] = useState<string | undefined>();

	const { clearSearch, search, valueFormatters } = useFilterContext();

	const searchOptions = [];

	const [searchMode, setSearchMode] = useState<SearchMode>('id/desc');

	function handleClear(e) {
		if (!e.isTrusted) {
			setSearchText(undefined);
			clearSearch();
		}
	}
	function handleInput(e) {
		const { value } = e.target;
		if (!value) clearSearch();
		setSearchText(value);
	}
	function doSearch(value: string) {
		if (value === '') {
			clearSearch();
		} else {
			search({
				searchValue: value,
				searchIn: 'FilteredData',
				type: 'includes',
				valueFormatters: searchMode === 'all' ? [...valueFormatters, ...searchOptions] : searchOptions,
			});
		}
	}
	return (
		<>
			<SearchPickerDropdown
				menuItems={[
					{ title: 'All', onCLick: () => setSearchMode('all') },
					{ title: 'ID and title (default) ', onCLick: () => setSearchMode('id/desc') },
				]}
			/>
			<EdsSearch
				hasValue={Boolean(searchText)}
				size={200}
				onChange={handleClear}
				placeholder={getPlaceholderText(searchMode)}
				onInput={handleInput}
				value={searchText}
				onKeyPress={(e) => {
					if (e.key === 'Enter') {
						searchText && doSearch(searchText);
					}
				}}
			/>
		</>
	);
};

const EdsSearch = styled(Search)<{ hasValue: boolean }>`
	border: ${({ hasValue }) => (hasValue ? `1px solid ${tokens.colors.interactive.primary__resting.hex}` : 'none')};
`;
