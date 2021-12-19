import React, { ChangeEvent, ReactElement } from 'react'
import { SHAPES, COLORS, SIZES, SORT_BY } from './constants'
import FilterItem from './filterItem'
import { Form, Container, Title, FavoriteCheckbox, LabelCheckbox } from './styles'

interface Props {
	onChange: (e: ChangeEvent<HTMLFormElement>) => void
}

const ToyFilter = ({ onChange }: Props): ReactElement => (
	<Form onChange={onChange}>
		<Container>
			<Title>ФИЛЬТРЫ ПО ЗНАЧЕНИЮ</Title>
			<FilterItem title="Форма:" name="shape" data={SHAPES} />
			<FilterItem title="Цвет:" name="color" data={COLORS} />
			<FilterItem title="Размер:" name="size" data={SIZES} />
			<label htmlFor="favorite"> Только любимые:
				<FavoriteCheckbox id="favorite" name="favorite" />
			</label>
		</Container>
		
	</Form>
)

export default ToyFilter
