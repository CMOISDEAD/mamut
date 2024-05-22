
import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';

class IV5EnhancedParallelBlock {
  static multiplyBlock(args: [number, number, number, number, number, number[][], number[][], number[][]]): void {
    const [i1, j1, k1, bsize, size, matrizA, matrizB, matrizC] = args;
    for (let i = i1; i < Math.min(i1 + bsize, size); i++) {
      for (let j = j1; j < Math.min(j1 + bsize, size); j++) {
        for (let k = k1; k < Math.min(k1 + bsize, size); k++) {
          matrizC[i][k] += matrizA[i][j] * matrizB[j][k];
        }
      }
    }
    if (parentPort) {
      parentPort.postMessage(matrizC);
    }
  }

  static async multiply(matrizA: number[][], matrizB: number[][], matrizC: number[][], bsize: number, size: number, csize: number): Promise<void> {
    const tasks: Promise<number[][]>[] = [];

    for (let i1 = 0; i1 < size; i1 += Math.floor(size / 2)) {
      for (let j1 = 0; j1 < size; j1 += bsize) {
        for (let k1 = 0; k1 < size; k1 += bsize) {
          tasks.push(new Promise<number[][]>((resolve, reject) => {
            const worker = new Worker(__filename, {
              workerData: [i1, j1, k1, bsize, size, matrizA, matrizB, matrizC]
            });
            worker.on('message', (result: number[][]) => resolve(result));
            worker.on('error', reject);
            worker.on('exit', (code) => {
              if (code !== 0) {
                reject(new Error(`Worker stopped with exit code ${code}`));
              }
            });
          }));
        }
      }
    }

    const results = await Promise.all(tasks);

    for (const result of results) {
      for (let i = 0; i < size; i++) {
        for (let k = 0; k < size; k++) {
          matrizC[i][k] += result[i][k];
        }
      }
    }
  }
}

if (!isMainThread) {
  IV5EnhancedParallelBlock.multiplyBlock(workerData);
}
