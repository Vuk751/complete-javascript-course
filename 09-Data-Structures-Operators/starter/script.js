// // // // // // // // // // // 'use strict';

// // // // // // // // // // // // Data needed for a later exercise
// // // // // // // // // // // const flights =
// // // // // // // // // // //   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // // // // // // // // const { name, openingHours, categories } = restaurant;

// // // // // // // // // console.log(name, openingHours, categories);

// // // // // // // // // const {
// // // // // // // // //   name: restaurantName,
// // // // // // // // //   openingHours: hours,
// // // // // // // // //   categories: tags,
// // // // // // // // // } = restaurant;
// // // // // // // // // console.log(restaurantName, hours, tags);

// // // // // // // // // const { menu = [], starterMenu: starters = [] } = restaurant;
// // // // // // // // // console.log(menu, starters);

// // // // // // // // // // Mutating variables

// // // // // // // // // let a = 111;
// // // // // // // // // let b = 999;
// // // // // // // // // const obj = {
// // // // // // // // //   a: 23,
// // // // // // // // //   b: 7,
// // // // // // // // //   c: 14,
// // // // // // // // // };

// // // // // // // // // ({ a, b } = obj);
// // // // // // // // // console.log(a, b);

// // // // // // // // // // NESTED OBJECTS

// // // // // // // // // const {
// // // // // // // // //   fri: { open: o, close: c },
// // // // // // // // // } = openingHours;
// // // // // // // // // console.log(o, c);

// // // // // // // // // // // const arr = [2, 3, 4];
// // // // // // // // // // // const a = arr[0];
// // // // // // // // // // // const b = arr[1];
// // // // // // // // // // // const c = arr[2];

// // // // // // // // // // // // leva strana je destructure
// // // // // // // // // // // const [x, y, z] = arr;
// // // // // // // // // // // console.log(x, y, z);
// // // // // // // // // // // console.log(arr);
// // // // // // // // // // // let [main, , secondary] = restaurant.categories;
// // // // // // // // // // // console.log(main, secondary);

// // // // // // // // // // // // const temp = main;
// // // // // // // // // // // // main = secondary;
// // // // // // // // // // // // secondary = temp;
// // // // // // // // // // // // console.log(main, secondary);

// // // // // // // // // // // [main, secondary] = [secondary, main];
// // // // // // // // // // // console.log(main, secondary);

// // // // // // // // // // // console.log(restaurant.order(2, 0));

// // // // // // // // // // // const [p, q, r] = [8, 9];

// // // // // // // // const [firstBook, secondBook] = books;
// // // // // // // // console.log(firstBook, secondBook);

// // // // // // // // const [, , thirdBook] = books;
// // // // // // // // console.log(thirdBook);

// // // // // // // // const ratings = [
// // // // // // // //   ['rating', 4.19],
// // // // // // // //   ['ratingsCount', 144584],
// // // // // // // // ];

// // // // // // // // const [[, rating], [, ratingsCount]] = ratings;
// // // // // // // // console.log(rating, ratingsCount);

// // // // // // // // const ratingStars = [63405, 1808];
// // // // // // // // const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// // // // // // // // console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// // // // // // // // const { title, author, ISBN } = books[0];
// // // // // // // // console.log(title, author, ISBN);

// // // // // // // // const { keywords: tags } = books[0];
// // // // // // // // console.log(tags);

// // // // // // // // const { language, programmingLanguage = 'unknown' } = books[6];
// // // // // // // // console.log(books[6]);

// // // // // // // // ({ title: bookTitle, author: bookAuthor } = books[0]);

// // // // // // // // console.log(bookTitle, bookAuthor);

// // // // // // // // // const { bookRating = books[0].thirdParty.goodreads.rating } = books[0];
// // // // // // // // // BOLJI NACIN
// // // // // // // // const {
// // // // // // // //   thirdParty: {
// // // // // // // //     goodreads: { rating: bookRating },
// // // // // // // //   },
// // // // // // // // } = books[0];

// // // // // // // // console.log(bookRating);

// // // // // // // // function printBookInfo({ title, author, year = 'year unknown' }) {
// // // // // // // //   console.log(`${title} by ${author}, ${year}`);
// // // // // // // // }

