export default async function (input: string[]): Promise<number> {
  let safeCount = 0;

  input.forEach((line) => {
    const numbers = line.split(" ").map(Number);

    const lineIncrasing = numbers[1] > numbers[0];
    for (let i = 0; i < numbers.length - 1; i++) {
      const diff = numbers[i] - numbers[i + 1];
      if (lineIncrasing && diff > 0) return; // Exit due to decrease.
      if (!lineIncrasing && diff < 0) return; // Exit due to increase.

      const absDiff = Math.abs(diff);
      if (absDiff < 1 || absDiff > 3) return; // Exit due to too large a difference.
    }

    safeCount++;
  });

  return safeCount;
}
