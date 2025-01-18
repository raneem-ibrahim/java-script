function stringtoarray (string){
    return string.split(" ")

}
console.log(stringtoarray("Orange Jordan"))

// .............................

function hidenumber(num){
   return "*******"+ num.slice(-3)
}
let num ="0789943777"
console.log(hidenumber(num))

// ......................................


const input3 = "orange_academy@orange.jo";
  function hideEmail(email) {
    const [username, domain] = email.split("@");
    const hiddenUsername = username.slice(0, 6) + "...";
    return hiddenUsername + "@" + domain;
  }

  console.log(hideEmail(input3))

//   .............................

function capitalize_First_Letter(text) {
    let words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
  }
  const text = 'coding academy by orang  ';
  const result = capitalize_First_Letter(text);
  console.log(result); 

//   ................................

let number = (num) => num.toString().split("").reverse().join("") ;
num = 92485 
console.log(number(num))

// .......................................
let 
a=3
b=4
let string =(a ,b) => {
  
  let temp = a
  a = b
  b = temp
  return {a , b}
}
const result2 = string(a , b)
console.log(result2)

// .........................................
let removestr = ( text2) => {

  
  let res = text2.split("n").join("")
  return  res
 

}
let text2 = "orange"
console.log(removestr(text2))