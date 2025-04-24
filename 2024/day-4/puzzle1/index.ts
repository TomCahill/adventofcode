export default async function (lines: string[]): Promise<number> {
  const oneStringToRuleThemAll = lines.join('');
  const rows = lines.length;
  const cols = lines[0].length;

  const match = "XMAS";

  const directions = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1], // right
    [-1, -1], // up left
    [-1, 1], // up right
    [1, -1], // down left
    [1, 1] // down right
  ];

  let count = 0;

  for (let index = 0; index < oneStringToRuleThemAll.length; index++) {
    if (oneStringToRuleThemAll[index] !== match[0]) continue;

    const x = Math.floor(index / cols);
    const y = index % cols;

    for (const [dr, dc] of directions) {
      if (checkMatchDirection(oneStringToRuleThemAll, match, x, y, dr, dc, rows, cols)) {
        count++;
      }
    }
  }

  return count;
}

function checkMatchDirection(str: string, match: string, startRow: number, startCol: number, dr: number, dc: number, rows: number, cols: number): boolean {
  let isValid = true;
  for (let i = 0; i < match.length; i++) {
    const row = startRow + i * dr;
    const col = startCol + i * dc;

    if (!inBounds(row, col, rows, cols) || str[row * cols + col] !== match[i]) {
      isValid = false;
      break;
    }
  }

  return isValid;
}

function inBounds(r: number, c: number, rows: number, cols: number): boolean {
  return r >= 0 && r < rows && c >= 0 && c < cols;
}