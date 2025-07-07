# Kit de Inicio Starlight: Conceptos Básicos

[![Construido con Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

```
pnpm create astro@latest -- --template starlight
```

[![Abrir en StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/starlight/tree/main/examples/basics)
[![Abrir con CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/starlight/tree/main/examples/basics)
[![Desplegar en Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/withastro/starlight&create_from_path=examples/basics)
[![Desplegar con Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwithastro%2Fstarlight%2Ftree%2Fmain%2Fexamples%2Fbasics&project-name=my-starlight-docs&repository-name=my-starlight-docs)

> 🧑‍🚀 **¿Astronauta experimentado?** Elimina este archivo. ¡Diviértete!

## 🚀 Estructura del Proyecto

Dentro de tu proyecto Astro + Starlight, verás las siguientes carpetas y archivos:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight busca archivos `.md` o `.mdx` en el directorio `src/content/docs/`. Cada archivo se expone como una ruta basada en su nombre de archivo.

Las imágenes pueden agregarse a `src/assets/` y ser insertadas en Markdown con un enlace relativo.

Los recursos estáticos, como favicons, pueden colocarse en el directorio `public/`.

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, en una terminal:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Instala las dependencias                        |
| `pnpm dev`                | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm build`              | Construye tu sitio de producción en `./dist/`   |
| `pnpm preview`            | Previsualiza tu build localmente antes de desplegar |
| `pnpm astro ...`          | Ejecuta comandos CLI como `astro add`, `astro check` |
| `pnpm astro -- --help`    | Obtén ayuda sobre el CLI de Astro               |

## 👀 ¿Quieres saber más?

Consulta la [documentación de Starlight](https://starlight.astro.build/), lee [la documentación de Astro](https://docs.astro.build) o únete al [servidor de Discord de Astro](https://astro.build/chat).
