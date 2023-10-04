const mongoose = require("mongoose");
const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('error', (err) => console.error(err))
mongoose.connection.on('connected', (err) => console.log("Connected"))
