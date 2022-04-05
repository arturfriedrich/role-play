import characterData from './data.js'
import Character from "./Character.js"

let monstersArray = ["orc", "demon", "goblin"]

/*
Challenge
1. Make it so getNewMonster returns a new instance of Character. Think
what argument you should be passing. If there are no more monsters in the 
array, getNewMonster should return an empty object {}.
2. Down near the bottom of the file, set a new variable "monster" equal 
to our new function getNewMonster.
3. Delete any code we no longer need.
- The app will still be broken - don't worry for now!
**hint.md for help!!**
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
    if ( monster.dead || wizard.dead ) {
        endGame()
    }
   render()
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