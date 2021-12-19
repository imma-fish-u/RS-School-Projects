import React, { ChangeEvent, ReactElement, useState, useCallback, useEffect } from 'react'
import useFetch from 'hooks/useFetch'
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

		if (el.id === 'favorite') {
			return {...arr, [el.name]: el.checked}
		}
		
		if (el.checked) {
			(hasFilterType) ? 
				arr[el.name] += `&${el.value}` //add new value in existed filter
				: 
				arr[el.name] = el.value //add new filter
		} else {
			if ((arr[el.name] as string)?.includes('&')) {
				const re = new RegExp(`&?${el.value}`);
				arr[el.name] = (arr[el.name] as string)?.replace(re, '') //delete 1 value from filter with multiple values
			} else {
				delete arr[el.name] //delete filter (when it was only 1 value in it)
			}
		}

		return arr
	}

	const onFilterChange = useCallback((event: ChangeEvent<HTMLFormElement>) => {
		setFilter((filter) => (setFilterState(filter, event.target)))
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
