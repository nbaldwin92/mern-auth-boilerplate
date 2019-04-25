const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const test = require('./routes/api/test');

const app = express();

// Enable Cors
app.use(cors());

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useFindAndModify: false })
  // eslint-disable-next-line no-console
  .then(() => console.log('MongoDB successfully connected'))
  // eslint-disable-next-line no-console
  .catch(err => console.log(err));

// Passport middleware

app.use(passport.initialize());

// Passport config

require('./config/passport')(passport);

// Routes
app.use('/api/users', users);

app.use('/api/test', test);

const port = process.env.PORT || 5000;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
