const {pool} = require('../db.js');

exports.create = function(user, cb) {
    pool.query(`INSERT INTO users (nickname, password, email, full_name, phone) VALUES (${user.nickname},
         ${user.password}, '${user.email}', '${user.full_name}', '${user.phone}');`, function(err){
        cb(err);
    });
}

exports.findByNickname = function(nickname, cb) {
    pool.query(`select * from users where nickname = '${nickname}'`, function(err, result){
        cb(err, result);
    });
}
//select * from comment join event_comment on comment.id = event_comment.id_comment;
exports.allForEvent = function(id_event, cb){
    pool.query(`select * from users join users_event on users.id = users_event.id_user 
    where users_event.id_event = ${id_event};`, function (err, result) {
        cb(err, result);
    })
}

exports.update = function(user, cb) {
    pool.query(`update users set naickname = '${user.nickname}', password = '${user.password}'
    , email = '${user.email}',
    full_name = '${user.full_name}', phone = '${user.phone}' where id = ${user.id};`, function(err){
        cb(err);
    });
}

exports.delete = function(id, cb) {
    pool.query(`delete from users where id = ${id};`, function(err) {
        cb(err);
    });
}