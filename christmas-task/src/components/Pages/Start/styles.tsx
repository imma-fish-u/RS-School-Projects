import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { containerGradient, buttonGradient, tertiararyColor } from 'styles/theme'

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin: 0 auto;
	transform: translateY(50%);
	width: 35vw;
	height: 35vh;
	background: ${containerGradient};
	border-radius: 1rem;
`

export const Title = styled.p`
	color: white;
	font-size: 24px;
	text-align: center;
`

export const StyledLink = styled(Link)`
	padding: 1rem;
	display: inline-block;
	background: ${buttonGradient};
	border-radius: 1.5rem;

	&:hover {
		transform: scale(1.02);
		box-shadow: 2px 3px 6px ${tertiararyColor};
	}
`