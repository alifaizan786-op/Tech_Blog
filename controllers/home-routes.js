const router = require('express').Router();
const sequelize = require('../config/connection')
const {Post, User, Comment} = require('../models');

router.get('/',async (req, res) => {
    try {
        const postData =  await Post.findAll({
            include: [
                {
                  model: User,
                  attributes: ['username', 'github'],
                },
                {
                    model: Comment,
                    attributes: ['user_id', 'post_id', 'comment_body', 'date_created'],
                },
              ],
        });
        console.log(postData)
        const posts = postData.map((post) => post.get({plain: true}));
        console.log(posts)
       
        res.render('homepage', {
            posts,
             loggedIn: req.session.loggedIn
        });

    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup')
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup')
});

router.get('/post/:id', async (req, res) => {
    try {
        const postData =  await Post.findOne({
            where :{ id: req.params.id},
            include: [
                {
                  model: User,
                  attributes: ['username', 'github'],
                },
                {
                    model: Comment,
                    attributes: ['user_id', 'post_id', 'comment_body', 'date_created'],
                },
              ],
         });
         const post = postData.get({ plain: true });
       console.log(post)
        res.render('singlepost', {
            ...post,
             loggedIn: req.session.loggedIn
        });

    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});


module.exports = router;
