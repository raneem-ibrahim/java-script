// let car ={
//     title: `BMW`,
//     price:`5000000`,
//     color:[`white `,`red`,`black`],
//     model: 2020,
//     hello:function(){
//         return `hello`;
//     }
// }
// console.log(car.hello())

// let user ={
//     firstName:`abdalrahman`,
//     lasName:`gamal`,
//     age: `25`,
//     skils:[`html`,`css`,`js`,`paython`,`php`],
//     active:true,
//     phoneNmber:{
//         first:`03983725625`,
//         second:`3873983238`,
//     },
//     Adress:{
//         jordan:`aqaba`,
//         uae:`abu dhabi`
//     },
//     isActive:function(){
//         if (user.active === true ){
//    return `hello user`;
//         }
//         else{
//             return`sory you are not active`
//         }
//     },
//     getage : function (){
//         if(user.age >= 18){
//             return `avialable`;
//         }
//         else 
//         {
//             return `not avialable`;
//         }
//     }

// }
// console.log(user.firstName)
// task1 ..............................
let username ={
    name:"Adem",
    age:25,
    gender:"male"
}
username.gender="male"
console.log(`${username.name}   ${username.age}  ${ username.gender}`)
// task2.................................
let user ={
    name:"Adem",
    age:25,
}

 user.gender="male";
 console.log(user)
//  task3.............................
let user20 ={
    name:"Adem",
    age:25,
}
user20["adress"]="jordan";
console.log(user20)
// task4
console.log(user.name)  
// task5
let user1 ={
    name:"Adem",
    age:25,
}
console.log(user1["name"])
// task6
let user2 ={
    name:"Ahmad",
    age:25,
}
for(let key in user2){
    console.log(user2)
}
// task7
let user3 ={
    name:"Adem",
    age:25,
    gender:"male"
}
const keys = Object.keys(user3);
console.log(user3)
// task8................
let user4 ={
    name:"hala",
    age:25,
    gender:"male"
}
const keys2 = Object.values(user4);
console.log(keys2)
// task9......
let user5 ={
    name:"lana",
    age:25,
    gender:"male"
}
const keys3 = Object.entries(user5);
console.log(keys3)
// task10......

let user8 ={
    name:"Adem",
    age:25,
    gender:"male"
}

const person2 = {firstName: "Anne",lastName: "Smith"};
Object.assign(user8,person2)
console.log(user8,person2)
// task11..........
let user80 ={
    name:"Adem",
    age:25,
   

}
const  keyl=Object.freeze(user80)
user80.gender="male"

console.log(user80)
// task12..............................
let obj={
    name:"Adem",
    age:25,
}
Object.seal(obj);
obj.age =20;
console.log(obj)


// task13..................................................................................
class ToDo{
    constructor(todoList,todoInput,addButton){
        this.todoList = todoList;
        this.todoInput = todoInput;
        this.addButton = addButton;
    
    this.addButton.addEventListener(`Click`, () => this.addTask()

    )
}
addTask(){
    const taskText=this.addInput.value.trim();
    if(taskText === "") return;
    const li=document.createElement("li")
    li.textContent=taskText;

    const completeButton =document.creatElement("button")
       completeButton.textContent ="complet";
       completeButton.onclick=() => this.togglecomplete(li);
       const deletButton=document.creatElement("button");
       deletButton.textContent="Delete";
       deletButton.onclick= () => this.deleteTask(li);

   li.appendChild(completeButton);
   li.appendChild(deletButton);

   this.todoInput.appendChild(li);

   this.todoInput.value ="";

}

toggleComplete(task) {
    task.classList.toggle('completed');
}

deleteTask(task) {
    this.todoList.removeChild(task);
}


}
const todoList = document.getElementById('todoList');
        const todoInput = document.getElementById('todoInput');
        const addButton = document.getElementById('addButton');

        const myToDo = new ToDo(todoList, todoInput, addButton);