'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teams', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
      }, 
      teamName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'team_name'
      }
    }, {
      underscored: true,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('teams')
  }
};
