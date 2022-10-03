const mongoose = require('mongoose');
require("dotenv").config();

module.exports = async () => {
    try{
        const connectionString = {
            useNewUrlParser :true,
            useUnifiedTopology: true
        };
        const uri = process.env.MONGODB_URI;
        await mongoose.connect(uri,connectionString);
        const connection = mongoose.connection;
        connection.once('open', () => {
            console.log("Connected to database");
        })
    }
    catch(error) {
        console.log("Could not connect to database", error);
    }
}

//mongodb+srv://ginxx009:<password>@cluster0.tsjosoo.mongodb.net/?retryWrites=true&w=majority