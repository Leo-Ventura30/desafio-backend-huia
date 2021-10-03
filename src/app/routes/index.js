const express = require("express");
const router = express.Router();

/* IMPORT CONTROLLERS */
const BusinessController = require("../controllers/Business");
const ClientController = require("../controllers/Client");
const UserController = require("../controllers/User");

/* BUSINESS ROUTES */
router.post("/business/create", BusinessController.createBusiness);
router.get("/business/show", BusinessController.readBusiness);
router.put("/business/update", BusinessController.updateBusiness);
router.delete("/business/delete", BusinessController.deleteBusiness);

/* USER ROUTES */
router.post("/business/create/user", UserController.createUser);
router.get("/business/show/user", UserController.readUser);
router.put("/business/update/user", UserController.updateUser);
router.delete("/business/delete/user", UserController.deleteUser);
router.post("/business/login/user", UserController.loginUser);

/* CLIENT ROUTES */
router.post("/client/create", ClientController.createClient);
router.get("/", ClientController.readClient);

module.exports = router;
