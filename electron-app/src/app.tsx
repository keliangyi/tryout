import * as React from 'react'
import * as ReactDOM from 'react-dom'


const App: React.FC = () => {

    const [ count, setCount ] = React.useState(0)


 
	return <>
        <h1>hello from react !</h1>
        <h4>{ count }s</h4>
        <button onClick={() => setCount(count + 1)}>
            +1s 
        </button>
    </>
}

function render() {
	ReactDOM.render(<App />, document.getElementById('root'))
}

render()
