import { FC, useEffect, Suspense, lazy } from 'react'
import {  BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { nums, bigThanFive } from './testjs.js'
import Home from '@/pages/index'
import User from '@/pages/user'
import NotFound from '@/pages/404'



// const AsyncImport:FC<{ path:string }> = ({ path })r => {
// 	const H1 = lazy(() => import('@/pages/index'))
// 	return <>
// 		<H1 />
// 	</>
// }


const H1 = lazy(() => import('@/pages/index'))
	const U1 = lazy(() => import('@/pages/user'))
	const Pw = lazy(() => import('@/pages/user/password'))

export default () => {

	useEffect(() => {
		import(/* webpackChunkName : 'sbbb'*/'./pages/desc').then(desc => {
			console.info(desc)
		})
	},[])
	
	return <Suspense fallback={<div><h1>loading...</h1></div>}>	
		<BrowserRouter>
			<div>
				<Link to="/home">home</Link> / 
				<Link to="/user">user</Link>
			</div>
			<Switch>
				<Route path={['/','/home']} exact>
					<H1 />
				</Route>
				<Route path="/user" exact>
					<U1 />
				</Route>
				<Route path="/ps" exact component={Pw} />
				<Route path="/404" component={NotFound} exact />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	</Suspense>
}
