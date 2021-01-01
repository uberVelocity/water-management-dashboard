import cassandra = require('cassandra-driver');

function cassandraClient() {
  const localDatacenter: string = 'datacenter1';

  const contactPoints = ['cassandra'];
  const loadBalancingPolicy = new cassandra.policies.loadBalancing.DCAwareRoundRobinPolicy(localDatacenter);
  const clientOptions = {
      policies: {
          loadBalancing: loadBalancingPolicy
      },
      contactPoints,
      authProvider: new cassandra.auth.PlainTextAuthProvider('cassandra', 'cassandra'),
      keyspace: 'sensors'
  };
  const client = new cassandra.Client(clientOptions);
  return client;
}

export { cassandraClient }