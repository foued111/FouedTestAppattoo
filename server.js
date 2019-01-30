require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const marsupilamiController = require('./controllers/marsupilamiController');
const marsupilamiRoutes = require('./routes/marsupilami');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/marsupilami/'));
app.engine('hbs', exphbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use('/marsupilami', marsupilamiController);
//app.use('/marsupilami', marsupilamiRoutes);