let j = 1;
const arr = [];
for (let k = 1; k <= 10; k++) {
  let arr2 = [];
  for (let i = 1; i <= 10; i++) {
    arr2.push(j * j);
    j++;

  }
  arr.push(arr2);
}
;
console.table(arr);
