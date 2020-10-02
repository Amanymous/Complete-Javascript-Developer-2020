const Attack_Value = 10;
let chosenMOnsterHealth = choseMaxLife;
let currentMonsterHealth = chosenMaxLife;

adjustHealthBars(choseMaxLife);

function attackaHandler() {
  const damage = dealMonsterDamage(Attack_Value);
  currentMonsterHealth -= damage;
}
attackB.addEventListener('click', attackaHandler);
