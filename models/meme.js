'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Meme.belongsTo(models.Whisper, {
        foreignKey: 'whisper_id'
      })
    }
  };
  Meme.init({
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Meme',
    tableName: 'memes'
  });
  return Meme;
};