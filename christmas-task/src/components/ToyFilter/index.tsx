import React, { ChangeEvent, ReactElement } from 'react'
import { SHAPES, COLORS, SIZES, SORT_BY } from './constants'
import { Form, Container, ShapeCheckbox, Checkbox } from './styles'

interface Props {
	onChange: (e: ChangeEvent<HTMLFormElement>) => void
}

const ToyFilter = ({ onChange }: Props): ReactElement => (
	<Form onChange={onChange}>
		<Container>
			<p>Форма</p>
			{SHAPES.map(shapes => (
				<ShapeCheckbox key={shapes.value} backgroundImage={shapes.display}>
					<Checkbox name="shape" value={shapes.value}/>
				</ShapeCheckbox>
			))}
		</Container>
	</Form>
)

export default ToyFilter
