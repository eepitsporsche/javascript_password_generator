//Function to generate a random password
function generatePassword() {

  //Character type array for computer to choose from (lowercase, uppercase, numeric, special characters)
    var numericCharacters = "0123456789";
    var specialCharacters = "!'()%*+,-.&/:;<=>?@[]^$_`{|#}~";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordCharacters = "";
    var newPassword = "";
  
  
  //User inputs desired password length
    var userInput = prompt("Enter a password length from 8 to 128.")
  
  
  //If user input is not a number 8-128
    if (isNaN(userInput) || userInput < 8 || userInput > 128){
      alert("Please choose a number from 8 to 128.");
      return
    }

    }
  
  
// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password)
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);