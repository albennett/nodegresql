'use strict';

module.exports = function(sequelize, DataTypes) {
  var Track = sequelize.define('Track', {
      TrackId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Name: DataTypes.STRING,
      AlbumId: DataTypes.INTEGER,
      MediaTypeId: DataTypes.INTEGER,
      GenreId: DataTypes.INTEGER,
      Composer: DataTypes.STRING,
      Milliseconds: DataTypes.INTEGER,
      Bytes: DataTypes.INTEGER,
      UnitPrice: DataTypes.DECIMAL(2, 10),
    }, {
      tableName: 'Track',
      timestamps: false,
      classMethods: {
        associate: function(models) {
          // Track.hasMany(models.Invoice, {
          //   foreignKey: 'TrackId'
          // });
        }
      }
  });

  return Track;
};
