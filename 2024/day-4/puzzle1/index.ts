export default async function (lines: string[]): Promise<number> {
  const oneStringToRuleThemAll = lines.join("");
  const rows = lines.length;
  const cols = lines[0].length;

  const match = "XMAS";

  const directions = [
    [0, -1], // top
    [0, 1], // bottom
    [-1, 0], // left
    [1, 0], // right
    [-1, -1], // top left
    [1, -1], // top right
    [-1, 1], // bottom left
    [1, 1], // bottom right
  ];

  let count = 0;

  for (let index = 0; index < oneStringToRuleThemAll.length; index++) {
    if (oneStringToRuleThemAll[index] !== match[0]) continue;

    const x = index % cols;
    const y = Math.floor(index / cols);

    for (const [dX, dY] of directions) {
      if (
        checkMatchDirection(
          oneStringToRuleThemAll,
          match,
          x,
          y,
          dX,
          dY,
          rows,
          cols,
        )
      ) {
        count++;
      }
    }
  }

  return count;
}

function checkMatchDirection(
  str: string,
  match: string,
  startX: number,
  startY: number,
  dX: number,
  dY: number,
  rows: number,
  cols: number,
): boolean {
  let isValid = true;
  for (let i = 0; i < match.length; i++) {
    const x = startX + i * dX;
    const y = startY + i * dY;

    if (!inBounds(x, y, rows, cols) || str[y * cols + x] !== match[i]) {
      isValid = false;
      break;
    }
  }

  return isValid;
}

function inBounds(x: number, y: number, rows: number, cols: number): boolean {
  return y >= 0 && y < rows && x >= 0 && x < cols;
}
