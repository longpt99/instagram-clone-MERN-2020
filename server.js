require('dotenv').config();
const express = require('express');

const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require("helmet");
const cors = require('cors');
const passport = require('passport');

const routes = require('./routes');

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(cors());
app.use(helmet());
app.use(express.static('public'));

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
};

app.get('/', (req, res) => {
  res.send('Server load completely');
});
app.use('/api', routes);

app.get('/*', (req, res) => {
  if (process.env.NODE_ENV) {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
    if(req.headers['x-forwarded-proto'] != 'https'){
      res.redirect('https://' + req.hostname +req.url);
    }
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
