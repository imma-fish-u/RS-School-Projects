import styled from 'styled-components'
import { containerGradient, secondaryColor, primaryTextColor } from 'styles/theme'
import { breakpoints } from 'styles/breakpoints'

export const Form = styled.form`
	display: flex;
	justify-content: space-between;
	max-width: 542px;
	padding: 0 16px;
	margin: 24px auto;
	font-size: 18px;
	color: ${primaryTextColor};
	box-sizing: border-box;

	@media (min-width: ${breakpoints.tablet}) {
		max-width: ${breakpoints.tablet};
	}

	@media (min-width: ${breakpoints.desktop}) {
		max-width: 1010px;
	}
`

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1rem 0;
	padding: 1rem;
	background: ${containerGradient};
	border-radius: 1rem;
`

export const Title = styled.p`
	font-size: 24px;
	text-transform: uppercase;
`

export const FilterContainer = styled.div`
	display: flex;
	align-items: center;
	column-gap: 1rem;
`

export const Select = styled.select`
	width: 100%;
	height: 34px;
	color: white;
	background-color: ${secondaryColor};
`

export const ButtonReset = styled.button`
	width: 100%;
	height: 40px;
	margin-top: 4rem;
	background-color: ${primaryTextColor};
	border-radius: 20px;
`

export const Checkbox = styled.input.attrs((props) => ({
	type: "checkbox",
	name: props.name
}))`
	display:none;

	&:checked + .shape,
	&:checked + .size {
		filter: invert(9%) sepia(63%) saturate(461%) hue-rotate(
			322deg) brightness(83%) contrast(88%);
	}

	&:checked + .color {
		width: 46px;
		height: 46px;
		border: 1px solid black;
	}
`

export const FavoriteCheckbox = styled.input.attrs(() => ({
	type: "checkbox",
}))`
	width: 20px;
	height: 20px;
	margin: 7px;
	cursor: pointer;
`

export const LabelCheckbox = styled.label`
	width: 40px;
	height: 40px;
	margin: 10px 7px;
	cursor: pointer;
	transition: .3s;

	&.shape,
	&.size { 
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center center;
	}

	&.shape {
		background-image: url(${props => 
			(props.display.includes('svg')) ? 
			require('/src/assets/svg/' + props.display)
			: 'none'});
	}

	&.color {
		background-color: ${props => props.display};
		border-radius: 4px;
	}

	&.size {
		background-image: url(${require('/src/assets/svg/ball.svg')}); 
		background-size: ${props => props.display};
	}

	&.size:first-of-type {
		width: 50px;
    height: 50px;
	}

	&.color:hover {
		width: 46px;
		height: 46px;
	}

	&.shape:hover,
	&.size:hover {
		filter: invert(9%) sepia(63%) saturate(461%) hue-rotate(
			322deg) brightness(83%) contrast(88%);
	}
`

