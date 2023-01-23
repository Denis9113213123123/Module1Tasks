const array = ["str", 123, "123", true, null, {}, 2];
const funct = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    switch (typeof arr[i]) {
      case "string":
        console.log("Это строка!");
        break;
      case "number":
        console.log("Это число");
        break;
      case "boolean":
        console.log("Это булево значение");
        break;
      default:
        console.log("Неизвестное значение");
          break;
    }
  }};
funct(array);
