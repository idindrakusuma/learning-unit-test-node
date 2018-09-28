module.exports.add = (a, b) => a + b;
module.exports.divide = (a, b) => a / b;
module.exports.square = (a) => Math.sqrt(a);

module.exports.isEven = (val) => {
  if (val % 2 === 0) {
    return true
  }
  return false
}

/* async function */
module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 100)
}