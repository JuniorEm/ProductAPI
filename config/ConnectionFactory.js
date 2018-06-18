var mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/test';

class ConnectionFactory {
    
    constructor() {}

    connect() {
        mongoose.connect(mongoDB);
        console.log("Database connected. . .");
    }

    disconnect() {
        mongoose.connection.close();
        console.log("Database disconnected. . .");
    }

    getMongoose() {
        return mongoose;
    }
}

module.exports = ConnectionFactory;
