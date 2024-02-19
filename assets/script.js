//Function to generate a random password
function generatePassword() {

  //Character type array for computer to choose from (lowercase, uppercase, numeric, special characters)
    var numericCharacters = "0123456789";
    var specialCharacters = "!'()%*+,-.&/:;<=>?@[]^$_`{|#}~";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordCharacters = "";
    var newPassword = "";

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