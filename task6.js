const array = [
  {name: "Ivan",age:24},
  {name: "Oleg",age:16},
  {name: "Igor",age:24},
];

const funct = (arr) => {
  const array2 = [];
  arr.forEach((item) => {
    if(item.age>18)

    {
      array2.push(
        {Name:item.name,Age:item.age}
      )
    }
  }
  )
  return array2;
}
console.log(funct(array));