# SECCION 2: Rutas Dinámicas y paginación

# 1. Intregarciones

Astro permite integrar fácilmente frameworks y herramientas populares mediante su sistema de integraciones. Algunas de las integraciones más comunes incluyen:

-   **@astrojs/react**: Permite usar componentes de React dentro de proyectos Astro.
-   **@astrojs/vue**: Habilita el uso de componentes Vue.
-   **@astrojs/svelte**: Para trabajar con componentes Svelte.
-   **@astrojs/tailwind**: Integra Tailwind CSS para estilos rápidos y personalizables.
-   **@astrojs/image**: Optimización automática de imágenes.

Para instalar una integración, utiliza el comando:

```bash
npx astro add <nombre-de-la-integracion>
```

Por ejemplo, para agregar React:

```bash
npx astro add react
```

Las integraciones amplían las capacidades de Astro y permiten combinar lo mejor de diferentes tecnologías en un solo proyecto.

## Integración de Tailwind CSS en Astro

Tailwind CSS es un framework de utilidades para estilos rápidos y consistentes. Astro facilita su integración mediante la extensión oficial `@astrojs/tailwind`.

### Pasos para integrar Tailwind CSS

1. **Instala la integración:**

    ```bash
    npx astro add tailwind
    ```

    ```bash
    pnpm astro add tailwind
    ```

    Este comando configura automáticamente los archivos necesarios (`tailwind.config.cjs`, `postcss.config.cjs`) y actualiza tu proyecto para usar Tailwind.

2. **Usa las clases de Tailwind en tus componentes:**

    Ahora puedes utilizar clases de Tailwind directamente en tus archivos `.astro`, `.jsx`, `.tsx`, etc.

    ```jsx
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Botón Tailwind
    </button>
    ```

3. **Personaliza la configuración:**

    Modifica `tailwind.config.cjs` para agregar temas, plugins o extender utilidades según tus necesidades.

### Recursos útiles

-   [Documentación oficial de Tailwind CSS](https://tailwindcss.com/docs/installation)
-   [Guía de integración de Tailwind en Astro](https://docs.astro.build/en/guides/styling/#tailwind)

Con esta integración, puedes aprovechar todo el poder de Tailwind CSS en tus proyectos Astro de manera sencilla y eficiente.



# 2. Peticiones HTTP en tiempo de construcción
Astro permite realizar peticiones HTTP en tiempo de construcción (build time) para obtener datos y generar páginas estáticas dinámicamente. Esto es útil para consumir APIs, cargar datos externos o generar contenido basado en información remota.

## ¿Cómo hacer peticiones HTTP en Astro?

Puedes usar cualquier librería de HTTP como `fetch`, `axios` o incluso el API nativo de Node.js. Lo más común es usar `fetch`, ya que está disponible globalmente en Astro.

### Ejemplo básico usando `fetch`

Supón que quieres obtener una lista de Pokémon desde una API pública y mostrarla en una página:

```astro
---
const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
const { results: pokemons } = await response.json();
---

<ul>
    {pokemons.map(pokemon => (
        <li>{pokemon.name}</li>
    ))}
</ul>
```

> El código dentro del bloque `---` se ejecuta en el servidor durante la construcción del sitio.

### Ventajas

- **SEO**: Los datos ya están presentes en el HTML generado.
- **Rendimiento**: No hay llamadas a la API en el cliente.
- **Flexibilidad**: Puedes combinar datos de múltiples fuentes.

### Consideraciones

- Los datos se obtienen solo en el momento de la construcción. Si la API cambia, debes volver a construir el sitio para ver los cambios.
- Para datos que cambian frecuentemente, considera usar rutas dinámicas o endpoints de servidor.

### Recursos

- [Documentación oficial: Fetching Data](https://docs.astro.build/en/guides/data-fetching/)
- [Ejemplo de integración con APIs](https://docs.astro.build/en/guides/integrations-guide/)

Con este enfoque, puedes crear sitios estáticos potentes y dinámicos usando Astro y cualquier fuente de datos externa.


# 3. Páginas Dinámicas y Argumentos por URL

Astro permite crear páginas dinámicas utilizando archivos con nombres entre corchetes en la carpeta `src/pages`. Esto es útil para generar rutas basadas en parámetros, como detalles de un Pokémon por su nombre o ID.

## ¿Cómo funcionan las páginas dinámicas?

Si creas un archivo como `src/pages/pokemon/[id].astro`, Astro generará una página para cada valor de `id` que definas en el proceso de construcción.

### Ejemplo: Página dinámica por ID

Supón que quieres mostrar información de un Pokémon según su ID en la URL (`/pokemon/1`, `/pokemon/2`, etc.):

```astro
---
// src/pages/pokemon/[id].astro
const { id } = Astro.params;
const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
const pokemon = await response.json();
---

<h1>{pokemon.name}</h1>
<img src={pokemon.sprites.front_default} alt={pokemon.name} />
```

- `Astro.params.id` contiene el valor dinámico de la URL.

### Generación de rutas dinámicas

Para que Astro genere páginas para cada Pokémon, debes exportar una función `getStaticPaths`:

```astro
---
export async function getStaticPaths() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const { results } = await response.json();

    return results.map((pokemon, index) => ({
        params: { id: (index + 1).toString() }
    }));
}
---
```

Esto le indica a Astro qué rutas debe construir en tiempo de build.

### Recursos útiles

- [Documentación oficial: Dynamic Routes](https://docs.astro.build/en/core-concepts/routing/#dynamic-routes)
- [Uso de parámetros en rutas](https://docs.astro.build/en/core-concepts/routing/#route-parameters)

Con las páginas dinámicas y los argumentos por URL, puedes crear sitios con rutas personalizadas y contenido generado a partir de datos externos.