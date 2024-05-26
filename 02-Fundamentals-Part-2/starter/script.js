'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriverLicense = true;

// if(hasDriversLicense) console.log('I can drive');

// // const interface = 'Audio';
// // const private = 535;

// function logger(){
//     console.log('My name is Vuk');
// }

// // calling / running / invoking function
// logger();

// function fruitProcessor(apples, oranges){
//     const juice = (`Juice with ${apples} apples and ${oranges} oranges.`);
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);



// // FUNCTION DECLARATION - moze da se zove ranije

// const age1 = calcAge1(1991);


// function calcAge1(birthYear){
//     return 2024 - birthYear;

// }
// console.log(age1);


// // FUNCTION EXPRESSION - FUNKCIJA U VARIJABLI
// const calcAge2 = function (birthYear){
//     return 2024 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);




// const calcAge2 = function (birthYear){
//     return 2024 - birthYear;
// }

// // ARROW FUNCTION
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2024 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
  
// }

// console.log(yearsUntilRetirement(1991, 'Mirko'));
// console.log(yearsUntilRetirement(1996, 'Vuk'));

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = (`Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`);
//     return juice;
// }

// console.log(fruitProcessor(2,3));

// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName)  {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0 ){
//         return retirement;
//     }

//     else{
//         const yearsPast = retirement * -1;
//         return `${firstName} is ${yearsPast} years past retirement`
//     } 
//     // return `${firstName} retires in ${retirement} years`;
  
// }

// console.log(yearsUntilRetirement(1991, 'Vuk'));
// console.log(yearsUntilRetirement(1970, 'Mike'));

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

/* Write your code below. Good luck! 🙂 */

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const scoreDolphins = calcAverage(50, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// function checkWinner(scoreDolphins, scoreKoalas){
//     if(scoreDolphins >= scoreKoalas * 2){
//         console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
//     }
//     else if(scoreKoalas >= scoreDolphins * 2){
//         console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
//     }
//     else{
//         console.log('No team wins...')
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// const friend1 = 'Aca';
// const friend2 = 'Urkela';
// const friend3 = 'Mile';

// // krsten nacin pravljenja arraya
// const friends = ['Aca', 'Urkela', 'Mile'];
// console.log(friends);

// //jos jedan nacin pravljenja arraya
// // const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// // INACE KAD SE BROJI, BROJI SE OD NULE
// // LENGTH NIJE 0 BASED, DAKLE IDE OD KECA, AKO TI TREBA POSLEDNJA VREDNOST IDE .length pa -1
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const ime = 'Vuk'
// const vuk = [ime, ' Knezevic', 2024 - 1996, 'kreten', friends];
// console.log(vuk);



// function calcAge1(birthYear){
//     return 2024 - birthYear;

// }

// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge1(years[0]);
// const age2 = calcAge1(years[1]);
// const age3 = calcAge1(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge1(years[0]), calcAge1(years[1]), calcAge1(years[years.length - 1])];
// console.log(ages);


// add - kraj i pocetak
// const friends = ['Aca', 'Urkela', 'Mile'];
// const newLength = friends.push('Jay');

// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // Remove elements - kraj i pocetak
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// // ako ti treba podatak na koji su uticale ove funkcije, gurni ih u varijablu

// console.log(friends.indexOf('Urkela'));
// console.log(friends.indexOf('Urke'));

// // ES6 METODA - INCLUDES
// console.log(friends.includes('Aca'));
// console.log(friends.includes('Aca2222'));


// const bill = 100;
// function calcTip(bill){
//     if(bill >= 50 && bill <= 300){
//         return bill * 0.15;
//     }
//     else{
//         return bill * 0.20;
//     }
// }

// let bills = [125, 555, 44];

// let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// let totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]

// console.log(tips);
// console.log(totals);


// OBJEKTI
// const vuk = {
//     firstName: 'Vuk',
//     lastName: 'Knezevic',
//     age: 2024 - 1996,
//     job: 'kreten',
//     friends: ['Aca', 'Urkela', 'Mile']
// };

// console.log(`${vuk.firstName} has ${vuk.friends.
// length} friends, and his best friend is called ${vuk.friends[0]}`);


// console.log(vuk);
// // DOT operator - izaberes konkretnu stvar
// console.log(vuk.lastName);
// // bracket notation + mozes da ubacis varijablu kao npr dole sto stoji
// console.log(vuk['lastName']);

// const nameKey = 'Name';
// console.log(vuk['first' + nameKey]);
// console.log(vuk['last' + nameKey]);

// const interestedIn = prompt(`What do you want to know about Vuk? 
// Choose between firstName, lastName, age, job and friends`);

// if(vuk[interestedIn]){
//     console.log(vuk[interestedIn]);
// }
// else{
//     console.log(`sta seres ti bre`)
// }

// vuk.location = 'Beograd';
// vuk['github'] = '@vuk751';
// console.log(vuk);


// FUNKCIJA U OKVIRU OBJEKTA SE ZOVE METHOD
// mora da se koristi function expression, ne moze kao funkcija da se napravi
// const vuk = {
//     firstName: 'Vuk',
//     lastName: 'Knezevic',
//     birthYear: 1996,
//     job: 'kreten',
//     friends: ['Aca', 'Urkela', 'Mile'],
//     hasDriversLicense: true,
//     // calcAge: function(birthYear){
//     //     return 2024 - birthYear;
//     // }

//     // calcAge: function(birthYear){
//     //     return 2024 - this.birthYear;
//     // }

//     calcAge: function(){
//         this.age = 2024 - this.birthYear;
//         return this.age;
//     },

  
// };


// vuk.calcAge();

// // this se koristi da referujes na objekat u okviru kojeg se nalazis, this je onaj koji zove

// console.log(`${vuk.firstName} is a ${vuk.age} years old ${vuk.job}`)

// console.log(vuk.age);
// console.log(vuk.age);
// console.log(vuk.age);
// // console.log(vuk['calcAge']());
// console.log(`${vuk.firstName} is a ${vuk.calcAge()} years old ${vuk.job} and he has ${vuk.hasDriversLicense ? 'a' : 'no'} driver's license.`)

// const mark = {
//     fullName: 'Mark Miller',
//     mass:  78,
//     height: 1.69,
    
//     calcBMI: function(){
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };


// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function(){
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// john.calcBMI();



// function higherBMI(){
//     if((john.bmi) > (mark.calcBMI())){
//         console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.
//         fullName}'s (${mark.bmi})!`);
//     }
//     else {
//         console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.
//             fullName}'s (${john.bmi})!`);
//     }
// }

// higherBMI();

// definisi start, definisi sta se proverava, definisi sta se radi
// for(let rep = 1; rep <= 10; rep++ ){
//     console.log(`Trcim pumpam skleklove po ${rep}. put `);
// }

// const vukArray = [
//     'Vuk',
//     'Knezevic',
//     2024 - 1996,
//     'kreten',
//     ['Aca', 'Urkela', 'Mile'],
   
    
// ];
// const types = [];

// // looping array
// for(let i = 0; i < vukArray.length ;i++){
//     // reading array
//     console.log(vukArray[i], typeof vukArray[i]);

//     // filling array
//     types[i] = vukArray[i];
//     // ovaj je bolji a ja sam genije
//     types.push(typeof vukArray[i]);
//     console.log(types);
// };


// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// // JEDAN NACIN
// for(let i = 0; i < years.length; i++){
//     ages.push(2037 - years[i]);
    
// }
// console.log(ages);

// // MOJ NACIN
// for(let year of years){
//     ages.push(2037 - year);
    
// }

// // continue and break
// console.log('only--------strings------------');
// for(let i = 0; i < vukArray.length ;i++){
//     if(typeof vukArray[i] !== 'string') continue;
//     console.log(vukArray[i], typeof vukArray[i]);



// };console.log('---------break with number-----------');
// for(let i = 0; i < vukArray.length ;i++){
//     if(typeof vukArray[i] === 'number') break;
//     console.log(vukArray[i], typeof vukArray[i]);
// };


// const vuk = [
//     'Vuk',
//     'Knezevic',
//     2024 - 1996,
//     'kreten',
//     ['Aca', 'Urkela', 'Mile'],
   
    
// ];

// invert array
// for(let i = vuk.length -1; i >= 0; i-- ){
//     console.log(i, vuk[i]);
// }

// exercise practice
// for (let rep = 1; rep <= 10; rep++){
//         console.log(`Lifting weights repetition ${rep}`);
//     }


// let rep = 1;
// while(rep <= 10){
//     console.log(`Lifting weights repetition ${rep}`);
//     rep++;
// }

// FOR KAD ZNAS KOLIKO TI TREBA, TIPA ARRAY
// WHILE KAD NE ZNAS KOLIKO ITERACIJA IMA
// let dice = Math.trunc(Math.random() * 6) + 1
// while(dice !== 6){
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) {
//         console.log('Loop is DONE');
//     }
// }



  
  /* Write your code below. Good luck! 🙂 */
  
  let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  let tips = [];
  let totals = [];

  const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }

  for (let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
   
  }
  
const calcAverage = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        
        
    }
    let avg = sum / arr.length;
    return avg;
    
}

console.log(calcAverage([3, 3, 6]));
console.log(calcAverage(totals));




  








