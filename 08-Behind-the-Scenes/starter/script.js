// // // // 'use strict';

// // // // function calcAge(birthYear) {
// // // //     const age = 2037 - birthYear;

// // // //     function printAge() {
// // // //         let output = `${firstName}, you are ${age}, born in ${birthYear}`;
// // // //         console.log(output);

// // // //         if (birthYear >= 1981 && birthYear <= 1996) {
// // // //             var millenial = true;
// // // //             const firstName = 'Steven';
// // // //             const str = `Oh and you're a millenial, ${firstName}`;
// // // //             console.log(str);

// // // //             function add(a, b) {
// // // //                 return a + b;
// // // //             }

// // // //             output = 'NEW OUTPUT!';
// // // //             console.log(output);
// // // //         }
// // // //         console.log(millenial);
// // // //     }
// // // //     printAge();
// // // //     return age;
// // // // }

// // // // const firstName = 'Vuk';
// // // // calcAge(1996);

// // // // console.log(me);
// // // // console.log(job);
// // // // console.log(year);

// // // // var me = 'Vuk';
// // // // let job = 'mentol';
// // // // const year = 1996;

// // // console.log(addDecl(2, 3));
// // // console.log(addExpr(2, 3));
// // // console.log(addArrow(2, 3));

// // // function addDecl(a, b) {
// // //     return a + b;
// // // }

// // // const addExpr = function (a, b) {
// // //     return a + b;
// // // };

// // // const addArrow = (a, b) => a + b;

// // // console.log(this);

// // // const calcAge = function (birthYear) {
// // //     console.log(2037 - birthYear);
// // //     // console.log(this);
// // // };

// // // calcAge(1991);

// // // calcAgeArrow = birthYear => {
// // //     console.log(2037 - birthYear);
// // //     // console.log(this);
// // // };

// // // calcAgeArrow(1980);

// // // const vuk = {
// // //     year: 1996,
// // //     calcAge: function () {
// // //         // console.log(this);
// // //         console.log(2037 - this.year);
// // //     },
// // // };

// // // vuk.calcAge();

// // // const matilda = {
// // //     year: 2017,
// // // };

// // // matilda.calcAge = vuk.calcAge;
// // // matilda.calcAge();

// // // const f = vuk.calcAge;
// // // f();

// // let firstName = 'vuk';
// // const vuk = {
// //     firstName: 'Vuk',
// //     year: 1996,
// //     calcAge: function () {
// //         // console.log(this);
// //         console.log(2037 - this.year);

// //         const isMillenial = function () {
// //             console.log(this.year >= 1981 && this.year <= 1996);
// //         };
// //         isMillenial();
// //     },

// //     // this u arrow funkcijama je WINDOW, nemoj da koristis arrow kao metodu
// //     // izbegavaj var, jer ga this targetuje kad nema drugog parenta
// //     greet: () => console.log(`Hey ${this.firstName}`),
// // };

// // vuk.greet();
// // console.log(this.firstName);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//     name: 'Vuk',
//     age: 30,
// };

// const friend = me;
// friend.age = 27;

// console.log(friend);
// console.log(me);

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference Types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// Copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log(jessica2);
console.log(jessicaCopy);
