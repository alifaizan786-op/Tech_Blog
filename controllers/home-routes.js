const router = require('express').Router();
const sequelize = require('../config/connection')
const { Post, User, Comment} = require('../models');

router.get('/', (req, res)=>{
    Post.findAll({
        attributes: [
            'id',
            'title',
            'content',
            'date_created'
        ],
        include: [
            {
                model: Comment,
                attributes:['id', 'user_id', 'post_id', 'comment_body'],
                include:{
                    model: User,
                    attributes:['username', 'github']
                }
            },
            {
                model: User,
                attributes: ['username', 'github']
            }
        ]
    })
    .then(dbPostData=> {
        const posts = dbPostData.map(post => post.get({ plain:true }));
        res.render('homepage', {
            posts,
            loggedIn : req.session.loggedIn
        });
    })
    .catch(err=> {
        res.status(500).json(err);
    });
});

router.get('/login', (req,res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup')
});

router.get('/signup', (req,res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup')
});

router.get('/post/:id', (req, res)=>{
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'content',
            'date_created'
        ],
        include: [
            {
                model: Comment,
                attributes:['id', 'user_id', 'post_id', 'comment_body','date_created'],
                include:{
                    model: User,
                    attributes:['username', 'github']
                }
            },
            {
                model: User,
                attributes: ['username', 'github']
            }
        ]
    })
    .then(dbPostData=> {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' })
        }

        //Serialized Data
        const posts = dbPostData.map(post => post.get({ plain:true }));

        // sending data to template
        res.render('singlepost', {
            posts,
            loggedIn : req.session.loggedIn
        });
    })
    .catch(err=> {
        res.status(500).json(err);
    });
});








module.exports = router;