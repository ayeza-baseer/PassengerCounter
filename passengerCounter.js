let count=0
let countElement=document.getElementById("count-el")
let saveElement=document.getElementById("save-el")
function increment(){
   count++;
   countElement.textContent=count
}


function save(){
    let prevEntry=count+" - "
    saveElement.textContent+= prevEntry
    countElement.textContent=0
    count=0
}