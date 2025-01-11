let input =document.getElementById("input").value;
let btn =document.getElementById("btn")
let list =document.querySelector("ul")

btn.addEventListener(`click`,()=>{
  let  newitem = input.Value;
  input.value = " ";
       


  let  itemList=document.createElement("li")
  let   itemText=document.createElement("span")
  let   itembtn=document.createElement("button")

  list.appendChild(itemList)
  itemList.appendChild(itemText)
  itemText.textContent =newitem ;

  itemList.appendChild(itembtn)
  itembtn.textContent =`delete`;

  itembtn.addEventListener(`click` , () => {
    list.removeChild(itemList)

  })

})