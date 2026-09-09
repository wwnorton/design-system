import React, { useMemo } from 'react';
import { XSSortControls } from '../XSSortControls/XSSortControls';
import { useSortingState } from './SortingContext';
import { useHeadersTextValue } from './HeadersContext';
import { useControlledOnSort } from './ControlledSortingContext';

export const XSSortControlsContainer = () => {
	const headers = useHeadersTextValue();

	const controlledOnSort = useControlledOnSort();
	const sortingState = useSortingState();

	const onChange = useMemo(() => {
		if (controlledOnSort) {
			return controlledOnSort;
		}

		if (sortingState) {
			return sortingState.setSort;
		}

		throw new Error('No SortingContext found.');
	}, [controlledOnSort, sortingState]);

	return <XSSortControls options={headers} onChange={onChange} />;
};
