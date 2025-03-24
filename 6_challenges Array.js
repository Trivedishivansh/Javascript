let teaFlavors = ["green tea","black tea","oolong tea"]

const firstTea = teaFlavors[0];

console.log(firstTea);


let cities = ["London","Tokyo","paris","New york"]

const favoritecity = cities[2];
console.log(favoritecity);

let cityvisited = ["Mumbai","Sydney"]
cityvisited.push("Berlin");
console.log(cityvisited);

let teaorder = ["chai","iced tea","matcha","earl tea"]
teaorder.pop();
console.log(teaorder);


let populartea = ["green tea","oolong tea","chai"]
populartea.pop();
let softcopies = populartea;
console.log(softcopies);
console.log(populartea);

let topcities = ["Berlin","singapore","New york"]
let hardcopies = [...topcities];
console.log(hardcopies);

let europiancitys = ["paris","Rome"];
let asiancitys = ["Tokyo","Bangkok"];

let wordcities = europiancitys.concat(asiancitys);
console.log(wordcities);

let teamenu = ["masala chai","oolong tea","green tea","eael tea"]

let menulength = teamenu.length;
console.log(menulength);

let citybucketlist = ["kyoto","London","cpa town","vancuar"];2

 let isLondonInList = citybucketlist.includes("vadodara");
console.log(isLondonInList);