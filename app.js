const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3007;
const trickingMove = require('./results/moveResult');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.use('/move-result', trickingMove);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});


  return;
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });