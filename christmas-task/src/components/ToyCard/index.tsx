import React, { ReactElement } from 'react'
import { Toy } from 'types'
import {
	StyledLink,
	Img,
	Title,
	Details,
	Description,
	Favorite
} from './styles'

interface Props {
	content: Toy
}

const ToyCard = ({ content }: Props): ReactElement => {
	const { num, name, count, year, shape, color, size, favorite } = content
	const link = `/game/${num}`

	return (
		<StyledLink to={link}>
			<Img alt={name} src={`assets/toys/${num}.png`} />
			<Details>
				<Title>{name}</Title>
				<Description>Количество: {count}</Description>
				<Description>Год: {year}</Description>
				<Description>Форма: {shape}</Description>
				<Description>Цвет: {color}</Description>
				<Description>Размер: {size}</Description>
				<Favorite className="uim uim-star"></Favorite>
			</Details>
		</StyledLink>
	)
}

export default ToyCard
