const express = require('express');
const cors = require('cors');
const { pool } = require('./db.js');
const bodyParser = require('body-parser');
const EventsContoller = require('./controllers/Events.js');
const UsersController = require('./controllers/users.js');
const PlacesControler = require('./controllers/places.js');
const CommentsController = require('./controllers/comments.js');
const BugetItemControllers = require('./controllers/buget-item.js');
const IdeasController = require('./controllers/ideas.js');
const PaymentsController = require('./controllers/payment.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/users', UsersController.create);
app.get('/user/:nickname', UsersController.findByNickname);
app.put('/users', UsersController.update);
app.delete('/user/:id', UsersController.delete);

app.get("/place/:id", PlacesControler.findById);
app.get("/places", PlacesControler.all);
app.post('/place', PlacesControler.create);
app.put('/place/:id', PlacesControler.update);
app.delete('/place/:id', PlacesControler.delete);

app.get("/event/:id", EventsContoller.findById);
app.get("/events", EventsContoller.all);
app.get("/event/:id/users", UsersController.allForEvent);
app.post('/event', EventsContoller.create);
app.put('/event/:id', EventsContoller.update);
app.delete('/event/:id', EventsContoller.delete);

app.get('/event/:id/comments', CommentsController.allForEvents);
app.get('/place/:id/comments', CommentsController.allForPlaces);
app.get('/comment/:id', CommentsController.findById);
app.post('/event/:id/comment', CommentsController.createForEvent);
app.post('/place/:id/comment', CommentsController.createForPlaces);
app.put('/comment/:id', CommentsController.update);
app.delete('/comment/:id', CommentsController.delete);

app.get('/event/:id/ideas', IdeasController.all);
app.get('/idea/:id', IdeasController.findById);
app.post('/event/idea', IdeasController.create);
app.delete('/idea/:id', IdeasController.delete);

app.get('/event/:id/buget', BugetItemControllers.all);
app.get('/buget_item/:id', BugetItemControllers.findById);
app.post('/event/:id/buget_item', BugetItemControllers.create);
app.put('/buget_item/:id', BugetItemControllers.update);
app.delete('buget_item/:id', BugetItemControllers.delete);

app.get('/event/:id/payments', PaymentsController.all);
app.get('/payment/:id', PaymentsController.findById);
app.post('/event/:id/payment', PaymentsController.create);
app.delete('/payment/:id', PaymentsController.delete);

app.get("/", (req, res) => {
    res.send('Hello from the evmake server');
});

pool.query('SELECT NOW()', (err, res) => {
    if(err){
        console.log(err);
    }
    else{
        app.listen(4000, () => {
            console.log('Servaer has been started!')
        });
        console.log(res.rows[0]);
    }
});
