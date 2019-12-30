const {pool} = require('../db');

exports.all = function (cb) {
    pool.query(`select * from events;`, function(err, result){
        cb(err, result);
    });
};

exports.findById = function (id, cb) {
    pool.query(`select * from events where id_event = ${id};`, function(err, result){
        cb(err, result);
    });
}

exports.create = function(event, cb) {
    pool.query(`INSERT INTO events (id_menager, id_place, name, description, date) VALUES (${event.id_menager},
         ${event.id_place}, '${event.name}', '${event.description}', '${event.date}');`, function(err){
        cb(err);
    });
}

exports.update = function(event, cb) {
    pool.query(`update events set id_place = '${event.id_palce}', name = '${event.name}'
    , description = '${event.description}',
    date = '${event.date}' where id_event = ${event.id};`, function(err){
        cb(err);
    });
}

exports.delete = function(id, cb) {
    pool.query(`delete from events where id_event = ${id};`, function(err) {
        cb(err);
    });
}