module.exports = (app) => {

    app.post('/product', (req, res) => {
        var productRepository = new app.app.repository.ProductRepository();
        productRepository
            .insert(req.body)
            .then(res.send({ "status": 200 }))
            .catch((exc) => {
                console.log(exc);
            });
    });

    app.get('/product/', (req, res) => {
        var productRepository = new app.app.repository.ProductRepository();
        productRepository.findAll()
            .then((result) => { res.send(result); })
            .catch((err) => { console.log(err) });
    });

    app.get('/product/:name', (req, res) => {
        var productRepository = new app.app.repository.ProductRepository();
        productRepository.findByName(req.params.name)
            .then((result) => {
                res.send(result);
            }).catch((err) => { console.log(err) });
    });

    app.delete('/product/:id', (req, res) => {
        var productRepository = new app.app.repository.ProductRepository();
        productRepository.deleteById(req.params.id)
            .then((result) => {
                if (result == 200) { res.send({ "status": 200 }) } else { throw new Exception() }
            }).catch((err) => { console.log(err) });

    });
}