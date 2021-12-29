const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://mohamedelghoul:ATS123@cluster0.hlhjr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const connectionToDB = async () => {
    await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        });
        console.log("Connected to Database!!");
}

module.exports = connectionToDB;