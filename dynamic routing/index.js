const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const { log } = require('console');


app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    fs.readdir(`./files`, (err, files) => {
        res.render('index', { files: files });
        console.log(files);
    })
});

app.post('/create', (req, res) => {
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, (err) => {
        res.redirect('/');
    })
    console.log(req.body);

});
app.listen(3000)