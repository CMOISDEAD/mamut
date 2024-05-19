import NaivOnArray from "./algorithms/NaivOnArray";
import Strassen from "./algorithms/Strassen";
import { default_matrix, generate_matrix, read_matrix } from "./utils/matrix";

const a = await read_matrix(2, "A");
const b = await read_matrix(2, "B");

console.table(NaivOnArray(a, b));
console.table(Strassen(a, b));
