import path from "path";

/**
 * @param size - size of the matrix
 */
export const generate_matrix = async (size: number) => {
  const gen = async (n: number, letter: String) => {
    const matrix_path = path.join(
      __dirname,
      "../../data/matrix/",
      `${size}_${letter}.txt`,
    );
    const file = Bun.file(matrix_path);
    const writer = file.writer();

    const matrix = new Array<Array<number>>();

    // populate matrix with random numbers between 0 and 100
    for (let i = 0; i < size; i++) {
      matrix.push([]);
      for (let j = 0; j < size; j++) {
        matrix[i].push(Math.floor(Math.random() * 100));
      }
    }

    // write matrix to file
    for (let i = 0; i < matrix.length; i++) {
      const row = matrix[i].join(",");
      const content = await file.text();
      writer.write(content);
      writer.write(`${row}${i === matrix.length - 1 ? "" : "\n"}`);
    }
    writer.end();
  };

  gen(size, "A");
  gen(size, "B");
};

export const read_matrix = async (
  size: number,
  letter: String,
): Promise<number[][]> => {
  const matrix_path = path.join(
    __dirname,
    "../../data/matrix/",
    `${size}_${letter}.txt`,
  );
  const file = Bun.file(matrix_path);

  const exist = await file.exists();

  if (!exist) {
    await generate_matrix(size);
  }

  const data = await file.text();

  // parse matrix from file
  const matrix: number[][] = data
    .split("\n")
    .map((row) => row.split(",").map((n) => parseInt(n)));

  return matrix;
};

export const default_matrix = async () => {
  const sizes = [2, 4, 16, 32, 64, 128];

  sizes.forEach(async (size) => {
    await generate_matrix(size);
  });
};

default_matrix()
