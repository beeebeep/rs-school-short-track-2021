/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let fn;
  let count;
  const renamed = Array(names.length);
  names.reduce((m, name, i) => {
    fn = name;
    count = m.get(fn);
    if (count >= 0) {
      count++;
      fn += `(${count})`;
      m.set(fn, 0);
    } else {
      count = 0;
    }
    renamed[i] = fn;
    m.set(name, count);
    return m;
  }, new Map());
  return renamed;
}

module.exports = renameFiles;
