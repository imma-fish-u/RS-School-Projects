import React, { FC, ReactElement } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Toy from 'components/Pages/Toy'
import GlobalStyles from 'components/GlobalStyles'

const App: FC = (): ReactElement => (
	<>
		<GlobalStyles />
		<BrowserRouter>
			<Switch>
				<Route path="/">
					<Toy />
				</Route>
			</Switch>
		</BrowserRouter>
	</>
)

export default App
