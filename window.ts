const data: Response = await fetch("https://pokeapi.co/api/v2/pokemon");
console.log("Keys de Window");
console.log(Object.keys(window.window));
console.log("Response");
console.log("Data:", await data.json());
console.log("Headers:", Object.fromEntries(data.headers));

addEventListener("meh", (e) => console.log("He recibido un mensaje", e));

dispatchEvent(new Event("meh"));