// // // // // // // // // printBookInfo(books[0], year: 2024 );

// // // // // // // // // // Data needed for first part of the section

// // // // // // // // // Real world example
// // // // // // // // const ingredients = [
// // // // // // // //   prompt("Let's make pasta! Ingredient 1?"),
// // // // // // // //   prompt('Ingredient 2?'),
// // // // // // // //   prompt('Ingredient 3?'),
// // // // // // // // ];

// // // // // // // // console.log(ingredients);

// // // // // // // // restaurant.orderPasta(...ingredients);

// // // // // // // // Objects
// // // // // // // const newRestaurant = {
// // // // // // //   ...restaurant,
// // // // // // //   founder: 'Giuseppe Framboncinijeah',
// // // // // // //   foundedIn: 1990,
// // // // // // // };

// // // // // // // const restaurantCopy = { ...restaurant };
// // // // // // // restaurantCopy.name = 'Ristorante Roma';
// // // // // // // console.log(restaurantCopy.name);
// // // // // // // console.log(restaurant.name);

// // // // // // // console.log(newRestaurant);

// // // // // // // const arr = [7, 8, 9];

// // // // // // // const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// // // // // // // console.log(badNewArr);

// // // // // // // // SPREAD OPERATOR
// // // // // // // const newArr = [1, 2, ...arr];
// // // // // // // console.log(newArr);

// // // // // // // console.log(...newArr);

// // // // // // // // New array from object
// // // // // // // const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// // // // // // // console.log(newMenu);

// // // // // // // // Copy array
// // // // // // // const mainMenuCopy = [...restaurant.mainMenu];

// // // // // // // // join 2 or more arrays
// // // // // // // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // // // // // // console.log(menu);

// // // // // // // // Iterables: arrays, strings, maps, sets, NOT OBJECTS
// // // // // // // const str = 'Jonas';
// // // // // // // const letters = [...str, ' ', 'S.'];
// // // // // // // console.log(letters);

