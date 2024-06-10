// // // // // //   Destructure the keywords property (array) of the
// // // // // // first book from the books array into variables called mainKeyword and rest.
// // // // // // The first keyword should be assigned to mainKeyword, and
// // // // // // the rest of the keywords should
// // // // // // be assigned to the rest variable (it should be an array).

// // // // // // let [mainKeyword, ...rest] = books[0].keywords;
// // // // // // console.log(mainKeyword, rest);

// // // // // // const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// // // // // // console.log(bookPublisher);
// // // // // // console.log(restOfTheBook);

// // // // // // let printBAC = function (title, ...authornum) {
// // // // // //   console.log(`The book "${title}" has ${authornum.length} authors`);
// // // // // // };

// // // // // // printBAC(books[4].title, books[4].author);
// // // // // // console.log(...books[4].author);

// // // // // // for (book of books) {
// // // // // //   console.log(book.programmingLanguage === 'Java' || 'no JAVA BISH');
// // // // // // }

// // // // // // for (book of books) {
// // // // // //   book.onlineContent && console.log(`"${book.title}" provides online content`);
// // // // // // }

// // // // // // for (book of books) {
// // // // // //   book.onlineContent ??
// // // // // //     console.log(`${book.title}" provides NO online content`);
// // // // // // }

// // // // // // let [firstBook, secondBook] = books;
// // // // // // console.log(firstBook, secondBook);

// // // // // // let [, , thirdBook] = books;
// // // // // // console.log(thirdBook);

// // // // // // const ratings = [
// // // // // //   ['rating', 4.19],
// // // // // //   ['ratingsCount', 144584],
// // // // // // ];

// // // // // // let [[, rating], [, ratingsCount]] = ratings;

// // // // // // console.log(rating, ratingsCount);

// // // // // // const ratingStars = [63405, 1808];
// // // // // // let [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// // // // // // console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// // // // // // let { title, author, ISBN } = books[0];
// // // // // // console.log(title);

// // // // // // let { keywords: tags } = books[0];
// // // // // // console.log(tags);

// // // // // // let { language, programmingLanguage = 'unknown' } = books[6];
// // // // // // console.log(language, programmingLanguage);

// // // // // // let bookTitle = books[0].title;
// // // // // // let bookAuthor = books[0].author;

// // // // // // console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');

// // // // // // let [firstBook, secondBook] = books;
// // // // // // console.log(firstBook, secondBook);

// // // // // // let [, , thirdBook] = books;
// // // // // // console.log(thirdBook);

// // // // // // const ratings = [
// // // // // //     ['rating', 4.19],
// // // // // //     ['ratingsCount', 144584],
// // // // // // ];
// // // // // // let [[, rating], [, ratingsCount]] = ratings;

// // // // // // console.log(rating, ratingsCount);

// // // // // // const ratingStars = [63405, 1808];
// // // // // // const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;

// // // // // // console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// // // // // // console.log(`JSOAOAOAOAOAOAOOAOA ${fiveStarRatings}`);

// // // // // // console.log('OBJECTS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2');

// // // // // // let { title, author, ISBN } = books[0];
// // // // // // console.log(title, author, ISBN);

// // // // // // // let { keywords: tags } = books[0];
// // // // // // // console.log(tags);

// // // // // // let { language, programmingLanguage = 'unknown' } = books[6];

// // // // // // let bookTitle = `unknown`;
// // // // // // let bookAuthor = `unknown`;

// // // // // // ({ title: bookTitle, author: bookAuthor } = books[0]);

// // // // // // console.log(bookTitle);

// // // // // // // let { bookRating = books[3].thirdParty.goodreads.rating };

// // // // // // // console.log(bookRating);

// // // // // // let printBookInfo = function ({ title, author, year = `klexi` }) {
// // // // // //     console.log(`${title} by ${author}, ${year}`);
// // // // // // };

// // // // // // printBookInfo(books[0]);

// // // // // let bookAuthors = [...books[0].author, ...books[1].author];
// // // // // console.log(bookAuthors);

// // // // // let spellWord = function (string) {
// // // // //     console.log([...string].reverse().join(''));
// // // // // };

// // // // // spellWord('klehi');

// // // // // let [mainKeyword, ...rest] = books[0].keywords;

// // // // // console.log(mainKeyword, rest);

// // // // // let { publisher: bookPublisher, ...restOfTheBook } = books[1];
// // // // // console.log(bookPublisher, restOfTheBook);

// // // // // let printBookAuthorsCount = function (title, ...author) {
// // // // //     console.log(`The book "${title}" has ${author.length} authors.`);
// // // // // };

// // // // // printBookAuthorsCount(books[4]);

// // // // // let hasExamplesInJava = function (books) {
// // // // //     console.log(books.programmingLanguage === 'Java' || 'no book data');
// // // // // };

// // // // // hasExamplesInJava(books[0]);

