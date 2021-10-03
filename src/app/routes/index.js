const express = require("express");
const router = express.Router();

const BusinessController = require("../controllers/Business");
const ClientsController = require("../controllers/Clients");

router.post("/business/create", BusinessController.createBusiness);
router.post("/client/create", BusinessController.createBusiness);

router.get("/business/show", BusinessController.readBusiness);
router.get("/", ClientsController.readClients);

module.exports = router;
