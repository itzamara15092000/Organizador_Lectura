const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, default: "" },
  pages: { type: Number, default: 0 },
  currentPage: { type: Number, default: 0 }, // Página actual de lectura
  published: { type: String, default: "" }, // guardamos ISO date o string
  status: { 
    type: String, 
    enum: ["Por Leer", "Leyendo", "Terminado", "Pausado", "Abandonado"], 
    default: "Por Leer" 
  },
  genre: { 
    type: String, 
    enum: ["Fantasía","Ciencia ficción","Suspenso","Terror","Aventura","Romance","Otros"], 
    default: "Fantasía" 
  },
  rating: { type: Number, min: 0, max: 5, default: 0 }, // Calificación de 0-5
  notes: { type: String, default: "" }, // Notas personales sobre el libro
  startDate: { type: Date }, // Fecha de inicio de lectura
  finishDate: { type: Date }, // Fecha de finalización
  coverImage: { type: String, default: "" }, // URL de la portada
}, { timestamps: true });

module.exports = mongoose.model("Book", BookSchema);
