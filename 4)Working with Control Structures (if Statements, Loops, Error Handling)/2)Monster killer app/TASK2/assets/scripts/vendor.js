const monsterHealth = document.getElementById('monster-health');
const playerHealth = document.getElementById('player-health');
const bonusLife = document.getElementById('bonus-life');

const attackB = document.getElementById('attack-btn');
const strongB = document.getElementById('strong-btn');
const healB = document.getElementById('heal-btn');
const logB = document.getElementById('log-btn');

function adjustHealthBars(maxLife) {
  monsterHealth.max = maxLife;
  monsterHealth.value = maxLife;
  playerHealth.max = maxLife;
  playerHealth.value = maxLife;
}

function dealMonsterDamage(damage) {
  const dealDamage = Math.random() * damage;
  monsterHealth.value = +monsterHealth.value - dealDamage;
  return dealDamage;
}

function dealPlayerDamage(damage) {
  const dealDamage = Math.random() * damage;
  playerHealth.value = +playerHealth.value - dealDamage;
  return dealDamage;
}

function increasePlayerHealth(healValue) {
  playerHealth.value = +playerHealth.value + healValue;
}

function resetGame(value) {
  playerHealth.value = value;
  monsterHealth.value = value;
}

function removeBonusLife() {
  bonusLife.parentNode.removeChild(bonusLife);
}

function setPlayerHealth(health) {
  playerHealth.value = health;
}
