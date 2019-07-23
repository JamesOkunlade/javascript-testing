const reverseString = require('./reverseString');


const str = "cook"

test('reverses the order of arrangement of the characters of a string', () => {
  expect(reverseString(str)).toBe("kooc");
});
