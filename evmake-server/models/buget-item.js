const {pool} = require('../db');

exports.all = function (id_event, cb) {
    pool.query(`select * from buget_item where id_event = ${id_event};`, function(err, result){
        cb(err, result);
    });
};

exports.findById = function (id, cb) {
    pool.query(`select * from buget_item where id_item = ${id};`, function(err, result){
        cb(err, result);
    });
}

exports.create = function(bugetItem, cb) {
    pool.query(`INSERT INTO buget_item (id_event, name, description, cost) VALUES (${bugetItem.id_menager},
         '${bugetItem.name}', '${bugetItem.description}', '${bugetItem.cost}');`, function(err){
        cb(err);
    });
}

exports.update = function(bugetItem, cb) {
    pool.query(`update buget_item set name = '${bugetItem.name}'
    , description = '${bugetItem.description}',
    cost = '${bugetItem.cost}' where id_item = ${bugetItem.id};`, function(err){
        cb(err);
    });
}

exports.delete = function(id, cb) {
    pool.query(`delete from buget_item where id_item = ${id};`, function(err) {
        cb(err);
    });
}