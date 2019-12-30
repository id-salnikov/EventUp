const {pool} = require('../db.js');

exports.all = function ( id_event, cb) {
    pool.query(`select * from ideas where id_event = ${id_event};`, function(err, result){
        cb(err, result);
    });
};

exports.findById = function (id, cb) {
    pool.query(`select * from ideas where id_idea = ${id};`, function(err, result){
        cb(err, result);
    });
}

exports.create = function(idea, cb) {
    pool.query(`INSERT INTO ideas (id_event, id_user, name, description) VALUES (${idea.id_event},
         ${idea.id_user}, '${idea.name}', '${idea.description}');`, function(err){
        cb(err);
    });
}

exports.delete = function(id, cb) {
    pool.query(`delete from ideas where id_idea = ${id};`, function(err) {
        cb(err);
    });
}