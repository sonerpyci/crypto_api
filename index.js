const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const models = require('./models');



app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/subscribers", require("./routes/subscriber.js"));
app.use("/countries", require("./routes/country.js"));
app.use("/registration", require("./routes/registration.js"));
app.use("/registered_coin", require("./routes/registered_coin.js"));

app.get('/', function (req, res) {
    res.send('Hello World');
});


models.sequelize.sync().then(() => {
    const server = app.listen(process.env.PORT || 3000, () => {
        console.log('Server Started At', server.address().port);
    });
}).catch((err) => {
    console.error('Unable to connect to the database: ', err);
});
