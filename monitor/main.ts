import { bold, rgb8, underline } from "https://deno.land/std/fmt/colors.ts";

type Formatter = (text: string) => string;

const addFormat = (text: string, ...format: Array<Formatter>): string =>
  format.reduce((acc: string, f: Formatter) => f(acc), text);

const useRfb8 = (code: number): Formatter => (text: string): string =>
  rgb8(text, code);
const primaryColor = useRfb8(201);
const red = useRfb8(196);
const title = addFormat("Deno info 📋", bold, red);
const addH1 = (text: string) =>
  addFormat("\n" + text.toUpperCase(), primaryColor, underline);

console.log(title);

console.log(addH1("Versions"));
console.table(Deno.version);

console.log(addH1("system"));
console.table(Deno.build);

console.log(addH1("métricas"));
console.table(Deno.metrics());

console.log(
  new TextDecoder()
    .decode(
      await Deno.run({
        cmd: ["ls", "-lah"],
        stdout: "piped",
      }).output()
    )
    .toString()
);
