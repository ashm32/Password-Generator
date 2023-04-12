// Array of special characters to be included in password
var specialCharacters = [
  '@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  //create global variables for the user prompts
  const passLength=0; 
  const lowercase= "";
  const uppercase= "";
  const numeric= "";
  const specialChar= "";
  let generatedPass = [];

// Function to prompt user for password options
function getPasswordOptions() {
   const passLength = prompt("Enter required password length, must be between 8-128"); 
   const lowercase = prompt("Would you like to incorporate lowercase values? type yes or no"); 
   const uppercase = prompt("Would you like to incorporate uppercase values? type yes or no"); 
   const numeric = prompt("Would you like to incorporate numeric values? type yes or no"); 
   const specialChar = prompt("Would you like to incorporate special characters ($@%&*, etc)? type yes or no"); 
   //validate user input to check they've entered in the correct format

  console.log("Password Length: " + passLength);
  console.log("Include lowercase? " + lowercase);
  console.log("Include uppercase? " + uppercase);
  console.log("Include numbers? " + numeric);
  console.log("Include special char? " + specialChar);

//Function for getting a random element from an array
function getRandom(arr) {
  // i is the number of values generated for the password
 for (let i=0; i<passLength;){
  if (lowercase=="yes" && i<passLength){
    var randomLower = lowerCasedCharacters[Math.floor(Math.random()*lowerCasedCharacters.length)];;
console.log("The random lower case letter generated is: " + randomLower);
  generatedPass.push(randomLower);
  console.log("There are " + generatedPass.length + "values in the password currently");
  i++;
  }
   
  if (uppercase=="yes"&& i<passLength){
    var randomUpper = upperCasedCharacters[Math.floor(Math.random()*upperCasedCharacters.length)];;
  console.log("The random upper case letter generated is: " + randomUpper);
  generatedPass.push(randomUpper);
  console.log("There are " + generatedPass.length + "values in the password currently");
  i++;
  }

  if (numeric=="yes"&& i<passLength){
    var randomNumeric = numericCharacters[Math.floor(Math.random()*numericCharacters.length)];;
 console.log("The random number generated is: " + randomNumeric);
  generatedPass.push(randomNumeric);
  console.log("There are " + generatedPass.length + "values in the password currently");
  i++;
  }
   
  if (specialChar=="yes" && i<passLength){
    var randomSpecialChar = specialCharacters[Math.floor(Math.random()*specialCharacters.length)];;
  console.log("The random special character generated is: " + randomSpecialChar);
  generatedPass.push(randomSpecialChar);
  console.log("There are " + generatedPass.length + "values in the password currently");
  i++;
  }
  if (i==passLength){
    console.log("Your current password is: " + generatedPass);
    console.log("Current password length is: " + i);
  }
}
}
getRandom();
}
// Function to generate password with user input
function generatePassword() {
  // check button is being clicked
  console.log("Button clicked")
// display the password by calling getRandom()
return ("Generated password will be displayed here")

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
getPasswordOptions();
