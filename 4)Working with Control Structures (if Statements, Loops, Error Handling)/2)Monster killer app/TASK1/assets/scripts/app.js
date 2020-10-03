const Attack_Value = 10;
const strong_attack_value = 17;
const monster_attack_value = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackMonster(mode) {
  let maxDamage;
  if (mode === 'Attack') {
    maxDamage = Attack_Value;
  } else if (mode === 'strong_attack') {
    maxDamage = strong_attack_value;
  }
  const damage = dealMonsterDamage(Attack_Value);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(monster_attack_value);
  if (currentPlayerHealth <= 0 && currentPlayerHealth > 0) {
    alert('won');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('lost');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('draw');
  }
}

function attackHandler() {
  attackMonster('Attack');
}
function strongAttackHandler() {
  attackMonster('strong_attack');
}
strongB.addEventListener('click', strongAttackHandler);
attackB.addEventListener('click', attackHandler);
