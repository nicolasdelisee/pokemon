const trainerModel = require("../models/trainerModel");

const trainerController = {
  getAllTrainer: (req, res, next) => {
    trainerModel
      .findAll()
      .then(([trainer]) => res.status(200).send(trainer))
      .catch((err) => next(err));
  },
};

module.exports = trainerController;
