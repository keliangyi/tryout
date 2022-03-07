import React, { FC } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import About from './about'
import Article from './article'
import Home from './home'

const SSR: FC = () => {
	return (
		<BrowserRouter>
			<h1>SSR</h1>
			<ul>
				<li>
					<Link to="/">home</Link>
				</li>
				<li>
					<Link to="/about">about</Link>
				</li>
				<li>
					<Link to="/article">article</Link>
				</li>
			</ul>

			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/about" exact>
					<About />
				</Route>
				<Route path="/article" exact>
					<Article />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default SSR
