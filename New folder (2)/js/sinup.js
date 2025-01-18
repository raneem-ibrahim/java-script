let firstname = document.getElementById("firstname")
let lastname = document.getElementById("lastname")
let email = document.getElementById("email")
let password = document.getElementById("password")
let confirm = document.getElementById("confirmpassword")
let btn = document.getElementById("btn")
let reqiuerd = document.querySelectorAll(".reqiuerd")
const spne =document.getElementById("spn2")
const sbanpass=document.getElementById("sban")


  
   let users = JSON.parse(localStorage.getItem("users")) || [];

function validation() {
    let valid = true;

    console.log(reqiuerd);
    if (firstname.value.trim() === "") {
        reqiuerd[0].classList.remove("reqiuerd")
        valid =false;
    }
    if (lastname.value.trim() === "") {
        reqiuerd[1].classList.remove("reqiuerd")
        valid =false;
    }
    if (email.value.trim() === "") {
        reqiuerd[2].classList.remove("reqiuerd")
        valid =false;
    }
    else if(!email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
        spne.classList.remove("spn3");
        valid =false;
    }
    if (password.value.trim() ===  "") {
        reqiuerd[3].classList.remove("reqiuerd")
        valid =false;
    }
    if(!password.value.match(/[A-Z]/g))
    {
         sbanpass.classList.remove("spn4")
         valid =false;
    }
    if (confirm.value.trim() === "") {
        reqiuerd[4].classList.remove("reqiuerd")
        valid =false;
    }
    else if(!password.value.match(confirm.value)){
       confirm.style.border="red solid 1px";
      valid =false;
    }
    if(password.value.match(confirm.value)){
      confirm.style.border=" none";
    }
    
        
    
    if(valid == true){
        let user={
            fname: firstname.value,
            lname :lastname.value,
            email :email.value, 
            password : password.value,
            copassword   : confirm.value
        }
        users.push(user)
        localStorage.setItem("user" ,JSON.stringify(users)) 
        
        if(valid === true){
            window.location.href ="login.html"
          }
    }
    
}
[lastname , firstname , email, password , confirm].forEach((input ,index) =>{
    input.addEventListener("input" , ()=>{
        if(index < reqiuerd.length){
            reqiuerd[index].classList.add("reqiuerd")

        }
       
    })

})
  
    

btn.addEventListener("click" , (event)=>{
     event.preventDefault();
    validation();

});

  





















