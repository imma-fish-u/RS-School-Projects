import React, { ChangeEvent, ReactElement, useState, useCallback, useEffect } from 'react'
import useFetch from 'hooks/useFetch'
import ToyFilter from 'components/ToyFilter'
import ToyList from 'components/ToyList'
import withErrorBoundary from 'hoc/withErrorBoundary'
import { Filter, Sort } from 'components/Home/types'

const Home = (): ReactElement => {	
	const [filter, setFilter] = useState<Filter>({})
	const [filterElements, setFilterElements] = useState<NodeListOf<HTMLElement>>()
	const [sort, setSort] = useState<Sort>({})
	const { toys, error } = useFetch()
	let checkboxesInitial: NodeListOf<HTMLElement>

	useEffect(() => {
		checkboxesInitial = document.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLElement>
		setFilterElements(checkboxesInitial)
	}, [])

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

	const onFormChange = useCallback((event: ChangeEvent<HTMLFormElement>) => {
		const el = event.target as HTMLFormElement
		const parent = (el.parentNode as HTMLElement);
		 
		if (parent.className.includes('filter')) {
			setFilter((filter) => (setFilterState(filter, el)))
		} else if (el.id === 'sort') {
			const [field, rule] = el.value.split(' ')
			setSort(() => ({ 'rule': rule, 'field': field }))
		} else if (el.className.includes('reset')) {
			setFilter(() => ({}))
			setFilterElements(checkboxesInitial)
		}
	}, [])
	
	console.log(filter)
	console.log(sort)

	return (
		<main>
			<ToyFilter onChange={onFormChange} />
			<ToyList error={error} filter={filter} toys={toys} sort={sort}/>
		</main>
	)
}

export default withErrorBoundary(Home)


