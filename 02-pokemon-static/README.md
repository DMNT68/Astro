# SECCION 2: Rutas Dinámicas y paginación

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

- Usa el evento `astro:page-load` para asegurar que el DOM esté listo, especialmente si usas navegación SPA.
- Usa módulos (`<script type="module">`) para organizar mejor tu código y evitar conflictos globales.
- Puedes importar archivos `.js` o `.ts` externos si lo prefieres.

### Ejemplo usando un archivo externo

```astro
<script type="module" src="/scripts/mi-script.js"></script>
```

## Recursos útiles

- [Documentación oficial: Client-side scripts](https://docs.astro.build/en/guides/client-side-scripts/)
- [Uso de TypeScript en Astro](https://docs.astro.build/en/guides/typescript/)

Con JavaScript o TypeScript puro puedes añadir interactividad ligera y personalizada a tus proyectos Astro, manteniendo el rendimiento y la simplicidad.
