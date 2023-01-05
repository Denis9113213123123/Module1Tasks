const array1 = ["One", "Two", "Three", "Four", "Five"];

const separationArray = (arr) => {
  let i = 0;
  while (i < arr.length) {
    console.log(arr.pop());
  }
};
separationArray(array1);
