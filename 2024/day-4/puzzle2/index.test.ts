import { assertEquals } from "@std/assert";
import Solve from "./index.ts";

Deno.test(async function D4P2DirectMatch() {
  const puzzle = [
    "M.S",
    ".A.",
    "M.S",
  ];

  assertEquals(await Solve(puzzle), 1);
});

Deno.test(async function D4P2InvalidMatches() {
  assertEquals(await Solve(["A.S", ".A.", "M.S"]), 0);
  assertEquals(await Solve(["...", "...", "..."]), 0);
  assertEquals(await Solve(["M,S", ".A.", "S.M"]), 0);
});

Deno.test(async function D4P2SolveExample() {
  const puzzle = [
    ".M.S......",
    "..A..MSMS.",
    ".M.S.MAA..",
    "..A.ASMSM.",
    ".M.S.M....",
    "..........",
    "S.S.S.S.S.",
    ".A.A.A.A..",
    "M.M.M.M.M.",
    "..........",
  ];

  assertEquals(await Solve(puzzle), 9);
});
