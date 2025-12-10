require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const booksRouter = require("./routes/books");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/book-dashboard";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log("Mongo conectado"))
  .catch(err => {
    console.error("Error al conectar Mongo:", err.message);
    process.exit(1);
  });

app.use("/api/books", booksRouter);

app.get("/", (req, res) => res.send({ ok: true, message: "API Book Dashboard" }));

app.listen(PORT, () => console.log(`Server en puerto ${PORT}`));
