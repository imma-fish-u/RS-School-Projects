import React, { ReactElement} from 'react'
import { Container, Title, StyledLink } from './styles'

const Start = (): ReactElement => {

	return (
		<Container>
			<Title>Новогодняя игра «Наряди ёлку»</Title>
			<StyledLink to="/toy">Начать игру</StyledLink>
		</Container>
	)
}

export default Start