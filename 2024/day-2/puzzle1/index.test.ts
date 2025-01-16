import { assertEquals } from "@std/assert";
import Solve from "./index.ts";

// Equal
Deno.test(async function D2P1UnsafeStale() {
  assertEquals(await Solve(['1 1']), 0);
});

// Increase
Deno.test(async function D2P1SafeIncrease() {
  assertEquals(await Solve(['1 2']), 1);
  assertEquals(await Solve(['1 3']), 1);
  assertEquals(await Solve(['1 4']), 1);
});
Deno.test(async function D2P1UnsafeIncrease() {
  assertEquals(await Solve(['1 5']), 0);
  assertEquals(await Solve(['1 6']), 0);
  assertEquals(await Solve(['1 7']), 0);
});

// Decrease
Deno.test(async function D2P1SafeDecrease() {
  assertEquals(await Solve(['2 1']), 1);
  assertEquals(await Solve(['3 1']), 1);
  assertEquals(await Solve(['4 1']), 1);
});
Deno.test(async function D2P1UnsafeDecrease() {
  assertEquals(await Solve(['5 1']), 0);
  assertEquals(await Solve(['6 1']), 0);
  assertEquals(await Solve(['7 1']), 0);
});

// Full Example
Deno.test(async function D2P1SolveExample() {
  assertEquals(await Solve(['7 6 4 2 1']), 1);
  assertEquals(await Solve(['1 2 7 8 9']), 0);
  assertEquals(await Solve(['9 7 6 2 1']), 0);
  assertEquals(await Solve(['1 3 2 4 5']), 0);
  assertEquals(await Solve(['8 6 4 4 1']), 0);
  assertEquals(await Solve(['1 3 6 7 9']), 1);
});
