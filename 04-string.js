

//console.log(`my name is ${name} and my repocount is${repocount}`)

// console.log(`my name is ${name} my repository count is${repocount}`)

//Dates

let myDate = new Date()
console.log(myDate.toString());

console.log(myDate.toISOString());

console.log(myDate.toDateString());



console.log(myDate.toLocaleString());


console.log(typeof myDate)


let mycreatedDate = new Date(2023,0,23)
console.log(mycreatedDate.toDateString())


let mysecondDate = new Date('2025-02-11')
console.log(mysecondDate.toLocaleString())

let myTimestamp = Date.now()
console.log(myTimestamp)