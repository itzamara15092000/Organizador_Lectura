export default function BookTable({ books, onEdit, onDelete }) {
  const getStatusEmoji = (status) => {
    const statusMap = {
      "Por Leer": "📖",
      "Leyendo": "📗",
      "Terminado": "✅",
      "Pausado": "⏸️",
      "Abandonado": "❌"
    };
    return statusMap[status] || "📚";
  };

  const getProgress = (book) => {
    if (book.pages && book.currentPage) {
      return Math.min((book.currentPage / book.pages) * 100, 100).toFixed(0);
    }
    return 0;
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? 'star-filled' : 'star-empty'}>
        ★
      </span>
    ));
  };

  return (
    <div className="table-container">
      {books.length === 0 ? (
        <div className="empty-state">
          <p>📚 No hay libros registrados aún</p>
          <small>Agrega tu primer libro usando el formulario de arriba</small>
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Portada</th>
              <th>Título</th>
              <th>Autor</th>
              <th>Progreso</th>
              <th>Estado</th>
              <th>Género</th>
              <th>Calificación</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {books.map((item) => (
              <tr key={item._id}>
                <td>
                  {item.coverImage ? (
                    <img 
                      src={item.coverImage} 
                      alt={item.title} 
                      className="book-cover-thumb"
                      onError={(e) => e.target.src = '/assets/images/default-book.jpg'}
                    />
                  ) : (
                    <div className="book-cover-placeholder">📖</div>
                  )}
                </td>
                <td>
                  <div className="book-title">
                    {item.title}
                    {item.notes && (
                      <small className="has-notes" title={item.notes}>
                        📝 Tiene notas
                      </small>
                    )}
                  </div>
                </td>
                <td>{item.author || <em>Sin autor</em>}</td>
                <td>
                  {item.pages ? (
                    <div className="progress-cell">
                      <div className="progress-bar-small">
                        <div 
                          className="progress-fill-small" 
                          style={{ width: `${getProgress(item)}%` }}
                        ></div>
                      </div>
                      <small>{item.currentPage || 0} / {item.pages} páginas ({getProgress(item)}%)</small>
                    </div>
                  ) : (
                    <em>No especificado</em>
                  )}
                </td>
                <td>
                  <span className={`status-badge status-${item.status.toLowerCase().replace(' ', '-')}`}>
                    {getStatusEmoji(item.status)} {item.status}
                  </span>
                </td>
                <td>{item.genre}</td>
                <td>
                  <div className="rating-display">
                    {renderStars(item.rating || 0)}
                    <small>({item.rating || 0}/5)</small>
                  </div>
                </td>
                <td className="actions">
                  <button 
                    onClick={() => onEdit(item)} 
                    className="btn-edit"
                    title="Editar libro"
                  >
                    ✏️
                  </button>
                  <button 
                    onClick={() => onDelete(item._id)} 
                    className="btn-delete"
                    title="Eliminar libro"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
