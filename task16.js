const num = "88005553535";
const funct = (num) => {
  return num.slice(0, 1) + " (" + num.slice(1, 4) + ") " + num.slice(4, 7) + "-" + num.slice(7, 9) + "-" + num.slice(9);
};

console.log(funct(num));