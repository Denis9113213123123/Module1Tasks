const array = [
  {name: "Ivan", age: 24},
  {name: "Oleg", age: 16},
  {name: "Igor", age: 24},
];

const funct = (arr) => {
  return arr.filter(item => item.age > 18)
};
console.log(funct(array));
