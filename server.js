if (process.env.NODE_ENV !== 'production') require('./config');

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const showRoutes = require('./routes/show');

const app = express();

const PORT = process.env.PORT

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/show', showRoutes);

app.use(express.static(path.join(__dirname, "/dist")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

app.listen(PORT);