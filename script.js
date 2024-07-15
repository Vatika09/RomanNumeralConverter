const outputBtn=document.getElementById('output');
const convertBtn=document.getElementById('convert-btn');

function checkRomanNumeral() {
  const numberText = document.getElementById('number').value; 
  if (numberText === "") {
    outputBtn.textContent = "Please enter a valid number.";
    return;
  } else if (isNaN(numberText) || parseInt(numberText) < 1) {
    outputBtn.textContent = "Please enter a number greater than or equal to 1.";
    return;
  } else if (parseInt(numberText) > 3999) {
    outputBtn.textContent = "Please enter a number less than or equal to 3999.";
    return;
  }
else{
  // Valid input: Convert to Roman numeral
  const romanMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    I: 1
  };

  let result = "";
  let num = parseInt(numberText); // Ensure number is an integer

  for (const key in romanMap) {
    while (num >= romanMap[key]) {
      result += key;
      num -= romanMap[key];
    }
  }

  outputBtn.textContent = result; 
}

}
convertBtn.addEventListener("click",checkRomanNumeral)
