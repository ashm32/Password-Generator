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
  var passLength=0; 
  var lowercase= "";
  var uppercase= "";
  var numeric= "";
  var specialChar= "";
  let generatedPass = [];

//this function is used later to randomly shuffle the values in the generatedPass array
  function shuffle(generatedPass) {
    let currentIndex = generatedPass.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [generatedPass[currentIndex], generatedPass[randomIndex]] = [
        generatedPass[randomIndex], generatedPass[currentIndex]];
    }
    return generatedPass;
  }

// Function to prompt user for password options
function getPasswordOptions() {
  //validate user input to check they've entered a length which is 7<passLength<129
  var passLength = prompt("Enter required password length, must be between 8-128"); 
   while (passLength < 8 || passLength > 128){
    alert("Password length must be between 8-128 characters");
    passLength = 0;
    passLength = prompt("Enter required password length, must be between 8-128"); 
   }

var lowercase = confirm("Would you like to incorporate lowercase values?"); 
var uppercase = confirm("Would you like to incorporate uppercase values?"); 
var numeric = confirm("Would you like to incorporate numeric values?"); 
var specialChar = confirm("Would you like to incorporate special characters ($@%&*, etc)?"); 

  console.log("Password Length: " + passLength);
  console.log("Include lowercase? " + lowercase);
  console.log("Include uppercase? " + uppercase);
  console.log("Include numbers? " + numeric);
  console.log("Include special char? " + specialChar);

//Function for getting a random element from an array
function getRandom(arr) {
  // i is the number of values generated for the password
 for (let i=0; i<passLength;){
  if (lowercase== true && i<passLength){
    var randomLower = lowerCasedCharacters[Math.floor(Math.random()*lowerCasedCharacters.length)];;
console.log("The random lower case letter generated is: " + randomLower);
  generatedPass.push(randomLower);
  console.log("There are " + generatedPass.length + "values in the password currently");
  i++;
  }
   
  if (uppercase== true && i<passLength){
    var randomUpper = upperCasedCharacters[Math.floor(Math.random()*upperCasedCharacters.length)];;
  console.log("The random upper case letter generated is: " + randomUpper);
  generatedPass.push(randomUpper);
  console.log("There are " + generatedPass.length + "values in the password currently");
  i++;
  }

  if (numeric== true && i<passLength){
    var randomNumeric = numericCharacters[Math.floor(Math.random()*numericCharacters.length)];;
 console.log("The random number generated is: " + randomNumeric);
  generatedPass.push(randomNumeric);
  console.log("There are " + generatedPass.length + "values in the password currently");
  i++;
  }
   
  if (specialChar== true && i<passLength){
    var randomSpecialChar = specialCharacters[Math.floor(Math.random()*specialCharacters.length)];;
  console.log("The random special character generated is: " + randomSpecialChar);
  generatedPass.push(randomSpecialChar);
  console.log("There are " + generatedPass.length + "values in the password currently");
  i++;
  }
  if (i==passLength){
    //check if the password has shuffled
    console.log("Your final password is: " + shuffle(generatedPass.join("")));
    console.log("Current password length is: " + i);
  }
}
}
getRandom();
}
// Function to generate password with user input
function generatePassword() {
// display the password by calling getRandom()
return (shuffle(generatedPass.join("")))

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
