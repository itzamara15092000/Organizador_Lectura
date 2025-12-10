# 📚 Leaftime - Agenda Literaria Personal

<div align="center">

  <p><strong>Organiza, rastrea y disfruta cada lectura</strong></p>
  
  ![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react)
  ![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js)
  ![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=flat-square&logo=mongodb)
  ![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)
</div>

---

## 🌟 Descripción

**Leaftime** es una aplicación web moderna y elegante diseñada para lectores apasionados que desean mantener un control completo de su biblioteca personal. Con una interfaz intuitiva y visual, puedes registrar tus libros, hacer seguimiento de tu progreso de lectura, clasificarlos por géneros y estados, y mantener un historial organizado de todas tus aventuras literarias.

### ✨ Características Principales

- 📖 **Gestión Completa de Libros**: Agrega, edita y elimina libros con información detallada
- 📊 **Dashboard Estadístico**: Visualiza tu progreso de lectura con gráficos y métricas
- 🏷️ **Clasificación por Géneros**: Fantasía, Ciencia Ficción, Romance, Terror, Aventura, Suspenso y No Ficción
- 📈 **Seguimiento de Progreso**: Registra páginas leídas con barra de progreso visual
- ⭐ **Sistema de Valoración**: Califica tus libros con estrellas (1-5)
- 📝 **Notas Personales**: Agrega comentarios y reflexiones sobre cada libro
- 📅 **Fechas de Lectura**: Registra cuándo iniciaste y terminaste cada libro
- 🖼️ **Portadas**: Guarda URLs de las portadas de tus libros
- 🎨 **Diseño Elegante**: Interfaz con tema café/crema, limpia y moderna
- 🔍 **Filtros Inteligentes**: Busca por género y estado de lectura

---

## 🚀 Estructura del Proyecto

```
Leaftime-LeeYOrganiza/
├── client/                      # Frontend React + Vite
│   ├── public/
│   │   ├── assets/             # Recursos estáticos
│   │   │   ├── css/           # Bootstrap, Font Awesome, estilos del template
│   │   │   ├── fonts/         # Tipografías
│   │   │   ├── images/        # Imágenes del landing y libros
│   │   │   └── js/            # jQuery, Owl Carousel, Slick Slider
│   │   └── index.html
│   ├── src/
│   │   ├── components/        # Componentes React
│   │   │   ├── BookForm.jsx   # Formulario de libros
│   │   │   ├── BookTable.jsx  # Tabla de libros
│   │   │   └── Sidebar.jsx    # Filtros laterales
│   │   ├── hooks/
│   │   │   └── useJQueryPlugins.js  # Hook para plugins jQuery
│   │   ├── pages/
│   │   │   ├── HomePage.jsx   # Landing page principal
│   │   │   └── BooksPage.jsx  # Dashboard de gestión
│   │   ├── App.jsx            # Router principal
│   │   ├── main.jsx           # Punto de entrada
│   │   └── styles.css         # Estilos globales del dashboard
│   ├── package.json
│   └── vite.config.js
│
└── server/                      # Backend Node.js + Express
    ├── models/
    │   └── Book.js             # Modelo de MongoDB
    ├── routes/
    │   └── books.js            # API endpoints
    ├── .env                    # Variables de entorno
    ├── server.js               # Servidor principal
    └── package.json
```

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 19.2.0**: Framework principal
- **Vite 7.2.5**: Build tool y dev server
- **React Router DOM 7.10.1**: Navegación SPA
- **Axios 1.13.2**: Cliente HTTP
- **jQuery 2.1.0**: Para plugins legacy (Owl Carousel, Slick Slider)
- **Bootstrap**: Grid system y componentes UI
- **Font Awesome**: Íconos

### Backend
- **Node.js**: Runtime de JavaScript
- **Express 4.18.2**: Framework web
- **MongoDB**: Base de datos NoSQL
- **Mongoose 7.0.0**: ODM para MongoDB
- **CORS**: Middleware para requests cross-origin
- **dotenv**: Gestión de variables de entorno

---

