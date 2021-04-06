/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sum = 0;
  const m1 = [...s1].reduce((m, v) => m.set(v, (m.get(v) || 0) + 1), new Map());
  const m2 = [...s2].reduce((m, v) => m.set(v, (m.get(v) || 0) + 1), new Map());
  const entries = new Set([...m1.keys(), ...m2.keys()]);
  entries.forEach((k) => { sum += (Math.min(m1.get(k), m2.get(k))) || 0; });
  return sum;
}

module.exports = getCommonCharacterCount;
