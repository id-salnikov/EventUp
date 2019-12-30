create table users (id serial, nickname varchar(45) unique, password varchar(45), email varchar(45) unique, 
    full_name varchar(85), phone integer, cash integer);

create table users_event(id_user bigint, id_event bigint);

create table events(id_event serial, id_menager bigint, id_buget serial, id_place bigint, name varchar(105), 
    description varchar, date date);

create table buget_item (id_item serial, id_event bigint, name varchar(105), description varchar, cost money);

create table comment(id serial, id_user bigint, content varchar, date date);

create table place_comments(id_place bigint, id_comment bigint);

create table idia_comments(id_idea bigint, id_comment bigint);

create table event_comment(id_event bigint, id_comment bigint);

create table place(id serial, id_user bigint, name varchar(105), description varchar, addres varchar, cost money
    , email varchar(105), phone integer);

create table idea(id serial, id_event bigint, id_user bigint, name varchar(105), description varchar);

create table payment(id serial, id_user bigint, id_event bigint, description varchar, amount money);

INSERT INTO events (id_menager, name) VALUES ('1', 'Тестовое событие 1');

INSERT INTO buget_item (id_buget, name, cost) VALUES (1, 'Напитки', 100.99);

INSERT INTO users (name, password) VALUES ('test-user', '1111');

select * from events where id_event = 1;

update events set balance = 0 where id_event = 1;

update events set id_place = '1', name = 'updated_name', description = 'Обновленное событие',
    date = '2020-01-02' where id_event = 3;

delete from events where id_event = 2;

with id_comment as (insert into comment (id_user, content, date) 
    VALUES (1, 'Как погода на выходных?', '2019-12-30') RETURNING id)
insert into event_comment VALUES (1, (select id from id_comment));

with id_comment as (insert into comment (id_user, content, date) 
    VALUES (1, 'Как дела?', '2019-12-30') RETURNING id)
insert into event_comment VALUES (1, (select id from id_comment));

with id_comment as (insert into comment (id_user, content, date) 
    VALUES (1, 'Всем привет!', '2019-12-30') RETURNING id)
insert into event_comment VALUES (1, (select id from id_comment));

with id_comment as (insert into comment (id_user, content, date) 
    VALUES (1, 'Отличное место', '2019-12-30') RETURNING id)
insert into place_comments VALUES (1, (select id from id_comment));

with id_comment as (insert into comment (id_user, content, date) 
    VALUES (1, 'Непонятно где выход', '2019-12-30') RETURNING id)
insert into place_comments VALUES (1, (select id from id_comment));

with id_comment as (insert into comment (id_user, content, date) 
    VALUES (1, 'Обязательно зайду еще!', '2019-12-30') RETURNING id)
insert into place_comments VALUES (1, (select id from id_comment));

select * from comment join place_comments on comment.id = place_comments.id_comment;

select * from comment join event_comment on comment.id = event_comment.id_comment;


