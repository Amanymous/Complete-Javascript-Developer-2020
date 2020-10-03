const Attack_Value = 10;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackaHandler() {
  const damage = dealMonsterDamage(Attack_Value);
  currentMonsterHealth -= damage;
}
attackB.addEventListener('click', attackaHandler);
