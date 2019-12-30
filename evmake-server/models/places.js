const {pool} = require('../db.js');

exports.all = function (cb) {
    pool.query(`select * from Place;`, function(err, result){
        cb(err, result);
    });
};

exports.findById = function (id, cb) {
    pool.query(`select * from Place where id = ${id};`, function(err, result){
        cb(err, result);
    });
}

exports.create = function(place, cb) {
    pool.query(`INSERT INTO Place (id_user, adress, name, description, cost, email, phone) 
        VALUES (${place.id_user},
         ${place.adress}, '${place.name}', '${place.description}', '
         ${place.cost}', '${place.email}', '${place.phone}');`, function(err){
        cb(err);
    });
}

exports.update = function(place, cb) {
    pool.query(`update Place set adress = '${place.adress}', name = '${place.name}'
    , description = '${place.description}',
    cost = '${place.cost}',
    email = '${place.email}',
    phone = '${place.phone}' where id = ${place.id};`, function(err){
        cb(err);
    });
}

exports.delete = function(id, cb) {
    pool.query(`delete from Place where id = ${id};`, function(err) {
        cb(err);
    });
}