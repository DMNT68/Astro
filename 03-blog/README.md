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