const container = document.createElement("div")
container.classList.add("container")
document.body.append(container)
const keyboard = document.createElement("div")
keyboard.classList.add("keyboard")
const note = document.createElement("h1")
note.classList.add("note")
const enKeyCode = [
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "Backspace",
    "Tab",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "[",
    "]",
    "\\",
    "Delete",
    "CapsLock",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    ";",
    "'",
    "Enter",
    "Shift",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    ",",
    ".",
    "/",
    "Shift",
    "Control",
    "Alt",
    " ",
    "Alt",
    "Control",
    "ArrowLeft",
    "ArrowUp",
    "ArrowDown",
    "ArrowRight",
]
const ruKeyCode = [
    "ё",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "Backspace",
    "Tab",
    "й",
    "ц",
    "у",
    "к",
    "е",
    "н",
    "г",
    "ш",
    "щ",
    "з",
    "х",
    "ъ",
    "\\",
    "Delete",
    "CapsLock",
    "ф",
    "ы",
    "в",
    "а",
    "п",
    "р",
    "о",
    "л",
    "д",
    "ж",
    "э",
    "Enter",
    "Shift",
    "я",
    "ч",
    "с",
    "м",
    "и",
    "т",
    "ь",
    "б",
    "ю",
    ".",
    "Shift",
    "Control",
    "Alt",
    " ",
    "Alt",
    "Control",
    "ArrowLeft",
    "ArrowUp",
    "ArrowDown",
    "ArrowRight",
]
const codes = [
    'Backquote','Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0','Minus','Equal','Backspace','Tab','KeyQ','KeyW','KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP','BracketLeft','BracketRight','Backslash','Delete','CapsLock','KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL','Semicolon','Quote','Enter','ShiftLeft','KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM','Comma','Period','Slash','ShiftRight','ControlLeft','AltLeft','Space','AltRight','ControlRight','ArrowLeft','ArrowUp','ArrowDown','ArrowRight'
]
const textarea = document.createElement("textarea")
textarea.classList.add("textarea")
container.append(textarea)
if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", "EN")
}

const ruLittle = "ё1234567890-=йцукенгшщзхъ\\фывапролджэячсмитьбю/ ";
const ruCapital = "Ё!\"№;%:?*()_+ЙЦУКЕНГШЩЗХЪ/ФЫВАПРОЛДЖЭЯЧСМИТЬБЮ? ";
const ruLittleArray = ruLittle.split("");
const ruCapitalArray = ruCapital.split("");

const enLittle = "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./ ";
const enCapital = '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>? ';
const enLittleArray = enLittle.split("");
const enCapitalArray = enCapital.split("");
note.textContent =
    "This keyboard is created on Windows 11. Keyboard shortcut for switching languages is SHIFT + ALT.";
container.append(keyboard);
container.append(note);

const enLittleLetter = "qwertyuiopasdfghjklzxcvbnm";
const enCapitalLetter = enLittleLetter.toUpperCase();
const enLittleLetters = enLittleLetter.split("");
const enCapitalLetters = enCapitalLetter.split("");
const ruLittleLetter = "ёйцукенгшщзхъфывапролджэячсмитьбю";
const ruCapitalLetter = ruLittleLetter.toUpperCase();
const ruLittleLetters = ruLittleLetter.split("");
const ruCapitalLetters = ruCapitalLetter.split("");

function pressShift(element, lettersFrom, lettersTo) {
    if (lettersFrom.indexOf(element.textContent) > -1) {
        element.textContent = lettersTo[lettersFrom.indexOf(element.textContent)]
    }
}

