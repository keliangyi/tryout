class View {
	constructor(public root: Element, public model: Record<string, string | number>) {
		this.render()
	}

	bindEvents() {}

	template(): string {
		return `
            <div>
                <h1>title</h1>
            </div>
        `
	}

	render() {
		const tpl = document.createElement('template')
		tpl.innerHTML = this.template()
		this.root.append(tpl.content)
	}
}

const v1 = new View(document.getElementById('root')!, { name: 'maomao', age: 12 })
