async function getSensorData(cassandraClient) {
    console.log('GET SENSOR DATA FUNCTION');
    const query = 'SELECT * FROM sensor1';
    let data = undefined;
        await new Promise((resolve, reject) => {
            cassandraClient.execute(query, function (err, result) {
                console.log('GET SENSOR DATA: executing query');
                if (!err) {
                    console.log('GET SENSOR DATA: Successful query!');
                    data = result.rows;
                } else {
                    console.log('GET SENSOR DATA: Unsuccessful query!');
                    data = err;
                }
                resolve();
            });
        })
        .then(
            response => {},
            reason => {}
        );
    return data;
}

module.exports.getSensorData = getSensorData;