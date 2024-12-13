// деструктуризация

// let obj = {
//   id: 1,
//   name: "Joodarbeshim",
//   job: "Developer",
//   age: 18,
//   address: "Bishkek",
// };

// let { name, job, address } = obj;
// console.log(name);
// console.log(address);
// console.log(job);

// let arr = [10, 20, 30, 40];
// let [a, b, c, d] = arr;
// console.log(a);

// spread оператор JS | всё что из внутри

// let arr = [12, 34, 45, 56, 67, 78, 89, 90];
// let res = [...arr];
// console.log(res);

// let obj = {
//   id: 1,
//   name: "Joodarbeshim",
//   job: "Developer",
//   age: 18,
//   address: "Bishkek",
// };
// let res = { ...obj, hobby: "sport" };
// console.log(res);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let res = [...arr1, ...arr2];
// console.log(res);

// spread и rest оператор JS

// rest

// function task(a, b, ...c) {
//   return a + b + c.reduce((acc, el) => acc + el);
// }
// console.log(task(10, 5, 5, 3, 4, 5));

// let arr = [10, 5, 5, 3, 4, 5];
// let [a, b, ...c] = arr;
// console.log();

// let obj = {
//   id: 1,
//   name: "Joodarbeshim",
//   job: "Developer",
//   age: 18,
//   address: "Bishkek",
// };

// let { name, ...id } = obj;
// console.log(id);
