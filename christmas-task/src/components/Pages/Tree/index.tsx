import useDraggable from 'hooks/useDraggable'
import React, { ReactElement, useState} from 'react'
import { TREE_TOTAL, BG_TOTAL, TOY_TOTAL } from './constants'
import { Button, MenuContainer, Title, BackgroundImg, TreeImg, Container, Controls, BackgroundItem, TreeItem, BgItem, ToyItem } from './styles'

interface Props {
	pickedCards: Array<number>
}

const Tree = ({ pickedCards }: Props): ReactElement => {
	const [background, setBackground] = useState<number>(1)
	const [christmasTree, setChristmasTree] = useState<number>(1)
	//const { position } = useDraggable(toyId)

	return (
		<Container>
			<Controls>
				<Button name="audio"></Button>
				<Button name="snowflake"></Button>
				<Title>Выберите ёлку</Title>
				<MenuContainer>
					{[...Array(TREE_TOTAL).keys()].map((el) => (
						<BackgroundItem>
							<TreeItem value={el + 1}></TreeItem>
						</BackgroundItem>
					))}
				</MenuContainer>
				<Title>Выберите фон</Title>
				<MenuContainer>
					{[...Array(BG_TOTAL).keys()].map((el) => (
						<BgItem value={el + 1}></BgItem>
					))}
				</MenuContainer>
			</Controls>
			<BackgroundImg value={background}>
				<TreeImg value={christmasTree}></TreeImg>
			</BackgroundImg>
			<Controls>
				<Title>Игрушки</Title>
				<MenuContainer>
					{[...Array(TOY_TOTAL).keys()].map((el) => (
						<BackgroundItem>
							<ToyItem value={el + 1}></ToyItem>
						</BackgroundItem>
					))}
				</MenuContainer>
			</Controls>
		</Container>
	)
}

export default Tree
