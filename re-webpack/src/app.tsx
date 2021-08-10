import React, { FC, useEffect } from 'react'
import {  BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { nums, bigThanFive } from './testjs.js'
import Home from '@/pages/index'
import User from '@/pages/user'
import NotFound from '@/pages/404'



export default () => {
	
	return <div id="da">	
		<BrowserRouter>
			<div>
				<Link to="/home">home</Link> / 
				<Link to="/user">user</Link>
			</div>
			<Switch>
				<Route path="/home" >
					<Home />
				</Route>
				<Route path="/user" >
					<User />
				</Route>
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	</div>
}
