const Events = require('../models/events.js');

exports.all = function (req, res) {
    Events.all(function (err, result){
        if(err){
            res.send(err);
        }
        else {
            res.send(result.rows);
        }
    })
}

exports.findById = function (req, res) {
    Events.findById(req.params.id, function (err, result){
        if(err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(result.rows);
    })
}

exports.create = function (req, res) {
    let event = {
        id_menager : req.body.id_menager,
        id_place : req.body.id_place,
        name : req.body.name,
        description : req.body.description,
        date : req.body.date,
    }
    Events.create(event, function(err) {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(200);            
        }
    });
}

exports.update = function (req, res){
    let event = {
        id : req.params.id,
        id_place : req.body.id_place,
        name : req.body.name,
        description : req.body.description,
        date : req.body.date,
    }
    Events.update(event, function(err) {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(200);
        }
    });
}

exports.delete = function (req, res) {
    Events.delete(req.params.id, function(err) {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(200);
        }
    });
}