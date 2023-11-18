const express = require('express')
const path = require('path')

const options = {
    "caseSensitive":true,
    "strict": false
};
const router = express.Router(options);

router.get('/',(req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'slash.html'));
})

router.get('/users',(req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'users.html'));
})

router.post('/users',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

router.get('/products',(req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'products.html'));
})

router.post('/products',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;