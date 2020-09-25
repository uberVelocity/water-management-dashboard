// backend-auth:4000/api/auth

const router = require('express').Router();
const User = require('../../mongo_models/User');

router.get('/createUser', async (req, res) => {
    console.log('Received request: CREATE USER');
    createUser('RDQ', 'parola', 10).catch(err => console.error(err));
});

router.get('/getUsers', async (req, res) => {
    console.log('Received request: GET USERS');
    getUsers().catch(err => console.error(err));
});

async function getUsers() {
    const users = await User.find();
    console.log(users);
}

async function createUser(username, password, level) {
    const user = new User({
        username : username,
        password : password,
        level : level
    });

    const doc = await user.save();
    console.log(doc);
}

module.exports = router;