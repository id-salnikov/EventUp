const Payment = require('../models/Payment.js');

exports.all = function (req, res) {
    Payment.all(req.params.id, function (err, result){
        if(err){
            res.send(err);
        }
        else {
            res.send(result.rows);
        }
    })
}

exports.findById = function (req, res) {
    Payment.findById(req.params.id, function (err, result){
        if(err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(result.rows);
    })
}

exports.create = function (req, res) {
    let payment = {
        id_user : req.body.id_user,
        id_event : req.body.id_event,
        description : req.body.description,
        amount : req.body.amount,
    }
    Payment.create(payment, function(err) {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(200);            
        }
    });
}

exports.delete = function (req, res) {
    Payment.delete(req.params.id, function(err) {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(200);
        }
    });
}