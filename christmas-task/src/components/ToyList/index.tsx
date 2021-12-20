import React, { ReactElement, useState } from 'react'
import { Toy } from 'types'
import ToyCard from 'components/ToyCard'
import { List, ListItem } from './styles'
import { useFilter, useSort } from 'hooks/useFilter'
import { Filter, Sort } from 'components/Home/types'

interface Props {
	error?: string
	filter: Filter
	sort: Sort
	toys: Toy[]
}

const ToyList = ({ error, filter, sort, toys }: Props): ReactElement => {
	const sortedToys: Toy[] = useSort(sort, toys)
	const filteredToys: Toy[] = useFilter(filter, sortedToys)

	if (error) {
		console.log(error)
		return <p>Unable to fetch toys</p>
	}
	if (!toys?.length) {
		return <p>No toys available</p>
	}

	return (
		<List>
			{filteredToys.map(toy => (
				<ListItem key={toy.num}>
					<ToyCard content={toy} />
				</ListItem>
			))}
		</List>
	)
}

export default ToyList
