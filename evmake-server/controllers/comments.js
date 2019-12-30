const Comments = require('../models/Comments.js');

exports.allForEvents = function (req, res) {
    Comments.allForEvents(function (err, result){
        if(err){
            res.send(err);
        }
        else {
            res.send(result.rows);
        }
    })
}

exports.allForPlaces = function (req, res) {
    Comments.allForPlaces(function (err, result){
        if(err){
            res.send(err);
        }
        else {
            res.send(result.rows);
        }
    })
}

exports.findById = function (req, res) {
    Comments.findById(req.params.id, function (err, result){
        if(err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(result.rows);
    })
}

exports.createForEvent = function (req, res) {
    let comment = {
        id_event : req.body.id,
        id_user : req.body.id_user,
        content : req.body.content,
        date : req.body.date,
    }
    Comments.createForEvent(comment, function(err) {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(200);            
        }
    });
}

exports.createForPlaces = function (req, res) {
    let comment = {
        id_place : req.body.id,
        id_user : req.body.id_user,
        content : req.body.content,
        date : req.body.date,
    }
    Comments.createForPlaces(comment, function(err) {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(200);            
        }
    });
}

exports.update = function (req, res){
    let comment = {
        id : req.params.id,
        content : req.body.content,
    }
    Comments.update(comment, function(err) {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(200);
        }
    });
}

exports.delete = function (req, res) {
    Comments.delete(req.params.id, function(err) {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(200);
        }
    });
}