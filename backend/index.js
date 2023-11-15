const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
const port = 4000; // サーバーポート

//Routers 設定
const movieRouter = require('./routes/movieRoute');
const cmsRouter = require('./routes/cmsRoute');
const scheduleRouter = require('./routes/scheduleRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/movie',movieRouter);
app.use('/cms',cmsRouter);
app.use('/schedule',scheduleRouter);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});