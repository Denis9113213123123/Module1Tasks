const M = 5, N = 2;
const array = [];
for (let i = 1; i <= N; i++) {
array[i]=[];
  for (let k = 0; k <= M; k++) {


    array[i][k] = k * k;
  }
  ;
}
;

console.log(array);

//
// let n = 5, m = 4,l=100;
// let mas = [];
//
// for (let i = 0; i < m; i++){
//   mas[i] = [];
//   for (let j = 0; j < n; j++){
//     mas[i][j] = 1;
//   }}
// console.log(mas);
