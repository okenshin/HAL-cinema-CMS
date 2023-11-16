const express = require('express');
const router = express.Router();

router.get('/',function(req,res,next) {
    res.json({
        id : 'hp1',
        title : 'ハリーポッターと賢者の石',
        context : 'テキスト入力',
        length : '01:20:23',
    });
});

module.exports = router;