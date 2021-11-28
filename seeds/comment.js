const { Comment } = require('../models/Comment')

const commentData = [
    {
        user_id: '2',
        post_id: '1',
        comment_body: 'Never thougt websites are so important'
    },
    {
        user_id: '4',
        post_id: '2',
        comment_body: 'WOW! mind is blown'
    },
    {
        user_id: '6',
        post_id: '1',
        comment_body: '21st Century, am I right ?'
    },
    {
        user_id: '7',
        post_id: '3',
        comment_body: 'This confusion has been messing me a up for a while, glad you cleared it'
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;