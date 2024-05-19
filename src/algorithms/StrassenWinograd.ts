import NaivStandar from "./NaivStandar";

const plus = (a: number[][], b: number[][]): number[][] => {
  const n = a.length;
  const c: number[][] = [];
  for (let i = 0; i < n; i++) {
    c[i] = [];
    for (let j = 0; j < n; j++) {
      c[i][j] = a[i][j] + b[i][j];
    }
  }
  return c;
};

const substract = (a: number[][], b: number[][]): number[][] => {
  const n = a.length;
  const c: number[][] = [];
  for (let i = 0; i < n; i++) {
    c[i] = [];
    for (let j = 0; j < n; j++) {
      c[i][j] = a[i][j] - b[i][j];
    }
  }
  return c;
};

const divide = (
  m: number[][],
  half: number,
): [number[][], number[][], number[][], number[][]] => {
  const a: number[][] = [];
  const b: number[][] = [];
  const c: number[][] = [];
  const d: number[][] = [];
  for (let i = 0; i < half; i++) {
    a[i] = [...m[i].slice(0, half)];
    b[i] = [...m[i].slice(half)];
    c[i] = [...m[i + half].slice(0, half)];
    d[i] = [...m[i + half].slice(half)];
  }
  return [a, b, c, d];
};

const StrassenWinograd = (a: number[][], b: number[][]): number[][] => {
  const n = a.length;

  // Caso base
  if (n <= 16) {
    return NaivStandar(a, b);
  }

  const aAux: number[][] = [];
  const bAux: number[][] = [];

  for (let i = 0; i < n; i++) {
    aAux[i] = [...a[i]];
    bAux[i] = [...b[i]];
  }

  // Dividir las matrices en submatrices más pequeñas
  const half = Math.floor(n / 2);
  const [a11, a12, a21, a22] = divide(aAux, half);
  const [b11, b12, b21, b22] = divide(bAux, half);

  // Calcular las submatrices recursivamente
  const p1 = StrassenWinograd(plus(a11, a22), plus(b11, b22));
  const p2 = StrassenWinograd(plus(a21, a22), b11);
  const p3 = StrassenWinograd(a11, substract(b12, b22));
  const p4 = StrassenWinograd(a22, substract(b21, b11));
  const p5 = StrassenWinograd(plus(a11, a12), b22);
  const p6 = StrassenWinograd(substract(a21, a11), plus(b11, b12));
  const p7 = StrassenWinograd(substract(a12, a22), plus(b21, b22));

  // Calcular las submatrices de la matriz resultado
  const c11 = plus(substract(plus(p1, p4), p5), p7);
  const c12 = plus(p3, p5);
  const c21 = plus(p2, p4);
  const c22 = plus(substract(plus(p1, p3), p2), p6);

  // Combinar las submatrices en la matriz resultado
  const resultado: number[][] = [];
  for (let i = 0; i < half; i++) {
    resultado[i] = [...c11[i].slice(0, half), ...c12[i].slice(0, half)];
  }
  for (let i = 0; i < half; i++) {
    resultado[i + half] = [...c21[i].slice(0, half), ...c22[i].slice(0, half)];
  }
  return resultado;
};

export default StrassenWinograd;
