
//========== Exercise #1 ===========//
//Write a function that parses through the below object and displays all of their
//favorite food dishes as shown:

const displayFavdishes = (person) => {
    for (const key in person) {
        console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}:`);

        if (Array.isArray(person[key])) {
            // If the value is an array, iterate thru it
            person[key].forEach(item => {
                console.log(`  - ${item}`);
            });
        } else if (typeof person[key] === 'object') {
            // If the value is an object, iterate thru properties
            for (const subKey in person[key][0]) {
                console.log(`  - ${person[key][0][subKey]} (${subKey.replace('_', ' ')})`);
            }
        } else {
            // If the value is a string, display it
            console.log(`  - ${person[key]}`);
        }
    }
};

let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
};

displayFavdishes(person3);


//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

// Create our Person Class

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);

    };
    
    //Method to incrememt the person's age by 1
    incrementAge = () => {
        this.age++;
        console.log(`${this.name}'s age incremented by 1. New age: ${this.age}`);
    };

    
    addAge = (years) => {
        this.age += years;
        console.log(`${this.name}'s age incremented by ${years} years. New age: ${this.age}`);
        };  
    
}
    
const person1 = new Person('Jane Doe', 40);
const person2 = new Person('John Doe', 42);

person1.printInfo();
person2.printInfo();

person1.incrementAge(); // Increment person1's age by 1
person1.incrementAge(); // Increment person1's age by 1 again


person1.addAge(3);




// ============= Exercise #3 ============//
//Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
   // handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.

   const url = 'http://ergast.com/api/f1/2008/5/driverStandings.json';

   // callbacks with .then() and .catch()
   fetch(url)
       .then(response => {
           if (!response.ok) {
               throw new Error(`HTTP error! Status: ${response.status}`);
           }
           return response.json();
       })
       .then(data => {
           console.log('Data:', data);
       })
       .catch(error => {
           console.error('Error:', error);
       });


       //CODEWARS

//1.  INVERT VALUES
/////return array.map( x => x === 0 ? x : -x);




//2. MULTIPLY THE NUMBER
//function multiply(number){
 //   if(number.toString().charAt(0)==='-')
 // return (Math.pow(5,(number.toString().length)-1)*number);
 // else
 // return (Math.pow(5,(number.toString().length))*number);
 // }