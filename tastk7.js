const array1 = [5, 10, 15, 20, 10, 25, 20, 30, 15];
const N = 55;
const funct = (arr) => {
  let sum = 0;
  let i = 0
  while (sum <= N) {
    sum = sum + array1[i];
    i++;
  }
  return sum;
};

console.log(funct(array1));

