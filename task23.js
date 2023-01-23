const array = ["aaa", "bbb", "ccc", "aaa", "bbb", "", "aaa"];

const funct = (arr) => {
  const a = []
  for (let i = 0; i < arr.length; i++) {
    if (!a.includes(arr[i]) && arr[i] !== '') {
      a.push(arr[i], array.filter(item => item === arr[i]).length);
    }
  }
  for (let i = 0; i < a.length; i++) {
    console.log(a[i] + " " + a[i + 1])
    i++;
  }
  return a;
};

funct(array)