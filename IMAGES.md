# Imágenes del sitio

El sitio usa fotos reales externas en el campo `imageUrl` de `data.js`.

Ejemplo:

```js
{
  id: "bike-xc-29",
  name: "Bicicleta MTB XC 29",
  imageUrl: "https://loremflickr.com/900/650/mountain-bike,bicycle/all?lock=1027"
}
```

Para usar fotos propias:

1. Copiar las imágenes dentro de `/images`.
2. Cambiar `imageUrl` por una ruta local, por ejemplo:
   `"imageUrl": "images/mi-producto.jpg"`
3. Subir nuevamente el sitio a GitHub Pages.