// // // // // let hasOnlineContent = function (books) {
// // // // //     console.log(books.onlineContent && `he aint got shit nigga`);
// // // // // };

// // // // // for (book of books) {
// // // // //     book.onlineContent ??
// // // // //         console.log(`${book.title} provides no data about its online content`);
// // // // // }
// // // // // for (book of books) {
// // // // //     console.log((book.edition ||= 1));
// // // // // }

// // // // // for (let i = 0; i < books.length; i++) {
// // // // //     books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
// // // // // }

// // // // let pageSum = 0;

// // // // for (let book of books) {
// // // //     pageSum += book.pages;
// // // // }

// // // // console.log(pageSum);

// // // // let allAuthors = [];

// // // // for (const book of books) {
// // // //     if (typeof book.author === 'string') {
// // // //         allAuthors.push(book.author);
// // // //     } else {
// // // //         for (const author of book.author) {
// // // //             allAuthors.push(author);
// // // //         }
// // // //     }
// // // // }

// // // // console.log(allAuthors);

// // // const bookData = [
// // //     ['title', 'Computer Networking: A Top-Down Approach'],
// // //     ['author', ['James F. Kurose', 'Keith W. Ross']],
// // //     ['publisher', 'Addison Wesley'],
// // // ];

// // // const newBook = {
// // //     [bookData[0][0]]: bookData[0][1],
// // //     [bookData[1][0]]: bookData[1][1],
// // //     [bookData[2][0]]: bookData[2][1],
// // // };

// // // const pages = 880;
// // // const newBook2 = {
// // //     title: 'The C Programming Language',
// // //     author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
// // //     pages,

// // //     kledzi(pages) {
// // //         console.log;
// // //     },
// // //     // ...
// // // };

// // // let getFirstKeyword = item => {
// // //     // console.log(item.keywords?.[0]);
// // // };

// // // getFirstKeyword(books[0]);

// // // let entries = [];

// // // for (key of Object.keys(books[0].thirdParty.goodreads)) {
// // //     entries.push([key]);
// // // }

// // // console.log(entries);

// // // for (const [index, value] of Object.values(
// // //     books[0].thirdParty.goodreads
// // // ).entries()) {
// // //     entries[index].push(value);
// // // }

// // // let entries2 = Object.entries(books[0].thirdParty.goodreads);
// // // console.log(entries, entries2);

