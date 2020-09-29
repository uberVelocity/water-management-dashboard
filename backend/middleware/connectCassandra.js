const cassandraClient = require('../services/cassandraClient');

module.exports = async function connectCassandra(req, res, next) {
    console.log('connectCassandra middleware!');
    let client = cassandraClient; 
    console.log('Middleware: connectCassandra -> return');
    res.client = client;
    next();
}