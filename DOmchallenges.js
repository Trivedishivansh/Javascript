//Example 1

document.getElementById("changeTEXTBUTTON").
addEventListener("click",function(){
 let paragraph =  document.getElementById("mypara");
 paragraph.textContent = "The para is change in click";

 })

// Example 2

document.getElementById("Highlightfirstcity").
addEventListener("click",function(){
 let citieslist = document.getElementById("citieslist");
 citieslist.firstElementChild.classList.add("highlight");
})

// Example 3

document.getElementById("changeorder").
addEventListener("click",function(){
 let Teatype =  document.getElementById("coffeetype");
 Teatype.textContent = "Masala chai";
})

// Example 4
document.getElementById("add new item").
addEventListener("click",function(){
 let tasklist = document.createElement("li");
 tasklist.textContent = "Eggs"
 let items =  document.getElementById("shopping").appendChild(tasklist);



})

// Example 5

document.getElementById("Removing task").
addEventListener("click",function(){
 let tasking = document.getElementById("tasklist")
 tasking.lastElementChild.remove();
})