// const books = [
//     {
//         title: 'Algorithms',
//         author: ['Robert Sedgewick', 'Kevin Wayne'],
//         publisher: 'Addison-Wesley Professional',
//         publicationDate: '2011-03-24',
//         edition: 4,
//         keywords: [
//             'computer science',
//             'programming',
//             'algorithms',
//             'data structures',
//             'java',
//             'math',
//             'software',
//             'engineering',
//         ],
//         pages: 976,
//         format: 'hardcover',
//         ISBN: '9780321573513',
//         language: 'English',
//         programmingLanguage: 'Java',
//         onlineContent: true,
//         thirdParty: {
//             goodreads: {
//                 rating: 4.41,
//                 ratingsCount: 1733,
//                 reviewsCount: 63,
//                 fiveStarRatingCount: 976,
//                 oneStarRatingCount: 13,
//             },
//         },
//         highlighted: true,
//     },
//     {
//         title: 'Structure and Interpretation of Computer Programs',
//         author: [
//             'Harold Abelson',
//             'Gerald Jay Sussman',
//             'Julie Sussman (Contributor)',
//         ],
//         publisher: 'The MIT Press',
//         publicationDate: '2022-04-12',
//         edition: 2,
//         keywords: [
//             'computer science',
//             'programming',
//             'javascript',
//             'software',
//             'engineering',
//         ],
//         pages: 640,
//         format: 'paperback',
//         ISBN: '9780262543231',
//         language: 'English',
//         programmingLanguage: 'JavaScript',
//         onlineContent: false,
//         thirdParty: {
//             goodreads: {
//                 rating: 4.36,
//                 ratingsCount: 14,
//                 reviewsCount: 3,
//                 fiveStarRatingCount: 8,
//                 oneStarRatingCount: 0,
//             },
//         },
//         highlighted: true,
//     },
//     {
//         title: "Computer Systems: A Programmer's Perspective",
//         author: ['Randal E. Bryant', "David Richard O'Hallaron"],
//         publisher: 'Prentice Hall',
//         publicationDate: '2002-01-01',
//         edition: 1,
//         keywords: [
//             'computer science',
//             'computer systems',
//             'programming',
//             'software',
//             'C',
//             'engineering',
//         ],
//         pages: 978,
//         format: 'hardcover',
//         ISBN: '9780130340740',
//         language: 'English',
//         programmingLanguage: 'C',
//         onlineContent: false,
//         thirdParty: {
//             goodreads: {
//                 rating: 4.44,
//                 ratingsCount: 1010,
//                 reviewsCount: 57,
//                 fiveStarRatingCount: 638,
//                 oneStarRatingCount: 16,
//             },
//         },
//         highlighted: true,
//     },
//     {
//         title: 'Operating System Concepts',
//         author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
//         publisher: 'John Wiley & Sons',
//         publicationDate: '2004-12-14',
//         edition: 10,
//         keywords: [
//             'computer science',
//             'operating systems',
//             'programming',
//             'software',
//             'C',
//             'Java',
//             'engineering',
//         ],
//         pages: 921,
//         format: 'hardcover',
//         ISBN: '9780471694663',
//         language: 'English',
//         programmingLanguage: 'C, Java',
//         onlineContent: false,
//         thirdParty: {
//             goodreads: {
//                 rating: 3.9,
//                 ratingsCount: 2131,
//                 reviewsCount: 114,
//                 fiveStarRatingCount: 728,
//                 oneStarRatingCount: 65,
//             },
//         },
//     },
//     {
//         title: 'Engineering Mathematics',
//         author: ['K.A. Stroud', 'Dexter J. Booth'],
//         publisher: 'Palgrave',
//         publicationDate: '2007-01-01',
//         edition: 14,
//         keywords: ['mathematics', 'engineering'],
//         pages: 1288,
//         format: 'paperback',
//         ISBN: '9781403942463',
//         language: 'English',
//         programmingLanguage: null,
//         onlineContent: true,
//         thirdParty: {
//             goodreads: {
//                 rating: 4.35,
//                 ratingsCount: 370,
//                 reviewsCount: 18,
//                 fiveStarRatingCount: 211,
//                 oneStarRatingCount: 6,
//             },
//         },
//         highlighted: true,
//     },
//     {
//         title: 'The Personal MBA: Master the Art of Business',
//         author: 'Josh Kaufman',
//         publisher: 'Portfolio',
//         publicationDate: '2010-12-30',
//         keywords: ['business'],
//         pages: 416,
//         format: 'hardcover',
//         ISBN: '9781591843528',
//         language: 'English',
//         thirdParty: {
//             goodreads: {
//                 rating: 4.11,
//                 ratingsCount: 40119,
//                 reviewsCount: 1351,
//                 fiveStarRatingCount: 18033,
//                 oneStarRatingCount: 1090,
//             },
//         },
//     },
//     {
//         title: 'Crafting Interpreters',
//         author: 'Robert Nystrom',
//         publisher: 'Genever Benning',
//         publicationDate: '2021-07-28',
//         keywords: [
//             'computer science',
//             'compilers',
//             'engineering',
//             'interpreters',
//             'software',
//             'engineering',
//         ],
//         pages: 865,
//         format: 'paperback',
//         ISBN: '9780990582939',
//         language: 'English',
//         thirdParty: {
//             goodreads: {
//                 rating: 4.7,
//                 ratingsCount: 253,
//                 reviewsCount: 23,
//                 fiveStarRatingCount: 193,
//                 oneStarRatingCount: 0,
//             },
//         },
//     },
//     {
//         title: 'Deep Work: Rules for Focused Success in a Distracted World',
//         author: 'Cal Newport',
//         publisher: 'Grand Central Publishing',
//         publicationDate: '2016-01-05',
//         edition: 1,
//         keywords: ['work', 'focus', 'personal development', 'business'],
//         pages: 296,
//         format: 'hardcover',
//         ISBN: '9781455586691',
//         language: 'English',
//         thirdParty: {
//             goodreads: {
//                 rating: 4.19,
//                 ratingsCount: 144584,
//                 reviewsCount: 11598,
//                 fiveStarRatingCount: 63405,
//                 oneStarRatingCount: 1808,
//             },
//         },
//         highlighted: true,
//     },
// ];

// // const allKeywords = [];

// // for (let book of books) {
// //     allKeywords.push(...book.keywords);
// // }

// // console.log(allKeywords);

// // let uniqueKeywords = new Set(allKeywords);
// // console.log(uniqueKeywords);

// // uniqueKeywords.add('coding').add('science').add('KLEDZI');
// // uniqueKeywords.delete('business');

// // uniqueKeywords.clear();
// // let uniqueKeywordsArr = [...uniqueKeywords];
// // console.log(uniqueKeywordsArr);

// // console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');

// // let bookMap = new Map([
// //     ['title', 'Clean Code'],
// //     ['author', 'Robert C. Martin'],
// // ]);

// // bookMap.set('pages', 464);

// // console.log(`"${bookMap.get('title')}" by ${bookMap.get('author')}`);

// // console.log(bookMap.size);

// // if (bookMap.has('author')) console.log(`The author of the book is known`);

// // console.log(bookMap);

// let firstBookMap = new Map(Object.entries(books[0]));
// for (let [number, item] of firstBookMap) {
//     if (typeof number === 'number') {
//         console.log(number);
//     }
// }
