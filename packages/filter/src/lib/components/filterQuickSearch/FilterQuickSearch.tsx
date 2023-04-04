import { useState } from 'react';
import { getPlaceholderText } from '../../utils/getPlaceholderText';
import { SearchPickerDropdown } from '../searchPickerDropdown/SearchPickerDropdown';
import { EdsSearch } from './filterQuickSearch.styles';

export type SearchMode = 'id/desc' | 'all';

export const FilterQuickSearch = (): JSX.Element => {
  const [searchText, setSearchText] = useState<string | undefined>();

  // const searchOptions = [];

  // const [searchMode, setSearchMode] = useState<SearchMode>(searchOptions.length ? 'id/desc' : 'all');

  // function handleClear(e) {
  //   if (!e.isTrusted) {
  //     setSearchText(undefined);
  //     clearSearch();
  //   }
  // }
  // function handleInput(e) {
  //   const { value } = e.target;
  //   if (!value) clearSearch();
  //   setSearchText(value);
  // }
  // function doSearch(value: string) {
  //   if (value === '') {
  //     clearSearch();
  //   } else {
  //     search({
  //       searchValue: value,
  //       searchIn: 'FilteredData',
  //       type: 'includes',
  //       valueFormatters: searchMode === 'all' ? [...valueFormatters, ...searchOptions] : searchOptions,
  //     });
  //   }
  // }
  //TODO: a
  return <></>;
  // return (
  //   <>
  //     {!!searchOptions.length && (
  //       <SearchPickerDropdown
  //         menuItems={[
  //           { title: 'All', onCLick: () => setSearchMode('all') },
  //           { title: 'ID and title (default) ', onCLick: () => setSearchMode('id/desc') },
  //         ]}
  //       />
  //     )}

  //     <EdsSearch
  //       hasValue={Boolean(searchText)}
  //       size={200}
  //       onChange={handleClear}
  //       placeholder={getPlaceholderText(searchMode)}
  //       onInput={handleInput}
  //       value={searchText}
  //       onKeyPress={(e) => {
  //         if (e.key === 'Enter') {
  //           searchText && doSearch(searchText);
  //         }
  //       }}
  //     />
  //   </>
  // );
};
