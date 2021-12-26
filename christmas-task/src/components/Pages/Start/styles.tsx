import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { secondaryColor } from 'styles/theme'

export const StyledLink = styled(Link)`
	width: 100%;
	display: inline-block;
	background-color: ${secondaryColor};
	border-radius: 4px;
	text-decoration: none;
`