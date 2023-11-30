const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

router.get('/', function(req, res) {
    const pool = req.mysql;
    pool.query('SELECT * FROM cms', (error, results, fields) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'サーバーエラー' });
        }
        res.json(results);
    });
});


router.post('/', function(req, res) {
    const pool = req.mysql;
    const cmsId = req.body.cmsId;
    const cmsPass = req.body.cmsPass;
    const cmsRole = req.body.cmsRole;

    // パスワードのハッシュ化
    try {
        const hashedPassword = bcrypt.hashSync(cmsPass, 10);
        
        const query = 'INSERT INTO cms (cmsID, cmsPass, cmsRole) VALUES (?,?,?)';

        pool.query(query, [cmsId, hashedPassword, cmsRole], (error, results, fields) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ error: 'サーバーエラー' });
            }
            res.json({ msg: '新規追加しました！' });
        });
    } catch (hashError) {
        console.error(hashError);
        return res.status(500).json({ error: 'ハッシュ化エラー' });
    }
});

router.post('/login', function(req, res) {
    const pool = req.mysql;
    const cmsId = req.body.cmsId;
    const cmsPass = req.body.cmsPass;

    const query = 'SELECT * FROM cms WHERE cmsID = ?';

    pool.query(query, [cmsId], (error, results, fields) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'サーバーエラー' });
        }

        // ID重複確認
        if (results.length === 0) {
            return res.status(401).json({ error: '無効な情報' });
        }

        const user = results[0];

        // ハッシュ化パスワードの比較
        bcrypt.compare(cmsPass, user.cmsPass, (bcryptError, bcryptResult) => {
            if (bcryptError) {
                console.error(bcryptError);
                return res.status(500).json({ error: 'サーバーエラー' });
            }

            if (!bcryptResult) {
                return res.status(401).json({ error: '無効な情報' });
            }

            // セッションに保存
            req.session.cmsId = user.cmsID;
            req.session.cmsRole = user.cmsRole;

            res.json({ msg: 'ログイン成功', user: user });
        });
    });
});

module.exports = router;