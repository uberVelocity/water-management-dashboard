const router = require('express').Router();
const connectCassandra = require('../../middleware/connectCassandra');

// GET URL:PORT/api/sensor/
router.get('/', connectCassandra, (req, res) => {
    console.log(`received GET request sensor`);
    const cassandraClient = res.client;
    const query = 'SELECT * FROM sensor';
    cassandraClient.execute(query, function (err, result) {
        console.log('executing query');
        if (!err) {
            console.log('Good');
            console.log(result);
            res.status(200).json({ result });
        } else {
            console.log(err);
            res.status(500).send(err.message);
        }
    });
});

module.exports = router;