const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const models = require('../part-2/models.js');
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});


// app.route('/events').get((req,res) => {
//   res.status(200).send(customers
// });

app.route('/users').get((req, res) => {
  res.status(200).send(models.alex);
});

