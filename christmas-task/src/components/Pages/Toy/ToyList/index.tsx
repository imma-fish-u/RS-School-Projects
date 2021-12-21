import React, { ChangeEvent, ReactElement} from 'react'
import { Toy } from 'types'
import ToyCard from 'components/Pages/Toy/ToyCard'
import { List, ListItem } from './styles'
import { useFilter, useSort } from 'hooks/useFilter'
import { Filter, Sort } from 'components/Pages/Toy/types'

interface Props {
	error?: string
	filter: Filter
	sort: Sort
	toys: Toy[]
	onClick: (e: ChangeEvent<HTMLElement>) => void
}

const ToyList = ({ onClick, error, filter, sort, toys }: Props): ReactElement => {
	const sortedToys: Toy[] = useSort(sort, toys)
	const filteredToys: Toy[] = useFilter(filter, sortedToys)

	if (error) {
		console.log(error)
		return <p>Unable to fetch toys</p>
	}
	if (!filteredToys?.length) {
		return <p>No toys available</p>
	}

	return (
		<List>
			{filteredToys.map(toy => (
				<ListItem key={toy.num}>
					<ToyCard content={toy} onClick={onClick}/>
				</ListItem>
			))}
		</List>
	)
}

export default ToyList
