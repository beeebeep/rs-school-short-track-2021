/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let c = 0;
  const arrNew = arr.filter((v) => v !== -1).sort((a, b) => a - b);
  return [...new Array(arr.length)].map((v, i) => ((arr[i] === -1) ? -1 : arrNew[c++]));
}

module.exports = sortByHeight;
