require('dotenv').config();
const express = require('express');

const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require('passport');
const fileUpload = require('express-fileupload');

const routes = require('./routes');

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(fileUpload());
app.use(express.static('public'));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Server load completely');
});
app.use(routes);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
}; 

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
