const array1 = ["One", "Two", "Three", "Four", "Five"];
let i = 0;
const separationArray = (arr) => {
  while (i < arr.length) {
    console.log(arr.pop());
  }
};
separationArray(array1);
