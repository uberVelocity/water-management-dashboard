import cassandra from 'cassandra-driver';

declare global {
  namespace Express {
    interface Response {
      client: cassandra.Client
    }
  }
}