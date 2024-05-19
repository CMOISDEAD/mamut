const NaivLoopUnrollingTwo = (A: number[][], B: number[][]): number[][] => {
  const result: number[][] = [];
  let P = A.length;
  if (P % 2 === 0) {
    for (let i = 0; i < P; i++) {
      result[i] = [];
      for (let j = 0; j < P; j++) {
        result[i][j] = 0;
        for (let k = 0; k < P; k += 2) {
          result[i][j] += A[i][k] * B[k][j] + A[i][k + 1] * B[k + 1][j];
        }
      }
    }
    return result;
  }
  P -= 1;
  for (let i = 0; i < P; i++) {
    result[i] = [];
    for (let j = 0; j < P; j++) {
      result[i][j] = 0;
      for (let k = 0; k < P; k += 2) {
        result[i][j] += A[i][k] * B[k][j] + A[i][k + 1] * B[k + 1][j];
      }
      result[i][j] += A[i][P] * B[P][j];
    }
  }
  return result;
};

export default NaivLoopUnrollingTwo;
