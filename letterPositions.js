const letterPositions = function(sentence) {
  const results = {};

  // logic to update results here

  //need a for loop to loop through the data and identify the letters and their index

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];

    // we do not want to count spaces
    if (letter !== ' ') {
      if (!results[letter]) {

        //return not a letter
        results[letter] = [];
      }
      //push results into new array for letter, with the index
      results[letter].push(i);
    }
 
  
  }
  //console.log results to see in terminal
  console.log(results);
  //return to use with other functions
  return results;
};



letterPositions("lighthouse in the house");