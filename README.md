# 💕 Página para Nat — GitHub Pages

## 1. Fotos
Crea la carpeta `fotos` y coloca exactamente estos archivos:

- - foto1.jpeg
- foto2.jpeg
- foto3.jpeg
- foto4.jpeg
- foto5.jpeg
- foto6.jpeg

Puedes usar `.png` si cambias las extensiones en `index.html`.

## 2. Año del contador
En `script.js`, busca:

```js
const startDate = new Date(2026, 1, 3, 0, 0, 0);
```

El mes usa `0 = enero`, `1 = febrero`, etc.

## 3. Música
El sitio está preparado para reproducir música después de pulsar "Abrir". 
Si tienes un archivo de audio que puedes usar legalmente, ponlo en:

`musica/young-folks.mp3`

y descomenta la etiqueta `<audio>` en `index.html`.

No incluyo la canción comercial directamente por derechos de autor.

## 4. Publicar con GitHub Pages

1. En GitHub crea un repositorio, por ejemplo `para-nat`.
2. Sube `index.html`, `style.css`, `script.js`, `README.md` y la carpeta `fotos`.
3. En el repositorio entra a **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Elige `main` y `/ (root)`.
6. Guarda.
7. GitHub te dará una dirección parecida a:
   `https://TU-USUARIO.github.io/para-nat/`

## 5. Detalle importante
La página funciona como sitio estático: no necesita servidor, base de datos ni backend.
