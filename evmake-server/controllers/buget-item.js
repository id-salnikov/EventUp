const BugetIntems = require('../models/buget-item.js');

exports.all = function (req, res) {
    BugetIntems.all(req.params.id_event, function (err, result){
        if(err){
            res.send(err);
        }
        else {
            res.send(result.rows);
        }
    })
}

exports.findById = function (req, res) {
    BugetIntems.findById(req.params.id, function (err, result){
        if(err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(result.rows);
    })
}

exports.create = function (req, res) {
    let bugetIntem = {
        id_event : req.params.id,
        name : req.body.name,
        description : req.body.description,
        cost : req.body.cost,
    }
    BugetIntems.create(bugetIntem, function(err) {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(200);            
        }
    });
}

exports.update = function (req, res){
    let bugetIntem = {
        id : req.params.id,
        name : req.body.name,
        description : req.body.description,
        cost : req.body.cost,
    }
    BugetIntems.update(bugetIntem, function(err) {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(200);
        }
    });
}

exports.delete = function (req, res) {
    BugetIntems.delete(req.params.id, function(err) {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(200);
        }
    });
}