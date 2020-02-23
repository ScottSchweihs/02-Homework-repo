// Assignment Code
var generateBtn = document.querySelector("#generate");

const alphabetLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const alphabetUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const alphabetNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const alphabetSpecial = ["@", "#", "$", "%"];

const alphabet2 = [alphabetLowercase, alphabetUppercase, alphabetNum, alphabetSpecial];

// var password = "";

function generatePassword () {
  var passwordLength = prompt ("Password length?", "at least 8 characters and no more than 128 characters");
  var characterLowercase = confirm ("Lowercase letters?");
  var characterUppercase = confirm ("Uppercase letters?");
  var characterNumeric = confirm ("Numbers?");
  var characterSpecialcharacters = confirm ("Special characters?");
  var password = "";
    
  for (var i = 0; i < passwordLength;) {
    var randArrayNum = Math.floor (Math.random () * alphabet2.length);
    var randArray = alphabet2[randArrayNum];

    if (randArrayNum === 0) {
      if (characterLowercase) {
        var randChar = randArray[Math.floor (Math.random () * randArray.length)];
        password = password + randChar;
        i++
      }
      else {
        alert ("Select characters");
        i = passwordLength;
        writePassword ();
      }
    }
    else if (randArrayNum === 1) {
      if (characterUppercase) {
        var randChar = randArray[Math.floor (Math.random () * randArray.length)];
        password = password + randChar;
        i++
      }
      else {
        alert ("Select characters");
        i = passwordLength;
        writePassword ();
      }
    }
    else if (randArrayNum === 2) {
      if (characterNumeric) {
        var randChar = randArray[Math.floor (Math.random () * randArray.length)];
        password = password + randChar;
        i++
      }
      else {
        alert ("Select characters");
        i = passwordLength;
        writePassword ();
      }
    }
    else if (randArrayNum === 3) {
      if (characterSpecialcharacters) {
        var randChar = randArray[Math.floor (Math.random () * randArray.length)];
        password = password + randChar;
        i++
      }
      else {
        alert ("Select characters");
        i = passwordLength;
        writePassword ();
      }
    }
  } 
  return password;
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);