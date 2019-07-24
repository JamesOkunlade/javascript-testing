const analyze = require('./analyze');

const arr = [2,5,6,9,3];
const arr2 = [1,8,3,4,2,6];


test('analyzes an array and returns an object', () => {
  expect(analyze(arr)).toStrictEqual(
    object = {
      average: 5,
      min: 2,
      max: 9,
      length: 5
    }
  )
})

test('analyzes an array and returns an object', () => {
  expect(analyze(arr2)).toStrictEqual(
    object = {
      average: 4,
      min: 1,
      max: 8,
      length: 6
    }
  )
})
