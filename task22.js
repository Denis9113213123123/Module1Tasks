const array = [13, 14, 32, 23, 34, 21, 44, 47, 86];
const start= 4,  end= 6;
const funct = (ar) => {
  const array2=[];
  for (let i = start; i<=end;i++){
   array2.push(ar[i]);
  };
  return array2;
};
console.log(funct(array));

