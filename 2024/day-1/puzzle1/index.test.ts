import { assertEquals } from "@std/assert";
import Solve from "./index.ts";

Deno.test(async function D1P1SimplePositiveDiff() {
  assertEquals(await Solve(['1   3']), 2);
});

Deno.test(async function D1P1AbsoluteDiff() {
  assertEquals(await Solve(['3   1']), 2);
});

Deno.test(async function D1P1SortedDiff() {
  assertEquals(await Solve(['2   3','3   2']), 0);
});

Deno.test(async function D1P1Example() {
  assertEquals(await Solve(['3   4','4   3','2   5','1   3','3   9','3   3']), 11);
});
