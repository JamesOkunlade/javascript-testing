const capitalize = require('./capitalize');
const str = "cook"
test('capitalizes the first character of a string', () => {
  expect(capitalize(str)).toBe("Cook");
});
