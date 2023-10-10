const express = require('express')
const mysql = require('mysql')
const port = 8080;
const app = express()
const dbConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
};
app.use(express.json())
app.get('/healthz', (req, res) => {
  const connection = mysql.createConnection(dbConfig);
  res.setHeader('Cache-Control', 'no-cache');
  connection.connect(err => {
    if (err) {
      res.status(503).send();
      return;
    }
    console.log('Successfully connected to MySQL');
    res.status(200).send();
    connection.end();
  });
});

app.all('/healthz', (req, res, next) => {
  res.status(405).set('Allow', 'GET').send(); 
});

app.listen(port, () => console.log(`app listening on port ${port}`))