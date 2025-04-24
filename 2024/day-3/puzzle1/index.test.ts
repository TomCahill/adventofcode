import { assertEquals } from "@std/assert";
import Solve from "./index.ts";

Deno.test(async function D3P1SolveExample() {
  assertEquals(
    await Solve([
      "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))",
    ]),
    161,
  );
});
