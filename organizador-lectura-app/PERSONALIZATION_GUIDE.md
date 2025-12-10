# Guía de Personalización - Leaftime

## 📝 Cómo Modificar el Contenido

### 1. Cambiar el Logo

**Ubicación**: `client/public/assets/images/klassy-logo.png`

Reemplaza este archivo con tu propio logo. El código en `HomePage.jsx` está configurado para usar un ancho de 146px.

```jsx
// En HomePage.jsx línea ~44
<img src="/assets/images/klassy-logo.png" style={{ width: '146px' }} alt="Leaftime" />
```

### 2. Modificar el Título y Descripción

**Archivo**: `client/src/pages/HomePage.jsx`

```jsx
// Sección Hero (líneas ~77-81)
<h4>Leaftime</h4>
<h6>Agenda Literaria</h6>

// Sección About (líneas ~117-121)
<h6>Sobre Nosotros</h6>
<h2>Leaftime</h2>
```

### 3. Actualizar Imágenes del Slider

**Ubicación**: `client/public/assets/images/`
- `slide-01.jpg`
- `slide-02.jpg`
- `slide-03.jpg`

```jsx
// En HomePage.jsx líneas ~89-107
<div className="item">
  <div className="img-fill">
    <img src="/assets/images/slide-01.jpg" alt="Slide 1" />
  </div>
</div>
```

### 4. Cambiar Texto de la Sección "Nosotros"

**Archivo**: `client/src/pages/HomePage.jsx` (líneas ~122-128)

```jsx
<p>
  LeafTime es una agenda literaria personal creada para lectores que buscan...
  [Edita este texto aquí]
</p>
```

### 5. Modificar Lista de Libros Destacados

**Archivo**: `client/src/pages/HomePage.jsx` (líneas ~154-280)

Cada libro es un elemento dentro del carousel:

```jsx
<div className="item">
  <div className='card card1'>
    <div className="price"><h6>#1</h6></div>
    <div className='info'>
      <h1 className='title'>Fantasía</h1>
      <p className='description'>Harry Potter y la Piedra Filosofal...</p>
      <div className="main-text-button">
        <div className="scroll-to-section">
          <a href="URL_EXTERNA">26/Jun/1997</a>
        </div>
      </div>
    </div>
  </div>
</div>
```

**Clases de tarjetas disponibles**: card1, card2, card3, card4, card5
(Cada una tiene un estilo diferente definido en el CSS)

### 6. Personalizar Colores

**Archivo**: `client/public/assets/css/templatemo-klassy-cafe.css`

Busca y modifica estas variables:

```css
/* Color principal */
.main-button a {
  background-color: #fb5849; /* Cambia este color */
}

/* Color de hover */
.main-button a:hover {
  background-color: #e94d3d; /* Cambia este color */
}
```

### 7. Añadir Nuevas Páginas

1. Crea un nuevo componente en `client/src/pages/`
2. Importa en `App.jsx`
3. Añade una nueva ruta:

```jsx
// En App.jsx
import MiNuevaPagina from "./pages/MiNuevaPagina";

<Route path="/mi-ruta" element={<MiNuevaPagina />} />
```

### 8. Modificar el Menú de Navegación

**Archivo**: `client/src/pages/HomePage.jsx` (líneas ~46-58)

```jsx
<ul className="nav">
  <li className="scroll-to-section">
    <a href="#top" className="active">Casa</a>
  </li>
  <li className="scroll-to-section">
    <a href="#about">Nosotros</a>
  </li>
  {/* Añade más items aquí */}
</ul>
```

Para añadir links a otras páginas React:

```jsx
import { Link } from 'react-router-dom';

<li>
  <Link to="/mi-pagina">Mi Página</Link>
</li>
```

### 9. Ajustar Fuentes

Las fuentes se cargan desde Google Fonts en `client/index.html`:

```html
<link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Para cambiar la fuente principal, modifica en `templatemo-klassy-cafe.css`:

```css
html, body {
  font-family: 'Poppins', sans-serif; /* Cambia aquí */
}
```

### 10. Personalizar Carousel de Libros

**Configuración**: `client/src/hooks/useJQueryPlugins.js` (líneas ~13-25)

```javascript
$('.owl-menu-item').owlCarousel({
  items: 4,           // Número de items visibles en desktop
  loop: true,         // Loop infinito
  dots: true,         // Mostrar puntos de navegación
  nav: true,          // Mostrar flechas
  autoplay: true,     // Reproducción automática
  margin: 30,         // Espacio entre items
  responsive: {
    0: { items: 1 },      // Mobile
    600: { items: 2 },    // Tablet
    1000: { items: 4 }    // Desktop
  }
});
```

## 🎨 Estilos CSS Importantes

### Clases Útiles

```css
.section-heading        /* Para títulos de sección */
.main-button           /* Botón principal */
.scroll-to-section     /* Navegación suave */
.header-sticky         /* Header fijo al scroll */
```

### Secciones Principales

```css
#top                   /* Hero section */
#about                 /* Sección nosotros */
#menu                  /* Sección de libros */
#reservation           /* Sección de registro */
```

## 🔧 Configuración de Plugins

### Slider Principal (Slick)

**Archivo**: `client/src/hooks/useJQueryPlugins.js` (líneas ~28-41)

```javascript
$('.Modern-Slider').slick({
  autoplay: true,
  autoplaySpeed: 10000,  // Cambia velocidad de auto-play
  speed: 600,            // Velocidad de transición
  fade: true,            // Efecto fade
  // ... más opciones
});
```

### Scroll Suave

**Archivo**: `client/src/hooks/useJQueryPlugins.js` (líneas ~44-53)

```javascript
$('.scroll-to-section a[href*="#"]').on('click', function (e) {
  // Ajusta scrollTop y velocidad de animación aquí
  scrollTop: target.offset().top - 80  // -80px por el header
}, 800, 'swing');  // 800ms de duración
```

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile */
@media (max-width: 767px) { }

/* Tablet */
@media (min-width: 768px) and (max-width: 991px) { }

/* Desktop */
@media (min-width: 992px) { }
```

## 🚀 Tips de Performance

1. **Optimizar Imágenes**: Usa formatos WebP para mejor performance
2. **Lazy Loading**: Considera añadir lazy loading para imágenes
3. **Code Splitting**: React Router ya hace code splitting automático
4. **CSS Minificado**: Los archivos CSS ya están minificados en assets

## 🔐 Seguridad

1. Valida todos los inputs en el formulario de libros
2. Sanitiza datos antes de guardar en MongoDB
3. Usa HTTPS en producción
4. Configura CORS correctamente en el backend

## 📦 Build para Producción

```bash
cd client
npm run build

# Los archivos optimizados estarán en client/dist
```

## 🐛 Debugging

### Ver Logs de jQuery

Abre la consola del navegador y verás:
```
Leaftime: Aplicación cargada correctamente
jQuery versión: 2.1.0
Plugin owlCarousel disponible
Plugin slick disponible
```

### Verificar que los Assets Cargan

1. Abre DevTools (F12)
2. Ve a la pestaña Network
3. Verifica que todos los archivos en `/assets/` se carguen correctamente

## 📚 Recursos Adicionales

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/)
- [Slick Slider](https://kenwheeler.github.io/slick/)
- [Bootstrap 4](https://getbootstrap.com/docs/4.0/)

---

¿Necesitas ayuda? Revisa el archivo `README.md` principal o crea un issue en el repositorio.
