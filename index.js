const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const models = require('./models');



app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use("/subscribers", require("./routes/subscriber.js"));
app.use("/countries", require("./routes/country.js"));

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
