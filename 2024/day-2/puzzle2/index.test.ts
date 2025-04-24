import { assertEquals } from "@std/assert";
import Solve from "./index.ts";

Deno.test(async function D2P1SolveExample() {
  assertEquals(await Solve(["7 6 4 2 1"]), 1);
  assertEquals(await Solve(["1 2 7 8 9"]), 0); // Remove third, still not safe because of 2 to 8
  assertEquals(await Solve(["9 7 6 2 1"]), 0);
  assertEquals(await Solve(["1 3 2 4 5"]), 1); // Remove second
  assertEquals(await Solve(["8 6 4 4 1"]), 1); // Remove third
  assertEquals(await Solve(["1 3 6 7 9"]), 1);

  assertEquals(await Solve(["4 7 6 5 2"]), 1);
  assertEquals(await Solve(["0 5 6 7 13"]), 0);
});
