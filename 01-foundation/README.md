# 1. Estructura de un proyecto de Astro

Un proyecto típico de Astro tiene la siguiente estructura de carpetas y archivos principales:

```text
/
├── public/
│   └── (archivos estáticos: imágenes, favicon, etc.)
├── src/
│   ├── components/
│   │   └── (componentes reutilizables, por ejemplo: Header.astro, Footer.astro)
│   └── pages/
│       └── index.astro
├── .gitignore
├── astro.config.mjs
├── package.json
├── package-lock.json / pnpm-lock.yaml / yarn.lock
└── tsconfig.json
```

Explicación de cada archivo y directorio:

- public/: Carpeta para archivos estáticos que se sirven tal cual (imágenes, favicon, robots.txt, etc.).
- src/: Contiene todo el código fuente del proyecto.
- components/: Componentes reutilizables, pueden ser archivos .astro, .jsx, .tsx, etc.
- pages/: Páginas del sitio. Cada archivo .astro o .md aquí se convierte en una ruta.
- .gitignore: Lista de archivos y carpetas que Git debe ignorar.
- astro.config.mjs: Archivo de configuración principal de Astro.
- package.json: Define dependencias, scripts y metadatos del proyecto.
- package-lock.json / pnpm-lock.yaml / yarn.lock: Archivo de bloqueo de dependencias, depende del gestor usado (npm, pnpm o yarn).
- tsconfig.json: Configuración de TypeScript (aunque uses solo JavaScript, Astro lo incluye por defecto).

# Astro Starter Kit: Minimal

```sh
pnpm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
