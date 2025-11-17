import express from "express";
import SeriesController from "./controllers/seriesController.js";
import connection from "./config/sequelize-config.js";

const app = express();

// Configuração do EJS
app.set("view engine", "ejs");

// Pasta pública
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// REDIRECIONA a rota inicial para /series
app.get("/", (req, res) => {
  res.redirect("/series");
});

// Controller principal
app.use("/series", SeriesController);

// Teste de conexão
connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados feita com sucesso!");
  })
  .catch((error) => {
    console.log("Erro ao conectar:", error);
  });

// Criação automática do banco de dados
connection
  .query("CREATE DATABASE IF NOT EXISTS series;")
  .then(() => {
    console.log("O banco de dados está criado!");
  })
  .catch((error) => {
    console.log("Erro ao criar banco:", error);
  });

// Inicialização do servidor
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log("Erro ao iniciar servidor:", error);
  } else {
    console.log(`Servidor iniciado em http://localhost:${port}`);
  }
});
