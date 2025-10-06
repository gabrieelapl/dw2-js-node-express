import express from "express"; 

const app = express();

const port = 8080; 

import AnimacoesController from "./controllers/AnimacoesController.js";
import FilmesController from "./controllers/FilmesController.js";
import SeriesController from "./controllers/SeriesController.js";

app.use("/",AnimacoesController)
app.use("/",FilmesController)
app.use("/",SeriesController)

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, (error) => {
  if (error) {
    console.log(
      `Não foi possível iniciar o servidor. Ocorreu um erro! ${error}`
    );
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});

