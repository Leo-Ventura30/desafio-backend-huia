const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
/* IMPORT CONTROLLERS & MIDDLEWARES */
const BusinessController = require("../controllers/Business");
const ClientController = require("../controllers/Client");
const UserController = require("../controllers/User");
const ProductsController = require("../controllers/Products");

/* MIDDLEWARES DE AUTENTICAÇAO */
router.use("/business", auth);

/* BUSINESS ROUTES */
router.get("/business/show", BusinessController.readBusiness);
router.put("/business/update", BusinessController.updateBusiness);
router.delete("/business/delete", BusinessController.deleteBusiness);

/* USER ROUTES */
router.post("/create/business/user", UserController.createUser);
router.get("/business/show/user", UserController.readUser);
router.put("/business/update/user", UserController.updateUser);
router.delete("/business/delete/user", UserController.deleteUser);
router.post("/login/user/business", UserController.loginUser);

/* PRODUCTS ROUTES*/
router.post("/business/create/product/lot", ProductsController.createProduct);
router.get("/business/show/products", ProductsController.readProduct);

module.exports = router;
