const array1 = [1,2,3];
const array2 = [4,5,6];

const funct = (...args) => {
  const arr = [];
return arr.concat(...args);
};
console.log(funct(array1,array2))