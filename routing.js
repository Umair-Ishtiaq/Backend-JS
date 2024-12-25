//req->(middleware)->routes->response
//route chlany sy phly kuch krna ho thats middleware

//middleware is a function that is executed between request and response

//Request ati hy server ny accept ki or routes ny execute ki req or route ky drmyan middlware hy

//Uses
//to know user details and attach tham with request

const express = require('express');
const app = express()
app.get('/', function (req, res) {
    res.send('Hello World!');
})
app.listen(3000);