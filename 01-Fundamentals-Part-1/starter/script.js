// // let js = 'amazing';
// // console.log(40+8+23-10);

// // console.log('Ime');
// // console.log('23');

// // let firstName = "Vuk";
// // let PI = 3.1415;

// // // varijable koje su konstante mozes pisati velikim slovima (ili samo napravi const)

// // // ASSIGNMENT 1

// // let country = "Serbia";
// // let contintent = "Europe";
// // let pop = "7200000";

// // console.log(country);
// // console.log(contintent);
// // console.log(pop);

// // let javascriptIsFun = true;
// // console.log(javascriptIsFun);

// // // typeof definise sta je posle njega
// // console.log(typeof true);
// // console.log(typeof "Jonas");

// // // mozes da promenis tip vrednosti varijable posle kako god hoces, ni ne koristi se let
// // javascriptIsFun = 'YES!';
// // console.log(javascriptIsFun);

// // // ovo je sve undefined
// // let year;
// // console.log(year);
// // console.log(typeof year);

// // // i onda promenimo na drugi tip
// // year = 1991;
// // console.log(typeof year);

// // console.log(typeof null);


// // LET CONST VAR

// // let age = 30;
// // age = 31;

// // const birthYear = 1991;

// // // OVO NE MOZE, CONST MORA DA IMA VREDNOST
// // // const job;

// // var job = 'programmer';
// // job = 'teacher';
// // console.log(job);

// const now = 2024;
// const ageVuk = now - 1996;
// const ageMilica = now - 1990;
// console.log(ageVuk, ageMilica);

// console.log(ageVuk * 22, ageVuk / 10, ageVuk ** 3);

// const firstName = 'Vuk';
// const lastName = 'Knezevic';
// console.log(firstName + ' ' + lastName);

// let x = 10 + 5; // 15
// x += 10; // x = x + 10
// x *= 4; // x = x * 4
// x++; // x = x + 1
// x--; // x = x - 1
// x--; // x = x - 1
// console.log(x);

// // Comparison operators
// console.log(ageMilica > ageVuk); 
// // I IMAMO <, >, >=, <=
// console.log (ageMilica >= 34);

// const isFullAge = ageMilica >= 34;

// console.log(now - 1991 > now - 2024);


/* Write your code below. Good luck! 🙂 */

// let massMark = 78;
// let heightMark = 1.69;

// let massJohn = 95;
// let heightJohn = 1.88;

// let BMIMark = (massMark / (heightMark * heightMark));
// let BMIJohn = (massJohn / (heightJohn * heightJohn));

// console.log(BMIMark);
// console.log(BMIJohn);

// let markHigherBMI = (BMIMark > BMIJohn);

// console.log(markHigherBMI);

// TEMPLATE LITERALS

// const firstName = 'Vuk';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2024;

// const sveIkada = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job;

// const sveIkadaNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;

// console.log(sveIkadaNew);

// console.log(sveIkada);


// // najbolje uvek koristi backtickove tj template literals - 
// // mogu da se trpaju funkcije i MULTILINE sensitive su

// const age = 20;
// const isOldEnough = age >= 18;

// if(isOldEnough){
//     const yearsOver = age - 18;
//    console.log(`Sme, cak i kasni ${yearsOver} godine`); 
// }
// else{
//     const yearsLeft = 18 - age;
//     console.log(`Ne sme, ali ce moci za ${yearsLeft} godine`);
// }

// const birthYear = 2200;

// let century;
// if(birthYear <= 2000){
//     century = 20;
// }
// else{
//     century = 21;
// }

// console.log(century);


// // TYPE CONVERSION
// const inputYear = '1991';

// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(String(23));

// // TYPE COERCION
// console.log('I am ' + 23 + ' years old');
// // 23 se pretvara u string jer se sabira u okviru stringa
// console.log('23' - '10' - 3);
// // Minus ih je konvertovao u brojeve sve
// console.log('23' / '2');
// // deljenje konvertuje u brojeve

