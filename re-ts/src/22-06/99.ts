const nine = () => {
	const body = document.body
	const wrapper = document.createElement('div')
	wrapper.style.display = 'grid'
	wrapper.style.gridTemplateColumns = 'repeat(9, 160px)'
	wrapper.style.gridTemplateRows = 'repeat(9, 60px)'
	const fragment = document.createDocumentFragment()
	for (let i = 1; i <= 9; i++) {
		for (let j = 1; j <= 9; j++) {
			const box = document.createElement('div')
			box.style.display = 'flex'
			box.style.alignItems = 'center'
			box.style.justifyContent = 'center'
			if (j >= i) {
				box.style.border = '1px solid red'
				box.innerText = `${i} * ${j} = ${i * j}`
			}
			fragment.append(box)
		}
	}
	wrapper.append(fragment)
	body.append(wrapper)
}
nine()
