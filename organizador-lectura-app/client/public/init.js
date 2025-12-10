// Script de inicialización para compatibilidad jQuery/React
window.addEventListener('DOMContentLoaded', () => {
  console.log('Leaftime: Aplicación cargada correctamente');
  
  // Verificar que jQuery está disponible
  if (window.$ && window.jQuery) {
    console.log('jQuery versión:', window.$.fn.jquery);
  } else {
    console.warn('jQuery no está disponible');
  }
  
  // Verificar plugins
  const plugins = ['owlCarousel', 'slick'];
  plugins.forEach(plugin => {
    if (window.$ && window.$.fn[plugin]) {
      console.log(`Plugin ${plugin} disponible`);
    }
  });
});
