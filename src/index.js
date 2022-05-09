import pressTab from "./components/tab"
import pressShift from "./components/shift"
import {
    ruCapitalArray,
    ruLittleArray,
    ruCapitalLetters,
    ruLittleLetters,
    ruKeyCode,
    enCapitalArray,
    enCapitalLetters,
    enKeyCode,
    enLittleArray,
    enLittleLetters,
    codes
} from "./components/keys"

const container = document.createElement("div")
container.classList.add("container")
document.body.append(container)
const keyboard = document.createElement("div")
keyboard.classList.add("keyboard")
const note = document.createElement("h1")
note.classList.add("note")
const textarea = document.createElement("textarea")
textarea.classList.add("textarea")
container.append(textarea)
if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", "EN")
}


note.innerHTML =
    "This keyboard is created on Windows 11. <br></br>Shortcut for switching languages is LeftShift + LeftAlt";
container.append(keyboard)
container.append(note)


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
    if (event.key === "Alt") {
        event.preventDefault()
        pressed.add("Alt")
        document.querySelectorAll(".btn").forEach(function (element) {
            if (event.code === element.dataset.code) {
                element.classList.add("active")
            }
        })
    }
    if (event.key === "Shift") {
        pressed.add("Shift")
        document.querySelectorAll(".btn").forEach(function (element) {
            if (event.code === element.dataset.code) {
                element.classList.add("active")
            }
        })
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
            changeLang("Q", enCapitalArray, ruCapitalArray)
            changeLang("q", enLittleArray, ruCapitalArray)
        } else {
            localStorage.setItem("lang", "EN")
            changeLang("Й", ruCapitalArray, enCapitalArray)
            changeLang("й", ruLittleArray, enCapitalArray)
        }
        pressed.clear()
        return
    }
    if (event.key === "Shift") {
        document.querySelector(".shift").classList.add("active")
        if (localStorage.getItem("lang") === "EN") {
            if (document.querySelector('.caps-check').textContent === 'q') {
                document.querySelectorAll(".btn").forEach(function (element) {
                    pressShift(element, enLittleArray, enCapitalArray)
                })
            } else {
                document.querySelectorAll(".btn").forEach(function (element) {
                    pressShift(element, enLittleArray, enCapitalArray)
                    if (enCapitalLetters.indexOf(element.textContent) > -1) {
                        element.textContent = enLittleLetters[enCapitalLetters.indexOf(element.textContent)]
                    }
                })
            }
        }
        if (localStorage.getItem("lang") === "RU") {
            if (document.querySelector('.caps-check').textContent === 'й') {
                document.querySelectorAll(".btn").forEach(function (element) {
                    pressShift(element, ruLittleArray, ruCapitalArray)
                })
            } else {
                document.querySelectorAll(".btn").forEach(function (element) {
                    pressShift(element, ruLittleArray, ruCapitalArray)
                    if (ruCapitalLetters.indexOf(element.textContent) > -1) {
                        element.textContent = ruLittleLetters[ruCapitalLetters.indexOf(element.textContent)]
                    }
                })
            }
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
        if (document.querySelector('.caps').classList.contains('active')) {
            if (localStorage.getItem("lang") === "RU") {
                if (ruCapitalLetters.indexOf(document.querySelector(".caps-check").textContent) > -1) {
                    document.querySelectorAll(".btn").forEach(element => {
                        if (ruCapitalLetters.indexOf(element.textContent) > -1) {
                            element.textContent = ruLittleLetters[ruCapitalLetters.indexOf(element.textContent)]
                        }
                    })
                }
            } else {
                if (enCapitalLetters.indexOf(document.querySelector(".caps-check").textContent) > -1) {
                    document.querySelectorAll(".btn").forEach(element => {
                        if (enCapitalLetters.indexOf(element.textContent) > -1) {
                            element.textContent = enLittleLetters[enCapitalLetters.indexOf(element.textContent)]
                        }
                    })
                }
            }
            document.querySelector('.caps').classList.remove('active')
        } else {
            if (localStorage.getItem("lang") === "RU") {
                if (ruLittleLetters.indexOf(document.querySelector(".caps-check").textContent) > -1) {
                    document.querySelectorAll(".btn").forEach(element => {
                        if (ruLittleLetters.indexOf(element.textContent) > -1) {
                            element.textContent =
                                ruCapitalLetters[ruLittleLetters.indexOf(element.textContent)]
                        }
                    })
                }
            } else {
                if (enLittleLetters.indexOf(document.querySelector(".caps-check").textContent) > -1) {
                    document.querySelectorAll(".btn").forEach(element => {
                        if (enLittleLetters.indexOf(element.textContent) > -1) {
                            element.textContent =
                                enCapitalLetters[enLittleLetters.indexOf(element.textContent)]
                        }
                    })
                }
            }
            document.querySelector('.caps').classList.add('active')
        }
        return
    }
    if (document.querySelector(".active")) {
        document.querySelector(".shift").classList.remove("shift-active")
    }
    document.querySelectorAll(".btn").forEach(function (element) {
        if (event.code === element.dataset.code) {
            element.classList.add("active")
        }
    })
})

