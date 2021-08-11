import { FC, useEffect } from 'react';

const NotFound:FC = () => {
    useEffect(() => {
		const dynmic = () => {
			import(/* webpackChunkName : 'sbbb'*/'./desc').then(desc => {
				console.info(desc)
			})
		}
		dynmic()
		
	},[])
    return <div>
        <h1>404</h1>
        <p>
            page NotFound !!
        </p>
    </div>
}

export default NotFound