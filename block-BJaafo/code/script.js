function fullName(firstName = "", lastName = "") {
  return firstName + " " + lastName;
}

let userName = fullName("Arya", "Stark");

let expectedResult = "Arya";
  if (userName !== expectedResult) {
    throw new Error(`${userName} is not equal to ${expectedResult}`)
};

  let expectedResult = "Arya Stark";
  if (userName !== expectedResult) {
    throw new Error(`${userName} is not equal to ${expectedResult}`)
};


function totalAmount(amount,taxRate) {
  return amount + (amount*taxRate/100)
}

let finalAmount = totalAmount(1200, 18);

let expectedResult = 1400;
  if (finalAmount !== expectedResult) {
    throw new Error(`${finalAmount} is not equal to ${expectedResult}`);
};
  
let expectedResult = 1416;
if (finalAmount !== expectedResult) {
    throw new Error(`${finalAmount} is not equal to ${expectedResult}`);
  };