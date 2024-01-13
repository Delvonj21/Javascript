//Strings To Do 1

/* Remove Blanks
Create a function that, given a string, returns all of that string’s contents, but without blanks. 

If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".
*/

function removeBlanks(inputString) 
{
  let resultString = '';

  for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] !== ' ' && inputString[i] !== '\t' && inputString[i] !== '\n') {
          resultString += inputString[i];
      }
  }

  return resultString;
}



/* Get Digits
Create a JavaScript function that given a string, returns the integer made from the string’s digits. 
Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.
*/

function get_digits(inputString) 
{
  let result = 0;

  for (let i = 0; i < inputString.length; i++) 
  {
      const digit = parseInt(inputString[i]);

      if (!isNaN(digit)) {
          result = result * 10 + digit;
      }
  }

  return result;
}



/* Acronyms
Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 

Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 

Given "Live from New York, it's Saturday Night!", return "LFNYISN".
*/

function Acronyms(inputString) 
{
  const words = inputString.split(/\s+/); // Split the string into words
  let acronym = '';

  for (let i = 0; i < words.length; i++) 
  {
      if (words[i].length > 0) 
      {
          acronym += words[i][0].toUpperCase(); // Append the first letter, capitalized
      }
  }

  return acronym;
}



/* Zip Arrays into Dictionary
Dictionaries are sometimes called maps because a key (string) maps to a value. 
Given two arrays, create an associative array (map) containing keys of the first, and values of the second. 
For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], return {"abc": 42, 3: "wassup", "yo": true}.
*/

function associativeArray(keys, values) 
{
  const result = {};

  for (let i = 0; i < keys.length; i++) 
  {
      result[keys[i]] = values[i];
  }

  return result;
}

/* Invert Hash
Dictionaries are also called hashes (we’ll learn why later). Build invertHash(assocArr) to convert hash keys to values, and values to keys. 

Example: given {"name": "Zaphod", "charm": "high", "morals": "dicey"}, return object {"Zaphod": "name", "high":"charm", "dicey": "morals"}.
*/

function invertHash(assocArr) 
{
  let invertedArr = {};

  for (let key in assocArr) 
  {
    if (assocArr.hasOwnProperty(key)) 
    {
      invertedArr[assocArr[key]] = key;
    }
  }

  return invertedArr;
}


