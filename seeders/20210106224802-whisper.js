'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'whispers',
      [
        {
          title: 'firstwhisper',
          content: 'I am happy',
          grateful: 'my family, my dog, my cat',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('whispers', null, {})
  }
}