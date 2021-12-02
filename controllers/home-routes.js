const router = require('express').Router();
const sequelize = require('../config/connection')
const { Post, User, Comment} = require('../models');

router.get('/', (req, res)=>{
    Post.findAll({
        attributes: [
            'id',
            'title',
            'content',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes:['id', 'user_id', 'post_id', 'comment_body', 'created_at'],
                include:{
                    model: User,
                    attributes:['username', 'github']
                }
            },
            {
                model: User,
                attributes: ['username', 'twitter', 'github']
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







module.exports = router;