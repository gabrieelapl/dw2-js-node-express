import express from "express";

const router = express.Router();

//ROTA DE CLIENTES
router.get("/filmes", (req, res) => {
  const filmes = [
    { titulo: "Interestelar", ano: "2014", duracao: "2h 49min" },
    { titulo: "A Origem", ano: "2010", duracao: "2h 28min" },
    { titulo: "Avatar: O Caminho da Água", ano: "2022", duracao: "3h 12min" },
    { titulo: "Vingadores: Ultimato", ano: "2019", duracao: "3h 01min" },
    { titulo: "Coringa", ano: "2019", duracao: "2h 02min" },
  ];
  res.render("filmes", {
    filmes: filmes,
  });
});

export default router;
