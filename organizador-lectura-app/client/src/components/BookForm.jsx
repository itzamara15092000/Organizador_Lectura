import { useState, useEffect } from "react";

export default function BookForm({ onSave, editing, onCancel }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    pages: "",
    currentPage: "",
    published: "",
    status: "Por Leer",
    genre: "Fantasía",
    rating: 0,
    notes: "",
    startDate: "",
    finishDate: "",
    coverImage: ""
  });

  useEffect(() => {
    if (editing) {
      const copy = { ...editing };
      // Convertir fechas ISO a formato yyyy-mm-dd para inputs
      if (copy.published) copy.published = copy.published.split("T")[0];
      if (copy.startDate) copy.startDate = copy.startDate.split("T")[0];
      if (copy.finishDate) copy.finishDate = copy.finishDate.split("T")[0];
      setForm(copy);
    } else {
      // Reset form cuando no hay editing
      setForm({
        title: "",
        author: "",
        pages: "",
        currentPage: "",
        published: "",
        status: "Por Leer",
        genre: "Fantasía",
        rating: 0,
        notes: "",
        startDate: "",
        finishDate: "",
        coverImage: ""
      });
    }
  }, [editing]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Validaciones
    if (!form.title) return alert("El título es obligatorio");
    if (form.currentPage && form.pages && Number(form.currentPage) > Number(form.pages)) {
      return alert("La página actual no puede ser mayor que el total de páginas");
    }
    onSave(form);
    if (!editing) {
      setForm({
        title: "",
        author: "",
        pages: "",
        currentPage: "",
        published: "",
        status: "Por Leer",
        genre: "Fantasía",
        rating: 0,
        notes: "",
        startDate: "",
        finishDate: "",
        coverImage: ""
      });
    }
  }

  const calculateProgress = () => {
    if (form.pages && form.currentPage) {
      const progress = (Number(form.currentPage) / Number(form.pages)) * 100;
      return Math.min(progress, 100).toFixed(1);
    }
    return 0;
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>{editing ? "Editar libro" : "Nuevo libro"}</h2>

      <div className="form-group">
        <label>Título *</label>
        <input 
          name="title" 
          placeholder="Título del libro" 
          value={form.title || ""} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div className="form-group">
        <label>Autor</label>
        <input 
          name="author" 
          placeholder="Nombre del autor" 
          value={form.author || ""} 
          onChange={handleChange} 
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Total de Páginas</label>
          <input 
            name="pages" 
            type="number" 
            placeholder="Total" 
            value={form.pages || ""} 
            onChange={handleChange} 
            min="0"
          />
        </div>

        <div className="form-group">
          <label>Página Actual</label>
          <input 
            name="currentPage" 
            type="number" 
            placeholder="Actual" 
            value={form.currentPage || ""} 
            onChange={handleChange} 
            min="0"
          />
        </div>
      </div>

      {form.pages && form.currentPage && (
        <div className="progress-info">
          <small>Progreso: {calculateProgress()}%</small>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${calculateProgress()}%` }}
            ></div>
          </div>
        </div>
      )}

      <div className="form-row">
        <div className="form-group">
          <label>Estado</label>
          <select name="status" value={form.status} onChange={handleChange}>
            <option>Por Leer</option>
            <option>Leyendo</option>
            <option>Terminado</option>
            <option>Pausado</option>
            <option>Abandonado</option>
          </select>
        </div>

        <div className="form-group">
          <label>Género</label>
          <select name="genre" value={form.genre} onChange={handleChange}>
            <option>Fantasía</option>
            <option>Ciencia ficción</option>
            <option>Suspenso</option>
            <option>Terror</option>
            <option>Aventura</option>
            <option>Romance</option>
            <option>Otros</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label>Calificación (0-5 estrellas)</label>
        <div className="rating-input">
          {[1, 2, 3, 4, 5].map(star => (
            <span 
              key={star}
              className={`star ${Number(form.rating) >= star ? 'filled' : ''}`}
              onClick={() => setForm(prev => ({ ...prev, rating: star }))}
            >
              ★
            </span>
          ))}
          <span className="rating-value">({form.rating}/5)</span>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Fecha Publicación</label>
          <input 
            name="published" 
            type="date" 
            value={form.published || ""} 
            onChange={handleChange} 
          />
        </div>

        <div className="form-group">
          <label>Fecha Inicio Lectura</label>
          <input 
            name="startDate" 
            type="date" 
            value={form.startDate || ""} 
            onChange={handleChange} 
          />
        </div>

        <div className="form-group">
          <label>Fecha Finalización</label>
          <input 
            name="finishDate" 
            type="date" 
            value={form.finishDate || ""} 
            onChange={handleChange} 
          />
        </div>
      </div>

      <div className="form-group">
        <label>URL Portada</label>
        <input 
          name="coverImage" 
          type="url" 
          placeholder="https://ejemplo.com/portada.jpg" 
          value={form.coverImage || ""} 
          onChange={handleChange} 
        />
      </div>

      <div className="form-group">
        <label>Notas Personales</label>
        <textarea 
          name="notes" 
          placeholder="Escribe tus pensamientos, citas favoritas, etc..." 
          value={form.notes || ""} 
          onChange={handleChange}
          rows="4"
        ></textarea>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-save">
          {editing ? "Actualizar Libro" : "Guardar Libro"}
        </button>
        <button 
          type="button" 
          className="btn-cancel" 
          onClick={onCancel}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
