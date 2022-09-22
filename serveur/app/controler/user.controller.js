// ato za no mireceive data,
//     ato no mfind,
//         ato no mandefa json

const model = require("../models");

exports.getAll = (req, res) => {
    model.User.findAll().then((rep) => { res.send(rep); });
    // res.status(200).send("Public Content.");

};

exports.userBoard = (req, res) => {
    res.status(200).send("Mety mory e!!!!!!!!!User Content.");
};
exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};
exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
};