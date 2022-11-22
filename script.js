function update(){
    let rnd1 = Math.floor(Math.random() * 6) + 1
let rnd2 = Math.floor(Math.random() * 6) + 1

dice1 = document.getElementById('dice1')
dice2 = document.getElementById('dice2')

toggleSequence("dice1")
dice1.setAttribute('src', `./images/dice${rnd1}.png`)

dice2.setAttribute('src', `./images/dice${rnd2}.png`)
toggleSequence("dice2")

let winner;
if(rnd1 > rnd2) 
    {winner = `Player 1 is Winner !`} 
else if (rnd1 === rnd2) 
    {winner = "It's a match!"} 
else 
    {winner = `Player 2 is Winner !`}

document.getElementById('winner-text').textContent = winner
}

function toggleSequence(dice) {
    setTimeout(() => {
        document.getElementById(dice).classList.toggle("shake");
    }, 0)
    setTimeout(() => {
        document.getElementById(dice).classList.toggle("shake");
    }, 820)
  }

document.getElementById('button').addEventListener('click', update)