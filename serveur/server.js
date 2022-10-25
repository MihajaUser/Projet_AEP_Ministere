//update 

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./app/models");

// db.sequelize.sync({ force: true })
//   .then(() => {
//     console.log("Synced db.");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message); 
//   });
var corsOptions = {
  origin: "http://localhost:8081",
  credentials: true
};
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


require("./app/routes/user.routes")(app);
require("./app/routes/Projet.routes")(app);
require("./app/routes/Canalisation.routes")(app);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});