function createButton(key, code) {
    const btn = document.createElement("div")
    btn.setAttribute("data-code", code)
    btn.setAttribute("data-key", key)
    btn.classList.add("btn")
    btn.textContent = key

    if (key === "Backspace") {
        btn.classList.add("backspace");
    }
    if (key === "Tab") {
        btn.classList.add("tab");
    }
    if (key === "Delete") {
        btn.classList.add("delete");
    }
    if (key === "CapsLock") {
        btn.classList.add("caps");
    }
    if (key === "Enter") {
        btn.classList.add("enter");
    }
    if (key === "Shift") {
        btn.classList.add("shift");
    }
    if (key === " ") {
        btn.classList.add("space");
    }
    if (key === "ArrowLeft") {
        btn.classList.add("arrow-left");
        btn.innerHTML = "&#9666;";
    }
    if (key === "ArrowRight") {
        btn.classList.add("arrow-right");
        btn.innerHTML = "&#9656;";
    }
    if (key === "ArrowUp") {
        const arrows = document.createElement("div");
        arrows.classList.add("arrows");
        keyboard.append(arrows);
        btn.classList.add("arrow-up");
        btn.innerHTML = "&#9652;";
        arrows.append(btn);
        return;
    }
    if (key === "ArrowDown") {
        btn.classList.add("arrow-down");
        btn.innerHTML = "&#9662;";
        document.querySelector(".arrows").append(btn);
        return;
    }
    if (key === "q" || key === "й") {
        btn.classList.add("caps-check");
    }
    if (key === "Control") {
        btn.classList.add("ctrl")
        btn.textContent = "Ctrl"
    }
    if (key === "Alt") {
        btn.classList.add("alt");
        btn.textContent = "Alt";
    }
    keyboard.append(btn)
}
let keyCodes
if (localStorage.getItem("lang") === "EN") {
    keyCodes = [...enKeyCode]
} else {
    keyCodes = [...ruKeyCode]
}
for (let i = 0; i < keyCodes.length; i++) {
    createButton(keyCodes[i], codes[i])
}




