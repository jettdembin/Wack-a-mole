const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const container = document.querySelector(".container")
const finalscore= document.querySelector(".finalscore")

let result = 0
let hitPosition
let currentTime = 60
let timerId = null


function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  hitPosition = randomSquare.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})

function moveMole() {
  timerId = setInterval(randomSquare, 500)
}

moveMole()

function countDown() {
 currentTime--
 timeLeft.textContent = currentTime

 if (currentTime == 0) {
   clearInterval(countDownTimerId)
   clearInterval(timerId)
   container.style.opacity = "0.2"
   finalscore.style.opacity = "1"
   finalscore.innerHTML = `
   <h1 class="score">GAME OVER!</h1> 
   <h1 class="score">Your final score is ${result}</h1>
   `;
 }

}

let countDownTimerId = setInterval(countDown, 1000)