require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose')

const cors = require("cors");
// CORS OPTIONS
var whitelist = ["http://localhost:5173"];
var corsOptionsDelegate = (req, callback) => {
  var corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = {
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    };
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions);
};

mongoose.connect(process.env.DATABASE_URL)
app.use(express.json());
app.use(cors(corsOptionsDelegate))

const applicationRouter = require('./src/controller/application-router.js');
app.use('/application', applicationRouter);

app.get('/', async (req, res) => {
    try {
        res.json({
            message: "Hi, you're in!"
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Listening on port:", port);
});
