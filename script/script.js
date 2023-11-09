const balloons = document.querySelectorAll('.box')
const checkBox = document.querySelectorAll('.checkBox')
const arrCheckbox = document.querySelector('.arrCheckbox')


balloons.forEach((balloon, idx) => {
    balloon.addEventListener('click', () => {
        balloon.classList.toggle('bgRed')
        checkBox[idx].checked = !checkBox[idx].checked
        })
    })

let chekResult = 100

arrCheckbox.addEventListener('click', () => {
    if (chekResult > 0){
        balloons.forEach((img, idx) => {
            img.classList.add('bgRed')
            checkBox[idx].checked = true
        })
        chekResult = 0
    }
    else {
        balloons.forEach((img, idx) => {
            img.classList.remove('bgRed')
            checkBox[idx].checked = false
        })
        chekResult = 100
    }
})