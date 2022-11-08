//update
const controlerTacheAdduction = require("../controler/TacheAdduction.controller");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.setHeader(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/message", controlerTacheAdduction.message)
  //get All TacheAdduction
  // app.get("/api/TacheAdduction/TacheAdductions", controlerTacheAdduction.getAllTacheAdduction);
  //post TacheAdduction
  app.post("/api/tacheAdduction/AjoutTacheAdduction", controlerTacheAdduction.AjoutTacheAdduction);
  //delete TacheAdduction
  app.delete("/api/tacheAdduction/supprimer/:id", controlerTacheAdduction.supprimer);
  //get All TacheAdduction
  app.get("/api/tacheAdduction/TacheAdductions", controlerTacheAdduction.getAllTacheAdduction);
  //modifier un TacheAdduction
  app.put("/api/tacheAdduction/modifier/:id", controlerTacheAdduction.ModifierTacheAdduction)
}