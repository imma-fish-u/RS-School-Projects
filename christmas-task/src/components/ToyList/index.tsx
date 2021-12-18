import React, { ReactElement, useState } from 'react'
import { Toy } from 'types'
import ToyCard from 'components/ToyCard'
import { List, ListItem } from './styles'
import useFilter from 'hooks/useFilter'
import { Filter } from 'components/Home/types'

interface Props {
	error?: string
	filter: Filter
	toys: Toy[]
}

const ToyList = ({ error, filter, toys }: Props): ReactElement => {
	const filteredToys = useFilter(filter, toys)

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
