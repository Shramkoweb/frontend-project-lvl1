import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ');

const playGames = (game, rules, rounds) => {
  console.log('Welcome to the Brain Games!\n');
  const userName = getUserName();
  console.log(`Hello, ${userName}\n`);
  console.log(`${rules}\n`);

  for (let i = 1; i <= rounds; i += 1) {
    const isWinRound = game(); // must return true if current round win
    if (isWinRound) {
      const finalRoundMessage = i === rounds ? `Congratulations, ${userName}!` : 'Correct!';
      console.log(finalRoundMessage);
    } else {
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};

export {
  getUserName,
  playGames,
};
