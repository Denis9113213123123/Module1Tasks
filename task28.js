const user = {
  id: 123,
  first_name: "Ivan",
  last_name: "Ivanov",
  password: "Mypwd!23",
  age: 13
  };
const changed = {age: 15, password: "new password"};

const funct = (obj1,obj2) => {
  return Object.assign(obj1,obj2);
};
console.log(funct(user,changed))

