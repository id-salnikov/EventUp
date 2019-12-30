const Ideas = require('../models/Ideas.js');

exports.all = function (req, res) {
    Ideas.all(req.params.id_event, function (err, result){
        if(err){
            res.send(err);
        }
        else {
            res.send(result.rows);
        }
    })
}

exports.findById = function (req, res) {
    Ideas.findById(req.params.id, function (err, result){
        if(err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(result.rows);
    })
}

exports.create = function (req, res) {
    let idea = {
        id_event : req.body.id_event,
        id_user : req.body.id_user,
        name : req.body.name,
        description : req.body.description,
    }
    Ideas.create(idea, function(err) {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(200);            
        }
    });
}

exports.delete = function (req, res) {
    Ideas.delete(req.params.id, function(err) {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(200);
        }
    });
}