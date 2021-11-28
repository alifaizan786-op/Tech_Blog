const { Post } = require('../models/Post')

const postData = [
    {
        title: 'Why You Need A Website?',
        content: 'With the way the world is turning into this cyberpunk digital age era, what is a better way to showcase your brand or business than having a strong online presence. When it comes to what type of website or why you need a website, we are not talking about a basic website that you can get for free, you need a well-designed website based off competitive research and audience analysis, a website can do a lot for your business from becoming a platform to make some money or to generate some new leads the benefits of a website are numerous.',
        user_id: '3',
    },
    {
        title: 'Why Digital Marketing Is Important?',
        content: 'What is digital marketing? We see it everyday around us in every instance of society, from the moment we wake to the moment we sleep we are seeing it 24/7. In all honesty if you look up the definition of marketing online it seems vague, “the action or business of promoting and selling products or services, including market research and advertising.” But believe it or not from marketing is intertwined with advertising and sales.',
        user_id: '5',
    },
    {
        title: 'Authentication vs. Authorization',
        content: 'So, what is the difference between authentication and authorization? Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger’s identity has been determined, the second step is verifying any special services the passenger has access to, whether it’s flying first-class or visiting the VIP lounge.',
        user_id: '1',
    },
]

const seedPosts = () => Post.bulkCreate(postsData);

module.exports = seedPosts;