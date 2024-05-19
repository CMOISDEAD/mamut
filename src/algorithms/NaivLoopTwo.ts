class NaivLoopUnrollingTwo {
  m1: number[][];
  m2: number[][];

  constructor(m1: number[][], m2: number[][]) {
    this.m1 = m1;
    this.m2 = m2;
  }

  multiply(): number[][] {
    console.time("NaivLoopUnrollingTwo");
    let result: number[][] = [];
    let P = this.m1.length;
    if (P % 2 === 0) {
      for (let i = 0; i < P; i++) {
        result[i] = [];
        for (let j = 0; j < P; j++) {
          result[i][j] = 0;
          for (let k = 0; k < P; k += 2) {
            result[i][j] +=
              this.m1[i][k] * this.m2[k][j] +
              this.m1[i][k + 1] * this.m2[k + 1][j];
          }
        }
      }
      console.timeEnd("NaivLoopUnrollingTwo");
      return result;
    }
    P -= 1;
    for (let i = 0; i < P; i++) {
      result[i] = [];
      for (let j = 0; j < P; j++) {
        result[i][j] = 0;
        for (let k = 0; k < P; k += 2) {
          result[i][j] +=
            this.m1[i][k] * this.m2[k][j] +
            this.m1[i][k + 1] * this.m2[k + 1][j];
        }
        result[i][j] += this.m1[i][P] * this.m2[P][j];
      }
    }
    console.timeEnd("NaivLoopUnrollingTwo");
    return result;
  }
}

export default NaivLoopUnrollingTwo;
