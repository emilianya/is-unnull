const isNull = require('is-null');

module.exports = function isUnnull(i) {
  return !isNull(i)
};