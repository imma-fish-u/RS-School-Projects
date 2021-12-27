import useDraggable from 'hooks/useDraggable'
import React, { ReactElement, useState} from 'react'
import { PickedToy } from 'types'
import { TREE_TOTAL, BG_TOTAL, TOYS_DEFAULT } from './constants'
import { Button, MenuContainer, Title, BackgroundImg, TreeImg, Container, Controls, BackgroundItem, TreeItem, BgItem, ToyItem, ToyTotal, ToyItemCopy } from './styles'

interface Props {
	pickedCards: PickedToy[]
}

const Tree = ({ pickedCards }: Props): ReactElement => {
	const [background, setBackground] = useState<number>(1)
	const [christmasTree, setChristmasTree] = useState<number>(1)
	const [activeToy, setActiveToy] = useState<string>('')
	const { position } = useDraggable(activeToy)
	const pickedToys: PickedToy[] = (pickedCards.length > 0) ? pickedCards : TOYS_DEFAULT

	const copyItem = (id: number) => {
		setActiveToy(`picked-toy-${id}`)
	}

	return (
		<Container>
			<Controls>
				<Button name="audio"></Button>
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
			</Controls>
			{/* <map name="tree-map">
				<area shape="poly" coords="365,699,189,706,113,683,31,608,2,555,2,539,18,437,73,351,106,224,161,134,243,-1,306,75,353,144,399,221,424,359,452,459,496,550,444,664" />
				{toysOnTrees}
			</map>  */}
			<BackgroundImg value={background}>
				<TreeImg value={christmasTree}></TreeImg>
			</BackgroundImg>
			<Controls>
				<Title>Игрушки</Title>
				<p>{position.x}</p>
				<MenuContainer>
					{pickedToys.map((el: PickedToy) => (
						<BackgroundItem key={`picked-toy-${el.num}`} id={`picked-toy-${el.num}`} > 
							<ToyItem value={el.num} active={activeToy} onMouseDown={() => copyItem(el.num)}></ToyItem>
							<ToyTotal>{el.count}</ToyTotal>
						</BackgroundItem>
					))}
				</MenuContainer>
			</Controls>
		</Container>
	)
}

export default Tree
