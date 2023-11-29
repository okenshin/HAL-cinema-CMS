const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    const pool = req.mysql;
    pool.query('SELECT * FROM cms', (error, results, fields) => {
        if(error){
            console.error(error);
        }
        res.json(results);
    });
});

router.post('/', function(req,res) {
    const pool = req.mysql;
    const cmsId = req.body.cmsId;
    const cmsPass = req.body.cmsPass;
    const cmsRole = req.body.cmsRole;

    const query = 'INSERT INTO cms (cmsID, cmsPass, cmsRole) VALUES (?,?,?)';

    pool.query(query,[cmsId,cmsPass,cmsRole], (error,results,fields) => {
        if (error) {
            console.error(error);
        }
        res.json({ msg : '新規追加しました！'});
    });
});

module.exports = router;
