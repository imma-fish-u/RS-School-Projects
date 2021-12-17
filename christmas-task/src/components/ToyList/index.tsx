import React, { ReactElement, useState } from 'react'
import { Toy } from 'types'
import ToyCard from 'components/ToyCard'
import { List, ListItem } from './styles'

interface Props {
	error?: string
	toys: Toy[]
}

const ToyList = ({ error, toys }: Props): ReactElement => {
	if (error) {
		console.log(error)
		return <p>Unable to fetch toys</p>
	}
	if (!toys?.length) {
		return <p>No toys available</p>
	}

	return (
		<List>
			{toys.map(toy => (
				<ListItem key={toy.num}>
					<ToyCard content={toy} />
				</ListItem>
			))}
		</List>
	)
}

export default ToyList
