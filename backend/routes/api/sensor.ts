import express = require('express');
import { connectCassandra } from '../../middleware/connectCassandra';
import cassandra from 'cassandra-driver';

const router = express.Router();

// GET URL:PORT/api/sensor/
router.get('/', connectCassandra, async (req, res) => {
    const cassandraClient = res.client;
    const query = 'SELECT * FROM ptSensor';
    let data;
    await new Promise<void>((resolve, reject) => {
        cassandraClient.execute(query, (err: Error, result: any) => {
            if (!err) {
                data = result.rows.map(el => {
                    return {'id': el.id, 'timestamp': el.ts, 'type': 'pressure',
                    'location': el.location,
                    'variables': {
                        'temperature': el.temperature,
                        'pressure': el.pressure
                    }
                    };
                });
            } else {
                res.status(500).send(err.message);
                return;
            }
            resolve();
        });
    }).then();
    res.status(200).json({ data });
});

module.exports = router;