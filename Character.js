import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from "./utils.js"


class Character {
    constructor(data) {
        Object.assign(this, data)
        this.maxHealth = this.health
        this.diceHtml = getDicePlaceholderHtml(this.diceCount)
    }
    
    
    setDiceHtml = function () {
        this.currentDiceScore = getDiceRollArray(this.diceCount);
        this.diceHtml = this.currentDiceScore.map((num)=> 
            `<div class="dice">${num}</div>`).join("")
    }

    getHealthBarHtml = function () {
        const percent = getPercentage(this.health, this.maxHealth)
        return `
        <div class="health-bar-outer">
            <div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
            style="width: ${percent}%;">
            </div>
        </div>`
    }

    takeDamage = function(attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, current) => total + current)
        this.health -= totalAttackScore
        if ( this.health <= 0 ) {
            this.health = 0
            this.dead = true
        }
        console.log()
    }
    
    getCharacterHtml = function () {
        const { elementId, name, avatar, health, diceCount, diceHtml } = this
        const healthBar = this.getHealthBarHtml()
           return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                ${this.getHealthBarHtml()}
                <div class="dice-container">
                    ${diceHtml}
                </div>
            </div>`
    }  
}

export default Character