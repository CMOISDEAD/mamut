import WinogradOriginal from "./WinoGrad";

/**
 * @param matrix - returns the "infinity norm" of a matrix
 * @returns "infinity norm" of the matrix
 */
const normInf = (matrix: number[][]): number => {
  let max = 0;
  for (let i = 0; i < matrix.length; i++) {
    let sum = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      sum += Math.abs(matrix[i][j]);
    }
    if (sum > max) {
      max = sum;
    }
  }
  return max;
};

const scalar = (matrix: number[][], scalar: number): number[][] => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] *= scalar;
    }
  }

  return matrix;
};

const WinogradScaled = (
  matrixA: number[][],
  matrixB: number[][],
): number[][] => {
  console.time("WinogradScaled");
  const a = normInf(matrixA);
  const b = normInf(matrixB);
  const lambda = Math.floor(0.5 + Math.log(b / a / Math.log(4)));

  const newA = scalar(matrixA, Math.pow(2, lambda));
  const newB = scalar(matrixB, Math.pow(2, lambda));

  const result = WinogradOriginal(newA, newB);
  console.timeEnd("WinogradScaled");
  return result;
};

export default WinogradScaled;
