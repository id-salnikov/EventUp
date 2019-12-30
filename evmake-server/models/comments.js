const {pool} = require('../db');

exports.allForEvents = function (cb) {
    pool.query(`select * from comment join place_comments on comment.id = place_comments.id_comment;`, 
    function(err, result){
        cb(err, result);
    });
};

exports.allForPlaces = function (cb) {
    pool.query(`select * from comment join event_comment on comment.id = event_comment.id_comment;`, 
    function(err, result){
        cb(err, result);
    });
};

exports.findById = function (id, cb) {
    pool.query(`select * from comments where id_comment = ${id};`, function(err, result){
        cb(err, result);
    });
}

exports.createForEvent = function(comment, cb) {
    pool.query(`with id_comment as (insert into comment (id_user, content, date) 
    VALUES (${comment.id_event}, '${comment.content}', '${comment.date}') RETURNING id)
insert into event_comment VALUES (${comment.id_event}, (select id from id_comment));`, function(err){
        cb(err);
    });
}

exports.createForPlaces = function(comment, cb) {
    pool.query(`with id_comment as (insert into comment (id_user, content, date) 
    VALUES (${comment.id_palce}, '${comment.content}', '${comment.date}') RETURNING id)
insert into place_comment VALUES (${comment.id_palce}, (select id from id_comment));`, function(err){
        cb(err);
    });
}

exports.update = function(comment, cb) {
    pool.query(`update comments set content = '${comment.content}' where id_comment = ${comment.id};`, function(err){
        cb(err);
    });
}

exports.delete = function(id, cb) {
    pool.query(`delete from comments where id_comment = ${id};`, function(err) {
        cb(err);
    });
}