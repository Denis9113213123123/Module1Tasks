const str = "Иванов Пётр Андреевич"

const func = (str) => {
  const arrayObj = [];
  let stroka = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      arrayObj.push(stroka)
      stroka = '';
    } else {
      stroka += str[i];
    }
  }
  arrayObj.push(stroka)
   return {
    first_name: arrayObj[0],
    last_name: arrayObj[1],
    patronymic_name: arrayObj[2]
  }
}
console.log(func(str));