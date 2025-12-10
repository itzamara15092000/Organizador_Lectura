import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import BooksPage from "./pages/BooksPage";
import HomePage from "./pages/HomePage";

export default function App() {
  const [filterGenre, setFilterGenre] = useState("Todos");
  const [filterStatus, setFilterStatus] = useState("Todos");

  return (
    <Router>
      <Routes>
        {/* Ruta principal - Landing Page */}
        <Route path="/" element={<HomePage />} />
        
        {/* Ruta para gestión de libros */}
        <Route 
          path="/books" 
          element={
            <div className="layout">
              <Sidebar 
                filterGenre={filterGenre} 
                setFilterGenre={setFilterGenre}
                filterStatus={filterStatus}
                setFilterStatus={setFilterStatus}
              />
              <BooksPage 
                filterGenre={filterGenre} 
                filterStatus={filterStatus}
              />
            </div>
          } 
        />
      </Routes>
    </Router>
  );
}

