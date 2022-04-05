import characterData from './data.js'
import Character from "./Character.js"

let monstersArray = ["orc", "demon", "goblin"]

/*
Challenge
1. Change the attack function so that when a monster dies, 
the next monster replaces it. If there are no more monsters,
call endGame(). 
2. Make sure that endGame() still gets called if the wizard
is killed.
*/

function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}

function attack() {
    wizard.getDiceHtml()
    monster.getDiceHtml()
    wizard.takeDamage(monster.currentDiceScore)
    monster.takeDamage(wizard.currentDiceScore)
    render()

    if ( wizard.dead ) {
        endGame()
    } else if ( monster.dead ){
        if ( monstersArray.length > 0 ){
            monster = getNewMonster()
            render()
        }
        else {
            endGame()
        }
    }
}

function endGame() {
   const endMessage = monster.dead && wizard.dead ? "No victors - all creatures are dead" 
        : wizard.health > 0 ? "The Wizard Wins"
        : "The Orc is Victorious"
    
    const endEmoji = wizard.health > 0 ? "🔮" : "☠️"

    document.body.innerHTML = `
        <div class="end-game">
            <h2>Game Over</h2>
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>
    `
}


function render() {
    document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
    document.getElementById("monster").innerHTML = monster.getCharacterHtml();
}

document.getElementById("attack-button").addEventListener("click", attack)
const wizard = new Character(characterData.hero)
let monster = getNewMonster()
render()