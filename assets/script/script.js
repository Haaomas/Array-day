//Test de connexion
console.log("Be water my Friend");
console.log("-----");

//Beginning of the project
console.log("Array Cardio Day 1");

// Some data we can work with
const INVENTORS = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const PEOPLE = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of INVENTORS for those who were born in the 1500's
console.log("Array.prototype.filter()");
const BORN_IN_1500 = INVENTORS.filter(INVENTOR => INVENTOR.year > 1500 && INVENTOR.year < 1600);
console.log(BORN_IN_1500);
console.log("------");


// Array.prototype.map()
// 2. Give us an array of the INVENTORS first and last names
console.log("Array.prototype.map()");
// Made in me
const MAP_NAME = INVENTORS.map((x) => [x.first, x.last].join(" "));
// function firstAndLastName(x) {
//     return [x.first, x.last].join(" ");
// }
console.log(MAP_NAME);
// Made in Tiffany
const NAMES = INVENTORS.map(INVENTOR => INVENTOR.first + " " + INVENTOR.last);
console.log("------");


// Array.prototype.sort()
// 3. Sort the INVENTORS by birth date, oldest to youngest
console.log("Array.prototype.sort()");
//Version fléché
// const BIRTH_SORT = INVENTORS.sort((a, b) => a.year - b.year)
// Version simple
const BIRTH_SORT = INVENTORS.sort(orderByBirth)
function orderByBirth(a, b) {
    //Le a.year doit toujours être inférieur au b.year
    return a.year - b.year
}
console.log('BIRTH_SORT', BIRTH_SORT)
console.log("------");


// Array.prototype.reduce()
// 4. How many years did all the INVENTORS live all together?
console.log("Array.prototype.reduce()");
console.log("------");
const INITIAL_VALUE = 0;
const YEARS_LIVED = INVENTORS.map(INVENTOR => INVENTOR.passed - INVENTOR.year);
console.log('YEARS_LIVED', YEARS_LIVED)
let yearOfLife = YEARS_LIVED.reduce((previousValue, currentValue) => previousValue + currentValue,
    INITIAL_VALUE
);
console.log('yearOfLife', yearOfLife)


// 5. Sort the INVENTORS by years lived
console.log("Sort the INVENTORS by years lived");
const SORT_YEARS_LIVED = INVENTORS.sort((a, b) => {
    let aFull = a.passed - a.year
    let bFull = b.passed - b.year
    return aFull - bFull
})
console.log('SORT_YEARS_LIVED', SORT_YEARS_LIVED)
//Classement uniquement par années s
const ONLY_SORT_YEARS_LIVED = YEARS_LIVED.sort((a, b) => a - b)
// console.log('ONLY_SORT_YEARS_LIVED', ONLY_SORT_YEARS_LIVED)
console.log("------");

// 6. sort Exercise
// Sort the PEOPLE alphabetically by last name
console.log("Sort Exercise");
console.log("------");

// 7. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
console.log("Reduce Exercise");
console.log("------");

// // 8. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// console.log("Create a list of Boulevards in Paris that contain 'de' anywhere in the name");
// console.log("------");