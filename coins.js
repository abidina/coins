
function coinCounter (inputAmount) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  coinPurse.quarters = Math.floor(inputAmount / 25);
  coinPurse.dimes = Math.floor(inputAmount % 25 / 10);
  coinPurse.nickels = Math.floor((inputAmount - coinPurse.quarters*25 - coinPurse.dimes*10) / 5);
  coinPurse.pennies = Math.floor((inputAmount - coinPurse.quarters*25 - coinPurse.dimes*10 - coinPurse.nickels*5) / 1);

  return coinPurse;
}


var button = document.getElementById("btn");
button.addEventListener("click", function(event) {
  var inputText = document.getElementById("inputAmount").value; 
  
var coins = coinCounter(inputText);

console.log(coins);
});