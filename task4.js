const N = 10;

const fibanach = (num) => {
  const arr = [0, 1];
  for (let i = 2; i < num; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  return arr;
};
console.log(fibanach(N));