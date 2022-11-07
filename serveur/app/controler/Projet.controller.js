//update
// ato za no mireceive data,
//     ato no mfind,
//         ato no mandefa json

//misy erreur ilay res.send message, milla jerena ilay izy

const model = require("../models");
const controller = {}
exports.message = (req, res, next) => {
  res.status(200).json({ messages: "mihaja antonio" });
}

// exports.getAllProjet = (req, res) => {
//   model.Projets.findAll().then((rep) => { res.status(200).json(rep); });
// };

exports.getAllProjet = (req, res) => {
  console.log('test');
  model.Projets.findAll()
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


exports.AjoutProjet = (req, res) => {
  model.Projets.create({
    id_utilisateur: req.body.id_utilisateur,
    region: req.body.region,
    district: req.body.district,
    commune: req.body.commune,
    fokontany: req.body.fokontany,
    localite: req.body.localite,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    nb_beneficiaire: req.body.nb_beneficiaire,
    point_eau: req.body.point_eau,
    infra_eau: req.body.infra_eau,
    etat_ouvrage: req.body.etat_ouvrage,
    utilisation: req.body.utilisation
  })
    .then(rep => {
      res.send('Projet was registered successfully!')
    }
    )
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

};
//supprimer un projet
exports.supprimer = (req, res) => {
  model.Projets.destroy(
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

//modifier un projet
exports.ModifierProjet = (req,res) => {
  model.Projets.update({
   id_utilisateur: req.body.id_utilisateur,
   region: req.body.region,
   district: req.body.district,
   commune: req.body.commune,
   fokontany: req.body.fokontany,
   localite: req.body.localite,
   latitude: req.body.latitude,
   longitude: req.body.longitude,
   nb_beneficiaire: req.body.nb_beneficiaire,
   point_eau: req.body.point_eau,
   infra_eau: req.body.infra_eau,
   etat_ouvrage: req.body.etat_ouvrage,
   utilisation: req.body.utilisation
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