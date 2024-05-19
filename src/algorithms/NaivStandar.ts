const NaivStandar = (matrixA: number[][], matrixB: number[][]): number[][] => {
  const n = matrixA.length;
  const result = new Array(n).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        result[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }

  return result;
};

export default NaivStandar;
