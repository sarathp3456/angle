var path = require('path');
var express = require('express');
var app = express();
/*app.use(express.static(path.join(__dirname, '.tmp')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'src')));*/
const PORT = 8000;
app.get('/products', function(req, res) {
    console.log(44);
    var productdetails = [{ "name": "Chair", "color": "Brown", "mfd": "12.02.2018" }];
    var messages = [{ name: 'sarath', gender: 'male' }, { name: 'sudheesh', gender: 'male' }, { name: 'reeni', gender: 'female' }];
    console.log(12);
    res.send(productdetails);
});
app.listen(PORT, () =>
    console.log('Your server is running on ', PORT)
);
