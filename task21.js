const obj = {first_name: "Ivan", last_name: "Ivanov", email: "ivanov@pochta.com"};
const funct = (arg) => {
  return `${arg.last_name} ${arg.first_name} Email:${arg.email}`;
};
console.log(funct(obj));