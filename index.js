import characterData from './data.js'
import Character from "./Character.js"

function attack() {
   console.log("attack button working")
}


function render() {
    document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
    document.getElementById("monster").innerHTML = orc.getCharacterHtml();
}

document.getElementById("attack-button", attack)
const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()