// // // // // // // // const books = [
// // // // // // // //   {
// // // // // // // //     title: 'Algorithms',
// // // // // // // //     author: ['Robert Sedgewick', 'Kevin Wayne'],
// // // // // // // //     publisher: 'Addison-Wesley Professional',
// // // // // // // //     publicationDate: '2011-03-24',
// // // // // // // //     edition: 4,
// // // // // // // //     keywords: [
// // // // // // // //       'computer science',
// // // // // // // //       'programming',
// // // // // // // //       'algorithms',
// // // // // // // //       'data structures',
// // // // // // // //       'java',
// // // // // // // //       'math',
// // // // // // // //       'software',
// // // // // // // //       'engineering',
// // // // // // // //     ],
// // // // // // // //     pages: 976,
// // // // // // // //     format: 'hardcover',
// // // // // // // //     ISBN: '9780321573513',
// // // // // // // //     language: 'English',
// // // // // // // //     programmingLanguage: 'Java',
// // // // // // // //     onlineContent: true,
// // // // // // // //     thirdParty: {
// // // // // // // //       goodreads: {
// // // // // // // //         rating: 4.41,
// // // // // // // //         ratingsCount: 1733,
// // // // // // // //         reviewsCount: 63,
// // // // // // // //         fiveStarRatingCount: 976,
// // // // // // // //         oneStarRatingCount: 13,
// // // // // // // //       },
// // // // // // // //     },
// // // // // // // //     highlighted: true,
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: 'Structure and Interpretation of Computer Programs',
// // // // // // // //     author: [
// // // // // // // //       'Harold Abelson',
// // // // // // // //       'Gerald Jay Sussman',
// // // // // // // //       'Julie Sussman (Contributor)',
// // // // // // // //     ],
// // // // // // // //     publisher: 'The MIT Press',
// // // // // // // //     publicationDate: '2022-04-12',
// // // // // // // //     edition: 2,
// // // // // // // //     keywords: [
// // // // // // // //       'computer science',
// // // // // // // //       'programming',
// // // // // // // //       'javascript',
// // // // // // // //       'software',
// // // // // // // //       'engineering',
// // // // // // // //     ],
// // // // // // // //     pages: 640,
// // // // // // // //     format: 'paperback',
// // // // // // // //     ISBN: '9780262543231',
// // // // // // // //     language: 'English',
// // // // // // // //     programmingLanguage: 'JavaScript',
// // // // // // // //     onlineContent: false,
// // // // // // // //     thirdParty: {
// // // // // // // //       goodreads: {
// // // // // // // //         rating: 4.36,
// // // // // // // //         ratingsCount: 14,
// // // // // // // //         reviewsCount: 3,
// // // // // // // //         fiveStarRatingCount: 8,
// // // // // // // //         oneStarRatingCount: 0,
// // // // // // // //       },
// // // // // // // //     },
// // // // // // // //     highlighted: true,
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: "Computer Systems: A Programmer's Perspective",
// // // // // // // //     author: ['Randal E. Bryant', "David Richard O'Hallaron"],
// // // // // // // //     publisher: 'Prentice Hall',
// // // // // // // //     publicationDate: '2002-01-01',
// // // // // // // //     edition: 1,
// // // // // // // //     keywords: [
// // // // // // // //       'computer science',
// // // // // // // //       'computer systems',
// // // // // // // //       'programming',
// // // // // // // //       'software',
// // // // // // // //       'C',
// // // // // // // //       'engineering',
// // // // // // // //     ],
// // // // // // // //     pages: 978,
// // // // // // // //     format: 'hardcover',
// // // // // // // //     ISBN: '9780130340740',
// // // // // // // //     language: 'English',
// // // // // // // //     programmingLanguage: 'C',
// // // // // // // //     onlineContent: false,
// // // // // // // //     thirdParty: {
// // // // // // // //       goodreads: {
// // // // // // // //         rating: 4.44,
// // // // // // // //         ratingsCount: 1010,
// // // // // // // //         reviewsCount: 57,
// // // // // // // //         fiveStarRatingCount: 638,
// // // // // // // //         oneStarRatingCount: 16,
// // // // // // // //       },
// // // // // // // //     },
// // // // // // // //     highlighted: true,
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: 'Operating System Concepts',
// // // // // // // //     author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
// // // // // // // //     publisher: 'John Wiley & Sons',
// // // // // // // //     publicationDate: '2004-12-14',
// // // // // // // //     edition: 10,
// // // // // // // //     keywords: [
// // // // // // // //       'computer science',
// // // // // // // //       'operating systems',
// // // // // // // //       'programming',
// // // // // // // //       'software',
// // // // // // // //       'C',
// // // // // // // //       'Java',
// // // // // // // //       'engineering',
// // // // // // // //     ],
// // // // // // // //     pages: 921,
// // // // // // // //     format: 'hardcover',
// // // // // // // //     ISBN: '9780471694663',
// // // // // // // //     language: 'English',
// // // // // // // //     programmingLanguage: 'C, Java',
// // // // // // // //     onlineContent: false,
// // // // // // // //     thirdParty: {
// // // // // // // //       goodreads: {
// // // // // // // //         rating: 3.9,
// // // // // // // //         ratingsCount: 2131,
// // // // // // // //         reviewsCount: 114,
// // // // // // // //         fiveStarRatingCount: 728,
// // // // // // // //         oneStarRatingCount: 65,
// // // // // // // //       },
// // // // // // // //     },
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: 'Engineering Mathematics',
// // // // // // // //     author: ['K.A. Stroud', 'Dexter J. Booth'],
// // // // // // // //     publisher: 'Palgrave',
// // // // // // // //     publicationDate: '2007-01-01',
// // // // // // // //     edition: 14,
// // // // // // // //     keywords: ['mathematics', 'engineering'],
// // // // // // // //     pages: 1288,
// // // // // // // //     format: 'paperback',
// // // // // // // //     ISBN: '9781403942463',
// // // // // // // //     language: 'English',
// // // // // // // //     programmingLanguage: null,
// // // // // // // //     onlineContent: true,
// // // // // // // //     thirdParty: {
// // // // // // // //       goodreads: {
// // // // // // // //         rating: 4.35,
// // // // // // // //         ratingsCount: 370,
// // // // // // // //         reviewsCount: 18,
// // // // // // // //         fiveStarRatingCount: 211,
// // // // // // // //         oneStarRatingCount: 6,
// // // // // // // //       },
// // // // // // // //     },
// // // // // // // //     highlighted: true,
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: 'The Personal MBA: Master the Art of Business',
// // // // // // // //     author: 'Josh Kaufman',
// // // // // // // //     publisher: 'Portfolio',
// // // // // // // //     publicationDate: '2010-12-30',
// // // // // // // //     keywords: ['business'],
// // // // // // // //     pages: 416,
// // // // // // // //     format: 'hardcover',
// // // // // // // //     ISBN: '9781591843528',
// // // // // // // //     language: 'English',
// // // // // // // //     thirdParty: {
// // // // // // // //       goodreads: {
// // // // // // // //         rating: 4.11,
// // // // // // // //         ratingsCount: 40119,
// // // // // // // //         reviewsCount: 1351,
// // // // // // // //         fiveStarRatingCount: 18033,
// // // // // // // //         oneStarRatingCount: 1090,
// // // // // // // //       },
// // // // // // // //     },
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: 'Crafting Interpreters',
// // // // // // // //     author: 'Robert Nystrom',
// // // // // // // //     publisher: 'Genever Benning',
// // // // // // // //     publicationDate: '2021-07-28',
// // // // // // // //     keywords: [
// // // // // // // //       'computer science',
// // // // // // // //       'compilers',
// // // // // // // //       'engineering',
// // // // // // // //       'interpreters',
// // // // // // // //       'software',
// // // // // // // //       'engineering',
// // // // // // // //     ],
// // // // // // // //     pages: 865,
// // // // // // // //     format: 'paperback',
// // // // // // // //     ISBN: '9780990582939',
// // // // // // // //     language: 'English',
// // // // // // // //     thirdParty: {
// // // // // // // //       goodreads: {
// // // // // // // //         rating: 4.7,
// // // // // // // //         ratingsCount: 253,
// // // // // // // //         reviewsCount: 23,
// // // // // // // //         fiveStarRatingCount: 193,
// // // // // // // //         oneStarRatingCount: 0,
// // // // // // // //       },
// // // // // // // //     },
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: 'Deep Work: Rules for Focused Success in a Distracted World',
// // // // // // // //     author: 'Cal Newport',
// // // // // // // //     publisher: 'Grand Central Publishing',
// // // // // // // //     publicationDate: '2016-01-05',
// // // // // // // //     edition: 1,
// // // // // // // //     keywords: ['work', 'focus', 'personal development', 'business'],
// // // // // // // //     pages: 296,
// // // // // // // //     format: 'hardcover',
// // // // // // // //     ISBN: '9781455586691',
// // // // // // // //     language: 'English',
// // // // // // // //     thirdParty: {
// // // // // // // //       goodreads: {
// // // // // // // //         rating: 4.19,
// // // // // // // //         ratingsCount: 144584,
// // // // // // // //         reviewsCount: 11598,
// // // // // // // //         fiveStarRatingCount: 63405,
// // // // // // // //         oneStarRatingCount: 1808,
// // // // // // // //       },
// // // // // // // //     },
// // // // // // // //     highlighted: true,
// // // // // // // //   },
// // // // // // // // ];

