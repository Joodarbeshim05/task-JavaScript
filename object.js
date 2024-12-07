// object
// key: value

// let obj = {
//   id: 1,
//   name: "Joodarbeshim",
//   age: 19,
//   hobby: "sport",
//   "motion web": 138,
//   address: {
//     city: ["Bishkek", "Osh", "Batken", "Naryn"],
//     street: "Manas",
//   },
// };

// console.log(Object.keys(obj).length);
// console.log(Object.entries(obj));
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(obj.address.city);
// console.log(obj["motion web"]);
// console.log(obj.name);
// console.log(obj.id);

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<|||>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> \\

// 1. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите длину ключей.

// let obj = { a: 1, b: 2, c: 3 };
// console.log(Object.keys(obj).length);

// 2. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта.

// let obj = { a: 1, b: 2, c: 3 };
// console.log(obj.c);
// console.log(obj["c"]);

// 3. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}; Выведите на экран зарплату Атая и Ширин.

// let obj = { Ширин: "1000", Айжан: "500", Атай: "200" };
// console.log(obj.Ширин, obj.Атай);

// 4. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}. Измените зарплату Атая на 500.

// let obj = { Ширин: "1000", Айжан: "500", Атай: "200" };
// obj.Атай = "500";
// console.log(obj);

// 5. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}. Добавьте к объекту ключ Медет со значением 1500.

// let obj = { Ширин: "1000", Айжан: "500", Атай: "200" };
// obj.Медет = "1500";
// console.log(obj);

// 6. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Выведите значение ключа salary в консоль.

// let obj = { Ширин: "1000", Айжан: "500", Атай: { salary: "500" } };
// console.log(obj.Атай);

// 7. Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.

// let week = {
//   пн: 1,
//   вт: 2,
//   ср: 3,
//   чт: 4,
//   пт: 5,
//   сб: 6,
//   вс: 7,
// };
// console.log(week);

// 8. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day.

// let week = {
//   1: "пн",
//   2: "вт",
//   3: "ср",
//   4: "чт",
//   5: "пт",
//   6: "сб",
//   7: "вс",
// };
// console.log(week);

// 9. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Получите все ключи объекта.

// let obj = { Ширин: "1000", Айжан: "500", Атай: { salary: "500" } };
// console.log(Object.keys(obj));
// console.log(Object.keys(obj.Атай));

// 10. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Получите все значения объекта.

// let obj = { Ширин: "1000", Айжан: "500", Атай: { salary: "500" } };
// console.log(Object.values(obj));
// console.log(Object.values(obj.Атай));

// 11. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Выведите все entries объекта.

// let obj = { Ширин: "1000", Айжан: "500", Атай: { salary: "500" } };
// console.log(Object.entries(obj));
// console.log(Object.entries(obj.Атай));

// 12. Создайте функцию, передайте в нее объект {name: 'Igor'}. Выведите 1, если длина ключа name нечетная, 0 если четная.

// function task12(obj) {
//   if (obj.name.length % 2 === 0) {
//     return 0;
//   } else {
//     return 1;
//   }
// }
// console.log(task12({ name: "Igor" }));

// 13. Создайте функцию, передайте в нее массив с объектами [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ] . Выведите все id в консоль через map.

// function task13(arr) {
//   return arr.map((el) => {
//     return el.id;
//   });
// }
// console.log(task13([{ id: 3 }, { id: 5 }, { id: 6 }, { id: 7 }]));

// 14. Создайте функцию, передайте в нее объект {name: 'Igor'}. Добавьте новый ключ age со значением 25. Поменяйте значение name на Azat.

// function task14(obj) {
//   obj.age = 25;
//   return obj;
// }
// console.log(task14({ name: "Igor" }));

// 15. Вам дан объект product = {
// name: "headphones",
// price: 100,
// discount: 0
// }. Найдите стоимость объекта с ценой, и если она больше 100, снизьте ее на 10%. Если это не так, сделайте скидку на 7%. Обновите объект.

// let product = {
//   name: "headphones",
//   price: 100,
//   discount: 0,
// };

// if (product.price > 100) {
//   product.discount = 10;
// } else {
//   product.discount = 7;
// }
// console.log(product);

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<|||>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> \\

// let users = [
//   {
//     id: 1,
//     name: "Frank",
//     job: "Analyst",
//     age: 27,
//   },
//   {
//     id: 2,
//     name: "Alice",
//     job: "Engineer",
//     age: 30,
//   },
//   {
//     id: 3,
//     name: "Eve",
//     job: "Doctor",
//     age: 42,
//   },
//   {
//     id: 4,
//     name: "Alice",
//     job: "Manager",
//     age: 22,
//   },
//   {
//     id: 5,
//     name: "Frank",
//     job: "Designer",
//     age: 35,
//   },
//   {
//     id: 6,
//     name: "Diana",
//     job: "Designer",
//     age: 42,
//   },
//   {
//     id: 7,
//     name: "Charlie",
//     job: "Doctor",
//     age: 40,
//   },
// ];

// 1. баарынын атын чыгарабыз
// console.log(
//   users.map((el) => {
//     return el.name;
//   })
// );

// 2. жашы 30 чон object чыксын
// console.log(
//   users.filter((el) => {
//     return el.age > 30;
//   })
// );

// 3. каждый 2 элементке хобби: спорт деген ключ кошуу
// console.log(
//   users.map((el, idx) => {
//     if (idx % 2 !== 0) {
//       el.hobby = "sport";
//       console.log(el);
//     } else {
//       console.log(el);
//     }
//   })
// );

// 4. Именно job: "Manager" - "Developer" ге озгорсун
// 5. Именно Diana деген name - Dana га озгорсун
