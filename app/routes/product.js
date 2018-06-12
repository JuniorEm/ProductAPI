module.exports = (app) => {

    app.post('/product', (req, res) => {
        var productRepository = new app.app.repository.ProductRepository();
        
        productRepository
            .insert(req.body)
            .then(res.send( { "status" : 200 }))
            .catch( (exc) => {
                console.log(exc);        
            });

    });
}