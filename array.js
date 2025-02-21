let teaFlavors  = ["green tea","blacktea","oolongtea"]

 const firsttea = teaFlavors[0]
 console.log(firsttea)

 let cities = ["london","tokyo","paris","New york"]

 const favcity =cities[3]

 console.log(favcity)

 let cityvisited = ["Mumbai","sydny"]
 cityvisited.push("Berlin")
 console.log(cityvisited)

 let teaorderd = ["chai","icedtea","matcha","capachino"]
const lastordre =  teaorderd.pop()
 console.log(teaorderd)
 console.log(lastordre)


 let populartea = ["greentea","oolongtea","chai"]
 let softcopy = populartea
 console.log(softcopy)
console.log(populartea)


//Hard copy
let topcites = ["Berlin","Singapor","New york"]
let hardcopy = [...topcites]
topcites.pop()
console.log(hardcopy)
console.log(topcites)

let europeancities = ["paris","rome"]
let asiancites = ["Tokyo","bangkok"]

const worldcites = europeancities.concat(asiancites)

console.log(worldcites)


let teamenu = ["masala tea","oolongtea","green tea","oolong tea"]
 
let menulength = teamenu.length
console.log(menulength)