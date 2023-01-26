const str1= "find_and_replace_element_of_array";
//Output: findAndReplaceElementOfArray
const funct1 = (str) => {
  let str2 ="";
  for(let i = 0; i < str.length;i++){
    if (str[i] === "_"){
      str2 += str[i+1].toUpperCase();
      i++;
    }else str2 += str[i];
  }

  return str2;

};
console.log(funct1(str1));