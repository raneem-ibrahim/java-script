let user=document.getElementById("user")
let password =document.getElementById("password")
let confirm =document.getElementById("confirm")
let btn =document.getElementById("btn")
let spn =document.getElementById("spn")
let spn2 =document.getElementById("spn2")
let spn3 =document.getElementById("spn3")



user.addEventListener("focus", ()=>{
    user.addEventListener("blur" ,()=>{
        if(user.value.trim() === ""){
            spn.textContent="required";
            spn.style.color="red"
        }
        else{
            spn.style.display="none"
        }
    })

})
password.addEventListener("focus", ()=>{
    password.addEventListener("blur" ,()=>{
        if(password.value.trim() === ""){
            spn2.textContent="required";
            spn2.style.color="red"
        }
        else{
            spn2.style.display="none"
        }
    })

})
confirm.addEventListener("focus", ()=>{
    confirm.addEventListener("blur" ,()=>{
        if(confirm.value.trim() === ""){
            spn3.textContent="required";
            spn3.style.color="red"
        }
        else{
            spn3.style.display="none"
        }
    })



    btn.addEventListener("click",()=>{
        if(user.value == "raneem"){
            if(password.value == 12345){
                if(password.value == confirm.value){
                window.alert("Login Successfully")
                }
            }
        }
        else{
            window.alert("Login wrong")
        }
    })

})
  

































