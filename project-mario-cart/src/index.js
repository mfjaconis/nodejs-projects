const player1 = {
  nome: "Mario",
  velocidade: 4,
  manobrabilidade: 3,
  poder: 3,
  pontos: 0,
};

const player2 = {
  nome: "Luigi",
  velocidade: 3,
  manobrabilidade: 4,
  poder: 4,
  pontos: 0,
};

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
      break;
  }

  return result;
}

async function logRowResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Roda ${round}`);

    //sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    //rolar os dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    //teste de habilidade
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "RETA") {
      totalTestSkill1 = diceResult1 + character1.velocidade;
      totalTestSkill2 = diceResult2 + character2.velocidade;

      await logRowResult(
        character1.nome,
        block,
        diceResult1,
        character1.velocidade
      );

      await logRowResult(
        character2.nome,
        block,
        diceResult2,
        character2.velocidade
      );

      if (totalTestSkill2 === totalTestSkill1) {
        console.log(`\nConfronto empatado nenhum ponto foi ganho!`);
      }
    }
    if (block === "CURVA") {
      totalTestSkill1 = diceResult1 + character1.manobrabilidade;
      totalTestSkill2 = diceResult2 + character2.manobrabilidade;

      await logRowResult(
        character1.nome,
        block,
        diceResult1,
        character1.manobrabilidade
      );

      await logRowResult(
        character2.nome,
        block,
        diceResult2,
        character2.manobrabilidade
      );

      if (totalTestSkill2 === totalTestSkill1) {
        console.log(`\nConfronto empatado nenhum ponto foi ganho!`);
      }
    }
    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.poder;
      let powerResult2 = diceResult2 + character2.poder;

      console.log(`${character1.nome} confrontou com ${character2.nome}!🥊`);

      await logRowResult(character1.nome, block, diceResult1, character1.poder);

      await logRowResult(character2.nome, block, diceResult2, character2.poder);

      //verificando o vencedor
      if (powerResult1 > powerResult2 && character2.pontos > 0) {
        console.log(
          `\n${character1.nome} ganhou o confronto! ${character2.nome} perdeu 1 ponto! 🐢`
        );
        character2.pontos--;
      }

      if (powerResult2 > powerResult1 && character1.pontos > 0) {
        console.log(
          `\n${character2.nome} ganhou o confronto! ${character1.nome} perdeu 1 ponto! 🐢`
        );
        character1.pontos--;
      }

      console.log(
        powerResult1 === powerResult2
          ? "Confronto empatado nenhum ponto foi ganho!"
          : ""
      );
    }

    //verificando o vencedor
    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`\n${character1.nome} marcou um ponto!`);
      character1.pontos++;
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`\n${character2.nome} marcou um ponto!`);
      character2.pontos++;
    }

    console.log("____________________________________");
  }
}

async function declareWinner(character1, character2) {
  console.log(`Resultado final: `);
  console.log(`${character1.nome}: ${character1.pontos} ponto(s)`);
  console.log(`${character2.nome}: ${character2.pontos} ponto(s)`);

  if (character1.pontos > character2.pontos)
    console.log(`\n${character1.nome} venceu a corrida! Parabéns 🏆`);
  else if (character2.pontos > character1.pontos)
    console.log(`\n${character2.nome} venceu a corrida! Parabéns 🏆`);
  else console.log(`\n A corrida terminou em empate!`);
}

(async function main() {
  console.log(
    `\n🏁🚨 Corrida entre ${player1.nome} e ${player2.nome} começando...\n`
  );

  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);
})();
