var server = require('./config/server');

server.listen( 8001, () => {
    console.log("Server listening...");
});