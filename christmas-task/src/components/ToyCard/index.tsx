import React, { ReactElement } from 'react'
import { Toy } from 'types'
import {
	ToyBlock,
	Img,
	Title,
	Details,
	Description
} from './styles'

interface Props {
	content: Toy
}

const ToyCard = ({ content }: Props): ReactElement => {
	const { num, name, count, year, shape, color, size, favorite } = content
	const favoriteText = (favorite) ? 'да' : 'нет'

	return (
		<ToyBlock>
			<Img alt={name} src={`assets/toys/${num}.png`} />
			<Details>
				<Title>{name}</Title>
				<Description>Количество: {count}</Description>
				<Description>Год: {year}</Description>
				<Description>Форма: {shape}</Description>
				<Description>Цвет: {color}</Description>
				<Description>Размер: {size}</Description>
				<Description>Любимая: {favoriteText}</Description>
			</Details>
		</ToyBlock>
	)
}

export default ToyCard
