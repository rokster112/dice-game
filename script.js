'use strict'

const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const diceImage = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnHold = document.querySelector('.btn--hold')
const btnRoll = document.querySelector('.btn--roll')
const currentScore0El = document.querySelector('.current--score--0')
const currentScore1El = document.querySelector('.current--score--1')
const totalScore0EL = document.querySelector('.total--score--0')
const totalScore1EL = document.querySelector('.total--score--1')
const playerTitle0 = document.querySelector('.player--title--0')
const playerTitle1 = document.querySelector('.player--title--1')

let currentScore, totalScore, playing, activePlayer

function init() {
  currentScore = 0
  totalScore = [0, 0]
  playing = true
  activePlayer = 0
  
  diceImage.classList.add('hidden')
  totalScore0EL.textContent = 0
  totalScore1EL.textContent = 0
  currentScore0El.textContent = 0
  playerTitle0.textContent = 'Player 1'
  playerTitle1.textContent = 'Player 2'
  currentScore1El.textContent = 0
  player0El.classList.remove('player--wins')
  player1El.classList.remove('player--wins')
  player1El.classList.remove('player--active')
  player0El.classList.add('player--active')

}

init()



function switchPlayer() {
  currentScore = 0
  document.querySelector(`.current--score--${activePlayer}`).textContent = currentScore
  activePlayer = activePlayer === 0 ? 1 : 0
  player0El.classList.toggle('player--active')
  player1El.classList.toggle('player--active')
}

btnRoll.addEventListener('click', function() {
  if (playing) {
    diceImage.classList.remove('hidden')
    const dice = Math.trunc(Math.random() * 6) + 1
    diceImage.src = `dice-${dice}.png`

    if (dice !== 1) {
      currentScore += dice
      document.querySelector(`.current--score--${activePlayer}`).textContent = currentScore
    } else {
      switchPlayer()
    }
  }
})

btnHold.addEventListener('click', function() {
  if (playing) {
    totalScore[activePlayer] = totalScore[activePlayer] + currentScore
    document.querySelector(`.total--score--${activePlayer}`).textContent = totalScore[activePlayer]
    if (totalScore[activePlayer] >= 100) {
      playing = false
      diceImage.classList.add('hidden')
      document.querySelector(`.player--title--${activePlayer}`).textContent = `Player ${activePlayer + 1} wins!`
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
      document.querySelector(`.player--${activePlayer}`).classList.add('player--wins')
    } else {
      switchPlayer()
    }
  }
})

btnNew.addEventListener('click', init)




























// const player0 = document.querySelector('.player--0')
// const player1 = document.querySelector('.player--1')
// const totalScore0EL = document.getElementById('score--0')
// const totalScore1EL = document.getElementById('score--1')
// const btnRoll = document.querySelector('.btn--roll')
// const btnHold = document.querySelector('.btn--hold')
// const btnNew = document.querySelector('.btn--new')
// const diceImage = document.querySelector('.dice')
// const currentScore0El = document.getElementById('current--0')
// const currentScore1El = document.getElementById('current--1')


// let currentScore, activePlayer, totalScore, playing

// function init() {
//   totalScore0EL.textContent = 0
//   totalScore1EL.textContent = 0
//   currentScore0El.textContent = 0
//   currentScore1El.textContent = 0
  
//   currentScore = 0
//   activePlayer = 0
//   totalScore = [0, 0]
//   playing = true
  
//   diceImage.classList.add('hidden')
//   player0.classList.add('player--active')
//   player1.classList.remove('player--active')
//   player0.classList.remove('player--winner')
//   player1.classList.remove('player--winner')

// }

// init()

// function switchPlayer() {
//   currentScore = 0
//   document.getElementById(`current--${activePlayer}`).textContent = 0
//   activePlayer = activePlayer === 0 ? 1 : 0
//   player0.classList.toggle('player--active')
//   player1.classList.toggle('player--active')
// }

// btnRoll.addEventListener('click', function() {
//   if (playing) {
//     diceImage.classList.remove('hidden')
//     const diceRoll = Math.trunc(Math.random() * 6) + 1
//     diceImage.src = `dice-${diceRoll}.png`
//     if (diceRoll !== 1) {
//       currentScore += diceRoll
//       document.getElementById(`current--${activePlayer}`).textContent = currentScore
//     } else {
//       switchPlayer()
//     }
//   }
// })

// btnHold.addEventListener('click', function() {
//   if (playing) {
//     totalScore[activePlayer] += currentScore
//     document.getElementById(`score--${activePlayer}`).textContent = totalScore[activePlayer]
//     if (totalScore[activePlayer] >= 20) {
//       document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
//       diceImage.classList.add('hidden')
//       playing = false
//       console.log('met condition')
//     } else {
//       switchPlayer()
//       console.log('did n ot meet it')
//     }
//   }
// })

// btnNew.addEventListener('click', init)