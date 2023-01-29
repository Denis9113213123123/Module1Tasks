const obj1 = {
  id: 123,
  first_name: "Ivan",
  last_name: "Ivanov",
  password: "Mypwd!23",
  age: 13
};



const funct = (obj) => {
  let clone = Object.assign({}, obj1 );
delete clone.password;
  return clone;
};
console.log(funct(obj1))