// // // // // // const restaurant = {
// // // // // //   name: 'Classico Italiano',
// // // // // //   location: 'Via Angelo Tavanti 23, Firenze, Italy',
// // // // // //   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// // // // // //   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// // // // // //   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// // // // // //   order: function (starterIndex, mainIndex) {
// // // // // //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// // // // // //   },

// // // // // //   openingHours: {
// // // // // //     thu: {
// // // // // //       open: 12,
// // // // // //       close: 22,
// // // // // //     },
// // // // // //     fri: {
// // // // // //       open: 11,
// // // // // //       close: 23,
// // // // // //     },
// // // // // //     sat: {
// // // // // //       open: 0, // Open 24 hours
// // // // // //       close: 24,
// // // // // //     },
// // // // // //   },

// // // // // //   orderPasta: function (ing1, ing2, ing3) {
// // // // // //     console.log(
// // // // // //       `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
// // // // // //     );
// // // // // //   },

// // // // // //   orderPizza: function (mainIngredient, ...otherIngredients) {
// // // // // //     console.log(mainIngredient);
// // // // // //     console.log(otherIngredients);
// // // // // //   },
// // // // // // };

// // // // // // // SA DESNE STRANE JE SPREAD, SA LEVE JE REST
// // // // // // const arr = [1, 2, ...[3, 4]];
// // // // // // // console.log(arr);

