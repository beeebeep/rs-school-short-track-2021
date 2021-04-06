/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function markAround(res, origin) {
  const pos = { X: origin.X, Y: origin.Y };
  pos.X--;
  pos.Y--;
  for (let step = 0; step < 8; step++) {
    if (pos.X >= 0 && pos.X < res[0].length && pos.Y >= 0 && pos.Y < res.length) {
      res[pos.Y][pos.X] += 1;
    }
    let deltaX;
    let deltaY;
    switch (step) {
      case 0: case 1: deltaX = 1; deltaY = 0; break;
      case 2: case 3: deltaX = 0; deltaY = 1; break;
      case 4: case 5: deltaX = -1; deltaY = 0; break;
      case 6: case 7: deltaX = 0; deltaY = -1; break;
      default: break;
    }

    pos.X += deltaX;
    pos.Y += deltaY;
  }
}

function minesweeper(matrix) {
  const res = [...Array(matrix.length)].map(() => Array(matrix[0].length).fill(0));

  matrix.forEach((arr, y) => arr.forEach((v, x) => {
    if (matrix[y][x]) markAround(res, { X: x, Y: y });
  }));
  return res;
}

module.exports = minesweeper;
