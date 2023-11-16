const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // MySQLプールにアクセス
  const pool = req.mysql;

  // MySQLクエリや操作を実行

  //本日のスケジュール情報取得
  const query = 'SELECT s.scheduleID, m.movieName, s.screenID, s.scheduleStartDatetime FROM schedule s JOIN movie m ON s.movieID = m.movieID WHERE DATE(s.scheduleStartDatetime) = CURRENT_DATE() ORDER BY s.scheduleStartDatetime';

  pool.query(query, (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

module.exports = router;
