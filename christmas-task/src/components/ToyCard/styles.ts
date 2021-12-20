import styled from 'styled-components'
import {
	containerGradient,
	secondaryColor,
	primaryTextColor,
	secondaryTextColor
} from 'styles/theme'
import { breakpoints } from 'styles/breakpoints'

export const ToyBlock = styled.button`
	width: 100%;
	display: inline-block;
	background: ${containerGradient};
	border-radius: 1rem;
	border: 0px;

	&.active {
		background: hsl(120deg 28% 27%);
		transform: scale(1.02);
	}
`

export const Img = styled.img`
	width: 50%;
`

export const Title = styled.h2`
	margin: 0;
	font-size: 24px;
	font-weight: 510;
	color: ${primaryTextColor};

	@media (min-width: ${breakpoints.tablet}) {
		overflow: hidden;
		text-overflow: ellipsis;
	}
`

export const Details = styled.div`
	padding: 20px;

	@media (min-width: ${breakpoints.tablet}) {
		white-space: nowrap;
	}
`

export const Description = styled.p`
	font-size: 1rem;
	color: ${secondaryTextColor};

	@media (min-width: ${breakpoints.tablet}) {
		overflow: hidden;
		text-overflow: ellipsis;
	}
`
