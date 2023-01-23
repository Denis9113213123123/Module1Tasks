
const array = [
  {from: 'Ivan', to: 'Oleg', amount: 2500},
  {from: 'Ivan', to: 'Igor', amount: 2000},
  {from: 'Oleg', to: 'Igor', amount: 1500}];

const sum = array.reduce((prev,curr) => prev + curr.amount, 0);
let array2=array.map((item) => {if (item.from ==true)
{
  console.log(true);
}});
console.log(sum/array.length,array2);




