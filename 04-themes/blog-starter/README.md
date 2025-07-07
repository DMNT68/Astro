# Kit de Inicio Astro: Blog

```sh
pnpm create astro@latest -- --template blog
```

[![Abrir en StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/blog)
[![Abrir con CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/blog)
[![Abrir en GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/blog/devcontainer.json)

> 🧑‍🚀 **¿Astronauta experimentado?** Elimina este archivo. ¡Diviértete!

![blog](https://github.com/withastro/astro/assets/2244813/ff10799f-a816-4703-b967-c78997e8323d)

Características:

- ✅ Estilos mínimos (¡personalízalo a tu gusto!)
- ✅ 100/100 en rendimiento Lighthouse
- ✅ SEO amigable con URLs canónicas y datos OpenGraph
- ✅ Soporte para sitemap
- ✅ Soporte para RSS Feed
- ✅ Soporte para Markdown y MDX

## 🚀 Estructura del Proyecto

Dentro de tu proyecto Astro, verás las siguientes carpetas y archivos:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro busca archivos `.astro` o `.md` en el directorio `src/pages/`. Cada página se expone como una ruta basada en su nombre de archivo.

No hay nada especial sobre `src/components/`, pero ahí es donde nos gusta poner cualquier componente de Astro/React/Vue/Svelte/Preact.

El directorio `src/content/` contiene "colecciones" de documentos relacionados en Markdown y MDX. Usa `getCollection()` para obtener publicaciones de `src/content/blog/` y verifica el frontmatter usando un esquema opcional. Consulta la [documentación de Colecciones de Contenido de Astro](https://docs.astro.build/en/guides/content-collections/) para aprender más.

Cualquier recurso estático, como imágenes, puede colocarse en el directorio `public/`.

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, en una terminal:

| Comando                   | Acción                                             |
| :------------------------ | :------------------------------------------------ |
| `pnpm install`            | Instala las dependencias                          |
| `pnpm dev`                | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm build`              | Construye tu sitio de producción en `./dist/`     |
| `pnpm preview`            | Previsualiza tu build localmente antes de desplegar |
| `pnpm astro ...`          | Ejecuta comandos CLI como `astro add`, `astro check` |
| `pnpm astro -- --help`    | Obtén ayuda sobre el CLI de Astro                 |

## 👀 ¿Quieres saber más?

Consulta [nuestra documentación](https://docs.astro.build) o únete a nuestro [servidor de Discord](https://astro.build/chat).

## Crédito

Este tema está basado en el encantador [Bear Blog](https://github.com/HermanMartinus/bearblog/).
