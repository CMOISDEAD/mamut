const getLong = (a: number[][]): number => {
  return Math.floor(a.length / 2);
};

export const SeqBlock3III = (a: number[][], b: number[][]): number[][] => {
  const n = getLong(a);
  const result = new Array(a.length)
    .fill(0)
    .map(() => new Array(a.length).fill(0));

  for (let i1 = 0; i1 < a.length; i1 += n) {
    for (let j1 = 0; j1 < a.length; j1 += n) {
      for (let k1 = 0; k1 < a.length; k1 += n) {
        for (let i = i1; i < i1 + n && i < a.length; i++) {
          for (let j = j1; j < j1 + n && j < a.length; j++) {
            for (let k = k1; k < k1 + n && k < a.length; k++) {
              result[i][j] += a[i][k] * b[k][j];
            }
          }
        }
      }
    }
  }

  return result;
};

export const SeqBlock3IV = (a: number[][], b: number[][]): number[][] => {
  const n = getLong(a);
  const result = new Array(a.length)
    .fill(0)
    .map(() => new Array(a.length).fill(0));

  for (let i1 = 0; i1 < a.length; i1 += n) {
    for (let j1 = 0; j1 < a.length; j1 += n) {
      for (let k1 = 0; k1 < a.length; k1 += n) {
        for (let i = i1; i < Math.min(i1 + n, a.length); i++) {
          for (let j = j1; j < Math.min(j1 + n, a.length); j++) {
            for (let k = k1; k < Math.min(k1 + n, a.length); k++) {
              if (!result[i]) {
                result[i] = [];
              }
              result[i][k] = (result[i][k] || 0) + a[i][j] * b[j][k];
            }
          }
        }
      }
    }
  }

  return result;
};

export const SeqBlock3V = (a: number[][], b: number[][]): number[][] => {
  const n = getLong(a);
  const result = new Array(a.length)
    .fill(0)
    .map(() => new Array(a.length).fill(0));

  for (let i1 = 0; i1 < a.length; i1 += n) {
    for (let j1 = 0; j1 < a.length; j1 += n) {
      for (let k1 = 0; k1 < a.length; k1 += n) {
        for (let i = i1; i < Math.min(i1 + n, a.length); i++) {
          for (let j = j1; j < Math.min(j1 + n, a.length); j++) {
            for (let k = k1; k < Math.min(k1 + n, a.length); k++) {
              result[k][i] += a[k][j] * b[j][i];
            }
          }
        }
      }
    }
  }

  return result;
};
