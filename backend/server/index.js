var express = require("express");
var app = express();

const localDatacenter = 'datacenter1';
const cassandra = require('cassandra-driver');
const contactPoints = ['cassandra', 'cassandra', 'cassandra'];
const loadBalancingPolicy = new cassandra.policies.loadBalancing.DCAwareRoundRobinPolicy(localDatacenter);
const clientOptions = {
   policies : {
      loadBalancing : loadBalancingPolicy
   },
   contactPoints: contactPoints,
   authProvider: new cassandra.auth.PlainTextAuthProvider('cassandra', 'cassandra'),
   keyspace:'sensors'
};
let cassandraClient = new cassandra.Client(clientOptions);

var query = 'SELECT * FROM sensor';

cassandraClient.execute(query, function(err, res) {
  if (!err) {
    console.log('Good');
    console.log(res);
  } else {
    console.log(err);
  }
});


