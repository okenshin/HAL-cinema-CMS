const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.json({
        id: 'abcdefg',
        name: '林 信明',
        cmsRole: 'admin'
    });
});

module.exports = router;
