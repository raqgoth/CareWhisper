'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Whisper extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Whisper.belongsTo(models.User, {
        foreignKey: 'user_id'
      })
      Whisper.hasMany(models.Meme, {
        foreignKey: 'whisper_id'
      })
    }
  };
  Whisper.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    grateful: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Whisper',
    tableName:'whispers'
  });
  return Whisper;
};