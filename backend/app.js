const express = require('express');
const app = express();


app.get("/api", (req, res) => {
  res.json({"usuarios": ["usuario1", "usuario2", "usuario3", "usuario4", "usuario5"]})
})

// Iniciar el servidor
app.listen(3000, () => {
    console.log(`Servidor iniciado en http://localhost:3000/api`);
});