# 🎧 Joji Music Page

Un proyecto web desarrollado con **Next.js 16**, **TypeScript** y **TailwindCSS**, que muestra una página dedicada al artista **Joji**, incluyendo su biografía, álbumes y top tracks obtenidos desde la API de **Spotify**.

---

## 🚀 Tecnologías principales

- Next.js 16
- React 19
- TypeScript
- TailwindCSS 4
- Spotify Web API
- Radix UI
- Recharts
- Lucide React


## ⚙️ Instalación

1. Clona el repositorio  
   git clone https://github.com/tuusuario/joji-page.git
   cd joji-page

2. Instala las dependencias  
   npm install

3. Crea el archivo `.env.local` en la raíz del proyecto:

   SPOTIFY_CLIENT_ID=tu_client_id
   SPOTIFY_CLIENT_SECRET=tu_client_secret

   🔑 Puedes obtener estas claves desde https://developer.spotify.com/dashboard

4. Inicia el servidor de desarrollo  
   npm run dev

   La aplicación se ejecutará en http://localhost:3000

---

## 🔗 Rutas principales

| Ruta | Descripción |
|------|--------------|
| `/` | Página principal con biografía, reproductor y álbumes |
| `/api/spotify/token` | Obtiene un token de acceso desde Spotify |
| `/api/tracks` | Devuelve los top tracks de Joji desde Spotify |

---

## 🎵 Funcionalidades

- 📖 Biografía del artista Joji  
- 💿 Visualización de álbumes con portadas  
- 🎧 Reproductor de música local  
- 🚀 Conexión a la API de Spotify para mostrar top tracks actualizados  
- 🧠 UI moderna y responsiva con Tailwind y Radix

---

## 🛠 Scripts disponibles

npm run dev     # Ejecuta el servidor de desarrollo
npm run build   # Genera el build de producción
npm run start   # Inicia la app en modo producción
npm run lint    # Revisa errores de código

---

## 🧠 Notas

- Si aparece el error `404 /api/tracks`, verifica que el archivo esté en:  
  `app/api/tracks/route.ts`
- Si los top tracks no se renderizan correctamente, revisa que uses propiedades de texto (por ejemplo `track.name` o `track.album.name`).

---

## 🧑‍💻 Autor

Desarrollado por **Andrés Felipe Montiel G.**  
Proyecto educativo y experimental inspirado en la música de **Joji**.
