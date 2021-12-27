import styled from 'styled-components'
import { containerGradient, tertiararyColor } from 'styles/theme'

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
`

export const Controls = styled.div`
	padding: 1rem;
	width: 22vw;
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
	padding: 6px;
	background: ${containerGradient};
	border-radius: 1rem;
`

export const TreeItem = styled(Img)`
	width: 80px;
	height: 80px;
	background-size: contain;
	background-image: url(${(props) => require('/src/assets/tree/' + props.value + '.png')});
`

export const BgItem = styled(Img)`
	width: 40px;
	height: 40px;
	background-size: cover;
	background-image: url(${(props) => require('/src/assets/bg/' + props.value + '.jpg')});
	border: 1px solid ${tertiararyColor};
	border-radius: 4px;
`

export const ToyItem = styled(Img)`
	width: 50px;
	height: 50px;
	background-size: contain;
	background-image: url(${(props) => require('/src/assets/toys/' + props.value + '.png')});
`

export const BackgroundImg = styled(Img)`
	margin: 0 auto;
	width: 48vw;
	height: calc(100vh - 60px);
	background-image: url(${(props) => require('/src/assets/bg/' + props.value + '.jpg')});
`

export const TreeImg = styled(Img)`
	margin: 0 auto;
	transform: translateY(10%);
	width: 80%;
	height: 90%;
	background-size: contain;
	background-image: url(${(props) => require('/src/assets/tree/' + props.value + '.png')});
`

