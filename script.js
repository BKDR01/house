let input1 = document.querySelector('#input1')
let input2 = document.querySelector('#input2')
let h1 = document.querySelector('h1')
let sendButton = document.querySelector('.send')
let Minus = document.querySelector('.Minus')
let plus = document.querySelector('.plus')


function send() {
    h1.innerHTML = input1.value
}

function textcolor() {
    h1.style.color = input2.value
}
input2.addEventListener('input', textcolor);

let count = 0

function min() {
    h1.innerHTML = --count
}
function plu() {
    h1.innerHTML = ++count
}


// let input1 = document.querySelector('#input1')
// let input2 = document.querySelector('#input2')
// let btn = document.querySelector('button')
// let ptext = document.querySelector('p')
// let btnNumber = document.querySelector('.btn')
// let sapn = document.querySelector('span')

// input.addEventListener('input' , (event) => {
//     event.preventDefault()
//     ptext.innerHTML = input.value

//     console.log(input.value);

// })

// btnNumber.forEach(itam => {
//     itam.addEventListener('click', (event) => {
//         ptext.innerHTML = +event.target.innerHTML
//         console.log(+event.target.innerHTML);
//     })
// });

// function bol() {
//     let number1 = +input1.value
//     let number2 = +input2.value
//     sapn.innerHTML = number1 / number2
//     console.log(number1);
// }

// function kop() {
//     let number1 = +input1.value
//     let number2 = +input2.value
//     sapn.innerHTML = number1 * number2
// }
// function qosh() {
//     let number1 = +input1.value
//     let number2 = +input2.value
//     sapn.innerHTML = number1 + number2
// }
// function ayir() {
//     let number1 = +input1.value
//     let number2 = +input2.value
//     sapn.innerHTML = number1 - number2
// }
