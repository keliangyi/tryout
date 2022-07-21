interface sv {
	name: string
}

class Bind extends HTMLElement {
	constructor() {
		super()
		this.bindEvent()
	}
	private bindEvent() {
		const prototype = Object.getPrototypeOf(this)
		// console.log(this, prototype)
		const property = Object.getOwnPropertyNames(prototype)
		// console.log('property', property)
		property.forEach((key) => {
			//@ts-expect-error
			if (typeof this[key] === 'function') {
				//@ts-expect-error
				this[key] = this[key].bind(this)
			}
		})
	}
}
class HelloWebComponent extends Bind {
	shadow: ShadowRoot
	constructor() {
		super()
		this.shadow = this.attachShadow({ mode: 'open' })
	}

	connectedCallback() {
		this.render()
		this.shadow.querySelector('button')?.addEventListener('click', this.onClick)
	}
	tips = '提示文字'
	onClick() {
		console.log('this onclick', this, this.tips)
	}
	render() {
		this.shadow.innerHTML = `
            <div>
                <h1>hello WebComponent!</h1>
                <button>click</button>
            </div>
        `
	}
}

customElements.define('hello-web', HelloWebComponent)
