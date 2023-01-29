const obj = {
  id: 123,
  first_name: "Ivan",
  last_name: "Ivanov",
  password: "new password",
  age: 15
};
const funct = (object) => {
  let [firstName, lastName] = [object.first_name,object.last_name];
  return [firstName,lastName];
};
console.log(funct(obj));