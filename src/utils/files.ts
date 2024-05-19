import path from "path";

const p = path.join(__dirname, "..", "..", "data", "times.txt");
const file = Bun.file(p);

export const init = async () => await Bun.write(p, "");

export const write = async (name: string, time: number, size: number) => {
  const content = await file.text();
  await Bun.write(p, `${content}${size} - ${name}: ${time.toFixed(8)}\n`);
};

export const read = async () => {
  return await file.text();
};
