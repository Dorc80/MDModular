const bodyParser = require('body-parser');
const express = require('express');
require('./server/config/mongoose');
const app = express();
const port = 8000;

app.use(express.static(__dirname + '/client/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', __dirname + '/client/views');
app.set('view engine', 'ejs');

require('./server/config/routes')(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});