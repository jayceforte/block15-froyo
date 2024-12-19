// A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. They type vanilla,vanilla,vanilla,strawberry,coffee,coffee.
// 
//  When they view the browser console, they observe a table listing how many of each flavor they have ordered. In this case, they will be able to observe that they have ordered 
// three vanilla, two coffee, and one strawberry froyo.

// INPUT: vanilla,vanilla,vanilla,strawberry,coffee,coffee
// OUTPUT{vanilla: 3, strawberry: 1, coffee: 2,}

let Flavors = window.prompt("Enter Your Flavors Below")

const Vanilla = {
    name:"Vanilla",
    isInStock:true,
    Flavors:["Vanilla"],
}
const key = "isInStock"
Vanilla.amount = "3"
console.log(Vanilla)

const Strawberry = {
    name:"Strawberry",
    isInStock:true,
    Flavors:["Strawberry"],
}
const key1 = "isInStock"
Strawberry.amount = "1"
console.log(Strawberry)

const Coffee = {
    name: "Coffee",
    isInStock:true,
    Flavors:["Coffee"]
}
const key2 = "isInStock"
Coffee.amount = "2"
console.log(Coffee)
console.log(Vanilla.isInStock)