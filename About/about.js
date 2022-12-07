console.log('Goliath Online!')

let pointlessBtn = document.querySelector('#pointless')
let randomBtn = document.querySelector('#rdm-animal')

console.log('Go Ahead TACCOM.')
let count = 1

const jokeHandler = () => {
  console.log('Nav Com locked.')
    jokeBtn(count)
    count++
    if (count === 11){
        count = 0
    }
}

const jokeBtn = (incre) => {

    if (incre === 0){
        pointlessBtn.textContent ="PRESS ME!"

    } else if (incre === 1){
        pointlessBtn.textContent ="Seriously?"
    }else if (incre === 2) {
        pointlessBtn.textContent ="Have a Kirby <('o'<)"
    }else if (incre === 3) {
        pointlessBtn.textContent ="(>T_T)> Aww, you made him cry..."
    }else if (incre === 4) {
        pointlessBtn.textContent ="You monster... press again to apologize?"
    }else if (incre === 5) {
        pointlessBtn.textContent ="<(^o^)> See, all better!"
    }else if (incre === 6) {
        pointlessBtn.textContent ="It continues..."
    }else if (incre === 7) {
        pointlessBtn.textContent ="You do know you are wasting time right?"
    }else if (incre === 8) {
        pointlessBtn.textContent ="Apparently you have time to waste..."
    }else if (incre === 9) {
        pointlessBtn.textContent ="FOOL OF A TOOK!"
    }else if (incre === 10) {
        pointlessBtn.textContent ="MMMMM, Problem you must have...."
        
    }
}

pointlessBtn.addEventListener('click', jokeHandler)

const rdmCreature = ['Zinogre', 'Intellect Devourer', 'Griffin', 'Leshy', 'Lycanthrope', 'Kitsune', 'Crysmal', 'Choccobo', 'Teifling', 'Sarlacc', 'Gollum']

const rdmHandler = () => {
    console.log('Target Designated.')
    randomCreature(rdmCreature)
}

const randomCreature = (arr) => {
    let res = [Math.floor(Math.random() * arr.length)]
    console.log(res)
    let creature = arr[res]
    alert('Try Googling, ' + creature +' and adding it to the home page!')
}

randomBtn.addEventListener('click', rdmHandler)