let pressed = new Set()
document.addEventListener("keydown", event => {
    document.querySelectorAll(".btn").forEach(function (element) {
        if (event.code === element.dataset.code) {
            element.classList.add("active");
        }
    })
    if (event.key === "Tab") {
        event.preventDefault();
        const textarea = document.querySelector(".textarea");
        const start = textarea.selectionEnd;
        const val1 = textarea.value.split("").slice(start);
        const val2 = textarea.value.split("").slice(0, start);
        const val = [...val2, "    ", ...val1].join("");
        textarea.value = val;
        textarea.selectionStart = start + 4;
        textarea.selectionEnd = start + 4;
    }
    if (event.key === "ArrowUp") {
        event.preventDefault();
        const textarea = document.querySelector(".textarea");
        const start = textarea.selectionEnd;
        const val1 = textarea.value.split("").slice(start);
        const val2 = textarea.value.split("").slice(0, start);
        const val = [...val2, "▴", ...val1].join("");
        textarea.value = val;
        textarea.selectionStart = start + 1;
        textarea.selectionEnd = start + 1;
    }
    if (event.key === "ArrowDown") {
        event.preventDefault();
        const textarea = document.querySelector(".textarea");
        const start = textarea.selectionEnd;
        const val1 = textarea.value.split("").slice(start);
        const val2 = textarea.value.split("").slice(0, start);
        const val = [...val2, "▾", ...val1].join("");
        textarea.value = val;
        textarea.selectionStart = start + 1;
        textarea.selectionEnd = start + 1;
    }
    if (event.key === "ArrowLeft") {
        event.preventDefault();
        const textarea = document.querySelector(".textarea");
        const start = textarea.selectionEnd;
        const val1 = textarea.value.split("").slice(start);
        const val2 = textarea.value.split("").slice(0, start);
        const val = [...val2, "◂", ...val1].join("");
        textarea.value = val;
        textarea.selectionStart = start + 1;
        textarea.selectionEnd = start + 1;
    }
    if (event.key === "ArrowRight") {
        event.preventDefault();
        const textarea = document.querySelector(".textarea");
        const start = textarea.selectionEnd;
        const val1 = textarea.value.split("").slice(start);
        const val2 = textarea.value.split("").slice(0, start);
        const val = [...val2, "▸", ...val1].join("");
        textarea.value = val;
        textarea.selectionStart = start + 1;
        textarea.selectionEnd = start + 1;
    }
    if (event.key === "Shift") {
        pressed.add("Shift")
        document.querySelector(".shift").classList.add("shift-active");
        if (localStorage.getItem("lang") === "EN") {
            document.querySelectorAll(".btn").forEach(function (element) {
                pressShift(element, enLittleArray, enCapitalArray)
            })
        }
        if (localStorage.getItem("lang") === "RU") {
            document.querySelectorAll(".btn").forEach(function (element) {
                pressShift(element, ruLittleArray, ruCapitalArray)
            })
        }
    }
    if (event.key.length === 1) {
        event.preventDefault()

        let input = null
        if (localStorage.getItem("lang") === "RU") {
            if (document.querySelector(".caps-check").textContent === "Й") {
                input = ruCapitalArray[enCapitalArray.indexOf(event.key)]
                if (!input) {
                    input = ruCapitalArray[enLittleArray.indexOf(event.key)]
                }
            } else {
                input = ruLittleArray[enLittleArray.indexOf(event.key)]
            }
        }

        const textarea = document.querySelector(".textarea");
        const start = textarea.selectionEnd;
        const val1 = textarea.value.split("").slice(start);
        const val2 = textarea.value.split("").slice(0, start);
        const val = [...val2, input ? input : event.key, ...val1].join("");
        textarea.value = val;
        textarea.selectionStart = start + 1;
        textarea.selectionEnd = start + 1;
    }
    if (event.key === "CapsLock") {
        if (localStorage.getItem("lang") === "RU") {
            if (ruLittleLetters.indexOf(document.querySelector(".caps-check").textContent) > -1) {
                document.querySelectorAll(".btn").forEach(function (element) {
                    if (ruLittleLetters.indexOf(element.dataset.key) > -1) {
                        element.textContent =
                            ruCapitalLetters[ruLittleLetters.indexOf(element.dataset.key)]
                    }
                });
            }
        } else {
            if (enLittleLetters.indexOf(document.querySelector(".caps-check").textContent) > -1) {
                document.querySelectorAll(".btn").forEach(function (element) {
                    if (enLittleLetters.indexOf(element.dataset.key) > -1) {
                        element.textContent =
                            enCapitalLetters[enLittleLetters.indexOf(element.dataset.key)];
                        element.dataset.key =
                            enCapitalLetters[enLittleLetters.indexOf(element.dataset.key)];
                    }
                });
            }
        }
    }
    if (event.key === "Alt") {
        pressed.add("Alt");
    }
    if (pressed.has("Shift") && pressed.has("Alt")) {
        function changeLang(symbol, lettersFrom, lettersTo) {
            if (document.querySelector(".caps-check").textContent === symbol) {
                document.querySelectorAll(".btn").forEach(function (element) {
                    if (element.dataset.key.length === 1) {
                        element.textContent = lettersTo[lettersFrom.indexOf(element.textContent)]
                    }
                })
            }
        }
        if (localStorage.getItem("lang") === "EN") {
            localStorage.setItem("lang", "RU")
            changeLang("Q", enCapitalArray, ruLittleArray)
        } else {
            localStorage.setItem("lang", "EN")
            changeLang("Й", ruCapitalArray, enLittleArray)
        }
    }
    if (document.querySelector(".shift-active")) {
        document.querySelector(".shift").classList.remove("shift-active")
    }
})

