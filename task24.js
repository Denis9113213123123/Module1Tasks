const array = [4, 5, 2, 4, 1, 5, 3];
const sort = "DESC";
const func = (ar, sort) => {

  switch (sort) {
    case "ASC" :
      console.log(array.sort((a, b) => a - b));
      break;
    case "DESC" :
      console.log(array.sort((a, b) => b - a));
      break;
    default:
      console.log(array.sort());

  }
};
func(array, sort);