// // // // // // const [a, b, ...others] = [1, 2, 3, 4, 5];

// // // // // // // console.log(a, b, others);

// // // // // // // REST MORA BITI POSLEDNJI ELEMENT
// // // // // // const [pizza, , risotto, ...otherFood] = [
// // // // // //   ...restaurant.mainMenu,
// // // // // //   restaurant.starterMenu,
// // // // // // ];

// // // // // // // console.log(pizza);
// // // // // // // console.log(risotto);
// // // // // // // console.log(otherFood);

// // // // // // // OBJECTS
// // // // // // const { sat, ...weekdays } = restaurant.openingHours;
// // // // // // // console.log(weekdays);
// // // // // // // FUNCTIONS
// // // // // // const add = function (...numbers) {
// // // // // //   let sum = 0;
// // // // // //   for (number of numbers) {
// // // // // //     sum += number;
// // // // // //   }
// // // // // //   // console.log(sum);
// // // // // // };
// // // // // // add(2, 3);
// // // // // // add(5, 3, 7, 2);
// // // // // // add(5, 3, 7, 2, 3, 4, 5, 6);

// // // // // // const x = [44, 5, 7];
// // // // // // add(...x);

// // // // // // restaurant.orderPizza('mushrooms', 'onion', 'olive', 'sosial');
// // // // // // restaurant.orderPizza('mushrooms');

// // // // // // console.log('---OR---');

// // // // // // //Logical operators can use ANY data type, return ANY data type, short-circuiting
// // // // // // console.log(3 || 'Jonas');
// // // // // // console.log('' || 'Jonas');
// // // // // // console.log(true || 0);
// // // // // // console.log(undefined || null);
// // // // // // console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// // // // // // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // // // // // console.log(guests1);

// // // // // // console.log('---AND---');
// // // // // // console.log(0 && 'Jonas');
// // // // // // console.log(7 && 'Jonas');
// // // // // // console.log('Hello' && 23 && null && 'jonas');

// // // // // // if (restaurant.orderPizza) {
// // // // // //   restaurant.orderPizza('mushrooms', 'spinach');
// // // // // // }

// // // // // // restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinachiosoyeah');

// // // // // // // NULLISH COALESCING

// // // // // // restaurant.numGuests = 0;
// // // // // // const guests2 = restaurant.numGuests ?? 10;
// // // // // // console.log(guests2);

// // // // // // default values
// // // // // const { menu = [], starterMenu: starters = [] } = restaurant;
// // // // // console.log(menu, starters);

// // // // // // mutating variables
// // // // // let a = 111;
// // // // // let b = 999;
// // // // // const obj = {
// // // // //     a: 23,
// // // // //     b: 7,
// // // // //     c: 14,
// // // // // };

// // // // // ({ a, b } = obj);
// // // // // console.log(a, b);

// // // // // // nested objects
// // // // // const {
// // // // //     fri: { open: o, close: c },
// // // // // } = openingHours;
// // // // // console.log(o, c);

// // // // // // PASSING OBJECT INTO FUNCTION
// // // // // restaurant.orderDelivery({
// // // // //     time: `22:30`,
// // // // //     address: '44 Klexi St',
// // // // //     mainIndex: 2,
// // // // //     starterIndex: 2,
// // // // // });

// // // // // const arr = [7, 8, 9];
// // // // // const badNewArr = [1, 2, arr[1], arr[2]];
// // // // // console.log(badNewArr);

// // // // // const newArr = [1, 2, ...arr];
// // // // // console.log(newArr);
// // // // // console.log(...newArr);

