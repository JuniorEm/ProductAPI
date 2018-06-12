var productModel = require('../model/product');
var connectionFactory = require('../../config/ConnectionFactory');

class ProductRepository {

    insert(product) {
        var connection = new connectionFactory();
        connection.connect();

        var productObj = connection.getMongoose().model( 'Product', productModel );
        var awesome_instance = new productObj ( { name : product.name, quantity : product.quantity } );
        
        return new Promise( (res, rej) => {
            awesome_instance.save( (err) => { 
                if (err) rej(err);
                connection.disconnect();
            });
            res(awesome_instance);
        } );
    };

    findByName(name) {
        var connection = new connectionFactory();
        connection.connect();
        var product = connection.getMongoose().model( 'Product', productModel );

        return new Promise( ( res, rej ) => {
            product.findOne( {  "name" : name }, (err, result) => {
                if (err) rej(err);
                if (result == null) result = { };
                connection.disconnect();
                res(result);
            } );
        } );
    }


    findAll() {
        var connection = new connectionFactory();
        connection.connect();
        var product = connection.getMongoose().model( 'Product', productModel );

        return new Promise( ( res, rej ) => {
            product.find({}, (err, result) => {
                if (err) rej(err);
                if (result == null) result = { };
                connection.disconnect();
                res(result);
            });
        });
    }
    
    deleteById(id) {
        var connection = new connectionFactory();
        connection.connect();
        var product = connection.getMongoose().model( 'Product', productModel );

        return new Promise( ( res, rej ) => {
            product.remove( { "_id" : id }, (err) => {
                if (err) rej(err);
                connection.disconnect();
            });
            res(200);
        });
    }
}

module.exports = () => {
    return ProductRepository;
}