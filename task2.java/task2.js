var age =23;
if( age > 18){
   console.log("you ar an adult")
}
//.........................................

var score = 45;
if( score <= 50){
console.log("you filed the test" )
}
// .........................................
var name = "john" ;
if( name == "john"  ){
   console.log("Hello,jhon")
}
// ...............................
var day ="monday" ;
if (day != "sunday" && day != "saturday"){
    console.log("Its a weekday")

}
// ........................................
var num = 4
if( 4 %2 == 0){
console.log("The number is even")
}
// .............................................
char ="a"
switch(char){
    case "a":
        console.log("Its a litter")
}
// .............................................
// var list = [1,2,3]
//  switch(list){
//     case "1":
//      case "2":
//      case "3":
//         console.log("its aaray")
//  }
  list =[1,2,3]
  if(list= "an array"){
    console.log("Its array")

  }

// ................................
x =5;
if(x>0){
    console.log("y its apositive number")
}
// ........................................
y = -5;
if(y<0){
    console.log("y is a negativ number")
}
// .....................................
z= 9
if(3*3 == z){
    console.log(" z is a multiple of 3")
}
// ......................................................
//  GPA =90;
 
//  switch(GPA){
//     case a:
//         console.log("excellent");
//     case b:
//     console.log("very good");
//     break;
//     case c:
//     console.log("good");
//     break;
//     case f:
//     console.log("failed");
//     break;
// }
// ......................................
month = "january" ;
switch(month){
  case "December":
  case "january":
  case "february":
    console.log("winter");
    break;
    case "march":
     case "april":
    case "may":
   console.log("spring");
    break;
    case "june":
     case "july":
     case "august":
        console.log("Summer");
    break;
    case "september":
     case "october":
    case "november":
        console.log("Autumn");
     break;
}
// ...........................................
password ="mypassword123";
switch(password){
    case "mypassword123":
        console.log("your password is strong")
        break;
    case "rewuy":  
    console.log("your password is weak")
    break;
}
// ...................................
email ="admin@admin.com";
password = "12345Admin";
 if(email == "admin@admin.com" && password == "12345Admin"){
   console.log("Welcome")
}

else if (email != "admin@admin.com") {
    consle.log("incorrect email ")
  
}

else if (password != "12345Admin" ){
    consle.log("incorrect password")
}
 
// ...................................
console.log(isNaN(123)); 
console.log(isNaN("abc"));
// console.log(isNumber(9) );