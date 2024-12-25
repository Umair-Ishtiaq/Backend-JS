const express = require('express');
const app = express();
const path = require('path');

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//public static files
app.use(express.static(path.join(__dirname, 'public')));

//ejs
app.set('view engine', 'ejs');



app.get('/profile/:username', function (req, res) {
    req.params.username
    res.send(`welcome, ${req.params.username}`);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
