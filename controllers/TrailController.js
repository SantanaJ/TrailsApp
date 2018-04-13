var db = require("../models");
console.log("trail controller");

module.exports = {
//   // Find all headlines, sort them by date, send them back to the user
  findAll: function(req, res) {
    db.Trail
        .find({})
        .sort({ name: -1 })
        .then(function(dbTrail) {
            console.log("findAll trails:", dbTrail);
            res.json(dbTrail);
      });
  },
  findById: function(req,res){
    db.Trail
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
      db.Trail
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  }
//   // Delete the specified headline
//   delete: function(req, res) {
//     db.Trail.remove({ _id: req.params.id }).then(function(dbTrail) {
//       res.json(dbTrail);
//     });
//   },
// //   // Update the specified headline
//   update: function(req, res) {
//     db.Trail.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function(dbTrail) {
//       res.json(dbTrail);
//     });
//   }
};