import styled from 'styled-components'
import {
	tertiaryTextColor,
	containerGradient,
	primaryTextColor,
	secondaryTextColor,
	backgroundColor,
} from 'styles/theme'
import { breakpoints } from 'styles/breakpoints'

export const ToyBlock = styled.button`
	width: 100%;
	display: inline-block;
	background: ${containerGradient};
	border-radius: 1rem;
	border: 0px;
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

export const Favorite = styled.i`
	font-size: 1rem;
	margin-right: 8px;
`

export const Genre = styled.p`
	padding: 2px 4px;
	margin: 0 8px 0 0;
	border-radius: 4px;
	font-size: 12px;
	font-weight: bold;
	color: ${tertiaryTextColor};
	background-color: ${backgroundColor};
	float: right;
`