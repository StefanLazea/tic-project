
const express = require('express');
const firebase = require('firebase');
const admin = require('firebase-admin');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
// const { config } = require('./firebase/firebase.config');
const dotenv = require('dotenv');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());
dotenv.config();

// firebase.initializeApp(config);

const serviceAccount = require('./firebase/serviceAccountKey.json');

admin.initializeApp( {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tic-slazea.firebaseio.com"
});

app.use("/api", routes);

app.listen(process.env.PORT, () => {
  console.log(`Tic project is running at http://localhost:${process.env.PORT}`);
});