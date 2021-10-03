const express = require("express");
const router = express.Router();

/* IMPORT CONTROLLERS */
const BusinessController = require("../controllers/Business");
const ClientController = require("../controllers/Client");

/* BUSINESS ROUTES */
router.post("/business/create", BusinessController.createBusiness);
router.get("/business/show", BusinessController.readBusiness);
router.put("/business/update", BusinessController.updateBusiness);
router.delete("/business/delete", BusinessController.deleteBusiness);

/* CLIENT ROUTES */
router.post("/client/create", ClientController.createClient);
router.get("/", ClientController.readClient);

module.exports = router;
