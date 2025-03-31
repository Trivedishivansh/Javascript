let random = Math.random();
let first,second,third;

if(random<0.33){
    first = "crazy"
}else if(random<0.66 && random>=0.33){
    first = "Amazing"
}else{
    first = "fire"
}
if(random<0.33){
    second = "Engine"
}else if(random<0.66 && random>=0.33){
    second = "Foods"
}else{
    second = "Garmet"
}
if(random<0.33){
    third = "Bros"
}else if(random<0.66 && random>=0.33){
    third = "Limited"
}else{
    third = "Hub"
}
console.log(`${first} ${second} ${third}`)
