const {pool} = require('../db');

exports.all = function (id_event, cb) {
    pool.query(`select * from payment where id_event = ${id_event};`, function(err, result){
        cb(err, result);
    });
};

exports.findById = function (id, cb) {
    pool.query(`select * from payment where id_payment = ${id};`, function(err, result){
        cb(err, result);
    });
}

exports.create = function(payment, cb) {
    pool.query(`INSERT INTO payment (id_user, id_event, description, amount) VALUES (${payment.id_user},
         ${payment.id_event}, '${payment.description}', '${payment.amount}');`, function(err){
        cb(err);
    });
}

exports.delete = function(id, cb) {
    pool.query(`delete from payment where id_payment = ${id};`, function(err) {
        cb(err);
    });
}