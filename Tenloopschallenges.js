let tea = ["greentea","blackta","chai","oolongtea"]

let selectedtea = []

for (let i = 0; i < tea.length; i++) {
    if(tea[i]==="chai"){
        break

    }
   selectedtea.push(tea[i])
   
    
}console.log(selectedtea)

let cities = ["London","Newyork","Paris","Berlin"]
let visitedcities = []

for (let j = 0; j < cities.length; j++) {
if(cities[j]==="Paris"){
    continue

}
   visitedcities.push(cities[j])
    
}console.log(visitedcities)

let number = ["1","2","3","4","5"]
let smallnumber = []
for (let k = 0; k < number.length; k++) {
    if(number[k]==="4"){
        break

    }

    smallnumber.push(number[k])

    
}console.log(smallnumber)

let Tea = ["chai","greentea","herbaltea","blacktea"]
let Bevrages = []
for (const teaa of Tea) {
    if(teaa ==="herbaltea"){
        continue
    }

    Bevrages.push(teaa)
    
}console.log()

    //For In loop

    let citypopulation = {
        "London": 6900696,
        "New York": 342641544,
        "paris": 67000,
        "Berlin":455767
    }
    let citypopulations = {}
    for (const city in citypopulations) {
        if(citypopulation[city]<30000000){
            continue
        }
       citypopulation[city] = citypopulations[cities]
        }
    
   
        let teas = ["earltea","greentea","chai","oolongtea"]
        let availabelTeas = []

       teas.forEach(function(tea){
        if (tea === 'chai'){
            return}
            availabelTeas.push(tea)
        })
        console.log(availabelTeas)













        
       
        
