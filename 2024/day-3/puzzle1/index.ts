export default async function (lines: string[]): Promise<number> {
  const pattern = /mul\((\d+),(\d+)\)/g;

  let total = 0;
  let match = null;

  lines.forEach((line) => {
    while (null !== (match = pattern.exec(line))) {
      const [_, a, b] = match;
      total += parseInt(a) * parseInt(b);
    }
  });

  return total;
}
