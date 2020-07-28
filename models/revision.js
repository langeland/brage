const Sequelize = require('sequelize');
const sequelize = require('../util/database');


const Revision = sequelize.define('Revision', {
    identifier: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    specification: {
        type: Sequelize.STRING,
        allowNull: false
    },
    revisionNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    resourceRef: {
        type: Sequelize.STRING,
        allowNull: false
    },
    commit: {
        type: Sequelize.STRING
    },
    version: {
        type: Sequelize.STRING
    },
    releaseName: {
        type: Sequelize.STRING
    },
    environment: {
        type: Sequelize.STRING
    }
}, {
    // Other model options go here
});

module.exports = Revision;