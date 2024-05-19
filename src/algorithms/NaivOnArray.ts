const NaivOnArray = (m1: number[][], m2: number[][]) => {
  console.time("NaivOnArray");
  let result: number[][] = [];
  for (let i = 0; i < m1.length; i++) {
    result[i] = [];
    for (let j = 0; j < m2[0].length; j++) {
      result[i][j] = 0;
      for (let k = 0; k < m1[0].length; k++) {
        result[i][j] += m1[i][k] * m2[k][j];
      }
    }
  }
  console.timeEnd("NaivOnArray");
  return result;
};

export default NaivOnArray;
