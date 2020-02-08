import readlineSync from 'readline-sync';

export const greeting = () => {
    console.log('Welcome to the Brain Games!\n');

    const askforName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${ askforName }`);

    return askforName;
};
