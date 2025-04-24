export default async function (input: string[]): Promise<number> {
  let safeCount = 0;

  input.forEach((line) => {
    const numbers = line.split(" ").map(Number);

    if (checkLineSafetyWithTolerance(numbers)) {
      safeCount++;
    }
  });

  return safeCount;
}

function checkLineSafetyWithTolerance(numbers: number[]): boolean {
  if (checkLineSafety(numbers)) {
    return true; // Exit early as the line is safe.
  }

  for (let i = 0; i < numbers.length; i++) {
    const newNumbers = [...numbers];
    newNumbers.splice(i, 1);

    if (checkLineSafety(newNumbers)) {
      return true; // Exit early as we've found a safe set within the line.
    }
  }

  // If you've reached this we don't have a safe line and there is no
  // hope, the time has come... you are the weakest link, goodbye.
  return false;
}

function checkLineSafety(numbers: number[]): boolean {
  const lineIncrasing = numbers[1] > numbers[0];

  for (let i = 0; i < numbers.length - 1; i++) {
    const diff = numbers[i] - numbers[i + 1];
    if (lineIncrasing && diff > 0) return false; // Exit due to decrease.
    if (!lineIncrasing && diff < 0) return false; // Exit due to increase.

    const absDiff = Math.abs(diff);
    if (absDiff < 1 || absDiff > 3) return false; // Exit due to too large a difference.
  }

  return true;
}
