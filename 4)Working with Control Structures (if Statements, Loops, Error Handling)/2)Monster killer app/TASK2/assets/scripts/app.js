const Attack_Value = 10;
const strong_attack_value = 17;
const monster_attack_value = 14;
const heal_value = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endRound() {
  const playerDamage = dealPlayerDamage(monster_attack_value);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('won');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('lost');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('draw');
  }
}

function attackMonster(mode) {
  let maxDamage;
  if (mode === 'Attack') {
    maxDamage = Attack_Value;
  } else if (mode === 'strong_attack') {
    maxDamage = strong_attack_value;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  endRound();
}

function attackHandler() {
  attackMonster('Attack');
}
function strongAttackHandler() {
  attackMonster('strong_attack');
}

function healPlayerHandler() {
  let healvalue;
  if (currentPlayerHealth >= chosenMaxLife - heal_value) {
    alert(" can't heal to more than your max initial health.");
    heal_value = chosenMaxLife - currentPlayerHealth;
  } else {
    healvalue = heal_value;
  }
  increasePlayerHealth(healvalue);
  currentPlayerHealth += healvalue;
  endRound();
}
healB.addEventListener('click', healPlayerHandler);
strongB.addEventListener('click', strongAttackHandler);
attackB.addEventListener('click', attackHandler);
