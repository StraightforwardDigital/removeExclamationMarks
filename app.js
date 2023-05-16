function removeExclamationMarks(s) {
  //create a variable that the new string will be stored in
  let result = '';
  //setup the for loop to go through each of the characters in a string
  for (let i = 0; i < s.length; i++) {
    //check to see if the current character is not an '!'
    if (s[i] !== '!') {
      //if it is not, add the character to the new string result
      result += s[i];
        }
  }
  //return the new string without any exlamation marks
  return result;
}