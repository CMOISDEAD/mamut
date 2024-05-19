const add = (a: number[][], b: number[][]) => {
  return a.map((x, i) => x.map((y, j) => y + b[i][j]));
};

const sub = (a: number[][], b: number[][]) => {
  return a.map((x, i) => x.map((y, j) => y - b[i][j]));
};

const split = (matrix: number[][]) => {
  console.time("Strassen");
  /*
    Splits a given matrix into quarters.
  Input: nxn matrix
  Output: tuple containing 4 n/2 x n/2 matrices corresponding to a, b, c, d
*/
  let row = matrix.length,
    col = matrix[0].length;
  let row2 = Math.floor(row / 2),
    col2 = Math.floor(col / 2);
  return [
    matrix.slice(0, row2).map((x) => x.slice(0, col2)),
    matrix.slice(0, row2).map((x) => x.slice(col2)),
    matrix.slice(row2).map((x) => x.slice(0, col2)),
    matrix.slice(row2).map((x) => x.slice(col2)),
  ];
};

const Strassen = (x: number[][], y: number[][]) => {
  /*
  Computes matrix product by divide and conquer approach, recursively.
  Input: nxn matrices x and y
  Output: nxn matrix, product of x and y
  */
  // Base case when size of matrices is 1x1
  if (x.length === 1) {
    return [[x[0][0] * y[0][0]]];
  }

  // Splitting the matrices into quadrants. This will be done recursively
  // until the base case is reached.
  let [a, b, c, d] = split(x);
  let [e, f, g, h] = split(y);

  // Computing the 7 products, recursively (p1, p2...p7)
  let p1 = Strassen(a, sub(f, h));
  let p2 = Strassen(add(a, b), h);
  let p3 = Strassen(add(c, d), e);
  let p4 = Strassen(d, sub(g, e));
  let p5 = Strassen(add(a, d), add(e, h));
  let p6 = Strassen(sub(b, d), add(g, h));
  let p7 = Strassen(sub(a, c), add(e, f));

  // Computing the values of the 4 quadrants of the final matrix c
  let c11 = add(sub(add(p5, p4), p2), p6);
  let c12 = add(p1, p2);
  let c21 = add(p3, p4);
  let c22 = sub(sub(add(p1, p5), p3), p7);

  // Combining the 4 quadrants into a single matrix by stacking horizontally and vertically.
  let top = c11.map((x, i) => x.concat(c12[i]));
  let bottom = c21.map((x, i) => x.concat(c22[i]));

  console.timeEnd("Strassen");
  return top.concat(bottom);
};

export default Strassen;
