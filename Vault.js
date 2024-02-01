// alert message form vault
// console log 
alert('You have received this message because you have been chosen to open an important vault. Here is the secret combination')
console,log{"You have received this message because you have been chosen to open an important vault. Here is the secret combination"}

// after click send alert
// add 3 and 7 for code
// log code1
// button for frist number to apper
//change's color of code1 to gold
function sendAlert1() {
  alert("You got the frist code!");
  console.log("First code");
  var code1 = 3 + 7;
  console.log(code1);
  const name = document.querySelector(".code1");
  const btn = document.querySelector("button");
  name.style.color = "gold";
}

// after click send alert
// times 20 and 2 for code
// log code2
// button for second number to apper
//change's color of code2 to silver
function sendAlert2() {
  alert("You got the second code!");
  console.log("Second code");
  var code2 = 20 * 2;
  console.log(code2);
  const name = document.querySelector(".code2");
  const btn = document.querySelector("button");
  name.style.color = "silver";
}

//after click send alert
// divide 80 by 2.051
// log code3
// button for third number to apper
//change's color of code3 to black
// alert you have the code's
function sendAlert3() {
  alert("You got the third code!");
  console.log("Third code");
  var code3 = Math.floor (80/2.051);
  console.log(code3);
  const name = document.querySelector(".code3");
  const btn = document.querySelector("button");
  name.style.color = "black";
  alert("You got all the codes for the vault. The code it 10-40-39")
  
}