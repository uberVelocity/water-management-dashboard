// backend-auth:4000/api/auth

const router = require('express').Router();
const jwt_authorization = require('../../middleware/jwt_authorization');
const { User, validateUser } = require('../../mongo_models/User');
const bcrypt = require('bcrypt');

router.get('/currentUser', jwt_authorization, async (req, res) => {
    console.log('Received request: GET CURRENT USER');
    const user = await User.findById(req.user._id).select("-password");
    res.send(user);
});

router.get('/admin', jwt_authorization, async (req, res) => {
    res.status(200).send({'secured_msg': 'secret'});
});

router.post('/registerUser', async (req, res) => {
    console.log('Received request: CREATE USER');

    // Validate request body
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Check if user already exists
    let user = await User.findOne({ email: req.body.email});
    if (user) return res.status(400).send("User already exists!");

    console.log('Info is correct, creating the user');

    // Create a new user and save it
    user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });

    // Hash the password!
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    console.log('User created and stored!');

    // Generate token and send response
    const token = await user.generateAuthToken();
    res.header("Authorization", [token]).send({
        _id: user._id,
        username: user.username,
        email: user.email
    });
    res.end();
    console.log('Token created and sent');
});

module.exports = router;