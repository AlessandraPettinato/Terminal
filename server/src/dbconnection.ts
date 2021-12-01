const mongoose = require("mongoose");
require("dotenv").config();

const databaseURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster.wvsij.mongodb.net/Data?retryWrites=true&w=majority`;

const dbconnection = mongoose.connect(databaseURL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

module.exports = dbconnection;
