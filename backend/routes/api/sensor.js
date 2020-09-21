const router = require('express').Router();
const { connect } = require('../../middleware/cass');

router.get('/', connect, (req, res) => {
    const cassandraClient = res.client;
    const query = 'SELECT * FROM sensor';
    cassandraClient.execute(query, function (err, res) {
        if (!err) {
            console.log('Good');
            console.log(res);
        } else {
            console.log(err);
        }
    });
    
});





module.exports = router;