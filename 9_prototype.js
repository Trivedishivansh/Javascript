// let computer = {cpu:12}
// let lenovo = {screen:"HD",
//     __proto__:computer,
// }
// let Tomhardware = {}
// console.log(`lenovo`,lenovo.__proto__);

let genericcar = {tyre:4}
let tesla = {driver:"AI"}

Object.setPrototypeOf(tesla,genericcar)
console.log(`tesla`,Object.getPrototypeOf(tesla));