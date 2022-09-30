const mongoose = require('mongoose');

module.exports = async () => {
    try{
        const connectionString = {
            useNewUrlParser :true,
            useCreateIndex: true,
            useUnifiedTopology: true
        };

        await mongoose.connect(
            "mongodb://localhost/todo-app",
            connectionString
        );
        console.log("Connected to database");
    }
    catch(error) {
        console.log("Could not connect to database", error);
    }
}