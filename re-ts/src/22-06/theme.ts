const changeTheme = document.createElement('div')
changeTheme.innerHTML = `
    <button data-theme="default">默认</button>
    <button data-theme="red">红色</button>
    <button data-theme="yellow">黄色</button>
`
changeTheme.addEventListener('click', function (e) {
	const target = e.target as HTMLElement
	if (target.nodeName === 'BUTTON') {
		const theme = target.dataset.theme
		const links = document.querySelectorAll<HTMLLinkElement>('link[title]')
		links.forEach((i) => {
			i.disabled = true // 是必要的
		})
		const currentlink = document.querySelector<HTMLLinkElement>(`link[href="./styles/${theme}.css"]`)!
		currentlink.disabled = false
	}
})

document.body.append(changeTheme)
export {}