// // 5 falsy values: 0, '', undefined, null, NaN
// // sve ostalo je truthy

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Vuk'));
// console.log(Boolean({}));

// const money = 0;
// if(money){
//     console.log("Don't spend it all ;)");
// }
// else{
//     console.log('You should get a job!');
// }

// let height = 0;
// if(height){
//     console.log('YAY! Height is defined');
// }
// else{
//     console.log('Height is UNDEFINED');
// }

// // sve cifre sem nule definisu height, 0 je falsy

// const age = 18;
// if(age === 18) console.log('You just became an adult :D (strict)');
// if(age == 18) console.log('You just became an adult :D (loose)');

// // == radi type coercion, dakle moze '18' == 18, a tri === su strict, ne konvertuje

// const favourite = Number(prompt("What's your favorite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if(favourite === 23){
//     console.log('Cool! 23 is an amazing number!')
// }
// else if(favourite === 7){
//     console.log('au nisi smeo sedmicu rodjo')
// }
// else{
//     console.log('ubij se, nije ni jedno ni drugo')
// }

// if (favourite !== 23) console.log('Why not 23?');

// const hasDriversLicense = true;
// const hasGoodVision = true;

// // AND
// console.log(hasDriversLicense && hasGoodVision);

// // OR
// console.log(hasDriversLicense || hasGoodVision);

// // NOT
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive){
//     console.log('She can drive');
// }
// else{
//     console.log('Neko drugi');
// }

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if(hasDriversLicense && hasGoodVision && !isTired){
//     console.log('She can drive');
// }
// else{
//     console.log('Neko drugi');
// }

/* Write your code below. Good luck! 🙂 */

// let scoreDolphins = (96 + 108 + 89) / 3;
// let scoreKoalas = (88 + 91 + 110) / 3;

// if(scoreDolphins > scoreKoalas){
//     console.log("Dolphins win the trophy");
// }
// else if(scoreKoalas > scoreDolphins){
//     console.log("Koalas win the trophy");
// }
// else{
//     console.log("Both win the trophy");
// }

// let scoreDolphins = (97 + 30 + 101) / 3;
// let scoreKoalas = (97 + 30 + 101) / 3;

// if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
//     console.log("Dolphins win the trophy");
// }
// else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100){
//     console.log("Koalas win the trophy");
// }
// else if (scoreKoalas === scoreDolphins && scoreDolphins >= 100 && scoreKoalas >= 100){
//     console.log("Both win the trophy" );
// }
// else{
//     console.log('No one wins the trophy');
// }

// const day = prompt('Koji je dan danas jebo ga ti');

// switch(day){
//     case 'monday':
//         console.log('PONEDELJAK BATOJEA');
//         console.log('Joooj sto volim ponedeljak');
//     break;

//     case 'tuesday':
//         console.log('Ajmo odma posle ponedeljka sesovanje');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('SREDA ILI CETVRTAK JEA');
//         break;
//     case 'friday':
//         console.log('PETAK BEBOOOOOOOJEAJEAJ');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('SEKSUJ GA VIKEND JE');
//         break;
//     default: 
//         console.log('PA NEMA')

// }

// const day = 'wednesday';

// if(day === 'wednesday' || day === 'thursday'){
//     console.log('Sreda ili cetvrtak qq laylay');
// }
// else{
//     console.log('Nista od navedenog jedi govna');
// }


// // CONDITIONAL OPERATOR
// const age = 23;
// age >= 18 ? console.log('I like to drink wine') : 
// console.log('I like to drink water');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if(age >= 18){
//     drink2 = 'wine';
// }
// else{
//     drink2 = 'water';
// }

// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

const bill = 275;

/* Write your code below. Good luck! 🙂 */

const tip = bill >= 50 && bill <= 300  ? bill * 0.15 : bill * 0.20;
const total = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${total}`);



