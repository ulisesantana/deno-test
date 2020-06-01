import {
  bgWhite,
  magenta,
  cyan,
  bold,
} from "https://deno.land/std/fmt/colors.ts";

const isDivisibleBy = (x: number) => (y: number) => y % x === 0;
const isDivisibleBy3 = isDivisibleBy(3);
const isDivisibleBy5 = isDivisibleBy(5);
const useBold = (color: Function, text: string): string => bold(color(text));

export const FIZZ = useBold(magenta, "Fizz");
export const BUZZ = useBold(cyan, "Buzz");
export const FIZZ_BUZZ = useBold(bgWhite, FIZZ + BUZZ);

export default function fizzBuzz(num: number): string | number {
  if (isDivisibleBy3(num) && isDivisibleBy5(num)) {
    return FIZZ_BUZZ;
  }

  if (isDivisibleBy3(num)) {
    return FIZZ;
  }

  if (isDivisibleBy5(num)) {
    return BUZZ;
  }

  return num;
}
