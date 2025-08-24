//primitive data typesc--> called by value
// 7 data Types :  String ,Number,Boolean, null,undefined,Symbol(To make a value unique),BigInt

// Reference Type or Non - Primintive --> we allocateb reference of these datatypes in memory
// array, Object ,function
const score = 100;
const scoreValue = 89.7;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id==anotherId);
const hero = ["Amresh","Govind","Aditya"]
console.log(hero);
const myObj = {
    name : "Amresh",
    branch :"CSE",
    Year :4
}
const myFunction = function(){
    console.log("Hello world");

}
myFunction();

