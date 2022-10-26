const { Router } = require("express");
const route = Router();
const rentsController = require("./controllers/rentsController");
const { authMidEmployee } = require("../People/services/auth.service");

// GET
route.get("/rents", rentsController.getAllRents);
route.get("/rents/:people_id/rents", rentsController.getRentsByPeople);

// POST
// pessoa fez um aluguel (rent)
route.post("/rents/:people_id/movie/:movie_id", rentsController.createRent);

// DELETE
// pessoa devolveu um aluguel (rent)
route.delete(
  "/rents/rent-delete/:id",
  authMidEmployee,
  rentsController.deleteRent
);

module.exports = route;
