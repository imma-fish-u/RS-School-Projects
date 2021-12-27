import useDraggable from 'hooks/useDraggable'
import React, { ReactElement, useState} from 'react'
import { TREE_TOTAL, BG_TOTAL, TOYS_DEFAULT } from './constants'
import { Button, MenuContainer, Title, BackgroundImg, TreeImg, Container, Controls, BackgroundItem, TreeItem, BgItem, ToyItem, ToyTotal } from './styles'
import { PickedToy } from './types'

interface Props {
	pickedCards: PickedToy
}

const Tree = ({ pickedCards }: Props): ReactElement => {
	const [background, setBackground] = useState<number>(1)
	const [christmasTree, setChristmasTree] = useState<number>(1)
	//const { position } = useDraggable(toyId)
	const pickedToys: PickedToy = (pickedCards.length > 0) ? pickedCards : TOYS_DEFAULT

	return (
		<Container>
			<Controls>
				<Button name="audio"></Button>
				<Button name="snowflake"></Button>
				<Title>Выберите ёлку</Title>
				<MenuContainer>
					{[...Array(TREE_TOTAL).keys()].map((el) => (
						<BackgroundItem key={`tree-${el + 1}`}>
							<TreeItem value={el + 1}></TreeItem>
						</BackgroundItem>
					))}
				</MenuContainer>
				<Title>Выберите фон</Title>
				<MenuContainer>
					{[...Array(BG_TOTAL).keys()].map((el) => (
						<BgItem key={`bg-${el + 1}`} value={el + 1}></BgItem>
					))}
				</MenuContainer>
			</Controls>
			<BackgroundImg value={background}>
				<TreeImg value={christmasTree}></TreeImg>
			</BackgroundImg>
			<Controls>
				<Title>Игрушки</Title>
				<MenuContainer>
					{pickedToys.map((el) => (
						<BackgroundItem key={`picked-toy-${el + 1}`}> 
							<ToyItem value={+el.num + 1}></ToyItem>
							<ToyTotal>{el.count}</ToyTotal>
						</BackgroundItem>
					))}
				</MenuContainer>
			</Controls>
		</Container>
	)
}

export default Tree
