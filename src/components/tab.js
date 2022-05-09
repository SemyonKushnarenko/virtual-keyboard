export default function pressTab(arrFrom, arrTo) {
    document.querySelectorAll(".btn").forEach(element => {
        if (arrFrom.indexOf(element.textContent) > -1) {
            element.textContent = arrTo[arrFrom.indexOf(element.textContent)]
        }
    })
}