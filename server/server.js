require('dotenv').config();

const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require('passport');

const routes = require('./routes')

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.static('public'));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Server load completely')
});

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