## 📋 Prerequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** v18 o superior ([Descargar](https://nodejs.org/))
- **MongoDB** Community Edition ([Descargar](https://www.mongodb.com/try/download/community)) o cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Git** ([Descargar](https://git-scm.com/))

---

## 🔧 Instalación

### 1. Clonar el Repositorio

```bash
git clone https://github.com/sergiodev3/organizador-lectura-app.git
cd organizador-lectura-app
```

### 2. Configurar el Backend

```bash
# Navegar a la carpeta server
cd server

# Instalar dependencias
npm install

# Crear archivo .env
# Copia el siguiente contenido:
PORT=4000
MONGODB_URI=mongodb://localhost:27017/leaftime-books

# Si usas MongoDB Atlas, usa tu connection string:
# MONGODB_URI=mongodb+srv://<usuario>:<password>@cluster.mongodb.net/leaftime-books
```

### 3. Configurar el Frontend

```bash
# Navegar a la carpeta client (desde la raíz del proyecto)
cd client

# Instalar dependencias
npm install
```

### 4. Iniciar MongoDB (si es local)

```bash
# Windows
mongod

# macOS/Linux
sudo systemctl start mongod
# o
brew services start mongodb-community
```

---

## 🚀 Ejecución

### Desarrollo

**Terminal 1 - Backend:**
```bash
cd server
npm start
# Servidor corriendo en http://localhost:4000
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
# Aplicación corriendo en http://localhost:5173
```

### Producción

```bash
# Build del frontend
cd client
npm run build

# El backend sirve los archivos estáticos
cd ../server
npm start
```

---

## 📱 Uso de la Aplicación

### Landing Page (/)
1. **Header**: Navegación con enlaces a secciones y "Mi Biblioteca"
2. **Hero Section**: Banner con slider de imágenes promocionales
3. **Sección Nosotros**: Información sobre Leaftime y su propósito
4. **Libros Destacados**: Carousel con los 6 libros #1 por género
5. **Call to Action**: Botón para comenzar a usar la biblioteca
6. **Footer**: Enlaces, redes sociales y copyright

### Dashboard de Libros (/books)
1. **Estadísticas**: 6 tarjetas con métricas de tu biblioteca
   - Total de libros
   - Por leer
   - Leyendo actualmente
   - Terminados
   - Pausados
   - Abandonados

2. **Filtros**: Sidebar con filtros por género y estado

3. **Gestión de Libros**:
   - Botón "Agregar Nuevo Libro" para abrir formulario
   - Tabla con todos los libros (portada, título, autor, páginas, progreso, estado, rating, notas)
   - Acciones: Editar y Eliminar

4. **Formulario**: 12 campos
   - Título, Autor, Páginas totales
   - Páginas actuales (con cálculo automático de progreso)
   - Año de publicación
   - Género (7 opciones)
   - Estado de lectura (5 opciones)
   - Rating con estrellas (0-5)
   - Notas personales
   - Fecha de inicio
   - Fecha de finalización
   - URL de portada

---

## 🎨 Personalización

### Cambiar Colores
Edita `client/src/styles.css` para modificar la paleta:
```css
/* Paleta actual café/crema */
--primary: #8b5e3c;
--primary-light: #a67c52;
--accent: #d4a574;
--background: #f5f1eb;
--white: #faf8f5;
```

### Cambiar Logo
Reemplaza `client/public/assets/images/klassy-logo.png` con tu logo (recomendado: 146px de ancho)

### Modificar Géneros
Edita `server/models/Book.js`:
```javascript
genre: {
  type: String,
  enum: ['Fantasía', 'Ciencia Ficción', 'Romance', 'Terror', 'Aventura', 'Suspenso', 'No Ficción'],
  required: true
}
```

---

## 🔌 API Endpoints

### Libros

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/api/books` | Obtener todos los libros (con filtros opcionales) |
| `GET` | `/api/books/stats/summary` | Obtener estadísticas |
| `GET` | `/api/books/:id` | Obtener un libro por ID |
| `POST` | `/api/books` | Crear un nuevo libro |
| `PUT` | `/api/books/:id` | Actualizar un libro |
| `DELETE` | `/api/books/:id` | Eliminar un libro |

### Ejemplo de Request

```javascript
// POST /api/books
{
  "title": "Cien Años de Soledad",
  "author": "Gabriel García Márquez",
  "pages": 471,
  "currentPage": 150,
  "published": 1967,
  "genre": "No Ficción",
  "status": "Leyendo",
  "rating": 5,
  "notes": "Una obra maestra del realismo mágico",
  "startDate": "2025-01-01",
  "coverImage": "https://example.com/cover.jpg"
}
```

---

## 🔮 Funcionalidades Pendientes

Las siguientes características están planificadas para futuras versiones:

- 🔐 **Sistema de Autenticación**: Login y registro de usuarios
- 👤 **Perfiles de Usuario**: Cada usuario con su biblioteca personal
- 🔒 **Rutas Protegidas**: Acceso solo para usuarios autenticados
- 📊 **Estadísticas Avanzadas**: Gráficos de lectura por mes/año
- 🔍 **Búsqueda Avanzada**: Buscar por título, autor, año
- 📚 **Listas Personalizadas**: Crear colecciones temáticas
- 🌐 **API de Libros Externa**: Autocompletar información desde Google Books API
- 📱 **PWA**: Aplicación instalable en dispositivos móviles
- 🌙 **Modo Oscuro**: Toggle entre tema claro/oscuro
- 💬 **Comentarios**: Sistema de reseñas y comentarios
- 🏆 **Logros**: Gamificación con badges por metas de lectura
- 📤 **Exportar Datos**: Exportar biblioteca a CSV/PDF

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 👥 Autores y Colaboradores

### 👨‍💻 Desarrollador Principal
**Itzamara Sotero Martinez**
- GitHub: [@itzamara15092000](https://github.com/itzamara15092000)
- Contribuciones: Diseño UI/UX, testing y documentación


### 👩‍💻 Colaboradora
**Yhairi Ximena Rivera Reyes**
- GitHub: [@YhairiXimenaRiveraReyes]([https://github.com/YhairiXimenaRiveraReyes)
- Contribuciones: Diseño UI/UX, testing y documentación

**Sanjuana Garcia Hernandez**
- GitHub: [@San]([https://github.com/SanjuisDez])
- Contribuciones: Diseño UI/UX, testing y documentación

---

<div align="center">
  <p>Hecho con ❤️ para los amantes de la lectura</p>
  <p>© 2025 Leaftime - Agenda Literaria</p>
</div>


### Cliente (Frontend)

```bash
cd new-structure/client
npm install
npm run dev
```

El cliente se ejecutará en `http://localhost:5173`

### Servidor (Backend)

```bash
cd new-structure/server
npm install
npm start
```

El servidor se ejecutará en `http://localhost:5000`

## 📦 Tecnologías Utilizadas

### Frontend
- **React 19** - Librería UI
- **Vite** - Build tool
- **React Router DOM** - Enrutamiento
- **Axios** - Cliente HTTP
- **jQuery** - Para plugins legacy (Owl Carousel, Slick Slider)
- **Bootstrap** - Framework CSS
- **Font Awesome** - Iconos

### Backend
- **Node.js** - Runtime
- **Express** - Framework web
- **MongoDB** - Base de datos
- **Mongoose** - ODM para MongoDB
- **CORS** - Middleware de seguridad

## 🎯 Rutas de la Aplicación

| Ruta | Descripción |
|------|-------------|
| `/` | Landing page principal |
| `/books` | Dashboard de gestión de libros |

## 📝 API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/books` | Obtener todos los libros |
| POST | `/api/books` | Crear un nuevo libro |
| PUT | `/api/books/:id` | Actualizar un libro |
| DELETE | `/api/books/:id` | Eliminar un libro |

## 🎨 Estilos y Assets

Los estilos originales del template "Klassy Cafe" han sido migrados y se encuentran en:
- `client/public/assets/css/` - Archivos CSS
- `client/public/assets/js/` - Scripts jQuery y plugins
- `client/public/assets/images/` - Imágenes y recursos visuales
- `client/public/assets/fonts/` - Fuentes web

## 🔧 Configuración

### Variables de Entorno (Server)

Crea un archivo `.env` en la carpeta `server`:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/leaftime
```

## 📱 Características Responsivas

La aplicación es completamente responsive y se adapta a:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)

## 🚀 Deploy

### Frontend (Vercel/Netlify)
```bash
cd client
npm run build
# Los archivos estáticos estarán en client/dist
```

### Backend (Heroku/Railway)
```bash
cd server
# Asegúrate de tener las variables de entorno configuradas
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto fue creado para uso educativo y personal.

## 👥 Autores

- **Yhairi Ximena, Itzamara, Sanjuana** - Desarrollo y migración a React
