# Bike & Fit Store - Sitio demo ecommerce

Sitio estático ficticio para demostraciones comerciales.

## Características

- Home
- Catálogo de productos
- Ficha de producto
- Carrito simulado con `localStorage`
- Checkout ficticio
- Página de ayuda y consulta de pedidos demo
- Fotos reales externas cargadas desde LoremFlickr/Flickr con parámetros estables `lock`

## Pedidos demo

- `ORD-1027`: confirmado, en preparación
- `ORD-1041`: enviado
- `ORD-1088`: pendiente de pago

## Publicación en GitHub Pages

1. Crear un repositorio nuevo en GitHub.
2. Subir todos los archivos de esta carpeta.
3. Ir a `Settings > Pages`.
4. En `Build and deployment`, seleccionar `Deploy from a branch`.
5. Elegir rama `main` y carpeta `/root`.
6. Guardar.

La URL quedará similar a:

`https://usuario.github.io/nombre-del-repo/`

## Nota sobre imágenes

Las imágenes de producto se cargan desde URLs externas de LoremFlickr/Flickr para que la demo se vea más realista sin incluir imágenes generadas artificialmente.

Las URLs están en `data.js`, campo `imageUrl`. Para una demo final comercial, podés reemplazarlas por fotos propias o por fotos exactas de proveedor.
