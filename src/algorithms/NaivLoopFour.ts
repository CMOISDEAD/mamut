const NaivLoopUnrollingFour = (A: number[][], B: number[][]) => {
  let N = A.length;
  let M = B[0].length;
  let P = B.length;
  let result = new Array(N).fill(0).map(() => new Array(M).fill(0));
  let aux;

  if (P % 4 === 0) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        aux = 0;
        for (let k = 0; k < P; k += 4) {
          aux +=
            A[i][k] * B[k][j] +
            A[i][k + 1] * B[k + 1][j] +
            A[i][k + 2] * B[k + 2][j] +
            A[i][k + 3] * B[k + 3][j];
        }
        result[i][j] = aux;
      }
    }
  } else if (P % 4 === 1) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        aux = 0;
        for (let k = 0; k < P - 1; k += 4) {
          aux +=
            A[i][k] * B[k][j] +
            A[i][k + 1] * B[k + 1][j] +
            A[i][k + 2] * B[k + 2][j] +
            A[i][k + 3] * B[k + 3][j];
        }
        result[i][j] = aux + A[i][P - 1] * B[P - 1][j];
      }
    }
  } else if (P % 4 === 2) {
    let PP = P - 2;
    let PPP = P - 1;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        aux = 0.0;
        for (let k = 0; k < PP; k += 4) {
          aux +=
            A[i][k] * B[k][j] +
            A[i][k + 1] * B[k + 1][j] +
            A[i][k + 2] * B[k + 2][j] +
            A[i][k + 3] * B[k + 3][j];
        }
        result[i][j] = aux + A[i][PP] * B[PP][j] + A[i][PPP] * B[PPP][j];
      }
    }
  } else {
    let PP = P - 3;
    let PPP = P - 2;
    let PPPP = P - 1;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        aux = 0.0;
        for (let k = 0; k < PP; k += 4) {
          aux +=
            A[i][k] * B[k][j] +
            A[i][k + 1] * B[k + 1][j] +
            A[i][k + 2] * B[k + 2][j] +
            A[i][k + 3] * B[k + 3][j];
        }
        result[i][j] =
          aux +
          A[i][PP] * B[PP][j] +
          A[i][PPP] * B[PPP][j] +
          A[i][PPPP] * B[PPPP][j];
      }
    }
  }
  return result;
};

export default NaivLoopUnrollingFour;
