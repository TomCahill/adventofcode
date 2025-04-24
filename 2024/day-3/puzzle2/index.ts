export default async function (lines: string[]): Promise<number> {
  const pattern = /(mul\((\d+),(\d+)\)|do\(\)|don't\(\))/g;

  let total = 0;
  let match = null;
  let enabled = true;

  lines.forEach((line) => {
    while (null !== (match = pattern.exec(line))) {
      if (match[1] === "do()") {
        enabled = true;
        continue;
      } else if (match[1] === "don't()") {
        enabled = false;
        continue;
      }

      if (enabled) {
        total += parseInt(match[2]) * parseInt(match[3]);
      }
    }
  });

  return total;
}
