const getLong = (a: number[][]): number => {
  return Math.floor(a.length / 2);
};

export const parallelIII = (a: number[][], b: number[][]) => {
  const processBlock = (
    i1: number,
    j1: number,
    k1: number,
    a: number[][],
    b: number[][],
    result: number[][],
    len: number,
    n: number,
  ): Promise<void> => {
    return new Promise<void>((resolve) => {
      for (let i: number = i1; i < i1 + n && i < len; i++) {
        for (let j: number = j1; j < j1 + n && j < len; j++) {
          for (let k: number = k1; k < k1 + n && k < len; k++) {
            result[i][j] += a[i][k] * b[k][j];
          }
        }
      }
      resolve();
    });
  };
  const n = a.length;
  const result = new Array(n).fill(0).map(() => new Array(n).fill(0));

  for (let i1: number = 0; i1 < a.length; i1 += n) {
    for (let j1: number = 0; j1 < a.length; j1 += n) {
      for (let k1: number = 0; k1 < a.length; k1 += n) {
        processBlock(i1, j1, k1, a, b, result, a.length, n);
      }
    }
  }

  return result;
};

export const ParallelIV = (a: number[][], b: number[][]) => {
  const processBlock = (
    i1: number,
    j1: number,
    k1: number,
    a: number[][],
    b: number[][],
    result: number[][],
    len: number,
    n: number,
  ): Promise<void> => {
    return new Promise<void>((resolve) => {
      for (let i: number = i1; i < i1 + n && i < len; i++) {
        for (let j: number = j1; j < j1 + n && j < len; j++) {
          for (let k: number = k1; k < k1 + n && k < len; k++) {
            result[i][k] += a[i][j] * b[j][k];
          }
        }
      }
      resolve();
    });
  };

  const n: number = getLong(a);
  const result = new Array(a.length)
    .fill(0)
    .map(() => new Array(a.length).fill(0));

  for (let i1: number = 0; i1 < a.length; i1 += n) {
    for (let j1: number = 0; j1 < a.length; j1 += n) {
      for (let k1: number = 0; k1 < a.length; k1 += n) {
        processBlock(i1, j1, k1, a, b, result, a.length, n);
      }
    }
  }

  return result;
};

export const ParallelV = (a: number[][], b: number[][]) => {
  const processBlock = (
    i1: number,
    j1: number,
    k1: number,
    a: number[][],
    b: number[][],
    result: number[][],
    len: number,
    n: number,
  ): Promise<void> => {
    return new Promise<void>((resolve) => {
      for (let i: number = i1; i < i1 + n && i < len; i++) {
        for (let j: number = j1; j < j1 + n && j < len; j++) {
          for (let k: number = k1; k < k1 + n && k < len; k++) {
            result[k][i] += a[k][j] * b[j][i];
          }
        }
      }
      resolve();
    });
  };

  const n: number = getLong(a);
  const result = new Array(a.length)
    .fill(0)
    .map(() => new Array(a.length).fill(0));

  for (let i1: number = 0; i1 < a.length; i1 += n) {
    for (let j1: number = 0; j1 < a.length; j1 += n) {
      for (let k1: number = 0; k1 < a.length; k1 += n) {
        processBlock(i1, j1, k1, a, b, result, a.length, n);
      }
    }
  }

  return result;
};
