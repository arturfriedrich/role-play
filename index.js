/*
Challenge
1. Create a function called getDiceRollArray that uses a 
   for loop to return an array of random numbers between 1-6. 
2  The function should have diceCount as a parameter and the 
   array it returns should be diceCount length.
3  For testing purposes, call the function with a diceCount of 
   3 and log out the result. 
** check out hint.md for extra help! **
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


function getDiceRollArray(diceCount) {
   let resultsArray = []
   for (let i=0; i<diceCount; i++) {
      resultsArray.push(Math.floor(Math.random()*6) + 1)
   }
   return resultsArray
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