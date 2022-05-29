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
    // to ask something to user 
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

    while(allChar.length<length){ 
        allChar.push("1");
    }

    while(allChar.length>length){
        allChar.pop();
    }
    console.log(allChar);
    console.log(allChar.length);
 
    randomArray(allChar); // call for randomization of the array
    console.log(allChar); // debug
    randomArray(allChar); // debug
   }
// question: there are 80 elements in the array. how to I adjust for the potential that 
// less or more than 80 characters are called for? Do I append or pop from the original 80?

// create array to collect inputs from user
   let pWord = [];    

// randomize the array   
   function randomArray(allChar) {
    for (let i = allChar.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allChar[i], allChar[j]] = [allChar[j], allChar[i]];
    }
  console.log(allChar); //debug
  }
  
  //console.log(allChar);
    //console.log(allChar.length);
   // const randString = Math.random().toString().allChar(2, length); 
   console.log(pWord);     
   
   //******************************************************************************** */
// collect input from user for 4 data types                          
   //  myNumbers();
     function myNumbers() {
        let numbers = prompt("Please enter how many characters you want in your Password.");
       // console.log(numbers);
        if (numbers != null) {document.getElementById("demo").innerHTML = numbers + " is how many numbers will be included in your Password.";
         }
         else {myNumbers()}
         
// generate a random number with the user's input                                 
        document.getElementById("demo").innerHTML =
        Math.floor(Math.random() * (10 ** numbers));

// populate the array with the random number just generated.        
        const myNumberArray = numbers.split("");
        let numberLength = myNumberArray.length;


  //      pWord.push("demo");                                
        myCapitals()                                
                            } 
// prompt the user to supply a capital letter
    function myCapitals() {
        let capitals = prompt("Please enter a single Capital letter you want in your Password.");
        if (capitals != null) {
            document.getElementById("demo1").innerHTML =
            "Capital " + capitals + " will be included in your Password.";
                                }
// force the string to uppercase
            let capitalsResult = capitals.toUpperCase();  

            document.getElementById("demo1").innerHTML =
            Math.floor(Math.random() * (10 ** numberLength));                           
            myLowers()
                            }
// prompt user to supply a lower case letter
    function myLowers() {
        let lowers = prompt("Please enter a single lower case letter to include in your Password.");
        if (lowers != null) {
            document.getElementById("demo2").innerHTML =
            "Lower case " + lowers + " will be included in your Password.";

// force the string to lowercase
            let capitalsResult = capitals.toLowerCase(); 
            mySpecials()
                            }
                        }
    function mySpecials() {
        let specials = prompt("Please enter one of the following special characters !, @, #, $, %, ^, &, *, ? to include in your Password.");
        if (specials != null) {
            document.getElementById("demo3").innerHTML =
            "Special character " + specials + " will be included in your Password.";
                                }
                            }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
