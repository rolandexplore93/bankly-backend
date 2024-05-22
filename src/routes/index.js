const express = require('express');
const router = express.Router();

const adminRouter = require('./admin.routes');

router.use('/', adminRouter)

router.get('/', (req, res) => {
    res.send(`Welcome to ${process.env.APPNAME}`)
});


module.exports = router;