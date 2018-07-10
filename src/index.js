import readlineSync from "readline-sync";

import { print } from "./utils";

import even, { rule as evenRule } from "./game/brain-even";
import calc, { rule as calcRule } from "./game/brain-calc";
import gcd, { rule as gcdRule } from "./game/brain-gcd";
import balance, { rule as balanceRule } from "./game/brain-balance";

const askQuestion = str => readlineSync.question(`${str} `);

const games = {
  even: {
    game: even,
    rule: evenRule
  },
  calc: {
    game: calc,
    rule: calcRule
  },
  gcd: {
    game: gcd,
    rule: gcdRule
  },
  balance: {
    game: balance,
    rule: balanceRule
  }
};

export default (gameName, turns = 3) => {
  print("Welcome to the Brain Games!\n");
  const player = askQuestion("May I have your name?");
  print(`Hello, ${player}!`);
  print(`\n${games[gameName].rule}\n`);

  const { game } = games[gameName];

  const turn = steps => {
    if (!steps) {
      print(`Congratulations, ${player}!`);
      return;
    }

    const { question, answer } = game();

    const attempt = askQuestion(`Question: ${question}`);

    if (answer === attempt) {
      print("Correct!\n");
      turn(steps - 1);
    } else {
      print(
        `'${attempt}' is wrong answer =(`,
        `Correct answer was '${answer}'\n`,
        `Let's try again, ${player}!`
      );
    }
  };
  turn(turns);
};
