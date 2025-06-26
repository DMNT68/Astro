# SECCIÓN 4: Colecciones e imagenes

# 1. Markdown y MDX

Astro soporta archivos Markdown (`.md`) y MDX (`.mdx`) para crear contenido fácilmente. Markdown permite escribir texto enriquecido usando una sintaxis sencilla, ideal para blogs y documentación. MDX extiende Markdown permitiendo incluir componentes de React, Vue o Svelte directamente en el contenido.

## Instalación de MDX en Astro

Para habilitar soporte para MDX, ejecuta el siguiente comando en tu proyecto:

```bash
pnpm astro add mdx
```

**Ejemplo de Markdown:**

```markdown
# Mi primer post

Este es un post usando **Markdown** en Astro.
```

**Ejemplo de MDX:**

```mdx
import MiComponente from '../components/MiComponente.astro';

# Post con MDX

Puedes usar componentes personalizados:

<MiComponente />
```

Para usar MDX en Astro, instala el paquete `@astrojs/mdx` y agrégalo a tu configuración.

## Recursos útiles

- [Documentación oficial de Astro sobre Markdown y MDX](https://docs.astro.build/es/guides/markdown-content/)
- [Documentación @astrojs/
mdx](https://docs.astro.build/es/guides/integrations-guide/mdx/#why-mdx)
- [Guía de MDX](https://mdxjs.com/docs/)
- [Ejemplo de blog con Astro y MDX](https://github.com/withastro/astro/tree/main/examples/blog)
- [Sintaxis Markdown](https://www.markdownguide.org/basic-syntax/)

# 2. Layouts para markdown

Astro permite definir layouts personalizados para archivos Markdown, facilitando la reutilización de estructuras y estilos en múltiples páginas de contenido.

## ¿Qué es un layout?

Un layout es un componente Astro (`.astro`) que define la estructura base de una página. Los archivos Markdown pueden especificar qué layout usar mediante el frontmatter.

**Ejemplo de layout básico (`src/layouts/BlogLayout.astro`):**
```astro
---
const { title, date } = Astro.props;
---
<html>
    <body>
        <article>
            <h1>{title}</h1>
            <p>{date}</p>
            <slot />
        </article>
    </body>
</html>
```

## Usar un layout en un archivo Markdown

Agrega el campo `layout` en el frontmatter del archivo Markdown para asociarlo a un layout:

```markdown
---
title: "Mi primer post"
date: "2024-06-01"
layout: ../layouts/BlogLayout.astro
---

Este es el contenido de mi post.
```

Astro renderizará el contenido Markdown dentro del layout especificado, permitiendo mantener un diseño consistente en todas las páginas.

**Más información:**  
- [Layouts en Astro](https://docs.astro.build/es/guides/markdown-content/#layouts)

# 3. Astro Glob y Props

Astro proporciona la función `Astro.glob()` para importar múltiples archivos de contenido (como Markdown o MDX) de forma dinámica. Esto es útil para crear listados de posts, portafolios u otras colecciones de páginas.

## ¿Cómo funciona Astro.glob?

`Astro.glob()` recibe una ruta con comodines (wildcards) y retorna un array de módulos que coinciden con el patrón.

**Ejemplo: importar todos los posts Markdown de una carpeta**

```js
// src/pages/blog.astro
const posts = await Astro.glob('../posts/*.md');
```

Cada elemento del array contiene los datos del frontmatter y el contenido renderizado del archivo Markdown.

## Uso típico en una página de listado

```astro
---
const posts = await Astro.glob('../posts/*.md');
---

<ul>
    {posts.map(post => (
        <li>
            <a href={post.url}>{post.frontmatter.title}</a>
        </li>
    ))}
</ul>
```

Esto permite generar automáticamente un listado de enlaces a todos los posts.

**Más información:**  
- [Astro.glob() en la documentación oficial](https://docs.astro.build/es/reference/api-reference/#astroglob)

# 4. Astro Collections

Astro Collections es una funcionalidad que permite definir y validar esquemas para tus archivos de contenido (como Markdown o MDX) usando Zod u otras librerías de validación. Esto ayuda a mantener la consistencia y seguridad de los datos en tus colecciones de contenido.

## ¿Qué es una colección?

Una colección es un grupo de archivos de contenido que comparten un esquema de frontmatter. Por ejemplo, puedes tener una colección de posts de blog donde cada archivo debe tener un título, fecha y descripción.

## Configuración de una colección

1. **Instala Zod (si no lo tienes):**
    ```bash
    pnpm add zod
    ```

2. **Define la colección en `src/content/config.ts`:**
    ```js
    import { defineCollection, z } from 'astro:content';

    const blogCollection = defineCollection({
      schema: z.object({
         title: z.string(),
         date: z.string(),
         description: z.string().optional(),
      }),
    });

    export const collections = {
      blog: blogCollection,
    };
    ```

3. **Crea archivos en la carpeta `src/content/blog/`:**
    ```markdown
    ---
    title: "Mi primer post"
    date: "2024-06-01"
    description: "Introducción a Astro Collections"
    ---

    Este es el contenido de mi post.
    ```

## Uso de colecciones en tus páginas

Puedes importar y listar los archivos de una colección usando `getCollection`:

```astro
---
import { getCollection } from 'astro:content';
const posts = await getCollection('blog');
---

<ul>
  {posts.map(post => (
     <li>
        <a href={`/blog/${post.slug}`}>{post.data.title}</a>
     </li>
  ))}
</ul>
```

Esto asegura que todos los archivos cumplen con el esquema definido y facilita el manejo de grandes volúmenes de contenido.

**Más información:**  
- [Astro Content Collections](https://docs.astro.build/es/guides/content-collections/)
- [Validación de esquemas con Zod](https://zod.dev/)

# 5. Image Component

Astro incluye un componente especial llamado [`<Image />`](https://docs.astro.build/es/guides/images/) que permite optimizar y servir imágenes de manera eficiente. Este componente realiza optimizaciones como redimensionamiento, cambio de formato y lazy loading automáticamente.

## ¿Por qué usar el componente Image?

- Optimiza imágenes en tiempo de compilación.
- Soporta formatos modernos como WebP y AVIF.
- Genera atributos `srcset` y `sizes` automáticamente.
- Mejora el rendimiento y la puntuación en Lighthouse.

## Ejemplo básico de uso

```astro
---
import { Image } from 'astro:assets';
---

<Image
    src="../assets/ejemplo.jpg"
    alt="Descripción de la imagen"
    width={800}
    height={600}
/>
```

- `src`: Ruta de la imagen (puede ser local o remota).
- `alt`: Texto alternativo para accesibilidad.
- `width` y `height`: Dimensiones de la imagen (recomendado para evitar CLS).

## Opciones adicionales

Puedes personalizar el formato de salida, calidad y otros parámetros:

```astro
<Image
    src="../assets/ejemplo.jpg"
    alt="Imagen optimizada"
    width={400}
    height={300}
    format="webp"
    quality={80}
/>
```

## Más información

- [Guía oficial de imágenes en Astro](https://docs.astro.build/es/guides/images/)
- [Referencia del componente Image](https://docs.astro.build/en/reference/api-reference/#image)