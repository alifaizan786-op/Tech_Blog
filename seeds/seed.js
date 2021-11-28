const seedUsers = require('./user');
const seedPosts = require('./post');
const seedComments = require('./comment');

const sequelize = require('../config/connection');

const seedAllData = async () => {
    await sequelize.sync({ force: true })
    console.log('\n------------------Database Is Synced------------------\n');

    await seedUsers();
    console.log('\n------------------Users Data Seeded------------------\n');

    await seedPosts();
    console.log('\n------------------Posts Data Seeded------------------\n');

    await seedComments();
    console.log('\n------------------Comments Data Seeded------------------\n');

    process.exit(0);
};

seedAllData();