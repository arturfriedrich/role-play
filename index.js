/*
CHALLENGE
1. Convert our consts into two objects called 
"monster" and "hero".
2. Update the renderCharacter() function so that it accepts 
a single object "data" as its parameter instead of five string/numbers, 
reducing the number of arguments to pass in from five to one.
3. Update the template now each variable is coming from "data".
4. Update the function call.
*/

const hero = {
   elementId: "hero", 
   name: "Wizard", 
   avatar: "images/wizard.png", 
   health: 60, 
   diceRoll: [3, 1, 4],
}

const monster = {
   elementId: "monster", 
   name: "Orc", 
   avatar: "images/orc.png", 
   health: 10, 
   diceRoll: [2],
}


function renderCharacter(data) {
   const {elementId, name, avatar, health, diceRoll} = data

   const diceHtml = diceRoll.map((num) => {
      return `<div class="dice">${num}</div>`
   })
    
    document.getElementById(elementId).innerHTML = 
      `<div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">
               ${diceHtml.join('')}
            </div>
      </div>`   
}

renderCharacter(hero);
renderCharacter(monster);