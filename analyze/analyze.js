function analyze(arr) {
  const object = {}

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  object.average = arr.reduce(reducer) / arr.length;

  object.min = Math.min(...arr);


  object.max = Math.max(...arr);


  object.length = arr.length;


  return object;
}


module.exports = analyze;
