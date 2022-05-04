import {KEYS} from './components/keys'
const BODY = document.body
function init() {

    function createButton(keyboard = document.querySelector('.keyboard'), key) {
        const btn = document.createElement('button')
        btn.classList.add("btn")
        btn.innerHTML = key
    
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
    
                const btn2 = document.createElement('button')
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
        keyboard.append(btn)
    }
    const keyboard = document.createElement('div')
    keyboard.classList.add('keyboard')
    for (let i = 0; i < KEYS.length; i++) {
        createButton(keyboard, KEYS[i])
    }
    BODY.append(keyboard)
}
init()