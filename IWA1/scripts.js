const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')

const subtractHandler = () => {
    const newVaulue  = parseInt (number.value) - 1
    number.value = newValue

    if (add.disabled === true) {
        add.disabled = false
    }

    if (newValue <= MIN_NUMBER) {
    subtract.disabled = true
    }
}

const addtHandler = () => {
    const newValue  = parseInt (number.value) + 1
    number.value = newValue


    if (subtract.disabled === true) {
        subtract.disabled = false
}

    if (newValue >= MAX_NUMBER) {
    add.disabled = false
}
}
subtract.addEventListener('click', subtractHandler)
add.addEventListener('click', addtHandler)