import useAudio from 'hooks/useAudio'
import useDraggable from 'hooks/useDraggable'
import React, { ChangeEvent, ReactElement, useState} from 'react'
import { PickedToy } from 'types'
import { TREE_TOTAL, BG_TOTAL, LIGHT_TOTAL, GARLAND_TOTAL, TOYS_DEFAULT, GARLAND_TYPES } from './constants'
import { Button, MenuContainer, Title, BackgroundImg, TreeImg, Container, Controls, BackgroundItem, TreeItem, BgItem, ToyItem, ToyItemCopy, ToyTotal, Garland, GarlandItem, Light } from './styles'
import { Position } from './types'

interface Props {
	pickedCards: PickedToy[]
}

const Tree = ({ pickedCards }: Props): ReactElement => {
	const [background, setBackground] = useState<number>(1)
	const [christmasTree, setChristmasTree] = useState<number>(1)
	const [garland, setGarland] = useState<string>(GARLAND_TYPES[0])
	const [activeToy, setActiveToy] = useState<string>('')
	const { position } = useDraggable(activeToy)
	const pickedToys: PickedToy[] = (pickedCards.length > 0) ? pickedCards : TOYS_DEFAULT
	const [playing, toggle] = useAudio();

	return (
		<Container>
			<Controls>
				<Button name="audio" onClick={toggle} value={playing}></Button>
				<Button name="snowflake"></Button>
				<Title>Выберите ёлку</Title>
				<MenuContainer>
					{[...Array(TREE_TOTAL).keys()].map((el: number) => (
						<BackgroundItem key={`tree-${el + 1}`} onClick={() => setChristmasTree(el + 1)}>
							<TreeItem value={el + 1}></TreeItem>
						</BackgroundItem>
					))}
				</MenuContainer>
				<Title>Выберите фон</Title>
				<MenuContainer>
					{[...Array(BG_TOTAL).keys()].map((el: number) => (
						<BgItem key={`bg-${el + 1}`} value={el + 1} onClick={() => setBackground(el + 1)}></BgItem>
					))}
				</MenuContainer>
				<Title>Выберите гирлянду</Title>
				<MenuContainer>
					{GARLAND_TYPES.map((el: string) => (
						<GarlandItem key={el} className={`${el}-btn`} onClick={() => setGarland(el)}></GarlandItem>
					))}
				</MenuContainer>
			</Controls>
			<BackgroundImg value={background}>
				<Garland color={garland}>
					{ [...Array(GARLAND_TOTAL).keys()].map((garland: number) => (
							[...Array(LIGHT_TOTAL).keys()].map((el: number) => (
								<Light key={`light-${el + 1}`} value={el} y={20 + garland * 60}></Light>
							))
						))
					}
				</Garland>
				<map name="tree-map">
					<area shape="poly" href="#" coords="365,699,189,706,113,683,31,608,2,555,2,539,18,437,73,351,106,224,161,134,243,-1,306,75,353,144,399,221,424,359,452,459,496,550,444,664" />
				</map>  
				<TreeImg useMap="#tree-map" src={require('/src/assets/tree/' + christmasTree + '.png')}></TreeImg>
			</BackgroundImg>
			<Controls>
				<Title>Игрушки</Title>
				<p>{position.x}</p>
				<p>{position.y}</p>
				<MenuContainer>
					{pickedToys.map((el: PickedToy) => (
						<BackgroundItem key={`picked-toy-${el.num}`} id={`picked-toy-${el.num}`} >
							{
								[...Array(el.count).keys()].map((toy: number) => (
									<ToyItem id={`picked-toy-${el.num}-${toy}`} x={position.x} y={position.y} src={require('/src/assets/toys/' + el.num + '.png')} active={activeToy} onMouseDown={() => setActiveToy(`picked-toy-${el.num}-${toy}`)}></ToyItem>
								))
							}
							<ToyTotal>{el.count}</ToyTotal>
						</BackgroundItem>
					))}
				</MenuContainer>
			</Controls>
		</Container>
	)
}

export default Tree
