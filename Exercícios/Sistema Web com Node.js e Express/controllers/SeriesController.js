import express from "express";

const router = express.Router();

router.get("/series", (req, res) => {
  const series = [
    { titulo: "Breaking Bad", ano: "2008", duracao: "47 min" },
    { titulo: "Stranger Things", ano: "2016", duracao: "50–60 min" },
    { titulo: "Game of Thrones", ano: "2011", duracao: "55–65 min" },
    { titulo: "The Last of Us", ano: "2023", duracao: "50–80 min" },
    { titulo: "The Office (US)", ano: "2005", duracao: "22 min" },
  ];
  res.render("series", {
    series: series,
  });
});

export default router;