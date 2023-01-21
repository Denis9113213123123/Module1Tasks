const arr = [];
for (let k = 0; k <= 10; k++) {
  let arr2 = [];
  for (let i = 0; i <= 10; i++) {
    arr2.push(k * i);
  }
  arr.push(arr2);
}
;
console.table(arr);

