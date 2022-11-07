//update
// ato za no mireceive data,
//     ato no mfind,
//         ato no mandefa json

//misy erreur ilay res.send message, milla jerena ilay izy

const model = require("../models");

exports.message = (req, res, next) => {
  res.status(200).json({ messages: "mihaja antonio" });
}

exports.getAllCanalisation = (req, res) => {
  console.log('test');
  model.Canalisation.findAll()
  .then((rep) => { 
    res.send(rep); 
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Misy erreur"
    });
  });
};

exports.AjoutCanalisation = (req, res) => {
  model.Canalisation.create({
    id_utilisateur: req.body.id_utilisateur,
    debutLocalite: req.body.debutLocalite,
    finLocalite: req.body.finLocalite,
    debutLatitude: req.body.debutLatitude,
    debutLongitude: req.body.debutLongitude,
    finLatitude: req.body.finLatitude,
    finLongitude: req.body.finLongitude,
  })
    .then(rep => {
      res.send('Canalisation was registered successfully!')
    }
    )
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

};

exports.supprimer = (req, res) => {
  model.Canalisation.destroy(
    {where: {id: req.params.id} }
  )
  .then(rep => {
    res.send({ rep })
  }
  )
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
}