// удваивайте каждые вторые...
// [1,2,3,4] => [1,4,3,8]

// let arr = [1, 2, 3, 4];
// console.log(
//   arr.map((el) => {
//     if (el % 2 === 0) {
//       return el * 2;
//     } else {
//       return el;
//     }
//   })
// );

// извлекайте дубликатов
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

// let arr = [1, 2, 1, 1, 3, 2];
// console.log(
//   arr.filter((el, idx) => {
//     return arr.indexOf(el) === idx;
//   })
// );

// Дан массив с объектами: [
//     {mark: 'Wolksvagen', year: 2005, price: 8000, sale: 0},
//     {mark: 'Audi', year: 1996, price: 2500, sale: 0},
//     {mark: 'Mercedes', year: 2001, price: 5000, sale: 0},
//     {mark: 'BMW', year: 2015, price: 18000, sale: 0},
//     {mark: 'Porsche', year: 2020, price: 120000, sale: 0},
// ], задача: на все автомобили, которые старше 2007 года, поставить скидку 20%(для скидки использовать свойство 'sale')

// создайте функцию которая возвратит аббревиатуру фамилии и имени
// принимает в аргументы строку, должна возвращать первые буквы
// "Denzel Washington" --> "D.W"
// "chuck norris" --> "C.N"
// "cristiano Ronaldo" --> "C.R"

// // Вывод:
// 50
// 100
// 200
// 400
// 800
// 800
// 400
// 200
// 100
// 50

// задача