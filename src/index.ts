import NaivLoopUnrollingFour from "./algorithms/NaivLoopFour";
import NaivLoopUnrollingTwo from "./algorithms/NaivLoopTwo";
import NaivOnArray from "./algorithms/NaivOnArray";
import { ParallelIV, ParallelV, ParallelIII } from "./algorithms/Parallel";
import { SeqBlock3III, SeqBlock3IV, SeqBlock3V } from "./algorithms/SeqBlock";
import Strassen from "./algorithms/Strassen";
import StrassenWinograd from "./algorithms/StrassenWinograd";
import WinogradOriginal from "./algorithms/WinoGrad";
import WinogradScaled from "./algorithms/WinogradScaled";
import { execute } from "./utils/execute";
import { init } from "./utils/files";
import { default_matrix, generate_matrix, read_matrix } from "./utils/matrix";

// elimina los valores de el archivo time
await init();

const n = 64;

const a = await read_matrix(n, "A");
const b = await read_matrix(n, "B");

async function runAlgorithms() {
  // Ejecutar algoritmos Naiv uno tras otro
  // await execute(a, b, NaivOnArray, "NaivOnArray", n);
  // await execute(a, b, NaivLoopUnrollingTwo, "NaivLoopUnrollingTwo", n);
  // await execute(a, b, NaivLoopUnrollingFour, "NaivLoopUnrollingFour", n);

  // // Ejecutar algoritmos Winograd uno tras otro
  // await execute(a, b, WinogradOriginal, "WinogradOriginal", n);
  // await execute(a, b, WinogradScaled, "WinogradScaled", n);

  // Ejecutar algoritmos Strassen uno tras otro
  await execute(a, b, Strassen, "Strassen", n);
  // await execute(a, b, StrassenWinograd, "StrassenWinograd", n);

  // // Ejecutar algoritmos SeqBlock uno tras otro
  // await execute(a, b, SeqBlock3III, "SeqBlock3III", n);
  // await execute(a, b, SeqBlock3IV, "SeqBlock3IV", n);
  // await execute(a, b, SeqBlock3V, "SeqBlock3V", n);

  // // Ejecutar algoritmos Parallel uno tras otro
  // await execute(a, b, ParallelIII, "ParallelIII", n);
  // await execute(a, b, ParallelIV, "ParallelIV", n);
  // await execute(a, b, ParallelV, "ParallelV", n);
}

runAlgorithms();
