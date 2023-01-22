const arg1=1;
const arg2=2;
const operator='+';
func_operator = (a,b,operator) => {

  console.log(eval(`${a}${operator}${b}`));
};
func_operator(arg1,arg2,operator);
