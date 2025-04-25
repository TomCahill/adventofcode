export default async function (lines: string[]): Promise<number> {
  const flatLines = lines.join("").split("");
  const rows = lines.length;
  const cols = lines[0].length;

  const directions = [
    [-1, -1], // top left
    [1, -1], // top right
  ];

  let count = 0;
  for (let index = 0; index < flatLines.length; index++) {
    if (flatLines[index] !== "A") continue;

    const startY = Math.floor(index / cols);
    const startX = index % cols;

    let matchCount = 0;
    for (const [dX, dY] of directions) {
      if (checkAdjacentCells(flatLines, startY, startX, dX, dY, rows, cols)) {
        matchCount++;
      }
    }

    if (matchCount === 2) {
      count++;
    }
  }

  return count;
}

function checkAdjacentCells(
  flatLines: string[],
  startY: number,
  startX: number,
  dX: number,
  dY: number,
  rows: number,
  cols: number,
): boolean {
  const cell1XY = [startX + dX, startY + dY];
  const cell2XY = [startX + -dX, startY + -dY];

  if (
    !inBounds(cell1XY[0], cell1XY[1], rows, cols) ||
    !inBounds(cell2XY[0], cell2XY[1], rows, cols)
  ) {
    return false;
  }

  const cell1 = flatLines[cell1XY[1] * cols + cell1XY[0]];
  const cell2 = flatLines[cell2XY[1] * cols + cell2XY[0]];

  return (cell1 === "M" && cell2 === "S" || cell1 === "S" && cell2 === "M");
}

function inBounds(x: number, y: number, rows: number, cols: number): boolean {
  return y >= 0 && y < rows && x >= 0 && x < cols;
}
