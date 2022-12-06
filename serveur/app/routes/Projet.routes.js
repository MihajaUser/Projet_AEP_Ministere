//update
const controlerProjet = require("../controler/Projet.controller");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.setHeader(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/message", controlerProjet.message)
  //get All projet
  // app.get("/api/projet/projets", controlerProjet.getAllProjet);
  //post projet
  app.post("/api/projet/AjoutProjet", controlerProjet.AjoutProjet);
  //delete projet
  app.delete("/api/projet/supprimer/:id", controlerProjet.supprimer);
 //get All projet
  app.get("/api/projet/projets", controlerProjet.getAllProjet);
  //modifier un projet
  app.put("/api/projet/modifier/:id", controlerProjet.ModifierProjet);
  //detail d'un projet
  app.get("/api/projet/detail/:id" ,controlerProjet.getById);
  //nombre projet d'adduction
  app.get("/api/projet/nbrProjet", controlerProjet.nbrProjet);
  //mijery ny projet en cours sy ny mbola tsy vita
  app.get("/api/projet/projetFini", controlerProjet.finitionProjet);
  
}