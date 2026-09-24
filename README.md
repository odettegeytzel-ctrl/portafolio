# Portafolio · Odette Vazquez

Portafolio web de desarrolladora Full-Stack junior. Muestra proyectos, stack, experiencia y actividad de GitHub en vivo.

## Estructura

```
index.html                Página principal (navbar, secciones, lógica de GitHub)
RemoteAdminCase.dc.html   Caso de estudio de RemoteAdmin: capturas y diagrama interactivo
ProjectCard.dc.html       Tarjeta reutilizable de proyecto
data/portfolio-data.js    Datos editables: perfil, stack, proyectos, experiencia, aprendizaje
assets/                   CV, favicon y capturas de pantalla
image-slot.js             Espacio de imagen para proyectos sin captura
support.js                Runtime de los componentes (no editar)
```

## Ejecutar en local

La página importa módulos y consulta la API de GitHub, así que hay que servirla desde un servidor local. Abrir el archivo con doble clic no funciona.

**VS Code:** instala la extensión **Live Server**, haz clic derecho en `index.html` y elige **Open with Live Server**.

**Terminal:**
```bash
python -m http.server 8000
# abre http://localhost:8000
```

## Editar contenido

Todo el contenido está en `data/portfolio-data.js`:

- **profile**: `email`, `linkedin`, `cv` (ruta al PDF) y `githubUser`.
- **stack**: agrega tecnologías a una categoría o crea una categoría nueva.
- **projects**: agrega un proyecto así:
  ```js
  { name: 'Mi App', desc: 'Qué es', problem: 'Qué resuelve',
    tech: ['React', 'Vercel'], demoUrl: 'https://…',
    repoUrl: 'https://github.com/…', image: 'assets/mi-app.jpg' }
  ```
  Los botones "Ver proyecto" y "GitHub" solo aparecen si el enlace existe.
- **experience**: agrega elementos `{ title, detail }` a cualquier grupo.
- **learning**: tecnologías que estás aprendiendo.

Para actualizar el CV, reemplaza `assets/cv-odette-vazquez.pdf` con el mismo nombre.

## RemoteAdmin

El código de RemoteAdmin es privado. La sección muestra capturas en `assets/remoteadmin/`, con los datos del equipo (nombre, usuario, IPs) reemplazados por valores genéricos. Si en algún momento hay demo o repo público, pásalos como `demo-url` y `repo-url` en la etiqueta `<dc-import name="RemoteAdminCase">` de `index.html` y los botones aparecen solos.

## GitHub en vivo

La sección de actividad consulta `api.github.com` al cargar la página:

- Los lenguajes se calculan a partir de los repos públicos, sin forks.
- Los datos quedan en caché 6 horas en `localStorage` del visitante.
- Sin token, GitHub limita a ~60 peticiones por hora por IP. Si se supera, la sección muestra un aviso y el resto de la página sigue funcionando.

## Publicar en Vercel

1. Sube la carpeta a https://github.com/odettegeytzel-ctrl/portafolio.
2. En vercel.com, importa el repositorio (Framework: **Other**, sin build command).
3. Cada `git push` a `main` vuelve a publicar el sitio.

La imagen para compartir (`og:image`) apunta a la captura del dashboard en este repo, así que la vista previa funciona en LinkedIn y WhatsApp sin importar el dominio.
