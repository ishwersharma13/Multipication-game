const num1 = Math.ceil(Math.random()*20)
console.log(num1)

const num2 = Math.ceil(Math.random()*10)
console.log(num2)

let question = document.getElementById('question')

const input = document.getElementById('input')

const form = document.getElementById('form')

const scoreE1 = document.getElementById('score')

 let score = JSON.parse(localStorage.getItem('score'))

 if(!score){
    score = 0
 }

 scoreE1.innerText = `score: ${score}`


question.innerText = `what is ${num1} multiply by ${num2}?`

const correctAns = num1 * num2
console.log(correctAns)

form.addEventListener('submit', ()=>{
    const userAns = +input.value
    if (userAns === correctAns) {
        score++
    updateLocalStorage()
    }else{
        score--
        updateLocalStorage()
    }
})

function updateLocalStorage(){
    localStorage.setItem('score',JSON.stringify(score))

}