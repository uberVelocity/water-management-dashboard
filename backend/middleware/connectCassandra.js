module.exports = async function connectCassandra(req, res, next) {
    console.log('Middleware: connectCassandra -> init');
    const localDatacenter = 'datacenter1';
    const cassandra = require('cassandra-driver');
    const contactPoints = ['cassandra', 'cassandra', 'cassandra'];
    const loadBalancingPolicy = new cassandra.policies.loadBalancing.DCAwareRoundRobinPolicy(localDatacenter);
    const clientOptions = {
        policies: {
            loadBalancing: loadBalancingPolicy
        },
        contactPoints: contactPoints,
        authProvider: new cassandra.auth.PlainTextAuthProvider('cassandra', 'cassandra'),
        keyspace: 'sensors'
    };
    console.log('Middleware: connectCassandra -> before client creation');
    let cassandraClient = new cassandra.Client(clientOptions);
    console.log('Middleware: connectCassandra -> return');
    res.client = cassandraClient;
    next();
}