import { FC, useEffect } from 'react';

const NotFound:FC = () => {
    useEffect(() => {
		const dynmic = () => {
			import(/* webpackChunkName : 'sbbb'*/'./desc').then(desc => {
				console.info(desc)
			})

			import('lodash').then(({ default: _ }) => {
				const element = document.createElement('div');

				element.innerHTML = _.join(['Hello', 'webpack', '松果出行'], ' ');
				console.info(_.join(['a', 'b', 'vc']))
				return element;
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