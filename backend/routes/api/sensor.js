const router = require('express').Router();
const { connect } = require('../../middleware/cass');

// GET URL:PORT/api/sensor/
router.get('/', connect, (req, res) => {
    const cassandraClient = res.client;
    const query = 'SELECT * FROM sensor';
    cassandraClient.execute(query, function (err, result) {
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