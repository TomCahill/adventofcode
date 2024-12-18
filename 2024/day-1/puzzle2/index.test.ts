import { assertEquals } from "@std/assert";
import Solve from "./index.ts";

Deno.test(async function D1P2BasicSimilarityEquals() {
  assertEquals(await Solve(['4   4']), 4);
});

Deno.test(async function D1P1SimilarityMulti() {
  assertEquals(await Solve(['3   1', '8   3', '5   3']), 6);
});

Deno.test(async function D1P1Example() {
  assertEquals(await Solve(['3   4','4   3','2   5','1   3','3   9','3   3']), 31);
});
