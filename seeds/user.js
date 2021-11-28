const { User } = require('../models/User')

const userData = [
    {
        username: 'johnny',
        github: 'johnny',
        email: 'johnny@gmail.com',
        password: 'johnny123'
    },
    {
        username: 'martin',
        github: 'martin',
        email: 'martin@gmail.com',
        password: 'martin123'
    },
    {
        username: 'ike',
        github: 'ike',
        email: 'ike@gmail.com',
        password: 'ike123456'
    },
    {
        username: 'mathew',
        github: 'mathew',
        email: 'mathew@gmail.com',
        password: 'mathew123'
    },
    {
        username: 'oswald',
        github: 'oswald',
        email: 'oswald@gmail.com',
        password: 'oswald123'
    },
    {
        username: 'lance',
        github: 'lance',
        email: 'lance@gmail.com',
        password: 'lance123'
    },
    {
        username: 'malcolm',
        github: 'malcolm',
        email: 'malcolm@gmail.com',
        password: 'malcolm123'
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;