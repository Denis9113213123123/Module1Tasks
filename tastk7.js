const array1 = [5, 10, 15, 20, 10, 25, 20, 30, 15];
const funct = (arr) => {
  const N = 55;
  let sum = 0, i = 0
  while (sum <= N) {
    sum = sum + arr[i];
    i++;
  }
  return sum;
};

console.log(funct(array1));

