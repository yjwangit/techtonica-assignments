//Activity 1 - Vacation Time!
// Write a function called printVacations whose input is an array of arrays. Each sub-array should have two strings as elements: The 0th element should be a person's name and the 1st element should be that person's most desired vacation destination. Include a minimum of 3 sub-arrays in your input array, like so:

// [ ['Tammy', 'Tahiti'], ['Erin', 'Banff, Alberta, Canada'], ['Janet', 'London'] ]

// Your function should print each person's name and desired destination in a complete sentence, like this:

// Tammy really wants to go to Tahiti.
// Erin really wants to go to Banff, Alberta, Canada.
// Janet really wants to go to London.

function printVacations(arr){
    for(let i=0;i<arr.length;i++){
        console.log (arr[i][0] + " really wants to go to " + arr[i][1] + ".");
    }
}

// Activity 2 - Vacation Choices

// Follow the prompt for Activity #1, but use this format for the input array instead:

// [ ['Tammy', ['Tahiti', 'Bali', 'Hawaii']], ['Erin', ['Banff, Alberta, Canada', 'Iceland']], ['Janet', ['London', 'Hogwarts']] ]

// The output should look similar to this:

// Tammy is willing to go to Tahiti, Bali or Hawaii.
// Erin is willing to go to Banff, Alberta, Canada or Iceland.
// Janet is willing to go to London or Hogwarts.

function vacations(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            arr[i][0] + " is willing to go to " + arr[i][1][j]
        }
    }
}


//Other's solutions: 
// Activity 1
function printVacations1(peopleArr){
    for(let people of peopleArr){
  
      console.log(people[0] + " really wants to go to " + people[1] + ".");
    }
  }
  
  console.log("\nActivity 1\n---");
  printVacations1([ ['Tammy', 'Tahiti'], ['Erin', 'Banff, Alberta, Canada'], ['Janet', 'London'] ]);
  
  
  
  
  console.log("\nActivity 2\n---");
  // Activity 2
  function printVacations2(peopleArr){
    for(let people of peopleArr){
      console.log(`${people[0]} is willing to go to ${people[1].join(', ')}.`);
    }
  }
  
  printVacations2([ ['Tammy', ['Tahiti', 'Bali', 'Hawaii']], ['Erin', ['Banff, Alberta, Canada', 'Iceland']], ['Janet', ['London', 'Hogwarts']] ]);

  
  //console.log("\nChallenge\n---");

// Challenge
// For this, multiplying num by 1 through 12
// assuming num is always some number
function multiplication(num){
  let table = `Times table of ${num}\n`;
  for (let i = 1; i <= 12; i++){
    table += `${num} x ${i} = ${num*i}\n`
  }
  console.log(table);
}

multiplication(4);



// Task

// Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, , consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:

// First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
// Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .
// Input Format

// Locked stub code in the editor reads string  from stdin and passes it to the function.

// Output Format

// First, print each vowel in  on a new line (in the same order as they appeared in ). Second, print each consonant (i.e., non-vowel) in  on a new line (in the same order as they appeared in ).

// Sample Input 0

// javascriptloops


// function vowelsAndConsonants(s) {
//     for(var i=0; i<s.length; i++){
//         if (s[i].includes(“a”,“e”,“i”,“o”,“u”)){
//             console.log(s[i]);
//         }
//     }
//       console.log(s[i]);
// }

vowelsAndConsonants("javascriptloops")

function vowelsAndConsonants(s) {
    let cons=[];
    
    for(var i=0; i<s.length; i++){
        if (s[i]==="a"||s[i]==="e"||s[i]==="i"||s[i]==="o"||s[i]==="u"){
            console.log(s[i]);
        } else {
            cons.push(s[i]);
        }
       
    }
    // print consnt
    for(var i=0;i<cons.length;i++){
        console.log(cons[i]);
    }
    
    
}