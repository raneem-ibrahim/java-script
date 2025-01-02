for(var i=0 ; i<11 ; i++){
    console.log(i)
}
// ........................................................
var i=0;
while(i<11){
    console.log(i);
    i++;
}
// ........................................................
var num=[1,2,3,4,5]
console.log(num)
// .........................................................
for(i=0 ; i<11 ; i++){
    if( i % 2 == 0){
        console.log(i);
    }
}
// ...........................................................
let sum=0;
for(i=0 ; i < 11 ; i++){
    sum += i ;
}
console.log(sum);

// ............................................................
var numb=[1,2,3,4,5]
for(i=0 ; i<=4 ;i++){
    if(i < numb[4]){
        
    }
}
console.log(numb[4]);
// .............................................................
var numbe=[5,4,3,2,1]
for(i=0 ; i<=4 ;i++){
    if(i > numbe[4]){
       
    }
}
console.log(numbe[4]);
// ..............................................................
var number=[1,2,3,4,5]
var totale=0;
for (i=0 ; i<= number[4] ;i++)
{
    totale += i ;
    var avg= totale/5;
}
console.log(avg);
// ..............................................................
var totale1 = 1; 
for (i=1 ; i<=5 ;i++){
  totale1 *= i;
  console.log(totale1);
}
// .......................................................
 
 
// .....................................................
for(i=1 ; i<=10 ; i++){
  var   x=i*5;
    console.log(i+ "*" +"5" +"="+ x)
}
// ......................................................
var arr=[1,2,3,4,5]
console.log(arr[0],arr[2] ,arr[4])
// .......................................
var arr1=[1,2,3,4,5]
for(i=arr1.length-1 ; i>=0 ; i--){
    console.log(arr1[i])

}
// console.log(arr1.reverse())
// ............................................
var numbers=[1,2,3,4,5]
for(i=numbers[1] ;i<3 ;i++ )
{
    console.log(numbers[i])
}
// ............................................
var numbera = [1,2,3,4,5]
 num = false;
for(i=0 ; i < numbera.length ; i++){
    if ( numbera[i] === 4){
        num = true;
        break;
    }
}
if(num){
    console.log("true")
}
else {
    console.log("false")

}
// .......................................
var array1= [1,2,1,3,2,1]
var count=0;
for(i=0 ; i < array1.length ; i++){
if (array1[i] == 1){
    count++;
}

}
console.log(count)
// .......................................
