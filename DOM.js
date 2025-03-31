document.getElementById("changeTEXTBUTTOON")
.addEventListener("click",function(){
 let para =    document.getElementById("mypara")
 para.textContent = "The paragraph is change shivansh";
})

document.getElementById("Highlightfirstcity")
.addEventListener("click",function(){
    let citieslist = document.getElementById("citieslist")
    citieslist.firstElementChild.classList.toggle("highlight")
})

document.getElementById("changeorder")
.addEventListener("click",function(){
   let clicking = document.getElementById("coffeetype")
   clicking.textContent = "Masala chai"
})

document.getElementById("add new item")
.addEventListener("click",function(){
    let newitem = document.createElement("li")
    newitem.textContent = "Egg",
    document.getElementById("shopping").appendChild(newitem)

})

document.getElementById("Removing task")
.addEventListener("click",function(){
    let clicked = document.getElementById("tasklist")
    clicked.lastElementChild.remove();
})

// Exmaple 6
document.getElementById("clicked")
.addEventListener("click",function(){
    alert("Hello shivansh")
})

//Exmaple 7
document.getElementById("Tealist")
.addEventListener("click",function(event){
    if(event.target && event.target.matches(".teaitem")){
        alert("you are selected a" + event.target.textContent);
    }

})

//Examplel 8
document.getElementById("feedbackform")
.addEventListener("submit",function(event){
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback)
    document.getElementById("feedbackDisplay").textContent =`The feedback is ${feedback}`;
})

//Example 9
document.getElementById("toogglehighlight")
.addEventListener("click",function(){
    let clickked = document.getElementById("description text")
    clickked.classList.toggle("highlight");
})