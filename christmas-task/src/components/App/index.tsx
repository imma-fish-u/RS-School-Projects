import React, { ChangeEvent, FC, ReactElement, useCallback, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GlobalStyles from 'components/GlobalStyles'
import Header from 'components/UI/Header/header'
import Start from 'components/Pages/Start'
import Toy from 'components/Pages/Toy'
import Tree from 'components/Pages/Tree'

const App: FC = (): ReactElement => {
	const [picked, setPicked] = useState<number>(0)
	const [pickedCards, setPickedCards] = useState<Array<number>>([])

	const setPickedState = (picked: number, el: HTMLElement): number => {
		const toyId = +el.id.slice(0, 4)

		if (!el.classList.contains('active')) {
			if (picked < 20) {
				picked++
				el.classList.add('active')
				setPickedCards((pickedCards) => ([...pickedCards, toyId]))
			} else {
				//slotMessage = 'Все слоты заполнены'
			}
		} else {
			picked--
			el.classList.remove('active')
			setPickedCards((pickedCards) => (pickedCards.splice(pickedCards.indexOf(toyId), 1)))
		}

		return picked;
	}

	const onCardClicked = useCallback((event: ChangeEvent<HTMLElement>) => {
		const el = event.currentTarget as HTMLElement
		if (el.localName === 'button') {
			setPicked((picked) => (setPickedState(picked, el)))
		}
	}, [])
	

	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Header picked={picked}/>
				<Switch>
					<Route path="/toy">
						<Toy onCardClicked={onCardClicked}/>
					</Route>
					<Route path="/tree">
						<Tree pickedCards={pickedCards}/>
					</Route>
					<Route path="/">
						<Start />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	)
}

export default App
