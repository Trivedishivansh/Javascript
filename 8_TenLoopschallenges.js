let teas = ["green tea","black tea","chai","oolong tea"];
let selectedteas = []

for (let i = 0; i < teas.length; i++) {
    if (teas[i] == "chai") {
        break;
        
    }
    selectedteas.push(teas[i]);

   
    
}
console.log(selectedteas);

let cities = ["London","paris","Newyork","berlin"];
let visitedcities = [];

for (let j = 0; j < cities.length; j++) {
    if (cities[j]== "Newyork") {
        continue;
        
    }
    visitedcities.push(cities[j]);
}
console.log(visitedcities);

let number = [1,2,3,4,5]
let smallnumber = [];
for (const num of number) {
    if(num ===4){
        break;
    }

    smallnumber.push(num);
    
}

let chai = ["chaii","greentea","herbaltea","blacktea"];
let prefferdchai = [];

for (const obj of chai) {
    if(chai === "herbaltea"){
        continue;
    }
    prefferdchai.push(chai);
    
}
console.log(prefferdchai);

let population = {
    "London":890000,
    "New york":840000,
    "Paris":220000,
    "Berlin":350000
};



