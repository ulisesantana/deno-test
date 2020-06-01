import fizzBuzz from "./fizzBuzz.ts";

Array.from({ length: 100 }).forEach((irrelevant, i) => {
  console.log(fizzBuzz(++i));
});
