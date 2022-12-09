//update
// ato za no mireceive data,
//     ato no mfind,
//         ato no mandefa json

//misy erreur ilay res.send message, milla jerena ilay izy

const { QueryTypes } = require("sequelize");
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
    nom: req.body.nom,
    construction: req.body.construction,
    region: req.body.region,
    district: req.body.district,
    commune: req.body.commune,
    debutLocalite: req.body.debutLocalite,
    finLocalite: req.body.finLocalite,
    debutLatitude: req.body.debutLatitude,
    debutLongitude: req.body.debutLongitude,
    finLatitude: req.body.finLatitude,
    finLongitude: req.body.finLongitude,
    etat_ouvrage: req.body.etat_ouvrage
   
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
    { where: { id: req.params.id } }
  )
    .then(rep => {
      res.send({ rep })
    }
    )
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
}
exports.nbrCanalisation = (req, res) => {
  model.sequelize.query(
    ' SELECT count(*) as nombre,  "region" FROM public."Canalisations" group by  "region"',
    {
      type: QueryTypes.SELECT
    }).then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err)
    });
};
//modification d'un projet

exports.modifierCanalisation = (req, res) =>
{
  console.log("---------------------------------")
  console.log(req.params.id)
  console.log(req.body.etat_ouvrage)
  model.Canalisation.update({
  
   etat_ouvrage: req.body.etat_ouvrage
   
  }, 
 {
   where:{id: req.params.id}
 })
 .then(rep => {
   res.status(200).send(rep);
 }
 )
   .catch(err => {
     res.status(500).send({ message: err.message });
   }) 
  
};


//nombre projet en cours
exports.finitionProjet = (req,res) => {
  model.sequelize.query(
    'SELECT count(*) as encours, etat_ouvrage as nom FROM public."Canalisations"  group by etat_ouvrage',
    {
      type: QueryTypes.SELECT
    }).then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
}