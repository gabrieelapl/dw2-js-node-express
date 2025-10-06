import express from "express";

const router = express.Router();

router.get("/animacoes", (req, res) => {
  const animacoes = [
    { titulo: "Toy Story", ano: "1995", duracao: "1h 21min" },
    { titulo: "Procurando Nemo", ano: "2003", duracao: "1h 40min" },
    { titulo: "Divertida Mente", ano: "2015", duracao: "1h 35min" },
    { titulo: "Homem-Aranha no Aranhaverso", ano: "2018", duracao: "1h 57min" },
    { titulo: "Encanto", ano: "2021", duracao: "1h 42min" },
  ];
  res.render("animacoes", {
    animacoes: animacoes,
  });
});

export default router;