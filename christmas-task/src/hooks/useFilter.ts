import { useMemo } from 'react'
import { Toy } from 'types'
import { Filter, Sort } from 'components/Home/types'
import { SortBy } from 'components/ToyFilter/types'

export const useSort = (sort: Sort, toys: Toy[]) => {

	const sortToys = useMemo(() => {
		switch (sort.rule) {
			case SortBy.stringASC: return [...toys].sort((a,b) => a[sort.field].localeCompare(b[sort.field]));
			case SortBy.stringDESC: return [...toys].sort((b,a) => a[sort.field].localeCompare(b[sort.field]));
			case SortBy.numberASC: return [...toys].sort((a,b) => a[sort.field] - b[sort.field]);
			case SortBy.numberDESC: return [...toys].sort((b,a) => a[sort.field] - b[sort.field]);
			default: return [...toys];
		}
	}, [sort, toys])

	return sortToys;
}

export const useFilter = (filter: Filter, toys: Toy[]) => {
	let filteredToys = toys;

  const memoFiltered = useMemo(() => {

		Object.entries(filter).forEach(([key, value]) => {
			if (typeof value === 'string') {
				const values = value?.split('&')
				filteredToys = filteredToys.filter(toy => values?.includes(toy[key]))
			} else if (typeof value === 'boolean') {
				filteredToys = filteredToys.filter(toy => value === toy[key])
			}
		})
		return filteredToys;
	}, [filter, toys])

  return memoFiltered
}

//export default useFilter