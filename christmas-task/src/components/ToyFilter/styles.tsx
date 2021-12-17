import styled from 'styled-components'
import { backgroundColor, secondaryTextColor } from 'styles/theme'
import { breakpoints } from 'styles/breakpoints'

export const Form = styled.form`
	display: flex;
	justify-content: space-between;
	max-width: 542px;
	padding: 0 16px;
	margin: 24px auto;
	color: ${secondaryTextColor};
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

export const Select = styled.select`
	width: 100%;
	margin-top: 8px;
	color: white;
	background-color: ${backgroundColor};
`

export const Checkbox = styled.input.attrs((props) => ({
	type: "checkbox",
	name: props.name
}))`
	display:none;
`
export const ShapeCheckbox = styled.label`
	width: 40px;
	height: 40px;
	margin: 10px 7px;
	border: 0;
	outline: 0;
	background-image: url(${props => props.backgroundImage});
	background-color: red;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center center;
	cursor: pointer;
	transition: .3s;
`

