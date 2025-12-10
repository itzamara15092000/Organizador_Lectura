export default function Sidebar({ filterGenre, setFilterGenre, filterStatus, setFilterStatus }) {
  const genres = [
    "Todos",
    "Fantasía",
    "Ciencia ficción",
    "Suspenso",
    "Terror",
    "Aventura",
    "Romance",
    "Otros"
  ];

  const statuses = [
    { value: "Todos", label: "📚 Todos" },
    { value: "Por Leer", label: "📖 Por Leer" },
    { value: "Leyendo", label: "📗 Leyendo" },
    { value: "Terminado", label: "✅ Terminados" },
    { value: "Pausado", label: "⏸️ Pausados" },
    { value: "Abandonado", label: "❌ Abandonados" }
  ];

  const handleGenreClick = (genre) => {
    setFilterGenre(genre);
    setFilterStatus("Todos"); // Reset status filter
  };

  const handleStatusClick = (status) => {
    setFilterStatus(status);
    setFilterGenre("Todos"); // Reset genre filter
  };

  return (
    <aside className="sidebar">
      <h2>📚 Mi Biblioteca</h2>
      
      <div className="filter-section">
        <h3>Filtrar por Género</h3>
        {genres.map((item) => (
          <button
            key={item}
            className={`sidebar-btn ${filterGenre === item && filterStatus === "Todos" ? "active" : ""}`}
            onClick={() => handleGenreClick(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="filter-section">
        <h3>Estado de Lectura</h3>
        {statuses.map((item) => (
          <button
            key={item.value}
            className={`sidebar-btn status-btn ${filterStatus === item.value && filterGenre === "Todos" ? "active" : ""}`}
            onClick={() => handleStatusClick(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </aside>
  );
}
