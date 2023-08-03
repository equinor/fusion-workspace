import { useState } from 'react';
import { EdsSearch } from './filterQuickSearch.styles';
import { useFilterContext } from '../../context/filterContext';

export const FilterQuickSearch = (): JSX.Element => {
  const { setSearchText: triggerSearch, filterState } = useFilterContext();
  const [searchText, setSearchText] = useState<string | undefined>(filterState.search);

  function handleClear(e) {
    if (e.target.value.length === 0) {
      setSearchText('');
      triggerSearch('');
    }
  }

  function handleInput(e) {
    const { value } = e.target;
    if (!value) {
      setSearchText('');
      return;
    }
    setSearchText(value);
  }

  return (
    <>
      <EdsSearch
        hasValue={Boolean(searchText)}
        size={200}
        onChange={handleClear}
        placeholder={'Search for id or description'}
        onInput={handleInput}
        value={searchText}
        //used in integration tests
        id={'quick-filter-search'}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            /**
             * No cancellation token in ag grid
             * Enter press might be the best way to search
             */
            triggerSearch(searchText ?? '');
          }
        }}
      />
    </>
  );
};
