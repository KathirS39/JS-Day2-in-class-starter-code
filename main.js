/////// Variables Section ///////
const myName = "Kathir Seralaathan"
const fruits = ['apples', 'bananas', 'blueberries', 'strawberries', 'pineapples'];
const car = [{make:"Toyota", model:"Prius", color:"Silver"},
             {make:"Chevy", model:"Bolt", color:"Blue"}, 
             {make:"Honda", model:"Civic", color:"White"}];
const today = new Date();
const loggedIn = true;



/////// PART 1 - Variables and Data Types demo///////
var a = 'Test1';
let b = 'Test2';

function testVar(){
  var a = 30;
  
  if(true){
    var a = 50;
    console.log(a);
  }
  console.log(a);
}

function testLet(){
  let a = 30;
 
  if(true){
    let a = 50;
    console.log(a);
  }
  console.log(a);
}

console.log(a);
console.log(b);
console.log("Example using var");
testVar();
console.log("Example using LET");
testLet();
// When you are done with this section you can comment out the console.logs above






//////// PART 2 - template literals////////
const result2Element = document.getElementById('result2');

////starter code////
//update code below to using template literals (not concatenation) to pull in the variables myName, color, make, into output
result2Element.innerHTML = `Hello my name is ${myName} and I drive a ${car[2].color} ${car[2].make} ${car[2].model}`;


//Footer Section
const footerElement = document.getElementById("footer");
//update code below to use template literals to pull in the myName and the current year
footerElement.innerHTML = `&copy; ${myName} ${today.getFullYear()}`;





//////// PART 3 - Ternary Operator////////
////section 1 - basic if else statement
// if (loggedIn) {
//     const result3Element = document.getElementById('result3');
//     result3Element.innerHTML = "Welcome back!";
// } else {
//     const result3Element = document.getElementById('result3');
//     result3Element.innerHTML = "Please log in";
// }

////Sample code.  You can uncomment this to see how simple a ternaly operator can be
// loggedIn ? alert("welcome back") : alert("please log in");

////section 2 -ternary operator to update the result3Element
result3Element = document.getElementById('result3');
result3Element.innerHTML = loggedIn ? "Welcome Back" : "Please log in";




//////// PART 4 - Arrow Functions////////
// function Greetings(name) {
//     return `Hello ${name}!`;
// };

// console.log(Greetings("Clint"));

//Make a copy of the above function and rename it GreetingsArrow() and then convert function to an arrow function here
const GreetingsArrow = (name = 'Default Name') => `Hello ${name}!`;
console.log(GreetingsArrow(myName));

// let newH4 = document.createElement('h4')
// newH4.innerHTML




//////// PART 5 - Array methods////////
function printFruit() {

    let resultElement = document.getElementById("result5");

    resultElement.textContent = "";

    // In this code, the filter method is applied to the fruits array to only select the fruits that begin with "b"
    // Then, the map function is applied to the array of only fruits that being wiht "b". The map function is taking each individual fruit in the array and giving it its own paragraoh tag
    // The goal of the code is to only select the fruits in the array that start with "b" and to display them each as their own paragraph
    // The output of the code will fill the element with id = "result5" with paragraph tags that contain the fruits that begin with "b" inside of them
    fruits.filter(fruit => fruit.startsWith('b')).map(fruit => {
      let p = document.createElement('p');
      p.textContent = fruit;
      resultElement.appendChild(p);
    })

    // Loop through the fruits array
    // for (let i = 0; i < fruits.length; i++) {
 
    //     // Create a list item for each fruit
    //     let p = document.createElement("p");
    //     p.textContent = fruits[i];

    //     // Append the list item to the ordered list
    //     resultElement.appendChild(p);
    // }

    // resultElement.textContent = fruits.map(fruits => document.createElement("p").textContent = fruits);

 }

 
 
 function clearText() {
    let resultElement = document.getElementById("result5");
    resultElement.textContent = "";
 }





 //////// PART6 - Destructuring////////
 myCar(car[0]);

 function myCar(car) {
    //  var make = car.make;
    //  var model = car.model;
    //  var color = car.color;

     let {make, model, color} = car;
 
     var message = `I drive a ${color} ${make} ${model}`;
   
     document.getElementById("result6").textContent = message;
 }

//convert the myCar function to use destructuring







//////// PART 7 - Spread Operator////////

const baseProduct = {
    id: 'PROD-001',
    name: 'Wireless Headphones',
    price: 199.99,
    warranty: '1 year'
  };
  
  // Seasonal promotion overrides
  const holidayPromo = {
    price: 149.99,
    promoText: 'Holiday Special!',
    bundle: 'Free carrying case'
  };
  
  // Merge basePrduct and Seasonal using spread operator and add lastUpdated property with a value of '2023-12-31'
  ///UPDATE THIS CODE
  const currentProduct = { ...baseProduct, ...holidayPromo, lastUpdated: "2023-12-31" };
  
  //Check the result object in the console:
  console.log(currentProduct);
  //UPDATE THIS OUTPUT
  document.getElementById("result7").textContent = `The ${currentProduct.name} are on sale for ${currentProduct.price} as of ${currentProduct.lastUpdated}`; 





 //////// PART 8 - Try Catch////////
 function InputValidation() {
    const message = document.getElementById("part8-p");
    message.innerHTML = "";
    
    let x = document.getElementById("part8-input").value;
    
    try { 
      if (x == "") {
        throw "EMPTY"
      } else if (isNaN(x)) {
        throw "NOT A NUMBER";
      } else if (x < 10) {
        throw "TOO LOW"
      } else if (x > 15) {
        throw "TOO HIGH"
      }
      else {
        message.innerHTML = "Success";
      }
    }
    catch(err) {
      message.innerHTML = `Input is ${err}`;
     } 
    finally {

    }

    
  }


