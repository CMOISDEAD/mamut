import { write } from "./files";

export const execute = async (
  a: number[][],
  b: number[][],
  callback: (a: number[][], b: number[][]) => any,
  name: string,
  n: number,
) => {
  const start = performance.now();
  const result = callback(a, b);
  const end = performance.now();

  await write(name, end - start, n);
  return result;
};