document.addEventListener("keyup", event => {
    if (event.key === "Shift") {
        if (localStorage.getItem("lang") === "EN") {
            document.querySelectorAll(".btn").forEach(function (element) {
                pressShift(element, enCapitalArray, enLittleArray);
            })
        }
        if (localStorage.getItem("lang") === "RU") {
            document.querySelectorAll(".btn").forEach(function (element) {
                pressShift(element, ruCapitalArray, ruLittleArray);
            })
        }
        pressed.delete("Shift");
    }
    if (event.key === "Alt") {
        pressed.delete("Alt");
    }
    if (event.key === "CapsLock") {
        document.querySelectorAll(".btn").forEach(function (element) {
            if (enCapitalLetters.indexOf(element.dataset.key) > -1) {
                element.textContent =
                    enLittleLetters[enCapitalLetters.indexOf(element.dataset.key)];
                element.dataset.key =
                    enLittleLetters[enCapitalLetters.indexOf(element.dataset.key)];
            }
        });
    }
    document.querySelectorAll(".btn").forEach(function (element) {
        if (event.code === element.dataset.code) {
            element.classList.remove("active");
        }
    });
})

document.querySelector(".keyboard").addEventListener("click", event => {
    const textarea = document.querySelector(".textarea")

    
    if (event.target.classList.contains("btn")) {
        textarea.focus()

        const input = event.target.textContent

        if (event.target.dataset.key === "Shift") {
            if (!event.target.classList.contains("active")) {
                event.target.classList.add("active")

                document.querySelectorAll(".btn").forEach(function (element) {
                    if (localStorage.getItem('lang') === 'EN') {
                        pressShift(element, enLittleArray, enCapitalArray)
                    } else {
                        pressShift(element, ruLittleArray, ruCapitalArray)
                    }
                })
            } else {
                document.querySelector(".shift").classList.remove("active")
                document.querySelectorAll(".btn").forEach(function (element) {
                    if (localStorage.getItem('lang') === 'EN') {
                        pressShift(element, enCapitalArray, enLittleArray)
                    } else {
                        pressShift(element, ruCapitalArray, ruLittleArray)
                    }
                })
            }
            return
        }
        event.target.classList.add('active')
        setInterval(() => {
            event.target.classList.remove('active')
        }, 500)
        if (event.target.dataset.key === "CapsLock") {
            if (enLittleLetters.indexOf(document.querySelector(".caps-check").textContent) > -1) {
                event.target.classList.add("active");
                document.querySelectorAll(".btn").forEach(function (element) {
                    if (enLittleLetters.indexOf(element.dataset.key) > -1) {
                        element.textContent =
                            enCapitalLetters[enLittleLetters.indexOf(element.dataset.key)];
                        element.dataset.key =
                            enCapitalLetters[enLittleLetters.indexOf(element.dataset.key)];
                    }
                });
            } else if (enCapitalLetters.indexOf(document.querySelector(".caps-check").textContent) > -1) {
                event.target.classList.remove("active");
                document.querySelectorAll(".btn").forEach(function (element) {
                    if (enCapitalLetters.indexOf(element.dataset.key) > -1) {
                        element.textContent =
                            enLittleLetters[enCapitalLetters.indexOf(element.dataset.key)];
                        element.dataset.key =
                            enLittleLetters[enCapitalLetters.indexOf(element.dataset.key)];
                    }
                });
            }
            return;
        }
        if (document.querySelector(".shift").classList.contains("active")) {
            document.querySelector(".shift").classList.remove("active")
            document.querySelectorAll(".btn").forEach(function (element) {
                if (localStorage.getItem('lang') === 'EN') {
                    pressShift(element, enCapitalArray, enLittleArray)
                } else {
                    pressShift(element, ruCapitalArray, ruLittleArray)
                }
            })
        }
        if (event.target.dataset.key === "Backspace") {
            if (textarea.selectionStart === textarea.selectionEnd) {
                const start = textarea.selectionEnd;
                const val1 = textarea.value.split("").slice(start);
                const val2 = textarea.value.split("").slice(0, start - 1);
                const val = [...val2, ...val1].join("");
                textarea.value = val;
                textarea.selectionStart = start - 1;
                textarea.selectionEnd = start - 1;
            } else {
                const start = textarea.selectionStart;
                const end = textarea.selectionEnd;
                const val1 = textarea.value.split("").slice(end);
                const val2 = textarea.value.split("").slice(0, start);
                const val = [...val2, ...val1].join("");
                textarea.value = val;
                textarea.selectionStart = start;
                textarea.selectionEnd = start;
            }

            return;
        }
        if (event.target.dataset.key === "Delete") {
            if (textarea.selectionStart === textarea.selectionEnd) {
                const start = textarea.selectionEnd;
                const val1 = textarea.value.split("").slice(start + 1);
                const val2 = textarea.value.split("").slice(0, start);
                const val = [...val2, ...val1].join("");
                textarea.value = val;
                textarea.selectionStart = start;
                textarea.selectionEnd = start;
            } else {
                const start = textarea.selectionStart;
                const end = textarea.selectionEnd;
                const val1 = textarea.value.split("").slice(end);
                const val2 = textarea.value.split("").slice(0, start);
                const val = [...val2, ...val1].join("");
                textarea.value = val;
                textarea.selectionStart = start;
                textarea.selectionEnd = start;
            }

            return;
        }
        if (event.target.dataset.key === "ArrowUp") {
            const textarea = document.querySelector(".textarea");
            const start = textarea.selectionEnd;
            const val1 = textarea.value.split("").slice(start);
            const val2 = textarea.value.split("").slice(0, start);
            const val = [...val2, "▴", ...val1].join("");
            textarea.value = val;
            textarea.selectionStart = start + 1;
            textarea.selectionEnd = start + 1;
            return;
        }
        if (event.target.dataset.key === "ArrowDown") {
            const textarea = document.querySelector(".textarea");
            const start = textarea.selectionEnd;
            const val1 = textarea.value.split("").slice(start);
            const val2 = textarea.value.split("").slice(0, start);
            const val = [...val2, "▾", ...val1].join("");
            textarea.value = val;
            textarea.selectionStart = start + 1;
            textarea.selectionEnd = start + 1;
            return;
        }
        if (event.target.dataset.key === "ArrowLeft") {
            const textarea = document.querySelector(".textarea");
            const start = textarea.selectionEnd;
            const val1 = textarea.value.split("").slice(start);
            const val2 = textarea.value.split("").slice(0, start);
            const val = [...val2, "◂", ...val1].join("");
            textarea.value = val;
            textarea.selectionStart = start + 1;
            textarea.selectionEnd = start + 1;
            return;
        }
        if (event.target.dataset.key === "ArrowRight") {
            const textarea = document.querySelector(".textarea");
            const start = textarea.selectionEnd;
            const val1 = textarea.value.split("").slice(start);
            const val2 = textarea.value.split("").slice(0, start);
            const val = [...val2, "▸", ...val1].join("");
            textarea.value = val;
            textarea.selectionStart = start + 1;
            textarea.selectionEnd = start + 1;
            return;
        }
        if (event.target.dataset.key === "Tab") {
            const textarea = document.querySelector(".textarea");
            const start = textarea.selectionEnd;
            const val1 = textarea.value.split("").slice(start);
            const val2 = textarea.value.split("").slice(0, start);
            const val = [...val2, "    ", ...val1].join("");
            textarea.value = val;
            textarea.selectionStart = start + 4;
            textarea.selectionEnd = start + 4;
            return;
        }
        if (event.target.dataset.key === "Alt") return;
        if (event.target.dataset.key === "Control") return;


        const start = textarea.selectionEnd
        const val1 = textarea.value.split("").slice(start)
        const val2 = textarea.value.split("").slice(0, start)
        const val = [...val2, input, ...val1].join("")
        textarea.value = val
        textarea.selectionStart = start + 1
        textarea.selectionEnd = start + 1
    }
})