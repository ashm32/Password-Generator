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
   //+ validate user input to check they've entered in the correct format

  console.log("Password Length: " + passLength);
  console.log("Include lowercase? " + lowercase);
  console.log("Include uppercase? " + uppercase);
  console.log("Include numbers? " + numeric);
  console.log("Include special char? " + specialChar);

//function can only return one value, so an array has been used to store all random values to be called collectively
//get a random value and store it in generatedPass array
  allRandom = [];
  lowercaseRandom = lowerCasedCharacters[Math.floor(Math.random()*lowerCasedCharacters.length)];
  upercaseRandom = upperCasedCharacters[Math.floor(Math.random()*upperCasedCharacters.length)];
  numericRandom = numericCharacters[Math.floor(Math.random()*numericCharacters.length)];
  specialCharRandom = specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
  allRandom.push(lowercaseRandom, upercaseRandom, numericRandom, specialCharRandom);
  //console.log(allRandom);

   // right now function hasn't been called, use to display final randomly generated password array
   //Function for getting a random element from an array
function getRandom(arr) {
  return (allRandom); 
 }
  
 for (let i=0; i<passLength;){

  if (lowercase=="yes"){
    var randomLower = lowercaseRandom;
console.log(randomLower);
  generatedPass.push(randomLower);
  console.log(generatedPass.length);
  i++;
  }
   
  if (uppercase=="yes"){
    var randomUpper = upercaseRandom;
  console.log(randomUpper);
  generatedPass.push(randomUpper);
  console.log(generatedPass.length);
  i++;
  }

  if (numeric=="yes"){
    var randomNumeric = numericRandom;
 console.log(randomNumeric);
  generatedPass.push(randomNumeric);
  console.log(generatedPass.length);
  i++;
  }
   
  if (specialChar=="yes"){
    var randomSpecialChar = specialCharRandom;
  console.log(randomSpecialChar);
  generatedPass.push(randomSpecialChar);
  console.log(generatedPass.length);
  i++;
  }
  console.log(i);
}
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
