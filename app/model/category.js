'use strict';

module.exports = app => {
  const { INTEGER, DATE, STRING, NOW } = app.Sequelize;

  const Category = app.model.define("category", {
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

  return Category;
};