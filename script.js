function update(){
    let rnd1 = Math.floor(Math.random() * 6) + 1
let rnd2 = Math.floor(Math.random() * 6) + 1

document.getElementById('dice1').setAttribute('src', `./images/dice${rnd1}.png`)  
document.getElementById('dice2').setAttribute('src', `./images/dice${rnd2}.png`) 
let winner;
if(rnd1 > rnd2) {winner = `Player 1 is Winner !`} else if (rnd1 === rnd2) {winner = "It's a match!"} else {winner = `Player 2 is Winner !`}
document.getElementById('winner-text').textContent = winner
}


document.getElementById('button').addEventListener('click', update)