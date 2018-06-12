var mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/test';

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

var productSchema = new mongoose.Schema({
    name: String,
    quantity: Number
});

class ProductRepository {

    insert(product) {
        var Product = mongoose.model( 'Product', productSchema );
        var awesome_instance = new Product ( { name : product.name, quantity : product.quantity } );
    
        return new Promise( (res, rej) => {
            awesome_instance.save( (err) => { 
                if (err) rej(err);
            });
            res(awesome_instance);
        } );
    };
}

module.exports = () => {
    return ProductRepository;
}