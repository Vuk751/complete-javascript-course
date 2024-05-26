// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// let x = 23;
// if (x === 23) console.log(23);

// const calcAge = birthYear => 2024 - birthYear;

// console.log('sojsarisa22');

// izracunaj amplitudu
// const temperatures = [3, -2, -6, -1, 9, 'error', 13, 17, 15, 14, 9, 5];
// const perfectTemps = temperatures.filter(Number);
// console.log(perfectTemps);
// // sta je amplituda? razlika izmedju najvise i najnize vrednosti
// // kako da dobijem najvisu i najnizu vrednost

// let maxTemp = Math.max(...perfectTemps);
// console.log(maxTemp);

// let minTemp = Math.min(...perfectTemps);
// console.log(minTemp);

// let difference = Math.abs(maxTemp - minTemp);
// console.log(difference);

// const temperatures = [3, -2, -6, -1, 9, 'error', 13, 17, 15, 14, 9, 5];

// if (!temperatures.filter(val => typeof val === 'number' && val !== 'error').length) {
//     console.log('No valid temperature data found.');
//     return;
// }

// const perfectTemps = temperatures.filter(val => typeof val === 'number' && val !== 'error');
// const maxTemp = Math.max(...perfectTemps);
// const minTemp = Math.min(...perfectTemps);
// const amplitude = Math.abs(maxTemp - minTemp);

// console.log(perfectTemps);
// console.log(maxTemp);
// console.log(minTemp);
// console.log(amplitude);

// function processTemperatures(temperatures) {
//   if (!temperatures.filter(val => typeof val === 'number' && val !== 'error').length) {
//     console.log("No valid temperature data found.");
//     return;
//   }

//   const perfectTemps = temperatures.filter(val => typeof val === 'number' && val !== 'error');
//   const maxTemp = Math.max(...perfectTemps);
//   const minTemp = Math.min(...perfectTemps);
//   const amplitude = Math.abs(maxTemp - minTemp);

//   console.log(perfectTemps);
//   console.log(maxTemp);
//   console.log(minTemp);
//   console.log(amplitude);
// }

// const temperatures = [3, -2, -6, -1, 9, 'error', 13, 17, 15, 14, 9, 5];
// processTemperatures(temperatures);

// PROBLEM 1 - GET  AMPLITUDE
// const temperatures = [3, -2, -6, -1, 9, 'error', 13, 17, 15, 14, 9, 5];
// function temp(temp) {
//     const perfectTemps = temp.filter(Number);
//     // console.log(perfectTemps);
//     // sta je amplituda? razlika izmedju najvise i najnize vrednosti
//     // kako da dobijem najvisu i najnizu vrednost

//     let maxTemp = Math.max(...perfectTemps);
//     // console.log(maxTemp);

//     let minTemp = Math.min(...perfectTemps);
//     // console.log(minTemp);

//     let difference = maxTemp - minTemp;
//     console.log(difference);
// }

// temp([-5, 15, 14, 22]);

// PROBLEM 2 - GET AMPLITUDE FROM TWO ARRAYS
// namera ti je da spojis dva arraya, a ne da se ucitavaju oba

// const temperatures1 = [550, -2, -6, -1, 9, 'error', 13, 17, 15, 14, 9, 5];
// const temperatures2 = [20, 7, 11, -1, 4, 'error', 19, 17, -917, 6, 9, 5];
// function temp(x, y) {
//     const mergeTemps = x.concat(y);
//     const filterTemps = mergeTemps.filter(Number);

//     // console.log(perfectTemps);
//     // sta je amplituda? razlika izmedju najvise i najnize vrednosti
//     // kako da dobijem najvisu i najnizu vrednost

//     let maxTemp = Math.max(...filterTemps);
//     // console.log(maxTemp);

//     let minTemp = Math.min(...filterTemps);
//     // console.log(minTemp);
//     let difference = maxTemp - minTemp;
//     console.log(difference);
//     return difference;
// }

// temp(temperatures1, temperatures2);

// // temp([temperatures1, temperatures2]);

// const measureKelvin = function () {
//     const measurement = {
//         type: 'temp',
//         unit: 'celsius',
//         value: Number(prompt('Degrees celsius:')),
//     };
//     const kelvin = measurement.value + 273;
//     return kelvin;
// };

// console.log(measureKelvin());

let printForecast = function (arr) {
    let emptyString = '';
    for (let i = 0; i < arr.length; i++) {
        let result = `${arr[i]}°C in ${i + 1} days ... `;
        emptyString += result;
    }
    console.log('... ' + emptyString);
};

printForecast([17, 21, 23]);
