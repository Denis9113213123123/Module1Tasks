const array = [
  {name: "Milk", price: 20, amount: 15},
  {name: "Coffee", price: 30, amount: 17},
  {name: "Tea", price: 10, amount: 14}
];
const funct = (arr) => {
  const arr2 = [];
  arr.forEach((item) => {
    arr2.push({name: item.name, total: item.price * item.amount})
  })
  return arr2;
}
console.log(funct(array));
