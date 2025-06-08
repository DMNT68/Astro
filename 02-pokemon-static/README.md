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
