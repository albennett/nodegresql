'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('Frienemies', 'projectId',
      Sequelize.Integer
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Frienemies', 'projectId');
  }
};
