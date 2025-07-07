![Puntuación de Lighthouse de Astro Sphere](_astrosphere.jpg)

Astro Sphere es un tema de portafolio y blog estático, minimalista, ligero y ultrarrápido basado en mi sitio web personal.

Está construido principalmente con Astro, Tailwind y Typescript, con una pequeña cantidad de SolidJS para componentes con estado.

## 🚀 Despliega tu propio sitio

[![Deploy con Vercel](_deploy_vercel.svg)](https://vercel.com/new/clone?repository-url=https://github.com/markhorn-dev/astro-sphere)  [![Deploy con Netlify](_deploy_netlify.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/markhorn-dev/astro-sphere)

## 📋 Características

- ✅ 100/100 en rendimiento Lighthouse
- ✅ Responsive
- ✅ Accesible
- ✅ SEO-friendly
- ✅ Tipado seguro
- ✅ Estilo minimalista
- ✅ Tema claro/oscuro
- ✅ UI animada
- ✅ Estilos con Tailwind
- ✅ Sitemap generado automáticamente
- ✅ RSS Feed generado automáticamente
- ✅ Soporte para Markdown
- ✅ Soporte para MDX (componentes en tu markdown)
- ✅ Contenido buscable (posts y proyectos)
- ✅ Bloques de código - copiar al portapapeles

## 💯 Puntuación Lighthouse
![Puntuación de Lighthouse de Astro Sphere](_lighthouse.png)

## 🕊️ Ligero
Todas las páginas pesan menos de 100kb (incluyendo fuentes)

## ⚡︎ Rápido
Renderizado en ~40ms en localhost

## 📄 Configuración

Las publicaciones del blog en la demo sirven como documentación y configuración.

## 💻 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, en una terminal:

Reemplaza pnpm por tu gestor de paquetes preferido. `pnpm`, `npm`, `yarn`, `bun`, etc.

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Instala las dependencias                        |
| `pnpm dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm dev:network`     | Inicia el servidor de desarrollo en la red local  |
| `pnpm sync`            | Genera tipos de TypeScript para todos los módulos Astro |
| `pnpm build`           | Construye el sitio de producción en `./dist/`     |
| `pnpm preview`         | Previsualiza tu build localmente antes de desplegar |
| `pnpm preview:network` | Inicia el servidor de previsualización en la red local |
| `pnpm astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check` |
| `pnpm astro -- --help` | Obtén ayuda sobre el CLI de Astro                 |
| `pnpm lint`            | Ejecuta ESLint                                    |
| `pnpm lint:fix`        | Corrige automáticamente los problemas de ESLint    |

## 🗺️ Hoja de ruta

Algunas funciones que planeo implementar:
- ⬜ Páginas de artículos - Tabla de contenidos
- ⬜ Páginas de artículos - Compartir en redes sociales

## ✨ Agradecimientos

Tema inspirado por [Paco Coursey](https://paco.me/), [Lee Robinson](https://leerob.io/) y [Hayden Bleasel](https://www.haydenbleasel.com/)

## 🏛️ Licencia

MIT

# Actualización 1.0.1

Se añadió la posibilidad de ejecutar dev y preview en la red local.
Se añadió pnpm dev:network
Se añadió pnpm preview:network

Se aumentó ligeramente la densidad de partículas en modo claro y oscuro.

Se añadieron animaciones sutiles de estrellas y meteoros en modo oscuro.

Se eliminó la configuración de eslint
