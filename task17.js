const array1 = [1,2,3];
const array2 = [4,5,6];

funct = (ar1,ar2) => {
  console.log( [...ar1,...ar2]);
};
console.log(funct(array1,array2))