// // // // // const newMenu = [...restaurant.mainMenu, 'Gnocciyeah'];
// // // // // console.log(newMenu);

// // // // // const mainMenuCopy = [...restaurant.mainMenu];

// // // // // // join 2 arrays
// // // // // const menuYeah = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // // // // console.log(menuYeah);

// // // // // console.log(`----OR----`);

// // // // // console.log(3 || 'Vuk');

// // // // // restaurant.numGuests = 23;
// // // // // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // // // // console.log(guests1);

// // // // // const guests2 = restaurant.numGuests || 10;
// // // // // console.log(guests2);

// // // // // console.log(`----AND----`);

// // // // // console.log(0 && 'JEAH');
// // // // // console.log(7 && 'Vuk');

// // // // // if (restaurant.orderPizza) {
// // // // //     restaurant.orderPizza('mushrooms', 'spinach');
// // // // // }

// // // // // restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// // // // // const rest1 = {
// // // // //     name: 'Capri',
// // // // //     // numGuests: 20,
// // // // //     numGuests: 0,
// // // // // };

// // // // // const rest2 = {
// // // // //     name: 'LA PJATSA',
// // // // //     owner: 'Giovanni Rossi',
// // // // // };

// // // // // // rest1.numGuests = rest1.numGuests || 10;
// // // // // // rest2.numGuests = rest2.numGuests || 10;

// // // // // // OR ASSIGNMENT VARIABLE - ASSIGNUJE VREDNOST AKO JE TRENUTNO FALSY
// // // // // // rest1.numGuests ||= 10;
// // // // // // rest2.numGuests ||= 10;

// // // // // // nullish assignment operator
// // // // // rest1.numGuests ??= 10;
// // // // // rest2.numGuests ??= 10;

// // // // // // rest1.owner = rest1.owner && '<ANONNYMOUS>';
// // // // // // rest2.owner = rest2.owner && '<ANONNYMOUS>';
// // // // // rest1.owner &&= '<ANONYMOUS>';
// // // // // rest2.owner &&= '<ANONYMOUS>';

// // // // // console.log(rest1);
// // // // // console.log(rest2);

// // const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// // const openingHours = {
// //     [weekdays[3]]: {
// //         open: 12,
// //         close: 22,
// //     },
// //     [weekdays[5]]: {
// //         open: 0,
// //         close: 23,
// //     },
// //     [`day-${2 + 4}`]: {
// //         open: 0, // Open 24 hours
// //         close: 24,
// //     },
// // };

// // // // console.log(openingHours);

// // // // const {
// // // //     name: restaurantName,
// // // //     openingHours: hours,
// // // //     categories: tags,
// // // // } = restaurant;
// // // // console.log(restaurantName);

// // // // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // // // for (let part of menu) {
// // // //     console.log(part);
// // // // }

// // // // for (let [i, el] of menu.entries()) {
// // // //     console.log(`${i + 1}: ${el}`);
// // // // }

// // // if (restaurant.openingHours && restaurant.openingHours.mon) {
// // //     console.log(restaurant.openingHours.mon.open);
// // // }

// // // // WITH optional chaining
// // // console.log(restaurant.openingHours.mon?.open);
// // // console.log(restaurant.openingHours?.mon?.open);

// // // const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// // // for (let day of days) {
// // //     let open = restaurant.openingHours[day]?.open ?? `closed`;
// // //     console.log(`On ${day}, we open at ${open}`);
// // // }

// // // // Methods
// // // console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// // // console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // // // Arrays
// // // let users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

// // // console.log(users[2]?.name ?? 'User array empty');

// // // // PROPERTY NAMES
// // // const properties = Object.keys(openingHours);
// // // console.log(properties);

// // // let openStr = `We are open on ${properties.length} days:`;
// // // for (let day of properties) {
// // //     openStr += `${day}, `;
// // // }

// // // console.log(openStr);

// // // for (const day of Object.keys(openingHours)) {
// // //     console.log(day);
// // // }

// // // // PROPERTY VALUES
// // // const values = Object.values(openingHours);
// // // console.log(values);

