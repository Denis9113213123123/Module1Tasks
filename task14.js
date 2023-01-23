const arg1 = 1, arg2 = 2, operator = '+';
func_operator = (a, b, operator) => {

  console.log(eval(`${a}${operator}${b}`));
};
func_operator(arg1, arg2, operator);
