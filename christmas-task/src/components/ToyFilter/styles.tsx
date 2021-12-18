import styled from 'styled-components'
import { primaryColor, primaryTextColor } from 'styles/theme'
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
	align-items: center;
	column-gap: 1rem;
`

export const LabelSelect = styled.label`
	display: inline-block;
	margin-right: 16px;
	flex-basis: 25%;

	&:last-of-type {
		margin-right: 0;
	}
`

// export const Select = styled.select`
// 	width: 100%;
// 	margin-top: 8px;
// 	color: white;
// 	background-color: ${backgroundColor};
// `

export const Checkbox = styled.input.attrs((props) => ({
	type: "checkbox",
	name: props.name
}))`
	display:none;

	&:checked + .checkboxLabel {
		filter: invert(9%) sepia(63%) saturate(461%) hue-rotate(
			322deg) brightness(83%) contrast(88%);
	}
`
export const ShapeCheckbox = styled.label`
	width: 40px;
	height: 40px;
	margin: 10px 7px;
	background-image: url(${props => require('/src/assets/svg/' + props.backgroundImage)});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center center;
	cursor: pointer;
	transition: .3s;

	&:hover {
		filter: invert(9%) sepia(63%) saturate(461%) hue-rotate(
			322deg) brightness(83%) contrast(88%);
	}
`

