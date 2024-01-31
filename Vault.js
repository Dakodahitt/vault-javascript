// alert message form vault
//alert('You have received this message because you have been chosen to open an important vault. Here is the secret combination')

// after click send alert
function sendAlert1() {
  alert("You got the frist code!");
  console.log("First code");
  // add 3 and 7 for code
  var code1 = 3 + 7;
  // log code
  console.log(code1);
  // button for frist number to apper
  const name = document.querySelector(".code1");
  const btn = document.querySelector("button");
  //change's color of code1 to gold
  name.style.color = "gold";
}

// after click send alert
function sendAlert2() {
  alert("You got the second code!");
  console.log("Second code");
  // times 20 and 2 for code
  var code2 = 20 * 2;
  // log code
  console.log(code2);
  // button for frist number to apper
  const name = document.querySelector(".code2");
  const btn = document.querySelector("button");
  //change's color of code2 to silver
  name.style.color = "silver";
}

//after click send alert
