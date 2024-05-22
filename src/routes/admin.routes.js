const express = require('express');
const adminRouter = express.Router();

adminRouter.get('/admin', (req, res) => {
    res.send('Welcome to Bankly Admin');
});

module.exports = adminRouter;