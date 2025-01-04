var array1=[1,2,3,4,5]
array1.length;
console.log(array1.length)
// ................................................
array2=[1,2,3,4,5]
for(i=0 ; i<array2.length ;i++){
    console.log(array2[i]);
}
// ..........................................
var array3 =[1,2,3,4,5]
for(i=0 ; i<array3.length; i++){
    console.log(array3[i]-1)
}
// ..........................................

var array4=[1,2,3,4,5]
console.log(Array.isArray(array4))
// .............................................
var arr =Array.from("abc")
console.log(arr)
// .........................................
 var array5=[1,2,3,4,5]
let numb=array5.forEach(function myfunctions(array5){
    console.log(array5)
})

// ...............................................
let array6=[1,2,3]
let array7=[4,5,6]
result= array6.concat(array7);
console.log(result)
// ..........................................
array8=[1,2,3,4,5]
let position = array8.indexOf(4)+1
console.log(position)
// ..........................................
 var array9=[1,2,3,4,5,6]
 console.log(array9)
 console.log(array9.slice(2,4))
// ...............................................
var array10=[1,2,3,4,5]
console.log(array10)
console.log(array10.splice(1,1))
// .....................................
var array11=[1,2,3,4,5]
console.log(array11.join("*"))
// ..............................................
let num=" 1 , 2 ,  3 ";
var array12=num.split( "," ,2)
console.log(array12)
// .........................................
let array13=Array.of("ali","ahmad","kamal")
console.log(array13)
let array14=Array()
console.log(array14)
// ......................................................
let array15=["blue","red","orange","yallow"]
//  var res =array15.fill("blue")
 var res2 =array15.fill("blue",2,4);
//  console.log(res)
 console.log(res2)
//  .........................................................
let  array16=["gray","black","red","blue"]
let res3 =array16.copyWithin(0,2,4)
console.log(res3)
// ...................................................
let array17 =["car","aple","blue" ,"door"]
let res4=array17.sort()
console.log(res4)
// ............................................
let array18 =["car","aple","blue" ,"door"]
let res5=array18.reverse()
console.log(res5)
// ..........................................
let array19=[1,2,3,4,5]
let number=array19.map(function myfunction(num){
    return num*2;
})
console.log(number)
// ...............................................
let array20=[1,2,3,4,5]
let numbers1=array20.filter(function myfunction1(array20){
    if(array20 % 2 == 0){
        console.log(array20)
    }
    return array20;
} )
// .............................................................
let array21=[1,2,3,4,5]
let sum=array21.reduce(function myfunction2(num1,num2){
    return num1+num2;
} ,0)
console.log(sum)