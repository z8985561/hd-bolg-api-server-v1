'use strict';

module.exports = app => {
  const { INTEGER, DATE, STRING, BOOLEAN, NOW } = app.Sequelize;

  const Article = app.model.define("article", {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cid: {
      type: INTEGER,
      allowNull: false
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
    sub_title: {
      type: STRING
    },
    desc: STRING,
    thumb: STRING,
    label: STRING,
    content: {
      type: STRING.BINARY,
      allowNull: false
    },
    is_recommend: {
      type: BOOLEAN,
      defaultValue: false
    },
    is_hot: {
      type: BOOLEAN,
      defaultValue: false
    },
    is_show: {
      type: BOOLEAN,
      defaultValue: false
    },
    pv: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    created_at: {
      type: DATE,
      defaultValue: NOW
    },
    updated_at: {
      type: DATE,
      defaultValue: NOW
    }
  })
  return Article;
};