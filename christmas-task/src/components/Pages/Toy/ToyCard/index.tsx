import React, { ChangeEvent, ReactElement } from 'react'
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
	onClick: (e: ChangeEvent<HTMLElement>) => void
}

const ToyCard = ({ content, onClick }: Props): ReactElement => {
	const { num, name, count, year, shape, color, size, favorite } = content
	const favoriteText = (favorite) ? 'да' : 'нет'

	return (
		<ToyBlock id={`toy-${num}`} onClick={onClick}>
			<Img alt={name} src={require(`/src/assets/toys/${num}.png`)} />
			<Details>
				<Title>{name}</Title>
				<Description className='quantity'>Количество: {count}</Description>
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
