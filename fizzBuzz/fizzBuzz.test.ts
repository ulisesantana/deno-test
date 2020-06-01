import fizzBuzz, { FIZZ, BUZZ, FIZZ_BUZZ } from "./fizzBuzz.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test(
  "FizzBuzz should return the same number given if is not divisible by 3 or 5",
  () => {
    assertEquals(fizzBuzz(1), 1);
  },
);
Deno.test(
  'FizzBuzz should return "Fizz" if the number given is divisible by 3',
  () => {
    assertEquals(fizzBuzz(6), FIZZ);
  },
);
Deno.test(
  'FizzBuzz should return "Buzz" if the number given is divisible by 5',
  () => {
    assertEquals(fizzBuzz(25), BUZZ);
  },
);
Deno.test(
  'FizzBuzz should return "FizzBuzz" if the number given is divisible by 5 and 3',
  () => {
    assertEquals(fizzBuzz(15), FIZZ_BUZZ);
  },
);
