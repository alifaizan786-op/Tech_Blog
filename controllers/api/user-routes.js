const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/signup', async (req, res) => {
    try {
        const userData = await User.create(
            {
                username: req.body.username,
                github: req.body.github,
                email: req.body.email,
                password: req.body.password,
            }
        );
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err)
    }
})


router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.body.username } })

        console.log(req.body.username);
        console.log(req.body.password);

        if (!userData) {
            res.status(400).json({ message: 'user does not exists' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Email/password is incorrect' });
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;


            res.json({
                user: userData, 
                message: 'You are now logged in'
            })
        });
    } catch (err) {
        res.status(404).json(err);
        console.log(err)
    }
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(400).end();
    }
});

module.exports = router;