// // // // OBJECT ENTRIES
// // // let entries = Object.entries(openingHours);
// // // console.log(entries);

// // // for (let [day, { open, close }] of entries) {
// // //     console.log(`On ${day} we open at ${open} and close at ${close}`);
// // // }

// // // let [players1, players2] = game.players;

// // // console.log(players1);
// // // console.log(players2);

// // // let [gk, ...fieldPlayers] = players1;
// // // console.log(gk);

// // // let allPlayers = [...players1, ...players2];
// // // console.log(allPlayers);

// // // let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// // // console.log(players1Final);

// // // // JAKO BITNO - OVAKO JE DEKONSTRUISAN ODDS OBJEKAT
// // // const {
// // //     odds: { team1, draw, team2 },
// // // } = game;

// // // console.log(team1);
// // // // console.log(draw);

// // // let printGoals = (...players) => {
// // //     console.log(`${players.length} goals were scored`);
// // // };

// // // printGoals(...game.scored);

// // // team1 < team2 && console.log('Team 1 more likely to win');
// // // team2 < team1 && console.log('Team 2 more likely to win');

// // // for (const [i, player] of game.scored.entries()) {
// // //     console.log(`Goal ${i + 1}: ${player}`);
// // // }

// // // let init = 0;
// // // for (item of Object.values(game.odds)) init += item;
// // // init /= Object.keys(game.odds).length;

// // // console.log(init);
// // // console.log(Object.keys(game.odds).length);

// // // for (let [outcome, value] of Object.entries(game.odds)) {
// // //     if (outcome === 'x') {
// // //         console.log(`Odd of draw is: ${value}`);
// // //     } else {
// // //         console.log(`Odd of victory for ${game[outcome]}: ${value}`);
// // //     }
// // // }

// // const restaurant = {
// //     name: 'Classico Italiano',
// //     location: 'Via Angelo Tavanti 23, Firenze, Italy',
// //     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// //     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// //     mainMenu: ['Pizza', 'Pasta', 'Risotto'],

// //     // ES6 enhanced object literals

// //     order(starterIndex, mainIndex) {
// //         console.log([this.starterMenu[starterIndex], this.mainMenu[mainIndex]]);
// //     },

// //     orderDelivery({ starterIndex, mainIndex, time, address }) {
// //         console.log(
// //             `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}, arriving at ${time} to the address: ${address}`
// //         );
// //     },

// //     orderPizza(mainIngredient, ...otherIngredients) {
// //         console.log(mainIngredient);
// //         console.log(otherIngredients);
// //     },
// // };

// // const ordersSet = new Set([
// //     'Pasta',
// //     'Pizza',
// //     'Risotto',
// //     'Pizza',
// //     'Pasta',
// //     'Pizza',
// // ]);

// // // ELIMINISE DUPLIKATE

// // console.log(ordersSet.size);
// // console.log(ordersSet.has('Pizza'));
// // console.log(ordersSet.has('Bread'));
// // ordersSet.add('Garlic Bread');
// // ordersSet.add('Garlic Bread');
// // ordersSet.delete('Risotto');
// // console.log(ordersSet);

// // for (let order of ordersSet) console.log(order);

// // // Example
// // let staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter', 'Chef'];
// // // MOZES DA SPREADUJES SET I ONDA DA GA PRETVORIS U ARRAY, KAO FUNKCIJA FILTRIRANJA
// // let dajSamoJedno = [...new Set(staff)];
// // console.log(dajSamoJedno);
// // console.log(new Set(staff).size);
// // console.log(new Set('kleximilijan').size);

// // // SET RASTAVLJA STRINGOVE
// // console.log(new Set('KLEXI'));

// // let rest = new Map();
// // rest.set('name', 'Classico Italiano');
// // rest.set(1, 'Firenze, Italy');
// // console.log(rest.set(2, 'Lisbon, Portugal'));
// // rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// //     .set('open', 11)
// //     .set('close', 23)
// //     .set(true, 'We are open :D')
// //     .set(false, 'We are closed :(');

// // console.log(rest.get('name'));
// // console.log(rest.get('true'));
// // console.log(rest.get(1));

