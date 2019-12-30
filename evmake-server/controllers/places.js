const Places = require('../models/places.js');

exports.all = function (req, res) {
    Places.all(function (err, result){
        if(err){
            res.send(err);
        }
        else {
            res.send(result.rows);
        }
    })
}

exports.findById = function (req, res) {
    Places.findById(req.params.id, function (err, result){
        if(err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(result.rows);
    })
}

exports.create = function (req, res) {
    let place = {
        id_user : req.body.id_user,
        adress : req.body.adress,
        name : req.body.name,
        description : req.body.description,
        cost : req.body.cost,
        email : req.body.email,
        phone : req.body.phone,
    }
    Places.create(place, function(err) {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(200);            
        }
    });
}

exports.update = function (req, res){
    let place = {
        id : req.params.id,
        adress : req.body.adress,
        name : req.body.name,
        description : req.body.description,
        cost : req.body.cost,
        email : req.body.email,
        phone : req.body.phone,
    }
    Places.update(place, function(err) {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(200);
        }
    });
}

exports.delete = function (req, res) {
    Places.delete(req.params.id, function(err) {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(200);
        }
    });
}