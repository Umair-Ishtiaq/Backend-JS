//req->(middleware)->routes->response
//route chlany sy phly kuch krna ho thats middleware

//middleware is a function that is executed between request and response

//Request ati hy server ny accept ki or routes ny execute ki req or route ky drmyan middlware hy

//Uses:
//to know user details and attach tham with request

//fact



const express = require('express');
const app = express()

//middleware
app.use(function (req, res, next) {
    console.log("req.url", req.url);
    next();
})


app.get('/', function (req, res) {
    console.log("Route '/' handler triggered!");
    res.send('Hello World!');
});
app.listen(3000);