import express from "express"; 

const app = express();

const port = 8080; 

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/filmes", (req, res) => {
  res.render("filmes");
});

app.get("/series", (req, res) => {
  res.render("series");
});

app.get("/animacoes", (req, res) => {
  res.render("animacoes");
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

