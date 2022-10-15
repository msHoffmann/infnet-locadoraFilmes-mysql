'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "People",
      [
        {
          name: "Michel Baes",
          email: "mbaes@baes.com",
          role: "client",
          password: "Mi10190!!123",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Eduarda Blei",
          email: "eduarda@blei.com",
          role: "client",
          password: "DB101190!1239013",
          createdAt: new Date(),
          updatedAt: new Date()
        }, 
        {
          name: "Fernanda Cardoso",
          email: "fernanda@cardoso.com",
          role: "client",
          password: "FC101190!1239013",
          createdAt: new Date(),
          updatedAt: new Date()
        }, 
        {
          name: "Frania Hoffmann",
          email: "frania@hoffmann.com",
          role: "employee",
          password: "12345678!Fr",
          createdAt: new Date(),
          updatedAt: new Date()
        },  
      ]
    )
  },

  async down (queryInterface, Sequelize) {
  }
};