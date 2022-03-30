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
   diceRoll: 6
}

const monster = {
   elementId: "monster", 
   name: "Orc", 
   avatar: "images/orc.png", 
   health: 10, 
   diceRoll: 4
}

function renderCharacter(data) {
   document.getElementById(data.elementId).innerHTML =
       `<div class="character-card">
           <h4 class="name"> ${data.name} </h4>
           <img class="avatar" src="${data.avatar}" />
           <div class="health">health: <b> ${data.health} </b></div>
           <div class="dice-container">
               <div class="dice"> ${data.diceRoll} </div>
           </div>
       </div>`
}

renderCharacter(hero);
renderCharacter(monster);