'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// za input polja ide value
// document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
// initialize highScore sa nulom, pa uporedjuj trenutni skor.
// ako je veci, highscore postaje to
let highScore = 0;
// document.querySelector('.number').textContent = secretNumber;
// STVARI KOJE SE PONAVLJAJU GRUNI U VARIJABLU
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    //   KRENI OD PRAZNOG POLJA, STA SE DESI KAD NEMA NISTA
    if (!guess) {
        document.querySelector('.message').textContent =
            'PASXKELA MORA NEKI INPUT BE';

        // When player wins
    } else if (guess === secretNumber) {
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;

        // manipulacija DOM-om - pozadina i width number polja,
        // camelCase za css property, vrednost se passuje kao string
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // Guess is wrong
    }

    // Guess too high
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost!!!!!!!!';
    //         document.querySelector('.score').textContent = 0;
    //     }

    //     // Guess too low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost!!!!!!!!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }

    // REFACTORED NICE CODE
    // else if (guess !== secretNumber) {
    //     if (score > 1) {
    //         var message;
    //         if (guess > secretNumber) {
    //             message = 'Too high!';
    //         } else {
    //             message = 'Too low!';
    //         }
    //         document.querySelector('.message').textContent = message;
    //         score--;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost!!!!!!!!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    //     document.querySelector('.score').textContent = score;
    // }

    // REFACTORED WITH TERNARY
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');

            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost!!!!!!!!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    console.log(secretNumber);
});
