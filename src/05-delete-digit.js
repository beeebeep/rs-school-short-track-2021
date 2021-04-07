/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = -Infinity;
  const str = n.toString();
  [...str].forEach((_, i) => {
    max = Math.max(max, Number(str.substring(0, i) + str.substring(i + 1)));
  });
  return max;
}

module.exports = deleteDigit;
