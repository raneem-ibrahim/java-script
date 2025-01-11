let pargraph =document.getElementById("sample")

console.log(pargraph)

function check(word){
    if(word.length > 8 ){
        word = '<span style="background:yellow;">' + word + '</span>';
    }
    else{
         word;
    }
   return word;
} 
text =pargraph.innerText.split(" ").map(check)
console.log(text)



