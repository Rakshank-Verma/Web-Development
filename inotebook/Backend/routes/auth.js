const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')
const JWT_SECRET = 'Harryisagoodboy';

// Create a User using: POST "/api/auth/createuser". Doesn't require Auth
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password').isLength({ min: 8 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Check if user exists already

    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email exists" })
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        //Create a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        })
        // .then(user => res.json(user))
        // .catch(err => res.json({ error: 'Please enter correct credentials' }));
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);

        return res.json({ authToken })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some internal server error occurred")
    }
})

// Authenticate a user using POST: '/api/auth/login'. No login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', "Password can't be blank").exists(),

], async (req, res) => {
    const errors = validationResult(req);

    // if errors exist return status 400
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: 'Please give correct credentials' });
        }

        const passwordCompare = await bcrypt.compare(password, user.password)

        if (!passwordCompare) {
            return res.status(400).json({ error: 'Please give correct credentials' });
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some internal server error occurred")
    }
})


// Gives user details using POST: '/api/auth/getuser'. Login required
router.post('/getuser',fetchuser ,async (req, res) => {

    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select('-password')
        res.send(user);
    
    } catch (error) {
    console.error(error.message);
    res.status(500).send("Some internal server error occurred");
}
})
module.exports = router