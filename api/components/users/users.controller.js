var User = require('./users.model');



// Funciones Josué


//Backend Profesor

module.exports.setPlayers = function(req, res){
  var newUser = new User({
    id: req.body.id,
    name : req.body.name,
    photo: req.body.photo,
    money: req.body.money,
    alias: req.body.alias
  });
  newUser.save(function(err){
    if(err){
      res.json({success:false, msg:'No se pudo registrar el jugador' + err});
    }else{
      res.json({success:true, msg:'Se registró el jugador correctamente'});
    }
  });
}

module.exports.findAll = function(req,res){
  User.find().then(function(users){
    res.send(users);
  });
};

module.exports.updatePlayer = function(req,res){
  // console.log(req.body.id);
  // User.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
  //   res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
  // });

  User.findByIdAndUpdate(req.body._id, { $set: req.body}).then(function(data){
    res.json({success:true,msg:'Se ha actualizado correctamente.'});
  });
}
