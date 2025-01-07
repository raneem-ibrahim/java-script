var number=[20,45,7,30]

function smallest(array){
    let smallest=array[0];
    for(i=1 ;i<array.length ;i++){
if(array[i]< smallest){
    smallest=array[i];
}
    }
    return smallest;
}
small=smallest(number)
console.log(small)
// ..............طريقة تانية
const arr=[13,45,6,78,9,10]
const min=Math.min(...arr)
console.log(min)
// task2.....................................
let Text;
function mytext(Text){
  var res=Text.split(``).sort().join(``);
    return res;
}
console.log("hello")
console.log(mytext("hello"))
// tas3..................................................
var num=prompt("Enter your number")
function EvenorOdd(num){
    if(num %2 == 0){
        console.log(num="Even number")
    }
    else{
        console.log(num="Odd number")
    }
return  ;
}
console.log(EvenorOdd(num))
// task4...........................................
// let evnum=[1,2,3,4,5,6,7,8,9]
// function evenNumber(array){
//     for(i=0; i<evnum.length ;i++){
//         if(evnum[i]%2 == 0){
//             console.log(evnum[i])
//         }
//     }
//     return evnum;
// }
// even =evenNumber(Array.of(evnum[i]))


 function evenNumber(array){
    return  evennum=evennum.filter(function (number){ return number%2 == 0;

    })
 }
 let evennum=[1,2,3,4,5,6,7,8,9]
 console.log(evenNumber(evennum))
//  task5.....................................
// let numbers1 =[-1,-3,-4,-5,-10,0]
// function sumabs(array){
 
//     for(i=0 ; i<numbers1.length ; i++)
//         var  sum=0;{
//       sum+=numbers1[i];
    
//     } 
//     return num;
// }
// sumabs(numbers1)
// console.log(num)
let numb=[-1,-3,-4,-5,-10,0]
function sumabs(numb){
    let sum=0
    numb.forEach(function (num){
        sum += Math.abs(num)
    });
    return sum;
}
console.log(sumabs(numb))
// task1 mid........................................................
let number5=prompt("Enter your number")
function factorial(number5){
  let   fact =1;
    for(j=1 ; j<=number5 ; j++){
      fact *= j;
    }
    return fact;
}
console.log(factorial(number5))
// task2 mid ....................................................

function removestring(array){
   return array1.filter(function (elemnt){
        return typeof elemnt !== "string"
    })
}
let array1=["Ayham", 3,7,"Alaa", 13,9,"coding"]
console.log(removestring(array1))
// task3 mid.........................................................
function sumofnumber(num){
    sum=0
    for(r=0 ;r<=number6 ;r++){
        sum += r;
        
    }
    return sum;
}
let number6=prompt("Enter your number ")
console.log(sumofnumber(number6))
// task4 mid ........................................................
// function minmaxlengthaverage(array){
//     return array.
//         Math.min(function(element){
//         return array.Math.max(function (element){
//             sum=0;
//             return array.forEach(function (num){
//                 sum += num;
//                 avg=sum/array.length;
//                 return array.length
//             })
            
            
//         })
//     })
// }
// let array33=[7,13,3,77,100]
// console.log(minmaxlengthaverage(array33))
function  minmaxlengthaverage(array){
    let lowest=Math.min(...array);
    let highest=Math.max(...array);
    let length=array.length;
    let sum=array.reduce((num1, num2) => num1 + num2, 0);
    let average=sum/length;
    
    result=[lowest,highest,length,average]

     return  result;
}
let numbers12=[7,13,100,3,77]
console.log( minmaxlengthaverage(numbers12))
// task5 mid .........................................................
// task1 advance....................................................
 function WordCount(str) { 
     return str.split(" ").length;
   }
  
  console.log(WordCount("hello from CodingAcademy!"));
// function WordCount(str) {
//     var totalSoFar = 0;
//     for (var i = 0; i < WordCount.length; i++)
//       if (str(i) === " ") { 
//         totalSoFar = +1; 
//     }
//     totalsoFar += 1;
//   }
  
//   console.log(WordCount("Random String"));
// task2 advanced...................................................
function multiplylength(array){
    for(i=0;i<numberee.length ;i++){
        console.log(result = array[i] * array.length)
    }
    
    return result;
}
let numberee=[4,2,5]
console.log(multiplylength(numberee))
// .......................................
function multiplylength1(array){
let length = number111.length;
return array.map(element => element*length)
}
let number111=[4,2,5]
console.log(multiplylength1(number111))
// task3 advanced.................................................
function samstring(str1,str2){
 return   str1.localeCompare(str2) === 0;

}
console.log(samstring("CodingSchool", "Ac"))
// task4 advanced.........................................................
function repeatchar(strr){
   
    return strr.split(``).map(char => char.repeat(2)).join(``);
}
let strr=("coding");
console.log(repeatchar(strr))
// task5 advanced......................................................
function searchofindex(array ,element){
    return arrays.indexOf(element)+1
}
let arrays=[`Ali`,`Mazen`,`Ayham`,`Murad`] 
console.log(searchofindex(arrays,`Ali`))