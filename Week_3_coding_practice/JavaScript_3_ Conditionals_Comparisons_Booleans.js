// Activity: Movie Night Suppose 5 classmates are interested in going to see a movie together. There are some interesting dynamics between the people in this group, as described below:

// Priya will attend only if Ming goes.
// David loves popcorn and will go to the movies under any circumstance
// Alex will automatically go to the movies if David goes, and will automatically not go to the movies if David does not go
// Ming will not attend if David has already said he is attending and Ming will say yes if Priya says yes.
// Breanna loves to be around people and will only go if there are at least 2 others going
// Write a function called movieNight that takes in an array. The array must contain 3 strings, and each string must be one of the names shown above who are interested in going to the movies. And the array should include all the combinaton of three names out of five(total 10 possible array input). Write a body for the movieNight function, based on the "rules" associated with each of the names above, that returns an array of the people who will attend the movie. Your function should account for the logic necessary for all 5 people, so that no matter which names are given, the result will always be correct. (ie: Don't just code the logic for 3 of the names and pass those names in all the time.) In case there are multiple answer for a single triplet or input string display all the possible correct answer for that triplet.

// Result for different combination of input array

// Consider the starting alphabet of each name represents the name:
// (INPUT) (OUTPUT)
// ['P', 'D', 'A'] = ['D', 'A', 'B']
// ['P', 'D', 'M'] = ['D', 'A', 'B']
// ['P', 'B', 'A'] = ['P', 'M', 'B']
// ['P', 'B', 'M'] = ['P', 'M', 'B']
// ['B', 'A', 'M'] = ['P', 'M', 'B']
// ['D', 'B', 'A'] = ['D', 'A', 'B']
// ['D', 'A', 'M'] = ['D', 'A', 'B']
// ['A', 'M', 'P'] = ['P', 'M', 'B']
// ['D', 'B', 'M'] = ['D', 'A', 'B']
// ['P', 'D', 'B'] = ['D', 'A', 'B']
// // Example For example, movieNight(['Priya', 'David', 'Breanna']) should return ['David', 'Alex', 'Breanna'] because:

// Alex gets added automatically because David is going
// Priya doesn't go because Ming is not going.
// Breanna will go because there are at least 2 others going
// Things to Consider

// What information about each person will you need to turn into code? What "tools" do you have in JavaScript that can help you code that logic?
// What information do you need to store throughout your program? How will you store it? Does this information need to be updated at some point during the program, or will it remain fixed?
// This is a tricky challenge because there is a lot of logic in it, and some people's logic is tied to other people's logic. But, this challenge is not designed to trick you or to be impossibly hard. Break it down into very small pieces, and then fit those small pieces together.


function movieNight (array) {
    // declare array to be returned
    let array2=[];
    // if David is not in the array
    if(array.includes('D')==false){
      // AND Ming or Priya are 
      if (array.includes('M') || array.includes('P') ) {
          // add both ming & priya to array2
          array2.push('M','P')
      }
    // else if david IS in array  
    } else {
          // add david and alex to array2
          array2.push('D','A')
    }
    // if there are 2 elements in return array
    if(array2.length>=2){
        // add breanna to return array
        array2.push('B')
    }
      return array2;
    }

    a = ['P', 'D', 'B'];
    console.log(movieNight(a));
