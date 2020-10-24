function cassandraClient() {
    console.log('Creating Cassandra Client...');
    const localDatacenter = 'datacenter1';
    const cassandra = require('cassandra-driver');

    const contactPoints = ['cassandra'];
    const loadBalancingPolicy = new cassandra.policies.loadBalancing.DCAwareRoundRobinPolicy(localDatacenter);
    const clientOptions = {
        policies: {
            loadBalancing: loadBalancingPolicy
        },
        contactPoints: contactPoints,
        authProvider: new cassandra.auth.PlainTextAuthProvider('cassandra', 'cassandra'),
        keyspace: 'sensors'
    };
    let cassandraClient = new cassandra.Client(clientOptions);
    console.log('Returning Cassandra Client...');
    return cassandraClient;
}

module.exports = cassandraClient();