const array = [
  {a: 5, b: 3, c: 4},
  {a: 1, b: 3, c: 4},
  {a: 4, b: 7, c: 4},
  {a: 2, b: 2, c: 3},
];
const funct = (arr) => {
  const array2 = [];
  arr.forEach((item) => {
    array2.push({p: item.a + item.b + item.c})
  });
  return array2;
}

console.log(funct(array));

