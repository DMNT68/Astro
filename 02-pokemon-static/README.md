# SECCION 2: Rutas Dinámicas y paginación

# 5. Transiciones con `transition:name` en Astro

Astro permite agregar animaciones y transiciones a tus componentes utilizando la directiva especial `transition:name`. Esta directiva facilita la aplicación de animaciones CSS cuando los elementos entran o salen del DOM.

## ¿Cómo funciona `transition:name`?

La directiva `transition:name` aplica automáticamente clases CSS con sufijos como `-enter`, `-enter-active`, `-leave`, y `-leave-active` al elemento, según su ciclo de vida. Debes definir estas clases en tu CSS para controlar la animación.

Puedes personalizar el nombre de la transición usando una expresión, por ejemplo:

```astro
---
const name = "pokemon";
---

<img src="..." alt="..." transition:name={`${name}-image`} />
```

En este caso, Astro aplicará clases como `pokemon-image-enter`, `pokemon-image-enter-active`, etc., que puedes definir en tu CSS:

```css
.pokemon-image-enter {
    opacity: 0;
    transform: scale(0.95);
}
.pokemon-image-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 0.3s, transform 0.3s;
}
.pokemon-image-leave {
    opacity: 1;
    transform: scale(1);
}
.pokemon-image-leave-active {
    opacity: 0;
    transform: scale(0.95);
    transition: opacity 0.3s, transform 0.3s;
}
```

## Ejemplo básico de uso

Supón que quieres animar la aparición de un mensaje:

```astro
---
const mostrar = true;
---

{mostrar && (
    <div transition:name="fade">
        ¡Hola, soy un mensaje animado!
    </div>
)}
```

Y en tu CSS:

```css
.fade-enter {
    opacity: 0;
    transform: translateY(10px);
}
.fade-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.3s, transform 0.3s;
}
.fade-leave {
    opacity: 1;
    transform: translateY(0);
}
.fade-leave-active {
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.3s, transform 0.3s;
}
```

## Ventajas

- Permite animaciones declarativas y reutilizables.
- Se integra fácilmente con utilidades CSS o frameworks como Tailwind (usando `@apply`).

## Recursos

- [Documentación oficial: Transitions](https://docs.astro.build/en/guides/animations/#transitions)
- [Ejemplo de transición en Astro](https://docs.astro.build/en/guides/animations/)

Con `transition:name`, puedes mejorar la experiencia de usuario añadiendo animaciones suaves y controladas a tus componentes Astro.
