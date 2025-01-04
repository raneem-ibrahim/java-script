// هاي الطريقة اذا المستخدم ما اعطى arguments to parameters
function sayhello(username , age = "unknown"){      
if(age<20){
    console.log(`app is not `)
}
else {
    console.log("hello "+username+"  your age ="+ age)
}
}
sayhello("raneem", 23 )
// ...............................
function generateyears(start ,end , exclude){
    for( let i = start ;i<=end ; i++){
        if(i === exclude){
            continue;
        }
        console.log(i)
    }
}
generateyears(2000 ,2024 ,2022)
// ...............................................
function calc(num1,num2){
    return num1 + num2;
}
// ....................................

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // let size = fruits.length;
// // fruits.length;
// // fruits.toString();
// // ....................................
// // let fruit = fruits.at(2);
// // .....................
// // fruits.pop()
// // fruits.push("kiwai")
// fruits.shift();
//  console.log(fruits);
//  console.log()
// const  nam=[1,"ahmad","mohamad"]
// nam.toString()
// nam.toString()
// console.log(nam.join("
// function showInfo( us ="un" ,ag ="un", rt =0 ,show ="yes", ...sk ){
//     document.write(`<div>`);
//     document.write(`<h2>welcome , ${us}</h2>`);
//     document.write(`<p>age , ${ag}</p>`);
//     document.write(`<p>Hour Rate:$ ${rt} </p>`);
//     if (show === "yes"){
//         if (sk.length >0){
//             document.write(`<p>skills:${sk.join("|")}</p>`);

//         }
//         else{
//             document.write(`<p>skills:No skills</p>`)
//         }
        
//     }
//     else {
//         document.write(`<p>skills : Is Hidden</p>`)
//     }
//     document.write(`</div>`);

// }
// showInfo("osama" ,38 ,20 ,"yes","HTL","CSS")

// function sayhellow( fname ,lname){
//     let message =`Hello`;
//     function concatmsg(){
//         message =`${message} ${fname} ${lname}`
//     }
//     concatmsg();
//     return message;

// }
// console.log(sayhellow("osama" ,"mohamad"))
// let x = (num ,x) => num*x;

// console.log(x(5 ,7))