

//Решение №1
// const array = [
//   {name: "Ivan", age: 24},
//   {name: "Oleg", age: 16},
//   {name: "Igor", age: 24}];
//
// const obj = {min: array[0].age, max: array[0].age}
// array.forEach((item) => {
//   if (item.age > obj.max) {
//     obj.max = item.age
//   }
//   if (item.age < obj.min) {
//     obj.min = item.age
//   }
// });
//
// console.log(obj);





const array = [
  {name: "Ivan", age: 24},
  {name: "Oleg", age: 16},
  {name: "Igor", age: 24}];

const arr = array.sort((a,b) => a.age - b.age)
const obj = { min: arr[0].age, max: arr[array.length-1].age }

console.log(obj);

