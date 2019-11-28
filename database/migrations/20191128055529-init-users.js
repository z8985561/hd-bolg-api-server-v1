'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, BOOLEAN ,NOW } = Sequelize;
    await queryInterface.createTable("users", {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_name: {
        type: STRING(30),
        allowNull: false
      },
      user_id: {
        type: INTEGER,
        allowNull: false
      },
      password: {
        type: STRING,
        allowNull: false
      },
      is_admin: {
        type: BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      email: {
        type: STRING,
        allowNull: false
      },
      phone: {
        type: INTEGER,
        allowNull: false
      },
      avatar: STRING,
      nick_name:{
        type: STRING,
        allowNull: false,
        defaultValue: "user"+new Date().getTime()
      },
      created_at:{
        type: DATE,
        defaultValue: NOW
      },
      updated_at:{
        type: DATE,
        defaultValue: NOW
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
