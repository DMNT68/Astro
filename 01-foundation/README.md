# SECCION 1: Introducción a Astro 🚀

<br>

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

-   public/: Carpeta para archivos estáticos que se sirven tal cual (imágenes, favicon, robots.txt, etc.).
-   src/: Contiene todo el código fuente del proyecto.
-   components/: Componentes reutilizables, pueden ser archivos .astro, .jsx, .tsx, etc.
-   pages/: Páginas del sitio. Cada archivo .astro o .md aquí se convierte en una ruta.
-   .gitignore: Lista de archivos y carpetas que Git debe ignorar.
-   astro.config.mjs: Archivo de configuración principal de Astro.
-   package.json: Define dependencias, scripts y metadatos del proyecto.
-   package-lock.json / pnpm-lock.yaml / yarn.lock: Archivo de bloqueo de dependencias, depende del gestor usado (npm, pnpm o yarn).
-   tsconfig.json: Configuración de TypeScript (aunque uses solo JavaScript, Astro lo incluye por defecto).

# 2. Sintaxis

## Sintaxis básica de Astro

Astro utiliza archivos `.astro` para definir componentes y páginas. La sintaxis combina HTML, JavaScript/TypeScript y Markdown.

### Estructura de un archivo `.astro`

```astro
---
const nombre = "Mundo";
---
<html>
    <head>
        <title>Hola Astro</title>
    </head>
    <body>
        <h1>Hola {nombre}!</h1>
    </body>
</html>
```

-   El bloque `---` es para lógica en JavaScript/TypeScript.
-   El resto es HTML, pero puedes interpolar variables con `{}`.

### Importar componentes

```astro
---
import Header from '../components/Header.astro';
---
<Header />
```

### Pasar props a componentes

```astro
<MyButton texto="Haz clic aquí" />
```

### Uso de Markdown

Puedes usar archivos `.md` en `src/pages/` para crear páginas de contenido estático.

### Slots

Para contenido dinámico dentro de componentes:

```astro
<slot />
```

### Condicionales y loops

```astro
---
const items = ["uno", "dos", "tres"];
---
<ul>
    {items.map(item => <li>{item}</li>)}
</ul>
```

