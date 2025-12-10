# 🚀 Inicio Rápido - Leaftime Completo

## ✅ Funcionalidades Implementadas

### Landing Page (/)
- ✨ Página de presentación profesional
- 📚 Carousel de libros destacados
- 📖 Secciones: Hero, About, Books
- 🎨 Diseño completamente responsive
- 🔗 Navegación a la biblioteca personal

### Mi Biblioteca (/books)
- 📊 **Dashboard con Estadísticas**:
  - Total de libros
  - Libros en lectura
  - Libros terminados
  - Por leer, pausados, abandonados

- 📝 **Gestión Completa de Libros**:
  - Título y autor
  - Total de páginas y página actual
  - **Barra de progreso visual**
  - Estado (Por Leer, Leyendo, Terminado, Pausado, Abandonado)
  - Género (Fantasía, Ciencia ficción, Suspenso, Terror, Aventura, Romance, Otros)
  - Calificación con estrellas (0-5)
  - Fechas: publicación, inicio y fin de lectura
  - URL de portada del libro
  - Notas personales

- 🔍 **Filtros Inteligentes**:
  - Por género
  - Por estado de lectura

- 📋 **Tabla Completa**:
  - Portadas de libros
  - Progreso visual con barras
  - Estados con badges coloridos
  - Calificaciones con estrellas
  - Indicador de libros con notas

## 🛠️ Instalación y Configuración

### 1. Instalar MongoDB (si no lo tienes)

**Windows:**
```bash
# Descarga desde https://www.mongodb.com/try/download/community
# O usa MongoDB Atlas (cloud): https://www.mongodb.com/cloud/atlas
```

**Iniciar MongoDB local:**
```bash
mongod
```

### 2. Instalar Dependencias

**Backend:**
```bash
cd new-structure/server
npm install
```

**Frontend:**
```bash
cd new-structure/client
npm install
```

### 3. Configurar Variables de Entorno

El archivo `.env` ya está creado en `server/.env` con:
```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/leaftime-books
```

Si usas MongoDB Atlas, reemplaza con tu URI.

### 4. Iniciar los Servidores

**Terminal 1 - Backend:**
```bash
cd new-structure/server
npm start
# ✅ Server en puerto 4000
```

**Terminal 2 - Frontend:**
```bash
cd new-structure/client
npm run dev
# ✅ Cliente en http://localhost:5173
```

## 🎯 Uso de la Aplicación

### Navegar a la Biblioteca
1. Abre http://localhost:5173
2. En el menú superior, haz clic en **"Mi Biblioteca"**
3. O haz clic en **"Registrar"** en la sección de reserva

### Agregar un Libro
1. Completa el formulario en la parte superior
2. **Campos principales**:
   - Título (obligatorio)
   - Autor
   - Total de páginas y página actual (muestra progreso automático)
   - Estado y género
   - Calificación con estrellas interactivas
3. Haz clic en "Guardar Libro"

### Editar un Libro
1. Haz clic en el botón ✏️ en la tabla
2. El formulario se llenará con los datos
3. Modifica lo necesario
4. Haz clic en "Actualizar Libro"

### Eliminar un Libro
1. Haz clic en el botón 🗑️
2. Confirma la eliminación

### Filtrar Libros
Usa la barra lateral izquierda para:
- Filtrar por género
- Filtrar por estado de lectura

## 📊 Características Especiales

### Progreso de Lectura
- Indica página actual y total
- Muestra porcentaje automático
- Barra visual de progreso
- Actualización en tiempo real

### Sistema de Calificación
- 5 estrellas interactivas
- Click para calificar
- Visual en la tabla

### Notas Personales
- Campo de texto amplio
- Indicador visual en tabla
- Perfecto para citas o reflexiones

### Estadísticas en Tiempo Real
- Se actualizan al agregar/editar/eliminar
- Cards visuales por categoría
- Colores distintivos por estado

## 🎨 Personalización

### Cambiar Colores
Edita `client/src/styles.css`:
- Color principal: `#4573ff`
- Color secundario: `#7c3aed`
- Fondo: `#0e0f11`

### Agregar Géneros
1. Backend: `server/models/Book.js` - array enum
2. Frontend: `client/src/components/BookForm.jsx` y `Sidebar.jsx`

### Modificar Estados
Similar a géneros, edita el enum en el modelo y los componentes.

## 🐛 Solución de Problemas

### Error: Cannot connect to MongoDB
```bash
# Verifica que MongoDB esté corriendo
mongod

# O verifica tu URI de MongoDB Atlas
```

### Error: Port 4000 already in use
```bash
# Cambia el puerto en server/.env
PORT=5000

# Y actualiza client/src/pages/BooksPage.jsx
const API = "http://localhost:5000";
```

### No se muestran los libros
1. Verifica que el backend esté corriendo
2. Abre la consola del navegador (F12)
3. Verifica que no haya errores de CORS
4. Confirma la URL de la API

### Estilos no se aplican
1. Verifica que `styles.css` esté importado en `main.jsx`
2. Limpia caché del navegador (Ctrl+Shift+R)

## 📚 API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/books` | Obtener todos los libros (filtros: ?genre=, ?status=) |
| GET | `/api/books/stats/summary` | Obtener estadísticas |
| GET | `/api/books/:id` | Obtener un libro específico |
| POST | `/api/books` | Crear nuevo libro |
| PUT | `/api/books/:id` | Actualizar libro |
| DELETE | `/api/books/:id` | Eliminar libro |

## 🎉 ¡Listo!

Tu agenda literaria completa está funcionando con:
- ✅ Landing page profesional
- ✅ Dashboard interactivo
- ✅ Sistema completo de gestión de libros
- ✅ Estadísticas en tiempo real
- ✅ Progreso de lectura visual
- ✅ Calificaciones y notas
- ✅ Filtros inteligentes
- ✅ Diseño moderno y responsive

**¡Disfruta organizando tu biblioteca personal! 📚✨**
