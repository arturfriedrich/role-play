import {getDiceRollArray, getDicePlaceholderHtml} from "./utils.js"

/*
CHALLENGE
1. Add code to takeDamage so that when he character reaches 
zero heath, they stay at zero health and don't drop below 
zero.
** hint.md for help!!**
*/

function Character(data) {
    Object.assign(this, data)
    
    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.takeDamage = function(attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, current) => {
            return total + current
        })
        this.health -= totalAttackScore
    }
    
    this.getDiceHtml = function(diceCount) {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map(function(num) {
            return `<div class="dice">${num}</div>`
        }).join('')
    }

    this.getCharacterHtml = function () {
        const { elementId, name, avatar, health, diceCount, diceArray } = this;      
        let diceHtml = this.getDiceHtml(diceCount);        
           return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">
                    ${diceArray}
                </div>
            </div>`
    }  
}

export default Character