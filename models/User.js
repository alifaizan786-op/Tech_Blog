const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');
const bcrypt = require ('bcrypt');

// creating user table / model

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        //creating id Column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        //creating username Column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        github: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [8]
            }
        }

    },
    {
        hooks:{
            async beforeCreate(newUserData){
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData
            },
            async beforeUpdate(updatedUserData){
                updatedUserData.password = await bcrypt.hash(updatedUserData,10);
                return updatedUserData
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;