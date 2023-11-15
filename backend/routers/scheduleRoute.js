const express = require('express');
const router = express.Router();

router.get('/',function(req,res,next) {
    res.json({
        id : '1223',
        screenid : 'A',
        movieid : 'hp1'
    });
});