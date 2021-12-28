import styled, { css, keyframes } from 'styled-components'
import { containerGradient, darkColor, tertiaryColor } from 'styles/theme'
import { breakpoints } from 'styles/breakpoints'
import { Position } from './types'

const redShadow = '#ff3c3c'
const red = '#ff3030'
const blue = '#24E0FF'
const blueShadow = '#3f8cff'
const yellow = '#ff0'
const yellowShadow = '#808002'
const green = '#ABFF00'
const greenShadow = '#304701'

export const Container = styled.div`
  margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(3, 1fr);

	@media (min-width: ${breakpoints.desktop}) {
		max-width: ${breakpoints.desktop};
	}
`

export const Controls = styled.div`
	padding: 1rem;
	max-width: 300px;

	@media (min-width: ${breakpoints.desktop}) {
		max-width: 340px;
	}
`

export const Button = styled.button`
	display: inline-block;
	width: 30px;
	height: 30px;
	margin: 10px;

	background-color: transparent;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center center;
	background-image: url(${(props) => require('/src/assets/svg/' + props.name + '.svg')});

	&:hover {
		filter: invert(9%) sepia(63%) saturate(461%) hue-rotate(
			322deg) brightness(83%) contrast(88%);
	}

	${(props) => {
		if (props.name === 'audio')
			if (props.playing) return css`filter: invert(9%) sepia(63%) saturate(461%) hue-rotate(
				322deg) brightness(83%) contrast(88%);`
			else return css`filter: none;`
	}}
`

export const Title = styled.p`
	color: white;
	font-size: 20px;
	text-transform: uppercase;
`

const Img = styled.div`
	background-repeat: no-repeat;
	background-position: center center;
`

export const MenuContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 4px;

	& * {
		cursor: pointer;
	}
`

export const BackgroundItem = styled.div`
	padding: 4px;
	min-width: 40px;
  min-height: 40px;
	background: ${containerGradient};
	border-radius: 1rem;
`

export const TreeItem = styled(Img)`
	width: 70px;
	height: 70px;
	background-size: contain;
	background-image: url(${(props) => require('/src/assets/tree/' + props.value + '.png')});
`

export const BgItem = styled(Img)`
	width: 45px;
	height: 45px;
	background-size: cover;
	background-image: url(${(props) => require('/src/assets/bg/' + props.value + '.jpg')});
	border: 1px solid ${tertiaryColor};
	border-radius: 4px;
`

export const GarlandItem = styled.button`
	margin: 6px;
	width: 24px;
	height: 24px;
	border-radius: 50%;

	&.multicolor-btn {
		background: linear-gradient(
	124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8);
		box-shadow: rgb(0 0 0 / 20%) 0 -1px 7px 1px, inset #441313 0 -1px 9px, #ccc 0 2px 12px;
	}

	&.red-btn {
    background-color: ${red};
    box-shadow: rgb(0 0 0 / 20%) 0 -1px 7px 1px, inset #441313 0 -1px 9px, ${redShadow} 0 2px 12px;
	}

	&.blue-btn {
    background-color: ${blue};
    box-shadow: rgb(0 0 0 / 20%) 0 -1px 7px 1px, inset #006 0 -1px 9px, ${blueShadow} 0 2px 14px;
	}

	&.yellow-btn {
    background-color: ${yellow};
    box-shadow: rgb(0 0 0 / 20%) 0 -1px 7px 1px, inset #808002 0 -1px 9px, ${yellowShadow} 0 2px 12px;
	}

	&.green-btn {
    background-color: ${green};
    box-shadow: rgb(0 0 0 / 20%) 0 -1px 7px 1px, inset #304701 0 -1px 9px, ${greenShadow} 0 2px 12px;
	}
`

export const ToyItem = styled.img`
	position: absolute;
	top: ${(props) => props.y || "initial"}px;
	left: ${(props) => props.x || "initial"}px;
	width: 40px;
	height: 40px;
	z-index: 10;
`

export const ToyTotal = styled.span`
	position: relative;
	float: right;
	padding: 3px 7px;
	font-size: 14px;
	color: ${darkColor};
	background-color: ${tertiaryColor};
	border-radius: 50%;
	z-index: 100;
`

export const BackgroundImg = styled(Img)`
	margin: 0 auto;
	width: 424px;
	height: calc(100vh - 60px);
	background-image: url(${(props) => require('/src/assets/bg/' + props.value + '.jpg')});

	@media (min-width: ${breakpoints.desktop}) {
		width: 524px;
	}
`

export const Garland = styled.ul`
	position: absolute;
	top: 130px;
	margin: 0 auto;
	height: 72vh;
	width: 417px;
	clip-path: polygon(55% 7%,106% 100%,20% 100%);
	z-index:10;
`

const glow = keyframes`
	0%, 100% {box-shadow: rgb(0 0 0 / 20%) 0 -1px 7px 1px, inset #441313 0 -1px 15px, ${redShadow} 0 2px 10px;}
	50% {box-shadow: rgb(0 0 0 / 50%) 0 -1px 7px 1px, inset #441313 0 -1px 2px, ${redShadow} 0 2px 18px;}
`;

export const Light = styled.li`
	position: absolute;
	transform: scale(.3);
	bottom: ${(props) => (props.y + props.value*10)}px;
	left: ${(props) => (40 + props.value*40)}px;

	display: block;
	width: 30px;
	height: 30px;
	background: ${(props) => props.color};
	border-radius: 100%;
  z-index: 10;

	transition-delay: .7s;
	animation: ${glow} 2s linear infinite;
`

export const TreeImg = styled.img`
	display: block;
	margin: 0 auto;
	transform: translateY(16%);
	width: 380px;
`

