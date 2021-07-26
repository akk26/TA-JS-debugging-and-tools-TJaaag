function test(message, cb) {
  try {
    cb();
    console.log('right', message);
  } catch (error) {
    console.error(error);
    console.log('wrong',message)
  } 
};

function expect(actual) {
  return {
    toEqual: function (expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
    toBeEqual: function (expected) {
     if( typeof actual !== expected) {
       throw new Error(`${typeof actual} is not equal to ${expected}`);
     }
   }

  }
}


function addTwoNumbers(numA, numB) {
  return numA + numB;
}
let final, realValue
function testAdd() {
  final = addTwoNumbers(10, 20);
  realValue = 28;
  expect(final).toEqual(realValue);
}

test("add 10 + 20 to be equal 30", () => {
  expect(addTwoNumbers(10, 20)).toEqual(29);
});

test("add 10 + 20 to be equal 30", () => {
  expect(addTwoNumbers(10, 20)).toEqual(30);
});

test("add 1 + 2 to be equal 3", () => {
  expect(addTwoNumbers(1, 2)).toEqual(3);
});

test("add 10 + 2 to be equal 12", () => {
  expect(addTwoNumbers(10, 2)).toEqual(12);
});

test("add 10 + 20 to be equal 30 and it should be number", () => {
  expect(addTwoNumbers("10, 20")).toBeEqual(30);
});


function multiplyTwoNumbers(numA, numB) {
  return numA * numB;
}

test("multiply 10 * 20 to be equal 200", () => {
  expect(multiplyTwoNumbers(10, 20)).toEqual(210);
});

test("multiply 10 * 2 to be equal 20", () => {
  expect(multiplyTwoNumbers(10, 2)).toEqual(20);
});

test("multiply 20 * 2 to be equal 40 and it should be number", () => {
  expect(multiplyTwoNumbers("20, 2")).toBeEqual(40);
});
