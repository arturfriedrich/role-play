import characterData from './data.js'
import Character from "./Character.js"

function attack() {
    wizard.getDiceHtml()
    orc.getDiceHtml()
    wizard.takeDamage(orc.currentDiceScore)
    orc.takeDamage(wizard.currentDiceScore)
    if ( orc.dead || wizard.dead ) {
        endGame()
    }
   render()
}

function endGame() {
   const endMessage = orc.dead && wizard.dead ? "No victors - all creatures are dead" 
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
    document.getElementById("monster").innerHTML = orc.getCharacterHtml();
}

document.getElementById("attack-button").addEventListener("click", attack)
const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()