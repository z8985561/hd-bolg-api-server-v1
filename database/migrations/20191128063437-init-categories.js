'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, NOW } = Sequelize;
    await queryInterface.createTable("categories", {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      sort: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      title: {
        type: STRING,
        allowNull: false,
        unique: true
      },
      desc: STRING,
      thumb: STRING,
      created_at: {
        type: DATE,
        defaultValue: NOW
      },
      updated_at: {
        type: DATE,
        defaultValue: NOW
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('categories');
  }
};
