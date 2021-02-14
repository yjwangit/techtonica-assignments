// [Challenge 1] - Convert Inches to Meters
// Define a function called metersToInches that takes an input of the number of meters and outputs the result of the number of inches.
function metersToInches(num){
    return num * 39.3701
}
console.log (metersToInches(15.6));


// [Challenge 2] - Loop n Times
// Write a function named loopThrough that takes an argument that is a number and loops through and displays a message “Hello World” that number of times.
function loopThrough(num){
   for(let i=1; i<=num; i++)
    console.log ("Hello World");


// [Challenge 3] - Number sum
// Define a function called calculateSum to calculate the sum all the digits from 0 to an input number.
function calculateSum(num){
   let sum = 0;
   for(let i=0; i<=num; i++){
      sum = sum + i;
   }
   return sum;
}
console.log(calculateSum(0));


// [Challenge 4] - FizzBuzz
// Write a function called fizzbuzz that prints each number from 1 to the input on a new line.
// For each multiple of 3, print "Fizz" instead of the number.
// For each multiple of 5, print "Buzz" instead of the number.
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
function fizzbuzz(num){
    for(let i=1; i<=num; i++){
        if(i % 15 === 0){
            console.log("FizzBuzz");
        } else if(i % 3 === 0) {
            console.log("Fizz");
        } else if(i % 5 === 0){
            console.log("Buzz");
        } else {
            console.log(i);
        } 
    }
}
console.log (fizzbuzz(15));


// [Challenge 5] Calculate Factorial Number
// A factorial number is the concept in math by value of multiplying numbers by each consecutively smaller number.
// For example, the value of 3 factorial, is 6, which can be calculated by:
function facNum(num){
    let mFac = 1;
    for(let i=1; i<=num; i++){
        mFac = mFac * i ;
    }
    return mFac; //return factorial(num - 1) * num;
}
console.log (facNum(1));


// [Challenge 6] Switch Statements
// Using a switch statement, write a function called sleep_in(weekday, vacation) with these criteria: The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.

function sleep_in(weekday, vacation){
    switch (weekday && vacation){
        case (true && true):
            return true;
            break;
        case (true && false):
            return false;
            break;
        case (false && true):
            return true;
            break;
        case (false && false):
            return true;
            break;  
    } 
}
console.log(sleep_in(false, false))// true
console.log(sleep_in(true, false))// false


// [Challenge 7] Accessing Arrays
// Write a function called common(a, b) with these criteria: Given 2 arrays of ints, a and b, return True if they have the same first element or they have the same last element. Both arrays will be length 1 or more.
function common(a, b){
  return (a[0] === b[0] || a[a.length-1] === b[b.length-1]);
}
console.log(common([1, 2, 3], [1, 3, 2]));


// [Challenge 8] Object Keys and Values
// Create an object with two key-value pairs.
let obj = {
    name: "John",
    age: 18
}

// Log that object to the console.
console.log(obj);

// Delete the first key-value pair in the object.
delete obj.name;

// Log that object to the console again. The first key-value pair should be gone.
console.log(obj);


// [Challenge 9] Mutating Objects
// Create an array of objects with at least 2 key value pairs. The objects should all have the same keys, and the array should contain at least 3 objects.
let arr = [{city: "Milwaukee", location: "Midwest"},
           {city: "NYC", location: "East Coast"},
           {city: "Los Angeles", location: "West Coast"}
          ]

// Create a function that accepts the array of objects as an argument.
//Print the value of the second key in each object to the console. Use dot-notation to access the values.
function cityName (val){
    for(let i=0; i<val.length; i++){
    console.log (val[i].location);
    }
}
cityName(arr);
// After printing the values in step 3, change the values of the second key in every object to something new.
// Prove the change worked by printing the second key in each object to the console, which should show the new value. Use bracket-notation to access the values this time.
let place = ["Wisconsin", "New York", "California"];
let result = arr.map(newVal => {return {location.place}})
console.log (result);



// [Challenge 10] Determine Runtime Complexity
// At the top your document for each challenge, state the runtime complexity for that function.

// Check for Understanding
// Demonstrate how to create a function in JavaScript.

// Create 3 examples using Math().

// How does a function return output?

// Demonstrate how to write a loop.

// Create an example object.



//1.Find the longest word in a given sentence
function str(word){
  let arr = word.split(" ");
  let longword = "";
  for(let i=0; i<arr.length; i++){
      if(longword.length < arr[i].length){
          longword = arr[i];
      }
  }
        return longword;
}

console.log(str("What is your favorite travel spot"));



//2.Given a number as input, return the sum of all numbers from 1 to that given number
function calculateSum(num){
    let sum = 0;
    for(let i=1; i<=num; i++){
       sum = sum + i;
    }
    return sum;
 }
 console.log(calculateSum(10));

// 3.Given a sentence (as a string), reverse the order of all the words. (return as new string)
// ie "I like cake" --> "cake like I"
function str(words){
  let arr = words.split(" ");
  return arr.reverse().join(" ");
}



// bonus question. I have the following HTML: 
// <div class=“left”>box 1</div>
//<div class=“right”>box 2</div> and the following CSS: .left {float: left} .right {float: right}. What would you expect to see?
//Answer: Left box on the left, right box on the right.



function mincal(){
    let midnight = new Date("00:00:00 2021-02-05");
    let timenow = new Date();
    let timediff = timenow.getTime()-midnight.getTime();
    let mindiff = parseInt(timediff/1000/60);
    return mindiff;
  }

  console.log(mincal())