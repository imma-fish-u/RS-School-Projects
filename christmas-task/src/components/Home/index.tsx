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
	const filteredToys = useFilter(filter, toys)

	const onFilterChange = useCallback((event: ChangeEvent<HTMLFormElement>) => {
		setFilter(current => {
			const el = event.target;		
			const hasFilterType = Object.keys(current).includes(el.name)

			if (hasFilterType)  { //condition 2: at least 1 filter of this type is chosen 
				(el.checked) ? current[el.name] += `&${el.value}` : current[el.name]?.replace(el.value, '') //add new value : delete existed value 
			} else { //condition 1:  first filter of this type is chosen
				(el.checked) ? current[el.name] = el.value : delete current[el.name]
			}

			return current
		}) 
		console.log(filter)
		event.preventDefault()
	}, [])
	
	return (
		<main>
			<ToyFilter onChange={onFilterChange} />
			<ToyList error={error} toys={filteredToys} />
		</main>
	)
}

export default withErrorBoundary(Home)
