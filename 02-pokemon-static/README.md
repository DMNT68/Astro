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

-   **SEO**: Los datos ya están presentes en el HTML generado.
-   **Rendimiento**: No hay llamadas a la API en el cliente.
-   **Flexibilidad**: Puedes combinar datos de múltiples fuentes.

### Consideraciones

-   Los datos se obtienen solo en el momento de la construcción. Si la API cambia, debes volver a construir el sitio para ver los cambios.
-   Para datos que cambian frecuentemente, considera usar rutas dinámicas o endpoints de servidor.

### Recursos

-   [Documentación oficial: Fetching Data](https://docs.astro.build/en/guides/data-fetching/)
-   [Ejemplo de integración con APIs](https://docs.astro.build/en/guides/integrations-guide/)

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

-   `Astro.params.id` contiene el valor dinámico de la URL.

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

-   [Documentación oficial: Dynamic Routes](https://docs.astro.build/en/core-concepts/routing/#dynamic-routes)
-   [Uso de parámetros en rutas](https://docs.astro.build/en/core-concepts/routing/#route-parameters)

Con las páginas dinámicas y los argumentos por URL, puedes crear sitios con rutas personalizadas y contenido generado a partir de datos externos.

# 4. Estilo condicional

Astro permite aplicar estilos condicionales a los elementos de tus componentes utilizando expresiones de JavaScript para modificar las clases o estilos en función de datos o estados.

## Ejemplo: Cambiar clase según condición

Supón que quieres resaltar un Pokémon si es de tipo "fire":

```astro
---
const tipo = "fire";
const esFuego = tipo === "fire";
---

<div class={esFuego ? "bg-red-500 text-white" : "bg-gray-200"}>
    Pokémon tipo {tipo}
</div>
```

En este ejemplo, si el tipo es "fire", el `div` tendrá un fondo rojo; de lo contrario, será gris.

## Ejemplo: Estilo en línea condicional

También puedes modificar estilos en línea:

```astro
---
const activo = true;
---

<button style={`opacity: ${activo ? 1 : 0.5};`}>
    Botón {activo ? "Activo" : "Inactivo"}
</button>
```

## Uso con Tailwind CSS

Si usas Tailwind, puedes combinar clases condicionalmente:

```astro
---
const seleccionado = true;
---

<button class={`px-4 py-2 rounded ${seleccionado ? "bg-blue-600" : "bg-gray-400"}`}>
    {seleccionado ? "Seleccionado" : "No seleccionado"}
</button>
```

## Recursos

-   [Documentación oficial: Styling](https://docs.astro.build/en/guides/styling/)
-   [Guía de clases condicionales en Astro](https://docs.astro.build/en/guides/styling/#conditional-classes)

Esto te permite crear interfaces dinámicas y responsivas fácilmente en Astro.

## Uso de `class:list` en Astro

Astro ofrece la directiva especial `class:list` para gestionar clases condicionales de manera más limpia y legible en tus componentes. Esta directiva permite pasar un objeto donde las claves son los nombres de las clases y los valores son expresiones booleanas que determinan si la clase se aplica o no.

## Ejemplo básico

Supón que quieres aplicar la clase `activo` solo si una variable es verdadera:

```astro
---
const activo = true;
---

<button class:list={{ 'activo': activo, 'inactivo': !activo }}>
    {activo ? "Activo" : "Inactivo"}
</button>
```

En este ejemplo, el botón tendrá la clase `activo` si la variable es `true`, o `inactivo` si es `false`.

## Ejemplo con Tailwind CSS

Puedes combinar `class:list` con utilidades de Tailwind para aplicar estilos condicionales:

```astro
---
const esFuego = true;
---

<div class:list={{
    'bg-red-500 text-white': esFuego,
    'bg-gray-200': !esFuego
}}>
    Pokémon tipo {esFuego ? "Fuego" : "Otro"}
</div>
```

## Ventajas de `class:list`

-   Código más limpio y fácil de mantener.
-   Evita concatenaciones de strings y expresiones complejas en el atributo `class`.
-   Permite combinar múltiples condiciones de forma declarativa.

## Recursos

-   [Documentación oficial: class:list](https://docs.astro.build/en/guides/styling/#classlist)

Utiliza `class:list` para mejorar la legibilidad y flexibilidad de tus componentes Astro al manejar clases condicionales.

# 5. View transitions + Name Transitions

Astro soporta transiciones de nombre (`name transitions`) para animar elementos específicos entre rutas, utilizando el atributo `transition:name`. Esto permite crear animaciones suaves y personalizadas al navegar entre páginas, especialmente útil para listas o detalles de elementos como imágenes de Pokémon.

## ¿Cómo usar `transition:name`?

El atributo `transition:name` acepta una expresión que define el nombre de la transición. Por ejemplo, si tienes una variable `name` que representa el nombre de un Pokémon, puedes usar:

```astro
<img
    src={pokemon.sprites.front_default}
    alt={pokemon.name}
    transition:name={`${name}-image`}
/>
```

Esto asigna un identificador único a la transición basada en el nombre del Pokémon, permitiendo que Astro reconozca y anime la imagen correspondiente al cambiar de página.

## Ejemplo completo

Supón que navegas de una lista de Pokémon a la página de detalles. Puedes aplicar la transición así:

```astro
---
const { name } = Astro.params;
const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
const pokemon = await response.json();
---

<img
    src={pokemon.sprites.front_default}
    alt={pokemon.name}
    transition:name={`${name}-image`}
/>
```

Asegúrate de usar el mismo valor de `transition:name` en ambos componentes (lista y detalle) para que la animación funcione correctamente.

## Recursos

-   [Documentación oficial: View Transitions](https://docs.astro.build/en/guides/view-transitions/)
-   [Ejemplo de transición de nombre](https://docs.astro.build/en/guides/view-transitions/#named-transitions)

Las name transitions permiten crear experiencias de usuario más fluidas y atractivas en tus aplicaciones Astro.

# 6. Paginación Estática

Astro facilita la creación de paginación estática usando la función utilitaria `paginate()` del paquete `astro:pagination`. Esto permite dividir grandes conjuntos de datos en páginas individuales generadas en tiempo de construcción.

## ¿Cómo funciona la paginación con `paginate()`?

La función `paginate()` toma un array de elementos y los distribuye en páginas, devolviendo los datos y la información de navegación para cada página.

### Ejemplo básico de paginación

Supón que tienes una lista de Pokémon y quieres mostrar 5 por página:

```astro
---
import { paginate } from 'astro:pagination';

export async function getStaticPaths() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
    const { results: pokemons } = await response.json();

    return paginate(pokemons, { pageSize: 5 });
}

const { data: pokemons, currentPage, totalPages } = Astro.props;
---

<ul>
    {pokemons.map(pokemon => (
        <li>{pokemon.name}</li>
    ))}
</ul>

<nav>
    {Array.from({ length: totalPages }).map((_, i) => (
        <a
            href={i === 0 ? '/pokemons/' : `/pokemons/${i + 1}/`}
            aria-current={currentPage === i + 1 ? 'page' : undefined}
        >
            {i + 1}
        </a>
    ))}
</nav>
```

-   `paginate()` divide el array en páginas y genera rutas estáticas para cada una.
-   En el template, puedes mostrar los elementos de la página actual y los enlaces de navegación.

### Recursos útiles

-   [Documentación oficial: Pagination](https://docs.astro.build/en/guides/routing/#pagination)

Con `paginate()`, puedes crear fácilmente listados paginados y optimizados para SEO en tus proyectos Astro.

# SECCION 3: Dinamismo a nuestro sitio estático

# 1. Indicadores de ruta activa

Astro proporciona la propiedad `Astro.url.pathname` para obtener la ruta actual dentro de tus componentes. Esto es útil para resaltar enlaces activos en la navegación o mostrar indicadores de ruta activa.

## Ejemplo: Resaltar enlace activo en la navegación

Supón que tienes una barra de navegación y quieres aplicar una clase especial al enlace de la página actual:

```astro
---
const currentPath = Astro.url.pathname;
---

<nav>
    <a
        href="/"
        class:list={{ 'text-blue-600 font-bold': currentPath === '/' }}
    >
        Inicio
    </a>
    <a
        href="/pokemons/"
        class:list={{ 'text-blue-600 font-bold': currentPath.startsWith('/pokemons') }}
    >
        Pokémons
    </a>
</nav>
```

En este ejemplo, el enlace correspondiente a la ruta actual recibirá estilos adicionales, permitiendo al usuario identificar en qué sección se encuentra.

## Recursos

-   [Astro.url en la documentación oficial](https://docs.astro.build/en/reference/api-reference/#astrourl)

Utiliza `Astro.url.pathname` para crear menús de navegación dinámicos y mejorar la experiencia de usuario en tus sitios Astro.

# 2. Uso de Astro Icons

Astro Icons es una integración que permite utilizar fácilmente miles de iconos SVG de diferentes bibliotecas populares directamente en tus componentes Astro, sin necesidad de instalar paquetes adicionales de iconos.

## Instalación de Astro Icons

Para agregar Astro Icons a tu proyecto, ejecuta:

```bash
npx astro add astro-icon
```

Esto instalará la integración y configurará tu proyecto automáticamente.

## Uso básico

Una vez instalada la integración, puedes importar y usar iconos en tus archivos `.astro` de la siguiente manera:

```astro
---
import { Icon } from 'astro-icon';
---

<Icon name="mdi:pokeball" size="2em" />
```

-   El atributo `name` define el icono a mostrar, usando el prefijo de la colección (por ejemplo, `mdi` para Material Design Icons).
-   El atributo `size` permite ajustar el tamaño del icono.

## Personalización

Puedes personalizar el color, tamaño y otros atributos SVG directamente en el componente:

```astro
<Icon name="mdi:fire" size="32" color="red" />
```

## Recursos útiles

-   [Astro Icon documentación](https://www.astroicon.dev/getting-started/)
-   [Colecciones de iconos soportadas](https://icones.js.org/)
-   [Iconify](https://icon-sets.iconify.design/)

Astro Icons facilita la inclusión de iconografía moderna y personalizable en tus proyectos Astro, mejorando la apariencia visual de tus interfaces.

# 3. Client Side Scripting en Astro (JavaScript y TypeScript puros)

Astro está optimizado para sitios estáticos, pero puedes agregar interactividad en el cliente usando JavaScript o TypeScript puro, sin necesidad de frameworks como React, Vue o Svelte.

## ¿Cómo agregar scripts del lado del cliente?

Puedes incluir scripts directamente en tus archivos `.astro` usando la etiqueta `<script>`. Estos scripts se ejecutan en el navegador y permiten agregar lógica interactiva básica.

### Ejemplo básico con JavaScript

```astro
<script>
    document.addEventListener('astro:page-load', () => {
        function saludar() {
            alert('¡Hola desde el cliente!');
        }
        const btn = document.getElementById('saludar-btn');
        btn?.addEventListener('click', saludar);
    });
</script>

<button id="saludar-btn">Saludar</button>
```

En este ejemplo, el evento `astro:page-load` asegura que el script se ejecute cuando la página esté completamente cargada en Astro, ideal para páginas que usan navegación SPA.

### Ejemplo con TypeScript

Astro permite usar TypeScript en los scripts agregando el atributo `lang="ts"`:

```astro
<script lang="ts">
    document.addEventListener('astro:page-load', () => {
        function sumar(a: number, b: number): number {
            return a + b;
        }
        const btn = document.getElementById('sumar-btn');
        btn?.addEventListener('click', () => {
            alert(sumar(2, 3));
        });
    });
</script>

<button id="sumar-btn">Sumar 2 + 3</button>
```

### Buenas prácticas

-   Usa el evento `astro:page-load` para asegurar que el DOM esté listo, especialmente si usas navegación SPA.
-   Usa módulos (`<script type="module">`) para organizar mejor tu código y evitar conflictos globales.
-   Puedes importar archivos `.js` o `.ts` externos si lo prefieres.

### Ejemplo usando un archivo externo

```astro
<script type="module" src="/scripts/mi-script.js"></script>
```

## Recursos útiles

-   [Documentación oficial: Client-side scripts](https://docs.astro.build/en/guides/client-side-scripts/)
-   [Uso de TypeScript en Astro](https://docs.astro.build/en/guides/typescript/)

Con JavaScript o TypeScript puro puedes añadir interactividad ligera y personalizada a tus proyectos Astro, manteniendo el rendimiento y la simplicidad.
