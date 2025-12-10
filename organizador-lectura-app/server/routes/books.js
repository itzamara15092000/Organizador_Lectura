const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

// GET all books (opcional query ?genre=Fantasía)
router.get("/", async (req, res) => {
  try {
    const { genre, status } = req.query;
    const filter = {};
    if (genre && genre !== "Todos") filter.genre = genre;
    if (status && status !== "Todos") filter.status = status;
    const books = await Book.find(filter).sort({ createdAt: -1 });
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener libros" });
  }
});

// GET statistics
router.get("/stats/summary", async (req, res) => {
  try {
    const total = await Book.countDocuments();
    const reading = await Book.countDocuments({ status: "Leyendo" });
    const finished = await Book.countDocuments({ status: "Terminado" });
    const toRead = await Book.countDocuments({ status: "Por Leer" });
    const paused = await Book.countDocuments({ status: "Pausado" });
    const abandoned = await Book.countDocuments({ status: "Abandonado" });
    
    res.json({ total, reading, finished, toRead, paused, abandoned });
  } catch (err) {
    res.status(500).json({ error: "Error al obtener estadísticas" });
  }
});

// GET single book
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "Libro no encontrado" });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener libro" });
  }
});

// POST create
router.post("/", async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: "Error al crear libro", detail: err.message });
  }
});

// PUT update
router.put("/:id", async (req, res) => {
  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ error: "Libro no encontrado" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: "Error al actualizar libro", detail: err.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const d = await Book.findByIdAndDelete(req.params.id);
    if (!d) return res.status(404).json({ error: "Libro no encontrado" });
    res.json({ message: "Eliminado" });
  } catch (err) {
    res.status(500).json({ error: "Error al eliminar libro" });
  }
});

module.exports = router;
