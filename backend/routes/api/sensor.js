const router = require('express').Router();
const connectCassandra = require('../../middleware/connectCassandra');


// GET URL:PORT/api/sensor/
router.get('/', connectCassandra, async (req, res) => {
    console.log(`received GET request sensor`);
    const cassandraClient = res.client;
    const query = 'SELECT * FROM ptSensor';
    let data = undefined;
    await new Promise((resolve, reject) => {
        cassandraClient.execute(query, function (err, result) {
            console.log('executing query');
            if (!err) {
                console.log('Successful query!');
                data = result.rows.map(el => {
                    return {'id': el['id'], 'timestamp': el['ts'], 'type': 'pressure',
                    'location': el['location'],
                    'variables': {
                        'temperature': el['temperature'],
                        'pressure': el['pressure']
                    }
                    };
                });
            } else {
                console.log('Unsuccessful query!');
                res.status(500).send(err.message);
                return;
            }
            resolve();
        });
    }).then(
        response => {},
        reason => {}
    );
    res.status(200).json({ data });
});

module.exports = router;