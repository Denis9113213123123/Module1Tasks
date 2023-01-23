const str = "ivanov.oleg@pochta.com"

const func = (str) => {
  const arrayObj = [];
  let stroka = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "@") {
      arrayObj.push(stroka)
      stroka = '';
    } else {
      stroka += str[i];
    }
  }
  arrayObj.push(stroka)
  return {
    username: arrayObj[0],
    domain: arrayObj[1],
  }
}
console.log(func(str))