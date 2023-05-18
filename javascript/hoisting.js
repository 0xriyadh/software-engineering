/*
 * Hoisting
 * var vs let (and const)
 * function
 */

// EXAMPLE 1
console.log(university);
university = "BRAC University";
console.log(university);
var university;
/* 
    let's see what happens when we run this code
    * var is hoisted
    * so, the variable university is declared at the top of the code
    * and the value undefined is assigned to it
    * so if we run this code, undefined will be printed
    * and then the value "BRAC University" will be assigned to it
    * so "BRAC University" will be printed in the next line
    * We can visualize this process like this:
        var university;
        university = undefined
        console.log(university)
        university = "BRAC University"
        console.log(university)
*/
/* 
    instead of var, if we use let, we will get an error
    * let is hoisted, but not assigned any value
    * so, if we try to print it, we will get an error. As in js we can't access a variable without assigning a value to it. It remain in a temporal dead zone until it is assigned a value.
    * some people may think let is not hoisted, but it is. It is just not assigned any value.
    * we can visualize this process like this:
        let university;
        console.log(university)
        university = "BRAC University"
        console.log(university)
    * so we see, like var, let is hoisted, but not assigned any value such as undefined
*/

// EXAMPLE 2
var friendsFavFood = "Burger";
var myFavFood = "Pizza";

function getMyFavFood() {
    if (!myFavFood) {
        var myFavFood = friendsFavFood;
    }
    return myFavFood;
}

console.log(`I can eat ${getMyFavFood()} all day long`);

/* 
    In the above code, our expected result was "I can eat Pizza all day long", However, we got "I can eat Burger all day long". How?
    * let's visualize the process:
        var friendsFavFood = "Burger";
        var myFavFood = "Pizza";
        function getMyFavFood() {
            var myFavFood;
            myFavFood = undefined;
            if (!myFavFood) {
                myFavFood = friendsFavFood;
            }
            return myFavFood;
        }
        console.log(`I can eat ${getMyFavFood()} all day long`);
    * instead if we used let, we would have got the expected result. 
    * let's visualize the process:
        let friendsFavFood = "Burger";
        let myFavFood = "Pizza";
        function getMyFavFood() {
            if (!myFavFood) {
                let myFavFood;
                myFavFood = undefined;
                myFavFood = friendsFavFood;
            }
            return myFavFood;
        }
    * The reason to all these is let maintain block scope, whereas var maintain function scope. Var gets hoisted to the top of the function, but let gets hoisted to the top of the block.
*/

// EXAMPLE 3 (function hoisting)
myTeam();
function myTeam() {
    console.log("FC Barcelona");
}
/* 
    * The above code works fine, because function declaration gets hoisted to the top of the code
    * let's visualize the process:
*/

// EXAMPLE 4 (function hoisting)
myPlayer();
function myPlayer() { 
    player = "Lionel Messi";
    console.log(player);
}
// here as player is not declared, it will look for it in the global scope, as it is not found there, it will be declared in the global scope automatically.
myPlayer2();
function myPlayer2() {
    player = "Lionel Messi";
    var player;
    console.log(player);
}
// here as player is declared under the function, it will be hoisted to the top of the function, and the value undefined will be assigned to it. So the variable player will not try to find it in the global scope, and will not be declared in the global scope automatically.