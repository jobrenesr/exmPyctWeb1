var express = require('express');
var router = express.Router();
var userController = require('./users.controller.js');

router.param('id', function(req, res, next, id) {
  req.body.id = id;
  next();
});


// Rutas de Josué
//Rutas para profesores
router.route('/set_players')
  .post(function(req, res) {
    userController.setPlayers(req, res);
  });

router.route('/get_all_players')
  .get(function(req, res) {
    userController.findAll(req, res);
  });

router.route('/update_player')
  .put(function(req, res) {
    userController.updatePlayer(req, res);
  });

  router.route('/update_temporal_password')
  .put(function(req, res) {
    userController.updateTemporalPassword(req, res);
  });

  //Ruta para Alumnos
  router.route('/save_student')
    .post(function(req, res) {
      userController.saveStudent(req, res);
    });

  router.route('/get_all_students')
    .get(function(req, res) {
      userController.findAllStudents(req, res);
    });

  router.route('/update_student')
    .put(function(req, res) {
      userController.updateStudent(req, res);
    });
//Ruta para subir de grado competidor
router.route('/update_belt')
  .put(function(req, res) {
    userController.updateBelt(req, res);
  });

router.route('/save_consul')
    .post(function(req, res){
        userController.saveConsul(req,res);
    });
router.route('/update_weight')
    .put(function(req,res){
        userController.updateWeigth(req,res);
    });
module.exports = router;
