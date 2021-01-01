import { cassandraClient } from '../services/cassandraClient';
import { Request, Response, NextFunction } from 'express';

async function connectCassandra(req: Request, res: Response, next: NextFunction) {
  const client = cassandraClient();
  res.client = client;
  next();
}

export { connectCassandra }