// // let time = 8;
// // console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// // console.log(rest.has('categories'));
// // rest.delete(2);

// // rest.set(document.querySelector('h1'), 'Heading');
// // rest.set([1, 2], 'Test');

// // console.log(rest);
// // console.log(rest.size);

// // const question = new Map([
// //     ['question', 'What is the best programming language in the world?'],
// //     [1, 'C'],
// //     [2, 'Java'],
// //     [3, 'Javascript'],
// //     ['correct', 3],
// //     [true, 'Correct 🐆'],
// //     [false, 'Try again! 🐯'],
// // ]);

// // console.log(question);

// // // Convert OBJ to map

// // console.log(Object.entries(openingHours));
// // const hours = new Map(Object.entries(openingHours));
// // console.log(hours);

// // for (let [key, value] of question) {
// //     if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// // }

// // // let answer = Number(prompt('Your answer'));
// // // console.log(answer);

// // // console.log(question.get(question.get('correct') === answer));

// // console.log(question.get(true));

// // // PRETVARANJE U ARRAY - NABIJES MAPU U ARRAY I ONDA SPREADUJES
// // console.log([...question]);

// // const game = {
// //     team1: 'Bayern Munich',
// //     team2: 'Borrussia Dortmund',
// //     players: [
// //         [
// //             'Neuer',
// //             'Pavard',
// //             'Martinez',
// //             'Alaba',
// //             'Davies',
// //             'Kimmich',
// //             'Goretzka',
// //             'Coman',
// //             'Muller',
// //             'Gnarby',
// //             'Lewandowski',
// //         ],
// //         [
// //             'Burki',
// //             'Schulz',
// //             'Hummels',
// //             'Akanji',
// //             'Hakimi',
// //             'Weigl',
// //             'Witsel',
// //             'Hazard',
// //             'Brandt',
// //             'Sancho',
// //             'Gotze',
// //         ],
// //     ],
// //     score: '4:0',
// //     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
// //     date: 'Nov 9th, 2037',
// //     odds: {
// //         team1: 1.33,
// //         x: 3.25,
// //         team2: 6.5,
// //     },
// // };

// const gameEvents = new Map([
//     [17, '⚽️ GOAL'],
//     [36, '🔁 Substitution'],
//     [47, '⚽️ GOAL'],
//     [61, '🔁 Substitution'],
//     [64, '🔶 Yellow card'],
//     [69, '🔴 Red card'],
//     [70, '🔁 Substitution'],
//     [72, '🔁 Substitution'],
//     [76, '⚽️ GOAL'],
//     [80, '⚽️ GOAL'],
//     [92, '🔶 Yellow card'],
// ]);

// let happenings = new Set();
// for ([minute, happening] of gameEvents) {
//     happenings.add(happening);
// }

// // PAMETNIJE URADITI
// let happeningsNew = new Set(gameEvents.values());
// let happeningsArr = [...happeningsNew];
// console.log(happeningsArr);
// console.log(gameEvents.delete(64));

// console.log(
//     `An event happened, on average, every ${90 / gameEvents.size} minutes.`
// );

// for ([minute, happening] of gameEvents) {
//     if (minute < 45) {
//         console.log(`[FIRST HALF] ${minute}: ${happening}`);
//     } else {
//         console.log(`[SECOND HALF] ${minute}: ${happening}`);
//     }
// }

let airline = 'TAP Air Portugal';
let plane = 'A320';

console.log(plane[0]);
console.log('B737'[1]);
console.log(airline.length);
console.log(airline.indexOf('r'));
console.log(airline.indexOf('Portugal'));

// Slice ima start i end parametre
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

let checkMiddleSeat = seat => {
    // seats containing B and E are middle seats
    let s = seat.slice(-1);
    if (s === 'B' || s === 'E')
        console.log('You got the middle seat DUMBASS GOOFY AHH 🤣');
    else console.log('LUCKYYY WOWW 💝');
};

checkMiddleSeat('23C');
checkMiddleSeat('23B');
checkMiddleSeat('23C');
checkMiddleSeat('23E');
checkMiddleSeat('23B');
