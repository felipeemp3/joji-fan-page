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

---

## 🧩 Estructura del proyecto

joji-page/
│
├── app/
│   ├── api/
│   │   ├── spotify/
│   │   │   ├── token/
│   │   │   │   └── route.ts       # Devuelve el token de Spotify
│   │   │   └── tracks/
│   │   │       └── route.ts       # Devuelve los top tracks de Joji
│   │   └── hello/route.ts         # (Opcional) Ejemplo de endpoint simple
│   │
│   ├── layout.tsx                  # Layout principal de toda la app
│   ├── page.tsx                    # Página principal (Home)
│   ├── globals.css                 # Estilos globales
│   │
│   ├── (sections)/                 # 🧩 Secciones grandes de la página
│   │   ├── hero-section.tsx        # Encabezado principal con imagen de Joji
│   │   ├── biography-section.tsx   # Biografía con texto y foto
│   │   ├── top-tracks-section.tsx  # Lista de Top Tracks (con Spotify API)
│   │   └── albums-section.tsx      # Visualización de álbumes
│
├── components/
│   ├── ui/                         # 🌈 Componentes reutilizables y visuales
│   │   ├── music-player.tsx
│   │   ├── footer.tsx
│   │   ├── navbar.tsx
│   │   └── theme-provider.tsx
│   │
│   └── layout/                     # 🧱 Componentes estructurales
│       ├── container.tsx
│       └── section-wrapper.tsx
│
├── hooks/                          # 🪝 Custom hooks (si los necesitas)
│   └── useSpotifyToken.ts
│
├── lib/                            # 🧠 Lógica auxiliar (helpers o utils)
│   ├── spotify.ts                   # Funciones para interactuar con Spotify API
│   └── format.ts                    # Funciones para formato de texto o fecha
│
├── public/
│   ├── audio/                      # 🎵 Archivos locales MP3
│   │   ├── glimpse-of-us.mp3
│   │   ├── slow-dancing.mp3
│   │   └── run.mp3
│   │
│   ├── images/                     # 🖼️ Portadas y fotos
│   │   ├── joji-ballads-1.jpg
│   │   ├── joji-nectar.jpg
│   │   ├── joji-smithereens.jpg
│   │   └── placeholder-logo.png
│   │
│   └── favicon.ico
│
├── styles/
│   ├── globals.css                 # Estilos base
│   └── animations.css              # (Opcional) Efectos personalizados
│
├── .env.local                      # Variables de entorno (Spotify)
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md


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
