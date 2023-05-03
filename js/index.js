// dropdown menu
const burger = document.querySelector('.header__menu')
const backgourndOpacity = document.querySelector('.backgournd__opacity')

document.addEventListener('click', e => {
	const isDropdownButton = e.target.matches('[data-dropdown-menu]')
	if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return
	let currentDropdown
	let currentDropdownBtn
	if (isDropdownButton) {
		currentDropdown = e.target.closest('[data-dropdown]')
		currentDropdownBtn = e.target.closest('[data-dropdown]')
		console.log(currentDropdownBtn)
		currentDropdown.classList.toggle('active')
		backgourndOpacity.classList.toggle('active')
		if (burger.classList.value.match(/active/gm) == 'active') {
			document.querySelector('body').style.overflow = 'hidden'
			document.querySelector('body').style.opacity = '1'
		} else {
			document.querySelector('body').style.overflow = 'auto'
		}
	}
	document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
		if (dropdown === currentDropdown) return
		dropdown.classList.remove('active')
		backgourndOpacity.classList.remove('active')
		if (burger.classList.value.match(/header__menu/gm) == 'header__menu') {
			document.querySelector('body').style.overflow = 'auto'
		}
	})
})

// dropdown btns

const btns = document.querySelector('.header__menu')
const backgourndOpacity2 = document.querySelector('.backgournd__opacity')
document.addEventListener('click', e => {
	const isDropdownButton = e.target.matches('[data-dropdown-button]')
	if (!isDropdownButton && e.target.closest('[data-dropdown-body]') != null) return
	let currentDropdown
	if (isDropdownButton) {
		currentDropdown = e.target.closest('[data-dropdown-body]')
		currentDropdown.classList.toggle('active')
		if (btns.classList.value.match(/active/gm) == 'active') {
			document.querySelector('body').style.overflow = 'hidden'
			document.querySelector('body').style.opacity = '1'
		} else {
			document.querySelector('body').style.overflow = 'auto'
		}
	}
	document.querySelectorAll('[data-dropdown-body].active').forEach(dropdown => {
		if (dropdown === currentDropdown) return
		dropdown.classList.remove('active')
	})
})

// range cards

const currentValue = document.querySelectorAll('#current-value')
const fullValue = document.querySelectorAll('#full-value')
const range = document.querySelectorAll('#range')

for (let i = 0; i < currentValue.length; i++) {
	range[i].value = (Number(currentValue[i].innerText) / Number(fullValue[i].innerText)) * 100
}
currentValue.forEach(currentValue => {
	currentValue.innerText = Number(currentValue.innerText).toLocaleString('en-Us', {
		style: 'currency',
		currency: 'USD',
	})
})
fullValue.forEach(fullValue => {
	fullValue.innerText = Number(fullValue.innerText).toLocaleString('en-Us', {
		style: 'currency',
		currency: 'USD',
	})
})

// get date

document.querySelector('.footer__copywrite').textContent = `Copyright © ${new Date().getFullYear()}. LogoIpsum. All rights reserved.`
