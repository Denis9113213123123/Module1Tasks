array1 = [1,2,3];
const a = 4;
const b = 5;
const c = 6;
const funct = (arr,...arg) => {
  arr.push(...arg);
  return arr;
};
console.log(funct(array1,a,b,c))