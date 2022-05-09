export default function pressShift(element, lettersFrom, lettersTo) {
    if (lettersFrom.indexOf(element.textContent) > -1) {
        element.textContent = lettersTo[lettersFrom.indexOf(element.textContent)]
    }
}