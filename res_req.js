const express = require('express');
const app = express();
app.get("/", function (req, res) {
    res.send('Hello World!');
});
app.get("/about", function (req, res) {
    res.send('about!');
});
app.get("/profile", function (req, res, next) {
    //on console
    return next(new Error("Error"));
});


app.use(function (err, req, res, next) {
    console.log(err.stack);
    //on front end
    res.status(500).send('Something broke!');
})
app.listen(3000);