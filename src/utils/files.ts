import path from "path";

const file = Bun.file(path.join(__dirname, "..", "..", "data", "times.txt"));
const writer = file.writer();

export const write = async (name: string, time: number) => {
  const content = await file.text();
  writer.write(content);
  writer.write(`${name}: ${time.toFixed(8)}\n`);
  writer.end();
};

export const read = async () => {
  return await file.text();
};
