import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BookForm from "../components/BookForm";
import BookTable from "../components/BookTable";

const API = import.meta.env.VITE_API_URL || "http://localhost:4000";

export default function BooksPage({ filterGenre, filterStatus }) {
  const [books, setBooks] = useState([]);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [stats, setStats] = useState({
    total: 0,
    reading: 0,
    finished: 0,
    toRead: 0,
    paused: 0,
    abandoned: 0
  });

  async function fetchBooks(genre, status) {
    setLoading(true);
    try {
      const params = {};
      if (genre && genre !== "Todos") params.genre = genre;
      if (status && status !== "Todos") params.status = status;
      
      const res = await axios.get(`${API}/api/books`, { params });
      setBooks(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function fetchStats() {
    try {
      const res = await axios.get(`${API}/api/books/stats/summary`);
      setStats(res.data);
    } catch (err) {
      console.error("Error al obtener estadísticas:", err);
    }
  }

  useEffect(() => {
    fetchBooks(filterGenre, filterStatus);
    fetchStats();
  }, [filterGenre, filterStatus]);

  async function saveBook(book) {
    try {
      if (editing) {
        const res = await axios.put(`${API}/api/books/${editing._id}`, book);
        setBooks(books.map(b => b._id === res.data._id ? res.data : b));
        setEditing(null);
      } else {
        const res = await axios.post(`${API}/api/books`, book);
        setBooks(prev => [res.data, ...prev]);
      }
      fetchStats();
      setShowForm(false); // Ocultar formulario después de guardar
      fetchBooks(filterGenre, filterStatus); // Refrescar lista
    } catch (err) {
      console.error("Error guardando:", err.response?.data || err.message);
      alert("Error al guardar el libro. Verifica que el servidor esté corriendo.");
    }
  }

  async function deleteBook(id) {
    if (!confirm("¿Eliminar este libro?")) return;
    try {
      await axios.delete(`${API}/api/books/${id}`);
      setBooks(books.filter(b => b._id !== id));
      fetchStats(); // Actualizar estadísticas
    } catch (err) {
      console.error(err);
    }
  }

  function editBook(book) {
    setEditing(book);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function cancelEdit() {
    setEditing(null);
    setShowForm(false);
  }

  return (
    <div className="content">
      <div className="books-header">
        <div className="header-top">
          <Link to="/" className="back-link">
            ← Volver al inicio
          </Link>
          <h1>Mi Biblioteca Personal</h1>
          <p>Organiza y disfruta cada libro de tu colección</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">📚</div>
            <div className="stat-content">
              <h3>{stats.total}</h3>
              <p>Total de Libros</p>
            </div>
          </div>

          <div className="stat-card reading">
            <div className="stat-icon">📗</div>
            <div className="stat-content">
              <h3>{stats.reading}</h3>
              <p>Leyendo</p>
            </div>
          </div>

          <div className="stat-card finished">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <h3>{stats.finished}</h3>
              <p>Terminados</p>
            </div>
          </div>

          <div className="stat-card to-read">
            <div className="stat-icon">📖</div>
            <div className="stat-content">
              <h3>{stats.toRead}</h3>
              <p>Por Leer</p>
            </div>
          </div>

          <div className="stat-card paused">
            <div className="stat-icon">⏸️</div>
            <div className="stat-content">
              <h3>{stats.paused}</h3>
              <p>Pausados</p>
            </div>
          </div>

          <div className="stat-card abandoned">
            <div className="stat-icon">❌</div>
            <div className="stat-content">
              <h3>{stats.abandoned}</h3>
              <p>Abandonados</p>
            </div>
          </div>
        </div>
      </div>

      {!showForm && (
        <button 
          className="btn-new-book" 
          onClick={() => setShowForm(true)}
        >
          <span className="btn-icon">+</span>
          Agregar Nuevo Libro
        </button>
      )}

      {showForm && (
        <div className="form-container">
          <BookForm onSave={saveBook} editing={editing} onCancel={cancelEdit} />
        </div>
      )}
      
      {loading ? (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Cargando libros...</p>
        </div>
      ) : (
        <BookTable books={books} onEdit={editBook} onDelete={deleteBook} />
      )}
    </div>
  );
}
