// Define arrays for eligible characters to add to password
const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const lowers = 'abcdefghijklmnopqrstuvwxyz'.split('');
const numbers = '1234567890'.split('');
const special = ' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'.split('');

// Function to prompt user for password criteria
function getCriteria() {
  // Initialize criteria array with default values
  let criteria = [0, false, false, false, false];

  let length = 0;

  // Prompt user for password length until valid input is received
  do {
    // Prompt for password length
    let input = prompt("Enter password length (8-128):");
    // Convert input to a number
    length = Number.parseInt(input);
    // Check if input is a number and within the specified range
    if (Number.isInteger(length) && length >= 8 && length <= 128) {
      // Break the loop if valid input is received
      break;
    } else {
      // Display an error message if input is invalid
      alert("Please enter a whole number between 8 and 128.");
    }
  } while (true);

  criteria[0] = length;
  
  // Prompt user for character types inclusion until at least one is selected
  criteria[0] = length;
  while (!criteria.includes(true)) {
    alert("Please include at least one criteria for your password");
    criteria[1] = confirm("Include uppercase letters?");
    criteria[2] = confirm("Include lowercase letters?");
    criteria[3] = confirm("Include numbers?");
    criteria[4] = confirm("Include special characters?");
  }


  return criteria;
}

// Functions to generate random characters
function genUpper() {
  return uppers[Math.floor(Math.random()*uppers.length)];
}

function genLower() {
  return lowers[Math.floor(Math.random()*lowers.length)];
}

function genNumber() {
  return numbers[Math.floor(Math.random()*numbers.length)];
}

function genSpecial() {
  return special[Math.floor(Math.random()*special.length)];
}

// Function to generate password based on criteria
function generatePassword() {
  const criteria = getCriteria();
  let passString = "";

  // Generate password characters based on length and selected criteria
  for (let i = 0; i < criteria[0]; i++){
    let executed = false;

    // Assign generators to functArray
    const functArray = [genUpper(), genLower(), genNumber(), genSpecial()];

    // Pick index from functArray randomly
    let randomIndex = Math.floor(Math.random() * 4);

    // Ensure at least one character type is executed if the criteria is true
    do {
      randomIndex = Math.floor(Math.random() * 4);
      if (criteria[randomIndex + 1]) {
        passString += functArray[randomIndex];
        executed = true;
      }
    } while(!executed)
  }
  console.log(passString.length);
  return passString;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
