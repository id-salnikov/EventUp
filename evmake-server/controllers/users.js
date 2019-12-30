const Users = require('../models/users.js');

exports.create = function (req, res) {
    let user = {
        nickname : req.body.nickname,
        password : req.body.password,
        full_name : req.body.full_name,
        email : req.body.email,
        phone : req.body.phone,
    }
    Users.create(user, function(err) {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(200);            
        }
    });
}

exports.allForEvent = function(res, req) {
    Users.allForEvent(req.params.id, function (err, result) {
        if(err){
            res.send(err);
        }
        else{
            res.send(result.rows);            
        }
    });
}

exports.findByNickname = function(res, req) {
    Users.findByNickname(req.params,nickname, function (err, result) {
        if(err){
            res.send(err);
        }
        else{
            res.send(result.rows);            
        }
    });
}

exports.update = function (req, res) {
    let user = {
        id : req.params.id,
        nickname : req.body.nickname,
        password : req.body.password,
        full_name : req.body.full_name,
        email : req.body.email,
        phone : req.body.phone,
    }
    Users.update(user, function(err) {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(200);            
        }
    });
}

exports.delete = function (req, res) {
    Users.delete(req.params.id, function(err) {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(200);
        }
    });
}