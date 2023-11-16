const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // MySQLプールにアクセス
  const pool = req.mysql;

  // MySQLクエリや操作を実行


  //ここから欲しいデータの取得するクエリを書いていく
  pool.query('SELECT * FROM movie', (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

module.exports = router;
