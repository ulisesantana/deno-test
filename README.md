# deno-test

> 🇬🇧 Deno (deno.land) is a secure TypeScript runtime built on V8 and Rust
>
> 🇪🇸 Deno (deno.land) es un entorno seguro de ejecución para TypeScript construido con V8 y Rust

Deno es una reescritura de NodeJS por parte de Ryan Dahl corrigiendo los errores que ha visto después de 10 años de evolución. Esta vez ha elegido Rust en vez de C++ para conectar el V8 con el sistema y TypeScript como lenguaje por defecto, aunque también puedes seguir corriendo código JavaScript. Sus principales características son:
- **Seguridad**: el código corre en un sandbox por defecto. Además necesitas arrancar el script con los permisos necesarios para trabajar con ficheros, red, ejecutar comandos, etc.
- **ECMAScript Modules**: soporte para módulos de ECMAScript. Más fácil compartir código y no más uso del require.
- **Librerías propias**: de base Deno incorpora librerías para criptografía, generar uuid, web sockets, etc.
- **TypeScript**: soporte para TypeScript como parte de la plataforma. Es el lenguaje por defecto y no se necesita de paquetes extra para transpilar, ejecutar ni formatear.
- **`await` global**: puedes usar await en la raíz del script.
- **Suite para tests**: a diferencia de NodeJS, Deno incluye una suite para poder testear nuestro código.
- **Frontend developer friendly**: la mayoría de las APIs del navegador funcionan directamente. Por ejemplo, existe el objeto `window` así como puedes hacer una llamada HTTP con `fetch`. 
- **Gestor de paquetes descentralizado**: no hay package.json, no instalas o desinstalas paquetes. Si necesitas algo lo importas por url y Deno se encarga de cachearlo. Archivos `deps.ts`
```javascript
import { listenAndServe } from "https://deno.land/std/http/server.ts";
import { acceptWebSocket, acceptable } from "https://deno.land/std/ws/mod.ts";
```
- 

## Guías de estilo para Deno

El archivo en el que va a estar el código que se va a exportar se le llama `mod.ts`

Al no haber `package.json` se exportan las dependencias desde el archivo `deps.ts`
```javascript
export * from "https://deno.land/std/http/server.ts";
export * from "https://deno.land/std/ws/mod.ts";
```

