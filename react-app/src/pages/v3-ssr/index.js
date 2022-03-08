import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import About from './about'
import Article from './article'
import Home from './home'
// import './styles.css'

const SSR = () => {
    return (
        <>
            <h1 className="title">SSR</h1>
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
        </>
    )
}

export default SSR
