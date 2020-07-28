const Sequelize = require('sequelize');
const sequelize = require('../util/database');


const Specification = sequelize.define('Specification', {
    identifier: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    slug: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT
    },
    isPublic: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
    }
}, {
    // Other model options go here
});

module.exports = Specification;