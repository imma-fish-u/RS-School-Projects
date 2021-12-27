import React, { ChangeEvent, FC, ReactElement, useCallback, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GlobalStyles from 'components/GlobalStyles'
import Header from 'components/UI/Header/header'
import Start from 'components/Pages/Start'
import Toy from 'components/Pages/Toy'
import Tree from 'components/Pages/Tree'
import { PickedToy } from 'types'

const App: FC = (): ReactElement => {
	const [picked, setPicked] = useState<number>(0)
	const [pickedCards, setPickedCards] = useState<PickedToy[]>([])

	const setPickedState = (picked: number, el: HTMLElement): number => {
		const toyNum = +el.id.slice(4)
		const toyCount = +(el.querySelector('.quantity')?.childNodes[1] as Text).data;

		if (!el.classList.contains('active')) {
			if (picked < 20) {
				picked++
				el.classList.add('active')
				setPickedCards((pickedCards) => ([...pickedCards, { num: toyNum, count: toyCount }]))
			} 
		} else {
			picked--
			el.classList.remove('active')
			setPickedCards((pickedCards) => (pickedCards.filter(el => el.num !== toyNum)))
		}

		return picked;
	}

	const onCardClicked = useCallback((event: ChangeEvent<HTMLElement>) => {
		const el = event.currentTarget as HTMLElement
		console.log(el)
		if (el.localName === 'button') {
			setPicked((picked) => (setPickedState(picked, el)))
		}
	}, [])

	console.log(pickedCards)
	
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