document.addEventListener("keyup", event => {
    if (event.key === "Shift") {
        document.querySelectorAll(".shift")[0].classList.add("active")
        if (localStorage.getItem("lang") === "EN") {
            if (document.querySelector('.caps-check').textContent === 'q') {
                document.querySelectorAll(".btn").forEach(element => {
                    pressShift(element, enCapitalArray, enLittleArray)
                    pressShift(element, enLittleLetters, enCapitalLetters)
                })
            } else {
                document.querySelectorAll(".btn").forEach(element => {
                    pressShift(element, enCapitalArray, enLittleArray)
                })
            }
        }
        if (localStorage.getItem("lang") === "RU") {
            if (document.querySelector('.caps-check').textContent === 'й') {
                document.querySelectorAll(".btn").forEach(function (element) {
                    pressShift(element, ruCapitalArray, ruLittleArray)
                    pressShift(element, ruLittleLetters, ruCapitalLetters)
                })
            } else {
                document.querySelectorAll(".btn").forEach(function (element) {
                    pressShift(element, ruCapitalArray, ruLittleArray)
                    if (ruCapitalLetters.indexOf(element.textContent) > -1) {
                        element.textContent = ruLittleLetters[ruCapitalLetters.indexOf(element.textContent)]
                    }
                })
            }
        }
        pressed.delete("Shift")
    }
    if (event.key === "Alt") {
        pressed.delete("Alt")
    }
    if (event.key === "CapsLock") {
        return
    }
    document.querySelectorAll(".btn").forEach(function (element) {
        if (event.code === element.dataset.code) {
            element.classList.remove("active")
        }
    })
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
                event.target.classList.remove("active")
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
        if (event.target.dataset.key === "CapsLock") {
            if (enLittleLetters.indexOf(document.querySelector(".caps-check").textContent) > -1) {
                event.target.classList.add('active')
                pressTab(enLittleLetters, enCapitalLetters)
            } else if (enCapitalLetters.indexOf(document.querySelector(".caps-check").textContent) > -1) {
                event.target.classList.remove('active')
                pressTab(enCapitalLetters, enLittleLetters)
            } else if (ruLittleLetters.indexOf(document.querySelector(".caps-check").textContent) > -1) {
                event.target.classList.add('active')
                pressTab(ruLittleLetters, ruCapitalLetters)
            } else if (ruCapitalLetters.indexOf(document.querySelector(".caps-check").textContent) > -1) {
                event.target.classList.remove('active')
                pressTab(ruCapitalLetters, ruLittleLetters)
            }
            return
        }
        event.target.classList.add('active')
        setInterval(() => {
            event.target.classList.remove('active')
        }, 500)
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