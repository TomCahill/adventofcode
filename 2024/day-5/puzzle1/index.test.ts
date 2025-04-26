import { assertEquals } from "@std/assert";
import Solve from "./index.ts";

Deno.test(async function D5P1SolveExample() {
  const puzzle = [
    "....XXMAS.",
    ".SAMXMS...",
    "...S..A...",
    "..A.A.MS.X",
    "XMASAMX.MM",
    "X.....XA.A",
    "S.S.S.S.SS",
    ".A.A.A.A.A",
    "..M.M.M.MM",
    ".X.X.XMASX",
  ];

  assertEquals(await Solve(puzzle), 18);
});
