import React, { ChangeEvent, ReactElement, useState, useCallback, useEffect } from 'react'
import useFetch from 'hooks/useFetch'
import useFilter from 'hooks/useFilter'
import ToyFilter from 'components/ToyFilter'
import ToyList from 'components/ToyList'
import withErrorBoundary from 'hoc/withErrorBoundary'
import { Filter } from 'components/Home/types'

const Home = (): ReactElement => {
	const [filter, setFilter] = useState<Filter>({})
	const { toys, error } = useFetch()

	const setFilterState = (filter: Filter, el: HTMLFormElement): Filter => {	
		const arr = {...filter} as Filter;
		const hasFilterType = Object.keys(arr).includes(el.name)

		if (hasFilterType)  { //condition 2: at least 1 filter of this type is chosen 
			(el.checked) ? arr[el.name] += `&${el.value}` : arr[el.name] = arr[el.name].replace(el.value, '') //add new value : delete existed value 
		} else { //condition 1:  first filter of this type is chosen
			(el.checked) ? arr[el.name] = el.value : delete arr[el.name]
		}

		return arr;
	}

	const onFilterChange = useCallback((event: ChangeEvent<HTMLFormElement>) => {
		setFilter((filter) => (setFilterState(filter, event.target)))
		/*setFilter(current => ({
			...current,
			[event.target.name]: event.target.value,
		}))*/
		event.preventDefault()
	}, [])
	
	console.log(filter)

	return (
		<main>
			<ToyFilter onChange={onFilterChange} />
			<ToyList error={error} filter={filter} toys={toys} />
		</main>
	)
}

export default withErrorBoundary(Home)
