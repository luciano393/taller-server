const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./routes/index');
const ImageKit = require("imagekit");

dotenv.config()
const {PORT, DATABASE, DATABASE_TEST } = process.env;

const app = express();
app.use(cors());

// Conexion con imagekit
const imagekit = new ImageKit({
    publicKey : "public_lGafPttRIS/xR8KMgg+uSkT1IGw=",
    privateKey : process.env.IK_PRIVATE,
    urlEndpoint : "https://ik.imagekit.io/0lswtnkkmck"
});

const authenticationParameters = imagekit.getAuthenticationParameters();
app.use('auth', authenticationParameters)


// Conectar con MongoDB
const connectionString = NODE_ENV === 'test'
    ? DATABASE_TEST
    : DATABASE

mongoose.Promise = global.Promise;
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log("Data base connected"))

// Habilitar el body-parser
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Habilitar Routing
app.use('/API', router())

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})