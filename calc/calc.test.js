const calc = require('./calc');

const a = 10;
const b = 6;

// Test for Calculator add
test('adds two numbers together', () => {
  expect(calc.add(a, b)).toBe(16);
});

// Test for Calculator subtract
test('subtract from a, b', () => {
  expect(calc.subtract(a, b)).toBe(4);
});

// Test for Calculator multiply
test('multiplies a by b', () => {
  expect(calc.multiply(a, b)).toBe(60);
});


// Test for Calculator divide
test('divides a by b', () => {
  expect(calc.divide(a, b)).not.toBe(16);
});
test('divides a by b', () => {
  expect(calc.divide(60, 10)).toBe(6);
})
