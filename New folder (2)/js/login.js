// let email=document.getElementById("email")
// let password=document.getElementById("password")
// let button =document.getElementById("btn")
// let users = JSON.parse(localStorage.getItem("users")) || [];

// btn.addEventListener("click", (event) => {
//   event.preventDefault();
// //     emailvalue = email.value.trim();
// // passwordvalue = password.value.trim();

  
//     // let accounts = localStorage.getItem("users") || [];
//     // accounts = JSON.parse(accounts);

//    let validUser= users.find(
//      (user) => user.email === email.value.trim()  && user.password === password.value.trim());

//    if(validUser){
//     window.location.href = "dashboard.html";
//    }else{
//     window.alert("user not found");
//    }
//     // let found = false;
//     // accounts.forEach((account) => {
//     //   if (account.email === emailvalue) {
//     //     if (account.password === passwordvalue) {
//     //       found = true;
//     //     }
//     //   }
//     // });
  
//     // if (found) {
//     //   window.location.href = "signup.html";
//     // } else {
//     //   window.alert("user not found");
//     // }
  
  
//   });
let email = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("btn");

let users = JSON.parse(localStorage.getItem("users")) || [];

btn.addEventListener("click", (event) => {
  event.preventDefault();

  
  if (email.value.trim() === "" || password.value.trim() === "") {
    window.alert("Please enter both email and password.");
    return;
  }

  let validUser = users.find(
    (user) =>
      user.email === email.value.trim() && user.password === password.value.trim()
  );

  if (validUser) {
    console.log("Login successful:", validUser);
    window.location.href = "dashboard.html"; 
  } else {
    
    window.alert("User not found. Please check your email and password.");
  }
});
