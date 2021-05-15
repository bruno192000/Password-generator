//GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// Assignment Code

//characters for password

var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y",'Z']
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var simbols =["@","#","$","%","&","(",")","=","+","{","}","!"]

//input variables


var simbolsC;
var numberC;
var lowercaseC;
var uppercaseC;;
var LoC; //length of characters

var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var LoC = window.prompt("Add number of characters") ;
  
  //if no number added then//
  if (!LoC) {
    window.alert("please add the required information");
  }
  
  //limit of characters 8-128//
  else if (LoC <8 || LoC >128){
    LoC = window.alert("the limit is between 8 and 128");
  }
  else{
    lowercaseC = window.confirm("Add numbers?");
    uppercaseC = window.confirm("Add special characters?")
    simbolsC = window.confirm("Add lowercase characters?");
    numberC = window.confirm("Add uppercase character?");
  }
  var passwordcharacters = [];
//if not confirmed any option//
  if (!numberC && !uppercaseC && !lowercaseC && !simbolsC) {
    userchoices = window.alert("please add the required information");}
//if all options are confirmed
    else if (numberC && uppercaseC && lowercaseC&& simbolsC) {

      passwordcharacters =  numbers.concat(uppercase,lowercase,simbols);
   }
// if 3 options are confirmed
    else if (numberC && uppercaseC && lowercaseC){
      passwordcharacters = numbers.concat(uppercase,lowercase);
    }
    else if (numberC && uppercaseC && simbolsC){
      passwordcharacters = numbers.concat(uppercase,simbols);
    }
    else if (numberC && lowercaseC && simbolsC) {
      passwordcharacters = numbers.concat(lowercase,simbols);
    }
    else if (uppercaseC && lowercaseC && simbolsC){
      upasswordcharacters = uppercase.concat(lowercase,simbols);
    }
  // if 2 options are confirmed 

    else if (numberC &&uppercaseC){
      passwordcharacters = numbers.concat(uppercase);
    }
    else if (numberC && lowercaseC){
      passwordcharacters = numbers.concat(lowercase);
    }
    else if (numberC && simbolsC){
      passwordcharacters = numbers.concat(simbolsC);
    }
    else if (simbolsC && lowercaseC){
      passwordcharacters =  simbols.concat(lowercase);
    }
    else if (simbolsC && uppercaseC){
      passwordcharacters = simbols.concat(uppercase);
    }
    else if (lowercaseC && uppercaseC){
      passwordcharacters  = lowercase.concat(uppercase);
    }
// if 1 option is confirmed
    else if (numberC) {
      passwordcharacters = numbers;
}
    else if (simbolsC){
      passwordcharacters = simbols;
    }
    else if (lowercaseC){
      passwordcharacters = lowercase;
    }
    else if (uppercaseC){
      passwordcharacters = uppercase;
    }


  for (var i = 0; i < LoC; i++){
    var randompassword = passwordcharacters  [Math.floor(Math.random()*passwordcharacters.length)];
    window.alert(randompassword)
  }
  
    var password = generatepassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);