Consulta la [documentación oficial de Astro](https://docs.astro.build/es/core-concepts/astro-components/) para más detalles.

# 3. Navegación en Astro

La navegación en Astro se basa principalmente en enlaces HTML estándar utilizando la etiqueta `<a>`. Cada archivo `.astro` o `.md` dentro de la carpeta `src/pages/` se convierte automáticamente en una ruta accesible.

### Ejemplo de enlaces de navegación

```astro
<nav>
    <a href="/">Inicio</a>
    <a href="/acerca">Acerca de</a>
    <a href="/contacto">Contacto</a>
</nav>
```

-   Usa rutas relativas o absolutas según la estructura de tu proyecto.
-   No se requiere ningún componente especial para la navegación básica.

### Navegación entre páginas

Si tienes un archivo `src/pages/acerca.astro`, puedes enlazarlo con `<a href="/acerca">Acerca de</a>`. Astro generará automáticamente la ruta `/acerca`.

### Navegación avanzada

Para navegación dinámica, menús activos o rutas generadas, puedes usar JavaScript o frameworks integrados (React, Vue, Svelte) dentro de componentes Astro, pero para la mayoría de los casos, los enlaces HTML son suficientes.

Consulta la [guía de enrutamiento de Astro](https://docs.astro.build/es/core-concepts/routing/) para más detalles.

# 4. Componentes

## ¿Qué es un componente en Astro?

Un componente en Astro es un bloque reutilizable de código que puede contener HTML, lógica en JavaScript/TypeScript y estilos. Los componentes permiten dividir la interfaz en piezas independientes y reutilizables.

### Tipos de componentes

-   **Componentes `.astro`**: Usan la sintaxis propia de Astro, ideales para UI estática o con poca interactividad.
-   **Componentes de frameworks**: Puedes usar componentes de React, Vue, Svelte, Solid, etc., para añadir interactividad avanzada.

### Crear un componente `.astro`

Ejemplo de un componente simple:

```astro
---
// src/components/Saludo.astro
const { nombre } = Astro.props;
---
<h2>¡Hola, {nombre}!</h2>
```

### Usar un componente en una página

```astro
---
import Saludo from '../components/Saludo.astro';
---
<Saludo nombre="Astro" />
```

### Props en componentes

Los componentes pueden recibir datos a través de props, que se acceden con `Astro.props`.

### Slots en componentes

Permiten insertar contenido dinámico dentro del componente:

```astro
// src/components/Tarjeta.astro
<div class="tarjeta">
    <slot />
</div>
```

Uso:

```astro
<Tarjeta>
    <p>Contenido dentro de la tarjeta</p>
</Tarjeta>
```

### Importar componentes de frameworks

Para usar un componente de React, por ejemplo:

```astro
---
import MiBoton from '../components/MiBoton.jsx';
---
<MiBoton texto="Haz clic" />
```

Consulta la [documentación de componentes de Astro](https://docs.astro.build/es/core-concepts/astro-components/) para más ejemplos y detalles.

# 5. Layouts

## ¿Qué es un layout en Astro?

Un layout es un componente especial que define la estructura base (cabecera, pie, navegación, etc.) que comparten varias páginas. Permite evitar la repetición de código y mantener la consistencia visual.

### Crear un layout

Ejemplo de un layout básico:

```astro
---
// src/layouts/BaseLayout.astro
---
<html>
    <head>
        <title>Mi sitio Astro</title>
    </head>
    <body>
        <header>
            <h1>Mi sitio</h1>
        </header>
        <main>
            <slot />
        </main>
        <footer>
            <p>© 2024</p>
        </footer>
    </body>
</html>
```

### Usar un layout en una página

Para aplicar el layout a una página:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout>
    <h2>Contenido de la página</h2>
    <p>Este contenido se inserta en el slot del layout.</p>
</BaseLayout>
```

### Ventajas de los layouts

-   Reutilización de estructura y estilos.
-   Facilita cambios globales en la apariencia.
-   Permite anidar layouts para estructuras más complejas.

Consulta la [guía de layouts de Astro](https://docs.astro.build/es/core-concepts/layouts/) para más detalles y ejemplos.

# 6. Estilos por componentes y globales

Astro permite aplicar estilos tanto a nivel de componente como de forma global. Esto facilita mantener el código organizado y evitar conflictos de estilos.

## Estilos por componente

Puedes escribir CSS directamente dentro de un archivo `.astro` usando la etiqueta `<style>`. Los estilos definidos aquí solo afectan al componente actual, gracias al encapsulamiento automático de Astro.

```astro
---
const { nombre } = Astro.props;
---
<h2 class="saludo">¡Hola, {nombre}!</h2>

<style>
.saludo {
    color: #4f46e5;
    font-size: 2rem;
    margin-bottom: 1rem;
}
</style>
```

-   Los estilos dentro de `<style>` en un componente `.astro` son scoped (aislados) por defecto.
-   Puedes usar cualquier sintaxis CSS válida, incluyendo variables, media queries, etc.

## Estilos globales

Para estilos que deben aplicarse a todo el sitio, puedes:

1. **Importar archivos CSS globales** en tu archivo raíz, por ejemplo en `src/pages/_app.astro` o en tu layout principal:

```astro
---
import '../styles/global.css';
---
<slot />
```

2. **Agregar estilos globales** directamente en el layout usando `<style is:global>`:

```astro
<style is:global>
body {
    font-family: system-ui, sans-serif;
    background: #f9fafb;
    margin: 0;
}
</style>
```

-   El atributo `is:global` indica que los estilos no estarán encapsulados y afectarán a todo el documento.

## Uso de preprocesadores

Astro soporta CSS Modules, Sass, PostCSS y otros preprocesadores. Solo instala el paquete necesario y usa la extensión correspondiente (`.scss`, `.module.css`, etc.).

```astro
import styles from './MiComponente.module.css';

<div class={styles.contenedor}>Contenido</div>
```

Consulta la [guía de estilos de Astro](https://docs.astro.build/es/guides/styling/) para más detalles y ejemplos avanzados.

# 7. Pagina 404

## ¿Cómo crear una página 404 en Astro?

Astro permite personalizar la página de error 404 fácilmente. Solo necesitas crear un archivo llamado `404.astro` dentro de la carpeta `src/pages/`. Este archivo se mostrará automáticamente cuando un usuario visite una ruta que no existe.

### Ejemplo de `src/pages/404.astro`

```astro
---
---
<html>
    <head>
        <title>Página no encontrada</title>
    </head>
    <body>
        <h1>404 - Página no encontrada</h1>
        <p>Lo sentimos, la página que buscas no existe.</p>
        <a href="/">Volver al inicio</a>
    </body>
</html>
```

-   Puedes personalizar el contenido y el diseño como prefieras.
-   Si usas un layout, también puedes importarlo aquí para mantener la coherencia visual.

Consulta la [documentación sobre páginas 404 en Astro](https://docs.astro.build/es/core-concepts/routing/#p%C3%A1gina-404) para más detalles.

# 8. View Transitions y Client Router

Astro soporta transiciones de vista (View Transitions) con solo unas pocas líneas de código. Las transiciones de vista actualizan el contenido de tu página sin el refresco completo de navegación del navegador, proporcionando animaciones fluidas entre páginas. Cuando el soporte del navegador para la View Transition API es limitado, Astro te permite controlar estrategias de fallback para ofrecer la mejor experiencia posible a todos los visitantes.

Astro proporciona un componente de enrutamiento `<ClientRouter />` que puedes agregar al `<head>` de una página para controlar las transiciones al navegar a otra página. Este componente ofrece un router ligero del lado del cliente que intercepta la navegación y te permite personalizar la transición entre páginas.

Agrega este componente a un archivo `.astro` reutilizable, como un layout o un head común, para tener transiciones animadas entre páginas en todo tu sitio (modo SPA).

## Añadir View Transitions a una página

Opta por usar transiciones de vista en páginas individuales importando y agregando el componente `<ClientRouter />` en el `<head>` de cada página deseada.

**Ejemplo: `src/pages/index.astro`**

```astro
---
import { ClientRouter } from "astro:transitions";
---
<html lang="es">
    <head>
        <title>Mi página principal</title>
        <ClientRouter />
    </head>
    <body>
        <h1>¡Bienvenido a mi sitio web!</h1>
    </body>
</html>
```

Consulta la [documentación sobre View Transitions en Astro](https://docs.astro.build/en/guides/view-transitions/) para más detalles.

# 9. Despliege

## ¿Cómo desplegar un sitio Astro?

Astro genera sitios estáticos listos para producción en la carpeta `dist/` tras ejecutar el comando de build. Puedes desplegar tu sitio en cualquier servicio de hosting estático o plataforma compatible con Node.js.

### 1. Build del proyecto

Ejecuta:

```sh
pnpm build
```

Esto crea la carpeta `dist/` con los archivos listos para producción.

### 2. Despliegue en plataformas populares

#### **Vercel**

1. Sube tu proyecto a GitHub, GitLab o Bitbucket.
2. Ve a [vercel.com](https://vercel.com), importa el repositorio y selecciona el framework Astro.
3. Vercel detecta automáticamente la configuración y despliega tu sitio.

#### **Netlify**

1. Sube tu proyecto a un repositorio.
2. Ve a [netlify.com](https://netlify.com) y conecta tu repositorio.
3. Usa los comandos de build:
    - Build: `pnpm build`
    - Directorio de publicación: `dist`

#### **GitHub Pages**

1. Instala el adaptador de GitHub Pages:

    ```sh
    pnpm astro add github
    ```

2. Sigue las instrucciones para configurar el despliegue automático.

#### **Otras opciones**

-   **Firebase Hosting**, **Cloudflare Pages**, **Render**, **Surge**, etc.  
    Consulta la [guía de despliegue de Astro](https://docs.astro.build/es/guides/deploy/) para instrucciones específicas.

### 3. Adaptadores

Astro usa adaptadores para optimizar el build según la plataforma de despliegue. Instala el adaptador adecuado con:

```sh
pnpm astro add <adaptador>
```

Por ejemplo, para Netlify:

```sh
pnpm astro add netlify
```

### 4. Despliegue manual

Puedes subir el contenido de la carpeta `dist/` a cualquier servidor web (Apache, Nginx, etc.) o servicio de almacenamiento estático.

---

Consulta la [documentación oficial de despliegue de Astro](https://docs.astro.build/es/guides/deploy/) para más detalles y ejemplos.

# 10. Comandos de Astro

Astro proporciona una interfaz de línea de comandos (CLI) para gestionar tu proyecto. Los comandos más comunes son:

```sh
pnpm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

Todos los comandos se ejecutan desde la raíz del proyecto, en una terminal:

| Comando                | Acción                                               |
| :--------------------- | :--------------------------------------------------- |
| `pnpm install`         | Instala las dependencias                             |
| `pnpm dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm build`           | Construye el sitio para producción en `./dist/`      |
| `pnpm preview`         | Previsualiza tu build localmente antes de desplegar  |
| `pnpm astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check` |
| `pnpm astro -- --help` | Obtén ayuda sobre el CLI de Astro                    |

## 👀 ¿Quieres aprender más?

No dudes en consultar [nuestra documentación](https://docs.astro.build/es/) o unirte a nuestro [servidor de Discord](https://astro.build/chat).
