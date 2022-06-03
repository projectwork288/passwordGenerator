var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var specialChar = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '=', '_', '<', '>', '?']

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
    // to ask the user 
    // prompt will return string datatype.
    // convert string into number datatype. - parseInt
    let length = parseInt(prompt("Please enter how many characters you want include in your Password. (8 to 128)"));

    console.log(length + " here's the test"); // debug

    // check if length is number or not.
    if(Number.isNaN(length)){
        alert("You must provide a number between 8 and 128!");
        return null;
    }

    if(length < 8 || length > 128) {
        alert("The number must be between 8 and 128.");
        return null;
    }

    let confirmedUpperCase = confirm("Do you want to include Uppercase characters?")
    let confirmedLowerCase = confirm("Do you want to include Lowercase characters?")
    let confirmedSpecial = confirm("Do you want to include Special characters?")
    let confirmedNumeric = confirm("Do you want to include Numeric characters?")

    // force the user to select at least one of the characters.
    if(!confirmedUpperCase && !confirmedLowerCase && !confirmedSpecial && !confirmedNumeric){
        alert("You must select at least one of the following character types: Uppercase, Lowercase, Special or Numeric.");
        return null;
    }

    // Gathering all characters that we need into the variable. -> ["1", "2", "a", "b", "%"] => ["2", "b"] / ["%", "1"]
    var allChar = [];
    if(confirmedUpperCase){
        allChar = allChar.concat(upperCaseChar)
    }
    if(confirmedLowerCase){
        allChar = allChar.concat(lowerCaseChar)
    }
    if(confirmedSpecial){
        allChar = allChar.concat(specialChar)
    }
    if(confirmedNumeric){
        allChar = allChar.concat(numericChar)
    }
    console.log(allChar + " here's the concatination");
    randomArray(allChar); // randomize to mix up all the character types which is necessary to avoid loosing character types if the allChar gets poped.
    randomArray(allChar); // randomize to mix up all the character types
    randomArray(allChar); // randomize to mix up all the character types
    randomArray(allChar); // randomize to mix up all the character types
    randomArray(allChar); // randomize to mix up all the character types
    
    while(allChar.length<length){ //push items onto the array until the array length desired
        let x = Math.floor(Math.random()*9); //add numbers because they are disproportionately under represented.
        
        allChar.push(x);
    }

    while(allChar.length>length){ // pop items from the array until the array length desired
        allChar.pop();
    }
 
    randomArray(allChar); // call for randomization of the final array
   
    //console.log(allChar); // debug

    return allChar.join("");
    // randomArray(allChar); // debug
   }

// create array to collect inputs from user
   let pWord = [];    

   function randomArray(allChar) {
    for (let i = allChar.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allChar[i], allChar[j]] = [allChar[j], allChar[i]];
    }
  console.log(allChar); //debug
  }
  
   console.log(pWord);     
   
   //******************************************************************************** *//
 