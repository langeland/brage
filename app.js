const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));


const webhookRoutes = require('./routes/webhook');
const frontendRoutes = require('./routes/frontend');

app.use('/webhook', webhookRoutes);
//app.use(frontendRoutes);

app.use(errorController.get404);

sequelize.sync()
.then(result => {
    //console.log(result);
    app.listen(3000);
})
.catch(err => {
    console.log(err);
});


