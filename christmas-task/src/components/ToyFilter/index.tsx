import React, { ChangeEvent, ReactElement } from 'react'
import { SHAPES, COLORS, SIZES, SORT_BY } from './constants'
import FilterItem from './filterItem'
import { Form, Container, Title, FavoriteCheckbox, Select, Button } from './styles'

interface Props {
	onChange: (e: ChangeEvent<HTMLFormElement>) => void
}

const ToyFilter = ({ onChange }: Props): ReactElement => (
	<Form onChange={onChange}>
		<Container>
			<Title>Фильтры по значению</Title>
			<FilterItem title="Форма:" name="shape" data={SHAPES} />
			<FilterItem title="Цвет:" name="color" data={COLORS} />
			<FilterItem title="Размер:" name="size" data={SIZES} />
			<label htmlFor="favorite" className="filter"> Только любимые:
				<FavoriteCheckbox id="favorite" name="favorite" />
			</label>
		</Container>
		
		<Container>
			<Title>Сортировка</Title>
			<Select name="sort" id="sort">
				<option value="" disabled>Выбрать...</option>
				{SORT_BY.map((sort, i) => (
					<option key={`sort${i}`} value={`${sort.value} ${sort.rule}`}>
						{sort.display}
					</option>
				))}
			</Select>

			<Button type="reset" className="reset" onClick={onChange} on>Сбросить фильтры</Button>
		</Container>
	</Form>
)

export default ToyFilter
