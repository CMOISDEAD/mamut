const WinogradOriginal = (A: number[][], B: number[][]) => {
  console.time("WinogradOriginal");
  let N = A.length;
  let M = A[0].length;
  let P = B.length;
  let result = new Array(N).fill(0).map(() => new Array(P).fill(0));
  let aux = 0;

  let upsilon = P % 2;
  let gamma = P - upsilon;

  let y = new Array(gamma).fill(0);
  let z = new Array(N).fill(0);

  for (let i = 0; i < M; i++) {
    aux = 0.0;
    for (let j = 0; j < gamma; j += 2) {
      aux += A[i][j] * A[i][j + 1];
    }
    y[i] = aux;
  }

  for (let i = 0; i < N; i++) {
    aux = 0.0;
    for (let j = 0; j < gamma; j += 2) {
      aux += B[j][i] * B[j + 1][i];
    }
    z[i] = aux;
  }

  if (upsilon == 1) {
    /*
     * P is odd
     * The value A[i][P]*B[P][k] is missing in all auxiliary sums.
     */
    const PP = P - 1;
    for (let i = 0; i < M; i++) {
      for (let k = 0; k < N; k++) {
        aux = 0.0;
        for (let j = 0; j < gamma; j += 2) {
          aux += (A[i][j] + B[j + 1][k]) * (A[i][j + 1] + B[j][k]);
        }
        result[i][k] = aux - y[i] - z[k] + A[i][PP] * B[PP][k];
      }
    }
  } else {
    /*
     * P is even
     * The result can be computed with the auxiliary sums.
     */
    for (let i = 0; i < M; i++) {
      for (let k = 0; k < N; k++) {
        aux = 0.0;
        for (let j = 0; j < gamma; j += 2) {
          aux += (A[i][j] + B[j + 1][k]) * (A[i][j + 1] + B[j][k]);
        }
        result[i][k] = aux - y[i] - z[k];
      }
    }
  }

  console.timeEnd("WinogradOriginal");
  return result;
};

export default WinogradOriginal;
