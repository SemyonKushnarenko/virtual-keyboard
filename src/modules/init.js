import {ruKEYS, enKEYS} from '../components/keys'
export default function init() {
    const BODY = document.body
    const textarea = document.createElement('textarea')
    textarea.classList.add('.textarea')
    BODY.append(textarea)

    function createButton(keyboard = document.querySelector('.keyboard'), key, index) {
        const btn = document.createElement('div')
        btn.classList.add("btn")
        btn.innerHTML = key
        btn.dataset.key = enKEYS[index]

        switch (key) {
            case 'Backspace':
                btn.classList.add('backspace')
                break
            case 'Tab':
                btn.classList.add('tab')
                break
            case 'CapsLock':
                btn.classList.add('capslock')
                break
            case 'Enter':
                btn.classList.add('enter')
                break
            case 'Shift':
                btn.classList.add('shift')
                break
            case 'Control':
                btn.innerHTML = 'Ctrl'
                btn.classList.add('ctrl')
                break
            case 'Alt':
                btn.classList.add('alt')
                break
            case 'ArrowLeft': 
                btn.innerHTML = '&#8592;'
                break
            case 'ArrowUp':
                btn.classList.add('arrow-up')
                btn.innerHTML = '&#8593;'
    
                let arrowsUpAndDown = document.createElement('div')
                arrowsUpAndDown.classList.add('arrows')
                keyboard.append(arrowsUpAndDown)
                arrowsUpAndDown.append(btn)
    
                const btn2 = document.createElement('div')
                btn2.classList.add("btn", "arrow-down")
                btn2.innerHTML = '&#8595;'
                arrowsUpAndDown.append(btn2)
                return
            case 'ArrowDown':
                return
            case 'ArrowRight': 
                btn.innerHTML = '&#8594;'
                break
            case ' ':
                btn.classList.add("space")
                break
        }
        document.addEventListener('keydown', e => {
            e.preventDefault()
            if (e.key === 'Shift') {
                document.querySelectorAll('.btn').forEach(item => {
                    item.innerHTML = item.innerHTML.toUpperCase()
                })
            }
            if (e.key === btn.dataset.key) {
                btn.classList.add('active')
                textarea.value += e.key
            }
        })
        document.addEventListener('keyup', e => {
            if (e.key === btn.dataset.key) {
                btn.classList.remove('active')
            }
        })
        keyboard.append(btn) 
    }
    const keyboard = document.createElement('div')
    keyboard.classList.add('keyboard')
    for (let i = 0; i < ruKEYS.length; i++) {
        createButton(keyboard, ruKEYS[i], i)
    }
    BODY.append(keyboard)
}