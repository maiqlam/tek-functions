

// // // declaration (can be hoisted)
// // function add (x,y){
// //     return x + y;
// // };
// // console.log(add(2, 4)); //2 / this cannot be used on the following functions

// // // expression (cannot be hoisted)
// // const add2 = function (x,y) {
// //     return x + y;
// // };

// // // arrow 
// // const add3 = (x, y) => x + y;


// // exercise
// // n1 % 2 is the same as n1 % 2 === 0
// // ! (bang symbol) also refers to our logical "not" feature
// // function areBothEven(n1, n2) {
// //     return !(n1 % 2) && !(n2 % 2);
// //   }
// //   console.log(areBothEven(2, 4)); //true
// //   console.log(areBothEven(2, 5)); //false

// // Practice Activity 1: Write a Function Declaration
// // Write a function named computeArea using the function declaration approach.
// //     It will have two parameters: width & height.
// //     It will compute the area of a rectangle (width multiplied by height) and return a string in the following form:
// // function computeArea (width, height) {
// //     return width * height;
// // }
// // computeArea(9, 5)
// // console.log("The area of a rectangle with a width of " + computeArea(w) " and a height of " + computeArea(h) + " is " + computeArea + " square units.");

// //         The area of a rectangle with a width of _ and a height of _ is ___ square units.


// // Practice Activity 2: Write a Function Expression
// // Write a function named planetHasWater using the function expression syntax.
// //     It will have one parameter: planet.
// //     Return true if the planet argument is either "Earth" or "Mars", otherwise return false.
// //     Bonus points if you ensure the function will work regardless of the casing of the planet being passed in ('earth', 'MARS', etc.).

// // const planetHasWater = function(planet) {
// //     let p = planet[0].toUpperCase() + planet.slice(1).toLowerCase();
// //     if (p === "Earth" || p === "Mars") {
// //         return true;
// //     }
// //     return false;
// // }
// // console.log(planetHasWater("mars"));

// // function getDevObject(name) {
// //     let skills = [];
// //     for (let i = 1; i < arguments.length; i++) {
// //       skills.push(arguments[i]);
// //     }
// //     return {
// //       devName: name,
// //       jobSkills: skills
// //     };
// //   }

// //   let maria = getDevObject('Maria', 'HTML', 'CSS', 'JavaScript', 'jQuery');

// /// ALTERNATE: Rest parameter (preferable to arguments)
// // function getDevObject(name, ...skills) {
// //     return {
// //       devName: name,
// //       jobSkills: skills
// //     };
// //   }

// //   console.log(maria); 
//   //{
// //   devName: 'Maria',
// //   jobSkills: [ 'HTML', 'CSS', 'JavaScript', 'jQuery' ]
// // }

// let numArray = [
//     { value: 10 },
//     { value: 20 },
//     { value: 0 },
//     { value: -10 }, 
//     { value: 15 }, 
//     { value: 28 }, 
//     { value: -1000 },
//     { value: 42 },
//     { value: 7 }
// ];

// function returnEven(array) {
//     let newArray = [];

//     array.forEach((element) => {
//         if (element.value % 2 == 0) {
//             newArray.push(element);
//         }
//     });

//     return newArray;
// }

// let newArray = returnEven(numArray);

// newArray[0].value += 10;

// numArray[3].value = 67;

// let myEvenValue = newArray[1].value;
// myEvenValue /= 2;

// console.log(myEvenValue);

const person = {
    name: "John",
    age: 34,
    email: "john@example.com",
  };
  
  person.age = 20;
  const personDeep = structuredClone(person);
  const personShallow = { ...person };
  
  personDeep.age = 50;
  
  console.log(person);
  console.log(personDeep);
  console.log(personShallow);