const N=3;
let a=1;
let b=1;
let c=0;

const funct = (N) => {
  if (N!=0){
    for (let i=3;i<=N;i++){
      c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  else return 0;
  };
console.log(funct(N));
