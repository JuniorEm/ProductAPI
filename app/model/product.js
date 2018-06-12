/* var connectionFactory = require('../../config/dbConfig');
var mongoose = new connectionFactory().getMongoose();


class DataSource {
    getSchema() {
        return new mongoose.Schema({
            name: String,
            quantity: Number
        });
    };

    getConnection() {
        return mongoose;
    }
}

module.exports = DataSource; */